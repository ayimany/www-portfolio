import {cn} from "@/lib/utils";
import {Tag} from "@/components/ui/Tag";
import {Card, CardContent} from "@/components/ui/Card";
import {formatDate, formatDateRange} from "@/lib/date";
import {experienceIcons, competitionIcons} from "@/lib/icons";
import {Briefcase, Trophy} from "lucide-react";
import type {Competition, Experience} from "@/types";

interface ExperienceCardProps {
    experience: Experience;
    variant?: "default" | "compact";
    className?: string;
}

interface CompetitionCardProps {
    competition: Competition;
    variant?: "default" | "compact";
    className?: string;
}

export function ExperienceCard({
                                   experience,
                                   variant = "default",
                                   className,
                               }: ExperienceCardProps) {
    const isCompact = variant === "compact";
    const Icon = experience.type ? experienceIcons[experience.type] : Briefcase;

    return (
        <Card className={cn("p-5", className)}>
            <CardContent>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-(--color-bg-tertiary) flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-(--color-text-secondary)" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                                {experience.role}
                            </h3>
                            <p className="text-(--color-text-secondary) mt-0.5">
                                {experience.company}
                            </p>
                        </div>
                    </div>
                    {experience.endDate === null && (
                        <Tag variant="accent">Current</Tag>
                    )}
                </div>

                <div className="flex items-center gap-3 text-sm text-(--color-text-tertiary) ml-14">
                    <span>{experience.location}</span>
                    <span className="w-1 h-1 rounded-full bg-(--color-text-muted)"/>
                    <span>{formatDateRange(experience.startDate, experience.endDate)}</span>
                </div>

                {!isCompact && (
                    <div className="ml-14">
                        <p className="text-(--color-text-secondary) text-sm leading-relaxed">
                            {experience.description}
                        </p>

                        {experience.highlights.length > 0 && (
                            <ul className="list-disc list-inside space-y-1 text-sm text-(--color-text-secondary)">
                                {experience.highlights.slice(0, 3).map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-1 ml-14">
                    {experience.technologies.map((tech) => (
                        <Tag key={tech} variant="muted">
                            {tech}
                        </Tag>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export function CompetitionCard({
                                    competition,
                                    variant = "default",
                                    className,
                                }: CompetitionCardProps) {
    const isCompact = variant === "compact";
    const Icon = competition.type ? competitionIcons[competition.type] : Trophy;

    return (
        <Card className={cn("p-5", className)}>
            <CardContent>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-(--color-bg-tertiary) flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-(--color-text-secondary)" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                                {competition.name}
                            </h3>
                            <p className="text-(--color-text-secondary) mt-0.5">
                                {competition.host}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-(--color-text-tertiary) ml-14">
                    <span>{competition.location}</span>
                    <span className="w-1 h-1 rounded-full bg-(--color-text-muted)"/>
                    <span>{formatDate(competition.startDate)}</span>
                </div>

                {!isCompact && (
                    <div className="ml-14">
                        <p className="text-(--color-text-secondary) text-sm leading-relaxed">
                            {competition.description}
                        </p>

                        {competition.highlights.length > 0 && (
                            <ul className="list-disc list-inside space-y-1 text-sm text-(--color-text-secondary)">
                                {competition.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-1 ml-14">
                    {competition.technologies.map((tech) => (
                        <Tag key={tech} variant="muted">
                            {tech}
                        </Tag>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
