#import "theme.typ": *
#show: setup.with(title: "Byung-cheol Kang · Bioinformatics Portfolio", body-size: 11pt)

#align(center)[
  #v(5mm)
  #kicker("Bioinformatics portfolio · 2026")
  #v(4mm)
  #text(size: 30pt, weight: "bold", fill: navy)[Byung-cheol Kang]
  #v(2mm)
  #text(size: 13pt, fill: teal)[Genomics · Bacteriophages · Research Pipelines]
  #v(5mm)
  #block(width: 150mm, inset: 14pt, radius: 8pt, fill: pale, stroke: 0.7pt + rule)[
    #text(size: 13pt, weight: "medium", fill: navy)[
      A bioinformatics researcher and developer connecting biological questions with analysis design and interpretation. My work extends from microbes to humans, integrating diverse analytical approaches and building research pipelines and databases. AI-powered coding accelerates my research and amplifies my ability to automate workflows and develop analytical tools.
    ]
  ]
]

#v(3mm)
#section("CURRENT AND RECENT ROLES")
#role("MicrobiotiX", "Bioinformatician", "2026.07 - PRESENT", [
  - Develop bacterial genome analysis workflows covering quality control, annotation, typing, antimicrobial resistance, and prophage detection to support production-strain assessment.
  - Integrate phage genome quality, termini and packaging, taxonomy, lifestyle predictions, and tail-protein evidence into reports with traceable conclusions.
  - Develop and extend analysis libraries and command-line tools combining experimental host-range matrices with sequence and protein features for clustering comparisons and cocktail candidate selection.
  - Build and maintain a Klebsiella pneumoniae tail/RBP reference database linking sequences to K-type and KL-type evidence, with source citations and separate experimental and predicted labels.
  - Develop in silico design tools that evaluate tail-protein candidates for specified capsule targets and generate candidate design sequences and review reports.
  - Compare protein sequences, domains, predicted structures, and reference structures to support RBP annotation and assess the structural plausibility of replacement and fusion candidates.
])

#role("Wittgenbio", "Computational Biology Research", "2026.07.01 - 2026.10.01", [
  - Built a colorectal cancer (CRC) single-cell atlas and performed cell-type annotation.
  - Annotated externally supplied normal-tissue atlas data and compared tissue-specific expression to evaluate candidate therapeutic targets.
  - Contributed to virtual-cell research through computational cell-state representation, model evaluation, and biologically grounded interpretation.
])

#v(4mm)
#note[
  *Past platform evidence.* The integrated workflow and operational results in this portfolio describe work performed at Sanigen (2020.03 - 2025.10). They are not presented as MicrobiotiX or Wittgenbio assets or current-company outcomes.
]

#pagebreak()
#kicker("Project 01 · Platform")
#linebreak()
#text(size: 21pt, weight: "bold", fill: navy)[Integrated Microbial Genomics Platform]

#section("PROBLEM")
Separate assay scripts, environments, quality checks, server paths, and reporting conventions made analysis difficult to reproduce and review consistently.

#section("SYSTEM DESIGN")
#grid(columns: (30mm, 1fr), row-gutter: 5pt,
  [*Entry point*], [One Snakemake dispatcher selects 16S, ITS, WGS, or Hybrid profiles.],
  [*Execution*], [Server-specific YAML configuration with Conda, Docker, or Apptainer and pinned BioContainers.],
  [*Quality*], [Input validation, raw-read QC, assembly/analysis checks, review gates, and retained logs.],
  [*Delivery*], [Custom Python/R processing, visualizations, HTML reports, and packaged outputs.],
)

#section("ACTIVE TOOL CHAINS")
#table(
  columns: (24mm, 1fr, 1fr),
  inset: 5pt,
  stroke: 0.5pt + rule,
  fill: (x, y) => if y == 0 { pale } else { none },
  [*Profile*], [*Core processing*], [*QC / interpretation*],
  [16S / ITS], [QIIME 2, DADA2, SILVA classifier, MAFFT, FastTree], [FastQC, MultiQC, diversity metrics, custom R/Python reports],
  [WGS], [Trimmomatic, SPAdes, Bowtie2, samtools, Prokka], [QUAST, BUSCO, Kraken2, Abricate/CARD/VFDB, eggNOG-mapper],
  [Hybrid], [NanoFilt, NanoPlot, Flye or Unicycler, BWA, Pilon, minimap2], [QUAST, BUSCO, Prokka, CGView, BLASTn, Abricate, eggNOG-mapper],
)

