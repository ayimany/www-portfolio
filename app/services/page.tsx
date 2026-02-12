import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Container} from "@/components/layout/Container";
import {Section} from "@/components/layout/Section";
import {ServiceCard} from "@/components/cards/ServiceCard";
import {BackgroundPattern} from "@/components/ui/BackgroundPattern";
import {getServices} from "@/lib/data";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Services | Ayimany",
    description: "Robotics consulting, custom development, and technical training services.",
};

export default function ServicesPage() {
    const services = getServices();

    return (
        <div className="min-h-screen flex flex-col relative">
            <BackgroundPattern variant="grid" />
            <Header/>
            <main className="flex-1 relative">
                <Section>
                    <Container size="lg">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl font-bold text-foreground">
                                Services
                            </h1>
                            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl">
                                Expert robotics consulting, development, and training services.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, i) => (
                                <ServiceCard key={i} service={service}/>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>
            <Footer/>
        </div>
    );
}
