import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Project.css";
import ProjectSection from "./ProjectSection";

function Project() {
  return (
    <>
      <section className="project-section">
        <NavBar />
        <h1 className="profession-header typing-text-profession">
          Software Engineer, BETSOL
        </h1>
        <ProjectSection />
      </section>
    </>
  );
}

export default Project;
