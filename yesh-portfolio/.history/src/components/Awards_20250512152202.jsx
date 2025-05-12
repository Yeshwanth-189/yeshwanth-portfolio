import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Awards.css";
import AwardSection from "../components/AwardSection";

function Awards() {
  return (
    <>
      <section className="awards">
        <NavBar />
        <h1 className="awards-header typing-text-awards">
          Certifications & Awards
        </h1>
        <AwardSection />
      </section>
    </>
  );
}

export default Awards;
