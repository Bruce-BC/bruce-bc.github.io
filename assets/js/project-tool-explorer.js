(() => {
  if (window.projectToolExplorerLoaded) return;
  window.projectToolExplorerLoaded = true;

  const explorerScriptUrl = document.currentScript?.src;

  const matchesNodeId = (node, nodeId) => node.id === nodeId || node.id.startsWith(`flowchart-${nodeId}-`);

  const findNodeGroups = (svg, nodeId) => [...svg.querySelectorAll("g.node")].filter((node) => matchesNodeId(node, nodeId));

  const MOBILE_BREAKPOINT = 640;
  const MOBILE_LABEL_LINE_LENGTH = 16;
  const MAX_VISIBLE_TOOL_ICONS = 3;

  const uniqueToolNames = (toolNames) => [...new Set(toolNames.filter(Boolean))];

  const toolNameForRow = (row) => {
    if (row.dataset.toolName) return row.dataset.toolName;
    const linkedName = row.querySelector("td a")?.textContent.trim();
    if (linkedName) return linkedName;
    const toolCell = row.querySelector("td");
    return [...(toolCell?.childNodes || [])].map((child) => child.textContent.trim()).find(Boolean);
  };

  const createToolIcon = (descriptor) => {
    const tile = document.createElement("span");
    tile.className = "project-tool-node__icon";
    tile.dataset.iconId = descriptor.id;
    tile.dataset.iconFit = descriptor.fit || "contain";

    const image = document.createElement("img");
    image.src = descriptor.src;
    image.alt = "";
    image.loading = "eager";
    image.decoding = "async";
    image.className = `project-tool-node__icon-image project-tool-node__icon-image--${descriptor.fit || "contain"}`;
    image.setAttribute("aria-hidden", "true");
    if (descriptor.fallback?.src) {
      image.addEventListener(
        "error",
        () => {
          image.src = descriptor.fallback.src;
          image.className = "project-tool-node__icon-image project-tool-node__icon-image--contain";
        },
        { once: true }
      );
    }
    tile.append(image);
    return tile;
  };

  const decorateNode = (node, nodeId, label, toolNames = []) => {
    const labelRoot = node.querySelector(".nodeLabel");
    if (!labelRoot || !window.projectToolIcons) return;

    const names = uniqueToolNames(toolNames);
    const iconInputs = names.length ? names : [label];
    const descriptors = iconInputs
      .map((name) => window.projectToolIcons.resolve(name, `${nodeId.replaceAll("_", " ")} ${label}`))
      .filter((descriptor, index, all) => all.findIndex(({ id }) => id === descriptor.id) === index);
    const signature = descriptors.map(({ id }) => id).join("|");
    const existing = labelRoot.querySelector(".project-tool-node__icons");
    if (existing?.dataset.iconSignature === signature) return;
    existing?.remove();

    const iconStack = document.createElement("span");
    iconStack.className = "project-tool-node__icons";
    iconStack.dataset.iconSignature = signature;
    iconStack.dataset.iconCount = Math.min(descriptors.length, MAX_VISIBLE_TOOL_ICONS);
    if (descriptors.length === 1) iconStack.dataset.iconFit = descriptors[0].fit || "contain";
    iconStack.title = names.length ? `Tools: ${names.join(", ")}` : descriptors[0].title;
    iconStack.setAttribute("aria-hidden", "true");
    descriptors.slice(0, MAX_VISIBLE_TOOL_ICONS).forEach((descriptor) => {
      iconStack.append(createToolIcon(descriptor));
    });
    if (descriptors.length > MAX_VISIBLE_TOOL_ICONS) {
      const overflow = document.createElement("span");
      overflow.className = "project-tool-node__icon-overflow";
      overflow.textContent = `+${descriptors.length - MAX_VISIBLE_TOOL_ICONS}`;
      iconStack.append(overflow);
    }
    labelRoot.prepend(iconStack);
    node.dataset.toolIcon = names.length ? names.join(", ") : descriptors[0].title;
  };

  const mermaidNodeId = (node) => node.id.replace(/^flowchart-/, "").replace(/-\d+$/, "");

  const wrapMobileLabels = (diagram) => {
    const wrapLabel = (label) => {
      if (label.includes("<br") || label.length <= MOBILE_LABEL_LINE_LENGTH) return label;
      const words = label.trim().split(/\s+/);
      const lines = [];
      let line = "";
      words.forEach((word) => {
        if (line && `${line} ${word}`.length > MOBILE_LABEL_LINE_LENGTH) {
          lines.push(line);
          line = word;
        } else {
          line = line ? `${line} ${word}` : word;
        }
      });
      if (line) lines.push(line);
      return lines.join("<br/>");
    };

    return diagram
      .replace(/(\b[A-Za-z][A-Za-z0-9_]*)\[([^\]\n]+)\]/g, (_, nodeId, label) => `${nodeId}[${wrapLabel(label)}]`)
      .replace(/(\b[A-Za-z][A-Za-z0-9_]*)\{([^}\n]+)\}/g, (_, nodeId, label) => `${nodeId}{${wrapLabel(label)}}`);
  };

  const disableWheelZoom = (svg) => {
    if (!svg.dataset.pageScrollSafe) {
      svg.addEventListener("wheel", (event) => event.stopImmediatePropagation(), { capture: true, passive: true });
      svg.dataset.pageScrollSafe = "true";
    }
    if (typeof d3 !== "undefined") {
      d3.select(svg).on(".zoom", null);
    }
    const zoomWrapper = svg.querySelector(":scope > g:not([class])");
    if (zoomWrapper?.getAttribute("transform")?.includes("scale(")) {
      zoomWrapper.removeAttribute("transform");
    }
  };

  const verticalizeDiagram = (diagram) => {
    return diagram.replace(/^flowchart\s+(LR|RL|BT)\b/m, "flowchart TB").replace(/^(\s*direction\s+)(LR|RL|BT)\b/gm, "$1TB");
  };

  const sizeResponsiveSvg = (wrapper, svg) => {
    wrapper.style.removeProperty("--workflow-svg-width");
    const naturalWidth = svg.viewBox?.baseVal?.width;
    if (naturalWidth) wrapper.style.setProperty("--workflow-svg-render-width", `${Math.ceil(naturalWidth)}px`);
    svg.removeAttribute("width");
    svg.removeAttribute("height");
  };

  const prepareResponsiveSource = (wrapper) => {
    const source = wrapper.querySelector("pre > code.language-mermaid");
    if (!source) return;

    if (!wrapper.dataset.desktopDiagram) wrapper.dataset.desktopDiagram = source.textContent;

    const mobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
    const verticalDiagram = verticalizeDiagram(wrapper.dataset.desktopDiagram);
    source.textContent = mobile ? wrapMobileLabels(verticalDiagram) : verticalDiagram;
    wrapper.dataset.diagramMode = mobile ? "vertical-mobile" : "vertical-desktop";
    ensureDiagramToggle(wrapper);
  };

  const prepareAllResponsiveSources = () => {
    document.querySelectorAll(".project-tool-workflow").forEach(prepareResponsiveSource);
  };

  const setNodeState = (svg, selectedId) => {
    svg.querySelectorAll("g.node").forEach((node) => {
      const selected = selectedId && matchesNodeId(node, selectedId);
      node.classList.toggle("project-tool-node--selected", selected);
      if (node.classList.contains("project-tool-node")) {
        node.setAttribute("aria-pressed", String(Boolean(selected)));
      }
    });
  };

  const setCompactNodeState = (wrapper, selectedId) => {
    wrapper.querySelectorAll("[data-compact-node]").forEach((node) => {
      const selected = Boolean(selectedId && node.dataset.compactNode === selectedId);
      node.classList.toggle("project-tool-workflow__squeezed-node--selected", selected);
      if (node.matches("button")) node.setAttribute("aria-pressed", String(selected));
    });
  };

  const updateToolDetail = (explorer, rows, label = "All workflow steps") => {
    const title = explorer.querySelector("[data-tool-detail-title]");
    const description = explorer.querySelector("[data-tool-detail-description]");
    const tools = explorer.querySelector("[data-tool-detail-tools]");
    const io = explorer.querySelector("[data-tool-detail-io]");
    const status = explorer.querySelector("[data-tool-detail-status]");
    if (!title || !description || !tools || !io || !status) return;

    title.textContent = label;
    if (!rows.length) {
      description.textContent = "Select a workflow box to see its role and evidence.";
      tools.textContent = "—";
      io.textContent = "—";
      status.textContent = "—";
      return;
    }

    const cellText = (row, index) => row.cells[index]?.textContent.trim().replace(/\s+/g, " ") || "—";
    description.textContent = cellText(rows[0], 3);
    tools.textContent = [...new Set(rows.map((row) => toolNameForRow(row)).filter(Boolean))].join(", ") || "—";
    io.textContent = cellText(rows[0], 4);
    status.textContent = cellText(rows[0], 5);
  };

  const nodePosition = (node) => {
    const transform = node.getAttribute("transform") || "";
    const match = transform.match(/translate\(\s*(-?[\d.]+)[,\s]+(-?[\d.]+)\s*\)/);
    return match ? { x: Number(match[1]), y: Number(match[2]) } : { x: 0, y: 0 };
  };

  const nodesByRank = (svg) => {
    const ranked = [...svg.querySelectorAll("g.node")].map((node) => ({ node, ...nodePosition(node) })).sort((a, b) => a.y - b.y || a.x - b.x);
    const rows = [];
    ranked.forEach((item) => {
      const row = rows.find((candidate) => Math.abs(candidate.y - item.y) <= 16);
      if (row) {
        row.items.push(item);
        row.y = (row.y * (row.items.length - 1) + item.y) / row.items.length;
      } else {
        rows.push({ y: item.y, items: [item] });
      }
    });
    return rows.map((row) => row.items.sort((a, b) => a.x - b.x));
  };

  const normalizeHybridRowWidths = (wrapper, svg) => {
    if (wrapper.dataset.workflowId !== "hybrid_profile") return;

    nodesByRank(svg).forEach((row) => {
      if (row.length < 2) return;
      const widths = row.map(({ node }) => {
        const rect = node.querySelector("rect");
        return Number(rect?.getAttribute("width")) || node.getBBox().width;
      });
      const targetWidth = Math.max(...widths);

      row.forEach(({ node }, index) => {
        const delta = (targetWidth - widths[index]) / 2;
        node.querySelectorAll("rect, foreignObject").forEach((shape) => {
          const width = Number(shape.getAttribute("width"));
          const x = Number(shape.getAttribute("x"));
          if (!Number.isFinite(width) || !Number.isFinite(x)) return;
          shape.setAttribute("x", String(x - delta));
          shape.setAttribute("width", String(targetWidth));
        });
      });
    });
  };

  const sizeSqueezedNodes = (wrapper) => {
    const compact = wrapper.querySelector(".project-tool-workflow__squeezed");
    const frame = wrapper.querySelector(".project-tool-workflow__diagram");
    if (!compact || !frame) return;
    const columns = Math.max(1, Number(compact.dataset.maxColumns) || 1);
    const mobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
    const horizontalPadding = mobile ? 18 : 32;
    const gap = mobile ? 7 : 10;
    const available = Math.max(0, frame.clientWidth - horizontalPadding - gap * (columns - 1));
    const nodeWidth = Math.min(240, Math.floor(available / columns));
    compact.style.setProperty("--compact-node-width", `${nodeWidth}px`);
  };

  const buildSqueezedLayout = (wrapper, svg, labels) => {
    const frame = wrapper.querySelector(".project-tool-workflow__diagram");
    if (!frame) return;
    const mobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
    const nodesPerRow = mobile ? 2 : Number.POSITIVE_INFINITY;
    const rows = nodesByRank(svg).flatMap((row) => {
      if (row.length <= nodesPerRow) return [row];
      const chunks = [];
      for (let index = 0; index < row.length; index += nodesPerRow) chunks.push(row.slice(index, index + nodesPerRow));
      return chunks;
    });
    const signature = `${mobile ? "mobile" : "desktop"}:${rows.map((row) => row.map(({ node }) => mermaidNodeId(node)).join(",")).join("|")}`;
    let compact = frame.querySelector(".project-tool-workflow__squeezed");

    if (compact?.dataset.signature === signature) {
      sizeSqueezedNodes(wrapper);
      return;
    }

    compact?.remove();
    compact = document.createElement("div");
    compact.className = "project-tool-workflow__squeezed";
    compact.dataset.signature = signature;
    compact.dataset.maxColumns = Math.max(1, ...rows.map((row) => row.length));
    compact.setAttribute("aria-label", "Squeezed pipeline overview");

    rows.forEach((row) => {
      const rowElement = document.createElement("div");
      rowElement.className = "project-tool-workflow__squeezed-row";
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, var(--compact-node-width))`;

      row.forEach(({ node }) => {
        const nodeId = mermaidNodeId(node);
        const label = labels.get(nodeId) || node.querySelector(".nodeLabel")?.textContent.trim() || "Workflow step";
        const interactive = labels.has(nodeId);
        const card = document.createElement(interactive ? "button" : "div");
        card.className = "project-tool-workflow__squeezed-node";
        card.dataset.compactNode = nodeId;
        if (interactive) {
          card.type = "button";
          card.setAttribute("aria-label", `Show tools for ${label}`);
          card.setAttribute("aria-pressed", "false");
          card.addEventListener("click", () => selectNode(wrapper, nodeId));
        } else {
          card.setAttribute("role", "group");
        }

        const iconSlot = document.createElement("span");
        iconSlot.className = "project-tool-workflow__squeezed-icon-slot";
        iconSlot.setAttribute("aria-hidden", "true");
        const icons = node.querySelector(".project-tool-node__icons")?.cloneNode(true);
        if (icons) iconSlot.append(icons);
        card.append(iconSlot);
        const labelElement = document.createElement("span");
        labelElement.className = "project-tool-workflow__squeezed-label";
        labelElement.textContent = label;
        card.append(labelElement);
        rowElement.append(card);
      });

      compact.append(rowElement);
    });

    frame.insertBefore(compact, frame.querySelector("pre.mermaid"));
    wrapper.dataset.compactReady = "true";
    sizeSqueezedNodes(wrapper);
  };

  const setDiagramExpanded = (wrapper, expanded) => {
    const button = wrapper.querySelector("[data-workflow-toggle]");
    const diagram = wrapper.querySelector("pre.mermaid");
    if (!button) return;
    wrapper.dataset.diagramExpanded = String(expanded);
    if (diagram) {
      diagram.style.position = expanded ? "relative" : "absolute";
      diagram.style.visibility = expanded ? "visible" : "hidden";
      diagram.style.opacity = expanded ? "1" : "0";
      diagram.style.pointerEvents = expanded ? "auto" : "none";
    }
    button.setAttribute("aria-expanded", String(expanded));
    button.setAttribute("aria-label", expanded ? "Collapse pipeline" : "Expand full pipeline");
    button.title = expanded ? "Collapse pipeline" : "Expand full pipeline";
    button.textContent = expanded ? "−" : "+";
  };

  const ensureDiagramToggle = (wrapper) => {
    const diagram = wrapper.querySelector("pre.mermaid");
    if (!diagram) return;

    let frame = diagram.parentElement;
    if (!frame.classList.contains("project-tool-workflow__diagram")) {
      frame = document.createElement("div");
      frame.className = "project-tool-workflow__diagram";
      diagram.before(frame);
      frame.append(diagram);
    }

    if (!diagram.id) {
      const workflowId = wrapper.dataset.workflowId || `workflow-${Math.random().toString(36).slice(2, 9)}`;
      diagram.id = `${workflowId}-diagram`;
    }

    let button = frame.querySelector("[data-workflow-toggle]");
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "project-tool-workflow__toggle";
      button.dataset.workflowToggle = "true";
      button.setAttribute("aria-controls", diagram.id);
      button.addEventListener("click", () => {
        setDiagramExpanded(wrapper, wrapper.dataset.diagramExpanded !== "true");
      });
      frame.append(button);
    }

    if (!wrapper.dataset.diagramExpanded) setDiagramExpanded(wrapper, false);
  };

  const selectNode = (wrapper, nodeId) => {
    const explorer = wrapper.querySelector(".project-tool-explorer");
    const svg = wrapper.querySelector("pre.mermaid svg");
    if (!explorer || !svg) return false;
    disableWheelZoom(svg);
    sizeResponsiveSvg(wrapper, svg);

    const rows = [...explorer.querySelectorAll("tbody tr[data-tool-node]")];
    const matchingRows = rows.filter((row) => row.dataset.toolNode === nodeId);
    if (!matchingRows.length) return false;

    rows.forEach((row) => {
      row.hidden = row.dataset.toolNode !== nodeId;
    });
    setNodeState(svg, nodeId);
    setCompactNodeState(wrapper, nodeId);
    const label = matchingRows[0].dataset.toolNodeLabel || nodeId;
    updateToolDetail(explorer, matchingRows, label);
    explorer.querySelector("[data-tool-selection]").textContent = label;
    explorer.querySelector("[data-tool-status]").textContent = `Showing ${matchingRows.length} tool entries for ${label}.`;
    explorer.querySelector("[data-tool-reset]").hidden = false;
    return true;
  };

  const nodeIdForGroup = (wrapper, node) => {
    const nodeIds = new Set([...wrapper.querySelectorAll("tbody tr[data-tool-node]")].map((row) => row.dataset.toolNode));
    return [...nodeIds].find((nodeId) => matchesNodeId(node, nodeId));
  };

  const wireExplorer = (wrapper) => {
    const explorer = wrapper.querySelector(".project-tool-explorer");
    const svg = wrapper.querySelector("pre.mermaid svg");
    if (!explorer || !svg) return false;
    ensureDiagramToggle(wrapper);
    disableWheelZoom(svg);
    sizeResponsiveSvg(wrapper, svg);

    const rows = [...explorer.querySelectorAll("tbody tr[data-tool-node]")];
    const selection = explorer.querySelector("[data-tool-selection]");
    const status = explorer.querySelector("[data-tool-status]");
    const reset = explorer.querySelector("[data-tool-reset]");
    const tableId = explorer.querySelector("table")?.id;
    const labels = new Map(rows.map((row) => [row.dataset.toolNode, row.dataset.toolNodeLabel]));
    if (!explorer.dataset.detailReady) {
      updateToolDetail(explorer, [], "All workflow steps");
      explorer.dataset.detailReady = "true";
    }
    const toolsByNode = new Map();
    rows.forEach((row) => {
      const current = toolsByNode.get(row.dataset.toolNode) || [];
      const toolName = toolNameForRow(row);
      if (toolName && !current.includes(toolName)) current.push(toolName);
      toolsByNode.set(row.dataset.toolNode, current);
    });

    svg.querySelectorAll("g.node").forEach((node) => {
      const label = node.querySelector(".nodeLabel")?.textContent.trim() || "Workflow step";
      const nodeId = mermaidNodeId(node);
      decorateNode(node, nodeId, label, toolsByNode.get(nodeId) || []);
    });

    const showAll = () => {
      rows.forEach((row) => {
        row.hidden = false;
      });
      setNodeState(svg, null);
      setCompactNodeState(wrapper, null);
      updateToolDetail(explorer, [], "All workflow steps");
      selection.textContent = "All workflow steps";
      status.textContent = `Showing all ${rows.length} tool entries.`;
      reset.hidden = true;
    };

    if (!reset.dataset.toolBound) {
      reset.addEventListener("click", showAll);
      reset.dataset.toolBound = "true";
    }

    let wiredNodeCount = 0;
    labels.forEach((label, nodeId) => {
      findNodeGroups(svg, nodeId).forEach((node) => {
        wiredNodeCount += 1;
        node.dataset.toolNode = nodeId;
        node.classList.add("project-tool-node");
        const toolNames = toolsByNode.get(nodeId) || [];
        decorateNode(node, nodeId, label, toolNames);
        if (node.dataset.toolBound) return;
        node.dataset.toolBound = "true";
        node.setAttribute("role", "button");
        node.setAttribute("tabindex", "0");
        node.setAttribute("aria-controls", tableId);
        node.setAttribute("aria-pressed", "false");
        const toolDescription = toolNames.length ? `: ${toolNames.join(", ")}` : "";
        node.setAttribute("aria-label", `Show tools for ${label}${toolDescription}`);
      });
    });

    normalizeHybridRowWidths(wrapper, svg);

    if (wiredNodeCount === 0) return false;
    buildSqueezedLayout(wrapper, svg, labels);
    explorer.dataset.toolReady = "true";
    return true;
  };

  let observer;
  const observeWorkflowMutations = () => {
    observer?.observe(document.documentElement, { childList: true, subtree: true });
  };

  const wireAll = () => {
    observer?.disconnect();
    try {
      document.querySelectorAll(".project-tool-workflow").forEach(wireExplorer);
    } finally {
      observeWorkflowMutations();
    }
  };

  const ensureIconRegistry = () => {
    if (window.projectToolIcons || !explorerScriptUrl) return;
    const registryUrl = explorerScriptUrl.replace("project-tool-explorer.js", "project-tool-icons.js");
    if (document.querySelector(`script[src="${registryUrl}"]`)) return;
    const script = document.createElement("script");
    script.src = registryUrl;
    script.addEventListener("load", wireAll, { once: true });
    document.head.append(script);
  };

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const expectedMode = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches ? "vertical-mobile" : "vertical-desktop";
      const currentMode = document.querySelector(".project-tool-workflow")?.dataset.diagramMode;
      if (currentMode && currentMode !== expectedMode) {
        window.location.reload();
        return;
      }
      wireAll();
    }, 160);
  });

  observer = new MutationObserver(wireAll);
  document.addEventListener("click", (event) => {
    const node = event.target.closest?.("g.node");
    const wrapper = node?.closest(".project-tool-workflow");
    if (node && wrapper) {
      const nodeId = nodeIdForGroup(wrapper, node);
      if (nodeId) {
        node.classList.add("project-tool-node");
        node.dataset.toolNode = nodeId;
        selectNode(wrapper, nodeId);
      }
    }
    if (event.target.closest?.("#light-toggle")) {
      setTimeout(wireAll, 250);
      setTimeout(wireAll, 1000);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const node = event.target.closest?.("g.node");
    const wrapper = node?.closest(".project-tool-workflow");
    if (!node || !wrapper) return;
    const nodeId = nodeIdForGroup(wrapper, node);
    if (!nodeId) return;
    event.preventDefault();
    selectNode(wrapper, nodeId);
  });
  document.addEventListener("DOMContentLoaded", wireAll);
  window.addEventListener("load", wireAll);
  window.addEventListener("load", () => {
    const initialPolling = setInterval(wireAll, 250);
    setTimeout(() => clearInterval(initialPolling), 5000);
  });
  prepareAllResponsiveSources();
  ensureIconRegistry();
  wireAll();
})();
