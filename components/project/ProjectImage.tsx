import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}

export function ProjectImage({
  src,
  alt,
  caption,
  priority = false,
  className,
}: ProjectImageProps) {
  return (
    <figure className={cn("my-8", className)}>
      <div className="relative w-full overflow-hidden rounded-lg border border-(--color-border-default)">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          priority={priority}
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
