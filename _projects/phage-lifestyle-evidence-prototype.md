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

```mermaid
flowchart TD
    A[Phage genome] --> B[CheckV quality context]
    A --> C[Pharokka / Phold annotation]
    A --> D[BACPHLIP lifestyle score]
    A --> E[PhaTYP lifestyle score]
    C --> F[Integrase, repressor, excision and lysis evidence]
    B --> G[Evidence table]
    D --> G
    E --> G
    F --> G
    G --> H{Agreement and confidence}
    H --> I[Lytic candidate]
    H --> J[Lysogenic candidate]
    H --> K[Unresolved / manual review]
```

## Design principle

The prototype keeps tool outputs and gene-level signals visible. A consensus label is useful only when the system can explain whether it came from sequence quality, lifestyle classifiers, hallmark genes, or their agreement. Conflicting cases are routed to review instead of being silently forced into a binary answer.

## Host-range extension

A related candidate-discovery layer considers bacterial surface biology—such as LPS and outer-membrane gene variation—when prioritizing phages that may remain relevant against resistant strains. This is a hypothesis-ranking mechanism, not proof of infection.

```mermaid
flowchart LR
    A[Resistant host genomes] --> B[LPS / outer-membrane variation]
    C[Phage receptor and annotation evidence] --> D[Compatibility features]
    B --> D
    D --> E[Ranked phage-host candidates]
    E --> F[Experimental validation]
```

## Current status and publication potential

This is an **independent research prototype**. It becomes publication-grade when tested against an external, leakage-controlled benchmark and compared with both individual tools and simple baselines. Useful novelty would come from demonstrably better calibration, interpretable disagreement handling, or experimentally supported host-range prioritization—not merely chaining existing programs.

## Boundary

Lifestyle prediction and host-range prediction answer different questions. Neither genomic similarity nor bacterial receptor variation alone proves adsorption, infection, or lytic activity; wet-lab validation remains essential.
