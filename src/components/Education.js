import React from "react";

function Education() {
  return (
    <section id="education" className="education-section">

      {/* Header */}
      <div className="edu-header">
        <div className="edu-icon">🎓</div>
        <h2>Education</h2>
        <p>
          My academic journey that built the foundation for my technical expertise
        </p>
      </div>

      {/* Cards */}
      <div className="edu-container">

        {/* B.Tech */}
        <div className="edu-card">
          <div className="edu-left">
            <div className="circle">🏫</div>

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
            <span>2022 - 2026</span>
            <div className="gpa">GPA: 9.8/10</div>
          </div>
        </div>

        {/* Intermediate */}
        <div className="edu-card active">
          <div className="edu-left">
            <div className="circle">🏫</div>

            <div>
              <h3>Intermediate</h3>
              <p className="college">Sai Sri Chaitanya Junior College, Kadapa</p>
              <p className="desc">
                Completed MPC with strong academic performance and consistency.
              </p>
            </div>
          </div>

          <div className="edu-right">
            <span>2020 - 2022</span>
            <div className="gpa">GPA: 9.7/10</div>
          </div>
        </div>

        {/* SSC */}
        <div className="edu-card">
          <div className="edu-left">
            <div className="circle">🏫</div>

            <div>
              <h3>SSC</h3>
              <p className="college">Ravindra Bharathi School, Kadapa</p>
              <p className="desc">
                Completed schooling with excellent academic performance.
              </p>
            </div>
          </div>

          <div className="edu-right">
            <span>2020</span>
            <div className="gpa">GPA: 9.8/10</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;