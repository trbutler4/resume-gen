import * as fs from "fs";
import { getConfig, getAvailableConfigTypes } from "./config";
import {
  ResumeConfig,
  WorkExperience,
  OpenSourceExperience,
  Project,
  Education,
} from "./types";

class ResumeGenerator {
  private config: ResumeConfig | null = null;

  loadConfig(configType: string): void {
    try {
      this.config = getConfig(configType);
    } catch (error) {
      console.error(`Error loading config for ${configType}:`, error);
      process.exit(1);
    }
  }

  generateHeader(): string {
    if (!this.config) throw new Error("Config not loaded");

    const { personalInfo } = this.config;
    const title = this.config.title || personalInfo.title;

    return `
        <header class="resume-header">
            <h1>${personalInfo.name}</h1>
            <p class="resume-title">${title}</p>
            <div class="contact-info">
                <a href="mailto:${personalInfo.email}">${personalInfo.email}</a> |
                <a href="${personalInfo.github}">${personalInfo.github.replace("https://", "")}</a> |
                <a href="${personalInfo.linkedin}">LinkedIn</a>
            </div>
        </header>`;
  }

  generateProfessionalSummary(): string {
    if (!this.config || !this.config.professionalSummary) {
      return "";
    }

    const education = this.config.professionalSummary.education;
    const skills = this.config.professionalSummary.skills;

    let html = `
      <section class="section">
        <h2 class="section-title">${this.config.professionalSummary.statement ? "Summary" : "Technical Skills"}</h2>
        <hr class="divider" />
        <div class="section-content">
          ${this.config.professionalSummary.statement ? `<p>${this.config.professionalSummary.statement}</p>` : ""}
          <ul>
            <li>
              <strong>Education:</strong> ${education.institution}, ${this.emphasizeText(education.degree)}
            </li>
            <li>
              <strong>Languages:</strong> ${this.emphasizeText(skills.languages.join(", "))}
            </li>
            <li>
              <strong>Tools:</strong> ${this.emphasizeText(skills.tools.join(", "))}
            </li>
          </ul>
        </div>
      </section>
    `;

    return html;
  }

  generateWorkExperience(): string {
    if (
      !this.config ||
      !this.config.workExperience ||
      !this.config.workExperience.length
    ) {
      return "";
    }

    let html = `
        <section class="section">
            <h2 class="section-title">Professional Experience</h2>
            <hr class="divider" />
            <div class="section-content">`;

    this.config.workExperience.forEach((exp: WorkExperience) => {
      html += `
                <article class="resume-entry">
                <div class="job-title">
                    <strong>${exp.position}</strong> –
                    <strong>${exp.company}</strong>
                    <span class="entry-date">${exp.duration}</span>
                </div>
                <ul>`;

      exp.responsibilities.forEach((resp: string) => {
        html += `<li>${this.emphasizeText(resp)}</li>`;
      });

      if (this.config?.showEntryTools !== false) {
        html += `
                    <li>
                        <strong>Tools Used:</strong> ${exp.tools.join(", ")}
                    </li>
                `;
      }
      html += "</ul></article>";
    });

    html += `
            </div>
        </section>`;

    return html;
  }

  generateOpenSourceExperience(): string {
    if (
      !this.config ||
      !this.config.openSourceExperience ||
      !this.config.openSourceExperience.length
    ) {
      return "";
    }

    let html = `
        <section class="section">
            <h2 class="section-title">Open Source Experience</h2>
            <hr class="divider" />
            <div class="section-content">`;

    this.config.openSourceExperience.forEach((exp: OpenSourceExperience) => {
      html += `
                <article class="resume-entry">
                <div class="job-title">
                    <strong>${exp.position}</strong> –
                    <strong>${exp.project}</strong> ·
                    <a href="${exp.link}">Source</a>
                    <span class="entry-date">${exp.duration}</span>
                </div>
                <ul>`;

      exp.responsibilities.forEach((resp: string) => {
        html += `<li>${this.emphasizeText(resp)}</li>`;
      });

      if (this.config?.showEntryTools !== false) {
        html += `
                    <li>
                        <strong>Tools Used:</strong> ${exp.tools.join(", ")}
                    </li>
                `;
      }
      html += "</ul></article>";
    });

    html += `
            </div>
        </section>`;

    return html;
  }

