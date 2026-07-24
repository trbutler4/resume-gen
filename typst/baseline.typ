#set page(paper: "us-letter", margin: (x: 0.25in, y: 0.2in))

#import "lib.typ": render
#import "data.typ": *

#let config = (
  personal: personal,
  title: "Software Engineer",
  education: education,
  languages: languages,
  work: (
    gfx_labs,
    suffix_labs,
    nakamoto,
    tholos,
  ),
  projects: (),
)

#render(config)
