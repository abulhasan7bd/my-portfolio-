import React from "react";
import "../styles/components/Navbar.css";
import { Link } from "react-router-dom";
import { navLinks } from "../data";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <h2>
              <Link to="/">
                <p> AbulHasem.</p>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
