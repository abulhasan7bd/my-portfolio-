import React from "react";
import "../styles/components/Navbar.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { navLinks } from "../data";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="content">
          <div className="nav-logo">
            <h2>
              <Link to="/">
                Abul Has<span>e</span>m
              </Link>
            </h2>
          </div>
          <div className="nav-right">
            <ul className="nav-list">
              {navLinks.map((link) => {
                return (
                  <li className="nav-links">
                    <Link to={`${link}`}>{link}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="resume-btn">
              <Button value="Download CV" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
