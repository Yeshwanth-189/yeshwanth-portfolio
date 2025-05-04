import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import SunTexture from "../assets/Sun.png";
import { Stars } from "@react-three/drei";
import "../styles/SolarSystem.css";
import mercuryTexture from "../assets/Mercury.png";
import venusTexture from "../assets/Venus.png";
import earthTexture from "../assets/Earth.png";
import marsTexture from "../assets/Mars.png";
import jupiterTexture from "../assets/jupiter.png";
import saturnTexture from "../assets/Saturn.png";
import neptuneTexture from "../assets/Neptune.png";
import uranusTexture from "../assets/Uranus.png";
// SUN COMPONENT
function Sun() {
  const sunRef = useRef();
  const sunTexture = useTexture(SunTexture);
  useFrame(() => {
    sunRef.current.scale.x = 1 + Math.sin(Date.now() * 0.002) * 0.05;
    sunRef.current.scale.y = 1 + Math.sin(Date.now() * 0.002) * 0.05;
    sunRef.current.scale.z = 1 + Math.sin(Date.now() * 0.002) * 0.05;
  });

  return (
    <Sphere ref={sunRef} args={[1.5, 32, 32]}>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />

      <mesh ref={sunRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          map={sunTexture}
          emissiveMap={sunTexture}
          emissive="#ffffff"
          emissiveIntensity={1.8}
          metalness={0.1}
          roughness={0.5}
          toneMapped={true}
        />
      </mesh>
    </Sphere>
  );
}

// PLANET COMPONENT
function Planet({
  distance,
  speed,
  label,
  texturePath = null,
  size = 0.5,
  initialAngle = 0,
  hasRing = false,
}) {
  const planetRef = useRef();
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(texturePath);

  useFrame(({ clock }) => {
    if (!hovered && planetRef.current) {
      const elapsed = clock.getElapsedTime() * speed;
      const angle = elapsed + initialAngle;
      planetRef.current.position.x = Math.cos(angle) * distance;
      planetRef.current.position.z = Math.sin(angle) * distance;
      planetRef.current.position.y = distance * 0.05;
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
          map={texture} // 🎯 MAIN TEXTURE!
          metalness={0.2}
          roughness={0.8}
          emissive="#0b0c10"
          emissiveIntensity={0.3}
          toneMapped={true}
        />
      </Sphere>

      {hasRing && (
        <mesh rotation-x={Math.PI / 2}>
          <ringGeometry args={[size * 1.2, size * 1.6, 64]} />
          <meshBasicMaterial
            color="#ca9"
            side={THREE.DoubleSide}
            transparent
            opacity={0.7}
          />
        </mesh>
      )}

      {hovered && (
        <Html distanceFactor={10}>
          <div className="planet-label">{label}</div>
        </Html>
      )}
    </group>
  );
}

// ORBIT RING COMPONENT
function OrbitRing({ radius, height = 0 }) {
  const points = [];
  const segments = 64;

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * radius,
        height,
        Math.sin(theta) * radius
      ) // <-- Set Y = height!
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

        <Stars
          radius={100} // how far the stars are
          depth={50} // how deep (along Z axis)
          count={1000} // number of stars
          factor={2} // star size factor
          saturation={0} // no colors, just white
          fade // stars fade at the edges
        />

        {/* Sun */}
        <Sun />

        {/* Planets and Orbits */}
        <OrbitRing radius={5} height={5 * 0.05} />
        <Planet
          distance={5}
          speed={0.8}
          label="Front End"
          size={0.4}
          texturePath={mercuryTexture}
          initialAngle={0}
        />

        <OrbitRing radius={6.5} height={6.5 * 0.05} />
        <Planet
          distance={6.5}
          speed={0.6}
          label="UI/UX"
          texturePath={venusTexture}
          initialAngle={45}
        />

        <OrbitRing radius={8} height={8 * 0.05} />
        <Planet
          distance={8}
          speed={0.45}
          label="Back End"
          texturePath={earthTexture}
          initialAngle={127}
        />

        <OrbitRing radius={9.5} height={9.5 * 0.05} />
        <Planet
          distance={9.5}
          speed={0.4}
          label="API"
          texturePath={marsTexture}
          initialAngle={12}
        />

        <OrbitRing radius={11} height={11 * 0.05} />
        <Planet
          distance={11}
          speed={0.32}
          label="Agile"
          size={0.6}
          texturePath={jupiterTexture}
          initialAngle={67}
        />

        <OrbitRing radius={12.5} height={12.5 * 0.05} />
        <Planet
          distance={12.5}
          speed={0.25}
          label="CI/CD & Cloud"
          texturePath={saturnTexture}
          initialAngle={100}
          size={0.55}
          hasRing={true}
        />

        <OrbitRing radius={14} height={14 * 0.05} />
        <Planet
          distance={14}
          speed={0.12}
          label="Version Control"
          texturePath={uranusTexture}
          initialAngle={15}
        />

        <OrbitRing radius={15.5} height={15.5 * 0.05} />
        <Planet
          distance={15.5}
          speed={0.05}
          label="Proof of Concepts"
          texturePath={neptuneTexture}
          initialAngle={55}
        />
      </Canvas>
    </div>
  );
}

export default Profession;
