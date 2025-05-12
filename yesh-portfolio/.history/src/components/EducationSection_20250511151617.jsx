import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/EducationSection.css";

export default function EducationSection() {
  return (
    <div className="edu-section">
      <div className="edu-grid" />
      <div className="col-1" />
      <div className="col-2to11">
        <div className="edu-line" />
        <div class="edu-markers">
          <img src="/path/to/star.png" alt="Star" class="marker star" />

          <img
            src="/path/to/planet1.png"
            alt="Planet 1"
            class="marker planet"
          />
          <img
            src="/path/to/planet2.png"
            alt="Planet 2"
            class="marker planet"
          />
          <img
            src="/path/to/planet3.png"
            alt="Planet 3"
            class="marker planet"
          />
          <img
            src="/path/to/planet4.png"
            alt="Planet 4"
            class="marker planet"
          />
          <img
            src="/path/to/planet5.png"
            alt="Planet 5"
            class="marker planet"
          />

          <img src="/path/to/rocket.png" alt="Rocket" class="marker rocket" />
        </div>
      </div>
      <div className="col-12" />
    </div>
  );
}
