function Certificates() {
  return (
    <section id="certificates">
      <h2>Certificates & Achievements</h2>

      <div className="cert-container">

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