  generateProjects(): string {
    if (!this.config || !this.config.projects || !this.config.projects.length) {
      return "";
    }

    let html = `
        <section class="section">
            <h2 class="section-title">Selected Projects</h2>
            <hr class="divider" />
            <div class="section-content">`;

    this.config.projects.forEach((proj: Project) => {
      html += `
                <article class="resume-entry">
                <div class="job-title">
                    <strong>${proj.name}</strong>
                    ${proj.link ? ` - <a href="${proj.link}">Source</a>` : ""}
                </div>
                <ul>`;

      if (proj.achievements && proj.achievements.length > 0) {
        proj.achievements.forEach((achievement: string) => {
          let achievementHtml = `<li>${this.emphasizeText(achievement)}`;
          if (proj.hackathonLink) {
            achievementHtml += `: <a href="${proj.hackathonLink}">Hackathon Submission</a>`;
          }
          achievementHtml += `</li>`;
          html += achievementHtml;
        });
      }

      html += `<li>${this.emphasizeText(proj.description)}</li>`;

      if (proj.additionalInfo) {
        html += `<li>${this.emphasizeText(proj.additionalInfo)}</li>`;
      }

      if (this.config?.showEntryTools !== false) {
        html += `
                    <li>
                        <strong>Tools Used:</strong> ${proj.tools.join(", ")}
                    </li>
                `;
      }
      html += "</ul></article>";
    });

    html += `
            </div>
        </section>`;

    return html;
  }

  emphasizeText(text: string): string {
    if (!this.config || !this.config.emphasize) return text;

    // Literal, case-insensitive matches; longest phrases win at the same position.
    // One pass preserves original text and avoids nested markup for overlapping terms.
    const terms = [...this.config.emphasize.keywords, ...this.config.emphasize.metrics]
      .filter((term) => term.length > 0)
      .sort((a, b) => b.length - a.length);
    if (!terms.length) return text;
    const pattern = terms
      .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
    return text.replace(new RegExp(pattern, "gi"), (match) => `<strong>${match}</strong>`);
  }

  generateSections(): string {
    if (!this.config) throw new Error("Config not loaded");

    const sectionGenerators: Record<string, () => string> = {
      workExperience: () => this.generateWorkExperience(),
      professionalSummary: () => this.generateProfessionalSummary(),
      openSourceExperience: () => this.generateOpenSourceExperience(),
      projects: () => this.generateProjects(),
    };

    return this.config.sectionsOrder
      .map((sectionName: string) => sectionGenerators[sectionName]())
      .filter((section: string) => section.trim() !== "")
      .join("\n");
  }

  generateHTML(): string {
    if (!this.config) throw new Error("Config not loaded");

    const header = this.generateHeader();
    const sections = this.generateSections();

    return `<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../global.css" />
        <title>Resume - ${this.config.personalInfo.name}</title>
    </head>
    <body>
        ${header}

        <main>
            ${sections}
        </main>
    </body>
</html>`;
  }

  generate(
    configType: string,
    outputPath?: string,
    format: "html" | "json" = "html",
  ): void {
    this.loadConfig(configType);

    const output =
      format === "json"
        ? JSON.stringify(this.config, null, 2) + "\n"
        : this.generateHTML();

    if (outputPath) {
      fs.writeFileSync(outputPath, output);
      console.log(`Resume generated: ${outputPath}`);
    } else {
      console.log(output);
    }
  }
}

// CLI Usage
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    const availableConfigs = getAvailableConfigTypes();
    console.log("Usage: node generate-resume.js <config-type> [output-file]");
    console.log(`Available configs: ${availableConfigs.join(", ")}`);
    process.exit(1);
  }

  const configType = args[0];
  const outputPath = args[1] || `resume-${configType}.html`;

  const generator = new ResumeGenerator();
  generator.generate(configType, outputPath);
}

export default ResumeGenerator;
