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
        <button class="trigger-button" onClick={handleStart}>
          Open Doors
        </button>
      )}

      {start && (
        <>
          <div class="door-container">
            <div class="door top-door"></div>
            <div class="door left-door"></div>
            <div class="door right-door"></div>
            <button class="trigger-button" onclick="openDoors()">
              Open Doors
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LandingSequence;
