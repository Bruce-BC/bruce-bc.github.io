---
layout: page
title: Analysis Operations and QA
description: From project intake to reviewed, interpretable delivery across recurring genomics work.
img:
importance: 1
category: operations
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Operating model

As team lead, I connect technical execution with project communication: clarify the biological question, select the analysis profile, monitor quality, review interpretation, and package a result that can be traced back to inputs and parameters.

```mermaid
flowchart LR
    A[Request + biological question] --> B[Scope and metadata review]
    B --> C[Workflow selection]
    C --> D[Execution + QC]
    D --> E{Review gate}
    E -->|Revise| C
    E -->|Accept| F[Interpretation]
    F --> G[Report + data package]
    G --> H[Feedback + retained provenance]
```

## Archived project mix

The counts below are a **conservative lower bound** derived from 98 distinct order codes found in archived project communications. They show breadth of operations, not the total number of samples or every project completed.

```mermaid
pie showData
    title Archived project communications (n=98)
    "WGS" : 28
    "Hybrid" : 21
    "16S" : 19
    "Shotgun" : 18
    "RNA" : 7
    "ITS" : 3
    "Other" : 2
```

| Analysis type | Distinct order codes |
| ------------- | -------------------: |
| WGS           |                   28 |
| Hybrid        |                   21 |
| 16S           |                   19 |
| Shotgun       |                   18 |
| RNA           |                    7 |
| ITS           |                    3 |
| Other         |                    2 |

## What is standardized

- Required metadata and input checks before compute starts
- Environment and parameter capture for reproducibility
- Technical quality gates before biological interpretation
- Structured review and deliverable packaging
- A feedback path for reruns, clarification, and retained provenance

## Boundary

Email-derived order counts can undercount work that used different communication channels, and they should not be interpreted as sample counts, revenue, or independently audited business metrics.
