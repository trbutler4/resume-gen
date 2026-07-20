// Shared styling and helpers

#set page(
  paper: "us-letter",
  margin: (x: 0.5in, y: 0.5in),
)

#set text(
  font: "Libertinus Serif",
  size: 10pt,
)

#set par(leading: 0.5em)

// Auto-bold metrics
#show regex("\$[\d,]+(\.\d+)?[\s]*(million|Million|M)[\+]?"): set text(weight: "bold")
#show regex("\d+(\.\d+)?\+"): set text(weight: "bold")
#show regex("\d+(\.\d+)?%"): set text(weight: "bold")

#let section-title(title) = {
  v(8pt)
  text(weight: "bold", size: 12pt, title)
  line(length: 100%, stroke: 0.5pt + rgb("#e2e8f0"))
  v(4pt)
}

#let job-entry(position, company, duration) = {
  v(6pt)
  [*#position* -- _#company (#duration)_]
}

#let render(config) = {
  // Header
  align(center)[
    #text(size: 16pt, weight: "bold")[#config.personal.name - #config.title]
    #v(4pt)
    #link("mailto:" + config.personal.email)[#config.personal.email] |
    #link(config.personal.github)[Github] |
    #link(config.personal.linkedin)[LinkedIn]
  ]

  // Summary
  section-title("Summary")
  pad(left: 12pt)[
    - *Education:* #config.education.institution, #config.education.degree
    - *Languages:* #config.languages.join(", ")
  ]

  // Work Experience
  section-title("Work Experience")
  pad(left: 12pt)[
    #for job in config.work {
      job-entry(job.position, job.company, job.duration)
      for resp in job.responsibilities {
        [- #resp]
      }
      [- *Tools Used:* #job.tools.join(", ")]
    }
  ]

  // Projects
  if config.projects.len() > 0 {
    section-title("Project Highlights")
    pad(left: 12pt)[
      #for proj in config.projects {
        v(6pt)
        [*#proj.name*]
        for ach in proj.achievements {
          [- #ach]
        }
        [- #proj.description]
        if proj.at("additionalInfo", default: none) != none {
          [- #proj.additionalInfo]
        }
        [- *Tools Used:* #proj.tools.join(", ")]
      }
    ]
  }
}
