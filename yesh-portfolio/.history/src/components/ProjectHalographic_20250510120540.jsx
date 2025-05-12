// ProjectHalographic.jsx
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Noise,
  Scanline,
  Glitch,
} from "@react-three/postprocessing";
import * as THREE from "three";
import "../styles/ProjectHalographic.css";

function RocketModel({ scale = 1, pulseSpeed = 4, pulseAmplitude = 0.2 }) {
  const { scene } = useGLTF("/Shuttle.glb");
  const sceneRef = useRef();
  const outlines = useRef([]);

  useEffect(() => {
    const group = sceneRef.current;
    group.traverse((child) => {
      if (child.isMesh) {
        child.visible = false;
        const outlineMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#00ffff"),
          side: THREE.BackSide,
          transparent: true,
          opacity: 0.5,
        });
        const outlineMesh = new THREE.Mesh(child.geometry.clone(), outlineMat);
        outlineMesh.position.copy(child.position);
        outlineMesh.rotation.copy(child.rotation);
        outlineMesh.scale.copy(child.scale).multiplyScalar(1.05);
        group.add(outlineMesh);
        outlines.current.push(outlineMesh);
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    sceneRef.current.rotation.y += 0.005;
    sceneRef.current.position.y = 0.2 * Math.sin(t * 1.5);
    outlines.current.forEach((mesh, i) => {
      mesh.material.opacity =
        0.3 + pulseAmplitude * Math.sin(t * pulseSpeed + i);
    });
  });

  return (
    <primitive ref={sceneRef} object={scene} scale={[scale, scale, scale]} />
  );
}

export default function ProjectHalographic() {
  return (
    <div className="project-holographic-container">
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 20, 100], fov: 50 }}
      >
        {/* Base lighting */}
        <ambientLight intensity={0.5} />
        {/* Spotlight to cast volumetric glow under rocket */}
        <spotLight
          color="#00ffff"
          intensity={1.5}
          distance={15}
          angle={0.3}
          penumbra={0.5}
          position={[0, -2, 0]}
        />

        {/* Glowing device platform */}

        <Suspense fallback={null}>
          <RocketModel scale={1.2} pulseSpeed={4} pulseAmplitude={0.2} />
        </Suspense>

        <OrbitControls autoRotate autoRotateSpeed={1.2} enableDamping />

        <EffectComposer>
          <Bloom luminanceThreshold={0} intensity={0.1} radius={0.2} />
          <Noise opacity={0.02} />
          <Scanline density={2} />
          <Glitch delay={[2, 4]} strength={[0.1, 0.3]} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
