import React, { useEffect, useRef } from "react";
import "../styles/EducationSection.css";

import stopstar from "../assets/stopstar.png";
import stoprocket from "../assets/stoprocket.png";
import stopblue from "../assets/stopblue.png";
import stopyellow from "../assets/stopyellow.png";
import stoppurple from "../assets/stoppurple.png";
import stoporange from "../assets/stoporange.png";
import stopgreen from "../assets/stopgreen.png";

export default function EducationSection() {
  const rocketRef = useRef(null);
  const lineRef = useRef(null);
  const popupRefs = useRef([]);

  useEffect(() => {
    // scroll to bottom on first render
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = 1 - Math.min(scrollTop / maxScroll, 1); // Inverted [1 → 0]

      // Move rocket
      if (rocketRef.current) {
        rocketRef.current.style.bottom = `${progress * 100}%`;
      }

      // Grow line
      if (lineRef.current) {
        lineRef.current.style.setProperty(
          "--line-progress",
          `${progress * 100}%`
        );
      }

      // Show popups
      popupRefs.current.forEach((popup, i) => {
        const triggerPoint = (i + 1) / 6;
        if (progress >= triggerPoint - 0.1 && progress <= triggerPoint + 0.1) {
          popup?.classList.add("slide-in");
        } else {
          popup?.classList.remove("slide-in");
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

          {/* Planet 1 - Right */}
          <div className="planet-with-popup">
            <img src={stoporange} alt="Planet 1" className="marker planet" />
            <div
              className="planet-popup right"
              ref={(el) => (popupRefs.current[0] = el)}
            >
              <h3>Pre-University</h3>
              <p>Completed high school at XYZ Academy with distinction.</p>
            </div>
          </div>

          {/* Planet 2 - Left */}
          <div className="planet-with-popup">
            <img src={stoppurple} alt="Planet 2" className="marker planet" />
            <div
              className="planet-popup left"
              ref={(el) => (popupRefs.current[1] = el)}
            >
              <h3>Bachelor’s</h3>
              <p>B.Sc in CS at VIT, India.</p>
            </div>
          </div>

          {/* Planet 3 - Right */}
          <div className="planet-with-popup">
            <img src={stopyellow} alt="Planet 3" className="marker planet" />
            <div
              className="planet-popup right"
              ref={(el) => (popupRefs.current[2] = el)}
            >
              <h3>Internship</h3>
              <p>Worked on full-stack projects in healthcare tech.</p>
            </div>
          </div>

          {/* Planet 4 - Left */}
          <div className="planet-with-popup">
            <img src={stopblue} alt="Planet 4" className="marker planet" />
            <div
              className="planet-popup left"
              ref={(el) => (popupRefs.current[3] = el)}
            >
              <h3>Software Engineer</h3>
              <p>Backend developer using FastAPI and AWS.</p>
            </div>
          </div>

          {/* Planet 5 - Right */}
          <div className="planet-with-popup">
            <img src={stopgreen} alt="Planet 5" className="marker planet" />
            <div
              className="planet-popup right"
              ref={(el) => (popupRefs.current[4] = el)}
            >
              <h3>Master’s Degree</h3>
              <p>Specialized in cloud and distributed systems.</p>
            </div>
          </div>

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
