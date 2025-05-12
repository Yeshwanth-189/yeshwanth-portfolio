import React, { useEffect, useRef, useState } from "react";
import "../styles/EducationSection.css";

import stopstar from "../assets/stopstar.png";
import stoprocket from "../assets/stoprocket.png";
import stopblue from "../assets/stopblue.png";
import stopyellow from "../assets/stopyellow.png";
import stoppurple from "../assets/stoppurple.png";
import stoporange from "../assets/stoporange.png";
import stopgreen from "../assets/stopgreen.png";

const stops = [
  {
    label: "Pre-University",
    details: "Completed high school at XYZ Academy.",
    img: stoporange,
  },
  {
    label: "Bachelor’s Degree",
    details: "B.Sc in CS at VIT, India.",
    img: stoppurple,
  },
  {
    label: "Techie Aid Internship",
    details: "Worked on full-stack projects in healthcare tech.",
    img: stopyellow,
  },
  {
    label: "Software Engineer",
    details: "Backend developer using FastAPI + AWS.",
    img: stopblue,
  },
  {
    label: "Master’s Degree",
    details: "MS in CS with specialization in cloud systems.",
    img: stopgreen,
  },
];

export default function EducationSection() {
  const rocketRef = useRef(null);
  const lineRef = useRef(null);
  const popupsRef = useRef([]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = 1 - Math.min(scrollTop / maxScroll, 1); // Inverted

      if (rocketRef.current) {
        rocketRef.current.style.bottom = `${progress * 100}%`;
      }

      if (lineRef.current) {
        lineRef.current.style.setProperty(
          "--line-progress",
          `${progress * 100}%`
        );
      }

      // control popup visibility
      popupsRef.current.forEach((el, i) => {
        const triggerPoint = (i + 1) / (stops.length + 1); // divide equally
        if (progress >= triggerPoint - 0.1 && progress <= triggerPoint + 0.1) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="edu-section">
      <div className="edu-grid" />
      <div className="col-1" />
      <div className="col-2to11">
        <div className="edu-markers">
          <img src={stopstar} alt="Star" className="marker star" />

          {stops.map((stop, index) => (
            <div className="planet-with-popup" key={index}>
              <img src={stop.img} alt={stop.label} className="marker planet" />
              <div
                className={`edu-popup ${index % 2 === 0 ? "right" : "left"}`}
                ref={(el) => (popupsRef.current[index] = el)}
              >
                <h3>{stop.label}</h3>
                <p>{stop.details}</p>
              </div>
            </div>
          ))}

          <div ref={lineRef} className="edu-line" />
          <img
            src={stoprocket}
            alt="Rocket"
            className="rocket"
            ref={rocketRef}
          />
        </div>
      </div>
      <div className="col-12" />
    </div>
  );
}
