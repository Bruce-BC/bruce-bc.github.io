---
layout: page
title: Klebsiella Phage Genomics and Tail-RBP Design
description: Current-role bacterial and phage genomics, KL-type evidence, protein structure analysis, and in silico tail design.
img:
importance: 0
category: research
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Current-role scope

At Microiotix, my work connects **bacterial genome analysis**, **phage genome analysis**, _Klebsiella pneumoniae_ **tail/RBP and KL-type database construction**, **protein structure analysis**, and **in silico phage design**. The case study below is translated and condensed from an internal analysis report; sample identifiers and internal reference IDs have been removed.

## Genome evidence workflow

<div class="project-tool-workflow" data-workflow-id="genome_evidence_workflow" markdown="1">

```mermaid
flowchart LR
    bacterial_genomes[Bacterial genomes] --> host_genome_context[Host genome and K-locus context]
    phage_assemblies[Phage assemblies] --> quality_annotation[Genome QC and phage annotation]
    phage_assemblies --> lifestyle_taxonomy[Lifestyle and taxonomy]
    paired_end_reads[Paired-end reads] --> termini_packaging[Read-termini and packaging analysis]
    quality_annotation --> structure_annotation[Structure-based protein annotation]
    host_genome_context --> integrated_genome_report[Integrated evidence report]
    lifestyle_taxonomy --> integrated_genome_report
    termini_packaging --> integrated_genome_report
    structure_annotation --> integrated_genome_report
    class host_genome_context,quality_annotation,lifestyle_taxonomy,termini_packaging,structure_annotation,integrated_genome_report project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="genome_evidence_workflow" %}

</div>

The workflow keeps independent evidence streams separate until integration. Taxonomy combines nearest-neighbor and graph-clustering evidence; lifestyle combines hallmark-gene review with two machine-learning approaches; packaging is determined from raw-read termini rather than inferred from terminase annotation alone.

## Tail, KL-type, and structure-design workflow

<div class="project-tool-workflow" data-workflow-id="tail_kl_design_workflow" markdown="1">

```mermaid
flowchart LR
    literature_and_public_sequences[Literature and public sequences] --> kpn_tail_kl_database[KPN tail / RBP and KL-type database]
    phage_tail_proteins[Phage tail proteins] --> depolymerase_consensus[Depolymerase cross-validation]
    kpn_tail_kl_database --> capsule_target_evidence[KL-type target evidence]
    depolymerase_consensus --> capsule_target_evidence
    phage_tail_proteins --> protein_structure_analysis[Protein structure analysis]
    capsule_target_evidence --> compatibility_scoring[Anchor and target compatibility]
    protein_structure_analysis --> compatibility_scoring
    compatibility_scoring --> design_routes[Domain swap / module replacement / tandem addition]
    design_routes --> export_package[Genome FASTA / protein FASTA / GenBank]
    export_package --> wet_lab_validation[Wet-lab validation]
    class kpn_tail_kl_database,depolymerase_consensus,capsule_target_evidence,protein_structure_analysis,compatibility_scoring,design_routes,export_package project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="tail_kl_design_workflow" %}

</div>

## Evidence highlighted from the report

- Built a **7,759-sequence capsule-target reference resource** covering depolymerase, tailspike, and receptor-binding proteins, with source traceability, confidence labels, and experimentally verified KL targets explicitly marked.
- In an anonymized four-genome study, independent evidence converged on **lytic Przondovirus** genomes with **short DTR packaging** and 180-183 bp terminal repeats.
- Assigned three capsule targets with **95.4-98.8% sequence identity** to experimentally supported references while retaining unresolved targets as data gaps instead of forcing labels.
- Used independent protein-language-model classifiers to distinguish structural tail proteins from candidate depolymerases, then checked the calls with sequence, domain, and structure evidence.
- Used **ProstT5 and Foldseek** with experimental PDB references to detect conserved folds at sequence identities too low for ordinary sequence search and to review catalytic-domain boundaries.
- Prioritized an engineering candidate using same-genus context, a **129-aa anchor alignment spanning 99.2% of the region**, experimental structure support, label-consistency checks, and predicted structural retention.

## Boundary

The database and design bench prioritize testable hypotheses. KL-type prediction should be checked against host-genome evidence such as Kaptive results, and predicted RBP folding, adsorption, host range, and lytic activity still require wet-lab validation.
