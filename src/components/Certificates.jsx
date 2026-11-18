import { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import SnapSection from "./SnapSection.jsx";
import Lightbox from "./Lightbox.jsx";
import { getAvailableCertificates } from "../data/certificates.js";
import { pad } from "../utils/format.js";
import "../styles/Certificates.css";

/** Full-screen, scroll-snap certificate showcase – one certificate per screen. */
function Certificates() {
  const certificates = useMemo(() => getAvailableCertificates(), []);
  const [previewIndex, setPreviewIndex] = useState(null);

  const lightboxItems = useMemo(
    () =>
      certificates.map((cert) => ({
        src: cert.imageSrc,
        title: cert.title,
        subtitle: cert.issuer,
        pdf: cert.fileSrc,
        alt: `${cert.title} certificate issued by ${cert.issuer}`,
      })),
    [certificates]
  );

  return (
    <>
      <SnapSection
        id="certificates"
        label="Certificates and achievements"
        items={certificates}
        getKey={(cert) => cert.id}
        getLabel={(cert) => cert.title}
        renderItem={(cert, index, total) => (
          <div className="cert-screen">
            <div className="cert-info">
              <p className="snap-eyebrow">
                <span>Certificates &amp; Achievements</span>
                <span>
                  {pad(index + 1)} / {pad(total)}
                </span>
              </p>

              <div className="cert-heading">
                {cert.badgeSrc && (
                  <img
                    className="cert-badge"
                    src={cert.badgeSrc}
                    alt={`${cert.title} badge`}
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                )}
                <h2 className="cert-title">{cert.title}</h2>
              </div>

              <p className="cert-issuer">{cert.issuer}</p>

              <dl className="cert-meta">
                {cert.date && (
                  <div>
                    <dt>Issued</dt>
                    <dd>{cert.date}</dd>
                  </div>
                )}
                {cert.validUntil && (
                  <div>
                    <dt>Valid until</dt>
                    <dd>{cert.validUntil}</dd>
                  </div>
                )}
                {cert.credentialId && (
                  <div>
                    <dt>Credential ID</dt>
                    <dd>{cert.credentialId}</dd>
                  </div>
                )}
              </dl>

              {cert.description && <p className="cert-desc">{cert.description}</p>}

              <div className="cert-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setPreviewIndex(index)}
                >
                  <FaEye aria-hidden="true" /> View Certificate
                </button>
                {cert.fileSrc && (
                  <a href={cert.fileSrc} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <FaExternalLinkAlt aria-hidden="true" /> Open PDF
                  </a>
                )}
              </div>
            </div>

            <button
              type="button"
              className="cert-preview"
              onClick={() => setPreviewIndex(index)}
              aria-label={`View ${cert.title} certificate in full size`}
            >
              <img
                src={cert.imageSrc}
                alt={`${cert.title} certificate issued by ${cert.issuer}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </button>
          </div>
        )}
      />

      {previewIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={previewIndex}
          onIndexChange={setPreviewIndex}
          onClose={() => setPreviewIndex(null)}
        />
      )}
    </>
  );
}

export default Certificates;
