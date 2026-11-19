import { useEffect, useMemo, useState } from "react";
import Lightbox from "./Lightbox.jsx";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { getGalleryItems, getCategories, labelFor } from "../utils/gallery.js";
import "../styles/Gallery.css";

/** Achievements & activities gallery with category filters + lightbox. */
function Gallery() {
  const allItems = useMemo(() => getGalleryItems(), []);
  const categories = useMemo(() => getCategories(allItems), [allItems]);

  useScrollReveal();

  const [filter, setFilter] = useState("all");
  const [previewIndex, setPreviewIndex] = useState(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Gallery | Yettapu Bhanu Prakash Reddy";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const visible = useMemo(
    () => (filter === "all" ? allItems : allItems.filter((item) => item.categories.includes(filter))),
    [allItems, filter]
  );

  const lightboxItems = visible.map((item) => ({
    src: item.src,
    title: item.title,
    subtitle: item.description,
    alt: item.alt,
  }));

  return (
    <main className="gallery-section">
      <div className="gallery-header" data-reveal>
        <span className="gallery-tag">Gallery</span>
        <h1>My Journey</h1>
        <p>
          A collection of my achievements, certificates, project work and memorable moments.
        </p>
      </div>

      {categories.length > 2 && (
        <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={filter === category.id ? "filter-chip is-active" : "filter-chip"}
              aria-pressed={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="gallery-empty">
          No images yet. Add pictures to <code>public/images/gallery/</code> and they will appear here.
        </p>
      ) : (
        <ul className="gallery-masonry">
          {visible.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                className="gallery-item"
                onClick={() => setPreviewIndex(i)}
                aria-label={`Open ${item.title} in full size`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                <span className="gallery-overlay">
                  <span className="gallery-cats">{item.categories.map(labelFor).join(" · ")}</span>
                  <strong>{item.title}</strong>
                  {item.description && <span className="gallery-desc">{item.description}</span>}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {previewIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={previewIndex}
          onIndexChange={setPreviewIndex}
          onClose={() => setPreviewIndex(null)}
        />
      )}
    </main>
  );
}

export default Gallery;
