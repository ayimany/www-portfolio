import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Container} from "@/components/layout/Container";
import {Section} from "@/components/layout/Section";
import {CertificationCard} from "@/components/cards/CertificationCard";
import {BackgroundPattern} from "@/components/ui/BackgroundPattern";
import {getCertifications} from "@/lib/data";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Certifications | Ayimany",
    description: "Professional certifications and credentials in robotics and engineering.",
};

export default function CertificationsPage() {
    const certifications = getCertifications();

    return (
        <div className="min-h-screen flex flex-col relative">
            <BackgroundPattern variant="dots" />
            <Header/>
            <main className="flex-1 relative">
                <Section>
                    <Container size="lg">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl font-bold text-foreground">
                                Certifications
                            </h1>
                            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl">
                                Professional certifications and industry credentials.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {certifications.map((cert, i) => (
                                <CertificationCard key={i} certification={cert}/>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer/>
        </div>
    );
}
