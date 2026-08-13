---
layout: page
title: Comparative-genomics Marker Discovery
description: Narrowing complete-genome differences to an approximately 17 kb candidate region.
img:
importance: 1
category: research
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Objective

Identify a genomic region that distinguishes the target group while remaining practical for downstream marker or assay development.

## Workflow

```mermaid
flowchart TD
    A[Curated complete genomes] --> B[Assembly and annotation consistency checks]
    B --> C[Whole-genome comparison]
    C --> D[Pan-genome and region context]
    D --> E[Candidate intervals]
    E --> F[Specificity and conservation review]
    F --> G[Approximately 17 kb candidate region]
    G --> H[Downstream assay constraints]
```

## Approach

I compared complete genomes, inspected region-level context, and filtered candidate differences against conservation, specificity, and downstream assay constraints. This moved the work from an undirected list of variants toward a bounded region that could be reviewed biologically and experimentally.

## Outcome and evidence

The analysis prioritized an approximately **17 kb candidate region** for follow-up. The useful artifact was not only the interval itself, but the traceable reasoning from genome selection through comparative evidence and practical constraints.

## Boundary

Computational prioritization does not establish diagnostic performance. Wet-lab verification, inclusivity/exclusivity testing, and evaluation on broader strain diversity are required before deployment as a marker.
