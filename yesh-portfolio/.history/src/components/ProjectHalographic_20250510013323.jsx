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
        // hide the original filled mesh
        child.visible = false;

        // create an outline mesh with inverted normals
        const outlineMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#00ffff"),
          side: THREE.BackSide,
          transparent: true,
          opacity: 0.5,
        });

        const outlineMesh = new THREE.Mesh(child.geometry.clone(), outlineMat);

        // match original transform and scale up slightly
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
    // continuous rotation around center
    sceneRef.current.rotation.y += 0.005;
    // subtle up/down bob
    sceneRef.current.position.y = 0.2 * Math.sin(t * 1.5);

    // pulse outline opacity
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
      <div className="project-holographic">
        <Canvas
          gl={{ antialias: true }}
          camera={{ position: [0, 50, 50], fov: 50 }}
        >
          {/* ambient + spotlight for base lighting */}
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

          <OrbitControls autoRotate autoRotateSpeed={1.2} enableDamping />

          <EffectComposer>
            <Bloom luminanceThreshold={0} intensity={0.1} radius={0.2} />
            <Noise opacity={0.02} />
            <Scanline density={2} />
            <Glitch delay={[2, 4]} strength={[0.1, 0.3]} />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
}
