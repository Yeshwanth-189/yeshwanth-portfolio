import React from "react";
import "../styles/Hero.css";
import profileImage from "../assets/Profile.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="col-1" />

        {/* Left Text */}
        <div className="col-2to8 hero-text">
          <h1>I'm Yeshwanth,</h1>
          <h2>Nanjegowda</h2>
          <p>
            Impact-Oriented and Agile Full Stack Engineer with 3+ years of
            experience specializing in Frontend Development, while actively
            investing in Cloud and AI advancements. I have built and scaled
            customer service platforms supporting 100,000+ global users across
            the USA, UK, Canada, and India.
            <p>
              My technical expertise includes ReactJS, NodeJS, AWS, Kubernetes,
              Docker, and .NET. I have successfully led multiple
              proof-of-concept initiatives
              <p>
                Developing UI configurations for multiple countries through a
                zero-code-change config files.
              </p>
              <p>
                Implementing AWS Lambda-based serverless architectures that
                reduced resource costs by 80%
              </p>
            </p>
            <p>
              I am passionate about delivering scalable, efficient solutions,
              pushing the boundaries of frontend excellence, and continuously
              exploring AI innovations to stay at the forefront of technology.
            </p>
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
