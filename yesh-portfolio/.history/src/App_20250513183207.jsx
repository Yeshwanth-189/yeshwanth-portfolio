import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingSequence.css";
import DoorSound from "./assets/Door.mp4"; // should ideally be an audio file, not .mp4

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
    </div>
  );
}
export default App;
