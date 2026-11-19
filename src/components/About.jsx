import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/About.css";

/** Hero: text on the left, profile photo on the right. */
function About() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-text">
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
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
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

        {/* RIGHT SIDE */}
        <div className="hero-image">
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
