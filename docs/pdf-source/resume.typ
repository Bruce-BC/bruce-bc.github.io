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
Bioinformatician with more than six years of experience connecting microbial and bacteriophage genomics, metagenomics, reproducible workflow engineering, and research operations. Currently at *Microiotix*, conducting bacteriophage research, in silico design, and research database development and evaluation. Previously led a five-person bioinformatics team and built shared Snakemake workflows for 16S, ITS, WGS, and hybrid assembly.

#grid(
  columns: (1fr, 1fr, 1fr, 1fr),
  gutter: 5pt,
  metric("6+ years", "Applied bioinformatics"),
  metric("4 profiles", "16S · ITS · WGS · Hybrid"),
  metric("98+", "Archived project-order lower bound"),
  metric("7 papers", "SCI(E) publication record"),
)

#section("EXPERIENCE")

#role("Microiotix", "Bioinformatician", "2026.07 - PRESENT", [
  - Conduct bacteriophage research with computational analysis supporting research decisions.
  - Perform in silico design for bacteriophage-related research and development.
  - Build and evaluate research databases for reproducible candidate assessment.
])

#role("Sanigen", "Bioinformatics Team Lead · Senior Researcher", "2020.03 - 2025.10", [
  - Led a five-person bioinformatics team delivering microbial WGS, metagenomics, assembly, annotation, comparative-genomics, and research support.
  - Designed and maintained a shared Snakemake platform covering 16S, ITS, WGS, and Illumina-ONT hybrid assembly with validation, logging, quality gates, and report packaging.
  - Standardized execution with Conda, Docker, and Apptainer across Linux compute environments; wrote Python, R, and Bash utilities for QC, analysis, visualization, and reporting.
  - Supported comparative-genomics marker discovery and foodborne-pathogen NGS panel development that contributed to two 2023 papers and one joint patent.
  - Coordinated analysis review and delivery across a conservative lower bound of 98 archived project orders.
])

#role("GinaPath", "Business Development", "2019.11 - 2020.01", [
  - Supported genomics-service requirements, project scoping, and client-facing technical communication.
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
    *Bacteriophage assembly and annotation* \
    Reviewed assembly evidence, produced single-contig final assemblies in the assessed set, and supplemented Prokka results with RAST-tk evidence and explicit completion caveats.

    #v(7pt)
    #kicker("Independent R&D")
    #h(4pt)
    *Phage lifestyle evidence prototype* \
    Designed an interpretable evidence workflow combining CheckV, Pharokka/Phold, BACPHLIP, and PhaTYP while routing disagreement to manual review.
  ],
)

#v(5pt)
#section("TECHNICAL SKILLS")
#grid(columns: (38mm, 1fr), row-gutter: 4pt,
  [*Genomics*], [Microbial WGS, assembly, annotation, comparative genomics, bacteriophage analysis],
  [*Workflow engineering*], [Snakemake, Nextflow, Conda, Docker, Apptainer, Linux],
  [*Programming*], [Python, R, Bash, Git],
  [*Selected tools*], [QIIME 2, DADA2, FastQC, MultiQC, SPAdes, Flye, Unicycler, QUAST, BUSCO, Prokka, Abricate, eggNOG-mapper],
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
