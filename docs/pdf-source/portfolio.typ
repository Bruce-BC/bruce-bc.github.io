#import "theme.typ": *
#setup(title: "Byung-cheol Kang · Bioinformatics Portfolio")

#align(center)[
  #v(17mm)
  #kicker("Bioinformatics portfolio · 2026")
  #v(4mm)
  #text(size: 30pt, weight: "bold", fill: navy)[Byung-cheol Kang]
  #v(2mm)
  #text(size: 13pt, fill: teal)[Bacteriophage Genomics · Bulk-to-Single-Cell · Virtual Cell]
  #v(9mm)
  #block(width: 150mm, inset: 14pt, radius: 8pt, fill: pale, stroke: 0.7pt + rule)[
    #text(size: 13pt, weight: "medium", fill: navy)[
      I turn complex microbial and phage sequencing data into reproducible analysis systems, inspectable evidence, and research decisions.
    ]
  ]
]

#v(10mm)
#section("CURRENT ROLES")
#role("Microiotix", "Bioinformatician", "2026.07 - PRESENT", [
  - Bacterial genome analysis for host context and phage genome analysis across QC, annotation, taxonomy, lifestyle, packaging, and tail biology.
  - *K. pneumoniae* tail/RBP and KL-type database construction and evaluation.
  - Protein structure prediction, structure-based annotation, and reference-structure comparison.
  - In silico tail-RBP design using explicit attachment, target, taxonomy, and structural criteria.
])

#role("Wittgenbio", "Computational Biology Research", "CURRENT", [
  - Develop bulk-to-single-cell inference approaches that connect bulk expression profiles with curated single-cell references.
  - Contribute to virtual-cell research through computational cell-state representation, model evaluation, and biologically grounded interpretation.
])

#section("CAREER SNAPSHOT")
#grid(columns: (1fr, 1fr, 1fr, 1fr), gutter: 5pt,
  metric("6+ years", "Applied bioinformatics"),
  metric("5-person", "Team led at Sanigen"),
  metric("4 profiles", "16S · ITS · WGS · Hybrid"),
  metric("7 papers", "SCI(E) publications"),
)

#v(4mm)
#note[
  *Past platform evidence.* The integrated workflow and operational results in this portfolio describe work performed at Sanigen (2020.03 - 2025.10). They are not presented as Microiotix or Wittgenbio assets or current-company outcomes.
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
- Translated research and client questions into analysis scope, metadata requirements, and appropriate workflow profiles.
- Reviewed Q20/Q30, read depth, contiguity, assembly plausibility, taxonomy, annotation, and analysis-specific quality evidence before interpretation.
- Coordinated reruns, technical communication, report packaging, manuals, and training across a five-person team.
- Maintained reproducible environments and operational failure handling across Linux compute and storage infrastructure.

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
- Built a 7,759-sequence tail/RBP and KL-type reference resource with source traceability, confidence labels, and experimentally verified targets explicitly flagged.
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
#text(size: 21pt, weight: "bold", fill: navy)[Bulk-to-Single-Cell and Virtual-Cell Research]

#section("BULK-TO-SINGLE-CELL WORKFLOW")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*Bulk profiles* #linebreak() QC + harmonization], [→],
  note[*Single-cell reference* #linebreak() curation + alignment], [→],
  note[*Inference* #linebreak() composition + state],
)

#section("ANALYTICAL RESPONSIBILITIES")
- Curate reference atlases for tissue, condition, cell annotation, and population coverage.
- Align bulk and single-cell feature spaces while tracking missing, duplicated, and weakly represented signals.
- Infer cell-type composition and reference-supported cell-state signals from bulk expression profiles.
- Review sensitivity to reference choice, feature coverage, batch effects, and biological mismatch before interpretation.

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
  Bulk-to-single-cell outputs are model-based estimates, not direct single-cell measurements. Virtual-cell predictions remain research hypotheses until externally or experimentally validated. Private data, implementation details, and performance metrics are not disclosed here.
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
