/**
 * Respect reduced-motion preference before running any JS-driven animation.
 * CSS animations handle the primary entrance — this script layer adds
 * IntersectionObserver-based reveals for any future elements added below
 * the fold, and sets up the project-item hover tilt effect.
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* --------------------------------------------------
     Project list — subtle parallax nudge on mouse move
     (desktop only, no-op on touch devices)
  -------------------------------------------------- */
  if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach((link) => {
      let raf = null;

      link.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const rect = link.getBoundingClientRect();
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          link.style.setProperty('--tilt', `${relY * 2}deg`);
          raf = null;
        });
      });

      link.addEventListener('mouseleave', () => {
        link.style.setProperty('--tilt', '0deg');
      });
    });
  }

  /* --------------------------------------------------
     Intersection Observer — re-animate elements that
     enter the viewport (useful if content is ever
     extended below the initial fold)
  -------------------------------------------------- */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
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
