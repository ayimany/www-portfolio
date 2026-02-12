import {cn} from "@/lib/utils";
import {Tag} from "@/components/ui/Tag";
import {Card, CardContent} from "@/components/ui/Card";
import {formatDate, formatDateRange} from "@/lib/date";
import {educationIcons, courseIcons} from "@/lib/icons";
import {GraduationCap, BookOpen} from "lucide-react";
import type {Course, Education} from "@/types";

interface EducationCardProps {
    education: Education;
    variant?: "default" | "compact";
    className?: string;
}

interface CourseCardProps {
    course: Course;
    variant?: "default" | "compact";
    className?: string;
}

export function EducationCard({
                                  education,
                                  variant = "default",
                                  className,
                              }: EducationCardProps) {
    const isCompact = variant === "compact";
    const Icon = education.type ? educationIcons[education.type] : GraduationCap;

    return (
        <Card className={cn("p-5", className)}>
            <CardContent>
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-(--color-bg-tertiary) flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-(--color-text-secondary)" />
                    </div>
                    <div>
                        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                            {education.degree}
                        </h3>
                        <p className="text-(--color-text-secondary) mt-0.5">
                            {education.field}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-1 text-sm text-(--color-text-tertiary) ml-14">
          <span className="font-medium text-(--color-text-secondary)">
            {education.institution}
          </span>
                    <div className="flex items-center gap-3">
                        <span>{education.location}</span>
                        <span className="w-1 h-1 rounded-full bg-(--color-text-muted)"/>
                        <span>{formatDateRange(education.startDate, education.endDate)}</span>
                    </div>
                </div>

                {!isCompact && education.honors && education.honors.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1 ml-14">
                        {education.honors.map((honor) => (
                            <Tag key={honor} variant="accent">
                                {honor}
                            </Tag>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export function CourseCard({
                               course,
                               variant = "default",
                               className,
                           }: CourseCardProps) {
    const isCompact = variant === "compact";
    const Icon = course.type ? courseIcons[course.type] : BookOpen;

    return (
        <Card className={cn("p-5", className)}>
            <CardContent>
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-(--color-bg-tertiary) flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-(--color-text-secondary)" />
                    </div>
                    <div>
                        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                            {course.degree}
                        </h3>
                        <p className="text-(--color-text-secondary) mt-0.5">
                            {course.field}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-1 text-sm text-(--color-text-tertiary) ml-14">
          <span className="font-medium text-(--color-text-secondary)">
            {course.institution}
          </span>
                    <div className="flex items-center gap-3">
                        <span>{course.location}</span>
                        <span className="w-1 h-1 rounded-full bg-(--color-text-muted)"/>
                        <span>{formatDate(course.startDate) + " - " + course.durationDays + (course.durationDays == 1 ? " Day" : " Days")}</span>
                    </div>
                </div>

                {!isCompact && course.honors && course.honors.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1 ml-14">
                        {course.honors.map((honor) => (
                            <Tag key={honor} variant="accent">
                                {honor}
                            </Tag>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
