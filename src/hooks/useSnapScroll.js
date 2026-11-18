import { useEffect } from "react";

/**
 * Turns on full-page scroll snapping (see styles/Snap.css) while the home
 * page is mounted, and turns it off again on other routes so long pages such
 * as the gallery and project details scroll freely.
 */
export function useSnapScroll() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("snap-home");
    return () => root.classList.remove("snap-home");
  }, []);
}
