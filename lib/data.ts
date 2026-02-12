import type {
  Experience,
  Competition,
  Education,
  Course,
  Skill,
  Certification,
  Project,
  Service,
} from "@/types";

import experienceData from "@/data/experience.json";
import competitionData from "@/data/competitions.json";
import educationData from "@/data/education.json";
import courseData from "@/data/courses.json";
import skillsData from "@/data/skills.json";
import certificationsData from "@/data/certifications.json";
import projectsData from "@/data/projects.json";
import servicesData from "@/data/services.json";

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

export function getServices(): Service[] {
  return servicesData as Service[];
}

export function getFeaturedServices(): Service[] {
  return getServices().filter((service) => service.featured);
}
