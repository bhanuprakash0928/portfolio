import { categoryLabels, captions } from "../data/gallery.js";
import { getAvailableCertificates } from "../data/certificates.js";
import { projects } from "../data/projects.js";
import { listImages, humanize } from "./images.js";

export const labelFor = (id) => categoryLabels[id] || humanize(id);

/** Builds the list of gallery items from whatever images currently exist. */
export function getGalleryItems() {
  const items = [];

  // 1) public/images/gallery/<category>/*
  listImages("gallery", { recursive: true }).forEach((img) => {
    const category = img.folder.split("/")[1]; // "gallery/csr" -> "csr"
    if (!category) return;
    const caption = captions[img.path] || {};
    const title = caption.title || img.name;
    items.push({
      id: img.path,
      src: img.src,
      title,
      description: caption.description || "",
      categories: [category],
      alt: `${title} – ${labelFor(category)}`,
    });
  });

  // 2) certificate images
  getAvailableCertificates().forEach((cert) => {
    items.push({
      id: `certificate-${cert.id}`,
      src: cert.imageSrc,
      title: cert.title,
      description: cert.issuer,
      categories: cert.galleryCategories?.length ? cert.galleryCategories : ["certificates"],
      alt: `${cert.title} certificate issued by ${cert.issuer}`,
    });
  });

  // 3) project screenshots
  projects.forEach((project) => {
    listImages(project.imageFolder).forEach((img) => {
      items.push({
        id: `project-${img.path}`,
        src: img.src,
        title: project.title,
        description: project.shortDescription,
        categories: ["projects"],
        alt: `${project.title} project screenshot`,
      });
    });
  });

  return items;
}

/** Filter chips: "All" + every category that has at least one image. */
export function getCategories(items) {
  const counts = new Map();
  items.forEach((item) =>
    item.categories.forEach((c) => counts.set(c, (counts.get(c) || 0) + 1))
  );

  const known = Object.keys(categoryLabels).filter((id) => counts.has(id));
  const extra = [...counts.keys()].filter((id) => !(id in categoryLabels)).sort();

  return [
    { id: "all", label: "All", count: items.length },
    ...[...known, ...extra].map((id) => ({ id, label: labelFor(id), count: counts.get(id) })),
  ];
}
