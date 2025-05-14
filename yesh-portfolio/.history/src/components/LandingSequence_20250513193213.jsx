import React, { useState, useRef, useEffect } from "react";
import DoorSound from "../assets/Door.mp4"; // Use .mp3 or .wav for faster decoding
import Overview from "./OverView";
import "../styles/LandingSequence.css";

function LandingSequence() {
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);
  const [start, setStart] = useState(false);
  const [hideDoors, setHideDoors] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  // Ensure audio is loaded before allowing start
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const onReady = () => setAudioReady(true);
      audio.addEventListener("canplaythrough", onReady);
      return () => audio.removeEventListener("canplaythrough", onReady);
    }
  }, []);

  const handleStart = () => {
    if (!audioReady) return; // Don't proceed until audio is ready

    audioRef.current?.currentTime = 0;
    audioRef.current?.play().catch((err) => console.log("Playback failed:", err));

    setStart(true);           // Start door animation
    setShowOverview(true);    // Start rendering overview

    setTimeout(() => {
      setHideDoors(true);     // Hide door overlays after animation
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

        {start && !hideDoors && (
          <>
            <div className="door left-door" />
            <div className="door right-door" />
          </>
        )}
      </div>
    </div>
  );
}

export default LandingSequence;
