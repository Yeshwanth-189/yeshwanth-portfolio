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

      const progress = 1 - Math.min(scrollTop / maxScroll, 1);

      // Move rocket based on scroll progress
      if (rocketRef.current) {
        rocketRef.current.style.bottom = `${progress * 100}%`;
      }

      // Grow line based on scroll progress
      if (lineRef.current) {
        lineRef.current.style.setProperty(
          "--line-progress",
          `${progress * 100}%`
        );
      }
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

          <img src={stoporange} alt="Planet 1" className="marker planet" />
          <img src={stoppurple} alt="Planet 2" className="marker planet" />
          <img src={stopyellow} alt="Planet 3" className="marker planet" />
          <img src={stopblue} alt="Planet 4" className="marker planet" />
          <img src={stopgreen} alt="Planet 5" className="marker planet" />

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
