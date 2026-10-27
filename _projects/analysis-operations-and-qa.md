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

## Analysis delivery and technical support

- Delivered genome assemblies, annotations, strain comparisons, microbiome reports and transcriptome count/coverage results for research questions.
- Prepared interpretable reports and data files, with client/internal-researcher discussion of results, additional analyses and reanalysis requirements.
- Maintained automated result conversion, functional-annotation outputs and phylogenetic/visual reporting.

## Internal service operations and management

- Assigned analyses, managed schedules and result review, and maintained SOPs, turnaround and quality controls.
- Investigated analysis-environment, result and report issues; coordinated technical responses, follow-up actions and result redelivery.
- Reviewed chromosome, contig and unplaced-sequence records and provided NCBI submission-related technical support.

Retained communications and delivered outputs support these examples. No complete lifetime workload total is inferred from email or order-code mentions. The [detailed experience record]({% link _pages/experience.md %}) also covers technical-listing materials, training and infrastructure.

## What is standardized

- Required metadata and input checks before compute starts
- Environment and parameter capture for reproducibility
- Technical quality gates before biological interpretation
- Structured review and deliverable packaging
- A feedback path for reruns, clarification, and retained provenance

## Boundary

The shared platform has four execution profiles: 16S, ITS, WGS and hybrid assembly. RNA and other research analyses are broader service work, not additional profiles of that platform. Gene-count delivery does not establish completed differential-expression or enrichment analysis; external RNA QC and method evaluation do not establish regulatory qualification or therapeutic efficacy.
