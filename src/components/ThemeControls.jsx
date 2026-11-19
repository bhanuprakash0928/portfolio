import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun, FaPalette } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme.js";
import { ACCENTS } from "../config/theme.js";
import "../styles/ThemeControls.css";

/** Dark / Light switch + accent colour swatches (lives in the navbar). */
function ThemeControls() {
  const { theme, setTheme, accent, setAccent } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  // close the swatch popover on outside click / Escape
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="theme-controls" ref={rootRef}>
      <div className="theme-toggle" role="group" aria-label="Colour theme" data-value={theme}>
        <span className="theme-thumb" aria-hidden="true" />
        <button
          type="button"
          aria-pressed={theme === "dark"}
          aria-label="Dark mode"
          title="Dark"
          onClick={() => setTheme("dark")}
        >
          <FaMoon aria-hidden="true" />
          <span className="theme-label">Dark</span>
        </button>
        <button
          type="button"
          aria-pressed={theme === "light"}
          aria-label="Light mode"
          title="Light"
          onClick={() => setTheme("light")}
        >
          <FaSun aria-hidden="true" />
          <span className="theme-label">Light</span>
        </button>
      </div>

      <div className={open ? "accent-picker is-open" : "accent-picker"}>
        <button
          type="button"
          className="accent-trigger"
          aria-expanded={open}
          aria-controls="accent-menu"
          aria-label="Choose accent colour"
          title="Accent colour"
          onClick={() => setOpen((value) => !value)}
        >
          <FaPalette aria-hidden="true" />
        </button>

        <div id="accent-menu" className="accent-menu" role="group" aria-label="Accent colour">
          <span className="accent-title">Accent colour</span>
          <div className="accent-swatches">
            {ACCENTS.map((item) => (
              <button
                type="button"
                key={item.id}
                className={item.id === accent ? "swatch is-active" : "swatch"}
                style={{ "--swatch": item.swatch }}
                aria-label={item.label}
                aria-pressed={item.id === accent}
                title={item.label}
                onClick={() => setAccent(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeControls;
