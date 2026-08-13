---
layout: page
title: Bacteriophage Assembly and Annotation
description: Assembly review, one-contig resolution, and complementary annotation evidence.
img:
importance: 2
category: research
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Objective

Produce reviewable bacteriophage genome assemblies and annotations while keeping assembly confidence separate from biological interpretation.

## Workflow

<div class="project-tool-workflow" data-workflow-id="phage_assembly_annotation" markdown="1">

```mermaid
flowchart LR
    sequencing_reads[Sequencing reads] --> read_qc[Read QC]
    read_qc --> assembly_candidates[Assembly candidates]
    assembly_candidates --> coverage_contiguity_review[Coverage and contiguity review]
    coverage_contiguity_review --> one_contig_final_assembly[One-contig final assembly]
    one_contig_final_assembly --> prokka_annotation[Prokka annotation]
    one_contig_final_assembly --> rast_tk_annotation[RAST-tk annotation]
    prokka_annotation --> reconciled_functional_review[Reconciled functional review]
    rast_tk_annotation --> reconciled_functional_review
    reconciled_functional_review --> portable_workflow_evaluation[ONT and Nextflow evaluation]
    portable_workflow_evaluation --> genome_package_caveats[Genome package + caveats]
    class read_qc,assembly_candidates,one_contig_final_assembly,prokka_annotation,rast_tk_annotation,reconciled_functional_review,portable_workflow_evaluation project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="phage_assembly_annotation" %}

</div>

## Approach

- Compared assembly candidates using contiguity, read support, and genome-scale plausibility.
- Reached single-contig final assemblies across the assessed sample set.
- Supplemented Prokka output with RAST-tk evidence instead of treating one annotation source as definitive.
- Evaluated ONT and Nextflow-based processing as part of a more portable workflow direction.

## Outcome

The work produced compact, reviewable genome packages and a clearer separation between assembly evidence, annotation evidence, and downstream biological claims.

## Boundary

A one-contig assembly is not automatically a complete, circular, or correctly oriented genome. Completion claims still require read-support and terminal-structure checks appropriate to the phage and sequencing design.
