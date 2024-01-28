import React, { useState } from "react";
import { FaBars, FaDownload } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <header>
      <nav className="navbar section-padding">
        <div className="logoDiv">
          <h2>
            <NavLink to="/" className="logo">
              Dheeraj
            </NavLink>
          </h2>
        </div>

        <ul className={`menu ${!showHamburger ? "activeMenu" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" className="nav-link">
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" className="nav-link">
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hambuger-download-btn-div">
          <button className="btn btn-primary-outline download-cv">
            Download CV <FaDownload />
          </button>
          <div className="hamburger">
            {showHamburger ? (
              <button onClick={() => setShowHamburger(!showHamburger)}>
                <FaBars fontSize={"3rem"} />
              </button>
            ) : (
              <button onClick={() => setShowHamburger(!showHamburger)}>
                <ImCross fontSize={"2rem"} />
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
