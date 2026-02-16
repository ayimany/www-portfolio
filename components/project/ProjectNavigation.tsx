import Link from "next/link";
import {ArrowLeft, ArrowRight} from "lucide-react";
import type {Project} from "@/types";

interface ProjectNavigationProps {
    prev: Project | null;
    next: Project | null;
}

export function ProjectNavigation({prev, next}: ProjectNavigationProps) {
    if (!prev && !next) {
        return null;
    }

    return (
        <nav className="flex items-stretch gap-4 mt-12 pt-8 border-t border-(--color-border-default)">
            {prev ? (
                <Link
                    href={`/projects/${prev.slug}`}
                    className="flex-1 group p-4 bg-(--color-bg-secondary) hover:bg-(--color-bg-tertiary) rounded-lg border border-(--color-border-default) transition-colors"
                >
                    <div className="flex items-center gap-2 text-sm text-(--color-text-muted) mb-1">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                        <span>Previous</span>
                    </div>
                    <div
                        className="font-medium text-foreground group-hover:text-(--color-accent-primary) transition-colors">
                        {prev.name}
                    </div>
                </Link>
            ) : (
                <div className="flex-1"/>
            )}

            {next ? (
                <Link
                    href={`/projects/${next.slug}`}
                    className="flex-1 group p-4 bg-(--color-bg-secondary) hover:bg-(--color-bg-tertiary) rounded-lg border border-(--color-border-default) transition-colors text-right"
                >
                    <div className="flex items-center justify-end gap-2 text-sm text-(--color-text-muted) mb-1">
                        <span>Next</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </div>
                    <div
                        className="font-medium text-foreground group-hover:text-(--color-accent-primary) transition-colors">
                        {next.name}
                    </div>
                </Link>
            ) : (
                <div className="flex-1"/>
            )}
        </nav>
    );
}
