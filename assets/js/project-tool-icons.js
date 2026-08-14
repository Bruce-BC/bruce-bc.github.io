(() => {
  if (window.projectToolIcons) return;

  const escapeXml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

  const MOTIFS = {
    alignment: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2">
        <path d="M5 8h17M8 12h17M5 16h17" opacity=".72"/>
        <path d="M8 8v8M15 8v8M22 8v8" stroke-dasharray="1.2 2.2"/>
      </g>`,
    assembly: `
      <g fill="none" stroke="#fff" stroke-width="2">
        <circle cx="7" cy="9" r="2.2"/><circle cx="15" cy="6" r="2.2"/><circle cx="23" cy="10" r="2.2"/>
        <circle cx="11" cy="18" r="2.2"/><circle cx="21" cy="18" r="2.2"/>
        <path d="m9 8 4-1m4 0 4 2m-12 2 2 5m3-9-2 9m11-4-2 4m-8 2h6"/>
      </g>`,
    cell: `
      <g fill="none" stroke="#fff" stroke-width="1.8">
        <circle cx="9" cy="10" r="4.5"/><circle cx="20" cy="8" r="3.5"/><circle cx="18" cy="18" r="5"/>
        <circle cx="9" cy="10" r="1.2" fill="#fff"/><circle cx="20" cy="8" r="1" fill="#fff"/><circle cx="18" cy="18" r="1.4" fill="#fff"/>
      </g>`,
    container: `
      <g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="1.8">
        <path d="m15 4 10 5-10 5L5 9l10-5Z"/><path d="M5 9v10l10 5 10-5V9M15 14v10"/>
      </g>`,
    database: `
      <g fill="none" stroke="#fff" stroke-width="1.8">
        <ellipse cx="15" cy="7" rx="9" ry="3.5"/><path d="M6 7v11c0 2 4 3.5 9 3.5s9-1.5 9-3.5V7M6 12c0 2 4 3.5 9 3.5s9-1.5 9-3.5"/>
      </g>`,
    dna: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2">
        <path d="M7 4c0 7 16 6 16 14 0 4-3 6-3 6M23 4c0 7-16 6-16 14 0 4 3 6 3 6"/>
        <path d="m9 7 12 1M8 12l14 1M8 17l13 1" opacity=".72"/>
      </g>`,
    experiment: `
      <g fill="none" stroke="#fff" stroke-width="1.8">
        <path d="M9 5h12v4l4 12H5L9 9V5Z"/><path d="M8 16h14"/>
        <circle cx="11" cy="19" r="1" fill="#fff"/><circle cx="16" cy="18" r="1" fill="#fff"/><circle cx="20" cy="20" r="1" fill="#fff"/>
      </g>`,
    phage: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8">
        <path d="m15 4 5 3v6l-5 3-5-3V7l5-3Z"/><path d="M15 16v7m-3-3h6m-6 3-4 3m7-3v4m3-4 4 3"/>
      </g>`,
    polish: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.8">
        <path d="M5 18c5-8 14 5 21-5"/><path d="m20 5 1.2 2.8L24 9l-2.8 1.2L20 13l-1.2-2.8L16 9l2.8-1.2L20 5Z"/>
        <path d="m9 7 .8 1.8 1.8.8-1.8.8L9 12l-.8-1.6-1.8-.8 1.8-.8L9 7Z"/>
      </g>`,
    protein: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2">
        <path d="M5 18c3-11 7 7 11-5s7 7 10-3"/>
        <circle cx="5" cy="18" r="1.7" fill="#fff"/><circle cx="16" cy="13" r="1.7" fill="#fff"/><circle cx="26" cy="10" r="1.7" fill="#fff"/>
      </g>`,
    qc: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M5 21V8m0 13h20M9 18v-5m5 5V9m5 9v-8" opacity=".72"/>
        <path d="m18 6 3 3 5-6"/>
      </g>`,
    reads: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2">
        <path d="M4 8c4-5 7 5 11 0s7 5 11 0M4 17c4-5 7 5 11 0s7 5 11 0"/>
        <path d="M7 10v4m6-4v4m6-4v4m5-4v4" opacity=".72"/>
      </g>`,
    report: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8">
        <path d="M7 4h13l5 5v16H7V4Z"/><path d="M20 4v5h5M11 20v-4m4 4v-8m4 8v-6"/>
      </g>`,
    taxonomy: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.8">
        <path d="M15 23V7m0 5-7-5m7 9 8-6m-8 1 7 7"/>
        <circle cx="15" cy="5" r="2" fill="#fff"/><circle cx="7" cy="7" r="2" fill="#fff"/><circle cx="23" cy="10" r="2" fill="#fff"/><circle cx="22" cy="19" r="2" fill="#fff"/>
      </g>`,
    trim: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.8">
        <circle cx="9" cy="19" r="3"/><circle cx="17" cy="19" r="3"/><path d="m11 17 12-9M15 17 7 9m0 0h16"/>
      </g>`,
    workflow: `
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.8">
        <rect x="4" y="5" width="8" height="6" rx="1.5"/><rect x="18" y="5" width="8" height="6" rx="1.5"/><rect x="11" y="19" width="8" height="6" rx="1.5"/>
        <path d="M8 11v4h7v4m7-8v4h-7"/>
      </g>`,
  };

  const customIcon = (title, motif, mark, accent) => {
    const safeMark = escapeXml(mark.slice(0, 3).toUpperCase());
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="${accent}"/>${MOTIFS[motif] || MOTIFS.workflow}<rect x="18" y="21" width="13" height="10" rx="4" fill="#fff" stroke="${accent}"/><text x="24.5" y="28" fill="${accent}" font-family="Arial,sans-serif" font-size="5.5" font-weight="700" text-anchor="middle">${safeMark}</text></svg>`;
    return {
      id: `${motif}-${safeMark.toLowerCase()}`,
      title,
      src: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
      fit: "contain",
    };
  };

  const ARTWORKS = {
    flye: `
      <g stroke="#312e81" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
        <ellipse cx="23" cy="23" rx="16" ry="11" fill="#c4b5fd"/><ellipse cx="41" cy="23" rx="16" ry="11" fill="#ddd6fe"/>
        <path d="M18 18 27 27m-12-2 16-7m4 9 13-9m-16 1 17 7" fill="none" opacity=".75"/>
        <ellipse cx="32" cy="34" rx="7" ry="17" fill="#4f46e5"/><circle cx="32" cy="14" r="6" fill="#111827"/>
        <path d="m27 47-8 10m18-10 8 10M27 11l-7-6m17 6 7-6" fill="none"/>
      </g>`,
    spades: `
      <path d="M32 5C25 15 10 20 10 34c0 9 11 14 18 7-1 8-4 13-10 17h28c-6-4-9-9-10-17 7 7 18 2 18-7C54 20 39 15 32 5Z" fill="#2d8fd5" stroke="#075985" stroke-linejoin="round" stroke-width="2.5"/>
      <path d="M25 26c5-5 10 5 15 0M23 33c6-5 12 5 18 0" fill="none" stroke="#dbeafe" stroke-linecap="round" stroke-width="2"/>`,
    kraken: `
      <g fill="none" stroke="#6d28d9" stroke-linecap="round" stroke-width="5">
        <path d="M22 31v15c0 8-10 8-10 1m18-16v19c0 8-10 8-10 1m22-20v15c0 8 10 8 10 1m-18-16v19c0 8 10 8 10 1"/>
      </g>
      <path d="M17 31C17 14 24 7 32 7s15 7 15 24Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="2.5"/><circle cx="26" cy="22" r="3" fill="#fff"/><circle cx="38" cy="22" r="3" fill="#fff"/><circle cx="26" cy="22" r="1.3"/><circle cx="38" cy="22" r="1.3"/>`,
    nanofilt: `
      <path d="M5 14c8-9 12 9 20 0s12 9 20 0 10 4 14 0" fill="none" stroke="#0ea5e9" stroke-linecap="round" stroke-width="3"/>
      <path d="M17 22h30L37 37v15l-10 5V37Z" fill="#f59e0b" stroke="#9a3412" stroke-linejoin="round" stroke-width="2.5"/>
      <path d="M24 30h16" stroke="#fff" stroke-dasharray="3 3" stroke-width="2"/>`,
    nanoplot: `
      <path d="M9 9v45h47" fill="none" stroke="#334155" stroke-linecap="round" stroke-width="3"/>
      <path d="M12 44c8-20 13 8 21-12s12 8 21-15" fill="none" stroke="#0ea5e9" stroke-linecap="round" stroke-width="4"/>
      <circle cx="20" cy="35" r="3" fill="#f59e0b"/><circle cx="33" cy="32" r="3" fill="#f59e0b"/><circle cx="48" cy="25" r="3" fill="#f59e0b"/>`,
    bwa: `
      <g stroke="#2563eb" stroke-linecap="round" stroke-width="3"><path d="M7 16h42M15 25h42M7 34h42M15 43h42"/><path d="M18 16v27m14-27v27m14-27v27" stroke="#93c5fd" stroke-dasharray="2 5"/></g>
      <path d="m50 11 8 5-8 5" fill="none" stroke="#ef4444" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>`,
    samtools: `
      <g fill="none" stroke="#475569" stroke-linecap="round" stroke-width="3"><path d="M8 17h31M8 25h38M8 33h27M8 41h40"/><path d="m43 12-8 8 9 9 8-8c3 8-5 15-12 11L24 48l-8-8 16-16c-4-8 4-15 11-12Z" fill="#cbd5e1" stroke-linejoin="round"/></g>`,
    minimap: `
      <path d="m8 15 14-7 20 7 14-7v41l-14 7-20-7-14 7Z" fill="#dcfce7" stroke="#047857" stroke-linejoin="round" stroke-width="2.5"/>
      <path d="M22 8v41m20-34v41M12 40c12-25 28 12 40-15" fill="none" stroke="#0f766e" stroke-linecap="round" stroke-width="3"/>`,
    blast: `
      <path d="M8 25c7-9 12 9 19 0s12 9 19 0" fill="none" stroke="#2563eb" stroke-linecap="round" stroke-width="4"/>
      <circle cx="34" cy="31" r="15" fill="none" stroke="#f59e0b" stroke-width="4"/><path d="m45 42 12 12" stroke="#92400e" stroke-linecap="round" stroke-width="6"/>`,
    pilon: `
      <circle cx="28" cy="33" r="20" fill="none" stroke="#7c3aed" stroke-dasharray="13 4" stroke-width="6"/>
      <path d="m45 7 2.5 7L55 17l-7.5 3L45 27l-3-7-7-3 7-3Z" fill="#facc15" stroke="#a16207" stroke-linejoin="round" stroke-width="2"/><path d="M18 34c6-8 13 8 20 0" fill="none" stroke="#a78bfa" stroke-width="3"/>`,
    prokka: `
      <g stroke="#713f12" stroke-linejoin="round" stroke-width="2.5"><path d="M8 38c2-16 12-25 29-23 13 2 18 10 16 21-2 9-12 14-25 13-9-1-16-4-20-11Z" fill="#a16207"/><path d="M15 23c8-6 23-5 31 4-8 0-16 3-20 13-4-9-7-13-11-17Z" fill="#d6a15d"/><path d="m17 25 6 16m2-22 4 19m5-19 1 16m7-12-2 13" fill="none"/><path d="M52 35c7-3 9 2 5 6l-6 4M11 38 4 47" fill="none" stroke-linecap="round"/><circle cx="49" cy="29" r="1.5"/></g>`,
    abricate: `
      <circle cx="32" cy="32" r="25" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/><g fill="#fff" stroke="#ef4444" stroke-width="2"><circle cx="23" cy="23" r="6"/><circle cx="41" cy="24" r="5"/><circle cx="31" cy="41" r="7"/></g><g fill="#991b1b"><circle cx="15" cy="38" r="2"/><circle cx="45" cy="42" r="2"/><circle cx="35" cy="14" r="2"/></g>`,
    rast: `
      <path d="M8 18c8-10 13 10 21 0s13 10 27 0M8 40c8-10 13 10 21 0s13 10 27 0" fill="none" stroke="#2563eb" stroke-linecap="round" stroke-width="3"/><g fill="#f59e0b"><rect x="12" y="25" width="11" height="7" rx="2"/><rect x="27" y="25" width="15" height="7" rx="2"/><rect x="46" y="25" width="9" height="7" rx="2"/></g>`,
    cgview: `
      <g fill="none" stroke-width="6"><circle cx="32" cy="32" r="24" stroke="#cbd5e1"/><path d="M32 8a24 24 0 0 1 23 17" stroke="#0ea5e9"/><path d="M55 25a24 24 0 0 1-9 25" stroke="#22c55e"/><path d="M46 50a24 24 0 0 1-27 1" stroke="#f59e0b"/><path d="M19 51A24 24 0 0 1 9 27" stroke="#ef4444"/></g><path d="M32 17v15l12 7" fill="none" stroke="#475569" stroke-linecap="round" stroke-width="3"/>`,
    checkv: `
      <g fill="none" stroke="#0e7490" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="m25 8 9 5v11l-9 5-9-5V13Z"/><path d="M25 29v14m-6-8h12m-12 8-7 8m13-8v10m6-10 7 8"/></g><path d="m34 36 6 6 13-16" fill="none" stroke="#22c55e" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>`,
    bacphlip: `
      <path d="m25 8 9 5v11l-9 5-9-5V13Z" fill="#c4b5fd" stroke="#4338ca" stroke-width="2.5"/><path d="M25 29v15m-6-8h12m-12 8-6 8m12-8v10m6-10 6 8" fill="none" stroke="#4338ca" stroke-linecap="round" stroke-width="2.5"/><path d="M46 16a18 18 0 0 1 2 27m0 0-1-9m1 9-9-1M15 48a18 18 0 0 1-2-27m0 0 1 9m-1-9 9 1" fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>`,
    phageterm: `
      <path d="m24 7 10 6v12l-10 6-10-6V13Z" fill="#99f6e4" stroke="#0f766e" stroke-width="2.5"/><path d="M24 31v18m-7-10h14m-14 10-7 7m14-7v9m7-9 7 7" fill="none" stroke="#0f766e" stroke-linecap="round" stroke-width="2.5"/><path d="M43 13v22m10-22v22" stroke="#ef4444" stroke-dasharray="4 3" stroke-width="3"/>`,
    foldseek: `
      <path d="M7 39c8-25 16 15 24-10s14 12 22-7" fill="none" stroke="#c026d3" stroke-linecap="round" stroke-width="5"/><circle cx="39" cy="38" r="13" fill="#fff" fill-opacity=".78" stroke="#7e22ce" stroke-width="3"/><path d="m48 47 10 10" stroke="#7e22ce" stroke-linecap="round" stroke-width="5"/>`,
    prostt5: `
      <path d="M6 37c8-24 15 14 23-9s13 11 21-6" fill="none" stroke="#9333ea" stroke-linecap="round" stroke-width="5"/><text x="44" y="53" fill="#581c87" font-family="Arial,sans-serif" font-size="25" font-weight="800">5</text>`,
    dposfinder: `
      <path d="m21 8 9 5v10l-9 5-9-5V13Z" fill="#fbcfe8" stroke="#be185d" stroke-width="2.5"/><path d="M21 28v15m-5-7h10m-10 7-7 9m12-9v11m5-11 7 9" fill="none" stroke="#be185d" stroke-linecap="round" stroke-width="2.5"/><circle cx="42" cy="35" r="12" fill="#fff" fill-opacity=".75" stroke="#9d174d" stroke-width="3"/><path d="m50 44 8 8" stroke="#9d174d" stroke-linecap="round" stroke-width="5"/>`,
    deposcope: `
      <path d="M15 11h9l7 19-8 4-8-23Z" fill="#f9a8d4" stroke="#9d174d" stroke-width="2.5"/><path d="m28 31 11 12m-20-3 18-7m2 10c9-3 15 2 17 9H27c2-5 6-8 12-9Z" fill="#fce7f3" stroke="#9d174d" stroke-linejoin="round" stroke-width="3"/><circle cx="19" cy="9" r="5" fill="#fff" stroke="#9d174d" stroke-width="2.5"/>`,
    mash: `
      <path d="M8 15c8-10 13 10 21 0s13 10 27 0M8 44c8-10 13 10 21 0s13 10 27 0" fill="none" stroke="#0369a1" stroke-linecap="round" stroke-width="3"/><g fill="#f59e0b"><rect x="12" y="25" width="5" height="10" rx="1"/><rect x="21" y="22" width="5" height="16" rx="1"/><rect x="30" y="27" width="5" height="7" rx="1"/><rect x="39" y="20" width="5" height="19" rx="1"/><rect x="48" y="24" width="5" height="12" rx="1"/></g>`,
    trimmomatic: `
      <g fill="none" stroke-linecap="round">
        <path d="M6 18h50M6 46h50" stroke="#93c5fd" stroke-width="3"/>
        <path d="M9 13v10m8-10v10m8-10v10m8-10v10M9 41v10m8-10v10m8-10v10m8-10v10" stroke="#2563eb" stroke-width="2"/>
        <path d="M45 18h12M45 46h12" stroke="#ef4444" stroke-dasharray="3 3" stroke-width="4"/>
        <path d="m46 30 12-13M46 34l12 13" stroke="#c2410c" stroke-width="3"/>
      </g>
      <circle cx="42" cy="27" r="5" fill="#fdba74" stroke="#9a3412" stroke-width="2"/><circle cx="42" cy="37" r="5" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>`,
    phold: `
      <g fill="none" stroke="#0f766e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
        <path d="m18 7 9 5v11l-9 5-9-5V12Z" fill="#99f6e4"/><path d="M18 28v14m-6-7h12m-12 7-6 8m12-8v10m6-10 6 8"/>
      </g>
      <path d="M30 45c5-28 10 13 16-10s8 10 13-8" fill="none" stroke="#c026d3" stroke-linecap="round" stroke-width="5"/>
      <path d="m48 8 2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5Z" fill="#facc15" stroke="#a16207" stroke-linejoin="round" stroke-width="1.8"/>`,
    phatyp: `
      <path d="m32 6 9 5v11l-9 5-9-5V11Z" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2.5"/>
      <path d="M32 27v8m0 0-14 8m14-8 14 8" fill="none" stroke="#64748b" stroke-linecap="round" stroke-width="3"/>
      <path d="m10 43 6-2 3-6 3 6 6 2-6 3-3 7-3-7Z" fill="#fb7185" stroke="#be123c" stroke-linejoin="round" stroke-width="2"/>
      <circle cx="47" cy="46" r="10" fill="none" stroke="#0d9488" stroke-width="4"/><path d="M42 46h10m-5-5v10" stroke="#0d9488" stroke-linecap="round" stroke-width="2.5"/>`,
    phagcn: `
      <g fill="none" stroke="#64748b" stroke-width="2.5"><path d="M32 31 12 15m20 16 21-17M32 31 10 48m22-17 22 18"/></g>
      <g stroke="#4338ca" stroke-width="2"><circle cx="12" cy="15" r="6" fill="#c4b5fd"/><circle cx="53" cy="14" r="6" fill="#a5b4fc"/><circle cx="10" cy="48" r="6" fill="#67e8f9"/><circle cx="54" cy="49" r="6" fill="#5eead4"/></g>
      <path d="m32 18 9 5v11l-9 5-9-5V23Z" fill="#8b5cf6" stroke="#4c1d95" stroke-width="2.5"/><path d="M32 39v11m-5-6h10m-10 6-5 7m10-7v8m5-8 5 7" fill="none" stroke="#4c1d95" stroke-linecap="round" stroke-width="2.5"/>`,
    illumina: `
      <g fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-width="2.5">
        <path d="M7 22h50M7 42h50"/><path d="M10 22v20m9-20v20m9-20v20m8-20v20m9-20v20m9-20v20" opacity=".75"/>
      </g>
      <path d="M7 15h20v-5l9 9-9 9v-5H7Z" fill="#2563eb" stroke="#1e40af" stroke-linejoin="round" stroke-width="2"/>
      <path d="M57 49H37v5l-9-9 9-9v5h20Z" fill="#f97316" stroke="#c2410c" stroke-linejoin="round" stroke-width="2"/>
      <path d="M36 19h10M18 45h10" fill="none" stroke="#64748b" stroke-dasharray="2.5 3" stroke-linecap="round" stroke-width="2.5"/>
      <circle cx="10" cy="19" r="2.2" fill="#dbeafe"/><circle cx="54" cy="45" r="2.2" fill="#ffedd5"/>`,
    ont: `
      <rect x="7" y="10" width="50" height="44" rx="8" fill="#111827"/><path d="M13 31c7-16 11 16 18 0s11 16 18 0 6 5 9 0" fill="none" stroke="#22d3ee" stroke-linecap="round" stroke-width="3"/><circle cx="19" cy="20" r="4" fill="#f9fafb"/><circle cx="31" cy="20" r="4" fill="#f9fafb"/><circle cx="43" cy="20" r="4" fill="#f9fafb"/>`,
  };

  const artworkIcon = (title, artwork) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${ARTWORKS[artwork]}</svg>`;
    return {
      id: `art-${artwork}`,
      title,
      src: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
      fit: "artwork",
    };
  };

  const official = (id, title, src, fallback, fit = "contain") => ({ id, title, src, fallback, fit });

  const OFFICIAL_RULES = [
    [
      /(^|\s)snakemake($|\s)/i,
      official(
        "snakemake",
        "Snakemake",
        "https://raw.githubusercontent.com/snakemake/snakemake/main/docs/logo-snake.svg",
        customIcon("Snakemake", "workflow", "SM", "#2274a5")
      ),
    ],
    [
      /python/i,
      official(
        "python",
        "Python",
        "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg",
        customIcon("Python", "workflow", "PY", "#3776ab")
      ),
    ],
    [
      /filtlong/i,
      official(
        "filtlong",
        "Filtlong",
        "https://raw.githubusercontent.com/rrwick/Filtlong/main/misc/filtlong_logo.png",
        customIcon("Filtlong", "trim", "FL", "#b51d2a"),
        "wide"
      ),
    ],
    [
      /unicycler/i,
      official(
        "unicycler",
        "Unicycler",
        "https://raw.githubusercontent.com/rrwick/Unicycler/main/misc/logo.png",
        customIcon("Unicycler", "assembly", "UC", "#a7191f"),
        "crop-left"
      ),
    ],
    [
      /fastqc/i,
      official(
        "fastqc",
        "FastQC",
        "https://raw.githubusercontent.com/s-andrews/FastQC/master/fastqc_icon.ico",
        customIcon("FastQC", "qc", "FQ", "#d97706")
      ),
    ],
    [
      /multiqc/i,
      official(
        "multiqc",
        "MultiQC",
        "https://raw.githubusercontent.com/MultiQC/MultiQC/main/multiqc/templates/default/assets/img/MultiQC_icon.svg",
        customIcon("MultiQC", "qc", "MQ", "#354f60")
      ),
    ],
    [
      /qiime\s*2/i,
      official(
        "qiime2",
        "QIIME 2",
        "https://raw.githubusercontent.com/qiime2/logos/master/vector/qiime2-square.svg",
        customIcon("QIIME 2", "taxonomy", "Q2", "#283593")
      ),
    ],
    [/spades/i, official("spades", "SPAdes", "https://raw.githubusercontent.com/ablab/spades/main/docs/spades.png", artworkIcon("SPAdes", "spades"))],
    [
      /bowtie2/i,
      official(
        "bowtie2",
        "Bowtie2",
        "https://raw.githubusercontent.com/BenLangmead/bowtie2/master/doc/images/bowtie_logo.png",
        artworkIcon("Bowtie2", "bwa"),
        "wide"
      ),
    ],
    [
      /pharokka/i,
      official(
        "pharokka",
        "Pharokka",
        "https://raw.githubusercontent.com/gbouras13/pharokka/master/img/pharokka_logo.png",
        artworkIcon("Pharokka", "checkv")
      ),
    ],
    [
      /kaptive/i,
      official(
        "kaptive",
        "Kaptive",
        "https://raw.githubusercontent.com/klebgenomics/Kaptive/master/docs/assets/logo.png",
        customIcon("Kaptive", "database", "KL", "#351638"),
        "wide"
      ),
    ],
    [
      /spikehunter/i,
      official(
        "spikehunter",
        "SpikeHunter",
        "https://raw.githubusercontent.com/nlm-irp-jianglab/SpikeHunter/main/image/logo.jpg",
        artworkIcon("SpikeHunter", "dposfinder")
      ),
    ],
    [
      /foldseek/i,
      official(
        "foldseek",
        "Foldseek",
        "https://raw.githubusercontent.com/steineggerlab/foldseek/master/.github/foldseek.png",
        artworkIcon("Foldseek", "foldseek")
      ),
    ],
    [
      /nextflow/i,
      official(
        "nextflow",
        "Nextflow",
        "https://raw.githubusercontent.com/nextflow-io/trademark/master/nextflow-icon.svg",
        customIcon("Nextflow", "workflow", "NF", "#0dc09d")
      ),
    ],
    [
      /quast/i,
      official(
        "quast",
        "QUAST",
        "https://raw.githubusercontent.com/ablab/quast-website/master/quast_sf_net/img/logos/quast_logo.svg",
        customIcon("QUAST", "qc", "QA", "#2563eb"),
        "wide"
      ),
    ],
    [/busco/i, official("busco", "BUSCO", "https://busco.ezlab.org/home/busco.png", customIcon("BUSCO", "qc", "BC", "#2f855a"))],
    [/^docker$/i, official("docker", "Docker", "https://cdn.simpleicons.org/docker/2496ED", customIcon("Docker", "container", "DK", "#2496ed"))],
    [
      /^conda$/i,
      official(
        "conda",
        "Conda",
        "https://docs.conda.io/projects/conda/en/stable/_static/conda_logo_full.svg",
        customIcon("Conda", "container", "CN", "#44a833"),
        "wide"
      ),
    ],
    [/apptainer/i, official("apptainer", "Apptainer", "https://apptainer.org/apptainer.svg", customIcon("Apptainer", "container", "AP", "#1d4ed8"))],
  ];

  const CUSTOM_RULES = [
    { pattern: /flye/i, artwork: "flye" },
    { pattern: /spades/i, artwork: "spades" },
    { pattern: /fastqc/i, motif: "qc", mark: "FQ", color: "#d97706" },
    { pattern: /quast/i, motif: "qc", mark: "QA", color: "#2563eb" },
    { pattern: /busco/i, motif: "qc", mark: "BC", color: "#2f855a" },
    { pattern: /kraken/i, artwork: "kraken" },
    { pattern: /trimmomatic/i, artwork: "trimmomatic" },
    { pattern: /nanofilt/i, artwork: "nanofilt" },
    { pattern: /nanoplot/i, artwork: "nanoplot" },
    { pattern: /bowtie2/i, motif: "alignment", mark: "BT", color: "#be123c" },
    { pattern: /^bwa$/i, artwork: "bwa" },
    { pattern: /samtools/i, artwork: "samtools" },
    { pattern: /minimap2/i, artwork: "minimap" },
    { pattern: /blast/i, artwork: "blast" },
    { pattern: /pilon/i, artwork: "pilon" },
    { pattern: /prokka/i, artwork: "prokka" },
    { pattern: /abricate/i, artwork: "abricate" },
    { pattern: /rast/i, artwork: "rast" },
    { pattern: /cgview/i, artwork: "cgview" },
    { pattern: /checkv/i, artwork: "checkv" },
    { pattern: /pharokka/i, motif: "phage", mark: "PH", color: "#7e22ce" },
    { pattern: /phold/i, artwork: "phold" },
    { pattern: /bacphlip/i, artwork: "bacphlip" },
    { pattern: /phatyp/i, artwork: "phatyp" },
    { pattern: /phagcn/i, artwork: "phagcn" },
    { pattern: /phageterm/i, artwork: "phageterm" },
    { pattern: /foldseek/i, artwork: "foldseek" },
    { pattern: /prostt5/i, artwork: "prostt5" },
    { pattern: /dposfinder/i, artwork: "dposfinder" },
    { pattern: /spikehunter/i, motif: "protein", mark: "SH", color: "#db2777" },
    { pattern: /deposcope/i, artwork: "deposcope" },
    { pattern: /kaptive/i, motif: "database", mark: "KL", color: "#0f766e" },
    { pattern: /mash|inphared/i, artwork: "mash" },
    { pattern: /apptainer/i, motif: "container", mark: "AP", color: "#1d4ed8" },
    { pattern: /illumina/i, artwork: "illumina" },
    { pattern: /ont|nanopore/i, artwork: "ont" },
  ];

  const SEMANTIC_RULES = [
    { pattern: /protein|structure|\bfold\b|domain|\btail\b|rbp|depolymerase/, motif: "protein", color: "#a21caf" },
    { pattern: /phage|lysis|lysogen|repressor|integrase|receptor/, motif: "phage", color: "#6d28d9" },
    { pattern: /taxonomy|phylogen|classification|lineage|lifestyle/, motif: "taxonomy", color: "#7c3aed" },
    { pattern: /assembly|contig|scaffold|genome comparison|pan-genome/, motif: "assembly", color: "#0f766e" },
    { pattern: /alignment|mapping|remap|variant|specificity|conservation/, motif: "alignment", color: "#0369a1" },
    { pattern: /qc|quality|validation|review|confidence|evaluation|consistency/, motif: "qc", color: "#d97706" },
    { pattern: /trim|filter|preprocess|denois/, motif: "trim", color: "#c2410c" },
    { pattern: /database|reference|curat|atlas|evidence table/, motif: "database", color: "#0f766e" },
    { pattern: /cell|expression|bulk|single-cell|virtual/, motif: "cell", color: "#be185d" },
    { pattern: /experiment|wet-lab|assay|matrix|biological/, motif: "experiment", color: "#b45309" },
    { pattern: /report|package|export|publication|patent|deliverable/, motif: "report", color: "#475569" },
    { pattern: /read|fastq|input|data|metadata|profile|wgs|16s|its|rna/, motif: "reads", color: "#2563eb" },
    { pattern: /annotation|amr|virulence|sequence|genome|primer|marker|locus/, motif: "dna", color: "#047857" },
    { pattern: /container|environment|docker|conda|isolation/, motif: "container", color: "#334155" },
    { pattern: /workflow|execution|scope|selection|integration|model|inference|design/, motif: "workflow", color: "#4f46a5" },
  ];

  const markFor = (name) => {
    const words = String(name)
      .replace(/[^A-Za-z0-9]+/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!words.length) return "BI";
    if (words.length === 1) return words[0].slice(0, 3);
    return words
      .slice(0, 3)
      .map((word) => word[0])
      .join("");
  };

  const resolve = (toolName, context = "") => {
    const title = String(toolName || "Bioinformatics workflow step");
    const officialMatch = OFFICIAL_RULES.find(([pattern]) => pattern.test(title));
    if (officialMatch) return { ...officialMatch[1], title };

    const customMatch = CUSTOM_RULES.find(({ pattern }) => pattern.test(title));
    if (customMatch?.artwork) return artworkIcon(title, customMatch.artwork);
    if (customMatch) return customIcon(title, customMatch.motif, customMatch.mark, customMatch.color);

    const searchable = `${title} ${context}`.toLowerCase();
    const semantic = SEMANTIC_RULES.find(({ pattern }) => pattern.test(searchable)) || {
      motif: "workflow",
      color: "#4f46a5",
    };
    return customIcon(title, semantic.motif, markFor(title), semantic.color);
  };

  window.projectToolIcons = { resolve };
})();
