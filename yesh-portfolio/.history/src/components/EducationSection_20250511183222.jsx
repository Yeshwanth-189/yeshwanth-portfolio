import React, { useEffect, useRef } from "react";
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
  // 1) Create a ref for the section
  const sectionRef = useRef(null);

  // 2) On mount, scroll *that* container
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // jump to bottom
    el.scrollTo({ top: el.scrollHeight, behavior: "auto" });

    // animate scroll back to top over 20s
    const duration = 20_000;
    const start = performance.now();
    const maxScroll = el.scrollHeight - el.clientHeight;

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      el.scrollTop = maxScroll * (1 - t);
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
