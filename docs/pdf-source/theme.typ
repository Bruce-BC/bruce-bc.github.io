#let navy = rgb("18324b")
#let teal = rgb("087f8c")
#let pale = rgb("eef5f6")
#let ink = rgb("202b33")
#let muted = rgb("5f6b73")
#let rule = rgb("d7e0e3")

#let setup(title: "") = {
  set page(
    paper: "a4",
    margin: (x: 15mm, top: 13mm, bottom: 13mm),
    numbering: "1",
    number-align: right,
    footer: context [
      #set text(size: 7.5pt, fill: muted)
      #title #h(1fr) bruce-bc.github.io #h(8mm) #counter(page).display()
    ],
  )
  set text(font: ("Helvetica Neue", "Apple SD Gothic Neo"), size: 9pt, fill: ink)
  set par(justify: false, leading: 0.56em)
  set list(indent: 10pt, body-indent: 4pt, spacing: 3pt)
}

#let section(title) = block(above: 8pt, below: 5pt)[
  #set text(size: 11pt, weight: "bold", fill: navy)
  #title
  #v(2pt)
  #line(length: 100%, stroke: 0.8pt + teal)
]

#let kicker(content) = text(size: 8pt, weight: "bold", fill: teal, tracking: 0.08em, upper(content))

#let role(company, position, dates, body) = block(breakable: false, above: 5pt, below: 5pt)[
  #grid(
    columns: (1fr, auto),
    column-gutter: 8pt,
    [#text(weight: "bold", fill: navy, company) #text(fill: muted, [ · #position])],
    [#text(size: 8pt, weight: "medium", fill: teal, dates)],
  )
  #v(2pt)
  #body
  #v(6pt)
]

#let pill(content) = box(
  inset: (x: 5pt, y: 2pt),
  radius: 99pt,
  fill: pale,
  stroke: 0.5pt + rule,
  text(size: 7.5pt, weight: "medium", fill: navy, content),
)

#let metric(value, label) = block(inset: 7pt, radius: 5pt, fill: pale, stroke: 0.5pt + rule)[
  #text(size: 15pt, weight: "bold", fill: teal, value)
  #linebreak()
  #text(size: 7.5pt, fill: muted, label)
]

#let note(body) = block(inset: 7pt, radius: 4pt, fill: pale, stroke: (left: 2pt + teal))[#body]
