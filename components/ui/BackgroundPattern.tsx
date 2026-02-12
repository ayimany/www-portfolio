import {cn} from "@/lib/utils";

type PatternVariant = "grid" | "dots" | "circuit" | "code-lines";

interface BackgroundPatternProps {
    variant: PatternVariant;
    className?: string;
}

const patternStyles: Record<PatternVariant, string> = {
    grid: `
        background-image:
            linear-gradient(to right, var(--pattern-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--pattern-color) 1px, transparent 1px);
        background-size: 40px 40px;
    `,
    dots: `
        background-image: radial-gradient(var(--pattern-color) 1px, transparent 1px);
        background-size: 20px 20px;
    `,
    circuit: `
        background-image:
            linear-gradient(to right, var(--pattern-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--pattern-color) 1px, transparent 1px),
            radial-gradient(var(--pattern-color) 1.5px, transparent 1.5px);
        background-size: 40px 40px, 40px 40px, 20px 20px;
    `,
    "code-lines": `
        background-image: linear-gradient(to bottom, var(--pattern-color) 1px, transparent 1px);
        background-size: 100% 24px;
    `,
};

export function BackgroundPattern({variant, className}: BackgroundPatternProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 pointer-events-none",
                "[--pattern-color:rgba(0,0,0,0.03)] dark:[--pattern-color:rgba(255,255,255,0.02)]",
                className
            )}
            style={{
                ...Object.fromEntries(
                    patternStyles[variant]
                        .trim()
                        .split(";")
                        .filter(Boolean)
                        .map(rule => {
                            const [prop, val] = rule.split(":").map(s => s.trim());
                            const camelProp = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
                            return [camelProp, val];
                        })
                ),
            }}
            aria-hidden="true"
        />
    );
}
