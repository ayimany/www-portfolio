import Link from "next/link";
import {
  Bot,
  ChevronRight,
  Cpu,
  FlaskConical,
  Globe,
  GraduationCap,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { Project } from "@/types";

interface ProjectHeaderProps {
  project: Project;
}

const typeIcons: Record<Project["type"], typeof Bot> = {
  robotics: Bot,
  web: Globe,
  hardware: Cpu,
  research: FlaskConical,
  tool: Wrench,
  learning: GraduationCap,
  other: Sparkles,
};

const typeLabels: Record<Project["type"], string> = {
  robotics: "Robotics",
  web: "Web",
  hardware: "Hardware",
  research: "Research",
  tool: "Tool",
  learning: "Learning",
  other: "Other",
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const TypeIcon = typeIcons[project.type];

  return (
    <header className="mb-8">
      <nav className="flex items-center gap-2 text-sm text-(--color-text-muted) mb-6">
        <Link
          href="/projects"
          className="hover:text-(--color-text-secondary) transition-colors"
        >
          Projects
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-(--color-text-secondary)">{project.name}</span>
      </nav>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-(--color-bg-tertiary) rounded-lg shrink-0">
          <TypeIcon className="w-6 h-6 text-(--color-text-secondary)" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {project.name}
            </h1>
          </div>
          <p className="text-lg text-(--color-text-secondary) mb-2">
            {project.description}
          </p>
          <div className="flex items-center gap-3 text-sm text-(--color-text-muted)">
            <span>{typeLabels[project.type]}</span>
            {project.date && (
              <>
                <span className="text-(--color-border-emphasis)">•</span>
                <span>{project.date}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
