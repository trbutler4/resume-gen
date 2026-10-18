// Shared PDF renderer. Resume content comes from the TypeScript config export.
#let resume(data) = {
  set document(title: data.personalInfo.name + " - " + data.title, author: data.personalInfo.name)
  set page(paper: "us-letter", margin: (x: 0.6in, y: 0.5in), numbering: none)
  set text(font: "Liberation Sans", size: 11pt, fill: rgb("#202124"), hyphenate: false)
  set par(justify: false, leading: 4pt, spacing: 0pt)
  set list(indent: 0pt, body-indent: 12pt, spacing: 4.5pt, tight: false, marker: [•])
  show link: it => text(fill: rgb("#174a70"), it)

  // Same literal, case-insensitive, longest-match policy as the HTML renderer.
  let emphasize(value) = {
    let terms = data.emphasize.keywords + data.emphasize.metrics
    let remaining = value
    let result = []
    while remaining != "" {
      let best = none
      for term in terms.filter(term => term != "") {
        let candidate = lower(remaining).match(lower(term))
        if candidate != none {
          if best == none or candidate.start < best.start or (candidate.start == best.start and candidate.end > best.end) {
            best = candidate
          }
        }
      }
      if best == none {
        result += remaining
        break
      }
      result += remaining.slice(0, best.start)
      result += strong(remaining.slice(best.start, best.end))
      remaining = remaining.slice(best.end)
    }
    result
  }

  let section(title) = block(above: 11pt, below: 6pt, sticky: true)[
    #text(size: 12pt, weight: "bold", title)
    #v(2pt)
    #line(length: 100%, stroke: 0.4pt + rgb("#b8bec5"))
  ]
  let bullets(items) = block(above: 3pt, below: 0pt)[#list(..items.map(item => emphasize(item)))]
  let source(url) = if url != "" { [ · #text(size: 9.5pt, link(url)[Source])] }

  block(above: 0pt, below: 0pt)[
    #text(size: 20pt, weight: "bold", data.personalInfo.name)
    #v(4pt)
    #text(size: 11pt, data.title)
    #v(4pt)
    #text(size: 9.5pt)[
      #link("mailto:" + data.personalInfo.email, data.personalInfo.email) |
      #link(data.personalInfo.github, data.personalInfo.github.replace("https://", "")) |
      #link(data.personalInfo.linkedin)[LinkedIn]
    ]
  ]

  for name in data.sectionsOrder {
    if name in data.at("pageBreakBefore", default: ()) {
      pagebreak()
      text(size: 10pt, weight: "bold", data.personalInfo.name)
      parbreak()
    }
    if name == "professionalSummary" {
      let summary = data.professionalSummary
      if "statement" in summary {
        section("Summary")
        [#summary.statement]
      }
      section("Technical Skills")
       [*Languages:* #emphasize(summary.skills.languages.join(", ")) \
       *Tools & frameworks:* #emphasize(summary.skills.tools.join(", "))]
    } else if name == "workExperience" and data.workExperience.len() > 0 {
      section("Professional Experience")
      for (index, job) in data.workExperience.enumerate() {
        if index > 0 { v(12pt, weak: false) }
        block(breakable: false, above: 0pt, below: 0pt)[
          *#job.position — #job.company* \
          #text(size: 9.5pt, job.duration)
          #bullets(job.responsibilities)
          #if data.at("showEntryTools", default: true) {
            text(size: 9.5pt)[*Stack:* #job.tools.join(", ")]
          }
        ]
      }
    } else if name == "projects" and data.projects.len() > 0 {
      section("Selected Projects")
      for (index, project) in data.projects.enumerate() {
        if index > 0 { v(12pt, weak: false) }
        block(breakable: false, above: 0pt, below: 0pt)[
          *#project.name*#source(project.link)
          #bullets((project.description,) + project.at("achievements", default: ()) + if "additionalInfo" in project { (project.additionalInfo,) } else { () })
          #if "hackathonLink" in project { source(project.hackathonLink) }
        ]
      }
    } else if name == "openSourceExperience" and data.openSourceExperience.len() > 0 {
      section("Open Source Experience")
      for (index, item) in data.openSourceExperience.enumerate() {
        if index > 0 { v(12pt, weak: false) }
        block(breakable: false, above: 0pt, below: 0pt)[
          *#item.position — #item.project*#source(item.link) \
          #text(size: 9.5pt, item.duration)
          #bullets(item.responsibilities)
        ]
      }
    }
  }
  section("Education")
  [*#data.professionalSummary.education.institution* — #emphasize(data.professionalSummary.education.degree)]
}
