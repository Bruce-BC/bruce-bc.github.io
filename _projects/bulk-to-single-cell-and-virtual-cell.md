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

## Wittgenbio research scope

At **Wittgenbio** (July–October 2026), I built a multi-study **colorectal cancer (CRC) single-cell atlas** and performed **cell-type annotation**. I separately annotated externally supplied normal-tissue atlas data and combined its tissue-specific expression with CRC tumor and patient/specimen evidence to evaluate therapeutic-target candidates at the RNA level.

## CRC single-cell atlas workflow

<div class="project-tool-workflow" data-workflow-id="single_cell_rnaseq_workflow" markdown="1">

```mermaid
flowchart LR
    single_cell_datasets[Single-cell RNA-seq datasets] --> metadata_standardization[H5AD and metadata standardization]
    metadata_standardization --> cell_quality_control[Cell-level quality control]
    cell_quality_control --> study_integration[Normalization and multi-study integration]
    study_integration --> clustering_annotation[Clustering and cell-type annotation]
    clustering_annotation --> tumor_normal_evidence[Tumor and normal-tissue evidence]
    tumor_normal_evidence --> provenance_review[Provenance and uncertainty review]
    class metadata_standardization,cell_quality_control,study_integration,clustering_annotation,tumor_normal_evidence,provenance_review project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="single_cell_rnaseq_workflow" %}

</div>

The atlas workflow integrates measured single-cell datasets and reviews their metadata, cell quality, study differences, and cell-type labels. Annotation consistency and tumor/normal label discrepancies remain traceable to the source data.

## Normal-tissue atlas annotation and expression analysis

I performed cell-type annotation on externally supplied normal-tissue atlas data and compared tissue-specific expression. Candidate therapeutic targets were evaluated against normal-tissue expression while accounting for sequencing-depth differences and annotation coverage.

## Annotation outputs and provenance

- Cross-checked original author annotations, marker evidence, and tumor/normal metadata.
- Produced integrated/annotated data, marker and annotation summaries, version-comparison tables and source-traceability records.
- Summarized candidate-level expression, patient/specimen consistency, coverage and interpretation limits in comparison tables with follow-up validation items.
- Analyzed CRC markers after expression-based off-target filtering using externally supplied normal-tissue atlas comparisons.
- Reviewed raw-count availability and sequencing-depth differences when interpreting target-expression evidence.

## Boundary

The CRC atlas was constructed by integrating public single-cell studies; the normal-tissue atlas was externally supplied and then annotated and analyzed. Off-target filtering describes expression-based screening. These analyses support RNA-level candidate prioritization. Transcript expression does not establish cell-surface protein abundance, clinical safety, or treatment response.