#section("EVIDENCE BOUNDARY")
Only tools connected to active Snakemake includes and rules are listed as active. Configured or documented but inactive components are not represented as production use.

#pagebreak()
#kicker("Project 02 · Operations")
#linebreak()
#text(size: 21pt, weight: "bold", fill: navy)[Analysis Operations and Quality Assurance]

#section("OPERATING MODEL")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*Question* #linebreak() biological scope], [→],
  note[*Execution* #linebreak() workflow + QC], [→],
  note[*Delivery* #linebreak() interpretation + provenance],
)

#section("RESPONSIBILITIES AT SANIGEN")
- Designed and maintained a shared analysis platform for 16S, ITS, WGS, and hybrid assembly, standardizing execution, quality control, and reporting.
- Performed microbial genomics and metagenomics analyses, led technical review, and coordinated team assignments, project schedules, and client communication.
- Contributed comparative-genomics and NGS analyses to foodborne-pathogen panel development, supporting two peer-reviewed publications and a joint patent.

#section("VERIFIED LOWER BOUND OF ARCHIVED WORK")
#grid(columns: (1fr, 1fr, 1fr, 1fr), gutter: 5pt,
  metric("28", "WGS order codes"),
  metric("21", "Hybrid order codes"),
  metric("19", "16S order codes"),
  metric("18", "Shotgun order codes"),
)
#v(4pt)
#grid(columns: (1fr, 1fr, 1fr), gutter: 5pt,
  metric("7", "RNA order codes"),
  metric("3", "ITS order codes"),
  metric("2", "Other order codes"),
)

#note[
  These 98 distinct order codes are a conservative lower bound derived from archived communications. They are not sample counts, revenue, or an independently audited total workload.
]

#pagebreak()
#kicker("Projects 03-04 · Comparative genomics and panels")
#linebreak()
#text(size: 21pt, weight: "bold", fill: navy)[From Genome Differences to Assay Candidates]

#section("COMPARATIVE-GENOMICS MARKER DISCOVERY")
*Objective.* Identify a region that distinguishes a target group while remaining practical for downstream marker or assay development.

*Approach.* Curate complete genomes, compare whole-genome and pan-genome context, narrow candidate intervals, and review conservation, specificity, and downstream constraints.

*Outcome.* Prioritized an approximately *17 kb candidate region* for follow-up, with traceable reasoning from genome selection to practical assay constraints.

#section("FOODBORNE-PATHOGEN NGS PANEL")
- Contributed bioinformatics and comparative-genomics analysis to marker-oriented panel development and evaluation.
- Supported interpretation of NGS outputs across food and environmental sample contexts.
- Collaborative outcomes included two peer-reviewed papers in 2023 and one joint patent contribution in 2022.

#section("BOUNDARIES")
#note[
  Computational prioritization does not establish diagnostic sensitivity or specificity. Publication and patent records document collaborative outcomes, not sole authorship or universal performance across unevaluated matrices.
]

#section("SELECTED EVIDENCE")
- *Frontiers in Microbiology* 14 (2023): agricultural wastewater pathogen panel.
- *Journal of Microbiology and Biotechnology* 33(1) (2023): fermented-food pathogen panel.
- Joint patent contribution (2022): NGS-based primer set and foodborne-bacteria detection method.

#pagebreak()
#kicker("Project 05 · Current role case study")
#linebreak()
#text(size: 21pt, weight: "bold", fill: navy)[Klebsiella Phage Genomics and Tail-RBP Design]

