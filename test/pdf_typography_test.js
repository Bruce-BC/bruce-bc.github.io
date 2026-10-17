const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const repository = path.resolve(__dirname, "..");
const approvedMicrobiotixCopy = [
  "Develop bacterial genome analysis workflows covering quality control, annotation, typing, antimicrobial resistance, and prophage detection to support production-strain assessment.",
  "Integrate phage genome quality, termini and packaging, taxonomy, lifestyle predictions, and tail-protein evidence into reports with traceable conclusions.",
  "Develop and extend analysis libraries and command-line tools combining experimental host-range matrices with sequence and protein features for clustering comparisons and cocktail candidate selection.",
  "Build and maintain a Klebsiella pneumoniae tail/RBP reference database linking sequences to K-type and KL-type evidence, with source citations and separate experimental and predicted labels.",
  "Develop in silico design tools that evaluate tail-protein candidates for specified capsule targets and generate candidate design sequences and review reports.",
  "Compare protein sequences, domains, predicted structures, and reference structures to support RBP annotation and assess the structural plausibility of replacement and fusion candidates.",
];
for (const [file, start, end] of [
  ["docs/pdf-source/resume.typ", '#role("MicrobiotiX"', '#role("Wittgenbio"'],
  ["docs/pdf-source/portfolio.typ", '#role("MicrobiotiX"', '#role("Wittgenbio"'],
  ["_data/cv.yml", "- company: MicrobiotiX", "- company: Wittgenbio"],
  ["_pages/experience.md", "## MicrobiotiX", "## Wittgenbio"],
  ["_pages/about.md", "### MicrobiotiX", "### Wittgenbio"],
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
  "Designed and maintained a shared analysis platform for 16S, ITS, WGS, and hybrid assembly, standardizing execution, quality control, and reporting.",
  "Performed microbial genomics and metagenomics analyses, led technical review, and coordinated team assignments, project schedules, and client communication.",
  "Contributed comparative-genomics and NGS analyses to foodborne-pathogen panel development, supporting two peer-reviewed publications and a joint patent.",
];
for (const [file, start, end] of [
  ["docs/pdf-source/resume.typ", '#role("Sanigen"', "\n])"],
  ["docs/pdf-source/portfolio.typ", '#section("RESPONSIBILITIES AT SANIGEN")', '#section("VERIFIED LOWER BOUND OF ARCHIVED WORK")'],
  ["_data/cv.yml", "- company: Sanigen", "    Education:"],
  ["_pages/experience.md", "## Sanigen", "### Contributions and outcomes"],
]) {
  const source = fs.readFileSync(path.join(repository, file), "utf8");
  const first = source.indexOf(start);
  const last = source.indexOf(end, first + start.length);
  assert.ok(first >= 0 && last > first, `${file}: Sanigen boundaries missing`);
  const company = source.slice(first, last);
  for (const sentence of approvedSanigenCopy) {
    assert.ok(company.includes(sentence), `${file}: approved Sanigen responsibility missing`);
  }
  assert.equal(company.match(/^\s*- (?!company:)/gm)?.length, 3, `${file}: keep the approved three-bullet summary`);
  assert.ok(!/Snakemake|five-person|three-person|direct reports/i.test(company), `${file}: excluded tool emphasis or staffing qualifier`);
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
