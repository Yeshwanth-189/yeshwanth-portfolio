import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Project.css";
import ProjectSection from "./ProjectSection";

function Project() {
  return (
    <>
      <section className="profession-section">
        <NavBar />
        <ProjectSection />
      </section>
    </>
  );
}

export default Project;
