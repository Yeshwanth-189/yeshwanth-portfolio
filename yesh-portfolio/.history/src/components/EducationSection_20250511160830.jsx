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
  // Auto-scroll to bottom on first render
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
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

          <img src={stoprocket} alt="Rocket" className="rocket" />
        </div>
      </div>
      <div className="col-12" />
    </div>
  );
}
