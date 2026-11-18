/* =====================================================================
   CERTIFICATES  –  edit this file to add / change certificates.

   Files live in  public/images/certificates/<folder>/
     image : the certificate picture shown in the full-screen view + lightbox
     file  : (optional) the original PDF, offered as "Open PDF"
     badge : (optional) a small badge image shown beside the title

   A certificate is only shown when its `image` file exists, so you can add
   entries before the picture is uploaded without breaking anything.

   TEMPLATE:
   {
     id: "my-certificate",
     title: "Certificate Title",
     issuer: "Issuing Organization",
     date: "Month DD, YYYY",             // optional
     validUntil: "Month DD, YYYY",       // optional
     credentialId: "ABC-123",            // optional
     description: "One or two sentences.",
     image: "certificates/<folder>/my-certificate.png",
     file: "certificates/<folder>/my-certificate.pdf",
     galleryCategories: ["certificates"],   // filters this image appears under in /gallery
   }
   ===================================================================== */

import { assetUrl } from "../utils/images.js";

export const certificates = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "September 30, 2026",
    validUntil: "September 30, 2029",
    description:
      "Earned the AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS Cloud concepts, services, security, architecture, and cloud computing.",
    image: "certificates/aws/aws-cloud-practitioner.png",
    file: "certificates/aws/aws-cloud-practitioner.pdf",
    badge: "certificates/aws/aws-badge.png",
    galleryCategories: ["certificates"],
  },
  {
    id: "data-analytics-tableau",
    title: "Data Analytics with Tableau",
    issuer: "SmartBridge in collaboration with APSCHE",
    date: "August 03, 2026",
    credentialId: "VIP-DA-2026-0679",
    description:
      "Successfully completed a 2-month (120 hours) Short-Term Virtual Internship Program in Data Analytics with Tableau, gaining practical experience in data analysis and visualization.",
    image: "certificates/internship/data-analytics-tableau.png",
    file: "certificates/internship/data-analytics-tableau.pdf",
    galleryCategories: ["certificates", "internship"],
  },
  {
    id: "pegasystems-national-internship",
    title: "National Internship Program – Pegasystems",
    issuer: "Pegasystems Worldwide India Pvt. Ltd. with SmartBridge",
    date: "September 23, 2026",
    credentialId: "PEGA-SW-NIP-2026-1000",
    description:
      "Successfully completed a 60-hour National Internship Program sponsored by Pegasystems Worldwide India Private Limited in collaboration with SmartBridge, gaining hands-on exposure to workflow automation, low-code technologies, and real-world project implementation.",
    image: "certificates/internship/pegasystems-internship.png",
    file: "certificates/internship/pegasystems-internship.pdf",
    galleryCategories: ["certificates", "internship"],
  },
  {
    id: "java-full-stack-talentnext",
    title: "Java Full Stack – TalentNext (Wipro)",
    issuer: "TalentNext, Wipro Limited",
    date: "July – October 2026",
    credentialId: "TNext-SE-2026-J_261640417",
    description:
      "Successfully completed the Java Full Stack course under the Digital Skills Readiness Program by TalentNext, Wipro Limited.",
    image: "certificates/wipro/java-full-stack-talentnext.png",
    file: "certificates/wipro/java-full-stack-talentnext.pdf",
    galleryCategories: ["certificates"],
  },
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development Internship",
    issuer: "Agratas Edutech",
    date: "May 11 – July 10, 2025",
    credentialId: "24AE021517434",
    description:
      "Successfully completed an industrial training internship in Full Stack Web Development, gaining hands-on experience in building dynamic web applications.",
    image: "certificates/internship/full-stack-web-development.png",
    file: "certificates/internship/full-stack-web-development.pdf",
    galleryCategories: ["certificates", "internship"],
  },
  {
    id: "code-rush-2k25",
    title: "Hackathon Achievement – Code Rush 2K25",
    issuer: "Department of CSE, Mohan Babu University",
    date: "September 11–12, 2025",
    description:
      "Selected as one of the Top 20 performing teams in the Code Rush 2K25 Hackathon for innovative ideas and collaborative teamwork.",
    image: "certificates/hackathon/code-rush-2k25.jpeg",
    galleryCategories: ["certificates", "hackathon"],
  },

  /* Folders already created – add entries here when you upload the images:
       public/images/certificates/intermediate/   (Intermediate certificate)
       public/images/certificates/csr/            (CSR project certificate)
       public/images/certificates/wipro/          (Wipro PBL certificate)
  */
];

/** Only certificates whose image file exists, with ready-to-use URLs. */
export function getAvailableCertificates() {
  return certificates
    .map((cert) => ({
      ...cert,
      imageSrc: assetUrl(cert.image),
      fileSrc: assetUrl(cert.file),
      badgeSrc: assetUrl(cert.badge),
    }))
    .filter((cert) => cert.imageSrc);
}
