"use client";

import { useRef, useCallback } from "react";
import { useLightbox } from "./lightbox-context";

interface ImageItem {
  src: string;
  caption?: string;
}

interface ProjectImageStripProps {
  images: ImageItem[];
  variant?: "portrait" | "landscape";
}

export function ProjectImageStrip({ images, variant = "portrait" }: ProjectImageStripProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const { open } = useLightbox();

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const rail = railRef.current;
    if (!rail) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - rail.offsetLeft;
    scrollLeft.current = rail.scrollLeft;
    rail.style.cursor = "grabbing";
  }, []);

  const onMouseLeave = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    isDragging.current = false;
    rail.style.cursor = "grab";
  }, []);

  const onMouseUp = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    isDragging.current = false;
    rail.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const rail = railRef.current;
    if (!isDragging.current || !rail) return;
    e.preventDefault();
    const x = e.pageX - rail.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 4) hasDragged.current = true;
    rail.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleImageClick = useCallback((index: number) => {
    if (hasDragged.current) return;
    open(images, index);
  }, [images, open]);

  return (
    <div className={`project-image-strip project-image-strip--${variant}`}>
      <div
        ref={railRef}
        className="project-image-strip__rail"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {images.map((item, i) => (
          <figure key={i} className="project-image-strip__item">
            <img
              src={item.src}
              alt={item.caption ?? ""}
              className="project-image-strip__img"
              draggable={false}
              onClick={() => handleImageClick(i)}
            />
            {item.caption && (
              <figcaption className="project-image-strip__caption">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
