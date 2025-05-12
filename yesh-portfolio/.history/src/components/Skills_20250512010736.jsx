import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Skills.css";
import SkillSection from "../components/SkillSection";

function Project() {
  return (
    <>
      <section className="skills">
        <NavBar />
        <h1 className="skills-header typing-text-skills">Skills</h1>
        <SkillSection />
      </section>
    </>
  );
}

export default Project;
