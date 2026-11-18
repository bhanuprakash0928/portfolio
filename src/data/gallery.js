/* =====================================================================
   GALLERY  –  mostly automatic.

   Every image you drop into  public/images/gallery/<category>/  shows up in
   the gallery, filed under that folder's name:

       gallery/hackathon/   gallery/csr/   gallery/college/
       gallery/activities/  gallery/internship/   (or any new folder you create)

   The gallery also lists your certificate images (see data/certificates.js)
   and project screenshots, so you never need to copy files twice.

   Optional: give an image a nicer title/description below.
   Key = path relative to public/images/
   ===================================================================== */

/** Filter order + display names. Unknown folders get a name made from the folder. */
export const categoryLabels = {
  hackathon: "Hackathon",
  csr: "CSR",
  certificates: "Certificates",
  internship: "Internship",
  college: "College",
  activities: "Activities",
  projects: "Projects",
};

/** Optional captions, e.g.
 *  "gallery/hackathon/team-photo.jpg": { title: "Code Rush 2K25", description: "Our team on stage." },
 */
export const captions = {};
