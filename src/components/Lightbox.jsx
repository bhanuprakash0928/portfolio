import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Lightbox.css";

/**
 * Full-size image preview.
 *   items: [{ src, alt, title, subtitle?, pdf? }]
 * Close with the button, Esc, or by clicking the dark backdrop.
 * Arrow keys / swipe / side buttons move between images.
 * Images are shown with object-fit: contain, so nothing is stretched or cropped.
 */
function Lightbox({ items, index, onClose, onIndexChange }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const total = items.length;
  const item = items[index];

  const go = useCallback(
    (dir) => onIndexChange((index + dir + total) % total),
    [index, total, onIndexChange]
  );

  // lock page scroll, focus the dialog, restore focus on close
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      root.style.overflow = previousOverflow;
      if (previouslyFocused && document.contains(previouslyFocused)) previouslyFocused.focus();
    };
  }, []);

  // keyboard: Esc / arrows / keep Tab inside the dialog
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (total > 1 && event.key === "ArrowRight") {
        go(1);
      } else if (total > 1 && event.key === "ArrowLeft") {
        go(-1);
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll("button, a[href]");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [go, onClose, total]);

  // pre-load the neighbouring images so next/prev feels instant
  useEffect(() => {
    if (total < 2) return;
    [index - 1, index + 1].forEach((i) => {
      const neighbour = items[(i + total) % total];
      if (neighbour) new Image().src = neighbour.src;
    });
  }, [index, items, total]);

  if (!item) return null;

  const onTouchEnd = (event) => {
    if (touchX.current === null || total < 2) return;
    const delta = event.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} – preview`}
      ref={dialogRef}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      onTouchStart={(event) => (touchX.current = event.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        ref={closeRef}
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close preview"
      >
        <FaTimes />
      </button>

      {total > 1 && (
        <button
          type="button"
          className="lightbox-nav prev"
          onClick={() => go(-1)}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>
      )}

      <figure className="lightbox-figure">
        <img key={item.src} className="lightbox-img" src={item.src} alt={item.alt || item.title} />
        <figcaption className="lightbox-caption">
          <div className="lightbox-title">
            <strong>{item.title}</strong>
            {item.subtitle && <span>{item.subtitle}</span>}
          </div>
          <div className="lightbox-links">
            {total > 1 && (
              <span className="lightbox-count">
                {index + 1} / {total}
              </span>
            )}
            <a href={item.src} target="_blank" rel="noreferrer">
              Open original <FaExternalLinkAlt aria-hidden="true" />
            </a>
            {item.pdf && (
              <a href={item.pdf} target="_blank" rel="noreferrer">
                PDF <FaExternalLinkAlt aria-hidden="true" />
              </a>
            )}
          </div>
        </figcaption>
      </figure>

      {total > 1 && (
        <button
          type="button"
          className="lightbox-nav next"
          onClick={() => go(1)}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      )}
    </div>,
    document.body
  );
}

export default Lightbox;
