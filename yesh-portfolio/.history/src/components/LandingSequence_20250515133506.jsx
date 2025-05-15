import React, { useState, useRef, useEffect } from "react";
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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function LandingSequence() {
  const isMobile = useIsMobile();
  const audioRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);
  const [start, setStart] = useState(false);
  const [hideDoors, setHideDoors] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [glow, setGlow] = useState(false);

  // Ensure audio is loaded before allowing start
  useEffect(() => {
    const audio = audioRef.current;
    const onReady = () => setAudioReady(true);
    if (audio) audio.addEventListener("canplaythrough", onReady);
    return () => audio?.removeEventListener("canplaythrough", onReady);
  }, []);

  // Touchstart handler for iOS devices
  useEffect(() => {
    const img = document.querySelector(".start-image");
    const handleTouch = (e) => {
      e.preventDefault(); // Necessary for iOS
      handleImageClick(); // Trigger same logic as onClick
    };

    if (img) {
      img.addEventListener("touchstart", handleTouch, { passive: false });
    }
    return () => {
      if (img) {
        img.removeEventListener("touchstart", handleTouch);
      }
    };
  }, []);

  const handleImageClick = () => {
    setGlow(true); // Start border animation
    setTimeout(() => {
      setGlow(false);
      handleStart(); // Call main logic after glow
    }, 2000); // Match CSS glow duration
  };

  const handleStart = () => {
    if (!audioReady) return;

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((err) => console.log("Audio playback failed:", err));
    }

    const opts = { duration: 2500, easing: "ease-in-out", fill: "forwards" };

    leftDoorRef.current?.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-100%)" }],
      opts
    );
    rightDoorRef.current?.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
      opts
    );

    setShowOverview(true); // Show content after doors
    setTimeout(() => {
      setHideDoors(true); // Hide doors after animation
    }, 3000);
  };

  return (
    <div className="landing-root">
      {showOverview && <Overview />}

      <div className="landing-overlay">
        <audio ref={audioRef} src={DoorSound} preload="auto" playsInline />

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
    <div  ref={leftDoorRef}  className="door left-door"  />
    <div  ref={rightDoorRef} className="door right-door" />
  </>
) : (
  <>
    <img ref={leftDoorRef}  src={LeftDoorImage}  className="door left-door" />
    <img ref={rightDoorRef} src={RightDoorImage} className="door right-door" />
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
