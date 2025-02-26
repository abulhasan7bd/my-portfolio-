import React from "react";
import "../styles/pages/Project.css";
const Projects = () => {
    const projectData = [
      {
        id: 1,
        title: "E-Commerce Website",
        description: "Developed a full-stack e-commerce platform with React, Node.js, and MongoDB.",
        img: "https://source.unsplash.com/random/300x200?technology"
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "Designed and developed a responsive portfolio to showcase my work and skills.",
        img: "https://source.unsplash.com/random/300x200?design"
      },
      {
        id: 3,
        title: "Task Management App",
        description: "A productivity tool for managing daily tasks with a user-friendly UI.",
        img: "https://source.unsplash.com/random/300x200?app"
      }
    ];
  
    return (
      <section id="projects">
        <div className="container">
          <div className="project-content">
            <h1 className="section-title">
              My Projects <i className="ri-arrow-right-line"></i>
            </h1>
            <div className="project-columns">
              {projectData.map((project) => (
                <div className="project-col" key={project.id}>
                  <div className="project-img">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  