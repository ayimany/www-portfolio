import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import type { Options as PrettyCodeOptions } from "rehype-pretty-code";
import { mdxComponents } from "@/mdx-components";

export interface ProjectFrontmatter {
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  coverImage?: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content/projects");

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: true,
};

export async function getProjectContent(slug: string): Promise<{
  content: React.ReactElement;
  frontmatter: ProjectFrontmatter;
} | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
          rehypeKatex,
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    },
  });

  return { content, frontmatter };
}

export function projectHasContent(slug: string): boolean {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  return fs.existsSync(filePath);
}
