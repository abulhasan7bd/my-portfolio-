import React from "react";
import "../styles/pages/Header.css";
import Button from "../components/Button.jsx";
import image from "../assets/WhatsApp Image 2025-02-07 at 20.03.05_b7f87930.jpg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          {/* header left  */}
          <div className="header-left">
            <div className="header-info">
              <h4>Hi, I am</h4>
              <h2> Abul Hasem</h2>
              <h5>
                I am <span>a App Developer</span>
              </h5>
              <div className="contact-btn">
                <Button value="Download CV" />
                <Button value="Hire Me" />
              </div>
            </div>
          </div>
          {/* header right  */}
          <div className="header-right">
            <div className="my-photo">
              <img src={`${image}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
