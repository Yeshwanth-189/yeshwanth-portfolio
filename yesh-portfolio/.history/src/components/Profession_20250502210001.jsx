import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Html } from "@react-three/drei";
import "../styles/Profession.css"; // We'll create this too

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
function Planet({ distance = 5, speed = 0.5, label }) {
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
        args={[0.3, 32, 32]}
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

// MAIN PROFESSION SOLAR SYSTEM
function Profession() {
  return (
    <div className="profession-wrapper">
      <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Sun />
        {/* Only 1 planet first, we'll add all 8 later */}
        <Planet distance={5} speed={0.3} label="Front End" />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

export default Profession;
