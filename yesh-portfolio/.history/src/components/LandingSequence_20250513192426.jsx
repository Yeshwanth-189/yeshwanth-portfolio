import React, { useState, useRef } from "react";
import DoorSound from "../assets/Door.mp4"; // Use .mp3 or .wav
import Overview from "./Overview";
import "../styles/LandingSequence.css";

function LandingSequence() {
  const audioRef = useRef(null);
  const [start, setStart] = useState(false);
  const [hideDoors, setHideDoors] = useState(false);

  const handleStart = () => {
    audioRef.current
      ?.play()
      .catch((err) => console.log("Autoplay blocked:", err));
    setStart(true);
    setTimeout(() => {
      setHideDoors(true); // Hide door animation after it completes
    }, 3000);
  };

  return (
    <div className="landing-container">
      <audio ref={audioRef} src={DoorSound} />

      <Overview />

      {!start && (
        <button className="start-button" onClick={handleStart}>
          Enter Portfolio
        </button>
      )}

      {start && !hideDoors && (
        <>
          <div className="door left-door" />
          <div className="door right-door" />
        </>
      )}
    </div>
  );
}

export default LandingSequence;
