import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Project.css";
import ProjectSection from "./ProjectSection";
import ProjectHalographic from "./ProjectHalographic";
import ProjectDescription from "./ProjectDescription";

function Project() {
  return (
    <>
      <NavBar />
      <ProjectHalographic />
      <section className="project">
        <h1 className="projects-header typing-text-projects">Projects</h1>
        <ProjectSection />
      </section>
      <ProjectDescription />
    </>
  );
}

export default Project;
