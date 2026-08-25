---
layout: page
title: Experience
permalink: /experience/
description: Company-by-company summary of responsibilities, contributions, and evidence-backed outcomes.
nav: true
nav_order: 3
---

This page summarizes my work by company. It is intentionally limited to public, non-confidential information: internal identifiers, private datasets, undisclosed targets, and proprietary implementation details are excluded.

## Wittgenbio

**Computational Biology Research · July 2026–present**

### Main work

- Build and harmonize multi-study single-cell RNA-seq references, including data ingestion, H5AD standardization, metadata alignment, quality control, integration, clustering, and cell-type annotation.
- Develop tumor/normal analysis workflows that preserve study, sample, and cell provenance while examining epithelial and disease-associated cell states.
- Evaluate therapeutic-target evidence through tumor expression, patient-level reproducibility, and normal-tissue off-target risk rather than relying on a single aggregate score.
- Develop bulk-to-single-cell inference methods and evaluate computational representations of cell state for virtual-cell research.

### Contributions and outcomes

- Established a reproducible path from heterogeneous public studies to analysis-ready single-cell references with explicit dataset and sample provenance.
- Added source-aware validation gates, contamination checks, and alternative integration paths so conclusions are not determined by one embedding or batch-correction method.
- Structured target assessment around tumor coverage, between-patient consistency, normal-cell specificity, and uncertainty, producing reviewable evidence for research prioritization.
- Defined evaluation boundaries for bulk-to-single-cell and virtual-cell outputs, separating model fitting, held-out assessment, biological plausibility review, and claims requiring experimental validation.

[View the single-cell and virtual-cell research case study]({% link _projects/bulk-to-single-cell-and-virtual-cell.md %}).

## Microiotix

**Bioinformatician · July 2026–present**

### Main work

- Analyze bacterial genomes for host and capsule-locus context and phage genomes for quality, annotation, taxonomy, lifestyle, packaging, and tail-gene interpretation.
- Build and evaluate a _Klebsiella pneumoniae_ tail/RBP and KL-type evidence resource with literature provenance, confidence labels, and experimentally supported targets.
- Combine sequence, protein-language-model, domain, and structure evidence to identify divergent tail proteins and review engineering candidates.
- Develop in silico phage-design workflows that assess target evidence, anchor compatibility, taxonomic context, label conflicts, and predicted structural retention before wet-lab testing.

### Contributions and outcomes

- Built a **7,759-sequence capsule-target reference resource** covering depolymerase, tailspike, and receptor-binding proteins with traceable evidence and explicit confidence labels.
- Integrated seven core analysis tools in an anonymized four-genome case study; independent evidence converged on lytic phages with short direct-terminal-repeat packaging.
- Resolved supported capsule-target assignments while retaining unsupported targets as data gaps instead of forcing labels.
- Prioritized a structure-supported module-replacement hypothesis using anchor coverage, same-genus context, experimental reference structures, label consistency, and predicted fold retention; host-range expansion remains a wet-lab question.

[View the phage genomics and tail-design case study]({% link _projects/klebsiella-phage-genomics-and-tail-design.md %}).

## Sanigen

**Bioinformatics Team Lead · Senior Researcher · March 2020–October 2025**

### Main work

- Led a five-person bioinformatics team delivering microbial genomics, metagenomics, and sequencing-based pathogen-analysis projects.
- Designed and maintained a shared Snakemake platform for 16S, ITS, whole-genome sequencing, and hybrid-assembly workflows.
- Performed and reviewed genome assembly, annotation, comparative genomics, microbiome analysis, quality control, interpretation, and client-facing delivery.
- Maintained reproducible Linux environments with Conda, Docker, and Apptainer and developed in-house analysis utilities.

### Contributions and outcomes

- Standardized validation, environment capture, checkpoints, reporting, and deliverables across multiple assay profiles.
- Coordinated analysis and review for a conservative lower bound of **98 archived project orders** across WGS, hybrid assembly, amplicon, shotgun, and RNA work.
- Contributed to two peer-reviewed NGS pathogen-panel publications and a joint patent for an NGS-based foodborne-pathogen detection method.
- Built reusable comparative-genomics and assembly workflows that reduced one-off analysis and made reruns and technical review more traceable.

Supporting publications, projects, and technical skills are listed in the [CV]({% link _pages/cv.md %}).

## Evidence boundary

The outcomes above describe analysis systems, curated evidence resources, reproducible workflows, and decision support. Computational target calls, inferred cell states, and in silico phage designs remain hypotheses until independently or experimentally validated.
