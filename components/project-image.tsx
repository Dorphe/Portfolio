"use client";

import { useLightbox } from "./lightbox-context";

interface ProjectImageProps {
  src?: string;
  caption?: string;
  alt?: string;
}

export function ProjectImage({ src, caption, alt = "" }: ProjectImageProps) {
  const { open } = useLightbox();

  if (!src) {
    return <div className="project-image" aria-hidden="true" />;
  }
  return (
    <figure className="project-image-figure" onClick={() => open([{ src, caption }], 0)}>
      <img src={src} alt={alt} className="project-image-img" />
      {caption && (
        <figcaption className="project-image-caption">{caption}</figcaption>
      )}
    </figure>
  );
}
