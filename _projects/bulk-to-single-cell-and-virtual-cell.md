---
layout: page
title: Bulk-to-Single-Cell and Virtual-Cell Research
description: Current-role methods connecting bulk transcriptomes to single-cell references and evaluating computational cell models.
img:
importance: 1
category: research
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Current-role scope

At Microiotix, I work on **bulk-to-single-cell inference** and **virtual-cell research** alongside bacterial and bacteriophage genomics. This public case study describes the analytical questions and validation structure; private datasets, model implementations, and performance metrics are not disclosed.

## Bulk-to-single-cell workflow

<div class="project-tool-workflow" data-workflow-id="bulk_to_single_cell_workflow" markdown="1">

```mermaid
flowchart LR
    bulk_expression[Bulk expression profiles] --> preprocessing_harmonization[Preprocessing and harmonization]
    single_cell_reference[Single-cell reference atlas] --> reference_curation[Reference curation]
    preprocessing_harmonization --> feature_alignment[Feature-space alignment]
    reference_curation --> feature_alignment
    feature_alignment --> composition_inference[Cell-composition inference]
    feature_alignment --> state_inference[Cell-state inference]
    composition_inference --> validation_uncertainty[Validation and uncertainty review]
    state_inference --> validation_uncertainty
    validation_uncertainty --> interpretable_outputs[Interpretable bulk-to-cell outputs]
    class preprocessing_harmonization,reference_curation,feature_alignment,composition_inference,state_inference,validation_uncertainty project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="bulk_to_single_cell_workflow" %}

</div>

The analysis is organized around compatibility between the bulk dataset and the single-cell reference. Reference composition, feature overlap, batch effects, tissue or condition mismatch, and uncertainty are reviewed before cell-type or cell-state estimates are interpreted.

## Virtual-cell workflow

<div class="project-tool-workflow" data-workflow-id="virtual_cell_workflow" markdown="1">

```mermaid
flowchart LR
    cellular_data[Cellular and molecular data] --> data_model_scope[Data and modeling scope]
    biological_question[Biological question] --> data_model_scope
    data_model_scope --> cell_representation[Computational cell representation]
    cell_representation --> train_evaluation_design[Train and evaluation design]
    train_evaluation_design --> virtual_cell_model[Virtual-cell model]
    virtual_cell_model --> state_response_evaluation[State and response evaluation]
    state_response_evaluation --> biological_review[Biological plausibility review]
    biological_review --> research_hypotheses[Research hypotheses]
    class data_model_scope,cell_representation,train_evaluation_design,virtual_cell_model,state_response_evaluation,biological_review project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="virtual_cell_workflow" %}

</div>

The virtual-cell track focuses on whether a computational representation preserves biologically useful cell-state information and whether predicted states or responses remain reliable outside the data used to build the model.

## Evaluation principles

- Separate model fitting from evaluation data and document reference or condition coverage.
- Compare predictions with measurable biological signals rather than relying on latent-space appearance alone.
- Report where cell types, states, tissues, perturbations, or experimental conditions are underrepresented.
- Treat generated cell states and perturbation responses as hypotheses until they are externally or experimentally validated.

## Boundary

Bulk-to-single-cell outputs are model-based estimates, not direct single-cell measurements. Virtual-cell predictions do not establish biological mechanism or treatment response without independent data and experimental validation.
