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
        <SkillSection />
        <SkillRating />
      </section>
    </>
  );
}

export default Project;
