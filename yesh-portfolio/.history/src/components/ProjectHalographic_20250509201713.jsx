// ProjectHalographic.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// A tiny wrapper to load your .glb
function RocketModel() {
  // Pass the URL (public folder) or import your .glb file directly
  const { scene } = useGLTF("/Shuttle.glb");
  return <primitive object={scene} />;
}

export default function ProjectHalographic() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      {/* Basic lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />

      {/* Suspend until model is loaded */}
      <Suspense fallback={null}>
        <RocketModel />
      </Suspense>

      {/* Optional: orbit controls for debugging */}
      <OrbitControls />
    </Canvas>
  );
}
