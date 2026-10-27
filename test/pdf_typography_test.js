const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const repository = path.resolve(__dirname, "..");
const approvedMicrobiotixCopy = [
  "Analyze bacterial and phage genomes, assess phage candidates and design receptor-binding protein candidates.",
  "Develop reference databases and capsule-type prediction software; contribute to phage cocktail selection software and provide analysis technical support.",
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
  assert.ok(
    !/Phagogram|phagefinder|phagekit|ktyper|curated 7,?759|7,?759 curated|442 K-types/i.test(company),
    `${file}: excluded internal names or imprecise artifact-count claims`
  );
}
const approvedWittgenCopy = [
  "Built a CRC single-cell atlas and annotated cell types.",
  "Analyzed CRC marker and therapeutic-target candidates through tumor and normal-tissue expression comparisons.",
];
for (const file of ["docs/pdf-source/resume.typ", "docs/pdf-source/portfolio.typ", "_data/cv.yml"]) {
  const source = fs.readFileSync(path.join(repository, file), "utf8");
  for (const sentence of approvedWittgenCopy) assert.ok(source.includes(sentence), `${file}: approved Wittgenbio responsibility missing`);
}
const approvedSanigenCopy = [
  "Led NGS analysis services and team operations, including analysis design, hands-on work, result review, SOPs, turnaround management and quality control.",
  "Performed genomics, microbiome and transcriptome analyses; automated analysis workflows and reports.",
  "Developed comparative-genomics and k-mer marker-discovery methods and contributed to collaborative NGS pathogen-panel research.",
  "Contributed to the technology-special listing task force, preparing and revising technical-evaluation and preliminary-listing application materials.",
  "Provided analysis technical support to clients and internal researchers, custom analyses and method evaluations.",
  "Maintained HPC/Linux analysis environments, NAS storage and data-transfer infrastructure.",
];
for (const [file, start, end] of [
  ["docs/pdf-source/resume.typ", '#role("Sanigen"', "\n])"],
  ["docs/pdf-source/portfolio.typ", '#section("RESPONSIBILITIES AT SANIGEN")', '#section("ANALYSIS DELIVERY AND AUTOMATION")'],
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
