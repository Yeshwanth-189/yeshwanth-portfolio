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
  const edgeLines = useRef([]);

  useEffect(() => {
    const group = sceneRef.current;
    group.traverse((child) => {
      if (child.isMesh) {
        // hide the solid mesh
        child.visible = false;

        // create edge lines
        const edgesGeo = new THREE.EdgesGeometry(child.geometry, 1);
        const mat = new THREE.LineBasicMaterial({
          color: new THREE.Color("#00ffff"),
          transparent: true,
          opacity: 0.8,
        });
        const lines = new THREE.LineSegments(edgesGeo, mat);

        // match mesh transform
        lines.position.copy(child.position);
        lines.rotation.copy(child.rotation);
        lines.scale.copy(child.scale);

        group.add(lines);
        edgeLines.current.push(lines);
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // slow auto-rotate & bob
    sceneRef.current.rotation.y += 0.005;
    sceneRef.current.position.y = 0.2 * Math.sin(t * 1.5);

    // pulse the edge opacity
    edgeLines.current.forEach((line, i) => {
      line.material.opacity =
        0.8 + pulseAmplitude * Math.sin(t * pulseSpeed + (i * Math.PI) / 3);
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
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        {/* ambient + spot for volumetric riser light */}
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

        <OrbitControls autoRotate autoRotateSpeed={1.2} />

        <EffectComposer>
          <Bloom luminanceThreshold={0} intensity={1.5} radius={0.5} />
          <Noise opacity={0.02} />
          <Scanline density={2} />
          <Glitch delay={[2, 4]} strength={[0.1, 0.3]} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
