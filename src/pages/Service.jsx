import React from "react";
import "../styles/pages/Service.css";
const Services = () => {
    return (
      <section id="services">
        <div className="container">
          <div className="service-content">
            <h1 className="section-title">
              My Services <i className="ri-arrow-right-line"></i>
            </h1>
            <div className="service-info">
              <h4>
                I provide high-quality web solutions, including modern website design, performance optimization, SEO-friendly development, and regular maintenance to ensure smooth operation.
              </h4>
            </div>
            <div className="service-cols">
              <div className="col">
                <img src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png" alt="Web Development" />
                <h3>Web Development</h3>
                <p>
                  I create fully responsive, modern, and high-performance websites using the latest technologies like React, JavaScript, and Tailwind CSS.
                </p>
              </div>
              <div className="col">
                <img src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png" alt="UI/UX Design" />
                <h3>UI/UX Design</h3>
                <p>
                  Designing user-friendly and visually appealing interfaces with a focus on better user experience and smooth navigation.
                </p>
              </div>
              <div className="col">
                <img src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png" alt="Website Maintenance" />
                <h3>Website Maintenance</h3>
                <p>
                  Regular updates, bug fixes, and performance optimizations to keep your website running smoothly and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  