import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Container} from "@/components/layout/Container";
import {Section} from "@/components/layout/Section";
import {CourseCard, EducationCard} from "@/components/cards/EducationCard";
import {BackgroundPattern} from "@/components/ui/BackgroundPattern";
import {getCourses, getEducation} from "@/lib/data";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Education | Ayimany",
    description: "Academic background in robotics and engineering.",
};

export default function EducationPage() {
    const education = getEducation();
    const courses = getCourses();

    return (
        <div className="min-h-screen flex flex-col relative">
            <BackgroundPattern variant="grid" />
            <Header/>
            <main className="flex-1 relative">
                <Section>
                    <Container size="lg">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl font-bold text-foreground">
                                Education
                            </h1>
                            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl">
                                Academic foundation in engineering and robotics.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {education.map((edu, i) => (
                                <EducationCard key={i} education={edu}/>
                            ))}
                        </div>
                    </Container>
                </Section>

                <Section>
                    <Container size="lg">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl font-bold text-foreground">
                                Courses
                            </h1>
                            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl">
                                Expanding knowledge through active participation.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {courses.map((crs, i) => (
                                <CourseCard key={i} course={crs}/>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer/>
        </div>
    );
}
