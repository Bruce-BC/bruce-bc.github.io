const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const repository = path.resolve(__dirname, "..");
const approvedMicrobiotixCopy = [
  "Analyze bacterial and phage genomes for quality, annotation, taxonomy and host-associated features, with traceable reporting.",
  "Develop analysis libraries and command-line tools linking host-range matrices with sequence and gene data for cocktail selection, cluster comparison and pan-genome analysis.",
  "Build RBP/depolymerase reference databases with separate K/KL fields, source citations and experimental/inferred evidence labels.",
  "Evaluate RBP candidates using sequence, domain and protein-structure evidence and generate candidate sequences and design reports.",
  "Develop research tools for sequence analysis, primers and cloning; design genome-database workflows and interactive prototypes.",
];
for (const [file, start, end] of [
  ["docs/pdf-source/resume.typ", '#role("MicrobiotiX"', '#role("Wittgenbio"'],
  ["docs/pdf-source/portfolio.typ", '#role("MicrobiotiX"', '#role("Wittgenbio"'],
  ["_data/cv.yml", "- company: MicrobiotiX", "- company: Wittgenbio"],
]) {
  const source = fs.readFileSync(path.join(repository, file), "utf8");
  const first = source.indexOf(start);
  const last = source.indexOf(end, first + start.length);
  assert.ok(first >= 0 && last > first, `${file}: company boundaries missing`);
  const company = source.slice(first, last);
  for (const sentence of approvedMicrobiotixCopy) {
    assert.ok(company.includes(sentence), `${file}: approved MicrobiotiX responsibility missing`);
  }
  assert.ok(!/Phagogram|phagefinder|phagekit|ktyper|7,?759/i.test(company), `${file}: excluded internal names or sequence-count emphasis`);
}
const approvedSanigenCopy = [
  "Led NGS analysis services and team operations, including analysis design, hands-on work, result review, SOPs, turnaround management and quality control.",
  "Performed genomics, microbiome and transcriptome analyses; automated workflows and reports and resolved analysis errors.",
  "Developed comparative-genomics and k-mer marker-discovery methods and contributed to collaborative NGS pathogen-panel research.",
  "Contributed to the technology-special listing task force, preparing and revising technical-evaluation and preliminary-listing application materials.",
  "Delivered custom analyses and method evaluations for external collaborators, client technical support and training materials.",
  "Maintained HPC/Linux analysis environments, NAS storage and data-transfer infrastructure.",
];
for (const [file, start, end] of [
  ["docs/pdf-source/resume.typ", '#role("Sanigen"', "\n])"],
  ["docs/pdf-source/portfolio.typ", '#section("RESPONSIBILITIES AT SANIGEN")', '#section("SELECTED ANALYSIS AND DELIVERY OUTPUTS")'],
  ["_data/cv.yml", "- company: Sanigen", "    Education:"],
]) {
  const source = fs.readFileSync(path.join(repository, file), "utf8");
  const first = source.indexOf(start);
  const last = source.indexOf(end, first + start.length);
  assert.ok(first >= 0 && last > first, `${file}: Sanigen boundaries missing`);
  const company = source.slice(first, last);
  for (const sentence of approvedSanigenCopy) {
    assert.ok(company.includes(sentence), `${file}: approved Sanigen responsibility missing`);
  }
  assert.equal(company.match(/^\s*- (?!company:)/gm)?.length, 6, `${file}: preserve all six responsibility themes`);
  assert.ok(!/Nextflow|five-person|three-person|direct reports/i.test(company), `${file}: unsupported tooling or staffing qualifier`);
}
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-pdf-test-"));

try {
  for (const [document, expectedPages] of [
    ["resume", 2],
    ["portfolio", 7],
  ]) {
    const output = path.join(temporary, `${document}.pdf`);
    execFileSync("typst", ["compile", path.join(repository, "docs/pdf-source", `${document}.typ`), output]);
    const pdf = fs.readFileSync(output).toString("latin1");
    assert.ok(/\/BaseFont\s*\/[^\s/]*HelveticaNeue/.test(pdf), `${document}: the configured font must reach the PDF`);
    assert.ok(!/\/BaseFont\s*\/[^\s/]*LibertinusSerif/.test(pdf), `${document}: unintended default serif font`);
    const info = execFileSync("pdfinfo", [output], { encoding: "utf8" });
    const pages = Number(info.match(/^Pages:\s+(\d+)/m)?.[1]);
    assert.equal(pages, expectedPages, `${document}: unexpected page count`);
    console.log(`${document}: Helvetica Neue embedded; ${pages} pages`);
  }
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
