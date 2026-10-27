#import "theme.typ": *
#show: setup.with(title: "Byung-cheol Kang · Bioinformatics Resume")

#grid(
  columns: (1fr, auto),
  column-gutter: 10pt,
  [
    #text(size: 24pt, weight: "bold", fill: navy)[Byung-cheol Kang]
    #linebreak()
    #text(size: 10.5pt, fill: teal)[Bioinformatics Research & Development · Genomics · Bacteriophages]
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
A bioinformatics researcher and developer connecting biological questions with analysis design and interpretation. My work extends from microbes to humans, integrating diverse analytical approaches and building research pipelines and databases. AI-powered coding accelerates my research and amplifies my ability to automate workflows and develop analytical tools.

#v(4mm)
#section("EXPERIENCE")

#role("MicrobiotiX", "Senior Researcher · Bioinformatics", "2026.07 - PRESENT", [
  - Analyze bacterial and phage genomes and prepare phage candidate-assessment reports.
  - Contribute to phage cocktail selection software; develop capsule-type prediction software and design receptor-binding protein candidates.
])

#role("Wittgenbio", "Computational Biology Research", "2026.07 - 2026.10", [
  - Built a multi-study CRC scRNA-seq atlas and performed cell-type annotation.
  - Cross-checked tumor/normal metadata, author annotations and marker evidence, with versioned label and source tracking.
  - Annotated externally supplied normal-tissue atlas data and compared normal-tissue, tumor and patient/specimen expression to assess therapeutic-target candidates.
])

#role("Sanigen", "Bioinformatics Team Lead · Senior Researcher", "2020.03 - 2025.11", [
  - Led NGS analysis services and team operations, including analysis design, hands-on work, result review, SOPs, turnaround management and quality control.
  - Performed genomics, microbiome and transcriptome analyses; automated analysis workflows and reports.
  - Developed comparative-genomics and k-mer marker-discovery methods and contributed to collaborative NGS pathogen-panel research.
  - Contributed to the technology-special listing task force, preparing and revising technical-evaluation and preliminary-listing application materials.
  - Provided analysis technical support to clients and internal researchers, custom analyses and method evaluations.
  - Maintained HPC/Linux analysis environments, NAS storage and data-transfer infrastructure.
])

#pagebreak()

#section("SELECTED PROJECTS")

#grid(columns: (1fr, 1fr), column-gutter: 14pt, row-gutter: 12pt,
  [
    #kicker("Phage database and design")
    #linebreak()
    *Klebsiella Phage Reference Database & In Silico Design* \
    Built a tail/RBP and KL-type reference database to connect protein sequences with capsule-target evidence. Integrated anchor compatibility, reference-label consistency, and protein-structure evidence to prioritize in silico tail-RBP design candidates for experimental follow-up.
  ],
  [
    #kicker("Single-cell and tissue expression")
    #linebreak()
    *CRC Atlas Annotation & Normal-Tissue Expression Analysis* \
    Integrated CRC datasets across studies, annotated cell types, and reviewed annotation consistency and tumor/normal labels. Compared externally supplied normal-tissue atlas expression and analyzed CRC markers after expression-based off-target filtering.
  ],
  [
    #kicker("Reproducible analysis platform")
    #linebreak()
    *Sanigen Integrated Microbial Genomics Platform* \
    Designed and maintained a shared Snakemake platform for 16S, ITS, WGS, and Illumina-ONT hybrid assembly. Standardized inputs, execution environments, QC checkpoints, logs, and report packaging to support reproducible analysis and review.
  ],
  [
    #kicker("Marker discovery")
    #linebreak()
    *Comparative Genomics-Based Marker Discovery* \
    Compared complete microbial genomes to identify candidate marker regions and assess their specificity, conservation, and suitability for downstream assays. Prioritized an approximately 17 kb region for experimental follow-up.
  ],
)

#v(5pt)
#section("TECHNICAL SKILLS")
#grid(columns: (38mm, 1fr), row-gutter: 4pt,
  [*Genomics*], [Bacterial WGS, phage genomics, assembly, annotation, comparative genomics, KL typing],
  [*Phage and protein*], [Tail/RBP analysis, depolymerase curation, structure comparison (Foldseek)],
  [*Single-cell analysis*], [CRC atlas construction, cell-type annotation, normal-tissue expression analysis],
  [*Workflow engineering*], [Reproducible analysis workflows and execution environments (Snakemake)],
  [*Programming*], [Python, R, Bash, Git],
  [*Phage annotation*], [Pharokka],
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
