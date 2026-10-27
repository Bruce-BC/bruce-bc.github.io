---
layout: page
title: Klebsiella Phage Genomics and Tail-RBP Design
description: Current-role bacterial and phage genomics, capsule-target references, prediction-method evaluation, protein structure analysis, and in silico tail design.
img:
importance: 0
category: research
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Current-role scope

At MicrobiotiX, my work covers bacterial/phage genome analysis, RBP candidate design, reference and prediction software, and technical support for analysis and developer integration. I contribute to cocktail-selection software and verify combination calculations against measured host-range data. The anonymized report case and separately checked reference/benchmark evidence below retain their original evaluation scope.

## Design bench

<figure class="project-result-figure">
  <img src="{{ '/assets/img/projects/microiotix-phage-design-bench.svg' | relative_url }}" alt="Sanitized phage engineering bench showing a lytic phage chassis, two tail-protein slots, and a K64 capsule target">
  <figcaption><strong>Sanitized static excerpt of the supplied design bench.</strong> The phage–capsule interaction scene is retained while internal genome and reference identifiers are removed. Genome evidence, capsule-target tail/RBP references, anchor compatibility, and protein-structure support are evaluated together before a module-replacement candidate advances to wet-lab testing.</figcaption>
</figure>

## What the bench evaluates

| Evidence layer    | Concrete analysis                                                     | Decision supported                                          |
| ----------------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| Phage genome      | Assembly QC, taxonomy, lifestyle and read-termini review              | Select a lytic, structurally characterized chassis          |
| Host genome       | _K. pneumoniae_ assembly and K-locus typing                           | Define the capsule target independently of the phage call   |
| Tail/RBP database | Separate K-serotype/KL-locus labels, provenance and sequence coverage | Identify candidate receptor-binding or depolymerase modules |
| Protein structure | Domain-boundary review, Foldseek/PDB support and fold retention       | Reject candidates likely to disrupt attachment or folding   |
| Design gate       | Anchor identity/coverage, genus context and label consistency         | Rank domain swap, module replacement or tandem addition     |

## Analysis, development and technical support

- Performed genome comparisons and RBP candidate analyses to prepare assessment reports, candidate sequences and sequence/structure comparison records.
- Built capsule-target references and prediction libraries and contributed to cocktail-selection software and calculation verification.
- Provided analysis-software technical support and prepared developer specifications, examples, result formats and reproduction records, with source and installed-package execution checks.

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

## Tail, capsule-type, and structure-design workflow

<div class="project-tool-workflow" data-workflow-id="tail_kl_design_workflow" markdown="1">

```mermaid
flowchart LR
    literature_and_public_sequences[Literature and public sequences] --> kpn_tail_kl_database[KPN tail / RBP and K/KL database]
    phage_tail_proteins[Phage tail proteins] --> depolymerase_consensus[Depolymerase cross-validation]
    kpn_tail_kl_database --> capsule_target_evidence[K/KL target evidence]
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

## Reference resource and evaluation evidence

| Checked artifact or protocol                       | Recorded result                                      | Interpretation                                                |
| -------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| Collected tail/RBP sequences                       | 7,759 rows in 5,467 clusters                         | Collection and clustering; experimental labels cover a subset |
| K-type labels                                      | 442 label-bearing rows; 62 distinct labels           | Rows and label types are different units                      |
| Literature-backed experimental K labels            | 107 rows                                             | Kept separate from inferred labels                            |
| Measured host-range input                          | 221 bacterial strains × 74 phages                    | Dataset dimensions for candidate-combination comparisons      |
| KL-specific design tables                          | 446 part rows; 627 ranked entries; 800 evidence rows | Searchable candidate and evidence records                     |
| 110-query benchmark, exclude query alone           | Correct-label inclusion 85/110 (77.3%)               | At least one true target label included                       |
| Same 110-query benchmark, exclude sequence cluster | Correct-label inclusion 48/110 (43.6%)               | Same inclusion metric with related-sequence evidence withheld |
| 80–90% identity subset, query-alone exclusion      | Base-label hit 0/4                                   | Original base-label metric; small mode-specific subset        |
| 80–90% identity subset, cluster exclusion          | Base-label hit 3/17                                  | Original base-label metric; a different mode-specific subset  |

The benchmark is a saved reference snapshot with 110 queries per mode, evaluated by inclusion of at least one correct target label; it is not external validation. Its record correspondence to the current 107 literature-backed experimental K-label rows has not been established. The two 80–90% rows use the original benchmark's single base-label metric, not the inclusion metric above; their different, small subsets do not establish a general failure interval. Archived model-development and cross-validation records document label-imbalance and data-overlap concerns and the decision to defer an additional predictor.

## Results highlighted from the report

- In an anonymized four-genome study, independent evidence converged on **lytic Przondovirus** genomes with **short DTR packaging** and 180-183 bp terminal repeats.
- Assigned three capsule targets with **95.4-98.8% sequence identity** to experimentally supported references while retaining unresolved targets as data gaps instead of forcing labels.
- Used independent protein-language-model classifiers to distinguish structural tail proteins from candidate depolymerases, then checked the calls with sequence, domain, and structure evidence.
- Used **ProstT5 and Foldseek** with experimental PDB references to detect conserved folds at sequence identities too low for ordinary sequence search and to review catalytic-domain boundaries.
- Prioritized an engineering candidate using same-genus context, a **129-aa anchor alignment spanning 99.2% of the region**, experimental structure support, label-consistency checks, and predicted structural retention. This supported a **module-replacement hypothesis** for a K64-targeting construct rather than a claim of experimental host-range expansion.

## Boundary

The database and design bench prioritize testable hypotheses. The 100% design display is the upper limit of a capped evaluation score, not an experimental success probability. KL-type prediction should be checked against host-genome evidence such as Kaptive results, and predicted RBP folding, adsorption, host range, and lytic activity still require wet-lab validation.
