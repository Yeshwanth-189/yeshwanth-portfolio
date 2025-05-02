import React from "react";
import "../styles/Hero.css";
import astronautImage from "../assets/Astronaut in Bold Line Art(1).png"; // placeholder paths
import profileImage from "../assets/Yeshwanth Portfolio.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="col-1" />

        <div className="col-2to8 hero-text">
          <h1>I'm Yeshwanth</h1>
          <h2>Nanjegowda</h2>
          <p>
            A passionate developer, explorer of futuristic technologies, and a
            builder of dreams through code and creativity.
          </p>
        </div>

        <div className="col-9to12 hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src={astronautImage}
              alt="Astronaut"
              className="astronaut-img"
            />
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div className="scanner-line" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
