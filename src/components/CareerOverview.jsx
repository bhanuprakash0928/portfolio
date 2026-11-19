import "../styles/CareerOverview.css";

/** Centered Career Overview / About Me section, directly below the hero. */
function CareerOverview() {
  return (
    <section className="career-section" id="about" aria-labelledby="career-heading">
      <div className="career-header" data-reveal>
        <h2 id="career-heading">Career Overview</h2>
        <h3>About Me</h3>
      </div>

      <div className="career-card" data-reveal style={{ animationDelay: "0.15s" }}>
        <p>
          I am a Computer Science Engineering student at Mohan Babu University with a
          strong interest in software development and data analytics. I have hands-on
          experience developing Java-based applications using Spring Boot, Maven, SQL,
          and REST APIs, along with knowledge of Python, JavaScript, HTML, CSS, and
          React. I have also worked on data visualization projects using Tableau and
          explored cloud computing through AWS Cloud Practitioner certification. Through
          academic projects, internships, and hackathons, I have developed
          problem-solving, teamwork, communication, and practical development skills. I
          am continuously improving my technical knowledge and looking for opportunities
          to begin my career as a Software Developer or Data Analyst, contribute to
          real-world projects, and grow professionally.
        </p>
      </div>
    </section>
  );
}

export default CareerOverview;
