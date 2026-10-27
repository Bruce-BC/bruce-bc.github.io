const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const repository = path.resolve(__dirname, "..");
const approvedMicrobiotixCopy = [
  "Analyze bacterial and phage genomes and design host-recognition protein candidates.",
  "Develop phage research databases and prediction tools; contribute to cocktail selection software and provide analysis technical support.",
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
const approvedWittgenCopy = ["Built a CRC single-cell atlas, annotated cell types and analyzed expression of target candidates."];
for (const file of ["docs/pdf-source/resume.typ", "docs/pdf-source/portfolio.typ", "_data/cv.yml"]) {
  const source = fs.readFileSync(path.join(repository, file), "utf8");
  for (const sentence of approvedWittgenCopy) assert.ok(source.includes(sentence), `${file}: approved Wittgenbio responsibility missing`);
}
const approvedSanigenCopy = [
  "Managed NGS analysis services and the bioinformatics team; performed genomics, microbiome and transcriptome analyses.",
  "Automated analysis workflows and reports and contributed to marker and panel research.",
  "Provided technical support to clients and internal researchers and operated analysis infrastructure.",
  "Contributed to the technology-special listing task force and prepared technical-evaluation and listing-review materials.",
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
  assert.equal(company.match(/^\s*- (?!company:)/gm)?.length, 4, `${file}: preserve all four responsibility themes`);
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
