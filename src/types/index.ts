// Shared application types

export type ISODateString = string; // Constrain later if needed

export interface Certification {
  title: string;
  image: string; // URL or path
  issuer: string;
  issueDate: ISODateString;
  expirationDate: ISODateString | null;
  description: string;
  skills: string[];
}

export interface WantedCertification {
  title: string;
  image: string;
  issuer: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  image: string;
}

export interface SimpleSkill {
  name: string;
  image: string;
}

export interface SkillsData {
  programmingLanguages: Skill[];
  tools: Skill[];
  frameworks: Skill[];
  robotics: Skill[];
  cloud: Skill[];
  databases: Skill[];
  futureSkills: SimpleSkill[];
}
