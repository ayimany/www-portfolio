import {cn} from "@/lib/utils";
import type {ComponentProps} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonLinkProps extends ComponentProps<"a"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

function ButtonLink({
                        className,
                        variant = "primary",
                        size = "md",
                        children,
                        ...props
                    }: ButtonLinkProps) {
    return (
        <a
            className={cn(
                "inline-flex items-center justify-center gap-2 font-medium transition-all duration-(--duration-normal)",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent-blue) focus-visible:ring-offset-2",
                {
                    "bg-gradient-to-r from-(--color-accent-blue) to-(--color-accent-violet) text-white hover:from-(--color-accent-cyan) hover:to-(--color-accent-blue) shadow-sm hover:shadow-md":
                        variant === "primary",
                    "bg-(--color-bg-tertiary) text-foreground border border-(--color-border-default) hover:border-(--color-accent-blue) hover:text-(--color-accent-blue)":
                        variant === "secondary",
                    "bg-transparent text-(--color-text-secondary) hover:text-(--color-accent-blue) hover:bg-(--color-bg-tertiary)":
                        variant === "ghost",
                },
                {
                    "h-8 px-3 text-sm rounded-md": size === "sm",
                    "h-10 px-4 text-base rounded-md": size === "md",
                    "h-12 px-6 text-lg rounded-lg": size === "lg",
                },
                className
            )}
            {...props}
        >
            {children}
        </a>
    );
}

export default ButtonLink
