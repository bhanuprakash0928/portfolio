import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/** Jump (no smooth animation) to the top of the page. */
function jumpToTop() {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto"; // the site uses smooth scrolling in CSS
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previous;
}

/**
 * - Route change            -> jump to the top (or to the #hash target)
 * - Same-page #hash links   -> smooth scroll to that section
 * Needed because the navbar links to "/#projects" etc. from every page.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const lastPath = useRef(pathname);

  useEffect(() => {
    const routeChanged = lastPath.current !== pathname;
    lastPath.current = pathname;

    // --- no hash ---
    if (!hash) {
      if (!routeChanged) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return undefined;
      }
      // Browsers re-clamp the scroll position while the old page is swapped for
      // the new one, so reset it now and once more after layout has settled.
      jumpToTop();
      const frame = requestAnimationFrame(jumpToTop);
      const timer = setTimeout(jumpToTop, 80);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(timer);
      };
    }

    // --- #hash ---
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let frame;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: routeChanged ? "instant" : "smooth", block: "start" });
      } else if (tries++ < 30) {
        frame = requestAnimationFrame(scrollToTarget); // wait for the new page to render
      }
    };
    scrollToTarget();

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
