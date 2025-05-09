import React, { useState } from "react";
import "../styles/Projects.css";
import ResumeCraft from "../assets/ResumeCraftAI.png";
import Recommender from "../assets/AI-R.png";
import Resnet from "../assets/CloudResnet.png";
import LittleLemon from "../assets/LittleLemon.png";
import NIDS from "../assets/NIDS.png";
import SnapIt from "../assets/SnapIt.png";
import LifeCycleOfStar from "../assets/LifeCycleOfStar.png";
import { FaReact, FaNodeJs, FaAws, FaPython } from "react-icons/fa";
import {
  SiFastapi,
  SiTensorflow,
  SiFlask,
  SiMqtt,
  SiPandas,
  SiGraphql,
  SiThreeDotJs,
} from "react-icons/si";
const skillIconMap = {
  React: <FaReact size={20} color="#61DBFB" />,
  "Node.js": <FaNodeJs size={20} color="#68A063" />,
  AWS: <FaAws size={20} color="#FF9900" />,
  "AWS Lambda": <FaAws size={20} color="#FF9900" />,
  FastAPI: <SiFastapi size={20} color="#009688" />,
  TensorFlow: <SiTensorflow size={20} color="#FF6F00" />,
  Flask: <SiFlask size={20} color="#000000" />,
  MQTT: <SiMqtt size={20} color="#E56184" />,
  Pandas: <SiPandas size={20} color="#150458" />,
  GraphQL: <SiGraphql size={20} color="#E10098" />,
  "Three.js": <SiThreeDotJs size={20} color="#000000" />,
  "React Three Fiber": <FaReact size={20} color="#61DBFB" />,
  OpenGL: <SiThreeDotJs size={20} color="#5586A4" />, // You can change if you find OpenGL logo later
  "C++": <FaPython size={20} color="#3572A5" />, // Placeholder
  NLP: <FaPython size={20} color="#3776AB" />, // Placeholder for NLP
};

const dummyProjects = [
  {
    id: 1,
    title: "AI Resume Builder",
    image: ResumeCraft,
    skills: ["React", "FastAPI", "NLP"],
    demo: "#",
    code: "#",
    description:
      "Built an AI-powered tool to generate and match resumes automatically using NLP models.",
  },
  {
    id: 2,
    title: "E-commerce Recommender",
    image: Recommender,
    skills: ["Node.js", "React", "AWS Lambda"],
    demo: "#",
    code: "#",
    description:
      "Developed a recommendation engine suggesting products based on user behavior.",
  },
  {
    id: 3,
    title: "Healthcare Diagnosis AI",
    image: LifeCycleOfStar,
    skills: ["TensorFlow", "WebRTC", "FastAPI"],
    demo: "#",
    code: "#",
    description:
      "Built a healthcare app predicting diseases based on symptoms entered by users.",
  },
  {
    id: 4,
    title: "SaaS Productivity Suite",
    image: LittleLemon,
    skills: ["GraphQL", "React", "AWS"],
    demo: "#",
    code: "#",
    description:
      "Real-time collaborative SaaS platform with team task management features.",
  },
  {
    id: 5,
    title: "Smart Home IoT Dashboard",
    image: SnapIt,
    skills: ["MQTT", "React", "Node.js"],
    demo: "#",
    code: "#",
    description:
      "Built a smart home dashboard with real-time IoT device control and analytics.",
  },
  {
    id: 6,
    title: "Social Media Sentiment",
    image: NIDS,
    skills: ["NLP", "Flask", "Pandas"],
    demo: "#",
    code: "#",
    description:
      "Built a platform analyzing social media data to detect public sentiment in real time.",
  },
  {
    id: 7,
    title: "Computer Graphics",
    image: LifeCycleOfStar,
    skills: ["OpenGL", "C++"],
    demo: "#",
    code: "#",
    description:
      "Created dynamic graphics scenes simulating space and 3D models of stars and galaxies.",
  },
  {
    id: 8,
    title: "Dynamic Star Life Cycle",
    image: LifeCycleOfStar,
    skills: ["Three.js", "React Three Fiber"],
    demo: "#",
    code: "#",
    description:
      "Visualized a star's lifecycle from birth to black hole using interactive 3D models.",
  },
];

function Projects() {
  const [flippedId, setFlippedId] = useState(null);

  const handleCardFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
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
                      .slice(sectionIndex * 3, sectionIndex * 3 + 3)
                      .map((project) => (
                        <div
                          key={project.id}
                          className={`project-card ${
                            flippedId === project.id ? "flipped" : ""
                          }`}
                          onClick={() => handleCardFlip(project.id)}
                        >
                          {/* Front Side */}
                          <div className="project-card-front">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="project-image"
                            />
                            <div className="skills-list">
                              {project.skills.map((skill, idx) => (
                                <span key={idx} className="skill-badge">
                                  {skillIconMap[skill] || skill}
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

                          {/* Back Side */}
                          <div className="project-card-back">
                            <p className="project-description">
                              {project.description}
                            </p>
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
