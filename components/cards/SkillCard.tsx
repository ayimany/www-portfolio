import {cn} from "@/lib/utils";
import {Card} from "@/components/ui/Card";
import type {ComfortLevel, Skill} from "@/types";

interface SkillCardProps {
    skill: Skill;
    variant?: "default" | "compact";
    className?: string;
}

const categoryColors: Record<Skill["category"], string> = {
    programming: "bg-indigo-600 dark:bg-indigo-400",
    robotics: "bg-cyan-600 dark:bg-cyan-400",
    hardware: "bg-amber-600 dark:bg-amber-400",
    mechanical: "bg-stone-600 dark:bg-stone-400",
    tools: "bg-emerald-600 dark:bg-emerald-400",
    frameworks: "bg-rose-600 dark:bg-rose-400",
};

const comfortLabels: Record<ComfortLevel, string> = {
    new: "New",
    exploring: "Exploring",
    comfortable: "Comfortable",
};

const comfortStyles: Record<ComfortLevel, string> = {
    new: "bg-(--color-bg-tertiary)/50 text-(--color-text-tertiary)/50",
    exploring: "bg-(--color-bg-tertiary) text-(--color-text-tertiary)",
    comfortable: "bg-(--color-accent-primary)/15 text-(--color-accent-primary)",
};

export function SkillCard({skill, variant = "default", className}: SkillCardProps) {
    const isCompact = variant === "compact";

    return (
        <Card
            as="div"
            className={cn(
                "rounded-md hover:shadow-none",
                isCompact ? "p-3" : "p-4",
                className
            )}
        >
            <div className={cn("flex items-center justify-between gap-3", !isCompact && "mb-3")}>
                <div className="flex items-center gap-2">
                    <div
                        className={cn(
                            "w-2 h-2 rounded-full shrink-0",
                            categoryColors[skill.category]
                        )}
                    />
                    <span className="text-sm font-medium text-foreground">
            {skill.name}
          </span>
                </div>
                {!isCompact && (
                    <span
                        className={cn(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            comfortStyles[skill.comfort]
                        )}
                    >
            {comfortLabels[skill.comfort]}
          </span>
                )}
            </div>
            {!isCompact && (
                <ul className="space-y-1.5">
                    {skill.knowledgePoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-(--color-text-secondary)">
                            <svg
                                className="w-3.5 h-3.5 mt-0.5 shrink-0 text-(--color-accent-primary)"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
}
