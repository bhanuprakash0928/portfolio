import { useEffect } from "react";

/**
 * Lightweight scroll reveal (IntersectionObserver).
 * Every element with .fade-in-up, .slide-up or [data-reveal] starts hidden and
 * gets .is-visible when it scrolls into view; CSS (App.css) plays the animation
 * once. Inline animation-delay values already used by the components give the
 * staggered effect. Skipped automatically when the user prefers reduced motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    const targets = [...document.querySelectorAll(".fade-in-up, .slide-up, [data-reveal]")];
    if (!targets.length) return undefined;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return undefined; // content stays visible

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
