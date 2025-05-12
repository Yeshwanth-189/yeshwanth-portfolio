import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";

const RocketModel = () => {
  const { nodes, materials } = useGLTF("/Shuttle.glb"); // Place your model here
  const rocketRef = useRef();

  return (
    <mesh
      ref={rocketRef}
      geometry={nodes.rocket.geometry}
      material={materials.rocketMaterial}
    >
      {/* Adjust material to make it look like a hologram */}
      <meshBasicMaterial
        color="#66fcf1"
        emissive="#66fcf1"
        emissiveIntensity={0.6}
        wireframe
      />
    </mesh>
  );
};

const ProjectHalographic = () => {
  // eslint-disable-next-line no-unused-vars
  const [rotate, setRotate] = useState(true);

  return (
    <div
      style={{ height: "100vh", backgroundColor: "var(--color-background)" }}
    >
      <Canvas>
        {/* OrbitControls for interaction */}
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.4} color="var(--color-glow)" />
        <pointLight position={[10, 10, 10]} intensity={0.7} />

        {/* Rocket Model */}
        <RocketModel />
      </Canvas>
    </div>
  );
};

export default ProjectHalographic;
