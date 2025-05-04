import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import "../styles/Profession.css";

// SUN COMPONENT
function Sun() {
  const sunRef = useRef();

  useFrame(() => {
    sunRef.current.scale.x = 1 + Math.sin(Date.now() * 0.002) * 0.05;
    sunRef.current.scale.y = 1 + Math.sin(Date.now() * 0.002) * 0.05;
    sunRef.current.scale.z = 1 + Math.sin(Date.now() * 0.002) * 0.05;
  });

  return (
    <Sphere ref={sunRef} args={[1.5, 32, 32]}>
      <meshStandardMaterial
        emissive="#66fcf1"
        emissiveIntensity={1}
        color="#ffffff"
        toneMapped={false}
      />
    </Sphere>
  );
}

// PLANET COMPONENT
function Planet({ distance, speed, label, size = 0.3 }) {
  const planetRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!hovered) {
      const elapsed = clock.getElapsedTime() * speed;
      planetRef.current.position.x = Math.cos(elapsed) * distance;
      planetRef.current.position.z = Math.sin(elapsed) * distance;
    }
  });

  return (
    <group ref={planetRef}>
      <Sphere
        args={[size, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          emissive="#45a29e"
          emissiveIntensity={0.5}
          color="#1f2833"
          toneMapped={false}
        />
      </Sphere>

      {hovered && (
        <Html distanceFactor={10}>
          <div className="planet-label">{label}</div>
        </Html>
      )}
    </group>
  );
}

// SOLAR SYSTEM SETUP
function Profession() {
  return (
    <div className="profession-wrapper">
      <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Sun in center */}
        <Sun />

        {/* 8 Planets */}
        <Planet distance={5} speed={0.3} label="Front End" />
        <Planet distance={6.5} speed={0.25} label="UI/UX" />
        <Planet distance={8} speed={0.2} label="Back End" />
        <Planet distance={9.5} speed={0.18} label="API" />
        <Planet distance={11} speed={0.15} label="Agile" />
        <Planet distance={12.5} speed={0.12} label="CI/CD & Cloud" />
        <Planet distance={14} speed={0.1} label="Version Control" />
        <Planet distance={15.5} speed={0.08} label="Documentation" />

        {/* No OrbitControls (auto-rotate solar system) */}
      </Canvas>
    </div>
  );
}

export default Profession;
