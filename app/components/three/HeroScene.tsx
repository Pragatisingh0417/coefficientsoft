
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function createCShape() {
  const shape = new THREE.Shape();

  shape.moveTo(-1.18, 1.36);
  shape.lineTo(0.5, 1.36);
  shape.lineTo(1.16, 0.86);
  shape.lineTo(0.52, 0.86);
  shape.lineTo(0.12, 1.08);
  shape.lineTo(-0.48, 1.08);
  shape.lineTo(-0.48, -1.08);
  shape.lineTo(0.12, -1.08);
  shape.lineTo(0.52, -0.86);
  shape.lineTo(1.16, -0.86);
  shape.lineTo(0.5, -1.36);
  shape.lineTo(-1.18, -1.36);
  shape.closePath();

  return shape;
}

function CLogo({ motionEnabled }: { motionEnabled: React.RefObject<boolean> }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    if (!motionEnabled.current) return;

    const scroll = Math.min(window.scrollY / 900, 1);
    const pointer = state.pointer;
    const targetRotY = pointer.x * 0.35 + scroll * 0.56;
    const targetRotX = -pointer.y * 0.24 + scroll * 0.18;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotY,
      0.045
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetRotX,
      0.045
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      scroll * 0.12,
      0.04
    );
  });

  return (
    <group ref={group} scale={1.08}>
      <mesh rotation={[0.12, 0, -0.12]}>
        <torusGeometry args={[1.7, 0.15, 28, 160]} />
        <meshPhysicalMaterial
          color="#dfe8ff"
          metalness={0.9}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.14}
        />
      </mesh>

      <mesh position={[-0.08, 0, 0.08]}>
        <extrudeGeometry
          args={[
            createCShape(),
            {
              depth: 0.28,
              bevelEnabled: true,
              bevelSegments: 4,
              bevelSize: 0.05,
              bevelThickness: 0.05,
            },
          ]}
        />
        <meshPhysicalMaterial
          color="#f3f7ff"
          metalness={0.82}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.12}
        />
      </mesh>

      <mesh position={[0.16, 0, 0.42]} rotation={[0, 0, Math.PI / 2.2]}>
        <boxGeometry args={[1.08, 0.12, 0.1]} />
        <meshStandardMaterial
          color="#087FFF"
          emissive="#087FFF"
          emissiveIntensity={1.5}
          metalness={0.5}
          roughness={0.18}
        />
      </mesh>

      <mesh position={[0.82, 0.8, 0.5]}>
        <octahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial
          color="#9bc9ff"
          emissive="#087FFF"
          emissiveIntensity={1.8}
          metalness={0.5}
          roughness={0.18}
        />
      </mesh>

      <mesh position={[-0.92, -0.8, 0.48]}>
        <icosahedronGeometry args={[0.14, 0]} />
        <meshStandardMaterial
          color="#dfeaff"
          emissive="#dfeaff"
          emissiveIntensity={0.25}
          metalness={0.55}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

function Scene({ motionEnabled }: { motionEnabled: React.RefObject<boolean> }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} color="#f2f6ff" />
      <directionalLight position={[-3, -1, 5]} intensity={1.25} color="#43a2ff" />
      <pointLight position={[0, 0, 4]} color="#087FFF" intensity={20} />
      <pointLight position={[-3, 1, -2]} color="#96ccff" intensity={7} />
      <CLogo motionEnabled={motionEnabled} />
      <Environment preset="city" />
    </>
  );
}

export default function HeroScene() {
  const [frameloop, setFrameloop] = useState<"always" | "demand">("demand");
  const motionEnabled = useRef(true);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateFrameloop = () => {
      motionEnabled.current = !motionPreference.matches;
      setFrameloop(motionPreference.matches ? "demand" : "always");
    };

    updateFrameloop();
    motionPreference.addEventListener("change", updateFrameloop);
    return () => motionPreference.removeEventListener("change", updateFrameloop);
  }, []);

  return (
    <div className="relative z-[2] h-[340px] w-full md:h-[480px] [&>canvas]:!block [&>canvas]:!touch-pan-y">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 39 }}
        dpr={[1, 1.25]}
        frameloop={frameloop}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        fallback={
          <div className="grid h-full w-full place-items-center text-[clamp(140px,22vw,260px)] font-bold text-[#dbeaff] drop-shadow-[0_0_70px_rgba(8,127,255,0.35)]">
            C
          </div>
        }
      >
        <Scene motionEnabled={motionEnabled} />
      </Canvas>
    </div>
  );
}
