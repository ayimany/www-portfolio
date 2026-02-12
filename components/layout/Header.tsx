"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Container} from "./Container";
import {cn} from "@/lib/utils";

const navLinks = [
    {href: "/experience", label: "Experience"},
    {href: "/education", label: "Education"},
    {href: "/skills", label: "Skills"},
    {href: "/certifications", label: "Certifications"},
    {href: "/projects", label: "Projects"},
    {href: "/services", label: "Services"},
];

export function Header() {
    const pathname = usePathname();

    return (
        <header
            className="sticky top-0 z-(--z-sticky) bg-(--color-bg-primary)/80 backdrop-blur-md border-b border-(--color-border-subtle)">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="font-display text-xl font-semibold text-foreground hover:text-(--color-accent-blue) transition-colors"
                    >
                        Ayimany
                    </Link>
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                        isActive
                                            ? "text-(--color-accent-blue)"
                                            : "text-(--color-text-secondary) hover:text-foreground hover:bg-(--color-bg-tertiary)"
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-(--color-accent-blue) to-(--color-accent-cyan) rounded-full"/>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </Container>
        </header>
    );
}
