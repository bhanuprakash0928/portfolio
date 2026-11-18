import { useEffect, useRef, useState } from "react";
import "../styles/Snap.css";

/**
 * Full-screen scroll-snap section used by Projects and Certificates.
 *
 * Every item is one 100svh "screen". Snapping is pure CSS
 * (scroll-snap-type / scroll-snap-align, see Snap.css) so mouse wheel, touch
 * and keyboard (arrows, PageUp/PageDown, Space) all work natively - there is
 * no scroll hijacking. The only JS is the dot rail that highlights the
 * current screen and lets you jump to one.
 */
function SnapSection({ id, label, items, getKey, getLabel, renderItem }) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // The dot rail is only shown while this section is on screen
  useEffect(() => {
    if (!sectionRef.current || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      // needs a real overlap: a section that only touches the viewport edge (or by a
      // sub-pixel sliver) does not count as visible
      ([entry]) => setInView(entry.intersectionRatio >= 0.002),
      { threshold: [0, 0.002] }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [items.length]);

  // Highlight whichever screen crosses the vertical centre of the viewport
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  if (!items.length) return null;

  const jumpTo = (index) =>
    itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id={id} ref={sectionRef} className="snap-section" aria-label={label}>
      <nav
        className={inView ? "snap-rail is-visible" : "snap-rail"}
        aria-label={`${label} – jump to`}
      >
        <ul>
          {items.map((item, i) => (
            <li key={getKey(item)}>
              <button
                type="button"
                className={i === active ? "is-active" : ""}
                aria-label={`Go to ${getLabel(item)}`}
                aria-current={i === active ? "true" : undefined}
                onClick={() => jumpTo(i)}
              >
                <span className="snap-rail-label">{getLabel(item)}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {items.map((item, i) => (
        <article
          key={getKey(item)}
          id={`${id}-${getKey(item)}`}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          data-index={i}
          className="snap-item"
          aria-label={getLabel(item)}
        >
          <div className="snap-inner">{renderItem(item, i, items.length)}</div>
          {i < items.length - 1 && (
            <span className="snap-hint" aria-hidden="true">
              Scroll
            </span>
          )}
        </article>
      ))}
    </section>
  );
}

export default SnapSection;
