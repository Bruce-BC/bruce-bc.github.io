---
layout: page
title: Integrated Microbial Genomics Platform
description: One reproducible execution model for 16S, ITS, WGS, and hybrid assembly.
img:
importance: 1
category: platforms
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

## Problem

Analysis services tend to fragment as each assay accumulates separate scripts, environments, quality checks, and report conventions. The result may be scientifically sound but difficult to reproduce, review, or operate consistently.

## My role

I designed and maintained a shared Snakemake platform that separates common execution concerns from assay-specific logic. The system supports 16S, ITS, WGS, and hybrid-assembly profiles while keeping inputs, environments, checkpoints, logs, and deliverables traceable.

## Shared execution

<div class="project-tool-workflow" data-workflow-id="shared_execution" markdown="1">

```mermaid
flowchart LR
    fastq_metadata[FASTQ + metadata] --> metadata_validation[Metadata validation]
    metadata_validation --> snakemake_orchestration[Snakemake orchestration]
    snakemake_orchestration --> environment_isolation[Conda and container isolation]
    environment_isolation --> qc_checkpoints[QC and checkpoint gates]
    qc_checkpoints --> versioned_deliverables[Versioned reports and deliverables]
    class metadata_validation,snakemake_orchestration,environment_isolation,qc_checkpoints,versioned_deliverables project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="shared_execution" %}

</div>

## 16S and ITS

The amplicon profiles share the same QIIME 2 execution contract in the Sanigen pipeline evidence, with profile-specific parameters coming from `config_16S.yaml`, `config_ITS.yaml`, and `qiime_commands.yaml`.

<div class="project-tool-workflow" data-workflow-id="amplicon_16s_its" markdown="1">

```mermaid
flowchart LR
    illumina_reads[Illumina amplicon reads] --> illumina_qc[Illumina QC]
    illumina_qc --> qiime_import[QIIME 2 import]
    qiime_import --> dada2_denoising[DADA2 denoising]
    dada2_denoising --> taxonomy_classification[Taxonomy classification]
    taxonomy_classification --> phylogeny_diversity[Phylogeny and diversity]
    phylogeny_diversity --> taxonomy_exports[Taxonomy exports]
    class illumina_qc,qiime_import,dada2_denoising,taxonomy_classification,phylogeny_diversity,taxonomy_exports project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="amplicon_16s_its" %}

</div>

## WGS

The active WGS path in the inspected Sanigen workflow evidence is the Illumina assembly and review branch wired through `WGS_snakefile`, `illumina_trim.smk`, `WGS_assembly.smk`, `WGS_depth.smk`, `Assembly_QC.smk`, `WGS_annotation.smk`, and `abricate.smk`.

<div class="project-tool-workflow" data-workflow-id="wgs_profile" markdown="1">

```mermaid
flowchart LR
    wgs_reads[Illumina WGS reads] --> illumina_qc[Illumina QC]
    illumina_qc --> adapter_trimming[Adapter trimming]
    adapter_trimming --> spades_assembly[SPAdes assembly]
    spades_assembly --> assembly_filtering[Assembly filtering]
    assembly_filtering --> depth_remap[Depth remapping]
    depth_remap --> assembly_qc[Assembly QC]
    assembly_qc --> annotation_and_amr[Annotation and AMR/VF review]
    class illumina_qc,adapter_trimming,spades_assembly,assembly_filtering,depth_remap,assembly_qc,annotation_and_amr project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="wgs_profile" %}

</div>

## Hybrid

The active hybrid path in the inspected Sanigen workflow evidence supports both `unicycler` and `flye` branches, with Flye optionally polished through Pilon before the shared depth, QC, annotation, and mapping steps.

<div class="project-tool-workflow" data-workflow-id="hybrid_profile" markdown="1">

```mermaid
flowchart LR
    hybrid_inputs[Illumina + Nanopore inputs] --> illumina_qc[Illumina QC]
    hybrid_inputs --> nanopore_filtering[Nanopore merge and filtering]
    illumina_qc --> adapter_trimming[Adapter trimming]
    adapter_trimming --> unicycler_assembly[Unicycler hybrid assembly]
    nanopore_filtering --> unicycler_assembly
    nanopore_filtering --> flye_assembly[Flye long-read assembly]
    flye_assembly --> pilon_polishing[Pilon polishing]
    unicycler_assembly --> depth_review[Depth review]
    pilon_polishing --> depth_review
    depth_review --> assembly_qc[Assembly QC]
    assembly_qc --> annotation_and_maps[Annotation and maps]
    class illumina_qc,adapter_trimming,nanopore_filtering,unicycler_assembly,flye_assembly,pilon_polishing,depth_review,assembly_qc,annotation_and_maps project-tool-node
```

{% include project_tool_explorer.liquid project=page.slug workflow="hybrid_profile" %}

</div>

## Engineering decisions

- **One execution contract:** consistent metadata validation, logging, checkpoints, and output structure.
- **Isolated environments:** Conda for tool-level reproducibility, with Docker or Apptainer where stronger isolation is useful.
- **Profile-specific logic:** assay methods remain modular instead of being forced into a single monolithic script.
- **Reviewable failure:** failed checks stop or flag the run before interpretation and delivery.

## Not mapped as active workflow nodes

The Sanigen evidence also distinguishes a few non-active or not-currently-wired items that I intentionally left out of the active workflow tables above.

| Item     | Evidence in `sanigen_pipeline`                                                                                                                         | Status used here      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| Medaka   | Pinned in `workflow/config/containers.yaml` as `medaka:1.11.3`, but no active rule include in the inspected profile Snakefiles                         | configured-only       |
| GTDB-Tk  | Implemented in `workflow/rules/gtdbtk.smk`, but not included by the inspected `WGS_snakefile` or `HYB_snakefile`                                       | implemented-not-wired |
| PhiX     | Test-only artifacts appear under `test_wgs/3-1.Trimmomatic_PhiXFiltered` and `toy_data/PhiX.fasta`, not in the inspected active WGS Snakefile includes | documented-only       |
| Filtlong | No active rule or config hit appeared in the inspected workflow files, so it is excluded from the active map                                           | not-applicable        |

## Outcome and evidence

The platform consolidated four major analysis types under a common operational model and became the basis for recurring microbial-genomics work. The public [Bioinformatics_pipeline](https://github.com/Bruce-BC/Bioinformatics_pipeline) repository shows a subset of the workflow approach; client data and production-only components are not public.

## Boundary

This page describes architecture and operating practice, not a claim that every assay uses identical methods or thresholds. Tool choice and acceptance criteria remain assay- and project-specific.
