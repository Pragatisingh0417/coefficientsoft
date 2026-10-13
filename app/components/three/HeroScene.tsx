
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CLogo() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const scroll = Math.min(window.scrollY / 700, 1);
    const pointer = state.pointer;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.4 + scroll * 0.65,
      0.06
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.25 + scroll * 0.2,
      0.06
    );

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      scroll * 0.12,
      0.05
    );
  });

  return (
    <group ref={group}>
      {/* Main geometric C */}
      <mesh>
        <extrudeGeometry
          args={[
            (() => {
              const shape = new THREE.Shape();
              shape.moveTo(-0.9, 1.0);
              shape.lineTo(0.45, 1.0);
              shape.lineTo(0.95, 0.62);
              shape.lineTo(0.48, 0.62);
              shape.lineTo(0.15, 0.78);
              shape.lineTo(-0.45, 0.78);
              shape.lineTo(-0.45, -0.78);
              shape.lineTo(0.15, -0.78);
              shape.lineTo(0.48, -0.62);
              shape.lineTo(0.95, -0.62);
              shape.lineTo(0.45, -1.0);
              shape.lineTo(-0.9, -1.0);
              shape.closePath();
              return shape;
            })(),
            { depth: 0.3, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.04, bevelThickness: 0.04 }
          ]}
        />
        <meshStandardMaterial
          color="#f4f7ff"
          metalness={0.45}
          roughness={0.24}
        />
      </mesh>

      {/* Electric-blue accent */}
      <mesh position={[0.03, 0, 0.34]}>
        <boxGeometry args={[0.1, 0.9, 0.06]} />
        <meshStandardMaterial
          color="#087FFF"
          emissive="#087FFF"
          emissiveIntensity={1.5}
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[4, 5, 5]} intensity={3} />
      <pointLight position={[-3, 1, 3]} color="#087FFF" intensity={35} />

      <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.3}>
        <CLogo />
      </Float>

      <Environment preset="city" />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>

      <div className="scene-caption">
        <span className="status-dot" />
        Engineering what&apos;s next
      </div>
    </div>
  );
}
