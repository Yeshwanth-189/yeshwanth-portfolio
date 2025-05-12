// src/components/EducationSection.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./EducationSection.css";

// Define your stops: label, details, position% down the track, and fade-in scroll range
const stops = [
  {
    key: "pre-u",
    label: "Pre-University",
    details:
      "Completed high-school at XYZ Academy with honors in Math & Physics.",
    pos: 90, // 90% from the top of the track
    fade: [0.05, 0.15], // scrollYProgress range where popup fades from 0→1
  },
  {
    key: "bachelors",
    label: "Bachelor’s Degree",
    details: "B.Sc. in Computer Science at Vellore Institute of Technology.",
    pos: 75,
    fade: [0.2, 0.3],
  },
  {
    key: "internship",
    label: "Techie Aid Internship",
    details: "Built patient-engagement features in React & Node.js.",
    pos: 60,
    fade: [0.35, 0.45],
  },
  {
    key: "software-eng",
    label: "Software Engineer",
    details:
      "Backend services in FastAPI & AWS at Roostify; improved CI/CD pipeline.",
    pos: 45,
    fade: [0.5, 0.6],
  },
  {
    key: "masters",
    label: "Master’s Degree",
    details: "M.S. in CS at Swansea University (Java Spring Boot & ReactJS).",
    pos: 30,
    fade: [0.65, 0.75],
  },
];

export default function EducationSection() {
  // gives scrollYProgress ∈ [0…1]
  const { scrollYProgress } = useViewportScroll();

  // map scroll → rocket top: 100% (bottom) → 0% (top)
  const rocketY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div className="edu-section">
      {/* make the page tall so you can scroll */}
      <div className="edu-spacer" />

      <div className="edu-track">
        {/* The vertical line */}
        <div className="edu-line" />

        {/* Rocket */}
        <motion.div className="edu-rocket" style={{ top: rocketY }}>
          🚀
        </motion.div>

        {/* Planet stops */}
        {stops.map((stop) => {
          // opacity 0→1 over stop.fade range
          const opacity = useTransform(scrollYProgress, stop.fade, [0, 1]);
          return (
            <div
              key={stop.key}
              className="edu-stop"
              style={{ top: `${stop.pos}%` }}
            >
              <div className="edu-planet" />

              <motion.div className="edu-popup" style={{ opacity }}>
                <h3>{stop.label}</h3>
                <p>{stop.details}</p>
              </motion.div>
            </div>
          );
        })}

        {/* Top star */}
        <div className="edu-stop" style={{ top: "10%" }}>
          <div className="edu-star">⭐️</div>
          <motion.div
            className="edu-popup"
            style={{
              opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]),
            }}
          >
            <h3>🎉 Mission Complete</h3>
            <p>Master’s Degree achieved</p>
          </motion.div>
        </div>
      </div>

      <div className="edu-spacer" />
    </div>
  );
}
