import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DoorSound from "../assets/Door.mp4"; // Use actual audio format
import LeftDoorImage from "../assets/LeftDoor.png";
import RightDoorImage from "../assets/RightDoor.png";
import "../styles/LandingSequence.css";

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
    }, 3000); // Match animation
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
          <img src={LeftDoorImage} alt="Left Door" className="door left-door" />
          <img
            src={RightDoorImage}
            alt="Right Door"
            className="door right-door"
          />
        </>
      )}
    </div>
  );
}

export default LandingSequence;
