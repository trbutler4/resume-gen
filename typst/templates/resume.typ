// Resume Template
// Reads JSON data and generates PDF

#let data = json("/typst/data/data.json")

#let primary-color = rgb("#1a1a1a")
#let link-color = rgb("#3182ce")

#set document(
  title: [Resume - #data.personalInfo.name],
  author: data.personalInfo.name,
)

#set page(
  paper: "us-letter",
  margin: (x: 0.5in, y: 0.5in),
)

#set text(
  font: "Linux Libertine",
  size: 10pt,
)

#set par(leading: 0.5em)

// Helper functions
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

#let opensource-entry(position, project, duration, link) = {
  v(6pt)
  [*#position* -- _#project (#duration)_ - #link(link)[Github]]
}

// Header
#align(center)[
  #text(size: 16pt, weight: "bold")[#data.personalInfo.name - #data.title]
  #v(4pt)
  #link("mailto:" + data.personalInfo.email)[#data.personalInfo.email] |
  #link(data.personalInfo.github)[Github] |
  #link(data.personalInfo.linkedin)[LinkedIn]
]

// Professional Summary
#section-title("Summary")
#pad(left: 12pt)[
  - *Education:* #data.professionalSummary.education.institution, #data.professionalSummary.education.degree
  - *Languages:* #data.professionalSummary.skills.languages.join(", ")
]

// Work Experience
#if data.workExperience.len() > 0 {
  section-title("Work Experience")
  pad(left: 12pt)[
    #for job in data.workExperience {
      job-entry(job.position, job.company, job.duration)
      for resp in job.responsibilities {
        [- #resp]
      }
      [- *Tools Used:* #job.tools.join(", ")]
    }
  ]
}

// Open Source Experience
#if data.openSourceExperience.len() > 0 {
  section-title("Open Source Experience")
  pad(left: 12pt)[
    #for exp in data.openSourceExperience {
      v(6pt)
      [*#exp.position* -- _#exp.project (#exp.duration)_ - #link(exp.link)[Github]]
      for resp in exp.responsibilities {
        [- #resp]
      }
      [- *Tools Used:* #exp.tools.join(", ")]
    }
  ]
}

// Projects
#if data.projects.len() > 0 {
  section-title("Project Highlights")
  pad(left: 12pt)[
    #for proj in data.projects {
      v(6pt)
      [*#proj.name* - #link(proj.link)[Github]]
      if proj.at("achievements", default: none) != none {
        for achievement in proj.achievements {
          [- #achievement]
        }
      }
      [- #proj.description]
      if proj.at("additionalInfo", default: none) != none {
        [- #proj.additionalInfo]
      }
      [- *Tools Used:* #proj.tools.join(", ")]
    }
  ]
}
