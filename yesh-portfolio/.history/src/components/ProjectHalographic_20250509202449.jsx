import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./ProjectHalographic.css";

function RocketModel({ scale = 1 }) {
  const { scene } = useGLTF("/Shuttle.glb");

  // enable wireframe on every mesh
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.wireframe = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={[scale, scale, scale]} />;
}

export default function ProjectHalographic() {
  return (
    <div className="project-holographic-container">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* ambient + directional lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 7]} intensity={1} />

        <Suspense fallback={null}>
          {/* adjust scale here to change rocket’s size */}
          <RocketModel scale={1.2} />
        </Suspense>

        {/* autoRotate: spins when idle; still user-draggable */}
        <OrbitControls autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
