import {cn} from "@/lib/utils";
import {Bot, Cpu, GraduationCap, Handshake, type LucideIcon} from "lucide-react";
import {Card} from "@/components/ui/Card";
import type {Service} from "@/types";

interface ServiceCardProps {
    service: Service;
    variant?: "default" | "compact";
    className?: string;
}

const iconMap: Record<string, LucideIcon> = {
    Cpu,
    Bot,
    GraduationCap,
    Handshake,
};

export function ServiceCard({
                                service,
                                variant = "default",
                                className,
                            }: ServiceCardProps) {
    const isCompact = variant === "compact";
    const Icon = iconMap[service.icon] || Handshake;

    return (
        <Card
            className={cn(
                "h-full p-5 hover:border-(--color-accent-primary)",
                className
            )}
        >
            <div className="flex flex-col h-full gap-4">
                <div
                    className="w-12 h-12 flex items-center justify-center bg-(--color-accent-muted) rounded-lg group-hover:bg-(--color-accent-subtle) transition-colors">
                    <Icon className="w-6 h-6 text-(--color-accent-primary)"/>
                </div>

                <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                        {service.title}
                    </h3>
                    <p className="text-sm text-(--color-text-secondary) mt-1.5">
                        {service.shortDescription}
                    </p>
                </div>

                {!isCompact && service.deliverables.length > 0 && (
                    <ul className="space-y-1.5 text-sm">
                        {service.deliverables.slice(0, 3).map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-2 text-(--color-text-tertiary)"
                            >
                                <span className="w-1 h-1 rounded-full bg-(--color-accent-primary)"/>
                                {item}
                            </li>
                        ))}
                        {service.deliverables.length > 3 && (
                            <li className="text-(--color-text-muted) pl-3">
                                +{service.deliverables.length - 3} more
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </Card>
    );
}
