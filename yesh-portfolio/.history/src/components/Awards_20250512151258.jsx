import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Awards.css";
import AwardsSection from "../components/AwardsSection";

function Awards() {
  return (
    <>
      <section className="education">
        <NavBar />
        <h1 className="education-header typing-text-education">Awards</h1>
        <AwardsSection />
      </section>
    </>
  );
}

export default Awards;
