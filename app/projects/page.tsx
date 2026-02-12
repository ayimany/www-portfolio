import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Container} from "@/components/layout/Container";
import {Section} from "@/components/layout/Section";
import {ProjectCard} from "@/components/cards/ProjectCard";
import {BackgroundPattern} from "@/components/ui/BackgroundPattern";
import {getProjects} from "@/lib/data";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Projects | Ayimany",
    description: "Robotics and software projects showcasing navigation systems, SLAM research, and hardware controllers.",
};

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div className="min-h-screen flex flex-col relative">
            <BackgroundPattern variant="circuit" />
            <Header/>
            <main className="flex-1 relative">
                <Section>
                    <Container size="lg">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl font-bold text-foreground">
                                Projects
                            </h1>
                            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl">
                                A collection of robotics, research, and software projects I&apos;ve worked on.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project, i) => (
                                <ProjectCard key={i} project={project}/>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer/>
        </div>
    );
}
