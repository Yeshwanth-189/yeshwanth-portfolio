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
        <span className="highlight">similar </span>
        {"item recommendations, and "}
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
  {
    title: "Stars and Constellations",
    bullets: [
      <li>
        {"Developed an interactive "}
        <span className="highlight">computer graphics</span>
        {" simulation using OpenGL to visualize the "}
        <span className="highlight">life cycle of a star</span>
        {" — from formation to supernova and black hole stages."}
      </li>,
      <li>
        {"Integrated "}
        <span className="highlight">audio</span>
        {
          " effects using OpenAL to dynamically reflect each cosmic event, creating a multisensory, immersive experience unique among class submissions."
        }
      </li>,
      <li>
        {
          "Received commendation from the course instructor for creativity and technical execution of simulation to visualize "
        }
        <span className="highlight">constellations</span>
        {" around us."}
      </li>,
    ],
  },
  {
    title: "NIDS using ML",
    bullets: [
      <li>
        {"Achieved "}
        <span className="highlight">98% </span>
        {
          "classification accuracy with minimal training/testing time by applying Decision Tree algorithms on a labeled network attack dataset."
        }
      </li>,
      <li>
        {"Built a system to detect and classify "}
        <span className="highlight">DoS</span>
        {", "}
        <span className="highlight">u2r</span>
        {", "}
        <span className="highlight">r2l</span>
        {", "}
        <span className="highlight">probe</span>
        {
          " attacks enhancing cybersecurity threat detection using supervised ML techniques."
        }
      </li>,
      <li>
        {"Utilized "}
        <span className="highlight">
          feature engineering and preprocessing{" "}
        </span>
        {"techniques to optimize model performance and reduce false positives."}
      </li>,
    ],
  },
  {
    title: "Snap It",
    bullets: [
      <li>
        {"Built a real-time Android mobile app using Java and Firebase for "}
        <span className="highlight">user authentication</span>
        {", "}
        <span className="highlight">messaging</span>
        {", and "}
        <span className="highlight">image sharing</span>
        {"."}
      </li>,
      <li>
        {"Implemented "}
        <span className="highlight">Firebase</span>
        {"Realtime Database and "}
        <span className="highlight">Cloud Storage</span>
        {" for scalable backend support."}
      </li>,
      <li>
        {"Emulated core Snapchat features such as "}
        <span className="highlight">ephemeral </span>
        {"messaging, "}
        <span className="highlight">snap </span>
        {"stories, and "}
        <span className="highlight">image </span>
        {"uploads."}
      </li>,
    ],
  },
  {
    title: "Little Lemon Restaurant",
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
