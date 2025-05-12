import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Skills.css";
import SkillSection from "../components/SkillSection";
import SkillRating from "./SkillRating";

function Project() {
  return (
    <>
      <section className="skills">
        <NavBar />
        <h1 className="skills-header typing-text-skills">Skills</h1>
        <SkillSection />
        <SkillRating />
      </section>
    </>
  );
}

export default Project;
