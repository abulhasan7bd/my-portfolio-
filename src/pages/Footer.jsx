import React from "react";
import { socialIcons } from "../data";
import "../styles/pages/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-colums">
            <div className="footer-colum about">
              <h2>About</h2>
              <p>
                A passionate Front-End Developer with 2 years of experience in
                building modern, responsive, and user-friendly websites. Always
                eager to learn and adapt to the latest technologies.
              </p>
            </div>
            <div className="footer-colum contact-f">
              <h2>Contact</h2>
              <ul>
                <li>Email : abulhasan7bd@gmail.com</li>
                <li>Whats app : 01851695780</li>
                <li>Loaction : Khilgaon,Dhaka,Bangaldesh</li>
              </ul>
            </div>
            <div className="footer-colum social">
              <h2>Media</h2>
              <div className="footer-social">
                <ul className="footer-socila-links">
                  {socialIcons.map((item) => {
                    return (
                      <button>
                        <i class={`${item.icon}`}></i>
                      </button>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-text">
          © 2025 All rights reserved. Designed & developed by 
          <strong style={{paddingLeft:"2px"}}>Abul Hasem</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
