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

<div class="project-tool-workflow" data-workflow-id="marker_discovery_workflow" markdown="1">

```mermaid
flowchart TD
    curated_complete_genomes[Curated complete genomes] --> consistency_checks[Assembly and annotation consistency checks]
    consistency_checks --> whole_genome_comparison[Whole-genome comparison]
    whole_genome_comparison --> pangenome_region_context[Pan-genome and region context]
    pangenome_region_context --> candidate_intervals[Candidate intervals]
    candidate_intervals --> specificity_conservation_review[Specificity and conservation review]
    specificity_conservation_review --> candidate_region[Approximately 17 kb candidate region]
    candidate_region --> assay_constraints[Downstream assay constraints]
    class consistency_checks,whole_genome_comparison,pangenome_region_context,specificity_conservation_review,assay_constraints project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="marker_discovery_workflow" %}

</div>

## Approach

I compared complete genomes, inspected region-level context, and filtered candidate differences against conservation, specificity, and downstream assay constraints. This moved the work from an undirected list of variants toward a bounded region that could be reviewed biologically and experimentally.

## Outcome and evidence

The analysis prioritized an approximately **17 kb candidate region** for follow-up. The useful artifact was not only the interval itself, but the traceable reasoning from genome selection through comparative evidence and practical constraints.

## Boundary

Computational prioritization does not establish diagnostic performance. Wet-lab verification, inclusivity/exclusivity testing, and evaluation on broader strain diversity are required before deployment as a marker.
