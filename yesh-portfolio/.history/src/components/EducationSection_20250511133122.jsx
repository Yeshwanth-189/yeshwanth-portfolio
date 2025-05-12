// src/components/EducationSection.jsx
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./EducationSection.css";

// your stops data (fade ranges still live here for clarity)
const stops = [
  {
    key: "pre-u",
    label: "Pre-University",
    details:
      "Completed high-school at XYZ Academy with honors in Math & Physics.",
    pos: 90,
    fade: [0.05, 0.15],
  },
  {
    key: "bachelors",
    label: "Bachelor’s Degree",
    details: "B.Sc. in Computer Science at VIT.",
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
  // 1) get scroll progress
  const { scrollYProgress } = useViewportScroll();

  // 2) rocket position → 100% down → 0% up
  const rocketY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  // 3) one useTransform per stop, at top level
  const fadePreU = useTransform(scrollYProgress, stops[0].fade, [0, 1]);
  const fadeBach = useTransform(scrollYProgress, stops[1].fade, [0, 1]);
  const fadeIntern = useTransform(scrollYProgress, stops[2].fade, [0, 1]);
  const fadeSoftEng = useTransform(scrollYProgress, stops[3].fade, [0, 1]);
  const fadeMasters = useTransform(scrollYProgress, stops[4].fade, [0, 1]);

  // 4) star at top
  const fadeStar = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  const fades = [fadePreU, fadeBach, fadeIntern, fadeSoftEng, fadeMasters];

  return (
    <div className="edu-section">
      <div className="edu-spacer" />

      <div className="edu-track">
        <div className="edu-line" />

        <motion.div className="edu-rocket" style={{ top: rocketY }}>
          🚀
        </motion.div>

        {stops.map((stop, i) => (
          <div
            key={stop.key}
            className="edu-stop"
            style={{ top: `${stop.pos}%` }}
          >
            <div className="edu-planet" />
            <motion.div className="edu-popup" style={{ opacity: fades[i] }}>
              <h3>{stop.label}</h3>
              <p>{stop.details}</p>
            </motion.div>
          </div>
        ))}

        {/* Top star */}
        <div className="edu-stop" style={{ top: "10%" }}>
          <div className="edu-star">⭐️</div>
          <motion.div className="edu-popup" style={{ opacity: fadeStar }}>
            <h3>🎉 Mission Complete</h3>
            <p>Master’s Degree achieved</p>
          </motion.div>
        </div>
      </div>

      <div className="edu-spacer" />
    </div>
  );
}
