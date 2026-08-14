(() => {
  if (window.projectToolExplorerLoaded) return;
  window.projectToolExplorerLoaded = true;

  const explorerScriptUrl = document.currentScript?.src;

  const matchesNodeId = (node, nodeId) => node.id === nodeId || node.id.startsWith(`flowchart-${nodeId}-`);

  const findNodeGroups = (svg, nodeId) => [...svg.querySelectorAll("g.node")].filter((node) => matchesNodeId(node, nodeId));

  const MOBILE_BREAKPOINT = 640;
  const MOBILE_LABEL_LINE_LENGTH = 16;
  const MOBILE_MIN_DIAGRAM_WIDTH = 430;
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

  const sizeResponsiveSvg = (wrapper, svg) => {
    const naturalWidth = svg.viewBox?.baseVal?.width;
    if (!naturalWidth) return;
    const availableWidth = svg.parentElement?.clientWidth || naturalWidth;
    if (wrapper.dataset.diagramMode !== "mobile") {
      wrapper.style.setProperty("--workflow-svg-width", `${Math.max(availableWidth, naturalWidth)}px`);
      return;
    }
    const readableWidth = Math.min(naturalWidth, Math.max(availableWidth, MOBILE_MIN_DIAGRAM_WIDTH));
    const scale = Math.min(1.1, readableWidth / naturalWidth);
    wrapper.style.setProperty("--workflow-svg-width", `${naturalWidth * scale}px`);
  };

  const prepareResponsiveSource = (wrapper) => {
    const source = wrapper.querySelector("pre > code.language-mermaid");
    if (!source) return;

    if (!wrapper.dataset.desktopDiagram) wrapper.dataset.desktopDiagram = source.textContent;

    const mobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
    source.textContent = mobile
      ? wrapMobileLabels(wrapper.dataset.desktopDiagram.replace(/^flowchart\s+LR\b/m, "flowchart TB"))
      : wrapper.dataset.desktopDiagram;
    wrapper.dataset.diagramMode = mobile ? "mobile" : "desktop";
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
    const label = matchingRows[0].dataset.toolNodeLabel || nodeId;
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
    disableWheelZoom(svg);
    sizeResponsiveSvg(wrapper, svg);

    const rows = [...explorer.querySelectorAll("tbody tr[data-tool-node]")];
    const selection = explorer.querySelector("[data-tool-selection]");
    const status = explorer.querySelector("[data-tool-status]");
    const reset = explorer.querySelector("[data-tool-reset]");
    const tableId = explorer.querySelector("table")?.id;
    const labels = new Map(rows.map((row) => [row.dataset.toolNode, row.dataset.toolNodeLabel]));
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

    if (wiredNodeCount === 0) return false;
    explorer.dataset.toolReady = "true";
    return true;
  };

  const wireAll = () => {
    document.querySelectorAll(".project-tool-workflow").forEach(wireExplorer);
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
      const expectedMode = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches ? "mobile" : "desktop";
      const currentMode = document.querySelector(".project-tool-workflow")?.dataset.diagramMode;
      if (currentMode && currentMode !== expectedMode) {
        window.location.reload();
        return;
      }
      wireAll();
    }, 160);
  });

  const observer = new MutationObserver(wireAll);
  observer.observe(document.documentElement, { childList: true, subtree: true });
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
