// Single source of truth for the theme options (keep in sync with styles/Theme.css
// and the inline script in index.html).
export const THEMES = ["dark", "light"];
export const DEFAULT_THEME = "dark"; // first-time visitors get Dark mode

export const ACCENTS = [
  { id: "violet", label: "Violet", swatch: "#7c5cff" },
  { id: "cyan", label: "Cyan", swatch: "#22d3ee" },
  { id: "pink", label: "Pink", swatch: "#ff4fa3" },
  { id: "blue", label: "Blue", swatch: "#3b82f6" },
  { id: "green", label: "Green", swatch: "#10b981" },
  { id: "orange", label: "Orange", swatch: "#fb923c" },
];
export const ACCENT_IDS = ACCENTS.map((a) => a.id);
export const DEFAULT_ACCENT = "violet";

export const THEME_KEY = "portfolio-theme";
export const ACCENT_KEY = "portfolio-accent";

// browser UI colour (mobile address bar) per theme
export const THEME_COLOR = { dark: "#07070f", light: "#f6f8fc" };
