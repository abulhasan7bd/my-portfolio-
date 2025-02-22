import "../styles/pages/Header.css";

import React, { useEffect, useState } from "react";
import "../styles/pages/Header.css";
import Button from "../components/Button.jsx";
import { designTheme, socialIcons } from "../data.js";
import image from "../assets/WhatsApp Image 2025-02-07 at 20.03.05_b7f87930.jpg";
const Header = () => {
  const [name] = useState(designTheme);
  const [nameCount, setNamecount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNamecount((prevCount) =>
        prevCount >= name.length - 1 ? 0 : prevCount + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [name, nameCount]);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <ul className="header-socila-links">
            {socialIcons.map((item) => {
              return (
                <button>
                  <i class={`${item.icon}`}></i>
                </button>
              );
            })}
          </ul>

          <div className="header-left">
            <div>
              <h2>
                Hi, There! <br /> I'm Abul Hasem
              </h2>
              <b>Front-End Developer</b>
              <p>
                A passionate Front-End Developer with 2 years of experience in
                building modern, responsive, and user-friendly websites. Always
                eager to learn and adapt to the latest technologies.
              </p>
              <div className="contact-btn">
                <Button value="contact me" />
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="my-photo">
              <img src={`${image}`} alt="" />
              <div className="photo-card">
                <b>{name[nameCount]}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
