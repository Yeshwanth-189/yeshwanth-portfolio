import React from "react";
import SolarSystem from "./SolarSystem";
import "../styles/Profession.css";
import NavBar from "../components/NavBar";
import ProfessionalDescription from "./ProfessionalDescription";

function Profession() {
  return (
    <>
      <section className="profession-section">
        <NavBar />
        <div className="profession-grid">
          {/* 1st Row: Header */}
          <div className="col-1" />
          <div className="col-2to11">
            <h1 className="profession-header typing-text-profession">
              Software Engineer
            </h1>
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
      <ProfessionalDescription />
      <ProfessionalMemories />
    </>
  );
}

export default Profession;
