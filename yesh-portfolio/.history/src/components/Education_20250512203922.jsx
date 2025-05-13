import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Education.css";
import EducationSection from "../components/EducationSection";

function Education() {
  return (
    <>
      <section className="education">
        {/* <NavBar /> */}
        <h1 className="education-header typing-text-education">Education</h1>
        <EducationSection />
      </section>
    </>
  );
}

export default Education;
