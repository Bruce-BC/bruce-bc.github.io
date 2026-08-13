(() => {
  if (window.projectToolExplorerLoaded) return;
  window.projectToolExplorerLoaded = true;

  const matchesNodeId = (node, nodeId) => node.id === nodeId || node.id.startsWith(`flowchart-${nodeId}-`);

  const findNodeGroups = (svg, nodeId) => [...svg.querySelectorAll("g.node")].filter((node) => matchesNodeId(node, nodeId));

  const MOBILE_BREAKPOINT = 640;

  const wrapMobileLabels = (diagram) => {
    const wrapLabel = (label) => {
      if (label.includes("<br") || label.length <= 22) return label;
      const words = label.trim().split(/\s+/);
      const lines = [];
      let line = "";
      words.forEach((word) => {
        if (line && `${line} ${word}`.length > 22) {
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

    const rows = [...explorer.querySelectorAll("tbody tr[data-tool-node]")];
    const selection = explorer.querySelector("[data-tool-selection]");
    const status = explorer.querySelector("[data-tool-status]");
    const reset = explorer.querySelector("[data-tool-reset]");
    const tableId = explorer.querySelector("table")?.id;
    const labels = new Map(rows.map((row) => [row.dataset.toolNode, row.dataset.toolNodeLabel]));

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
        if (node.dataset.toolBound) return;
        node.dataset.toolBound = "true";
        node.dataset.toolNode = nodeId;
        node.classList.add("project-tool-node");
        node.setAttribute("role", "button");
        node.setAttribute("tabindex", "0");
        node.setAttribute("aria-controls", tableId);
        node.setAttribute("aria-pressed", "false");
        node.setAttribute("aria-label", `Show tools for ${label}`);
      });
    });

    if (wiredNodeCount === 0) return false;
    explorer.dataset.toolReady = "true";
    return true;
  };

  const wireAll = () => {
    document.querySelectorAll(".project-tool-workflow").forEach(wireExplorer);
  };

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
  wireAll();
})();
