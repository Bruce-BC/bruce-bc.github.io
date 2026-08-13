---
layout: about
title: About
permalink: /
subtitle: Bioinformatician · Bacteriophage Research · In Silico Design

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <p>Microiotix · Wittgenbio</p>
    <p>South Korea</p>

selected_papers: true
social: true

announcements:
  enabled: false
  scrollable: false
  limit: 0

latest_posts:
  enabled: false
  scrollable: false
  limit: 0
---

<style>
  @media (max-width: 575.98px) {
    .post-header .desc {
      overflow: visible;
      white-space: normal;
    }

    article .profile.float-right {
      float: none !important;
      width: 100% !important;
      max-width: 220px;
      margin: 0 auto 2rem !important;
    }

    article .profile .more-info {
      text-align: center;
    }

    article .profile + h2 {
      clear: both;
    }
  }
</style>

## Research aim

My ultimate research goal is to **observe biological phenomena through computation, represent them in measurable form, and reach conclusions that are proportional to the evidence**. Biology does not respect disciplinary boundaries, so I am interested in research that connects experimental biology, genomics, statistics, computer science, protein structure, systems engineering, and model evaluation.

My career has followed that path across scales. I began with wet-lab research on **mast-cell-mediated allergic inflammation**, then worked on **NGS pathogen panels, microbial genomics, microbiome analysis, and reproducible workflow engineering**. I now analyze **bacterial and bacteriophage genomes**, construct _Klebsiella pneumoniae_ **tail/RBP and KL-type evidence resources**, and use sequence and protein-structure evidence for **in silico phage design** at Microiotix. At Wittgenbio, I work on **bulk-to-single-cell inference and virtual-cell research**, asking how population-level measurements can be connected to cell composition, cell state, and predicted response without hiding uncertainty.

## Reverse engineering living systems

My longer-term objective is to **reverse-engineer biological systems**: to understand how information, regulation, structure, and environment interact from the genome to the cell, tissue, organism, and population. The practical purpose is to identify structural failure modes, distinguish causal mechanisms from correlations, and eventually make biological intervention and redesign more rational and testable.

I sometimes use a computing analogy to frame this problem. A genome resembles both **persistent information storage** and a **shared execution specification**, but the analogy is incomplete. Cellular behavior is not determined by DNA sequence alone; it emerges from gene regulation, epigenetic state, molecular interaction networks, developmental history, and the surrounding environment. Cells in one body largely inherit the same genome, yet somatic mutations produce cellular mosaics, and adaptive immune cells deliberately rearrange immunoglobulin loci and refine them through somatic hypermutation.[^1][^2] A multicellular organism is therefore better approached as a **distributed, stateful, versioned system** than as a machine controlled by one central program.

Git is useful here as a metaphor, not as a biological claim: cells maintain local molecular state while remaining constrained by inherited information and lineage history. Tissue stem cells support renewal within particular lineages, but they are not a literal central repository, and acquired changes in ordinary somatic cells are generally not transmitted to descendants. The value of the comparison is methodological—it encourages attention to provenance, branching, state transitions, error accumulation, repair, and compatibility across levels of organization.

My long-horizon mission is to understand these mechanisms well enough to help repair disease-associated structural failures and support the safe redesign of genomes and cellular systems. Ultimately, I am interested in whether such knowledge could expand the environments in which humans can survive, including conditions beyond Earth. That is an aspiration rather than a present capability; progress toward it must be incremental, quantitatively evaluated, biologically grounded, and constrained by safety and ethics.

## At a glance

- **6+ years** in applied bioinformatics and genomics operations
- **98 archived project orders** reviewed as a conservative lower bound across WGS, hybrid, amplicon, shotgun, and RNA work
- **7 SCI(E) publications** spanning NGS pathogen panels and experimental biomedicine
- **2 peer-reviewed NGS panel papers and 1 joint patent** connected to foodborne-pathogen detection

## Current research

### Microiotix

- Bacterial genome analysis, including host-genome and capsule-locus context for phage research
- Phage genome analysis spanning quality control, annotation, taxonomy, lifestyle, packaging, and tail-gene interpretation
- _K. pneumoniae_ tail/RBP and KL-type database construction, curation, and evaluation
- Protein structure prediction, structure-based annotation, and reference-structure comparison
- In silico tail-RBP design with explicit compatibility criteria and wet-lab validation boundaries

### Wittgenbio

- Bulk-to-single-cell inference that connects bulk expression profiles with curated single-cell references
- Virtual-cell modeling and evaluation for computational representations of cell state and response

The current-role [Klebsiella phage genomics and tail-design case study]({% link _projects/klebsiella-phage-genomics-and-tail-design.md %}) presents an anonymized example. It integrates seven core phage-analysis tools, a 7,759-sequence capsule-target reference resource, and sequence-plus-structure evidence without exposing sample identifiers or internal reference IDs.

The [Wittgenbio bulk-to-single-cell and virtual-cell case study]({% link _projects/bulk-to-single-cell-and-virtual-cell.md %}) describes this research track at method level. Private datasets, model implementations, and performance metrics are intentionally excluded until they can be disclosed.

Explore the [project workflows]({% link _pages/projects.md %}), the [publication record]({% link _pages/publications.md %}), or download the [resume]({{ '/assets/pdf/Byungcheol_Kang_Bioinformatics_Resume.pdf' | relative_url }}) and [project portfolio]({{ '/assets/pdf/Byungcheol_Kang_Bioinformatics_Portfolio.pdf' | relative_url }}).

## Education

**M.S. in Medical Science, Kyungpook National University School of Medicine**<br>
February 2016 – August 2018

Studied mast-cell-mediated allergic inflammation using cell culture, flow cytometry, ELISA, Western blotting, and animal experiments. This work established the experimental-design, statistical-analysis, and scientific-writing foundations that now inform my computational research.

**B.S. in Biotechnology, Kyungpook National University**<br>
Minor in Psychology · March 2008 – February 2016

[^1]: [The Somatic Mosaicism across Human Tissues Network](https://www.nature.com/articles/s41586-025-09096-7), _Nature_ (2025).

[^2]: [V(D)J recombination](https://pubmed.ncbi.nlm.nih.gov/16551259/) and [somatic hypermutation](https://pubmed.ncbi.nlm.nih.gov/16868548/) alter immunoglobulin loci during B-cell development and activation; this is not whole-genome rewriting for a specialized plasma-cell purpose.
