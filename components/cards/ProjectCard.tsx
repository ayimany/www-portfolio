"use client";

import {cn} from "@/lib/utils";
import {useState} from "react";
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
import {Card} from "@/components/ui/Card";
import type {Project, ProjectLinkType, ProjectStatus} from "@/types";

interface ProjectCardProps {
    project: Project;
    variant?: "default" | "compact";
    className?: string;
}

const statusConfig: Record<ProjectStatus, { label: string; color: string }> = {
    active: {
        label: "View Project",
        color: "bg-(--color-accent-primary)",
    },
    "in-restoration": {
        label: "In Restoration",
        color: "bg-purple-500",
    },
    erased: {
        label: "No Longer Available",
        color: "bg-red-400",
    },
    planned: {
        label: "Coming Soon",
        color: "bg-blue-500",
    },
    archived: {
        label: "Archived",
        color: "bg-amber-500",
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
    const isClickable = project.status === "active" || project.status === "archived";

    const buttonContent = (
        <span
            className={cn(
                "relative inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md transition-all",
                config.color,
                isClickable
                    ? "text-(--color-text-inverse) hover:opacity-75 cursor-pointer"
                    : "text-(--color-text-inverse)/90 cursor-not-allowed opacity-90"
            )}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
      {config.label}
            {showTooltip && (
                <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs bg-(--color-bg-elevated) text-foreground border border-(--color-border-default) rounded-md whitespace-nowrap shadow-lg z-10">
          {project.statusReason}
        </span>
            )}
    </span>
    );

    return (
        <Card className={cn("p-4", className)}>
            <div className="flex flex-col h-full gap-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                        <div
                            className="w-8 h-8 flex items-center justify-center bg-(--color-bg-tertiary) rounded-md shrink-0">
                            <TypeIcon className="w-4 h-4 text-(--color-text-secondary)"/>
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

                        {project.links.length > 0 && (
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-(--color-text-muted)">Links:</span>
                                <div className="flex gap-1">
                                    {project.links.map((link, index) => {
                                        const LinkIcon = linkIcons[link.type];
                                        return (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-7 h-7 flex items-center justify-center bg-(--color-bg-tertiary) hover:bg-(--color-bg-quaternary) rounded-sm transition-colors"
                                                title={link.label || link.type}
                                            >
                                                <LinkIcon className="w-3.5 h-3.5 text-(--color-text-secondary)"/>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="pt-1">
                            {isClickable ? (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    {buttonContent}
                                </a>
                            ) : (
                                buttonContent
                            )}
                        </div>
                    </>
                )}
            </div>
        </Card>
    );
}
