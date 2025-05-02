import React from "react";
import { Link } from "react-router-dom";
import "../styles/Experience.css";
import planetEducation from "../assets/Education.png";
import planetProfession from "../assets/Profession.png";
import planetProjects from "../assets/Projects.png";
import planetSkills from "../assets/Skills.png";
import planetAchievements from "../assets/Achievements.png";

function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-grid">
        {/* Empty Left Spacer */}
        <div className="col-1" />

        {/* Planets Container */}
        <div className="col-2to11 planets-container">
          <div className="planet-item">
            <Link to="/education">
              <img src={planetEducation} alt="Education" className="planet" />
              <p>Education</p>
            </Link>
          </div>

          <div className="planet-item">
            <Link to="/profession">
              <img src={planetProfession} alt="Profession" className="planet" />
              <p>Profession</p>
            </Link>
          </div>

          <div className="planet-item">
            <Link to="/projects">
              <img src={planetProjects} alt="Projects" className="planet" />
              <p>Projects</p>
            </Link>
          </div>

          <div className="planet-item">
            <Link to="/skills">
              <img src={planetSkills} alt="Skills" className="planet" />
              <p>Skills</p>
            </Link>
          </div>

          <div className="planet-item">
            <Link to="/achievements">
              <img
                src={planetAchievements}
                alt="Achievements"
                className="planet"
              />
              <p>Achievements</p>
            </Link>
          </div>
        </div>

        {/* Empty Right Spacer */}
        <div className="col-12" />
      </div>
    </section>
  );
}

export default Experience;
