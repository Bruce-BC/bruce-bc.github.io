#import "theme.typ": *
#setup(title: "Byung-cheol Kang · Bioinformatics Resume")

#grid(
  columns: (1fr, auto),
  column-gutter: 10pt,
  [
    #text(size: 24pt, weight: "bold", fill: navy)[Byung-cheol Kang]
    #linebreak()
    #text(size: 10.5pt, fill: teal)[Bioinformatician · Bacteriophage Research · In Silico Design]
  ],
  [
    #align(right)[
      #text(size: 8pt)[South Korea]
      #linebreak()
      #link("mailto:sentim2@gmail.com")[#raw("sentim2@gmail.com")] · (+82) 10-5366-3411
      #linebreak()
      #link("https://github.com/Bruce-BC")[github.com/Bruce-BC] · #link("https://bruce-bc.github.io")[bruce-bc.github.io]
    ]
  ],
)

#section("PROFILE")
Bioinformatician with more than six years of experience connecting bacterial and bacteriophage genomics, bulk-to-single-cell inference, virtual-cell research, protein-structure analysis, reproducible workflow engineering, and research operations. At *Microiotix*, I work on phage genomics and in silico design; at *Wittgenbio*, I work on bulk-to-single-cell inference and virtual-cell research. Previously led a five-person bioinformatics team and built shared Snakemake workflows for 16S, ITS, WGS, and hybrid assembly.

#grid(
  columns: (1fr, 1fr, 1fr, 1fr),
  gutter: 5pt,
  metric("6+ years", "Applied bioinformatics"),
  metric("4 profiles", "16S · ITS · WGS · Hybrid"),
  metric("98+", "Archived project-order lower bound"),
  metric("7 papers", "SCI(E) publication record"),
)

#section("EXPERIENCE")

#role("Wittgenbio", "Computational Biology Research", "2026.07.01 - PRESENT", [
  - Develop and evaluate bulk-to-single-cell inference approaches that connect bulk expression profiles with curated single-cell references while retaining validation and uncertainty evidence.
  - Contribute to virtual-cell research through computational cell-state representation, model evaluation, and biologically grounded interpretation of predicted states or responses.
])

#role("Microiotix", "Bioinformatician", "2026.07 - PRESENT", [
  - Analyze bacterial genomes for host context and phage genomes for quality, annotation, taxonomy, lifestyle, packaging, and tail-gene interpretation.
  - Built and evaluated a *Klebsiella pneumoniae* tail/RBP and KL-type resource with 7,759 curated sequences, traceable sources, confidence labels, and verified targets explicitly flagged.
  - Apply Phold, ProstT5, Foldseek, and experimental PDB references to structure-informed annotation and engineered-RBP assessment.
  - Integrated CheckV, Pharokka, Phold, BACPHLIP, PhaTYP, PhaGCN, and PhageTerm in an anonymized four-genome study that converged on lytic Przondovirus genomes with short DTR packaging.
  - Develop tail-RBP design candidates using anchor compatibility, capsule-target evidence, taxonomic context, cluster conflicts, and structural retention.
])

#role("Sanigen", "Bioinformatics Team Lead · Senior Researcher", "2020.03 - 2025.10", [
  - Led a five-person bioinformatics team delivering microbial WGS, metagenomics, assembly, annotation, comparative-genomics, and research support.
  - Designed and maintained a shared Snakemake platform covering 16S, ITS, WGS, and Illumina-ONT hybrid assembly with validation, logging, quality gates, and report packaging.
  - Standardized execution with Conda, Docker, and Apptainer across Linux compute environments; wrote Python, R, and Bash utilities for QC, analysis, visualization, and reporting.
  - Supported comparative-genomics marker discovery and foodborne-pathogen NGS panel development that contributed to two 2023 papers and one joint patent.
  - Coordinated analysis review and delivery across a conservative lower bound of 98 archived project orders.
])

#pagebreak()

#section("SELECTED PROJECTS")

#grid(columns: (1fr, 1fr), gutter: 10pt,
  [
    #kicker("Platform")
    #h(4pt)
    *Integrated microbial genomics platform* \
    Unified 16S, ITS, WGS, and hybrid profiles under a shared Snakemake execution contract. Active tooling included FastQC, MultiQC, QIIME 2/DADA2, SPAdes, Flye/Unicycler, QUAST, BUSCO, Prokka, Abricate, eggNOG-mapper, and custom reports.

    #v(7pt)
    #kicker("Research")
    #h(4pt)
    *Comparative-genomics marker discovery* \
    Narrowed complete-genome differences to an approximately 17 kb candidate region while separating computational prioritization from downstream assay validation.
  ],
  [
    #kicker("Phage")
    #h(4pt)
    *Klebsiella phage genomics and tail-RBP design* \
    Connected host and phage genomics to KL-type evidence, protein structure comparison, and reproducible design exports. Prioritized one candidate with a 129-aa anchor alignment spanning 99.2% of the region and experimental structure support.

    #v(7pt)
    #kicker("Wittgenbio")
    #h(4pt)
    *Bulk-to-single-cell and virtual-cell research* \
    Connect bulk expression profiles to curated single-cell references for cell-composition and state inference, and evaluate computational cell models against held-out and biologically interpretable evidence.
  ],
)

#v(5pt)
#section("TECHNICAL SKILLS")
#grid(columns: (38mm, 1fr), row-gutter: 4pt,
  [*Genomics*], [Bacterial WGS, phage genomics, assembly, annotation, comparative genomics, KL typing],
  [*Phage and protein*], [Tail/RBP analysis, depolymerase curation, Phold, ProstT5, Foldseek, PDB comparison],
  [*Cell-state modeling*], [Bulk-to-single-cell inference, single-cell reference integration, virtual-cell modeling and evaluation],
  [*Workflow engineering*], [Snakemake, Nextflow, Conda, Docker, Apptainer, Linux],
  [*Programming*], [Python, R, Bash, Git],
  [*Selected tools*], [CheckV, Pharokka, BACPHLIP, PhaTYP, PhaGCN, PhageTerm, Kaptive, BLAST],
)

#v(5pt)
#section("EDUCATION")
*M.S., Medical Science* · Kyungpook National University School of Medicine · 2016.02 - 2018.08 \
*B.S., Biotechnology; Minor in Psychology* · Kyungpook National University · 2008.03 - 2016.02

#v(5pt)
#section("SELECTED PUBLICATIONS & IP")
- Park et al. Novel next generation sequencing panel method for multiple detection and identification of foodborne pathogens in agricultural wastewater. *Frontiers in Microbiology* 14 (2023).
- Park et al. Development and evaluation of a next-generation sequencing panel for pathogens in fermented foods. *Journal of Microbiology and Biotechnology* 33(1) (2023).
- Kang et al. Nothofagin suppresses mast cell-mediated allergic inflammation. *Chemico-Biological Interactions* 298 (2019).
- Joint patent contribution: NGS-based primer set and detection method for foodborne bacteria (2022).

#v(5pt)
#section("LANGUAGE")
Korean - Native #h(12pt) English - IELTS 6.5 (October 2023)
