import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DoorSound from "../assets/Door.mp4"; // Use actual audio format like .mp3 or .wav
import "../styles/LandingSequence.css"; // Your door animation styles

function LandingSequence() {
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
    }, 3000); // Match animation duration
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

export default LandingSequence;
