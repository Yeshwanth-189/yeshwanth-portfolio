import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Overview from "./components/OverView";
import Profession from "./components/Profession";
import Project from "./components/Project";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Door from "./assets/Door.mp4";

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

function LandingSequence() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/overview");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app">
      <div className="landing-final">
        <h1 className="crash-header">SPACESHIP CRASHED</h1>

        <div className="partner-status">
          <div className="heartbeat-wave" />
          <span className="partner-text">Crewmate: Yeshwanth Nanjegowda</span>
        </div>

        <p className="gathering-info">
          Gathering crewmate info...
          <span className="spinner" />
        </p>
      </div>
    </div>
  );
}

export default App;
