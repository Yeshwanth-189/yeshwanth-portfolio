import React, { useState, useRef, useEffect } from "react";
import DoorSound from "../assets/Door.mp4";
import Overview from "./OverView";
import LeftDoor from "../assets/LeftDoor.png";
import RightDoor from "../assets/RightDoor.png";
import ScanImage from "../assets/Scan.png";
import "../styles/LandingSequence.css";

function useIsMobile() {
  const [m, setM] = useState(() => window.innerWidth <= 768);
  useEffect(() => {
    const h = () => setM(window.innerWidth <= 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}

export default function LandingSequence() {
  const isMobile = useIsMobile();
  const audioRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);

  const [audioReady, setAudioReady] = useState(false);
  const [doorsGone, setDoorsGone] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [glow, setGlow] = useState(false);

  /* mark audio ready */
  useEffect(() => {
    const a = audioRef.current;
    const ok = () => setAudioReady(true);
    a?.addEventListener("canplaythrough", ok);
    return () => a?.removeEventListener("canplaythrough", ok);
  }, []);

  /* click / tap on the scan button */
  const handleScan = () => {
    setGlow(true);
    setTimeout(() => {
      setGlow(false);
      startSequence();
    }, 2000); // matches glow CSS
  };

  /* actual door + sound sequence */
  const startSequence = () => {
    if (!audioReady) return;

    audioRef.current?.play().catch(() => {});
    /* ensure the browser has painted once before mutating style */
    requestAnimationFrame(() => {
      leftDoorRef.current.style.transform = "translate3d(-100%,0,0)";
      rightDoorRef.current.style.transform = "translate3d( 100%,0,0)";
    });

    /* doors finish after 2.5 s -> hide them & reveal content */
    setTimeout(() => {
      setDoorsGone(true);
      setShowOverview(true);
    }, 2500);
  };

  return (
    <div className="landing-root">
      {showOverview && <Overview />}

      <audio ref={audioRef} src={DoorSound} preload="auto" playsInline />

      {!doorsGone && (
        <>
          {isMobile ? (
            <>
              <div ref={leftDoorRef} className="door left-door" />
              <div ref={rightDoorRef} className="door right-door" />
            </>
          ) : (
            <>
              <img
                ref={leftDoorRef}
                src={LeftDoor}
                alt=""
                className="door left-door"
              />
              <img
                ref={rightDoorRef}
                src={RightDoor}
                alt=""
                className="door right-door"
              />
            </>
          )}
        </>
      )}

      {/* scan button */}
      {!doorsGone && (
        <button
          onClick={handleScan}
          className={`start-image-wrapper ${glow ? "draw-border" : ""}`}
          style={{ background: "transparent", border: "none", padding: 0 }}
        >
          <img src={ScanImage} alt="Access Portfolio" className="start-image" />
        </button>
      )}
    </div>
  );
}
