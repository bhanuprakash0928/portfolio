import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/About.css";

function About() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT SIDE – existing introduction, buttons and links */}
        <div className="hero-text fade-in-up">
          <span className="badge">
            Java | Spring Boot | Maven | AWS Cloud | Data Analytics | Tableau
          </span>

          <h1>
            Hi, I'm <br />
            <div className="typing-name">
              <span>Yettapu Bhanu Prakash Reddy</span>
            </div>
          </h1>

          <p>
            Passionate Computer Science student with hands-on experience in Java,
            Spring Boot, Maven, SQL, AWS Cloud, and Tableau. I enjoy developing backend
            applications and creating interactive data analytics dashboards to solve
            real-world problems. Currently seeking opportunities to grow as a Java
            Developer or Data Analyst while continuously enhancing my technical skills.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me →</a>
            <a href="/resume.pdf" download className="btn btn-outline">
              Resume
            </a>
          </div>

          <div className="hero-social" aria-label="Social links">
            <a href="https://github.com/bhanuprakash0928" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bhanu-prakash-reddy-1ab924321/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:ybhanuprakashreddy2004@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* CENTER – About Me / career overview */}
        <div className="about-me">
          <span className="about-me-label">Career Overview</span>
          <h2>About Me</h2>
          <p>
            I am a Computer Science Engineering student at Mohan Babu University with a
            strong interest in software development and data analytics. I have hands-on
            experience developing Java-based applications using Spring Boot, Maven, SQL,
            and REST APIs, along with knowledge of Python, JavaScript, HTML, CSS, and
            React. I have also worked on data visualization projects using Tableau and
            explored cloud computing through AWS Cloud Practitioner certification.
            Through academic projects, internships, and hackathons, I have developed
            problem-solving, teamwork, communication, and practical development skills. I
            am continuously improving my technical knowledge and looking for opportunities
            to begin my career as a Software Developer or Data Analyst, contribute to
            real-world projects, and grow professionally.
          </p>
        </div>

        {/* RIGHT SIDE – profile photo + location */}
        <div className="hero-image float-anim">
          <div className="image-wrapper">
            <img src="/profile.png" alt="Yettapu Bhanu Prakash Reddy" />
          </div>
          <p className="location-chip">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Andhra Pradesh, India</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
