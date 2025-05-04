import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import SunTexture from "../assets/Sun.png";
import "../styles/Profession.css";

// SUN COMPONENT
function Sun() {
  const sunRef = useRef();
  const texture = useTexture(SunTexture);
  useFrame(() => {
    sunRef.current.scale.x = 1 + Math.sin(Date.now() * 0.002) * 0.05;
    sunRef.current.scale.y = 1 + Math.sin(Date.now() * 0.002) * 0.05;
    sunRef.current.scale.z = 1 + Math.sin(Date.now() * 0.002) * 0.05;
  });

  return (
    <Sphere ref={sunRef} args={[1.5, 32, 32]}>
      <meshStandardMaterial
        map={texture}
        emissive={"#ffffff"} // light orange-yellow
      />
    </Sphere>
  );
}

// PLANET COMPONENT
function Planet({
  distance,
  speed,
  label,
  size = 0.5,
  color = "#1f2833",
  initialAngle = 0,
}) {
  const planetRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!hovered && planetRef.current) {
      const elapsed = clock.getElapsedTime() * speed;
      const angle = elapsed + initialAngle;
      planetRef.current.position.x = Math.cos(angle) * distance;
      planetRef.current.position.z = Math.sin(angle) * distance;
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
          emissive={color}
          emissiveIntensity={0.6}
          color="#0b0c10"
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

// ORBIT RING COMPONENT
function OrbitRing({ radius }) {
  const points = [];
  const segments = 64;

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius)
    );
  }

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
    </line>
  );
}

// MAIN SOLAR SYSTEM
function Profession() {
  return (
    <div className="profession-wrapper">
      <Canvas camera={{ position: [0, 15, 30], fov: 48 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Sun */}
        <Sun />

        {/* Planets and Orbits */}
        <OrbitRing radius={5} />
        <Planet
          distance={5}
          speed={0.5}
          label="Front End"
          color="#66fcf1"
          initialAngle={0}
        />

        <OrbitRing radius={6.5} />
        <Planet
          distance={6.5}
          speed={0.45}
          label="UI/UX"
          color="#ff66c4"
          initialAngle={45}
        />

        <OrbitRing radius={8} />
        <Planet
          distance={8}
          speed={0.38}
          label="Back End"
          color="#ffcc66"
          initialAngle={127}
        />

        <OrbitRing radius={9.5} />
        <Planet
          distance={9.5}
          speed={0.35}
          label="API"
          color="#66ff66"
          initialAngle={12}
        />

        <OrbitRing radius={11} />
        <Planet
          distance={11}
          speed={0.32}
          label="Agile"
          color="#6699ff"
          initialAngle={67}
        />

        <OrbitRing radius={12.5} />
        <Planet
          distance={12.5}
          speed={0.25}
          label="CI/CD & Cloud"
          color="#ff6666"
          initialAngle={100}
        />

        <OrbitRing radius={14} />
        <Planet
          distance={14}
          speed={0.2}
          label="Version Control"
          color="#cc66ff"
          initialAngle={15}
        />

        <OrbitRing radius={15.5} />
        <Planet
          distance={15.5}
          speed={0.15}
          label="Proof of Concepts"
          color="#66ffff"
          initialAngle={55}
        />
      </Canvas>
    </div>
  );
}

export default Profession;
