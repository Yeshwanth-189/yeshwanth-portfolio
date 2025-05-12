import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Project.css";
import ProjectSection from "./ProjectSection";
import ProjectHalographic from "./ProjectHalographic";
import ProjectDescription from "./ProjectDescription";

function Project() {
  return (
    <>
      <section className="project">
        <NavBar />
        <h1 className="projects-header typing-text-projects">Projects</h1>
        <ProjectSection />
      </section>
      <ProjectHalographic />
      <ProjectDescription />
    </>
  );
}

export default Project;
