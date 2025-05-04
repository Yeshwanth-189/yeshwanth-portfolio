import React from "react";
import SolarSystem from "./SolarSystem";
import "../styles/Profession.css";
import NavBar from "../components/NavBar";
import ProfessionalDescription from "./ProfessionalDescription";

function Profession() {
  return (
    <>
      <NavBar />

      <SolarSystem />
      <ProfessionalDescription />
    </>
  );
}

export default Profession;
