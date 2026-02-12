import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Container} from "@/components/layout/Container";
import {Section} from "@/components/layout/Section";
import {CompetitionCard, ExperienceCard} from "@/components/cards/ExperienceCard";
import {BackgroundPattern} from "@/components/ui/BackgroundPattern";
import {getCompetitions, getExperiences} from "@/lib/data";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Experience | Ayimany",
    description: "Professional experience in robotics engineering and autonomous systems.",
};

export default function ExperiencePage() {
    const experiences = getExperiences();
    const competitions = getCompetitions();

    return (
        <div className="min-h-screen flex flex-col relative">
            <BackgroundPattern variant="code-lines" />
            <Header/>
            <main className="flex-1 relative">
                <Section>
                    <Container size="lg">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl font-bold text-foreground">
                                Experience
                            </h1>
                            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl">
                                My journey building intelligent machines and autonomous systems.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {experiences.map((exp, i) => (
                                <ExperienceCard key={i} experience={exp}/>
                            ))}
                        </div>
                    </Container>
                </Section>
                <Section>
                    <Container size="lg">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl font-bold text-foreground">
                                Competitions
                            </h1>
                            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl">
                                High-performance environments that have taught me heaps of knowledge.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {competitions.map((cmp, i) => (
                                <CompetitionCard key={i} competition={cmp}/>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer/>
        </div>
    );
}
