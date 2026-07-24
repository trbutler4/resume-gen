#set text(
  font: "Libertinus Serif",
  size: 7pt,
)

#set par(leading: 0em)

#show regex("\$[\d,]+(\.\d+)?[\s]*(million|Million|M)[\+]?"): set text(weight: "bold")
#show regex("\d+(\.\d+)?\+"): set text(weight: "bold")
#show regex("\d+(\.\d+)?%"): set text(weight: "bold")

#let section-title(title) = {
  v(0.25pt)
  text(weight: "bold", size: 10.5pt, title)
  line(length: 100%, stroke: 0.4pt + rgb("#e2e8f0"))
  v(-1.5pt)
}

#let job-entry(position, company, duration) = {
  v(0.5pt)
  [*#position* -- _#company (#duration)_]
}

#let render(config) = {
  align(center)[
    #text(size: 9.5pt, weight: "bold")[#config.personal.name - #config.title]
    #v(0.5pt)
    #link("mailto:" + config.personal.email)[#config.personal.email] |
    #link(config.personal.github)[Github] |
    #link(config.personal.linkedin)[LinkedIn]
  ]

  section-title("Summary")
  pad(left: 1pt)[
    - *Education:* #config.education.institution, #config.education.degree
    - *Primary Languages:* #config.languages.join(", ")
  ]

  section-title("Work Experience")
  pad(left: 1pt)[
    #for job in config.work {
      job-entry(job.position, job.company, job.duration)
      for resp in job.responsibilities {
        [- #resp]
      }
      [*Tools:* #job.tools.join(", ")]
    }
  ]

  if config.projects.len() > 0 {
    section-title("Project Highlights")
    pad(left: 4pt)[
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
