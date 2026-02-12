import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type SimpleGridProps = ComponentProps<"div">;

export function SimpleGrid({
  className,
  children,
  ...props
}: SimpleGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:gap-6",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type SimpleCardProps = ComponentProps<"div">;

export function SimpleCard({
  className,
  children,
  ...props
}: SimpleCardProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}
