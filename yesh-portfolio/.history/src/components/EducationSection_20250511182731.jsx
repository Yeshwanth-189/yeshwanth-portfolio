import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
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
  useEffect(() => {
    // 1) Jump to bottom immediately
    window.scrollTo(0, document.documentElement.scrollHeight);

    // 2) Then scroll back up over the same 20 s as your rocket animation
    const duration = 20_000; // ms — match your CSS keyframe duration
    const startTime = performance.now();
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    function step(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // scroll from bottom (maxScroll) → top (0)
      window.scrollTo(0, maxScroll * (1 - t));
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
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
          <div className="edu-line" />
          <img src={stoprocket} alt="Rocket" className="rocket" />
        </div>
      </div>
      <div className="col-12" />
    </div>
  );
}
