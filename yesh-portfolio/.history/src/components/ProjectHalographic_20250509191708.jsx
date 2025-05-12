import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const OrbitingMoons = ({ radius, speed }) => {
  const moonRef = useRef();
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + speed);
    }, 1000 / 60); // Update at 60 FPS
    return () => clearInterval(interval);
  }, [speed]);

  const x = radius * Math.cos(THREE.MathUtils.degToRad(angle));
  const z = radius * Math.sin(THREE.MathUtils.degToRad(angle));

  return (
    <mesh ref={moonRef} position={[x, 0, z]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshBasicMaterial wireframe={true} linewidth={2} color="#66fcf1" />
    </mesh>
  );
};

const ProjectHalographic = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#0b0c10" }}>
      <Canvas>
        {/* OrbitControls for user interaction */}
        <OrbitControls enableZoom={false} enablePan={false} />

        {/* Lighting */}
        <ambientLight intensity={0.4} color="#66fcf1" />
        <pointLight position={[10, 10, 10]} intensity={0.7} color="#66fcf1" />

        {/* Sphere (outlined) */}
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial wireframe={true} linewidth={2} color="#66fcf1" />
        </mesh>

        {/* Orbits (represented as rings) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.5, 3, 32]} />
          <meshBasicMaterial color="#66fcf1" opacity={0.4} transparent />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.5, 4, 32]} />
          <meshBasicMaterial color="#66fcf1" opacity={0.4} transparent />
        </mesh>

        {/* Moons */}
        <OrbitingMoons radius={3} speed={1} />
        <OrbitingMoons radius={4} speed={0.8} />
      </Canvas>
    </div>
  );
};

export default ProjectHalographic;
