import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Awards.css";
import AwardSection from "../components/AwardSection";

function Awards() {
  return (
    <>
      <section className="awards">
        <NavBar />

        <AwardSection />
      </section>
    </>
  );
}

export default Awards;
