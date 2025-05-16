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
        <ProjectSection />
      </section>
      <ProjectDescription />
    </>
  );
}

export default Project;
