import { Canvas } from "@react-three/fiber";
import { Float, Environment, Edges } from "@react-three/drei";
import { Suspense } from "react";

function TechShape() {
  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh scale={0.8} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.25} envMapIntensity={1.1} transparent opacity={0.85} />
          <Edges scale={1.01} color="#22d3ee" />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroThree() {
  return (
    <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 xl:block w-[36%] h-[420px]">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 40 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[2, 3, 2]} intensity={1.4} />
        <Suspense fallback={null}>
          <TechShape />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
