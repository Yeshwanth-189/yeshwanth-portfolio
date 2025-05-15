import React, { useState, useRef, useEffect } from "react";
import DoorSound from "../assets/Door.mp4"; // Use .mp3 or .wav for faster decoding
import Overview from "./OverView";
import LeftDoorImage from "../assets/LeftDoor.png";
import RightDoorImage from "../assets/RightDoor.png";
import ScanImage from "../assets/Scan.png";
import "../styles/LandingSequence.css";
import { Scan } from "lucide-react";

function LandingSequence() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);
  const [start, setStart] = useState(false);
  const [hideDoors, setHideDoors] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [glow, setGlow] = useState(false);

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

  const handleImageClick = () => {
    setGlow(true); // Start border animation
    setTimeout(() => {
      setGlow(false);
      handleStart(); // Now call main logic (play audio, animate doors, etc.)
    }, 2000); // 1s duration must match CSS animation
  };

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
      setHideDoors(true);
      navigate("/overview"); // Hide door overlays after animation
    }, 3000); // Sync with CSS animation duration
  };

  return (
    <div className="landing-root">
      {showOverview && <Overview />}

      <div className="landing-overlay">
        <audio ref={audioRef} src={DoorSound} preload="auto" />

        {!start && (
          <div
            className={`start-image-wrapper ${glow ? "draw-border" : ""}`}
            onClick={handleImageClick}
          >
            <img
              src={ScanImage}
              alt="Access Portfolio"
              className="start-image"
            />
          </div>
        )}

        {!hideDoors && (
          <>
            {isMobile ? (
              <>
                <div
                  className={`door left-door ${start ? "animate-left" : ""}`}
                  style={{
                    backgroundColor: "var(--color-background)",
                    border: "2px solid var(--color-primary)",
                  }}
                />
                <div
                  className={`door right-door ${start ? "animate-right" : ""}`}
                  style={{
                    backgroundColor: "var(--color-background)",
                    border: "2px solid var(--color-primary)",
                  }}
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
