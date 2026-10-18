export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  onlydust: string;
}

export interface ProfessionalSummary {
  statement?: string;
  education: Education,
  skills: Skills
}

export interface Skills {
  tools: string[]
  languages: string[]
}

export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
  tools: string[];
  status?: "optional";
}

export interface OpenSourceExperience {
  id: string;
  position: string;
  project: string;
  duration: string;
  link: string;
  responsibilities: string[];
  tools: string[];
}

export interface Project {
  id: string;
  name: string;
  link: string;
  description: string;
  achievements?: string[];
  hackathonLink?: string;
  additionalInfo?: string;
  tools: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
}

export interface ExperienceData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  openSourceExperience: OpenSourceExperience[];
  projects: Project[];
  education: Education[];
}

export interface EmphasizeConfig {
  keywords: string[];
  metrics: string[];
}

export type SectionName =
  | "professionalSummary"
  | "workExperience"
  | "openSourceExperience"
  | "projects";

export interface ResumeConfig {
  resumeType: string;
  title: string;
  personalInfo: PersonalInfo;
  professionalSummary: ProfessionalSummary;
  workExperience: WorkExperience[];
  openSourceExperience: OpenSourceExperience[];
  projects: Project[];
  sectionsOrder: SectionName[];
  emphasize: EmphasizeConfig;
  // Optional print-layout break before a section; content stays shared with HTML.
  pageBreakBefore?: SectionName[];
  showEntryTools?: boolean;
}
