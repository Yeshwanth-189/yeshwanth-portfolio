// src/components/EducationSection.jsx
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
    // 1) jump to bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    // 2) once we're at the bottom, trigger the animations
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;

      if (atBottom) {
        rocketRef.current?.classList.add("play");
        lineRef.current?.classList.add("play");
        window.removeEventListener("scroll", onScroll);
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
          <img src={stoporange} alt="Planet" className="marker planet" />
          <img src={stoppurple} alt="Planet" className="marker planet" />
          <img src={stopyellow} alt="Planet" className="marker planet" />
          <img src={stopblue} alt="Planet" className="marker planet" />
          <img src={stopgreen} alt="Planet" className="marker planet" />

          {/* glowing line */}
          <div ref={lineRef} className="edu-line" />

          {/* rocket (animation paused until .play) */}
          <img
            ref={rocketRef}
            src={stoprocket}
            alt="Rocket"
            className="rocket"
          />
        </div>
      </div>
      <div className="col-12" />
    </div>
  );
}
