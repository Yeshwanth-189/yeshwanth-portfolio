import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Overview from "./components/OverView";
import Profession from "./components/Profession";
import Project from "./components/Project";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import LandingSequence from "./components/LandingSequence"; // New

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingSequence />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/profession" element={<Profession />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Awards />} />
      </Routes>
    </Router>
  );
}

export default App;
