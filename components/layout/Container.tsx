import {cn} from "@/lib/utils";
import type {ComponentProps} from "react";

interface ContainerProps extends ComponentProps<"div"> {
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function Container({
                              className,
                              size = "xl",
                              children,
                              ...props
                          }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                {
                    "max-w-(--container-sm)": size === "sm",
                    "max-w-md": size === "md",
                    "max-w-lg": size === "lg",
                    "max-w-xl": size === "xl",
                    "max-w-2xl": size === "2xl",
                },
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
