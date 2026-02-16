import { BookOpen, ExternalLink, FileText, Github, Play } from "lucide-react";
import type { Project, ProjectLinkType, ProjectStatus } from "@/types";
import type { ProjectFrontmatter } from "@/lib/mdx";

interface ProjectMetaProps {
  project: Project;
  frontmatter?: ProjectFrontmatter;
}

const statusConfig: Record<
  ProjectStatus,
  { label: string; bgColor: string; textColor: string }
> = {
  active: {
    label: "Active",
    bgColor: "bg-green-500/10",
    textColor: "text-green-600 dark:text-green-400",
  },
  "in-restoration": {
    label: "In Restoration",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  erased: {
    label: "No Longer Available",
    bgColor: "bg-red-500/10",
    textColor: "text-red-600 dark:text-red-400",
  },
  planned: {
    label: "Coming Soon",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  archived: {
    label: "Archived",
    bgColor: "bg-amber-500/10",
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

const linkLabels: Record<ProjectLinkType, string> = {
  github: "GitHub",
  docs: "Documentation",
  demo: "Demo",
  video: "Video",
  article: "Article",
};

export function ProjectMeta({ project, frontmatter }: ProjectMetaProps) {
  const config = statusConfig[project.status];

  return (
    <div className="flex flex-col gap-4 p-4 bg-(--color-bg-secondary) rounded-lg border border-(--color-border-default) mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${config.bgColor} ${config.textColor}`}
        >
          {config.label}
        </span>

        {project.links.length > 0 && (
          <div className="flex items-center gap-2">
            {project.links.map((link, index) => {
              const LinkIcon = linkIcons[link.type];
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-(--color-bg-tertiary) hover:bg-(--color-bg-inset) rounded-md transition-colors text-(--color-text-secondary) hover:text-foreground"
                  title={link.label || linkLabels[link.type]}
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>{link.label || linkLabels[link.type]}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {frontmatter?.technologies && frontmatter.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {frontmatter.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs font-mono bg-(--color-bg-tertiary) text-(--color-text-tertiary) rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {(frontmatter?.startDate || frontmatter?.endDate) && (
        <div className="text-sm text-(--color-text-muted)">
          {frontmatter.startDate}
          {frontmatter.endDate && ` — ${frontmatter.endDate}`}
        </div>
      )}
    </div>
  );
}
