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
      <Experience />
      <Communications />
    </>
  );
}

export default Overview;
