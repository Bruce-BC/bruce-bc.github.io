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

**Computational Biology Research · July 1 – October 1, 2026**

### Main work

- Built a colorectal cancer (CRC) single-cell atlas and performed cell-type annotation.
- Annotated externally supplied normal-tissue atlas data and compared tissue-specific expression.
- Developed tumor/normal analysis workflows that preserve study, sample, and cell provenance while examining epithelial and disease-associated cell states.
- Evaluated therapeutic-target evidence through tumor expression, patient-level reproducibility, and normal-tissue off-target risk rather than relying on a single aggregate score.
- Contributed to virtual-cell research through computational cell-state representation and evaluation.

### Contributions and outcomes

- Integrated single-cell datasets across studies into a CRC atlas with traceable metadata and cell-type labels.
- Added source-aware validation gates, contamination checks, and alternative integration paths so conclusions are not determined by one embedding or batch-correction method.
- Structured target assessment around tumor coverage, between-patient consistency, normal-cell specificity, and uncertainty, producing reviewable evidence for research prioritization.
- Reviewed annotation consistency, tumor/normal label discrepancies, and interpretation limits; kept virtual-cell evaluation separate from cell-type annotation.

[View the single-cell and virtual-cell research case study]({% link _projects/bulk-to-single-cell-and-virtual-cell.md %}).

## Sanigen

**Bioinformatics Team Lead · Senior Researcher · March 2020–October 2025**

### Main work

- Designed and maintained a shared analysis platform for 16S, ITS, WGS, and hybrid assembly, standardizing execution, quality control, and reporting.
- Performed microbial genomics and metagenomics analyses, led technical review, and coordinated team assignments, project schedules, and client communication.
- Contributed comparative-genomics and NGS analyses to foodborne-pathogen panel development, supporting two peer-reviewed publications and a joint patent.

### Contributions and outcomes

- Standardized validation, environment capture, checkpoints, reporting, and deliverables across multiple assay profiles.
- Coordinated analysis and review for a conservative lower bound of **98 archived project orders** across WGS, hybrid assembly, amplicon, shotgun, and RNA work.
- Contributed to two peer-reviewed NGS pathogen-panel publications and a joint patent for an NGS-based foodborne-pathogen detection method.
- Built reusable comparative-genomics and assembly workflows that reduced one-off analysis and made reruns and technical review more traceable.

Supporting publications, projects, and technical skills are listed in the [CV]({% link _pages/cv.md %}).

## Evidence boundary

The outcomes above describe analysis systems, curated evidence resources, reproducible workflows, and decision support. Computational target calls, inferred cell states, and in silico phage designs remain hypotheses until independently or experimentally validated.
