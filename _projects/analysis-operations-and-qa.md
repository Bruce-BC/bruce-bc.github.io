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

<div class="project-tool-workflow" data-workflow-id="operating_model" markdown="1">

```mermaid
flowchart LR
    request_question[Request + biological question] --> scope_review[Scope and metadata review]
    scope_review --> workflow_selection[Workflow selection]
    workflow_selection --> execution_qc[Execution + QC]
    execution_qc --> review_gate{Review gate}
    review_gate -->|Revise| workflow_selection
    review_gate -->|Accept| interpretation[Interpretation]
    interpretation --> report_package[Report + data package]
    report_package --> feedback_provenance[Feedback + retained provenance]
    class scope_review,workflow_selection,execution_qc,review_gate,interpretation,report_package,feedback_provenance project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="operating_model" %}

</div>

## Representative analysis and delivery evidence

- Curated complex WGS/hybrid contigs by reviewing Bandage graphs, BLAST and short/long-read depth together; delivered revised reports and assembly-graph/BUSCO technical responses.
- Delivered ANI, AMR, virulence-factor and MLST comparisons, plus panX core-gene comparisons and SVG/Newick trees.
- Produced featureCounts gene-count and alignment summaries and RNA reference depth/coverage results.
- Updated the eggNOG report script to include missing functional categories, orthology and pathway outputs.
- Tested Nanopore Dorado modes and duplex QC and prepared analysis/panX manuals, execution-environment guidance and staff training.

These examples link retained communications with concrete analytical outputs. No complete lifetime workload total is inferred from email or order-code mentions.

## What is standardized

- Required metadata and input checks before compute starts
- Environment and parameter capture for reproducibility
- Technical quality gates before biological interpretation
- Structured review and deliverable packaging
- A feedback path for reruns, clarification, and retained provenance

## Boundary

The shared platform has four execution profiles: 16S, ITS, WGS and hybrid assembly. RNA and other research analyses are broader service work, not additional profiles of that platform. Gene-count delivery does not establish completed differential-expression or enrichment analysis; external RNA QC and method evaluation do not establish regulatory qualification or therapeutic efficacy.
