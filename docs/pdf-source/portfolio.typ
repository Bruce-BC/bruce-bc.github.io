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
#role("MicrobiotiX", "Senior Researcher · Bioinformatics", "2026.07 - PRESENT", [
  - Analyze bacterial and phage genomes and design host-recognition protein candidates.
  - Develop phage research databases and prediction tools; contribute to cocktail selection software and provide analysis technical support.
])

#role("Wittgenbio", "Computational Biology Research", "2026.07 - 2026.10", [
  - Built a CRC single-cell atlas, annotated cell types and analyzed expression of target candidates.
])

#v(4mm)
#note[
  *Past platform evidence.* The integrated workflow and operational results in this portfolio describe work performed at Sanigen (2020.03 - 2025.11). They are not presented as MicrobiotiX or Wittgenbio assets or current-company outcomes.
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

#section("IMPLEMENTATION AND TECHNICAL REVIEW")
- Connected shared analysis, container and server settings with QC, logs and HTML report outputs across the four execution profiles.
- Delivered WGS/hybrid assemblies under research-specific read-selection and trimming conditions, with reviewed contigs and reports.
- Performed assembly/Prokka annotation and manual contig review, with circular-genome, assembly-graph and BUSCO checks.

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
- Managed NGS analysis services and the bioinformatics team; performed genomics, microbiome and transcriptome analyses.
- Automated analysis workflows and reports and contributed to marker and panel research.
- Provided technical support to clients and internal researchers and operated analysis infrastructure.
- Contributed to the technology-special listing task force and prepared technical-evaluation and listing-review materials.

#section("ANALYSIS DELIVERY AND AUTOMATION")
- Delivered genome assemblies, annotations, strain comparisons, microbiome reports and transcriptome count/coverage outputs for research questions.
- Developed shared analysis configurations, QC and HTML reporting; automated result conversion and functional-annotation outputs and maintained phylogenetic/visual reports.

#section("INTERNAL SERVICE OPERATIONS AND MANAGEMENT")
- Managed analysis assignments, schedules, result review, SOPs, turnaround and quality.
- Handled client and internal-researcher inquiries about interpretation, additional analyses and reanalysis; coordinated the work schedules.
- Investigated and addressed analysis-environment, calculation and reporting issues; redelivered results.
- Reviewed NCBI chromosome/contig submissions and prepared analysis/panX training and handover materials.

#section("ADDITIONAL CUSTOM ANALYSES")
- Filtered vector/mixed-virus reads, assembled viral reads with metaSPAdes and identified assemblies by BLAST; delivered predicted prophage intervals and mobility evidence.
- Delivered OTU/sequence-match tables and hybrid-contig VCF/IGV comparisons with NCBI submission-related technical support.
- Verified allergen/accession mappings and custom BLAST target/toxin searches; reconciled NCBI/SILVA/species-label discrepancies with sequence/ANI evidence and documented marker limits.

#section("TRACEABILITY AND INTERPRETATION")
#note[
  Retained communications and analysis outputs support these examples, without a complete workload total. Gene-count delivery is separate from completed differential-expression or enrichment analysis. Platform evaluation and RNA QC do not establish regulatory qualification or therapeutic efficacy.
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
- Automated k-mer and comparative-genomics searches for marker and primer candidates; prepared candidate sequences and comparison tables. Reviewed panel-analysis code and QA/QC.
- Contributed NGS data analysis and interpretation to collaborative panel development and evaluation.
- Supported interpretation of NGS outputs across food and environmental sample contexts.
- Collaborative outcomes included two peer-reviewed papers in 2023 and one joint patent contribution in 2022.

#section("TECHNICAL-LISTING DOCUMENT CONTRIBUTIONS")
- Reviewed diagnostic marker-search/panel functions, panX applicability and algorithm differentiation for technical and patent-review materials.
- Authored, revised and submitted technical-evaluation explanations, figures and tables; wrote the assigned preliminary-listing application section.

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

#note[Reference sizes and benchmark rates on this case-study page document its input and evaluation context.]

