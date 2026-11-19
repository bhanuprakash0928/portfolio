# How to update your portfolio content

Everything below needs **no component changes**. Save the file, and the dev server
(`npm run dev`) reloads. Images are detected automatically from `public/images/`,
so only files that really exist are shown.

## Folder structure

```
public/
  logo-yb.png, favicon.ico, favicon-*.png, apple-touch-icon.png   (YB logo + favicons)
  images/
    projects/
      kshopping/  vehicle-booking/  personal-portfolio/  cosmetics-tableau/
      video-slot-booking/  smart-exam-allocation/                 (empty, ready for you)
    certificates/
      aws/  wipro/  internship/  intermediate/  hackathon/  csr/
    gallery/
      hackathon/  csr/  college/  activities/  internship/
```

## 1. Add project screenshots
1. Copy the images into the project's folder, e.g. `public/images/projects/kshopping/`.
2. Done. They appear on the project details page gallery, in the lightbox and in /gallery
   (sorted by file name: `shot-01.png`, `shot-02.png`, ...).
3. The first image is the cover. To pick another, add `cover: "file-name.png"` to the project in
   `src/data/projects.js`.

## 2. Add certificate images
1. Put the image in a folder under `public/images/certificates/` (PNG/JPG; a PDF can sit beside it).
2. Add (or edit) an entry in `src/data/certificates.js`:
   `image: "certificates/intermediate/my-cert.jpg"` (+ optional `file:` for the PDF).
   Use the template at the top of that file. An entry is hidden until its image exists.
3. Tip: a PDF can be turned into an image with `pdftoppm -r 200 -png -singlefile cert.pdf cert`.

## 3. Add gallery images
Drop the image into `public/images/gallery/<category>/` (hackathon, csr, college, activities,
internship). A new folder name (e.g. `gallery/sports/`) creates a new filter automatically.
Certificates and project screenshots are included in the gallery automatically.
Optional captions: `src/data/gallery.js` -> `captions`.

## 4. Add a new project
1. Create `public/images/projects/<folder>/` and add screenshots.
2. Copy the template at the top of `src/data/projects.js` into the `projects` array and fill it in.
   Leave out any field you don't need; its section is hidden automatically.
   It appears as a new card in the Projects grid and gets its own page at `/projects/<slug>`.

## 5. Add a new certificate
Add an entry in `src/data/certificates.js` (template at the top) and its image under
`public/images/certificates/`. It becomes a new full-screen certificate screen automatically.

## Notes
- File names with spaces work, but `kebab-case-names.png` are safest.
- Deploying on Netlify: `public/_redirects` is included so `/gallery` and `/projects/<slug>`
  work on refresh. (Vercel: add a rewrite of all paths to `/index.html`.)
- If Chrome still shows the old tab icon, hard refresh (Ctrl+Shift+R) or reopen the tab.

## 6. Themes and accent colours
Colours live in **one file**: `src/styles/Theme.css`. Every other stylesheet only uses its variables
(`--bg`, `--text`, `--c1`...`--c4`, `rgba(var(--c1-rgb), .2)` and so on).

- **Change the Dark or Light look:** edit the `:root` (dark) or `html[data-theme="light"]` block.
- **Change an accent colour:** edit its `html[data-accent="..."]` (dark) and
  `html[data-theme="light"][data-accent="..."]` (light) blocks.
- **Add a new accent colour:** copy one pair of accent blocks in `Theme.css`, then add the name to
  `ACCENTS` in `src/config/theme.js` and to the list in the inline script in `index.html`.
- The choice is remembered in the browser (`localStorage`: `portfolio-theme`, `portfolio-accent`).
  First-time visitors get Dark + Violet.
