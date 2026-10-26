---
layout: page
title: Experience
permalink: /experience/
description: Company-by-company summary of responsibilities, contributions, and evidence-backed outcomes.
nav: true
nav_order: 3
---

This page summarizes my work by company. It is intentionally limited to public, non-confidential information: internal identifiers, private datasets, undisclosed targets, and proprietary implementation details are excluded.

## MicrobiotiX

**[Phage]**<br>
**Senior Researcher · Bioinformatics · July 2026–present**

### Phage candidate assessment and target references

- Prepared candidate-assessment reports integrating phage taxonomy, gene content, lifestyle and host-recognition protein evidence.
- Cleaned reference genomes duplicated by start-position or orientation differences; corrected duplicate evidence and prior calls through literature and sequence cross-checks.
- Built a reference for finding phage proteins by target capsule type; organized 7,759 collected sequences into 5,467 clusters.
- Recorded 442 rows carrying K-type labels across 62 distinct labels; separated 107 rows with literature-backed experimental K-label evidence from inferred labels.

### Cocktail selection from measured data and prediction-method evaluation

- Developed a cocktail-candidate selection program using measured host-range data for 221 bacterial strains and 74 phages; checked the observed coverage and selection results of candidate combinations.
- Re-evaluated a saved 110-query reference benchmark using the same correct-label-inclusion definition: 85/110 (77.3%) excluding the query alone and 48/110 (43.6%) excluding its sequence cluster; documented false calls and applicability limits.
- Developed and cross-validated capsule-type prediction libraries and ML models; documented label imbalance and leakage risks in the decision to defer an additional predictor.

### Follow-up experiment design and research software

- Compared host-recognition proteins for target capsule types and generated domain-combination candidate sequences and design records.
- Organized 446 part records, 627 ranked candidate entries and 800 evidence rows for KL-specific design-candidate searches.
- Developed research software connecting genome sequences and gene annotations with primer, PCR and cloning design.
- Audited the formula behind a 100% design-tool display and identified it as the upper limit of a capped evaluation score, not an experimental success probability.
- Designed procedures for genome-data registration, analysis and review history; produced handover documents and screen prototypes for researchers and reviewers.

[View the phage candidate assessment and design case study]({% link _projects/klebsiella-phage-genomics-and-tail-design.md %}).

## Wittgenbio

**[Single cell]**<br>
**Computational Biology Research · July–October 2026**

- Reconciled study-specific gene axes, metadata and author annotations; prepared H5AD inputs and annotation records for integrated analysis.
- Compared cluster and label changes across versions, audited inherited calls and tumor/normal specimen metadata, and produced cross-validation tables.
- Prepared cell-type/expression comparisons from externally supplied normal-tissue atlas data; documented donor, specimen and sequencing-depth differences and interpretation limits.

[View the CRC atlas and tissue-expression case study]({% link _projects/bulk-to-single-cell-and-virtual-cell.md %}).

## Sanigen

**[Bacteria / Metagenome / Phage / Transcriptomics]**<br>
**Bioinformatics Team Lead · Senior Researcher · March 2020–November 2025**

### Genome analysis and reanalysis

- Selected and manually corrected contigs using Bandage graphs and read depth; revised and redelivered WGS/hybrid assembly reports.
- Repeated assemblies under Kraken2 read-selection and trimming conditions; checked circular contigs and BUSCO results.
- Corrected reference, FASTA-header and unmerged chromosome-contig errors; reran assembly and Prokka annotation.
- Delivered additional SNP, INDEL and plasmid analyses, hybrid-contig VCF/IGV comparisons, locus crosswalks and GFF/GBK files.
- Delivered ANI heatmaps/trees, AMR, virulence-factor and MLST visualizations, and panX core-gene trees in SVG/Newick formats.
- Aligned vector references, filtered reads and delivered requested-region edits; selected viral reads from mixed inputs, assembled them with metaSPAdes and identified assemblies with BLAST.
- Summarized and delivered predicted prophage candidates, intervals and mobility potential.

### Custom microbiome and transcriptome analysis

- Compared QIIME 2 classifications with BLAST sequence filters, removed chloroplast/mitochondrial reads and adjusted sampling depth.
- Reran shotgun and LEfSe analyses for revised groups/subsets; reissued KEGG-function and genus-comparison statistics, LDA figures and reports.
- Reanalyzed single reads and OTUs after abnormal read-pair merging; delivered specified-position variant, representative-sequence alignment and sequence-match percentage tables.
- Produced featureCounts gene counts and alignment summaries, TSS-position depth and TEX-group comparison records.
- Compared RNA-clustering and error-correction settings; generated target/non-target classifications, reference alignments and position-level coverage.
- Compared Nanopore Dorado sup/hac/fast modes and duplex-read QC; prepared hit-marker and sample-by-marker comparisons for pathogen-panel input methods.

### Workflow and report fixes

- Built common 16S, ITS, WGS and hybrid execution profiles, separated analysis/container/server settings and connected QC with HTML reporting.
- Fixed panel-TSV generation bugs and anomalous calculations; delivered conversion and SVG/HTML output scripts with test files.
- Corrected missing eggNOG functional-category, orthology and pathway outputs and implemented their automatic report generation.
- Corrected tree-JSON/metadata mismatches, restored missing nodes and table fields, and redelivered the results.
- Resolved NanoPlot dependency/version errors and missing visualization packages; corrected QIIME 2 version-specific commands and execution instructions.

### Marker and panel research; technical-listing materials

- Automated primer-candidate analysis and FASTA generation with k-mer-length/GC filters; compared core genes and candidate markers with BLAST.
- Aligned related-species genomes and extracted variants; delivered candidate-region FASTA files and figures and documented discrimination limits in identical sequence regions.
- Verified allergen reference/accession mappings, built custom BLAST databases and delivered target/toxin-gene searches with identity/coverage criteria.
- Resolved discrepancies among NCBI reclassification, SILVA entries and submitted species labels using sequence/ANI comparisons; documented marker-discrimination and non-detection limits.
- Contributed analysis code, QA/QC and interpretation to NGS pathogen-panel research, two collaborative papers and a joint patent.
- Reviewed diagnostic marker-search and panel-result functions and panX applicability; prepared algorithm-differentiation and patent-review materials.
- Authored, revised and submitted technical-evaluation explanations, figures and tables; wrote the assigned section of the preliminary-listing application.

### Service, training and infrastructure operations

- Coordinated additional analyses, exceptions and redelivery schedules; addressed client questions about results, delays and follow-up actions.
- Reviewed chromosome/contig mappings and additional unplaced-sequence submissions before NCBI registration; provided technical responses.
- Prepared analysis/panX theory and practical manuals, training and handover materials; trained new team members.
- Maintained HPC/Linux environments, NAS and data-transfer infrastructure; reviewed capacity, backup and server-configuration requirements.

Related [platform]({% link _projects/integrated-microbial-genomics-platform.md %}), [operations]({% link _projects/analysis-operations-and-qa.md %}), [marker-discovery]({% link _projects/comparative-genomics-marker-discovery.md %}) and [panel]({% link _projects/foodborne-pathogen-ngs-panel.md %}) cases provide method and output context.

## Evidence boundary

The reference benchmark is an internal, saved-data evaluation. Correct-label inclusion means at least one true target label is present in the prediction; it does not require the complete label set to match. RNA count/alignment delivery is separate from completed differential-expression or enrichment analysis. RNA-level target prioritization and computational phage designs require separate experimental validation.

[View the concise responsibility summaries in the CV]({% link _pages/cv.md %}).
