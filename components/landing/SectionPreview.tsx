import Link from "next/link";
import {cn} from "@/lib/utils";
import {
  ArrowRight,
  Award,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Handshake,
  type LucideIcon,
  Wrench,
} from "lucide-react";
import type {ReactNode} from "react";

type SectionType =
    | "experience"
    | "education"
    | "skills"
    | "certifications"
    | "projects"
    | "services";

interface SectionPreviewProps {
    section: SectionType;
    title: string;
    subtitle?: string;
    className?: string;
    children: ReactNode;
}

const sectionIcons: Record<SectionType, LucideIcon> = {
    experience: Briefcase,
    education: GraduationCap,
    skills: Wrench,
    certifications: Award,
    projects: FolderKanban,
    services: Handshake,
};

export function SectionPreview({
                                   section,
                                   title,
                                   subtitle,
                                   className,
                                   children,
                               }: SectionPreviewProps) {
    const Icon = sectionIcons[section];

    return (
        <div
            className={cn(
                "group flex flex-col h-full p-5 sm:p-6 bg-(--color-bg-secondary) border border-(--color-border-default) rounded-xl",
                "hover:border-(--color-border-emphasis) transition-all duration-(--duration-normal)",
                className
            )}
        >
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-(--color-bg-tertiary) rounded-lg">
                        <Icon className="w-5 h-5 text-(--color-accent-primary)"/>
                    </div>
                    <div>
                        <h2 className="font-display text-lg font-semibold text-foreground">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-sm text-(--color-text-tertiary)">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
                <Link
                    href={`/${section}`}
                    className="flex items-center gap-1 text-sm font-medium text-(--color-text-muted) hover:text-(--color-accent-primary) transition-colors"
                >
                    <span className="hidden sm:inline">View all</span>
                    <ArrowRight className="w-4 h-4"/>
                </Link>
            </div>

            <div className="flex-1 overflow-hidden">{children}</div>
        </div>
    );
}
