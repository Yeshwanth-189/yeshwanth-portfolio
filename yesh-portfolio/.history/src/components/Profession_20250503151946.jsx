import React from "react";
import SolarSystem from "./SolarSystem";
import "../styles/Profession.css";

function Profession() {
  return (
    <section className="profession-section">
      <div className="profession-grid">
        {/* 1st Row: Header */}
        <div className="col-1" />
        <div className="col-2to11">
          <h1 className="profession-header">Software Engineer</h1>
        </div>
        <div className="col-12" />

        {/* 2nd Row: Solar System */}
        <div className="col-1" />
        <div className="col-2to11">
          <SolarSystem />
        </div>
        <div className="col-12" />
      </div>
    </section>
  );
}

export default Profession;
