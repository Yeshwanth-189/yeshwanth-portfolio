import React, { useState } from "react";
import "../styles/Projects.css";
import ResumeCraft from "../assets/ResumeCraftAI.png";
import Recommender from "../assets/AI-R.png";
import Resnet from "../assets/CloudResnet.png";
import LittleLemon from "../assets/LittleLemon.png";
import NIDS from "../assets/NIDS.png";
import SnapIt from "../assets/SnapIt.png";
import LifeCycleOfStar from "../assets/LifeCycleOfStar.png";

const dummyProjects = [
  {
    id: 1,
    title: "AI Resume Builder",
    image: "https://via.placeholder.com/300x200?text=Resume+AI",
    skills: ["React", "FastAPI", "NLP"],
    demo: "#",
    code: "#",
    description:
      "Built an AI-powered tool to generate and match resumes automatically using NLP models.",
  },
  {
    id: 2,
    title: "E-commerce Recommender",
    image: "https://via.placeholder.com/300x200?text=E-commerce",
    skills: ["Node.js", "React", "AWS Lambda"],
    demo: "#",
    code: "#",
    description:
      "Developed a recommendation engine suggesting products based on user behavior.",
  },
  {
    id: 3,
    title: "Healthcare Diagnosis AI",
    image: "https://via.placeholder.com/300x200?text=Healthcare+AI",
    skills: ["TensorFlow", "WebRTC", "FastAPI"],
    demo: "#",
    code: "#",
    description:
      "Built a healthcare app predicting diseases based on symptoms entered by users.",
  },
  {
    id: 4,
    title: "SaaS Productivity Suite",
    image: "https://via.placeholder.com/300x200?text=SaaS+Productivity",
    skills: ["GraphQL", "React", "AWS"],
    demo: "#",
    code: "#",
    description:
      "Real-time collaborative SaaS platform with team task management features.",
  },
  {
    id: 5,
    title: "Smart Home IoT Dashboard",
    image: "https://via.placeholder.com/300x200?text=IoT+Dashboard",
    skills: ["MQTT", "React", "Node.js"],
    demo: "#",
    code: "#",
    description:
      "Built a smart home dashboard with real-time IoT device control and analytics.",
  },
  {
    id: 6,
    title: "Social Media Sentiment",
    image: "https://via.placeholder.com/300x200?text=Sentiment+Analysis",
    skills: ["NLP", "Flask", "Pandas"],
    demo: "#",
    code: "#",
    description:
      "Built a platform analyzing social media data to detect public sentiment in real time.",
  },
];

function Projects() {
  const [activePopup, setActivePopup] = useState(null);

  const handleImageClick = (id) => {
    if (activePopup === id) {
      setActivePopup(null);
    } else {
      setActivePopup(id);
    }
  };

  return (
    <section className="projects-section">
      <div className="projects-grid">
        <div className="col-1" />

        <div className="col-2to11">
          <div className="tablet-frame">
            <div className="tablet-scroll-content">
              <div className="tablet-project-sections">
                {[0, 1, 2].map((sectionIndex) => (
                  <div className="project-section" key={sectionIndex}>
                    {dummyProjects
                      .slice(sectionIndex * 2, sectionIndex * 2 + 2)
                      .map((project) => (
                        <div key={project.id} className="project-card">
                          <div
                            className="project-image-wrapper"
                            onClick={() => handleImageClick(project.id)}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="project-image"
                            />
                            {activePopup === project.id && (
                              <div className="project-popup">
                                <p>{project.description}</p>
                              </div>
                            )}
                          </div>

                          <div className="project-details">
                            <div className="skills-list">
                              {project.skills.map((skill, idx) => (
                                <span key={idx} className="skill-badge">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="project-links">
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Demo
                              </a>
                              <a
                                href={project.code}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Code
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12" />
      </div>
    </section>
  );
}

export default Projects;
