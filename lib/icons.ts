import {
    Award,
    BookOpen,
    Bot,
    Briefcase,
    Building2,
    Code2,
    FlaskConical,
    GraduationCap,
    Rocket,
    Trophy,
    Users,
    Video,
    Wrench,
} from "lucide-react";
import type {
    CompetitionType,
    CourseType,
    EducationType,
    ExperienceType,
} from "@/types";
import type {LucideIcon} from "lucide-react";

export const experienceIcons: Record<ExperienceType, LucideIcon> = {
    work: Briefcase,
    freelance: Building2,
    research: FlaskConical,
    internship: GraduationCap,
};

export const educationIcons: Record<EducationType, LucideIcon> = {
    degree: GraduationCap,
    research: FlaskConical,
    certification: Award,
    bootcamp: Rocket,
};

export const competitionIcons: Record<CompetitionType, LucideIcon> = {
    hackathon: Rocket,
    robotics: Bot,
    programming: Code2,
    leadership: Users,
    other: Trophy,
};

export const courseIcons: Record<CourseType, LucideIcon> = {
    workshop: Wrench,
    certification: Award,
    webinar: Video,
    bootcamp: BookOpen,
};
