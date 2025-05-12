import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/EducationSection.css";

import stopstar from "../assets/stopstar.png";
import stoprocket from "../assets/stoprocket.png";
import stopred from "../assets/stopred.png";
import stopblue from "../assets/stopblue.png";
import stopyellow from "../assets/stopyellow.png";
import stoppurple from "../assets/stoppurple.png";
import stoporange from "../assets/stoporange.png";

export default function EducationSection() {
  return (
    <div className="edu-section">
      <div className="edu-grid" />
      <div className="col-1" />
      <div className="col-2to11">
        <div class="edu-markers">
          <img src={stopstar} alt="Star" class="marker star" />

          <img src={stoporange} alt="Planet 1" class="marker planet" />
          <img src={stoppurple} alt="Planet 2" class="marker planet" />
          <img src={stopyellow} alt="Planet 3" class="marker planet" />
          <img src={stopblue} alt="Planet 4" class="marker planet" />
          <img src={stopred} alt="Planet 5" class="marker planet" />

          <img src={stoprocket} alt="Rocket" class="marker rocket" />
        </div>
      </div>
      <div className="col-12" />
    </div>
  );
}
