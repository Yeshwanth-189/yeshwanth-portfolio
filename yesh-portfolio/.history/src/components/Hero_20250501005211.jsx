import React from "react";
import "./Hero.css";
import astronautImage from "../assets/astronaut.png"; // placeholder paths
import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left Spacer */}
        <div className="col-1" />

        {/* Left Text */}
        <div className="col-2to6 hero-text">
          <h1>I'm Yeshwanth</h1>
          <h2>Nanjegowda</h2>
          <p>
            A passionate developer, explorer of futuristic technologies, and a
            builder of dreams through code and creativity.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-7to11 hero-image-container">
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

        {/* Right Spacer */}
        <div className="col-12" />
      </div>
    </section>
  );
}

export default Hero;
