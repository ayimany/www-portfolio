export type ExperienceType = "work" | "freelance" | "research" | "internship";
export type EducationType = "degree" | "research" | "certification" | "bootcamp";
export type CompetitionType = "hackathon" | "robotics" | "programming" | "leadership" | "other";
export type CourseType = "workshop" | "certification" | "webinar" | "bootcamp";

export interface Experience {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string | null;
    description: string;
    highlights: string[];
    technologies: string[];
    type?: ExperienceType;
}

export interface Competition {
    host: string;
    name: string;
    location: string;
    startDate: string;
    description: string;
    highlights: string[];
    technologies: string[];
    type?: CompetitionType;
}

export interface Education {
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string | null;
    honors?: string[];
    type?: EducationType;
}

export interface Course {
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    durationDays: number;
    honors?: string[];
    type?: CourseType;
}

export type ComfortLevel = "new" | "exploring" | "comfortable";

export interface Skill {
    name: string;
    category: "programming" | "mechanical" | "robotics" | "hardware" | "tools" | "frameworks";
    comfort: ComfortLevel;
    knowledgePoints: string[];
    icon?: string;
}

export interface Certification {
    name: string;
    issuer: string;
    issueDate: string;
    credentialUrl?: string;
}

export type ProjectStatus = "active" | "in-restoration" | "erased" | "planned" | "archived";

export type ProjectLinkType = "github" | "docs" | "demo" | "video" | "article";

export interface ProjectLink {
    type: ProjectLinkType;
    url: string;
    label?: string;
}

export interface Project {
    name: string;
    type: "robotics" | "web" | "hardware" | "research" | "tool" | "learning" | "other";
    icon?: string;
    date: string;
    description: string;
    url: string;
    status: ProjectStatus;
    statusReason: string;
    links: ProjectLink[];
    featured?: boolean;
}

export interface Service {
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    deliverables: string[];
    featured?: boolean;
}
