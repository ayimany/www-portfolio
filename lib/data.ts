import type {Certification, Competition, Course, Education, Experience, Project, Skill,} from "@/types";

import experienceData from "@/data/experience.json";
import competitionData from "@/data/competitions.json";
import educationData from "@/data/education.json";
import courseData from "@/data/courses.json";
import skillsData from "@/data/skills.json";
import certificationsData from "@/data/certifications.json";
import projectsData from "@/data/projects.json";

export function getExperiences(): Experience[] {
    return experienceData as Experience[];
}

export function getCompetitions(): Competition[] {
    return competitionData as Competition[];
}

export function getLatestExperiences(count: number = 2): Experience[] {
    return getExperiences().slice(0, count);
}

export function getEducation(): Education[] {
    return educationData as Education[];
}

export function getCourses(): Course[] {
    return courseData as Course[];
}

export function getLatestEducation(count: number = 2): Education[] {
    return getEducation().slice(0, count);
}

export function getLatestCourses(count: number = 2): Course[] {
    return getCourses().slice(0, count);
}

export function getSkills(): Skill[] {
    return skillsData as Skill[];
}

export function getSkillsByCategory(
    category: Skill["category"]
): Skill[] {
    return getSkills().filter((skill) => skill.category === category);
}

const comfortOrder: Record<Skill["comfort"], number> = {
    comfortable: 3,
    exploring: 2,
    new: 1,
};

export function getTopSkills(count: number = 6): Skill[] {
    return getSkills()
        .sort((a, b) => comfortOrder[b.comfort] - comfortOrder[a.comfort])
        .slice(0, count);
}

export function getCertifications(): Certification[] {
    return certificationsData as Certification[];
}

export function getLatestCertifications(count: number = 3): Certification[] {
    return getCertifications().slice(0, count);
}

export function getProjects(): Project[] {
    return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
    return getProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return getProjects().find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return getProjects().map((project) => project.slug);
}

export function getAdjacentProjects(
    slug: string
): { prev: Project | null; next: Project | null } {
    const projects = getProjects();
    const currentIndex = projects.findIndex((p) => p.slug === slug);

    if (currentIndex === -1) {
        return {prev: null, next: null};
    }

    return {
        prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
        next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
    };
}
