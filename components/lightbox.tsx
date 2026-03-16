"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLightbox } from "./lightbox-context";

export function Lightbox() {
  const { state, close, prev, next } = useLightbox();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!state) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [state, close, prev, next]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = state ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [state]);

  if (!state) return null;

  const current = state.images[state.index];
  const hasMultiple = state.images.length > 1;

  return createPortal(
    <div
      className="lightbox-overlay"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div
        className="lightbox-frame"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.caption ?? ""}
          className="lightbox-img"
        />
        {current.caption && (
          <figcaption className="lightbox-caption">{current.caption}</figcaption>
        )}

        <button
          className="lightbox-close"
          onClick={close}
          aria-label="Close lightbox"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {hasMultiple && (
          <>
            <button
              className="lightbox-prev"
              onClick={prev}
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="lightbox-next"
              onClick={next}
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="lightbox-counter">
              {state.index + 1} / {state.images.length}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
