// ProjectHalographic.jsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./ProjectHalographic.css";

const OrbitingMoon = ({ radius, speed, tilt }) => {
  const ref = useRef();
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAngle((a) => a + speed), 1000 / 60);
    return () => clearInterval(id);
  }, [speed]);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });

  const rad = THREE.MathUtils.degToRad(angle);
  const x = radius * Math.cos(rad) * Math.cos(tilt);
  const y = radius * Math.sin(rad) * Math.sin(tilt);
  const z = radius * Math.cos(rad) * Math.sin(tilt);

  return (
    <mesh ref={ref} position={[x, y, z]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshBasicMaterial
        wireframe
        linewidth={2}
        color="#66fcf1"
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const RotatingPlanet = () => {
  const ref = useRef();

  // animate emissiveIntensity for glow
  useFrame(() => {
    if (ref.current) {
      const t = Math.sin(Date.now() / 1000) * 0.5 + 0.5; // 0 → 1
      ref.current.material.emissiveIntensity = 0.5 + 0.5 * t; // 0.5 → 1.0
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        wireframe
        color="#000000"
        emissive="#66fcf1"
        emissiveIntensity={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const PulsatingLight = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.intensity = 0.7 + Math.sin(Date.now() / 500) * 0.3;
    }
  });
  return <pointLight ref={ref} position={[0, -5, 0]} color="#66fcf1" />;
};

const ProjectHalographic = () => (
  <div className="project-container">
    <Canvas>
      <OrbitControls enablePan={false} enableZoom={false} />
      <ambientLight intensity={0.4} color="#66fcf1" />
      <PulsatingLight />
      <RotatingPlanet />
      <OrbitingMoon radius={3} speed={1} tilt={Math.PI / 4} />
      <OrbitingMoon radius={3} speed={0.8} tilt={-Math.PI / 4} />
    </Canvas>
  </div>
);

export default ProjectHalographic;
