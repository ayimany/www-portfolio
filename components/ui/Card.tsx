import {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface CardProps {
    children: ReactNode;
    className?: string;
    as?: "div" | "article";
    accentColor?: "blue" | "cyan" | "violet" | "none";
}

export function Card({children, className, as: Component = "article", accentColor = "none"}: CardProps) {
    const accentStyles = {
        blue: "hover:border-(--color-accent-primary)/50 hover:shadow-[0_0_20px_-5px_var(--color-accent-blue-glow)]",
        cyan: "hover:border-(--color-accent-primary)/50 hover:shadow-[0_0_20px_-5px_var(--color-accent-cyan-glow)]",
        violet: "hover:border-(--color-accent-primary)/50 hover:shadow-[0_0_20px_-5px_var(--color-accent-violet-glow)]",
        none: "hover:border-(--color-border-emphasis)",
    };

    return (
        <Component
            className={cn(
                "bg-(--color-bg-elevated) border border-(--color-border-default) rounded-lg",
                "hover:shadow-(--shadow-card-hover) transition-all duration-(--duration-normal)",
                accentStyles[accentColor],
                className
            )}
        >
            {children}
        </Component>
    );
}

export function CardContent({children, className}: { children: ReactNode; className?: string }) {
    return <div className={cn("flex flex-col gap-3", className)}>{children}</div>;
}
