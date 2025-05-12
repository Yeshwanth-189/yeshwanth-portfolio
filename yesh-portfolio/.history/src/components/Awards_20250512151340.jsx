import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Awards.css";
import AwardsSection from "../components/AwardsSection";

function Awards() {
  return (
    <>
      <section className="awards">
        <NavBar />
        <h1 className="awards-header typing-text-awards">Awards</h1>
        <AwardsSection />
      </section>
    </>
  );
}

export default Awards;
