import React, { useState, useEffect, useRef } from "react";
import "../styles/ProjectDescription.css";

const descriptions = [
  {
    title: "ResumeCraft.AI",
    bullets: [
      <li key="1">
        Developed an AI-powered resume builder application to help users craft
        resumes and match them against job descriptions for optimal fit,
        utilizing a <span className="highlight">pre-trained NLP model</span>{" "}
        with Sentence Transformers.
      </li>,
      <li key="2">
        Built a full-stack application to automate resume parsing and job
        description matching, achieving a <span className="highlight">94%</span>{" "}
        faster analysis compared to manual comparison.
      </li>,
      <li key="3">
        Achieved an average skill match accuracy of{" "}
        <span className="highlight">82%</span> by intelligently parsing skills,
        experience, and education sections from user-uploaded resumes.
      </li>,
    ],
  },
  {
    title: "Resnet in Cloud",
    bullets: [
      <li key="1">
        Deployed FastAPI ResNet18 inference service on Kubernetes with{" "}
        <span className="highlight">HPA</span> and{" "}
        <span className="highlight">VPA</span> for dynamic scaling.
      </li>,
      <li key="2">
        Achieved <span className="highlight">efficient</span> CPU/memory
        utilization and <span className="highlight">99.9% uptime</span> during
        simulated load tests.
      </li>,
      <li key="3">
        Integrated telemetry & monitoring to detect and debug issues; used{" "}
        <span className="highlight">real-time metrics</span> to improve
        stability.
      </li>,
    ],
  },
  {
    title: "Project AI-R",
    bullets: [
      <li key="1">
        Built a hybrid recommendation system using{" "}
        <span className="highlight">collaborative filtering</span>,{" "}
        <span className="highlight">content-based filtering</span>, and{" "}
        <span className="highlight">deep learning models</span>.
      </li>,
      <li key="2">
        Implemented personalized product suggestions, similar item
        recommendations, and real-time trending items using purchase/view
        behavior.
      </li>,
      <li key="3">
        Designed a <span className="highlight">cold start</span> strategy with
        intelligent fallbacks for new users or sparse data.
      </li>,
      <li key="4">
        Added <span className="highlight">sentiment-aware filtering</span> by
        analyzing product reviews via NLP to boost relevance.
      </li>,
    ],
  },
  {
    title: "Stars and Constellations",
    bullets: [
      <li key="1">
        Created an OpenGL simulation visualizing the{" "}
        <span className="highlight">life cycle of a star</span> — from formation
        to supernova.
      </li>,
      <li key="2">
        Integrated <span className="highlight">audio effects</span> with OpenAL
        for an immersive multisensory experience.
      </li>,
      <li key="3">
        Earned instructor commendation for creative visualization of{" "}
        <span className="highlight">constellations</span>.
      </li>,
    ],
  },
  {
    title: "NIDS using ML",
    bullets: [
      <li key="1">
        Achieved <span className="highlight">98%</span> classification accuracy
        on network attacks using Decision Trees.
      </li>,
      <li key="2">
        Detected DoS, u2r, r2l, and probe attacks with supervised ML.
      </li>,
      <li key="3">
        Optimized performance and reduced false positives via{" "}
        <span className="highlight">feature engineering</span>.
      </li>,
    ],
  },
  {
    title: "Snap It",
    bullets: [
      <li key="1">
        Built a real-time Android app (Java + Firebase) for{" "}
        <span className="highlight">authentication</span>, messaging, and image
        sharing.
      </li>,
      <li key="2">
        Used <span className="highlight">Firebase Realtime Database</span> and{" "}
        <span className="highlight">Cloud Storage</span> for scalable backend.
      </li>,
      <li key="3">
        Emulated ephemeral messaging, snap stories, and image uploads.
      </li>,
    ],
  },
  {
    title: "Little Lemon Restaurant",
    bullets: [
      <li key="1">
        Developed a reservation system (React, Formik, Yup, Ant Design) for a{" "}
        <span className="highlight">modern user experience</span>.
      </li>,
      <li key="2">
        Boosted <span className="highlight">booking conversion rates</span> by
        streamlining the reservation flow.
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

  if (!length) return null;

  return (
    <div className="project-description-grid">
      <div className={`carousel shift-${current}`}>
        <div className="slides-inner">
          {descriptions.map((desc, idx) => (
            <div className="slide" key={idx}>
              <div className="slide-content">
                <h2 className="highlight">{desc.title}</h2>
                <ul>{desc.bullets.map((li) => li)}</ul>
              </div>
            </div>
          ))}
        </div>
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
