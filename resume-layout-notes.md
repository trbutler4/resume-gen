# Resume layout guidance and implementation

Reviewed October 17, 2026. Sources reflect current guidance, including updates published since 2025.

## Sources

1. **Greenhouse Support, “Unsuccessful resume parse,” updated March 2, 2026.**
   https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse
   The ATS vendor identifies columns, complex tables/headers/footers, text-box contact information, image-only resumes, unclear sections, and inconsistent formatting as causes of unsuccessful or partial parsing. Its documented parsing size limit is 2.5 MB.
2. **Harvard Mignone Center for Career Success, “Guide to Creating a Strong Resume,” current guide with 2026 examples.**
   https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/
   Recommends easy scanning, consistent formatting, balanced white space, fact-based language, and checking the resulting PDF.
3. **Jobscan, “The Anatomy of an ATS Friendly Resume Format,” July 22, 2026.**
   https://www.jobscan.co/blog/20-ats-friendly-resume-templates/
   Recommends single-column layouts, conventional headings and bullets, 10–12 pt body text, margins of at least 0.5 inches, and text-based PDF or DOCX. Two pages are compatible with its formatting guidance. This is a commercial secondary source; its claims about guaranteed parsing or universal ATS behavior are not treated as guarantees.

## Applied design

- Single-column document with selectable text and ordinary bullet lists.
- Name/contact details in the document body, not a page header/footer or text box.
- Standard headings: Summary, Technical Skills, Professional Experience, Selected Projects, Open Source Experience, Education.
- Liberation Sans at 11 pt for body text, 12 pt section headings, 20 pt name, and 9.5 pt dates/contact/source links. Liberation Sans is metrically compatible with Arial; the Nix shell supplies the font for reproducible builds.
- Letter paper, 0.6-inch side margins, 0.5-inch top/bottom margins.
- Explicit 12 pt gaps between individual entries, 4 pt interline leading, and 4.5 pt list-item spacing. Heading spacing and entry spacing are controlled separately.
- Plain date lines directly beneath each entry title, rather than a second text column.
- Restrained link color, dark body text, light section rules, and no page numbering.
- Entries stay together, and headings stay with following content. The Anthropic config retains its intentional break before projects.
- HTML uses semantic sections and article wrappers, matching font hierarchy, usable mobile text sizes, and print margins rather than reducing print to tiny text.

These are readability and parsing precautions, not proof of a particular employer's AI screening order or an ATS ranking guarantee. No external resume-scoring service was used. Local verification consists of compilation, rasterized visual review, page-count checks, and text-extraction inspection.
