import {cn} from "@/lib/utils";
import type {ComponentProps} from "react";

type TagVariant = "default" | "accent" | "muted";

interface TagProps extends ComponentProps<"span"> {
    variant?: TagVariant;
}

export function Tag({
                        className,
                        variant = "default",
                        children,
                        ...props
                    }: TagProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-sm",
                {
                    "bg-(--color-bg-tertiary) text-(--color-text-secondary)":
                        variant === "default",
                    "bg-(--color-accent-muted) text-(--color-accent-primary)":
                        variant === "accent",
                    "bg-(--color-bg-inset) text-(--color-text-muted)":
                        variant === "muted",
                },
                className
            )}
            {...props}
        >
      {children}
    </span>
    );
}
