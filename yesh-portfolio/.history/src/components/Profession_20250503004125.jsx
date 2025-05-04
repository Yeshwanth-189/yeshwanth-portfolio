import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import "../styles/Profession.css";

function Profession() {
  return (
    <div className="solar-system-wrapper">
      {/* Background 3D Solar System */}
      <Canvas>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <Stars />

        {/* Sun */}
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial emissive="#ffcc00" emissiveIntensity={1.5} />
        </mesh>

        {/* Planets */}
        <Planet positionX={5} color="#66fcf1" />
        <Planet positionX={8} color="#45a29e" />
        <Planet positionX={11} color="#ff5e78" />
        <Planet positionX={14} color="#c5c6c7" />
        <Planet positionX={17} color="#9d00ff" />
        <Planet positionX={20} color="#00ffc3" />
        <Planet positionX={23} color="#ff9900" />
        <Planet positionX={26} color="#00aaff" />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Foreground Horizontal Scroll */}
      <div className="horizontal-scroll-wrapper">
        <div className="scroll-content">
          {planetData.map((planet, idx) => (
            <div className="scroll-item" key={idx}>
              <h2>{planet.title}</h2>
              <p>{planet.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Planet({ positionX, color }) {
  return (
    <mesh position={[positionX, 0, 0]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const planetData = [
  { title: "Front End", description: "React, Tailwind, Responsive UIs." },
  { title: "UI/UX", description: "Wireframes, Prototypes, User Research." },
  { title: "Back End", description: "Node.js, Express.js, REST APIs." },
  { title: "API", description: "Designing scalable APIs." },
  { title: "Agile", description: "Scrum, Kanban, Sprint Planning." },
  { title: "CI/CD & Cloud", description: "AWS, Docker, Jenkins Pipelines." },
  { title: "Version Control", description: "GitHub, GitLab." },
  { title: "Documentation", description: "Technical writing, API Docs." },
];

export default Profession;
