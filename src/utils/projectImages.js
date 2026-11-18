import { listImages } from "./images.js";

/** Images that currently exist for a project, cover image first. */
export function getProjectImages(project) {
  const all = listImages(project.imageFolder);
  if (!project.cover) return all;
  const cover = all.find((img) => img.path.endsWith(`/${project.cover}`));
  return cover ? [cover, ...all.filter((img) => img !== cover)] : all;
}
