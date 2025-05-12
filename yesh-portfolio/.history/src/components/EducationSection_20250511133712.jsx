// src/components/EducationSection.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/EducationSection.css";

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
  const { scrollYProgress } = useViewportScroll();

  const rocketY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  // create one fade hook per stop
  const fadePreU = useTransform(scrollYProgress, stops[0].fade, [0, 1]);
  const fadeBach = useTransform(scrollYProgress, stops[1].fade, [0, 1]);
  const fadeIntern = useTransform(scrollYProgress, stops[2].fade, [0, 1]);
  const fadeSoftEng = useTransform(scrollYProgress, stops[3].fade, [0, 1]);
  const fadeMasters = useTransform(scrollYProgress, stops[4].fade, [0, 1]);
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

        {stops.map((stop, i) => {
          // alternate side: even → right, odd → left
          const sideClass = i % 2 === 0 ? "right" : "left";

          return (
            <div
              key={stop.key}
              className="edu-stop"
              style={{ top: `${stop.pos}%` }}
            >
              <div className="edu-planet" />

              <motion.div
                className={`edu-popup ${sideClass}`}
                style={{ opacity: fades[i] }}
              >
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
            className="edu-popup right"
            style={{ opacity: fadeStar }}
          ></motion.div>
        </div>
      </div>

      <div className="edu-spacer" />
    </div>
  );
}
