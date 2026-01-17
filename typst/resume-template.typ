// Resume Template for Thomas Butler

#let resume(
  name: "",
  title: "",
  email: "",
  github: "",
  linkedin: "",
  doc
) = {
  // Set document properties
  set document(title: name + " - " + title)
  set page(
    paper: "us-letter",
    margin: (top: 0.5in, bottom: 0.5in, left: 0.5in, right: 0.5in),
  )

  // Set text formatting
  set text(
    font: "New Computer Modern",
    size: 10pt,
    hyphenate: false
  )

  // Heading styles
  show heading.where(level: 1): it => {
    set text(size: 18pt, weight: "bold")
    align(center, it)
    v(0.3em)
  }

  show heading.where(level: 2): it => {
    set text(size: 12pt, weight: "bold")
    v(0.5em)
    it
    v(-0.5em)
    line(length: 100%, stroke: 0.5pt)
    v(0.3em)
  }

  show heading.where(level: 3): it => {
    set text(size: 10pt, weight: "bold")
    it
  }

  // Paragraph spacing
  set par(
    justify: false,
    leading: 0.5em,
    spacing: 0.5em
  )

  // List styling
  set list(indent: 1em, spacing: 0.4em, marker: [•])

  // Link styling
  show link: set text(fill: rgb("#0066cc"))

  // Header
  align(center)[
    #text(size: 18pt, weight: "bold")[#name] \
    #text(size: 12pt)[#title] \
    #v(0.3em)
    #text(size: 9pt)[
      #link("mailto:" + email)[#email] |
      #link(github)[Github] |
      #link(linkedin)[LinkedIn]
    ]
  ]

  v(0.5em)

  doc
}

// Job entry component
#let job-entry(position: "", company: "", duration: "", responsibilities: (), tools: ()) = {
  [
    *#position* -- _#company (#duration)_
  ]

  list(..responsibilities.map(r => [#r]))

  [*Tools:* #tools.join(", ")]

  v(0.5em)
}

// Open source entry component
#let opensource-entry(position: "", project: "", duration: "", link: "", responsibilities: (), tools: ()) = {
  [
    *#position* -- _#project (#duration)_ - #link(link)[Github]
  ]

  list(..responsibilities.map(r => [#r]))

  [*Tools:* #tools.join(", ")]

  v(0.5em)
}

// Project entry component
#let project-entry(name: "", link: "", description: "", achievements: (), hackathon-link: none, additional-info: none, tools: ()) = {
  [
    *#name* - #link(link)[Github]
  ]

  let items = ()

  for achievement in achievements {
    if hackathon-link != none {
      items.push([#achievement: #link(hackathon-link)[Hackathon Submission]])
    } else {
      items.push([#achievement])
    }
  }

  items.push([#description])

  if additional-info != none {
    items.push([#additional-info])
  }

  list(..items)

  [*Tools:* #tools.join(", ")]

  v(0.5em)
}
