import { useCallback, useLayoutEffect, useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { ThemeContext } from "./ThemeContext.js";
import {
  THEMES,
  ACCENT_IDS,
  DEFAULT_THEME,
  DEFAULT_ACCENT,
  THEME_KEY,
  ACCENT_KEY,
  THEME_COLOR,
} from "../config/theme.js";

// The inline script in index.html has already put the saved values on <html>
// before React starts, so read them from there (no flash, no mismatch).
const fromRoot = (name, allowed, fallback) => {
  const value = document.documentElement.dataset[name];
  return allowed.includes(value) ? value : fallback;
};

/**
 * Owns the selected theme + accent colour.
 *  - applies them as data-theme / data-accent on <html> (CSS does the rest)
 *  - remembers them in localStorage
 *  - changes happen without reloading, using a cross-fade when the browser
 *    supports View Transitions and a short CSS colour transition otherwise
 */
function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => fromRoot("theme", THEMES, DEFAULT_THEME));
  const [accent, setAccentState] = useState(() => fromRoot("accent", ACCENT_IDS, DEFAULT_ACCENT));

  // runs synchronously during commit, so it is part of the view transition snapshot
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.accent = accent;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR[theme]);
  }, [theme, accent]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme);
      localStorage.setItem(ACCENT_KEY, accent);
    } catch {
      /* storage can be blocked (private mode) - the theme still works for this visit */
    }
  }, [theme, accent]);

  const animate = useCallback((update) => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(() => flushSync(update));
      return;
    }
    const root = document.documentElement;
    root.classList.add("theme-switching");
    update();
    window.setTimeout(() => root.classList.remove("theme-switching"), 500);
  }, []);

  const setTheme = useCallback(
    (next) => {
      if (THEMES.includes(next) && next !== theme) animate(() => setThemeState(next));
    },
    [theme, animate]
  );

  const setAccent = useCallback(
    (next) => {
      if (ACCENT_IDS.includes(next) && next !== accent) animate(() => setAccentState(next));
    },
    [accent, animate]
  );

  const value = useMemo(
    () => ({ theme, accent, setTheme, setAccent }),
    [theme, accent, setTheme, setAccent]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
