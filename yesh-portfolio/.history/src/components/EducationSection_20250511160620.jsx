// src/components/EducationSection.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/EducationSection.css";

import stopstar from "../assets/stopstar.png";
import stoprocket from "../assets/stoprocket.png";
import stopblue from "../assets/stopblue.png";
import stopyellow from "../assets/stopyellow.png";
import stoppurple from "../assets/stoppurple.png";
import stoporange from "../assets/stoporange.png";
import stopgreen from "../assets/stopgreen.png";

export default function EducationSection() {
  // 1) Auto-scroll to bottom on mount
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);

  // your 5 stops with labels & details
  const stops = [
    {
      img: stoporange,
      label: "Pre-University",
      details:
        "Completed high-school at XYZ Academy with honors in Math & Physics.",
    },
    {
      img: stoppurple,
      label: "Bachelor’s Degree",
      details: "B.Sc. in Computer Science at VIT.",
    },
    {
      img: stopyellow,
      label: "Techie Aid Internship",
      details: "Built patient-engagement features in React & Node.js.",
    },
    {
      img: stopblue,
      label: "Software Engineer",
      details:
        "Backend services in FastAPI & AWS at Roostify; improved CI/CD pipeline.",
    },
    {
      img: stopgreen,
      label: "Master’s Degree",
      details: "M.S. in CS at Swansea University (Java Spring Boot & ReactJS).",
    },
  ];

  return (
    <div className="edu-section">
      <div className="edu-grid">
        <div className="col-1" />
        <div className="col-2to11">
          {/* glowing center line */}
          <div className="edu-line" />

          {/* markers + popups */}
          <div className="edu-markers">
            {/* Top star */}
            <div className="marker-wrapper">
              <img src={stopstar} alt="Star" className="marker star" />
            </div>

            {/* five planet stops */}
            {stops.map((stop, i) => (
              <div className="marker-wrapper" key={i}>
                <img
                  src={stop.img}
                  alt={stop.label}
                  className="marker planet"
                />
                <div className={`edu-popup ${i % 2 === 0 ? "left" : "right"}`}>
                  <h3>{stop.label}</h3>
                  <p>{stop.details}</p>
                </div>
              </div>
            ))}

            {/* animated rocket */}
            <motion.img
              src={stoprocket}
              alt="Rocket"
              className="edu-rocket"
              initial={{ bottom: 40 }}
              animate={{ bottom: "calc(100% - 40px)" }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
  );
}
