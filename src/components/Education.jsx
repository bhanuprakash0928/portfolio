import React from "react";
import "../styles/Education.css";

function Education() {
  return (
    <section id="education" className="education-section">

      {/* Header */}
      <div className="edu-header fade-in-up">
        <div className="edu-icon float-anim">🎓</div>
        <h2>Education</h2>
        <p>
          My academic journey that built the foundation for my technical expertise
        </p>
      </div>

      {/* Cards */}
      <div className="edu-container">

        {/* B.Tech */}
        <div className="edu-card slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="edu-left">
            <div className="circle"></div>

            <div>
              <h3>B-Tech in Computer Science Engineering</h3>
              <p className="college">Mohan Babu University, Tirupati</p>
              <p className="desc">
                Specialized in Software Engineering with focus on full-stack 
                development, algorithms, and modern technologies.
              </p>
            </div>
          </div>

          <div className="edu-right">
            <span>2023 - 2027</span>
            <div className="gpa">GPA: 8.4/10</div>
          </div>
        </div>

        {/* Intermediate */}
        <div className="edu-card active slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="edu-left">
            <div className="circle"></div>

            <div>
              <h3>Intermediate</h3>
              <p className="college">Sri Chaitanya Junior College, Kurnool</p>
              <p className="desc">
                Completed MPC with strong academic performance and consistency.
              </p>
            </div>
          </div>

          <div className="edu-right">
            <span>2021 - 2023</span>
            <div className="gpa">pct: 87%</div>
          </div>
        </div>

        {/* SSC */}
        <div className="edu-card slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="edu-left">
            <div className="circle"></div>

            <div>
              <h3>SSC</h3>
              <p className="college">Challapalli High School, Jammalamadugu</p>
              <p className="desc">
                Completed schooling with excellent academic performance.
              </p>
            </div>
          </div>

          <div className="edu-right">
            <span>2021</span>
            <div className="gpa">pct: 92%</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;