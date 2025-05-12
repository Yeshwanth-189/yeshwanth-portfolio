import React, { useState, useEffect, useRef } from "react";
import "../styles/ProjectDescription.css";

const descriptions = [
  {
    title: "ResumeCraft.AI",
    bullets: [
      <li>
        {
          "Developed an AI-powered resume builder application to help users craft resumes and match them against job descriptions for optimal fit, utilizing a "
        }
        <span className="highlight"> pre-trained NLP model </span>
        {" with Sentence Transformers."}
      </li>,
      <li>
        {
          "Built a full-stack application to automate resume parsing and job description matching, achieving a"
        }
        <span className="highlight"> 94% </span>
        {"faster analysis compared to manual comparison"}
      </li>,
      <li>
        {"Achieved an average skill match accuracy of "}
        <span className="highlight">82%</span>
        {
          " by intelligently parsing skills, experience, and education sections from user-uploaded resumes."
        }
      </li>,
    ],
  },
  {
    title: "Resnet in Cloud",
    bullets: [
      <li>
        {"Deployed FastAPI ResNet18 inference service on Kubernetes with "}
        <span className="highlight">HPA</span>
        {" and "}
        <span className="highlight">VPA</span>
        {" for dynamic scaling."}
      </li>,
      <li>
        {"Achieved "}
        <span className="highlight">efficient</span>
        {" CPU/memory utilization and "}
        <span className="highlight">99.9% uptime</span>
        {" during simulated load tests."}
      </li>,
      <li>
        {"Integrated telemetry & monitoring to detect and debug issues; used "}
        <span className="highlight">real-time metrics</span>
        {" to improve stability."}
      </li>,
    ],
  },
  {
    title: "Project AI-R",
    bullets: [
      <li>
        {
          "Built a hybrid recommendation system that powers personalized product discovery using a blend of "
        }
        <span className="highlight">collaborative </span>
        {"filtering, "}
        <span className="highlight">content-based </span>
        {"filtering, and "}
        <span className="highlight">deep learning models</span>
        {"."}
      </li>,
      <li>
        {"Implemented core features like "}
        <span className="highlight">personalized </span>
        {"product suggestions, "}
        <span className="highlight">similar item </span>
        {"recommendations, and "}
        <span className="highlight">real-time </span>
        {"trending items using purchase/view behavior."}
      </li>,
      <li>
        {"Designed a "}
        <span className="highlight">cold start </span>
        {"strategy using "}
        <span className="highlight">intelligent </span>
        {"fallbacks to address new users or product data sparsity."}
      </li>,
      <li>
        {"Integrated "}
        <span className="highlight">sentiment-aware </span>
        {
          "filtering by analyzing product reviews using NLP to boost ranking accuracy and relevance."
        }
      </li>,
    ],
  },
];

export default function ProjectDescription() {
  const [current, setCurrent] = useState(0);
  const length = descriptions.length;
  const timeoutRef = useRef(null);

  useEffect(() => {
    const next = (current + 1) % length;
    timeoutRef.current = setTimeout(() => setCurrent(next), 7000);
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
                <h2 className="highlight">{desc.title}</h2>
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
