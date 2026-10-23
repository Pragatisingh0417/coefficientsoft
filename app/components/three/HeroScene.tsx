"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function createCrystalGeometry() {
  const geometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  const colors: number[] = [];
  const palette = ["#e6f7ff", "#53d7ff", "#087fff", "#273b90", "#8b2eff", "#ff28b9"];
  const rings = [
    { y: -0.82, radius: 0.72 },
    { y: 0, radius: 0.92 },
    { y: 0.82, radius: 0.72 },
  ];
  const points = rings.map(({ y, radius }) =>
    Array.from({ length: 6 }, (_, index) => {
      const angle = (index / 6) * Math.PI * 2 + Math.PI / 6;
      return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    })
  );
  const top = new THREE.Vector3(0.14, 1.66, 0.04);
  const bottom = new THREE.Vector3(-0.08, -1.66, 0);

  const addTriangle = (a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, face: number) => {
    positions.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
    const color = new THREE.Color(palette[face % palette.length]);
    for (let vertex = 0; vertex < 3; vertex += 1) {
      colors.push(color.r, color.g, color.b);
    }
  };

  points[2].forEach((point, index) => addTriangle(top, point, points[2][(index + 1) % 6], index));
  for (let ring = 1; ring >= 0; ring -= 1) {
    points[ring].forEach((point, index) => {
      const next = (index + 1) % 6;
      const face = index + ring * 2;
      addTriangle(points[ring + 1][index], point, points[ring][next], face);
      addTriangle(points[ring + 1][index], points[ring][next], points[ring + 1][next], face + 2);
    });
  }
  points[0].forEach((point, index) => addTriangle(bottom, points[0][(index + 1) % 6], point, index + 2));

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function Crystal({ motionEnabled }: { motionEnabled: boolean }) {
  const group = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const geometry = useMemo(() => createCrystalGeometry(), []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state, delta) => {
    if (!group.current || !motionEnabled) return;

    elapsed.current += delta;
    const time = elapsed.current;
    const pointer = state.pointer;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      -0.24 + time * 0.16 + pointer.x * 0.12,
      0.035
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      0.08 + pointer.y * -0.1 + Math.sin(time * 0.19) * 0.025,
      0.035
    );
    group.current.position.y = Math.sin(time * 0.28) * 0.055;
  });

  return (
    <group ref={group} rotation={[0.08, -0.24, -0.06]} scale={1.12}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          vertexColors
          flatShading
          metalness={0.32}
          roughness={0.24}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          emissive="#391465"
          emissiveIntensity={0.19}
        />
      </mesh>
    </group>
  );
}

function OrbitingShard({
  position,
  color,
  size,
  phase,
  motionEnabled,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  phase: number;
  motionEnabled: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    if (!mesh.current || !motionEnabled) return;
    elapsed.current += delta;
    const time = elapsed.current + phase;
    mesh.current.rotation.x = time * 0.18;
    mesh.current.rotation.y = time * 0.28;
    mesh.current.position.y = position[1] + Math.sin(time * 0.45) * 0.055;
  });

  return (
    <mesh ref={mesh} position={position} scale={size}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.52}
        roughness={0.25}
        flatShading
      />
    </mesh>
  );
}

function CrystalArtwork() {
  return (
    <svg
      className="absolute inset-[15%] h-[70%] w-[70%]"
      viewBox="0 0 240 360"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crystal-left" x1="55" y1="50" x2="175" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D8EDFF" />
          <stop offset="0.5" stopColor="#327FD3" />
          <stop offset="1" stopColor="#0F3D72" />
        </linearGradient>
        <linearGradient id="crystal-right" x1="180" y1="70" x2="100" y2="330" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A9D4FF" />
          <stop offset="0.5" stopColor="#78B7FF" />
          <stop offset="1" stopColor="#1B5FA5" />
        </linearGradient>
      </defs>
      <path d="M119 22 196 109 179 259 120 338 52 250 39 108 119 22Z" fill="url(#crystal-left)" fillOpacity=".8" />
      <path d="m119 22 77 87-72 5-39-24 34-68Z" fill="#E7F4FF" fillOpacity=".64" />
      <path d="m119 22-34 68 39 24-4 224-68-88-13-142 80-86Z" fill="#327FD3" fillOpacity=".72" />
      <path d="m124 114 72-5-17 150-59 79 4-224Z" fill="url(#crystal-right)" fillOpacity=".88" />
      <path d="m85 90 39 24-4 224-68-88 33-160Z" fill="#0F3D72" fillOpacity=".38" />
      <path d="m124 114 72-5-52 76-20 153 4-224Z" fill="#D8EDFF" fillOpacity=".2" />
      <path d="m52 250 68 88 59-79" stroke="#C8E4FF" strokeOpacity=".72" />
    </svg>
  );
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(true);
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreferences = () => {
      setIsMobile(mobileQuery.matches);
      setMotionEnabled(!motionQuery.matches);
    };

    updatePreferences();
    mobileQuery.addEventListener("change", updatePreferences);
    motionQuery.addEventListener("change", updatePreferences);
    return () => {
      mobileQuery.removeEventListener("change", updatePreferences);
      motionQuery.removeEventListener("change", updatePreferences);
    };
  }, []);

  if (isMobile) {
    return <CrystalArtwork />;
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.3], fov: 37 }}
        dpr={[1, 1.25]}
        frameloop={motionEnabled ? "always" : "demand"}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        fallback={<CrystalArtwork />}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 5, 5]} intensity={2} color="#eff7ff" />
        <directionalLight position={[-3, -1, 4]} intensity={1.7} color="#4aa3ff" />
        <pointLight position={[1.5, 0.5, 2.5]} color="#087FFF" intensity={11} distance={7} />
        <pointLight position={[-2.2, 0.25, -1]} color="#ff28b9" intensity={16} distance={7} />
        <pointLight position={[0.4, 2.5, 1]} color="#53d7ff" intensity={7} distance={5} />
        <mesh rotation={[1.06, 0.15, 0.12]} position={[0, -0.08, -0.08]}>
          <torusGeometry args={[1.5, 0.009, 8, 144]} />
          <meshBasicMaterial color="#53d7ff" transparent opacity={0.56} />
        </mesh>
        <mesh rotation={[1.22, -0.28, -0.2]} position={[0, 0.08, -0.18]}>
          <torusGeometry args={[1.69, 0.007, 8, 144]} />
          <meshBasicMaterial color="#ff28b9" transparent opacity={0.42} />
        </mesh>
        <OrbitingShard
          position={[-1.42, 0.92, 0.15]}
          color="#53d7ff"
          size={0.075}
          phase={0.6}
          motionEnabled={motionEnabled}
        />
        <OrbitingShard
          position={[1.38, -0.82, -0.12]}
          color="#ff28b9"
          size={0.065}
          phase={2.2}
          motionEnabled={motionEnabled}
        />
        <Crystal motionEnabled={motionEnabled} />
      </Canvas>
    </div>
  );
}
