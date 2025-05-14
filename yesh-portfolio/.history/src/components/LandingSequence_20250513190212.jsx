import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DoorSound from "../assets/Door.mp3"; // Use MP3 or WAV
import "../styles/LandingSequence.css";

function LandingSequence() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    audioRef.current?.play().catch((err) => console.log("Audio blocked:", err));
    setStart(true);
    setTimeout(() => {
      navigate("/overview");
    }, 3000); // Match door animation duration
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
          <div className="door door-top" />
          <div className="door door-left" />
          <div className="door door-right" />
        </>
      )}
    </div>
  );
}

export default LandingSequence;
