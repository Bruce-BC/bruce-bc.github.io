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

### Phage genome analysis and candidate assessment

- Analyzed phage taxonomy, gene content and lifestyle; prepared candidate-assessment reports distinguishing tool disagreements from insufficient evidence.
- Consolidated reference genomes differing only in start position or orientation; corrected duplicate evidence and prior calls through literature and sequence comparisons.

### Contribution to phage cocktail selection software

- Contributed to cocktail-selection software based on measured host-range tables; independently checked the calculated target strains and required phages for candidate combinations.

### RBP analysis and design

- Built a reference database to retrieve host-recognition proteins by target capsule type; distinguished experimentally supported targets from targets inferred by sequence similarity.
- Developed and cross-validated capsule-type prediction libraries and ML models; deferred an additional predictor based on label imbalance and overlap risks between training and evaluation data.
- Selected host-recognition protein candidates for target capsule types, generated domain-combination sequences and prepared sequence/structure comparisons.

[View the technical phage assessment and design case study]({% link _projects/klebsiella-phage-genomics-and-tail-design.md %}).

## Wittgenbio

**[Single cell]**<br>
**Computational Biology Research · July–October 2026**

- Reconciled study-specific gene axes, metadata and author annotations; prepared H5AD inputs and annotation records for integrated analysis.
- Compared cluster and label changes across versions, audited inherited calls and tumor/normal specimen metadata, and produced cross-validation tables.
- Prepared cell-type and expression comparisons from externally supplied normal-tissue atlas data; analyzed CRC markers after expression-based off-target filtering.

[View the CRC atlas and tissue-expression case study]({% link _projects/bulk-to-single-cell-and-virtual-cell.md %}).

## Sanigen

**[Bacteria / Metagenome / Phage / Transcriptomics]**<br>
**Bioinformatics Team Lead · Senior Researcher · March 2020–November 2025**

### Genome analysis

- Performed WGS and hybrid assembly, gene annotation and functional analysis; manually reviewed and curated contigs and checked circular genomes.
- Compared strain characteristics using ANI, AMR, virulence factors, MLST, pan-genome and phylogenomic analyses.
- Analyzed SNPs, INDELs, plasmids, prophages and specified gene regions; delivered result tables and VCF/GFF/GBK files.
- Selected target reads from vector-reference and mixed-sample data; assembled and identified viral genomes.

### Microbiome and transcriptome analysis

- Performed 16S, ITS and shotgun microbiome analyses; compared communities, functions and LEfSe results under study-specific conditions and prepared reports.
- Produced gene-level read counts, TSS-position depth and TEX-group comparisons; analyzed target-RNA alignments and coverage.
- Compared Nanopore Dorado modes and duplex-read QC; evaluated pathogen-panel detection results under different input conditions.

### Workflow development and automation

- Developed common 16S, ITS, WGS and hybrid analysis workflows and automated QC/HTML reporting.
- Automated analysis-result conversion and functional-annotation outputs; maintained phylogenetic and visualization reports.

### Internal service operations and technical support

- Managed analysis assignments, schedules, result review, SOPs, turnaround and quality control.
- Handled analysis inquiries from clients and internal researchers; coordinated result interpretation and additional-analysis or reanalysis requirements.
- Investigated and resolved analysis-environment, result and reporting issues; coordinated follow-up actions and result delivery.
- Reviewed chromosome, contig and unplaced-sequence records for NCBI registration and provided submission-related technical support.

### Marker and panel research; technical-listing materials

- Automated k-mer and comparative-genomics searches for marker and primer candidates; prepared candidate sequences and validation records.
- Built custom references and BLAST databases for related species, allergens and toxin genes; cross-checked target-discrimination criteria and taxonomy.
- Contributed analysis code, QA/QC and interpretation to NGS pathogen-panel research, two collaborative papers and a joint patent.
- Reviewed diagnostic marker-search and panel-result functions and panX applicability; prepared algorithm and patent-review materials.
- Contributed to the technology-special listing task force; authored and submitted technical-evaluation materials, figures and tables and the assigned section of the preliminary-listing application.

### Training and analysis infrastructure

- Prepared analysis and panX training/practical manuals and handover materials; trained new team members.
- Operated HPC/Linux analysis environments, NAS and data-transfer infrastructure; reviewed capacity, backups and server configurations.

Related [platform]({% link _projects/integrated-microbial-genomics-platform.md %}), [operations]({% link _projects/analysis-operations-and-qa.md %}), [marker-discovery]({% link _projects/comparative-genomics-marker-discovery.md %}) and [panel]({% link _projects/foodborne-pathogen-ngs-panel.md %}) cases provide method and output context.

## Evidence boundary

Off-target filtering here uses RNA expression to prioritize candidates; clinical safety and efficacy require separate validation. RNA count/alignment delivery is separate from completed differential-expression or enrichment analysis. Computational phage designs require experimental validation.

[View the concise responsibility summaries in the CV]({% link _pages/cv.md %}).
