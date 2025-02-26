import React from "react";
import Button from "../components/Button";
import "../styles/pages/About.css";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h1 className="section-title">
            About Me <i class="ri-arrow-right-line"></i>
          </h1>
          <div className="about-info">
            <div className="about-left">
              <h2>
                I'm <span>Abul Hasan</span>, a Web Developer
              </h2>

              <p>
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Delivering work within time and budget which meets client’s
                requirements is our moto. Lorem Ipsum has been the industry's
                standard dummy text ever when an unknown printer took a galley.
              </p>
            </div>
            <div className="about-right">
              <div>
                <p>Name</p>
                <span>:</span>
                <span>Abul Hasan</span>
              </div>
              <div>
                <p>Email</p>
                <span>:</span>
                <a href="abulhasan@7bd@gmail.com" className="gmailLink">
                  abulhasan@gmail.com
                </a>
              </div>
              <div>
                <p>Age </p>
                <span>:</span>
                <span>19</span>
              </div>
              <div>
                <p>Form </p>
                <span>:</span>
                <span>Mymensingh, Bangladesh</span>
              </div>
              <Button value="download cv" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
