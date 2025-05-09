import React, { useState } from "react";
import "../styles/Projects.css";
import { FaReact, FaNodeJs, FaAws, FaPython } from "react-icons/fa"; // Example icons
import { SiFastapi, SiTailwindcss } from "react-icons/si";
import LifeCycleOfStar from "../assets/LifeCycleOfStar.png"; // Example image

const dummyProjects = [
  {
    id: 1,
    title: "AI Resume Builder",
    image: LifeCycleOfStar,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
    ],
    description:
      "Built an AI-powered tool to generate resumes using NLP models. Fast and customizable!",
  },
  {
    id: 2,
    title: "E-commerce Recommender",
    image: "https://via.placeholder.com/300x200?text=E-commerce",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "AWS", icon: <FaAws /> },
    ],
    description:
      "Recommendation engine based on collaborative filtering and deep learning. Personalized for users.",
  },
  {
    id: 3,
    title: "Healthcare Diagnosis AI",
    image: "https://via.placeholder.com/300x200?text=Healthcare+AI",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "TensorFlow", icon: <FaPython /> }, // Replace later with specific TensorFlow icon if needed
    ],
    description:
      "Healthcare app predicting diseases from symptoms using machine learning and statistical models.",
  },
];

function Projects() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="projects-section">
      <div className="projects-grid">
        <div className="col-1" />
        <div className="col-2to11">
          <div className="tablet-frame">
            <div className="tablet-scroll-content">
              <div className="tablet-project-sections">
                {dummyProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`project-card ${
                      flippedCard === project.id ? "flipped" : ""
                    }`}
                    onClick={() => handleCardClick(project.id)}
                  >
                    {/* Front Side */}
                    <div className="project-card-front">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <h3 className="project-title">{project.title}</h3>
                    </div>

                    {/* Back Side */}
                    <div className="project-card-back">
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="skills-icons">
                        {project.skills.map((skill, index) => (
                          <div key={index} className="skill-icon">
                            {skill.icon}
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
