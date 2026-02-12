import Image from "next/image";
import {Container} from "@/components/layout/Container";
import ButtonLink from "@/components/ui/Button";
import {ArrowDown} from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <p className="text-sm font-mono uppercase tracking-widest text-(--color-accent-primary)">
                                Robotics Engineer
                            </p>
                            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                                Ayimany
                            </h1>

                            <p className="text-xl sm:text-2xl text-(--color-text-secondary) leading-relaxed max-w-xl">
                                Driven by the belief that technology should handle the{" "}
                                <span className="text-foreground font-medium">
                  boring stuff
                </span>
                                , freeing humanity to live better, more creative lives.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
                                <div className="space-y-2">
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-(--color-accent-primary)">
                                        Swiss Army Knife
                                    </h3>
                                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                                        Bridging computer, electronic, and mechanical engineering to
                                        build cohesive, intelligent systems.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-(--color-accent-primary)">
                                        Hands-On Builder
                                    </h3>
                                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                                        Embedded applications, robotic vision, and autonomous
                                        navigation—machines that see, think, and move.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-(--color-accent-primary)">
                                        Open Source Advocate
                                    </h3>
                                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                                        The best innovations are built together. Passionate about
                                        collective knowledge and shared progress.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <ButtonLink href="#sections" size="md">
                                Explore My Work
                            </ButtonLink>
                            <ButtonLink href="/services" variant="secondary" size="md">
                                Work With Me
                            </ButtonLink>
                        </div>

                    </div>

                    {/* Right: Logo */}
                    <div className="hidden lg:flex items-center justify-center">
                        <Image
                            src="/logo.svg"
                            alt="Ayimany logo"
                            width={400}
                            height={400}
                            className="w-[50%] max-w-md"
                            priority
                        />
                    </div>
                </div>
            </Container>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <a
                    href="#sections"
                    className="group flex flex-col items-center gap-2 text-(--color-text-muted) hover:text-(--color-accent-cyan) transition-colors"
                >
          <span className="text-xs font-mono uppercase tracking-wider">
            Scroll
          </span>
                    <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-(--color-accent-blue)"/>
                </a>
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-(--color-accent-violet) rounded-full blur-3xl opacity-10"/>
                <div
                    className="absolute top-1/2 right-1/3 w-48 h-48 bg-(--color-accent-cyan) rounded-full blur-3xl opacity-5"/>
            </div>
        </section>
    );
}
