(() => {
  if (window.projectToolExplorerLoaded) return;
  window.projectToolExplorerLoaded = true;

  const matchesNodeId = (node, nodeId) => node.id === nodeId || node.id.startsWith(`flowchart-${nodeId}-`);

  const findNodeGroups = (svg, nodeId) => [...svg.querySelectorAll("g.node")].filter((node) => matchesNodeId(node, nodeId));

  const MOBILE_BREAKPOINT = 640;

  const WORKFLOW_ICONS = [
    {
      icon: "fa-solid fa-file-export",
      label: "Output",
      pattern: /(report|deliverable|export|package|publication|patent|output|candidate region|hypotheses)/,
    },
    {
      icon: "fa-solid fa-circle-check",
      label: "Quality and validation",
      pattern: /(quality|\bqc\b|review|validation|confidence|checkpoint|specificity|sensitivity|consistency)/,
    },
    {
      icon: "fa-solid fa-dna",
      label: "Sequence and genome analysis",
      pattern:
        /(genome|sequence|assembly|annotation|primer|marker|denois|taxonomy|phylogen|termini|packaging|amr|virulence|locus|kl-type|depolymerase)/,
    },
    {
      icon: "fa-solid fa-shapes",
      label: "Structure and design",
      pattern: /(structure|protein|compatibility|design|domain swap|module replacement|tandem addition|construction)/,
    },
    {
      icon: "fa-solid fa-database",
      label: "Database and reference",
      pattern: /(database|reference|atlas|curation|public sequences|evidence table)/,
    },
    {
      icon: "fa-solid fa-microscope",
      label: "Experiment and biological evaluation",
      pattern: /(wet-lab|experimental|biological|matrix-specific|assay|cellular|molecular|organism|host|phage receptor|surface variation)/,
    },
    {
      icon: "fa-solid fa-brain",
      label: "Modeling and inference",
      pattern: /(model|inference|virtual-cell|cell-state|cell-composition|representation|feature|score|prediction|lifestyle)/,
    },
    {
      icon: "fa-solid fa-gears",
      label: "Workflow processing",
      pattern: /(workflow|orchestration|execution|preprocess|harmonization|alignment|trimming|filtering|polishing|import|isolation)/,
    },
    {
      icon: "fa-solid fa-chart-line",
      label: "Measurement and interpretation",
      pattern: /(depth|coverage|diversity|interpretation|comparison|context|performance|ranked|evaluation|analysis)/,
    },
    {
      icon: "fa-solid fa-file-arrow-down",
      label: "Input",
      pattern: /(reads|fastq|input|metadata|profiles|data|request|question|target|project communications)/,
    },
  ];

  const iconForNode = (nodeId, label) => {
    const searchable = `${nodeId.replaceAll("_", " ")} ${label}`.toLowerCase();
    return (
      WORKFLOW_ICONS.find(({ pattern }) => pattern.test(searchable)) || {
        icon: "fa-solid fa-diagram-project",
        label: "Workflow step",
      }
    );
  };

  const decorateNode = (node, nodeId, label) => {
    const labelRoot = node.querySelector(".nodeLabel");
    if (!labelRoot || labelRoot.querySelector(".project-tool-node__icon")) return;

    const { icon, label: iconLabel } = iconForNode(nodeId, label);
    const iconElement = document.createElement("i");
    iconElement.className = `${icon} project-tool-node__icon`;
    iconElement.setAttribute("aria-hidden", "true");
    iconElement.title = iconLabel;
    labelRoot.prepend(iconElement);
    node.dataset.toolIcon = iconLabel;
  };

  const mermaidNodeId = (node) => node.id.replace(/^flowchart-/, "").replace(/-\d+$/, "");

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

  const sizeResponsiveSvg = (wrapper, svg) => {
    if (wrapper.dataset.diagramMode !== "mobile") return;
    const naturalWidth = svg.viewBox?.baseVal?.width;
    if (!naturalWidth) return;
    const availableWidth = svg.parentElement?.clientWidth || naturalWidth;
    const scale = Math.min(1.1, availableWidth / naturalWidth);
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

    svg.querySelectorAll("g.node").forEach((node) => {
      const label = node.querySelector(".nodeLabel")?.textContent.trim() || "Workflow step";
      decorateNode(node, mermaidNodeId(node), label);
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
        decorateNode(node, nodeId, label);
        if (node.dataset.toolBound) return;
        node.dataset.toolBound = "true";
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
  wireAll();
})();
