import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import "../styles/ProjectHalographic.css";

const learnings = [
  "Great! We'll create ProjectHalographic.jsx as a 3D, mobile-responsive holographic display using React Three Fiber. Each project learning will appear in a stacked layout (one below the other) inside a single grid column (col-2to11), giving it a futuristic look. Let's get started on the base component structure and styling next. Would you like the holograms to auto-animate (like floating or pulsing) or respond to hover/tap?.",
  "Built scalable microservices with FastAPI and Docker.",
  "Improved UI/UX accessibility using semantic HTML and ARIA roles.",
  "Integrated payment systems and built a recommendation engine.",
  "Built real-time communication using WebRTC in healthcare apps.",
  "Automated deployments using GitHub Actions and AWS Lambda.",
  "Enhanced monitoring and observability with custom logging pipelines.",
  "Applied collaborative coding practices with GitHub Projects and reviews.",
];

function Hologram({ text, positionY, delay }) {
  const ref = React.useRef();

  useFrame(({ clock }) => {
    const scale = 1 + Math.sin(clock.getElapsedTime() * 2 + delay) * 0.05;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh position={[0, positionY, 0]} ref={ref}>
      <boxGeometry args={[6, 1.5, 0.2]} />
      <meshStandardMaterial
        color="#66fcf1"
        emissive="#66fcf1"
        emissiveIntensity={1}
        transparent
        opacity={0.2}
      />
      <Html distanceFactor={10}>
        <div className="hologram-text">{text}</div>
      </Html>
    </mesh>
  );
}

function ProjectHalographic() {
  return (
    <section className="project-halo-section">
      <div className="col-1" />
      <div className="col-2to11">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          {learnings.map((text, idx) => (
            <Hologram
              key={idx}
              text={text}
              positionY={5 - idx * 2.5}
              delay={idx}
            />
          ))}
        </Canvas>
      </div>
      <div className="col-12" />
    </section>
  );
}

export default ProjectHalographic;
