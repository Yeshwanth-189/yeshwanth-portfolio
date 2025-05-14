import React, { useState, useRef, useEffect } from "react";
import DoorSound from "../assets/Door.mp4"; // Use .mp3 or .wav for faster decoding
import Overview from "./OverView";
import LeftDoorImage from "../assets/LeftDoor.png";
import RightDoorImage from "../assets/RightDoor.png";
import "../styles/LandingSequence.css";

function LandingSequence() {
  const isMobile = window.innerWidth <= 768;
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);
  const [start, setStart] = useState(false);
  const [hideDoors, setHideDoors] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  // Ensure audio is loaded before allowing start
  useEffect(() => {
    const audio = audioRef.current;
    const onReady = () => setAudioReady(true);

    if (audio) {
      audio.addEventListener("canplaythrough", onReady);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("canplaythrough", onReady);
      }
    };
  }, []);

  const handleStart = () => {
    if (!audioReady) return; // Don't proceed until audio is ready

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    audioRef.current
      ?.play()
      .catch((err) => console.log("Playback failed:", err));

    setStart(true); // Start door animation
    setShowOverview(true); // Start rendering overview

    setTimeout(() => {
      setHideDoors(true); // Hide door overlays after animation
    }, 3000); // Sync with CSS animation duration
  };

  return (
    <div className="landing-root">
      {showOverview && <Overview />}

      <div className="landing-overlay">
        <audio ref={audioRef} src={DoorSound} preload="auto" />

        {!start && (
          <button
            className="start-button"
            onClick={handleStart}
            disabled={!audioReady}
            title={!audioReady ? "Loading..." : "Click to enter"}
          >
            Enter Portfolio
          </button>
        )}

        {!hideDoors && (
          <>
            {isMobile ? (
              <>
                <div
                  className={`door left-door ${start ? "animate-left" : ""}`}
                  style={{ backgroundColor: "var(--color-surface)" }}
                />
                <div
                  className={`door right-door ${start ? "animate-right" : ""}`}
                  style={{ backgroundColor: "var(--color-surface)" }}
                />
              </>
            ) : (
              <>
                <img
                  src={LeftDoorImage}
                  alt="Left Door"
                  className={`door left-door ${start ? "animate-left" : ""}`}
                />
                <img
                  src={RightDoorImage}
                  alt="Right Door"
                  className={`door right-door ${start ? "animate-right" : ""}`}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default LandingSequence;
