// src/components/EducationSection.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  useScroll,
  Html,
  Sphere,
  OrbitControls,
  Octahedron,
} from "@react-three/drei";
import "./EducationSection.css";

// your stops data
const stops = [
  {
    key: "pre-u",
    label: "Pre-University",
    details: "High-school at XYZ Academy, honors in Math & Physics.",
    offset: 0.15,
    y: -4,
  },
  {
    key: "bachelors",
    label: "Bachelors Degree",
    details: "B.Sc. in Computer Science at VIT.",
    offset: 0.33,
    y: -1,
  },
  {
    key: "internship",
    label: "Techie Aid Internship",
    details: "Built patient-engagement features in React & Node.js.",
    offset: 0.5,
    y: 2,
  },
  {
    key: "software-eng",
    label: "Software Engineer",
    details:
      "Backend services in FastAPI & AWS at Roostify; improved CI/CD pipeline.",
    offset: 0.67,
    y: 5,
  },
  {
    key: "masters",
    label: "Masters Degree",
    details: "M.S. in CS at Swansea University (Java Spring Boot & React).",
    offset: 0.85,
    y: 8,
  },
];

// simple rocket built from primitives
function Rocket({ rocketRef }) {
  return (
    <group ref={rocketRef}>
      <cylinder args={[0.2, 0.3, 1.5, 32]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#ff4e50" />
      </cylinder>
      <cone args={[0.3, 0.5, 32]} position={[0.75, 0, 0]}>
        <meshStandardMaterial color="#fff" />
      </cone>
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

// this runs *inside* the Canvas so hooks work correctly
function Scene() {
  const scroll = useScroll();
  const rocketRef = useRef();
  const popupRefs = useRef([]);

  useFrame(() => {
    const t = scroll.offset;
    // rocket y = interpolate from first stop to just above last
    const minY = stops[0].y;
    const maxY = stops[stops.length - 1].y + 2;
    rocketRef.current.position.y = minY + (maxY - minY) * t;

    // fade in/out each popup
    stops.forEach((stop, i) => {
      const el = popupRefs.current[i];
      if (!el) return;
      const d = Math.abs(t - stop.offset);
      el.style.opacity = Math.max(0, 1 - d * 20);
    });
  });

  return (
    <>
      <Rocket rocketRef={rocketRef} />

      {stops.map((stop, i) => (
        <Sphere key={stop.key} args={[0.6, 32, 32]} position={[0, stop.y, 0]}>
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

      {/* Top "star" as an octahedron */}
      <Octahedron
        args={[0.8, 0]}
        position={[0, stops[stops.length - 1].y + 3, 0]}
      >
        <meshStandardMaterial color="#ffd700" />
      </Octahedron>
      <Html
        className="edu-popup"
        position={[1.5, stops[stops.length - 1].y + 3, 0]}
        center
      >
        <div className="edu-popup-content">
          <h3>🚀 Mission Complete!</h3>
          <p>Master’s Degree achieved</p>
        </div>
      </Html>
    </>
  );
}

export default function EducationSection() {
  return (
    <div className="edu-canvas-container">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ScrollControls pages={2} damping={4}>
          {/* Scene lives *inside* ScrollControls/Canvas */}
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
