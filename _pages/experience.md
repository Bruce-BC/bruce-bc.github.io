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

**Senior Researcher · Bioinformatics · July 2026–present**

### Genome analysis and reference curation

- Reconciled phage lifestyle, taxonomy, packaging and tail/RBP evidence across tools; reported conflicting calls and unresolved findings.
- Removed circular-genome reference duplicates caused by start-coordinate or reverse-complement differences; mapped closely related phage SNPs to CDS and synonymous/non-synonymous substitutions.
- Integrated literature and public-sequence RBP references, merged duplicate sequences and retained cumulative citations, separate K-serotype/KL-locus fields and experimental/inferred labels.

### Analysis libraries and research tools

- Corrected host-range matrix matching, cutoffs and mechanism constraints; separated maximum-coverage and minimum-combination logic, repaired solver time-limit and feasible-solution handling, and cross-checked results with independent MILP calculations.
- Implemented full/common-input cluster comparisons and call contracts for strain-level defense, pan-genome and functional-cluster outputs, including unresolved states.
- Implemented analysis adapters, JSON responses, exception handling and version links; verified matching call contracts across source, installed wheels and reproducibility bundles.
- Implemented GenBank/FASTA and annotation I/O, reverse-strand coordinates, primer extensions and PCR/cloning connections; fixed string-input crashes and missing error responses.
- Fixed self-referencing capsid-capacity calculations, missing safety margins, multi-record GenBank parsing and terminal-repeat false calls; added regression checks.

### Candidate design, developer integration and database planning

- Wrote target-specific donor/module ranking and tandem candidate-sequence generation; emitted domain boundaries, structural evidence and validation gaps.
- Compared integration inputs, expected values and actual results; prepared call specifications, terminology mappings and reproducible cases for external developers.
- Designed genome-database intake, QC, assembly, annotation and review workflows with versioning, provenance and role-based handoffs; delivered QC-gate specifications and synthetic interactive screen prototypes.

[View the phage genomics and tail-design case study]({% link _projects/klebsiella-phage-genomics-and-tail-design.md %}).

## Wittgenbio

**Computational Biology Research · July–October 2026**

- Reconciled study-specific gene axes, metadata and author annotations; prepared H5AD inputs and annotation records for integrated analysis.
- Compared cluster and label changes across versions, audited inherited calls and tumor/normal specimen metadata, and produced cross-validation tables.
- Prepared cell-type/expression comparisons from externally supplied normal-tissue atlas data; documented donor, specimen and sequencing-depth differences and interpretation limits.

[View the CRC atlas and tissue-expression case study]({% link _projects/bulk-to-single-cell-and-virtual-cell.md %}).

## Sanigen

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

RNA count/alignment delivery does not imply completed differential-expression or enrichment analysis. RNA-level target prioritization and computational phage designs require separate experimental validation.

[View the concise responsibility summaries in the CV]({% link _pages/cv.md %}).
