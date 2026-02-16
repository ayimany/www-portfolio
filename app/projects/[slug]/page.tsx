import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BackgroundPattern } from "@/components/ui/BackgroundPattern";
import {
  ProjectHeader,
  ProjectMeta,
  ProjectNavigation,
  ProjectImage,
} from "@/components/project";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  getAdjacentProjects,
} from "@/lib/data";
import { getProjectContent, projectHasContent } from "@/lib/mdx";
import { BookOpen, ExternalLink, FileText, Github, Play } from "lucide-react";
import type { ProjectLinkType } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Ayimany",
    };
  }

  return {
    title: `${project.name} | Ayimany`,
    description: project.description,
  };
}

const linkIcons: Record<ProjectLinkType, typeof FileText> = {
  github: Github,
  docs: FileText,
  demo: ExternalLink,
  video: Play,
  article: BookOpen,
};

const linkLabels: Record<ProjectLinkType, string> = {
  github: "GitHub",
  docs: "Documentation",
  demo: "Demo",
  video: "Video",
  article: "Article",
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const mdxContent = await getProjectContent(slug);
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundPattern variant="circuit" />
      <Header />
      <main className="flex-1 relative">
        <Section>
          <Container size="md">
            <ProjectHeader project={project} />

            {mdxContent?.frontmatter.coverImage && (
              <ProjectImage
                src={mdxContent.frontmatter.coverImage}
                alt={`${project.name} cover image`}
                priority
                className="mb-8"
              />
            )}

            <ProjectMeta
              project={project}
              frontmatter={mdxContent?.frontmatter}
            />

            {mdxContent ? (
              <article className="prose prose-lg max-w-none">
                {mdxContent.content}
              </article>
            ) : (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-bg-tertiary) rounded-full mb-4">
                  <FileText className="w-8 h-8 text-(--color-text-muted)" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  Detailed Content Coming Soon
                </h2>
                <p className="text-(--color-text-secondary) mb-6 max-w-md mx-auto">
                  {project.status === "planned"
                    ? "This project is still in the planning phase. Check back later for updates."
                    : project.status === "erased"
                    ? project.statusReason
                    : "A detailed write-up for this project is being prepared."}
                </p>
                {project.links.length > 0 && (
                  <div className="flex items-center justify-center gap-3">
                    {project.links.map((link, index) => {
                      const LinkIcon = linkIcons[link.type];
                      return (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-(--color-accent-primary) text-(--color-text-inverse) rounded-md hover:opacity-90 transition-opacity"
                        >
                          <LinkIcon className="w-4 h-4" />
                          <span>{link.label || linkLabels[link.type]}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            <ProjectNavigation prev={prev} next={next} />
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
