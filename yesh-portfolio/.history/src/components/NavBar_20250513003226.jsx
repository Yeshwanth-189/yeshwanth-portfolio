import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-grid">
        <div className="col-1" />

        <div className="col-2to11 navbar-content">
          <div className="navbar-logo">
            <h2>#Y35Hw4n7h</h2>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? "bar rotate-top" : "bar"}></span>
            <span className={isOpen ? "bar fade" : "bar"}></span>
            <span className={isOpen ? "bar rotate-bottom" : "bar"}></span>
          </div>

          {/* Links */}
          <div className={`navbar-links ${isOpen ? "open" : ""}`}>
            <Link to="/overview" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/Profession" onClick={() => setIsOpen(false)}>
              Profession
            </Link>
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/education" onClick={() => setIsOpen(false)}>
              Education
            </Link>
            <Link to="/achievements" onClick={() => setIsOpen(false)}>
              Achievements
            </Link>
          </div>
        </div>

        <div className="col-12" />
      </div>
    </nav>
  );
}

export default Navbar;
