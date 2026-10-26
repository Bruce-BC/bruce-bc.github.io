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
  - Analyze bacterial and phage genomes and prepare phage candidate-assessment reports.
  - Develop phage cocktail selection and capsule-type prediction software; design receptor-binding protein candidates.
])

#role("Wittgenbio", "Computational Biology Research", "2026.07 - 2026.10", [
  - Built a multi-study CRC scRNA-seq atlas and performed cell-type annotation.
  - Cross-checked tumor/normal metadata, author annotations and marker evidence, with versioned label and source tracking.
  - Annotated externally supplied normal-tissue atlas data and compared normal-tissue, tumor and patient/specimen expression to assess therapeutic-target candidates.
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
- Reran WGS/hybrid assemblies under read-selection and trimming conditions, curated contigs and redelivered corrected reports.
- Corrected reference, FASTA-header and chromosome-contig errors; reran assembly/Prokka annotation and checked circular contigs, graphs and BUSCO results.

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
- Led NGS analysis services and team operations, including analysis design, hands-on work, result review, SOPs, turnaround management and quality control.
- Performed genomics, microbiome and transcriptome analyses; automated workflows and reports and resolved analysis errors.
- Developed comparative-genomics and k-mer marker-discovery methods and contributed to collaborative NGS pathogen-panel research.
- Contributed to the technology-special listing task force, preparing and revising technical-evaluation and preliminary-listing application materials.
- Delivered custom analyses and method evaluations for external collaborators, client technical support and training materials.
- Maintained HPC/Linux analysis environments, NAS storage and data-transfer infrastructure.

#section("SELECTED ANALYSIS AND DELIVERY OUTPUTS")
- Reissued ANI/AMR/virulence/MLST figures, panX SVG/Newick trees, and shotgun/LEfSe subgroup comparisons with KEGG/genus statistics and LDA plots.
- Delivered featureCounts counts, alignment summaries, TSS-depth/TEX comparisons, and RNA target/non-target coverage; compared Nanopore Dorado modes and duplex QC.
- Fixed panel TSV/calculation bugs, tree-JSON/metadata mismatches and missing report nodes; restored eggNOG functional-category, orthology and pathway outputs.
- Resolved NanoPlot dependency/version and missing-visualization errors; corrected QIIME 2 commands and prepared analysis/panX manuals and training.

#section("ADDITIONAL CUSTOM ANALYSES")
- Filtered vector/mixed-virus reads, assembled viral reads with metaSPAdes and identified assemblies by BLAST; delivered predicted prophage intervals and mobility evidence.
- Reanalyzed abnormal read-pair/OTU cases and sequence-match tables; provided hybrid-contig VCF/IGV comparisons and pre-NCBI chromosome/contig-submission reviews.
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
- Developed comparative-genomics and k-mer candidate-marker tools and reviewed panel-analysis code and QA/QC.
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

#section("CANDIDATE ASSESSMENT AND TARGET REFERENCES")
- Integrated taxonomy, gene content, lifestyle and host-recognition evidence into candidate-assessment reports; corrected duplicate references and conflicting prior calls.
- Collected and clustered 7,759 tail/RBP sequences into 5,467 clusters for target-capsule searches. K-type labels cover 442 rows and 62 distinct labels, with 107 literature-backed experimental K-label rows separated from inferred labels.

#section("MEASURED HOST RANGE AND PREDICTION EVALUATION")
- Developed cocktail-candidate selection from measured host-range data for 221 strains and 74 phages; checked candidate combinations against observed coverage.
- Replayed a saved 110-query reference benchmark: correct-label inclusion was 85/110 (77.3%) with only the query excluded and 48/110 (43.6%) with its sequence cluster excluded.
- Developed capsule-type prediction libraries and ML models; documented label imbalance/leakage risks and deferred an additional predictor.

#section("TARGET-CAPSULE CANDIDATE DESIGN")
- Generated protein/module candidate sequences and design records for target capsule types; organized KL-specific tables of 446 part rows, 627 ranked entries and 800 evidence rows.

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
  note[*Cell-type annotation* #linebreak() labels + validation],
)

#section("MULTI-STUDY DATA CURATION AND ANNOTATION")
- Standardized public-study metadata, performed cell-level QC, integrated studies, and clustered cells for CRC atlas annotation.
- Cross-checked original author labels and marker evidence against tumor/normal metadata; retained source provenance and version-specific label decisions.
- Produced integrated/annotated data, marker/annotation summaries and version-comparison tables.

#section("TUMOR AND NORMAL-TISSUE EXPRESSION EVIDENCE")
#grid(columns: (1fr, auto, 1fr, auto, 1fr), align: center,
  note[*CRC atlas* #linebreak() tumor expression], [→],
  note[*Target candidate review* #linebreak() patient / specimen evidence], [←],
  note[*External normal atlas* #linebreak() tissue expression],
)
- Annotated externally supplied normal-tissue atlas data and reviewed tissue-specific expression.
- Combined tissue-specific expression with tumor and patient/specimen evidence; analyzed CRC markers after expression-based off-target filtering.
- Summarized candidate expression, coverage and interpretation limits in comparison tables with follow-up validation items; reviewed raw-count availability and depth differences.

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
