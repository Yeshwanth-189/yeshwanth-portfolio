import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Moons Component
const OrbitingMoons = ({ radius, speed, tilt }) => {
  const moonRef = useRef();
  const [angle, setAngle] = useState(0);

  // Update the orbit position
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + speed);
    }, 1000 / 60); // Update at 60 FPS
    return () => clearInterval(interval);
  }, [speed]);

  // Rotate the moon on its own axis
  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.01; // Rotate around its own Y-axis
    }
  });

  const x = radius * Math.cos(THREE.MathUtils.degToRad(angle)) * Math.cos(tilt);
  const y = radius * Math.sin(THREE.MathUtils.degToRad(angle)) * Math.sin(tilt);
  const z = radius * Math.cos(THREE.MathUtils.degToRad(angle)) * Math.sin(tilt);

  return (
    <mesh ref={moonRef} position={[x, y, z]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshBasicMaterial wireframe={true} linewidth={2} color="#66fcf1" />
    </mesh>
  );
};

const ProjectHalographic = () => {
  const planetRef = useRef(); // Reference to the planet mesh

  // Rotate the planet around its Y-axis
  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.005; // Adjust the speed of rotation as needed
    }
  });

  return (
    <div style={{ height: "100vh", backgroundColor: "#0b0c10" }}>
      <Canvas>
        {/* OrbitControls for user interaction */}
        <OrbitControls enableZoom={false} enablePan={false} />

        {/* Lighting */}
        <ambientLight intensity={0.4} color="#66fcf1" />
        <pointLight position={[10, 10, 10]} intensity={0.7} color="#66fcf1" />

        {/* Sphere (planet) with rotation */}
        <mesh ref={planetRef}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial wireframe={true} linewidth={2} color="#66fcf1" />
        </mesh>

        {/* Moons */}
        <OrbitingMoons radius={3} speed={1} tilt={Math.PI / 4} />
        <OrbitingMoons radius={3} speed={0.8} tilt={-Math.PI / 4} />
      </Canvas>
    </div>
  );
};

export default ProjectHalographic;
