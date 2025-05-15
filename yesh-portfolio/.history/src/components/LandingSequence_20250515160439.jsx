import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoorSound from "../assets/Door.mp4";
import Overview from "./OverView";
import LeftDoorImage from "../assets/LeftDoor.png";
import RightDoorImage from "../assets/RightDoor.png";
import ScanImage from "../assets/Scan.png";
import "../styles/LandingSequence.css";
import { Scan } from "lucide-react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function isIPhone() {
  return /iPhone/.test(navigator.userAgent) && !window.MSStream;
}

function LandingSequence() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);
  const [start, setStart] = useState(false);
  const [hideDoors, setHideDoors] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [glow, setGlow] = useState(false);

  // iPhone shortcut
  // useEffect(() => {
  //   if (isIPhone()) {
  //     navigate("/overview");
  //   }
  // }, [navigate]);

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
    setGlow(true);

    setTimeout(() => {
      setGlow(false);
      // All other devices use normal CSS + state animation
      handleStart();
    }, 2000); // match glow animation timing
  };

  const handleStart = () => {
    if (!audioReady) return;

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }

    audioRef.current
      ?.play()
      .catch((err) => console.log("Playback failed:", err));

    setStart(true);
    setShowOverview(true);

    setTimeout(() => {
      setHideDoors(true);
    }, 3000);
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
            {isIPhone() ? (
              <>
                <IphoneAnimation />
              </>
            ) : null}
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
