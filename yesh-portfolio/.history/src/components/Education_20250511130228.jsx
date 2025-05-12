import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Project.css";
import ProjectSection from "./ProjectSection";
import ProjectHalographic from "./ProjectHalographic";
import ProjectDescription from "./ProjectDescription";

function Project() {
  return (
    <>
      <section className="education">
        <NavBar />
        <h1 className="education-header typing-text-education">Education</h1>
        {/* <EducationSection /> */}
      </section>
    </>
  );
}

export default Project;
