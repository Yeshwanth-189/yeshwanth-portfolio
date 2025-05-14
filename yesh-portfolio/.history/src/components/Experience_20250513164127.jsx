import React from "react";
import { Link } from "react-router-dom";
import "../styles/Experience.css";
import planetEducation from "../assets/planet-education.png";
import planetProfession from "../assets/planet-profession.png";
import planetProjects from "../assets/planet-projects.png";
import planetSkills from "../assets/planet-skills.png";
import planetAchievements from "../assets/planet-achievements.png";

function Experience() {
  return (
    <>
      <section className="experience-section">
        <div className="experience-grid">
          {/* Left Spacer */}
          {/* Carousel Container */}
          <div className="col-2to11-experience">
            <div class="carousel-wrapper">
              <div className="carousel-track">
                {/* First set */}
                <div className="planet-item">
                  <Link to="/education">
                    <img
                      src={planetEducation}
                      alt="Education"
                      className="planet"
                    />
                    <p>Education</p>
                  </Link>
                </div>

                <div className="planet-item">
                  <Link to="/profession">
                    <img
                      src={planetProfession}
                      alt="Profession"
                      className="planet"
                    />
                    <p>Profession</p>
                  </Link>
                </div>

                <div className="planet-item">
                  <Link to="/projects">
                    <img
                      src={planetProjects}
                      alt="Projects"
                      className="planet"
                    />
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

                {/* Duplicate again for infinite effect */}
                <div className="planet-item">
                  <Link to="/education">
                    <img
                      src={planetEducation}
                      alt="Education"
                      className="planet"
                    />
                    <p>Education</p>
                  </Link>
                </div>

                <div className="planet-item">
                  <Link to="/profession">
                    <img
                      src={planetProfession}
                      alt="Profession"
                      className="planet"
                    />
                    <p>Profession</p>
                  </Link>
                </div>

                <div className="planet-item">
                  <Link to="/projects">
                    <img
                      src={planetProjects}
                      alt="Projects"
                      className="planet"
                    />
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
            </div>
          </div>
          {/* Right Spacer */}
          <div className="col-12" />
        </div>
      </section>
    </>
  );
}

export default Experience;
