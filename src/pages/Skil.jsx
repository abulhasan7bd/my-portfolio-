import React from "react";
import "../styles/pages/Skil.css";
const Skil = () => {

      return (
        <section id="skills">
          <div className="container">
            <div className="skills-content">
              <h1 className="section-title">
                My Skills <i className="ri-arrow-right-line"></i>
              </h1>
              <div className="skills-info">
                <div className="skills-info-box">
                  <h3>Front-End Developer</h3>
                  <p>
                    I stay up-to-date with the latest web technologies and continuously improve my skills. My goal is to build high-quality, scalable, and user-friendly applications.
                  </p>
                  <p>Let's collaborate and bring your ideas to life with clean and efficient code.</p>
                </div>
                <div className="skills-set-box">
                  <h3>Tech Stack</h3>
                  <div className="skills-list">
                    <div className="skill">
                      <img src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="HTML5" />
                      <p>HTML5</p>
                    </div>
                    <div className="skill">
                      <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS3" />
                      <p>CSS3</p>
                    </div>
                    <div className="skill">
                      <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JavaScript" />
                      <p>JavaScript</p>
                    </div>
                    <div className="skill">
                      <img src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="React.js" />
                      <p>React.js</p>
                    </div>
                    <div className="skill">
                      <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="Node.js" />
                      <p>Node.js</p>
                    </div>
                    <div className="skill">
                      <img src="https://cdn-icons-png.flaticon.com/128/919/919836.png" alt="MongoDB" />
                      <p>MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
    


export default Skil;
