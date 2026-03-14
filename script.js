/**
 * Minimal JS — entrance animations are CSS-driven.
 * This file exists as a hook for future enhancements
 * and respects the user's reduced-motion preference.
 */

(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* IntersectionObserver scaffold for any future below-fold content */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('[data-reveal]');
    if (revealEls.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => observer.observe(el));
    }
  }
})();
