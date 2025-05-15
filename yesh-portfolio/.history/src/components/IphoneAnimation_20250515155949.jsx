import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoorSound from "../assets/Door.mp3";
import "../styles/IphoneAnimation.css";

const IphoneDoorFallback = () => {
  const audioRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Play audio on mount
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});

    // Start animation
    setAnimate(true);

    // Navigate after animation completes
    const timeout = setTimeout(() => {
      navigate("/overview");
    }, 2500);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="landing-overlay">
      <audio ref={audioRef} src={DoorSound} preload="auto" />
      <div
        ref={leftDoorRef}
        className={`iphone-door left-door ${animate ? "animate" : ""}`}
      />
      <div
        ref={rightDoorRef}
        className={`iphone-door right-door ${animate ? "animate" : ""}`}
      />
    </div>
  );
};

export default IphoneDoorFallback;
