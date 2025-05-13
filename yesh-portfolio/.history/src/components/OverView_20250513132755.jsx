import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Experience from "../components/Experience";
import Communications from "../components/Communications";

function Overview() {
  return (
    <>
      <NavBar />
      <Hero />
      <h1 className="experience-header">Experience</h1>
      <Experience />
      <h1 className="communications-header">Voyage</h1>
      <Communications />
    </>
  );
}

export default Overview;