#section("GENOME EVIDENCE WORKFLOW")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*Host + phage genomes* #linebreak() QC + annotation], [→],
  note[*Independent evidence* #linebreak() taxonomy + lifestyle + termini], [→],
  note[*Tail interpretation* #linebreak() KL target + structure],
)

#section("ANALYSIS DELIVERY")
- Analyzed bacterial and phage genome quality, taxonomy, lifestyle and gene content; prepared phage candidate-assessment reports.
- Compared related phage genomes and organized references accounting for genome start positions and sequence orientation.
- Selected RBP candidates for target capsule types, generated domain-combination sequences and compared sequences and protein structures.

#section("SOFTWARE AND DATABASE DEVELOPMENT")
- Built an RBP reference database from literature and public sequences and implemented candidate searches by target capsule type.
- Developed a capsule-type prediction library and trained and cross-validated ML classifiers for enzyme–target pairs.
- Contributed to phage cocktail selection software based on measured host-range tables; verified target-strain and required-phage calculations for candidate combinations.

#section("TECHNICAL SUPPORT")
- Provided technical support for input, calculation and result-output issues in host-range, clustering and gene-analysis software.
- Prepared analysis specifications and reproduction records for external developer integration; compared execution results from source and installed packages.

#section("TECHNICAL CASE EVIDENCE")
The checked reference snapshot has 7,759 sequences in 5,467 clusters; K labels cover 442 rows and 62 labels, including 107 literature-backed rows. KL tables contain 446 part rows, 627 ranked entries and 800 evidence rows. Host-range input covers 221 strains and 74 phages. Saved 110-query-per-mode label inclusion was 85/110 (77.3%) excluding the query and 48/110 (43.6%) excluding its cluster.

#section("ANONYMIZED REPORT CASE")
- Four genomes were consistent with lytic *Przondovirus* calls and short DTR packaging with 180-183 bp repeats; three capsule targets matched supported references at 95.4-98.8% identity.
- A candidate's 129-aa anchor alignment covered 99.2% of the region; domain/structure evidence supported a module-replacement hypothesis for experimental follow-up.

#section("INTERPRETATION BOUNDARY")
The saved benchmark has 110 queries per mode and measures inclusion of at least one true target label, not complete label-set agreement or external validity. Its record correspondence to the current 107 literature-backed K-label rows is not established. Candidate sequences and structures do not establish adsorption, host range or lytic efficacy without experimental validation.

#pagebreak()
#kicker("Project 06 · Wittgenbio research")
#linebreak()
#text(size: 21pt, weight: "bold", fill: navy)[CRC Atlas and Cell-Type Annotation]

#section("CRC SINGLE-CELL ATLAS WORKFLOW")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*Single-cell datasets* #linebreak() QC + metadata], [→],
  note[*Integrated CRC atlas* #linebreak() harmonization + clustering], [→],
  note[*Cell-type annotation* #linebreak() cell labels + marker summaries],
)

#section("PUBLIC-STUDY INTEGRATION AND CELL-TYPE ANNOTATION")
- Standardized expression matrices and metadata from public studies; performed QC, cross-study integration and clustering and prepared H5AD data.
- Assigned cell-type labels using cluster-marker expression and author annotations; produced cell-level annotations and marker summaries.

#section("TUMOR AND NORMAL-TISSUE EXPRESSION ANALYSIS")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*CRC atlas* #linebreak() tumor expression], [→],
  note[*CRC candidate analysis* #linebreak() patient / specimen comparison], [←],
  note[*External normal atlas* #linebreak() tissue expression filters],
)
- Annotated cell types and analyzed expression in an externally supplied normal-tissue atlas; compared tumor and patient/specimen expression and prepared CRC candidate tables using normal-tissue expression filters.
- Produced expression comparisons by cell type, tissue and patient/specimen, with CRC candidate analysis tables.

#section("PUBLIC EVIDENCE BOUNDARY")
#note[
  These analyses support RNA-level candidate prioritization. Transcript expression does not establish cell-surface protein abundance, clinical safety, or treatment response. Private datasets and internal identifiers are not disclosed.
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
