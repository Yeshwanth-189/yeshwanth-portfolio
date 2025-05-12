// ProjectHalographic.jsx
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import "./ProjectHalographic.css";

function RocketModel({ scale = 1 }) {
  const { scene } = useGLTF("/Shuttle.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // replace every mesh’s material with a bright wireframe
        child.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#00ffff"), // your glow color
          wireframe: true,
        });
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={[scale, scale, scale]} />;
}

export default function ProjectHalographic() {
  return (
    <div className="project-holographic-container">
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        <Suspense fallback={null}>
          <RocketModel scale={1.2} />
        </Suspense>

        {/* autoRotate + user control */}
        <OrbitControls autoRotate autoRotateSpeed={1.2} />

        {/* Bloom makes any bright pixels “bleed” outward */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0} // glow everything
            intensity={1.5} // strength of glow
            radius={0.5} // how far it bleeds
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
