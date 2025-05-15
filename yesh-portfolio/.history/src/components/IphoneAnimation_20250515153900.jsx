// src/components/IphoneDoorFallback.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DoorSound from "../assets/Door.mp3";

const IphoneDoorFallback = () => {
  const audioRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Play audio
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});

    // Animate doors using left/right
    const opts = { duration: 2500, easing: "ease-in-out", fill: "forwards" };

    leftDoorRef.current?.animate([{ left: "0" }, { left: "-50vw" }], opts);

    rightDoorRef.current?.animate([{ right: "0" }, { right: "-50vw" }], opts);

    // Navigate to /overview
    setTimeout(() => navigate("/overview"), 2500);
  }, [navigate]);

  return (
    <div className="landing-overlay">
      <audio ref={audioRef} src={DoorSound} preload="auto" />

      <div
        ref={leftDoorRef}
        className="door left-door"
        style={{ left: "0", position: "absolute" }}
      />
      <div
        ref={rightDoorRef}
        className="door right-door"
        style={{ right: "0", position: "absolute" }}
      />
    </div>
  );
};

export default IphoneDoorFallback;
