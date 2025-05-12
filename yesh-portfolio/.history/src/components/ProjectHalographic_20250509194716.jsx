import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "../styles/ProjectHalographic.css"; // your CSS animations

/** Moons orbiting on a tilted path + self-rotation */
const OrbitingMoon = ({ radius, speed, tilt }) => {
  const ref = useRef();
  const [angle, setAngle] = useState(0);

  // advance orbit angle
  useEffect(() => {
    const id = setInterval(() => setAngle((a) => a + speed), 1000 / 60);
    return () => clearInterval(id);
  }, [speed]);

  // self-rotate
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
      <meshBasicMaterial wireframe linewidth={2} color="#66fcf1" />
    </mesh>
  );
};

/** Planet with continuous Y-axis rotation */
const RotatingPlanet = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={ref} className="glowing-wireframe">
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial wireframe linewidth={2} color="#66fcf1" />
    </mesh>
  );
};

/** Pulsating point-light under the planet */
const PulsatingLight = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      // create a smooth pulse between 0.4 and 1.0
      ref.current.intensity = 0.7 + Math.sin(Date.now() / 500) * 0.3;
    }
  });
  return <pointLight ref={ref} position={[0, -5, 0]} color="#66fcf1" />;
};

const ProjectHalographic = () => {
  return (
    <div className="project-container">
      <Canvas>
        <OrbitControls enablePan={false} enableZoom={false} />

        {/* ambient fill */}
        <ambientLight intensity={0.4} color="#66fcf1" />

        {/* dynamic device-light from below */}
        <PulsatingLight />

        {/* the rotating holographic planet */}
        <RotatingPlanet />

        {/* two diagonal orbiting moons */}
        <OrbitingMoon radius={3} speed={1} tilt={Math.PI / 4} />
        <OrbitingMoon radius={3} speed={0.8} tilt={-Math.PI / 4} />
      </Canvas>
    </div>
  );
};

export default ProjectHalographic;
