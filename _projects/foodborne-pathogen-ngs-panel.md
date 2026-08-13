---
layout: page
title: Foodborne Pathogen NGS Panel
description: Translating multi-pathogen detection into papers, panel evaluation, and a joint patent.
img:
importance: 3
category: research
related_publications: true
mermaid:
  enabled: true
  zoomable: true
---

## Objective

Support simultaneous detection and identification of foodborne pathogens in complex matrices using a targeted next-generation sequencing panel.

## Development loop

<div class="project-tool-workflow" data-workflow-id="panel_development_loop" markdown="1">

```mermaid
flowchart LR
    target_organisms[Target organisms] --> marker_primer_design[Marker and primer design]
    marker_primer_design --> panel_construction[Panel construction]
    panel_construction --> matrix_specific_evaluation[Matrix-specific evaluation]
    matrix_specific_evaluation --> sequence_analysis[Sequence analysis]
    sequence_analysis --> performance_review[Sensitivity and specificity review]
    performance_review -->|Refine| marker_primer_design
    performance_review -->|Report| publication_patent_evidence[Publication and patent evidence]
    class marker_primer_design,panel_construction,matrix_specific_evaluation,sequence_analysis,performance_review,publication_patent_evidence project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="panel_development_loop" %}

</div>

## Contribution

I contributed bioinformatics and comparative-genomics analysis to panel development and evaluation, including marker-oriented work and the interpretation of NGS outputs across food and environmental sample contexts.

## Evidence

- Two peer-reviewed papers published in 2023: one on agricultural wastewater and one on fermented foods.
- One joint patent contribution in 2022 for an NGS-based primer set and detection method for foodborne bacteria.
- The corresponding records are listed on the [Publications]({% link _pages/publications.md %}) page.

## Boundary

Publication and patent records document the collaborative result. They do not imply sole authorship, sole invention, or universal performance across matrices that were not evaluated.
