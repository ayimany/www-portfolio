import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Container} from "@/components/layout/Container";
import {Section} from "@/components/layout/Section";
import {SkillCard} from "@/components/cards/SkillCard";
import {BackgroundPattern} from "@/components/ui/BackgroundPattern";
import {getSkillsByCategory} from "@/lib/data";
import type {Skill} from "@/types";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Skills | Ayimany",
    description: "Technical skills and expertise in robotics engineering.",
};

const categoryLabels: Record<Skill["category"], string> = {
    programming: "Programming Languages",
    robotics: "Robotics & Autonomy",
    hardware: "Hardware & Embedded",
    mechanical: "Mechanical & Manufacturing",
    tools: "Tools & Platforms",
    frameworks: "Frameworks & Libraries",
};

const categoryOrder: Skill["category"][] = [
    "programming",
    "robotics",
    "hardware",
    "mechanical",
    "tools",
    "frameworks",
];

export default function SkillsPage() {
    return (
        <div className="min-h-screen flex flex-col relative">
            <BackgroundPattern variant="dots" />
            <Header/>
            <main className="flex-1 relative">
                <Section>
                    <Container size="lg">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl font-bold text-foreground">
                                Skills
                            </h1>
                            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl">
                                Technologies and tools I use to build robotic systems.
                            </p>
                        </div>
                        <div className="space-y-12">
                            {categoryOrder.map((category) => {
                                const skills = getSkillsByCategory(category);
                                if (skills.length === 0) return null;
                                return (
                                    <div key={category}>
                                        <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                                            {categoryLabels[category]}
                                        </h2>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {skills.map((skill, i) => (
                                                <SkillCard key={i} skill={skill}/>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer/>
        </div>
    );
}
