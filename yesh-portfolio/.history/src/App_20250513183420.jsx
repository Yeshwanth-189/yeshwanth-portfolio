import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import DoorSound from "./assets/Door.mp4";

function App() {
  return (
    
  );
}
function App() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    audioRef.current
      ?.play()
      .catch((err) => console.log("Autoplay blocked:", err));
    setStart(true);
    setTimeout(() => {
      navigate("/overview");
    }, 3000); // match animation duration
  };

  return (
    <><Router>
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
    <div className="landing-container">
      <audio ref={audioRef} src={DoorSound} />

      {!start && (
        <button className="start-button" onClick={handleStart}>
          Enter Portfolio
        </button>
      )}

      {start && (
        <>
          <div className="door left-door" />
          <div className="door right-door" />
        </>
      )}
    </div></>
    
  );
}
export default App;
