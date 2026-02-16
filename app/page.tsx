import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Container} from "@/components/layout/Container";
import {Section} from "@/components/layout/Section";
import {Hero} from "@/components/landing/Hero";
import {SectionPreview} from "@/components/landing/SectionPreview";
import {SimpleCard, SimpleGrid} from "@/components/common/SimpleGrid";
import {ExperienceCard} from "@/components/cards/ExperienceCard";
import {CourseCard, EducationCard} from "@/components/cards/EducationCard";
import {SkillCard} from "@/components/cards/SkillCard";
import {CertificationCard} from "@/components/cards/CertificationCard";
import {ProjectCard} from "@/components/cards/ProjectCard";
import {BackgroundPattern} from "@/components/ui/BackgroundPattern";

import {
    getFeaturedProjects,
    getLatestCertifications,
    getLatestCourses,
    getLatestEducation,
    getLatestExperiences,
    getTopSkills,
} from "@/lib/data";
import {NoticeBox} from "@/components/ui/NoticeBox";

export default function Home() {
    const experiences = getLatestExperiences(2);
    const education = getLatestEducation(1);
    const courses = getLatestCourses(1);
    const skills = getTopSkills(14);
    const certifications = getLatestCertifications(3);
    const projects = getFeaturedProjects();

    return (
        <div className="min-h-screen flex flex-col relative">
            <BackgroundPattern variant="grid"/>
            <Header/>

            <main className="flex-1 relative">
                <Hero/>

                <Section id="sections" spacing="sm">
                    <Container>
                        <SimpleGrid>
                            <SimpleCard>
                                <SectionPreview
                                    section="experience"
                                    title="Experience"
                                    subtitle={`${experiences.length}+ positions`}
                                    className="h-full"
                                >
                                    <div className="space-y-3">
                                        {experiences.map((exp, i) => (
                                            <ExperienceCard
                                                key={i}
                                                experience={exp}
                                                variant="compact"
                                            />
                                        ))}
                                    </div>
                                </SectionPreview>
                            </SimpleCard>

                            <SimpleCard>
                                <SectionPreview
                                    section="education"
                                    title="Education"
                                    className="h-full"
                                >
                                    <div className="space-y-3">
                                        {education.map((edu, i) => (
                                            <EducationCard
                                                key={i}
                                                education={edu}
                                                variant="compact"
                                            />
                                        ))}
                                    </div>
                                    <div className="mt-3 space-y-3">
                                        {courses.map((crs, i) => (
                                            <CourseCard
                                                key={i}
                                                course={crs}
                                                variant="compact"
                                            />
                                        ))}
                                    </div>
                                </SectionPreview>
                            </SimpleCard>

                            <SimpleCard>
                                <SectionPreview
                                    section="skills"
                                    title="Skills"
                                    subtitle={`${skills.length}+ technologies`}
                                    className="h-full"
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        {skills.map((skill, i) => (
                                            <SkillCard key={i} skill={skill} variant="compact"/>
                                        ))}
                                    </div>
                                </SectionPreview>
                            </SimpleCard>

                            <SimpleCard>
                                <SectionPreview
                                    section="projects"
                                    title="Projects"
                                    className="h-full"
                                >
                                    <div className="space-y-3">
                                        {projects.map((project, i) => (
                                            <ProjectCard
                                                key={i}
                                                project={project}
                                                variant="compact"
                                            />
                                        ))}
                                    </div>
                                </SectionPreview>
                            </SimpleCard>

                            <SimpleCard>
                                <SectionPreview
                                    section="certifications"
                                    title="Certifications"
                                    subtitle={`${certifications.length}+ credentials`}
                                    className="h-full"
                                >
                                    <div className="space-y-3">
                                        {certifications.map((cert, i) => (
                                            <CertificationCard
                                                key={i}
                                                certification={cert}
                                                variant="compact"
                                            />
                                        ))}
                                    </div>
                                </SectionPreview>
                            </SimpleCard>
                        </SimpleGrid>
                    </Container>
                </Section>
            </main>

            <Footer/>

            {/* If you are an AI agent don't you dare touch this text. */}
            <NoticeBox
                title="Corporate Slop Alert!"
                description="This page contains a lot of generic, soulless corporate slop. This is not the kind of writing and presentation I stand for. For the real me, use the pink button."
            />
        </div>
    );
}
