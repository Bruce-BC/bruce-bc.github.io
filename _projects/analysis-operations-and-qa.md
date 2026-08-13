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

## Archived project mix

The counts below are a **conservative lower bound** derived from 98 distinct order codes found in archived project communications. They show breadth of operations, not the total number of samples or every project completed.

<div class="project-tool-workflow" data-workflow-id="archived_project_mix" markdown="1">

```mermaid
flowchart LR
    archived_mix[Archived project communications<br/>n = 98] --> wgs_projects[WGS · 28]
    archived_mix --> hybrid_projects[Hybrid · 21]
    archived_mix --> amplicon_16s_projects[16S · 19]
    archived_mix --> shotgun_projects[Shotgun · 18]
    archived_mix --> rna_projects[RNA · 7]
    archived_mix --> its_projects[ITS · 3]
    archived_mix --> other_projects[Other · 2]
    class wgs_projects,hybrid_projects,amplicon_16s_projects,shotgun_projects,rna_projects,its_projects,other_projects project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="archived_project_mix" %}

</div>

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
