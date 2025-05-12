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
  const edgeLines = useRef([]);

  useEffect(() => {
    const group = groupRef.current;

    // 1️⃣ Recenter pivot: compute bounding box center and subtract it
    const box = new THREE.Box3().setFromObject(group);
    const center = new THREE.Vector3();
    box.getCenter(center);
    group.position.sub(center);

    // 2️⃣ Build edge lines and hide fill mesh
    group.traverse((child) => {
      if (child.isMesh) {
        child.visible = false;
        const edgesGeo = new THREE.EdgesGeometry(child.geometry, 1);
        const mat = new THREE.LineBasicMaterial({
          color: new THREE.Color("#00ffff"),
          transparent: true,
          opacity: 0.8,
        });
        const lines = new THREE.LineSegments(edgesGeo, mat);
        // copy transforms
        lines.applyMatrix4(child.matrixWorld);
        group.add(lines);
        edgeLines.current.push(lines);
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // auto-rotate around the new center
    groupRef.current.rotation.y += 0.005;
    // subtle up/down bob
    groupRef.current.position.y = -0.5 + 0.2 * Math.sin(t * 1.5);

    // pulse edge opacity
    edgeLines.current.forEach((line, i) => {
      line.material.opacity =
        0.8 + pulseAmplitude * Math.sin(t * pulseSpeed + (i * Math.PI) / 3);
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

        <OrbitControls autoRotate autoRotateSpeed={0} enableDamping />

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
