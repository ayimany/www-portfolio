import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {
  spacing?: "sm" | "md" | "lg";
}

export function Section({
  className,
  spacing = "md",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        {
          "py-8 sm:py-12": spacing === "sm",
          "py-12 sm:py-16 lg:py-20": spacing === "md",
          "py-16 sm:py-24 lg:py-32": spacing === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
