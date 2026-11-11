import "../styles/Certificates.css";

function Certificates() {
  return (
    <section id="certificates">
      <div className="section-title">
    <span className="section-tag">Certificates</span>
    <h2>Certificates & Achievements</h2>
    <p>
        Professional certifications and achievements that showcase my learning
        journey and technical skills.
    </p>
</div>

      <div className="cert-container">
          
            {/* AWS Certified Cloud Practitioner */}
            <div className="cert-card">
              <img
                src="/aws-certified-cloud-practitioner.png"
                alt="AWS Certified Cloud Practitioner Badge"
                className="cert-badge"
              />

              <h3>AWS Certified Cloud Practitioner</h3>

              <p>
                Earned the AWS Certified Cloud Practitioner certification, demonstrating
                foundational knowledge of AWS Cloud concepts, services, security,
                architecture, and cloud computing.
              </p>

              <p className="cert-date">
                <strong>Issued:</strong> September 30, 2026 &nbsp; | &nbsp;
                <strong>Valid Until:</strong> September 30, 2029
              </p>

              <a
                href="/Cloud Practiciner.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>




         <div className="cert-card">
          <h3>Data Analytics with Tableau</h3>

          <p>
            Successfully completed a 2-month Short-Term Virtual Internship
            Program in Data Analytics with Tableau, gaining practical
            experience in data analysis and visualization.
          </p>

          <a
            href="/Data Analytics(Tableau).pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>


        {/* Pega National Internship */}
        <div className="cert-card">
          <h3>National Internship Program - Pegasystems</h3>

          <p>
            Successfully completed a 60-hour National Internship Program sponsored by
            Pegasystems Worldwide India Private Limited in collaboration with
            SmartBridge, gaining hands-on exposure to workflow automation, low-code
            technologies, and real-world project implementation.
          </p>

          <a
            href="/Pega-Internship-Certificate.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>

        {/* Full Stack Certificate */}
        <div className="cert-card">
          <h3>Full Stack Web Development</h3>
          <p>
            Successfully completed Industrial Training in Full Stack Web Development,
            gaining hands-on experience in building dynamic web applications.
          </p>
          <a 
            href="/Yettapu Bhanu Prakash Reddy.Internship certificate.pdf"   // <-- replace with your actual file path
            target="_blank" 
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>

        {/* Java Full Stack - TalentNext (Wipro) */}
        <div className="cert-card">
          <h3>Java Full Stack - TalentNext (Wipro)</h3>

          <p>
            Successfully completed the Java Full Stack course under the Digital
            Skills Readiness Program by TalentNext, Wipro Limited, during July to
            October 2026.
          </p>

          <p className="cert-date">
            <strong>Cert ID:</strong> TNext-SE-2026-J_261640417
          </p>

          <a
            href="/Java_Full_Stack.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>

        {/* Hackathon Achievement */}
        <div className="cert-card">
          <h3>Hackathon Achievement - Code Rush 2K25</h3>
          <p>
            Selected as one of the Top 20 performing teams in Code Rush 2K25 Hackathon
            conducted by Mohan Babu University for innovative ideas and teamwork.
          </p>
          <a 
            href="/coderesh-2025.jpeg"   // <-- replace with your actual image path
            target="_blank" 
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certificates;