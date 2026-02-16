import type {MDXComponents} from "mdx/types";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface ProjectImageProps {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
}

function ProjectImage({src, alt, caption, className}: ProjectImageProps) {
    return (
        <figure className={cn("my-8", className)}>
            <div className="relative w-full overflow-hidden rounded-lg border border-(--color-border-default)">
                <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                />
            </div>
            {caption && (
                <figcaption className="mt-3 text-center text-sm text-(--color-text-muted)">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

export const mdxComponents: MDXComponents = {
    h1: ({children, ...props}) => (
        <h1
            className="font-display text-3xl font-bold text-foreground mt-12 mb-4 first:mt-0"
            {...props}
        >
            {children}
        </h1>
    ),
    h2: ({children, ...props}) => (
        <h2
            className="font-display text-2xl font-semibold text-foreground mt-10 mb-4"
            {...props}
        >
            {children}
        </h2>
    ),
    h3: ({children, ...props}) => (
        <h3
            className="font-display text-xl font-medium text-foreground mt-8 mb-3"
            {...props}
        >
            {children}
        </h3>
    ),
    h4: ({children, ...props}) => (
        <h4
            className="font-display text-lg font-medium text-foreground mt-6 mb-2"
            {...props}
        >
            {children}
        </h4>
    ),
    p: ({children, ...props}) => (
        <p
            className="text-(--color-text-secondary) leading-relaxed mb-4"
            {...props}
        >
            {children}
        </p>
    ),
    ul: ({children, ...props}) => (
        <ul
            className="list-disc list-inside text-(--color-text-secondary) mb-4 space-y-2"
            {...props}
        >
            {children}
        </ul>
    ),
    ol: ({children, ...props}) => (
        <ol
            className="list-decimal list-inside text-(--color-text-secondary) mb-4 space-y-2"
            {...props}
        >
            {children}
        </ol>
    ),
    li: ({children, ...props}) => (
        <li className="leading-relaxed" {...props}>
            {children}
        </li>
    ),
    blockquote: ({children, ...props}) => (
        <blockquote
            className="border-l-4 border-(--color-border-accent) pl-4 italic text-(--color-text-tertiary) my-6"
            {...props}
        >
            {children}
        </blockquote>
    ),
    a: ({children, href, ...props}) => (
        <a
            href={href}
            className="text-(--color-text-primary) hover:text-(--color-accent-primary) underline underline-offset-2 transition-colors"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            {...props}
        >
            {children}
        </a>
    ),
    code: ({children, ...props}) => (
        <code
            className="font-mono text-sm bg-(--color-bg-tertiary) px-1.5 py-0.5 rounded"
            {...props}
        >
            {children}
        </code>
    ),
    pre: ({children, ...props}) => (
        <pre
            className="font-mono text-sm overflow-x-auto rounded-lg my-6 p-4 bg-(--color-bg-inset) border border-(--color-border-default)"
            {...props}
        >
      {children}
    </pre>
    ),
    hr: (props) => (
        <hr
            className="my-8 border-t border-(--color-border-default)"
            {...props}
        />
    ),
    table: ({children, ...props}) => (
        <div className="overflow-x-auto my-6">
            <table
                className="w-full border-collapse text-sm"
                {...props}
            >
                {children}
            </table>
        </div>
    ),
    th: ({children, ...props}) => (
        <th
            className="text-left font-semibold text-foreground p-3 border-b border-(--color-border-emphasis) bg-(--color-bg-secondary)"
            {...props}
        >
            {children}
        </th>
    ),
    td: ({children, ...props}) => (
        <td
            className="p-3 border-b border-(--color-border-subtle) text-(--color-text-secondary)"
            {...props}
        >
            {children}
        </td>
    ),
    Image: ProjectImage,
    img: ({src, alt, ...props}) => (
        <ProjectImage src={src || ""} alt={alt || ""} {...props} />
    ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...mdxComponents,
        ...components,
    };
}
