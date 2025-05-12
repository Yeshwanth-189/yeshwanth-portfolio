// src/components/EducationSection.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  useScroll,
  Html,
  Sphere,
  Star as DreiStar,
  OrbitControls,
} from "@react-three/drei";
import "../styles/EducationSection.css";

// Simple rocket made from primitives; swap this out for your GLTF if you like
function Rocket({ rocketRef }) {
  return (
    <group ref={rocketRef}>
      {/* body */}
      <cylinder args={[0.2, 0.3, 1.5, 32]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#ff4e50" />
      </cylinder>
      {/* nose */}
      <cone args={[0.3, 0.5, 32]} position={[0.75, 0, 0]}>
        <meshStandardMaterial color="#fff" />
      </cone>
      {/* fins */}
      <plane
        args={[0.3, 0.2]}
        position={[-0.5, 0.2, 0]}
        rotation={[0, 0, Math.PI / 4]}
      >
        <meshStandardMaterial color="#333" />
      </plane>
      <plane
        args={[0.3, 0.2]}
        position={[-0.5, -0.2, 0]}
        rotation={[0, 0, -Math.PI / 4]}
      >
        <meshStandardMaterial color="#333" />
      </plane>
    </group>
  );
}

export default function EducationSection() {
  // scroll.offset goes 0 → 1 over the ScrollControls pages
  const scroll = useScroll();
  const rocketRef = useRef();
  const popupRefs = useRef([]);

  // define your stops here
  const stops = [
    {
      key: "pre-u",
      label: "Pre-University",
      details:
        "Completed high-school at XYZ Academy with honors in Math & Physics.",
      offset: 0.15,
      y: -4,
    },
    {
      key: "bachelors",
      label: "Bachelors Degree",
      details: "B.Sc. in Computer Science at Vellore Institute of Technology.",
      offset: 0.33,
      y: -1,
    },
    {
      key: "internship",
      label: "Techie Aid Internship",
      details:
        "Full-stack intern building patient-engagement features in React & Node.js.",
      offset: 0.5,
      y: 2,
    },
    {
      key: "software-eng",
      label: "Software Engineer",
      details:
        "Backend services in FastAPI & AWS at Roostify, improving CI/CD pipelines.",
      offset: 0.67,
      y: 5,
    },
    {
      key: "masters",
      label: "Masters Degree",
      details:
        "M.S. in CS at Swansea University, focused on Java Spring Boot & ReactJS.",
      offset: 0.85,
      y: 8,
    },
  ];

  useFrame(() => {
    const t = scroll.offset; // 0–1
    // map t ∈ [0,1] → y ∈ [stops[0].y, starY]
    const minY = stops[0].y;
    const maxY = stops[stops.length - 1].y + 2;
    rocketRef.current.position.y = minY + (maxY - minY) * t;

    // for each popup, fade in when scroll.offset ≈ stop.offset
    stops.forEach((stop, i) => {
      const popupEl = popupRefs.current[i];
      if (!popupEl) return;
      const d = Math.abs(t - stop.offset);
      // within 0.05 of the stop: fully visible; else fade out
      const alpha = Math.max(0, 1 - d * 20);
      popupEl.style.opacity = alpha;
    });
  });

  return (
    <div className="edu-canvas-container">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ScrollControls pages={2} damping={4}>
          <OrbitControls enabled={false} />
          <Rocket rocketRef={rocketRef} />

          {stops.map((stop, i) => (
            <Sphere
              key={stop.key}
              args={[0.6, 32, 32]}
              position={[0, stop.y, 0]}
            >
              <meshStandardMaterial color="#6ba5ff" />
              <Html
                className="edu-popup"
                position={[1.2, 0, 0]}
                center
                ref={(el) => (popupRefs.current[i] = el)}
              >
                <div className="edu-popup-content">
                  <h3>{stop.label}</h3>
                  <p>{stop.details}</p>
                </div>
              </Html>
            </Sphere>
          ))}

          {/* Top Star */}
          <mesh position={[0, stops[stops.length - 1].y + 3, 0]}>
            <DreiStar args={[0.8, 0.4, 5]} />
            <Html position={[1.5, 0, 0]} center>
              <div className="edu-popup-content">
                <h3>🚀 Mission Complete!</h3>
                <p>Master’s Degree achieved</p>
              </div>
            </Html>
          </mesh>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
