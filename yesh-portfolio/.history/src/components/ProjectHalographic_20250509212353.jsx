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
  const groupRef = useRef();
  const linesRef = useRef([]);
  const addedRef = useRef(false);

  // 1) Recenter pivot to geometric center
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  // 2) Hide original meshes & add edges exactly once
  useEffect(() => {
    if (addedRef.current) return;
    addedRef.current = true;

    scene.traverse((child) => {
      if (child.isMesh) {
        // hide the solid mesh
        child.visible = false;

        // build edge-lines
        const geo = new THREE.EdgesGeometry(
          child.geometry,
          /*thresholdAngle=*/ 1
        );
        const mat = new THREE.LineBasicMaterial({
          color: new THREE.Color("#00ffff"),
          transparent: true,
          opacity: 0.8,
        });
        const lines = new THREE.LineSegments(geo, mat);

        // match its world transform
        lines.applyMatrix4(child.matrixWorld);

        // attach to our group
        groupRef.current.add(lines);
        linesRef.current.push(lines);
      }
    });
  }, [scene]);

  // 3) Auto-rotate, bob, and pulse opacity
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y += 0.005;
    groupRef.current.position.y = 0.2 * Math.sin(t * 1.5);

    linesRef.current.forEach((line, i) => {
      line.material.opacity =
        0.8 + pulseAmplitude * Math.sin(t * pulseSpeed + i);
    });
  });

  return (
    <primitive ref={groupRef} object={scene} scale={[scale, scale, scale]} />
  );
}

export default function ProjectHalographic() {
  return (
    <div className="project-holographic-container">
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          color="#00ffff"
          intensity={2}
          distance={10}
          angle={0.3}
          penumbra={0.5}
          position={[0, -2, 0]}
        />

        <Suspense fallback={null}>
          <RocketModel scale={1.2} pulseSpeed={4} pulseAmplitude={0.2} />
        </Suspense>

        <OrbitControls />

        <EffectComposer>
          <Bloom luminanceThreshold={0.3} intensity={0.6} radius={0.2} />
          <Noise opacity={0.02} />
          <Scanline density={2} />
          <Glitch delay={[2, 4]} strength={[0.1, 0.3]} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