#section("GENOME EVIDENCE WORKFLOW")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*Host + phage genomes* #linebreak() QC + annotation], [→],
  note[*Independent evidence* #linebreak() taxonomy + lifestyle + termini], [→],
  note[*Tail interpretation* #linebreak() KL target + structure],
)

#section("CONTRIBUTION AND EVIDENCE")
- Integrated CheckV, Pharokka, Phold, BACPHLIP, PhaTYP, PhaGCN, and PhageTerm outputs while preserving the evidence behind each conclusion.
- Built a tail/RBP and KL-type reference resource with source traceability, confidence labels, and experimentally supported targets explicitly flagged.
- Cross-validated candidate depolymerases with DposFinder, SpikeHunter, DepoScope, sequence search, domain boundaries, and protein-structure evidence.
- Used ProstT5 and Foldseek with experimental PDB references to identify structurally conserved proteins at sequence identities below ordinary search sensitivity.

#section("ANONYMIZED CASE-STUDY RESULTS")
- Four genomes converged on lytic *Przondovirus* classifications and short DTR packaging with 180-183 bp terminal repeats.
- Three capsule targets matched experimentally supported references at 95.4-98.8% sequence identity; unsupported cases remained unresolved rather than receiving forced labels.
- One design candidate passed genus, attachment, target-label, experimental-structure, and predicted-structure criteria; its 129-aa anchor alignment spanned 99.2% of the region.

#section("DESIGN OUTPUT AND BOUNDARY")
The design bench supports domain swaps, full-module replacements, and tandem additions, with genome FASTA, module multi-FASTA, GenBank, and protein FASTA export. Host K-locus assignments, predicted RBP folding, adsorption, host range, and lytic activity still require bacterial-genome and wet-lab validation.

#pagebreak()
#kicker("Project 06 · Wittgenbio research")
#linebreak()
#text(size: 21pt, weight: "bold", fill: navy)[CRC Atlas and Cell-Type Annotation]

#section("CRC SINGLE-CELL ATLAS WORKFLOW")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*Single-cell datasets* #linebreak() QC + metadata], [→],
  note[*Integrated CRC atlas* #linebreak() harmonization + clustering], [→],
  note[*Cell-type annotation* #linebreak() labels + validation],
)

#section("ANALYTICAL RESPONSIBILITIES")
- Built a colorectal cancer single-cell atlas by integrating datasets across studies and performing cell-type annotation.
- Maintained traceable metadata and reviewed annotation consistency and tumor/normal label discrepancies.

#section("NORMAL-TISSUE ATLAS ANNOTATION AND EXPRESSION")
- Annotated externally supplied normal-tissue atlas data and compared tissue-specific expression.
- Evaluated candidate therapeutic targets against normal-tissue expression while accounting for sequencing-depth differences and annotation coverage.

#section("VIRTUAL-CELL WORKFLOW")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*Cellular data* #linebreak() question + scope], [→],
  note[*Cell model* #linebreak() representation + fitting], [→],
  note[*Evaluation* #linebreak() state + response + biology],
)

#section("EVALUATION PRINCIPLES")
- Separate model fitting from evaluation data across relevant cell states, conditions, and perturbations.
- Evaluate predicted states or responses against measurable biological evidence, not latent-space appearance alone.
- Report underrepresented tissues, cell populations, perturbations, and experimental conditions.

#section("PUBLIC EVIDENCE BOUNDARY")
#note[
  Cell-type annotations and normal-tissue expression comparisons depend on data quality, annotation coverage, and biological context. Virtual-cell predictions remain research hypotheses until externally or experimentally validated. Private data, implementation details, and performance metrics are not disclosed here.
]

#pagebreak()
#kicker("Project 07 · Independent R&D prototype")
#linebreak()
#text(size: 21pt, weight: "bold", fill: navy)[Phage Lifestyle Evidence Prototype]

#section("RESEARCH QUESTION")
Can existing tools be combined into an end-to-end system that distinguishes lytic and lysogenic phages while preserving conflicting evidence and uncertainty?

#section("EVIDENCE DESIGN")
#grid(columns: (32mm, 1fr), row-gutter: 5pt,
  [*Quality context*], [CheckV completeness and contamination context],
  [*Annotation*], [Pharokka and Phold; integrase, repressor, excision, and lysis evidence],
  [*Classifiers*], [BACPHLIP and PhaTYP as independent prediction evidence],
  [*Decision layer*], [Agreement/confidence table with unresolved cases routed to manual review],
)

#section("HOST-RANGE EXTENSION")
A related hypothesis-ranking layer considers LPS and outer-membrane gene variation together with phage receptor and annotation evidence. It prioritizes candidates for experiment; it does not prove adsorption, infection, or lytic activity.

#section("PUBLICATION-GRADE NEXT STEPS")
- External, leakage-controlled benchmark with known lifestyle labels.
- Comparison against individual tools and transparent simple baselines.
- Sensitivity, specificity, MCC, calibration, and quality-stratified performance.
- Ablation analysis for gene markers, classifiers, and quality context.
- Experimental validation for host-range candidate claims.

#section("CONTACT")
#link("mailto:sentim2@gmail.com")[#raw("sentim2@gmail.com")] #h(12pt) (+82) 10-5366-3411 #h(12pt) #link("https://bruce-bc.github.io")[bruce-bc.github.io]
