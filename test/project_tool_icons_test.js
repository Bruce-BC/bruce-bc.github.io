const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const registrySource = fs.readFileSync("assets/js/project-tool-icons.js", "utf8");
const sandbox = { window: {}, encodeURIComponent };
vm.runInNewContext(registrySource, sandbox, { filename: "project-tool-icons.js" });

const { resolve } = sandbox.window.projectToolIcons;
assert.equal(typeof resolve, "function");

const toolingSource = fs.readFileSync("_data/project_tooling.yml", "utf8");
const toolNames = [
  ...new Set(
    toolingSource
      .split("\n")
      .map((line) => line.match(/^\s+- name:\s*(.+?)\s*$/)?.[1])
      .filter(Boolean)
      .map((name) => name.replace(/^["']|["']$/g, ""))
  ),
];

assert.ok(toolNames.length > 80, `Expected a substantial tool inventory, found ${toolNames.length}`);
toolNames.forEach((name) => {
  const icon = resolve(name, name);
  assert.ok(icon.id, `${name} is missing an icon id`);
  assert.ok(icon.src, `${name} is missing an icon source`);
  assert.equal(icon.title, name, `${name} did not retain its accessible title`);
});

const expectedTools = {
  Snakemake: "snakemake",
  "Illumina paired-end reads": "art-illumina",
  Python: "python",
  Unicycler: "unicycler",
  Filtlong: "filtlong",
  Flye: "art-flye",
  SPAdes: "spades",
  Kraken2: "art-kraken",
  Prokka: "art-prokka",
  FastQC: "fastqc",
  MultiQC: "multiqc",
  "QIIME 2 DADA2": "qiime2",
  Trimmomatic: "art-trimmomatic",
  Bowtie2: "bowtie2",
  Pharokka: "pharokka",
  Phold: "art-phold",
  PhaTYP: "art-phatyp",
  PhaGCN: "art-phagcn",
  Kaptive: "kaptive",
  SpikeHunter: "spikehunter",
  Foldseek: "foldseek",
  Nextflow: "nextflow",
  QUAST: "quast",
  BUSCO: "busco",
  Apptainer: "apptainer",
};

Object.entries(expectedTools).forEach(([name, expectedId]) => {
  assert.equal(resolve(name, name).id, expectedId, `${name} should use its dedicated icon`);
});

console.log(`Validated ${toolNames.length} tool and method icon mappings.`);
