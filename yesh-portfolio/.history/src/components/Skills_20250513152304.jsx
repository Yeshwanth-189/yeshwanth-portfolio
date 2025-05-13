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
        <h1 className="stats-header">Stats</h1>
        <SkillRating />
      </section>
    </>
  );
}

export default Project;
