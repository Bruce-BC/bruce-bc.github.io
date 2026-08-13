---
layout: page
title: Phage Lifestyle Evidence Prototype
description: Evidence integration for lytic/lysogenic classification and host-range candidate discovery.
img:
importance: 4
category: research
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Research question

Can existing tools be combined into an end-to-end system that distinguishes lytic and lysogenic phages while preserving conflicting evidence—and then helps prioritize phages relevant to resistant bacterial hosts?

## Evidence workflow

<div class="project-tool-workflow" data-workflow-id="lifestyle_evidence_workflow" markdown="1">

```mermaid
flowchart TD
    phage_genome[Phage genome] --> checkv_quality_context[CheckV quality context]
    phage_genome --> annotation_evidence[Pharokka / Phold annotation]
    phage_genome --> lifestyle_scores[BACPHLIP / PhaTYP lifestyle scores]
    annotation_evidence --> hallmark_gene_review[Integrase, repressor, excision and lysis review]
    checkv_quality_context --> evidence_table[Evidence table]
    lifestyle_scores --> evidence_table
    hallmark_gene_review --> evidence_table
    evidence_table --> agreement_confidence{Agreement and confidence}
    agreement_confidence --> lytic_candidate[Lytic candidate]
    agreement_confidence --> lysogenic_candidate[Lysogenic candidate]
    agreement_confidence --> unresolved_review[Unresolved / manual review]
    class checkv_quality_context,annotation_evidence,lifestyle_scores,hallmark_gene_review,evidence_table,agreement_confidence project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="lifestyle_evidence_workflow" %}

</div>

## Design principle

The prototype keeps tool outputs and gene-level signals visible. A consensus label is useful only when the system can explain whether it came from sequence quality, lifestyle classifiers, hallmark genes, or their agreement. Conflicting cases are routed to review instead of being silently forced into a binary answer.

## Host-range extension

A related candidate-discovery layer considers bacterial surface biology—such as LPS and outer-membrane gene variation—when prioritizing phages that may remain relevant against resistant strains. This is a hypothesis-ranking mechanism, not proof of infection.

<div class="project-tool-workflow" data-workflow-id="host_range_extension" markdown="1">

```mermaid
flowchart LR
    resistant_host_genomes[Resistant host genomes] --> host_surface_variation[LPS / outer-membrane variation]
    phage_side_evidence[Phage receptor and annotation evidence] --> phage_receptor_evidence[Phage receptor and annotation evidence]
    host_surface_variation --> compatibility_features[Compatibility features]
    phage_receptor_evidence --> compatibility_features
    compatibility_features --> ranked_candidates[Ranked phage-host candidates]
    ranked_candidates --> experimental_validation[Experimental validation]
    class host_surface_variation,phage_receptor_evidence,compatibility_features,experimental_validation project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="host_range_extension" %}

</div>

## Current status and publication potential

This is an **independent research prototype**. It becomes publication-grade when tested against an external, leakage-controlled benchmark and compared with both individual tools and simple baselines. Useful novelty would come from demonstrably better calibration, interpretable disagreement handling, or experimentally supported host-range prioritization—not merely chaining existing programs.

## Boundary

Lifestyle prediction and host-range prediction answer different questions. Neither genomic similarity nor bacterial receptor variation alone proves adsorption, infection, or lytic activity; wet-lab validation remains essential.
