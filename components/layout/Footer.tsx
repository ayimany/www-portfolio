import { Container } from "./Container";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-(--color-border-subtle) bg-(--color-bg-secondary)">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <p className="text-sm text-(--color-text-tertiary)">
            &copy; {new Date().getFullYear()} Ayimany. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-text-tertiary) hover:text-(--color-accent-primary) transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
