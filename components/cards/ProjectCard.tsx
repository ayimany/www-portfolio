"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  BookOpen,
  Bot,
  Cpu,
  ExternalLink,
  FileText,
  FlaskConical,
  Github,
  Globe,
  GraduationCap,
  Play,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Project, ProjectLinkType, ProjectStatus } from "@/types";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact";
  className?: string;
}

const statusConfig: Record<
  ProjectStatus,
  { label: string; bgColor: string; textColor: string }
> = {
  active: {
    label: "Active",
    bgColor: "bg-green-500/15",
    textColor: "text-green-600 dark:text-green-400",
  },
  "in-restoration": {
    label: "In Restoration",
    bgColor: "bg-purple-500/15",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  erased: {
    label: "Discontinued",
    bgColor: "bg-red-500/15",
    textColor: "text-red-600 dark:text-red-400",
  },
  planned: {
    label: "Planned",
    bgColor: "bg-blue-500/15",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  archived: {
    label: "Archived",
    bgColor: "bg-amber-500/15",
    textColor: "text-amber-600 dark:text-amber-400",
  },
};

const linkIcons: Record<ProjectLinkType, typeof FileText> = {
  github: Github,
  docs: FileText,
  demo: ExternalLink,
  video: Play,
  article: BookOpen,
};

const typeIcons: Record<Project["type"], typeof Bot> = {
  robotics: Bot,
  web: Globe,
  hardware: Cpu,
  research: FlaskConical,
  tool: Wrench,
  learning: GraduationCap,
  other: Sparkles,
};

export function ProjectCard({
  project,
  variant = "default",
  className,
}: ProjectCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const isCompact = variant === "compact";
  const TypeIcon = typeIcons[project.type];
  const config = statusConfig[project.status];

  return (
    <Card className={cn("p-4", className)}>
      <div className="flex flex-col h-full gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 flex items-center justify-center bg-(--color-bg-tertiary) rounded-md shrink-0">
              <TypeIcon className="w-4 h-4 text-(--color-text-secondary)" />
            </div>
            <h3 className="font-medium text-foreground leading-tight truncate">
              {project.name}
            </h3>
          </div>
          <span className="text-xs text-(--color-text-muted) shrink-0">
            {project.date}
          </span>
        </div>

        {!isCompact && (
          <>
            <p className="text-sm text-(--color-text-secondary) line-clamp-3 flex-1">
              {project.description}
            </p>

            <div className="flex items-center justify-between gap-2">
              <span
                className={cn(
                  "relative px-2 py-0.5 text-xs font-medium rounded-full cursor-default",
                  config.bgColor,
                  config.textColor
                )}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                {config.label}
                {showTooltip && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs bg-(--color-bg-elevated) text-foreground border border-(--color-border-default) rounded-md whitespace-nowrap shadow-lg z-10">
                    {project.statusReason}
                  </span>
                )}
              </span>

              {project.links.length > 0 && (
                <div className="flex gap-1">
                  {project.links.map((link, index) => {
                    const LinkIcon = linkIcons[link.type];
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 flex items-center justify-center bg-(--color-bg-tertiary) hover:bg-(--color-bg-quaternary) rounded-sm transition-colors"
                        title={link.label || link.type}
                      >
                        <LinkIcon className="w-3.5 h-3.5 text-(--color-text-secondary)" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="pt-1">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md transition-all bg-(--color-bg-tertiary) text-(--color-text-secondary) hover:bg-(--color-bg-inset) hover:text-foreground"
              >
                Learn More
              </Link>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
