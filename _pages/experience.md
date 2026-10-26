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

**Bioinformatician · July 2026–present**

### Main work

- Develop bacterial genome analysis workflows covering quality control, annotation, typing, antimicrobial resistance, and prophage detection to support production-strain assessment.
- Integrate phage genome quality, termini and packaging, taxonomy, lifestyle predictions, and tail-protein evidence into reports with traceable conclusions.
- Develop and extend analysis libraries and command-line tools combining experimental host-range matrices with sequence and protein features for clustering comparisons and cocktail candidate selection.
- Build and maintain a Klebsiella pneumoniae tail/RBP reference database linking sequences to K-type and KL-type evidence, with source citations and separate experimental and predicted labels.
- Develop in silico design tools that evaluate tail-protein candidates for specified capsule targets and generate candidate design sequences and review reports.
- Compare protein sequences, domains, predicted structures, and reference structures to support RBP annotation and assess the structural plausibility of replacement and fusion candidates.

### Contributions and outcomes

- Built a capsule-target reference resource covering depolymerase, tailspike, and receptor-binding proteins with traceable evidence and explicit confidence labels.
- Integrated seven core analysis tools in an anonymized four-genome case study; independent evidence converged on lytic phages with short direct-terminal-repeat packaging.
- Resolved supported capsule-target assignments while retaining unsupported targets as data gaps instead of forcing labels.
- Prioritized a structure-supported module-replacement hypothesis using anchor coverage, same-genus context, experimental reference structures, label consistency, and predicted fold retention; host-range expansion remains a wet-lab question.

[View the phage genomics and tail-design case study]({% link _projects/klebsiella-phage-genomics-and-tail-design.md %}).

## Wittgenbio

**Computational Biology Research · July–October 2026**

### CRC data integration and annotation evidence

- Standardized H5AD data and metadata, performed QC/integration/clustering, cross-checked marker-based annotations with author labels, and audited tumor/normal specimen metadata and label lineage.
- Produced integrated/annotated data, marker/annotation summaries, version-comparison tables and source-traceability records. Cell-type annotation and malignancy assessment remained separate review questions.

### Tumor and normal-tissue target-expression evidence

- Reviewed tumor and patient/specimen expression and cross-study consistency; annotated externally supplied normal-tissue atlas data and set comparison criteria around raw-count availability and depth differences.
- Summarized candidate-level expression evidence, coverage, interpretation limits and follow-up validation items in comparison tables. Conclusions support RNA-level prioritization; cell-surface protein abundance, internalization, therapeutic efficacy and clinical safety require separate experimental validation.

[View the CRC atlas and tissue-expression case study]({% link _projects/bulk-to-single-cell-and-virtual-cell.md %}).

## Sanigen

**Bioinformatics Team Lead · Senior Researcher · March 2020–November 2025**

### Shared execution and report generation

- Connected 16S, ITS, WGS and hybrid profiles through a common workflow, linking analysis, container and server settings with QC and HTML reporting.
- Prepared reusable execution configurations, retained QC/log outputs, reports and analysis manuals. These four platform profiles are distinct from the full range of analyses performed.

### Complex assembly review

- Reviewed Bandage graphs, BLAST and short/long-read depth together to curate WGS/hybrid contigs and explain assembly-graph and BUSCO evidence.
- Delivered revised analysis reports and graph-based technical responses for the cases reviewed.

### Comparative analysis and report maintenance

- Delivered ANI, AMR, virulence-factor and MLST figures/tables, panX core-gene comparisons and SVG/Newick trees, and featureCounts gene-count and alignment summaries.
- Updated the eggNOG output script and corrected annotation reports to include missing functional categories, orthology and pathways. Gene-count delivery is distinct from completed differential-expression or enrichment analysis.

### Candidate-marker and pathogen-panel research

- Developed comparative-genomics and k-mer marker-search tools and automated candidate-marker analysis.
- Reviewed panel-analysis code and QA/QC and contributed NGS analysis and interpretation to two collaborative papers and a joint patent contribution.

### External RNA QC and technology evaluation

- Delivered RNA reference-alignment, depth and target/non-target summaries, identifying the scope of completed analysis and items requiring follow-up.
- Tested Nanopore Dorado modes and duplex QC and provided test findings and execution-environment guidance.

### Service operations, training and infrastructure

- Managed SOPs, turnaround, task allocation, result review and client technical support while maintaining Linux/HPC environments and NAS/data-transfer infrastructure.
- Prepared analysis and panX manuals, staff training and handover materials.

Related [platform]({% link _projects/integrated-microbial-genomics-platform.md %}), [operations]({% link _projects/analysis-operations-and-qa.md %}), [marker-discovery]({% link _projects/comparative-genomics-marker-discovery.md %}) and [panel]({% link _projects/foodborne-pathogen-ngs-panel.md %}) cases provide method and output context; the [CV]({% link _pages/cv.md %}) provides the concise responsibility summary.

## Evidence boundary

The outcomes above describe analysis systems, curated evidence resources, reproducible workflows, and decision support. Computational target calls and in silico phage designs remain hypotheses until independently or experimentally validated.
