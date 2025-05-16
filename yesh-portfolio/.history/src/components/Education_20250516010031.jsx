import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Education.css";
import EducationSection from "../components/EducationSection";

function Education() {
  return (
    <>
      <section className="education">
        <NavBar />
        <EducationSection />
      </section>
    </>
  );
}

export default Education;
