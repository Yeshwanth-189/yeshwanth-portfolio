import React, { useState, useEffect, useRef } from "react";
import "../styles/ProjectDescription.css";

const descriptions = [
  {
    title: "ResumeCraft.AI (Full-Stack Application)",
    tech: "Technologies: React, Redux, Redux-Saga, FastAPI, Ant Design, Python, Sentence Transformers NLP Model",
    bullets: [
      "Developed an AI-powered resume builder application to help users craft resumes and match them against job descriptions for optimal fit, utilizing a pre-trained NLP model with Sentence Transformers.",
      "Built a full-stack application to automate resume parsing and job description matching, achieving a 94% faster analysis compared to manual comparison.",
      "Achieved an average skill match accuracy of 82% by intelligently parsing skills, experience, and education sections from user-uploaded resumes.",
    ],
  },
  {
    title: "ResumeCraft.AI (Full-Stack Application)",
    tech: "Technologies: React, Redux, Redux-Saga, FastAPI, Ant Design, Python, Sentence Transformers NLP Model",
    bullets: [
      "Developed an AI-powered resume builder application to help users craft resumes and match them against job descriptions for optimal fit, utilizing a pre-trained NLP model with Sentence Transformers.",
      "Built a full-stack application to automate resume parsing and job description matching, achieving a 94% faster analysis compared to manual comparison.",
      "Achieved an average skill match accuracy of 82% by intelligently parsing skills, experience, and education sections from user-uploaded resumes.",
    ],
  },
  {
    title: "ResumeCraft.AI (Full-Stack Application)",
    tech: "Technologies: React, Redux, Redux-Saga, FastAPI, Ant Design, Python, Sentence Transformers NLP Model",
    bullets: [
      "Developed an AI-powered resume builder application to help users craft resumes and match them against job descriptions for optimal fit, utilizing a pre-trained NLP model with Sentence Transformers.",
      "Built a full-stack application to automate resume parsing and job description matching, achieving a 94% faster analysis compared to manual comparison.",
      "Achieved an average skill match accuracy of 82% by intelligently parsing skills, experience, and education sections from user-uploaded resumes.",
    ],
  },
  // add more project entries here
];

export default function ProjectDescription() {
  const [current, setCurrent] = useState(0);
  const length = descriptions.length;
  const timeoutRef = useRef(null);

  useEffect(() => {
    const next = (current + 1) % length;
    timeoutRef.current = setTimeout(() => setCurrent(next), 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, length]);

  const nextSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrent((current - 1 + length) % length);
  };

  if (!Array.isArray(descriptions) || length === 0) return null;

  return (
    <div className="project-description-grid">
      <div className="carousel">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide inactive"}
          >
            {index === current && (
              <div className="slide-content">
                <h2>{desc.title}</h2>
                <p className="tech">{desc.tech}</p>
                <ul>
                  {desc.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
