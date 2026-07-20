#import "../typst/lib.typ": render
#import "../typst/data.typ": *

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
  projects: (ai_smart_contract_project,),
)

#render(config)
