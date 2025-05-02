import React from "react";
import "./Hero.css";
import profileImage from "../assets/profile.png"; // Replace with your real profile photo

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="col-1" />

        {/* Left Text */}
        <div className="col-2to8 hero-text">
          <h1>I'm Yeshwanth</h1>
          <h2>Nanjegowda</h2>
          <p>
            A passionate developer, explorer of futuristic technologies, and a
            builder of dreams through code and creativity.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-9to12 hero-image-container">
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>

        <div className="col-12" />
      </div>
    </section>
  );
}

export default Hero;
