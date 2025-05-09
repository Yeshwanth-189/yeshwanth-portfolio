import React from "react";
import "../styles/Projects.css";

const projects = [
  { title: "ResumeCraft.AI", description: "AI Resume Builder and Job Matcher" },
  { title: "AI-R", description: "E-Commerce AI Recommendation System" },
  {
    title: "Smart Healthcare System",
    description: "Appointment & Diagnosis AI",
  },
  {
    title: "AI Productivity SaaS",
    description: "Real-time collaboration tools",
  },
  {
    title: "IoT Smart Home Dashboard",
    description: "Real-time device insights",
  },
  {
    title: "Social Media Sentiment Platform",
    description: "Real-time NLP analysis",
  },
  { title: "AutoGPT Clone", description: "AI Agents for automations" },
  { title: "Newegg Product Scraper", description: "E-commerce web scraper" },
  {
    title: "Quantum Computing Playground",
    description: "Learning quantum circuits",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        <div className="col-1"></div>

        <div className="col-2to11">
          <div className="tablet-frame">
            <div className="tablet-scroll-content">
              <div className="tablet-project-sections">
                <div className="project-section">
                  {" "}
                  {/* Left section */}
                  <div className="project-card">
                    <div
                      className="project-image-wrapper"
                      onClick={togglePopup}
                    >
                      <img src={projectImage} alt="Project" />
                      {showPopup && (
                        <div className="project-popup">
                          <p>Project Description Here...</p>
                        </div>
                      )}
                    </div>

                    <div className="project-details">
                      <div className="skills-list">
                        {/* Example: React, Node, AWS */}
                      </div>
                      <div className="project-links">
                        <a href={demoLink}>Demo</a>
                        <a href={codeLink}>Code</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-section">
                  {" "}
                  {/* Center section */}
                  {/* Project cards */}
                </div>
                <div className="project-section">
                  {" "}
                  {/* Right section */}
                  {/* Project cards */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12"></div>
      </div>
    </section>
  );
}

export default Projects;
