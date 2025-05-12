// ProjectHalographic.jsx
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { MeshBasicMaterial, Color } from "three";
import { SimplifyModifier } from "three/examples/jsm/modifiers/SimplifyModifier.js";
import "../styles/ProjectHalographic.css";

function RocketModel({ scale = 1, simplifyRatio = 0.5 }) {
  const { scene } = useGLTF("/Shuttle.glb");

  useEffect(() => {
    const modifier = new SimplifyModifier();
    scene.traverse((child) => {
      if (child.isMesh) {
        // 1. Clone and simplify geometry
        const geom = child.geometry.clone();
        const removeCount = Math.floor(
          geom.attributes.position.count * simplifyRatio
        );
        const simplified = modifier.modify(geom, removeCount);

        // 2. Swap in simplified geometry
        child.geometry.dispose();
        child.geometry = simplified;

        // 3. Replace material with bright wireframe
        child.material = new MeshBasicMaterial({
          color: new Color("#00ffff"),
          wireframe: true,
        });
      }
    });
  }, [scene, simplifyRatio]);

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
          {/* simplifyRatio: 0.5 removes 50% of vertices */}
          <RocketModel scale={1.2} simplifyRatio={0.5} />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={1.2} />
        <EffectComposer>
          <Bloom luminanceThreshold={0} intensity={1.5} radius={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
