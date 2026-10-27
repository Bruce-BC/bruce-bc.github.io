---
layout: page
title: CRC Single-Cell Atlas and Cell-Type Annotation
description: Wittgenbio CRC atlas construction, cell-type annotation, and RNA-level therapeutic-target evidence from tumor and external normal-tissue expression.
img:
importance: 1
category: research
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Wittgenbio analysis delivery

Concurrent role alongside employment at MicrobiotiX (approximately three months).

At **Wittgenbio** (July–October 2026), I built a public-study **colorectal cancer (CRC) single-cell atlas**, annotated cell types and analyzed CRC marker and therapeutic-target candidates using tumor and normal-tissue expression comparisons.

## CRC single-cell atlas workflow

<div class="project-tool-workflow" data-workflow-id="single_cell_rnaseq_workflow" markdown="1">

```mermaid
flowchart LR
    single_cell_datasets[Single-cell RNA-seq datasets] --> metadata_standardization[H5AD and metadata standardization]
    metadata_standardization --> cell_quality_control[Cell-level quality control]
    cell_quality_control --> study_integration[Normalization and multi-study integration]
    study_integration --> clustering_annotation[Clustering and cell-type annotation]
    clustering_annotation --> tumor_normal_evidence[Tumor and normal-tissue evidence]
    tumor_normal_evidence --> provenance_review[CRC candidate analysis tables]
    class metadata_standardization,cell_quality_control,study_integration,clustering_annotation,tumor_normal_evidence,provenance_review project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="single_cell_rnaseq_workflow" %}

</div>

The workflow standardizes public-study expression matrices and metadata, applies QC, integrates studies and clusters cells to prepare H5AD data. Marker expression and author annotations guide cell-type labels.

## Public-study integration and cell-type annotation

- Standardized expression matrices and metadata from public studies; performed QC, cross-study integration and clustering and prepared H5AD data.
- Assigned cell-type labels using cluster-marker expression and author annotations; produced cell-level annotations and marker summaries.

## Tumor and normal-tissue expression analysis

- Annotated cell types and analyzed expression in an externally supplied normal-tissue atlas; compared tumor and patient/specimen expression and prepared CRC candidate tables using normal-tissue expression filters.
- Produced expression comparisons by cell type, tissue and patient/specimen, with CRC candidate analysis tables.

## Interpretation boundary

Raw-count availability, sequencing-depth differences, annotation coverage and source provenance constrain interpretation. The CRC atlas was constructed by integrating public single-cell studies; the normal-tissue atlas was externally supplied and then annotated and analyzed. Off-target filtering describes expression-based screening. These analyses support RNA-level candidate prioritization. Transcript expression does not establish cell-surface protein abundance, clinical safety, or treatment response.
