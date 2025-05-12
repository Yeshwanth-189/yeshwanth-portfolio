import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import "./ProjectHalographic.css"; // Import the CSS file

const RocketModel = () => {
  const rocketRef = useRef();

  // Define the shape of the rocket (wireframe-like)
  const coneGeometry = new THREE.ConeGeometry(1, 4, 32);
  const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 5, 32);

  return (
    <>
      {/* Rocket Body (cylinder part) */}
      <mesh ref={rocketRef} geometry={cylinderGeometry} position={[0, 0, 0]}>
        <lineBasicMaterial color="#66fcf1" linewidth={2} />
      </mesh>

      {/* Rocket Tip (cone part) */}
      <mesh geometry={coneGeometry} position={[0, 3, 0]}>
        <lineBasicMaterial color="#66fcf1" linewidth={2} />
      </mesh>

      {/* Rocket's exhaust (cylinder part at the bottom) */}
      <mesh
        geometry={cylinderGeometry}
        position={[0, -3, 0]}
        scale={[0.8, 2, 0.8]}
      >
        <lineBasicMaterial color="#66fcf1" linewidth={2} />
      </mesh>
    </>
  );
};

const ProjectHalographic = () => {
  return (
    <div className="project-holo-container">
      <Canvas>
        {/* OrbitControls for interaction */}
        <OrbitControls enableZoom={false} enablePan={false} />

        {/* Lighting */}
        <ambientLight intensity={0.4} color="var(--color-glow)" />
        <pointLight
          position={[10, 10, 10]}
          intensity={0.7}
          color="var(--color-glow)"
        />

        {/* Rocket Model */}
        <RocketModel />
      </Canvas>
    </div>
  );
};

export default ProjectHalographic;
