import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Project.css";
import ProjectSection from "./ProjectSection";
import ProjectHalographic from "./ProjectHalographic";
import ProjectDescription from "./ProjectDescription";

function Project() {
  return (
    <>
      <ProjectHalographic />
      <section className="project">
        <NavBar />
        <ProjectSection />
      </section>
      <ProjectDescription />
    </>
  );
}

export default Project;
