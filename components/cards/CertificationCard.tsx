import {cn} from "@/lib/utils";
import {Award, ExternalLink} from "lucide-react";
import {Card} from "@/components/ui/Card";
import {formatDate} from "@/lib/date";
import type {Certification} from "@/types";

interface CertificationCardProps {
    certification: Certification;
    variant?: "default" | "compact";
    className?: string;
}

export function CertificationCard({
                                      certification,
                                      variant = "default",
                                      className,
                                  }: CertificationCardProps) {
    const isCompact = variant === "compact";

    const content = (
        <Card
            className={cn(
                "p-4",
                certification.credentialUrl && "cursor-pointer",
                className
            )}
        >
            <div className="flex gap-3">
                <div
                    className="shrink-0 w-10 h-10 flex items-center justify-center bg-(--color-accent-muted) rounded-md">
                    <Award className="w-5 h-5 text-(--color-accent-primary)"/>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-foreground leading-tight line-clamp-2">
                            {certification.name}
                        </h3>
                        {certification.credentialUrl && (
                            <ExternalLink
                                className="w-4 h-4 text-(--color-text-muted) shrink-0 group-hover:text-(--color-accent-primary) transition-colors"/>
                        )}
                    </div>
                    {!isCompact && (
                        <p className="text-sm text-(--color-text-secondary) mt-1">
                            {certification.issuer}
                        </p>
                    )}
                    <p className="text-xs text-(--color-text-tertiary) mt-1">
                        {isCompact ? certification.issuer : formatDate(certification.issueDate)}
                    </p>
                </div>
            </div>
        </Card>
    );

    if (certification.credentialUrl) {
        return (
            <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {content}
            </a>
        );
    }

    return content;
}
