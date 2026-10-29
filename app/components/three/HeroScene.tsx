"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

type SceneTargets = {
  zoom: number;
  tilt: number;
};

export type SceneVariant =
  | "home"
  | "homeBackground"
  | "servicesBackground"
  | "services"
  | "about"
  | "careers"
  | "contact";

type MutableValue<T> = { current: T };

function createCrystalGeometry() {
  const geometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  const colors: number[] = [];
  const palette = [
    "#1689ff",
    "#0642df",
    "#071f9d",
    "#00a8ec",
    "#7900df",
    "#ec00a9",
    "#ff26bd",
    "#a9dcff",
    "#d9efff",
    "#3475ee",
  ];
  const rings = [
    { y: 0.66, rx: 0.58, rz: 0.38 },
    { y: 0.02, rx: 0.72, rz: 0.46 },
    { y: -0.78, rx: 0.5, rz: 0.34 },
  ];
  const ringPoints = rings.map(({ y, rx, rz }, ringIndex) =>
    Array.from({ length: 6 }, (_, index) => {
      const angle = (index / 6) * Math.PI * 2 + Math.PI / 6 + ringIndex * 0.13;
      return new THREE.Vector3(Math.cos(angle) * rx, y, Math.sin(angle) * rz);
    })
  );
  const top = new THREE.Vector3(0.04, 1.48, 0.02);
  const bottom = new THREE.Vector3(-0.03, -1.5, 0);

  const addFace = (a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, color: string) => {
    positions.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
    const faceColor = new THREE.Color(color);
    for (let vertex = 0; vertex < 3; vertex += 1) {
      colors.push(faceColor.r, faceColor.g, faceColor.b);
    }
  };

  const topColors = ["#1689ff", "#d9efff", "#d9efff", "#a9dcff", "#071f9d", "#7900df"];
  ringPoints[0].forEach((point, index) => {
    addFace(top, point, ringPoints[0][(index + 1) % 6], topColors[index]);
  });

  const bandColors = [
    ["#0754ed", "#1641d7", "#087bfa", "#08a6ed", "#7900df", "#ed00ad"],
    ["#3475ee", "#0aa8eb", "#1738bd", "#0751e9", "#ec00a9", "#7900df"],
  ];
  const alternateColors = ["#e500a7", "#08a7eb", "#08a7eb", "#d900b8", "#7100ed", "#fa20bd"];
  for (let band = 0; band < ringPoints.length - 1; band += 1) {
    ringPoints[band].forEach((point, index) => {
      const next = (index + 1) % 6;
      const colorsForBand = bandColors[band];
      addFace(point, ringPoints[band + 1][index], ringPoints[band + 1][next], colorsForBand[index]);
      addFace(
        point,
        ringPoints[band + 1][next],
        ringPoints[band][next],
        alternateColors[(index + band) % alternateColors.length]
      );
    });
  }

  ringPoints[2].forEach((point, index) => {
    addFace(bottom, ringPoints[2][(index + 1) % 6], point, palette[(index + 4) % palette.length]);
  });

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function createNodes() {
  return Array.from({ length: 8 }, (_, index) => {
    const angle = (index / 8) * Math.PI * 2 + 0.18;
    const radius = index % 2 === 0 ? 1.48 : 1.65;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.82,
      -0.25 + Math.sin(angle * 2) * 0.18
    );
  });
}

function createStarfieldGeometry() {
  const random = createRandom(8217);
  const positions: number[] = [];
  const colors: number[] = [];
  const palette = ["#ffffff", "#d9efff", "#83cfff", "#b99aff", "#ffb9eb"];

  for (let index = 0; index < 6200; index += 1) {
    positions.push(
      (random() - 0.5) * 110,
      (random() - 0.5) * 72,
      (random() - 0.5) * 88
    );
    const color = new THREE.Color(palette[Math.floor(random() * palette.length)]);
    colors.push(color.r, color.g, color.b);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  return geometry;
}

function createGalaxyGeometry() {
  const random = createRandom(19031);
  const positions: number[] = [];
  const colors: number[] = [];
  const palette = ["#55d8ff", "#8d7aff", "#c89aff", "#ff8be3", "#e7ddff"];
  const arms = 4;

  for (let index = 0; index < 6800; index += 1) {
    const radius = Math.sqrt(random()) * 15;
    const arm = Math.floor(random() * arms);
    const angle =
      (arm / arms) * Math.PI * 2 +
      radius * 0.42 +
      (random() - 0.5) * (0.16 + radius * 0.045);
    const spread = 0.1 + radius * 0.045;
    positions.push(
      Math.cos(angle) * radius + (random() - 0.5) * spread,
      Math.sin(angle) * radius * 0.62 + (random() - 0.5) * spread,
      (random() - 0.5) * (0.12 + radius * 0.035)
    );

    const color = new THREE.Color(palette[Math.floor(random() * palette.length)]).multiplyScalar(
      0.55 + (1 - radius / 15) * 0.7
    );
    colors.push(color.r, color.g, color.b);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  return geometry;
}

function createHomeFlowGeometry() {
  const random = createRandom(46291);
  const linePositions: number[] = [];
  const lineColors: number[] = [];
  const particlePositions: number[] = [];
  const particleColors: number[] = [];
  const palette = ["#53d7ff", "#328dff", "#9275ff", "#e685ff"];
  const strands = 12;
  const segments = 240;

  const getColor = (strand: number) => {
    const colorIndex = (strand / (strands - 1)) * (palette.length - 1);
    const lowerIndex = Math.floor(colorIndex);
    return new THREE.Color(palette[lowerIndex]).lerp(
      new THREE.Color(palette[Math.min(lowerIndex + 1, palette.length - 1)]),
      colorIndex - lowerIndex
    );
  };

  const getPoint = (x: number, strand: number, jitter = 0) => {
    const phase = strand * 0.47;
    const verticalOffset = (strand / (strands - 1) - 0.5) * 11;
    return new THREE.Vector3(
      x,
      verticalOffset +
        Math.sin(x * 0.15 + phase) * 1.65 +
        Math.cos(x * 0.075 - phase) * 1.1 +
        jitter,
      Math.sin(x * 0.105 + phase) * 1.7 + (strand - strands / 2) * -0.42
    );
  };

  for (let strand = 0; strand < strands; strand += 1) {
    const color = getColor(strand);
    let previous = getPoint(-29, strand);

    for (let segment = 1; segment <= segments; segment += 1) {
      const x = -29 + (segment / segments) * 58;
      const current = getPoint(x, strand);
      linePositions.push(
        previous.x,
        previous.y,
        previous.z,
        current.x,
        current.y,
        current.z
      );
      lineColors.push(
        color.r,
        color.g,
        color.b,
        color.r,
        color.g,
        color.b
      );
      previous = current;
    }
  }

  for (let index = 0; index < 4600; index += 1) {
    const strand = random() * (strands - 1);
    const color = getColor(strand);
    const x = random() * 58 - 29;
    const point = getPoint(x, strand, (random() - 0.5) * 0.65);
    particlePositions.push(point.x, point.y, point.z + (random() - 0.5) * 0.5);
    particleColors.push(color.r, color.g, color.b);
  }

  const lines = new THREE.BufferGeometry();
  lines.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  lines.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));

  const particles = new THREE.BufferGeometry();
  particles.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
  particles.setAttribute("color", new THREE.Float32BufferAttribute(particleColors, 3));

  return { lines, particles };
}

function createServiceNetworkGeometry() {
  const rows = 15;
  const columns = 25;
  const positions: THREE.Vector3[] = [];
  const pointColors: number[] = [];
  const linePositions: number[] = [];
  const lineColors: number[] = [];
  const blue = new THREE.Color("#3c9dff");
  const violet = new THREE.Color("#8975ff");
  const pink = new THREE.Color("#ed76e8");

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const progress = column / (columns - 1);
      const color = blue.clone().lerp(violet, progress * 0.58).lerp(pink, Math.max(0, progress - 0.55) * 0.55);
      const x = (column / (columns - 1) - 0.5) * 54;
      const y = (row / (rows - 1) - 0.5) * 31;
      const z =
        Math.sin(column * 0.48 + row * 0.28) * 1.2 +
        Math.cos(row * 0.42 - column * 0.16) * 0.75;
      positions.push(new THREE.Vector3(x, y, z));
      pointColors.push(color.r, color.g, color.b);
    }
  }

  const addConnection = (from: THREE.Vector3, to: THREE.Vector3, strength: number) => {
    linePositions.push(from.x, from.y, from.z, to.x, to.y, to.z);
    const color = blue.clone().lerp(pink, THREE.MathUtils.clamp((from.x + 27) / 54, 0, 1));
    const intensity = color.clone().multiplyScalar(strength);
    lineColors.push(
      intensity.r,
      intensity.g,
      intensity.b,
      intensity.r,
      intensity.g,
      intensity.b
    );
  };

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      if (column < columns - 1) {
        addConnection(positions[index], positions[index + 1], 0.85);
      }
      if (row < rows - 1) {
        addConnection(positions[index], positions[index + columns], 0.7);
        if (column < columns - 1 && (row + column) % 2 === 0) {
          addConnection(positions[index], positions[index + columns + 1], 0.48);
        }
      }
    }
  }

  const lines = new THREE.BufferGeometry();
  lines.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  lines.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));

  const points = new THREE.BufferGeometry();
  points.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(
      positions.flatMap(({ x, y, z }) => [x, y, z]),
      3
    )
  );
  points.setAttribute("color", new THREE.Float32BufferAttribute(pointColors, 3));

  return { lines, points };
}

const starVertexShader = `
  attribute vec3 color;
  uniform float pointSize;
  varying vec3 vColor;
  varying float vFade;

  void main() {
    vColor = color;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = clamp(pointSize * (180.0 / max(-viewPosition.z, 1.0)), 1.0, 6.0);
    vFade = 1.0 - smoothstep(72.0, 120.0, -viewPosition.z);
  }
`;

const starFragmentShader = `
  varying vec3 vColor;
  varying float vFade;

  void main() {
    float distanceFromCenter = length((gl_PointCoord - vec2(0.5)) * 2.0);
    float core = 1.0 - smoothstep(0.18, 0.78, distanceFromCenter);
    float glow = exp(-distanceFromCenter * 3.2);
    float alpha = (core * 0.82 + glow * 0.34) * vFade;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

function createRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function OrbitalScene({
  crystalScale,
  motionEnabled,
  orbitScale,
  pointer,
  pointerActive,
  targets,
  variant,
}: {
  crystalScale: number;
  motionEnabled: boolean;
  orbitScale: number;
  pointer: MutableValue<THREE.Vector2>;
  pointerActive: MutableValue<boolean>;
  targets: MutableValue<SceneTargets>;
  variant: SceneVariant;
}) {
  const group = useRef<THREE.Group>(null);
  const crystalSpin = useRef<THREE.Group>(null);
  const crystal = useRef<THREE.Group>(null);
  const artwork = useRef<THREE.Group>(null);
  const camera = useRef<THREE.PerspectiveCamera>(null);
  const nodes = useMemo(() => createNodes(), []);
  const geometry = useMemo(() => createCrystalGeometry(), []);
  const starfieldGeometry = useMemo(() => createStarfieldGeometry(), []);
  const galaxyGeometry = useMemo(() => createGalaxyGeometry(), []);
  const homeFlowGeometry = useMemo(() => createHomeFlowGeometry(), []);
  const serviceNetworkGeometry = useMemo(() => createServiceNetworkGeometry(), []);
  const elapsedTime = useRef(0);

  useEffect(
    () => () => {
      geometry.dispose();
      starfieldGeometry.dispose();
      galaxyGeometry.dispose();
      homeFlowGeometry.lines.dispose();
      homeFlowGeometry.particles.dispose();
      serviceNetworkGeometry.lines.dispose();
      serviceNetworkGeometry.points.dispose();
    },
    [geometry, galaxyGeometry, homeFlowGeometry, serviceNetworkGeometry, starfieldGeometry]
  );

  useFrame((state, delta) => {
    if (
      !motionEnabled ||
      !group.current ||
      !camera.current ||
      !crystal.current ||
      !crystalSpin.current ||
      (variant !== "home" && !artwork.current)
    ) return;

    elapsedTime.current += delta;
    const time = elapsedTime.current;
    const pointerX = pointer.current.x;
    const pointerY = pointer.current.y;

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targets.current.tilt + pointerX * 0.1 + Math.sin(time * 0.12) * 0.012,
      1.2,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -pointerY * 0.07,
      1.2,
      delta
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      pointerX * 0.08,
      1.4,
      delta
    );
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      pointerY * 0.06 + Math.sin(time * 0.24) * 0.012,
      1.4,
      delta
    );
    crystal.current.rotation.y = THREE.MathUtils.damp(
      crystal.current.rotation.y,
      pointerX * 0.12 + Math.sin(time * 0.16) * 0.018,
      1.2,
      delta
    );
    crystal.current.rotation.x = THREE.MathUtils.damp(
      crystal.current.rotation.x,
      pointerY * 0.07 + Math.sin(time * 0.13) * 0.012,
      1.2,
      delta
    );
    crystalSpin.current.rotation.y = time * 0.14;
    crystalSpin.current.rotation.z = Math.sin(time * 0.21) * 0.018;
    crystal.current.position.y = Math.sin(time * 0.3) * 0.045;
    if (artwork.current) {
      const aspect = state.size.width / state.size.height;
      artwork.current.rotation.z = time * (variant === "homeBackground" ? 0.0025 : 0.008);
      artwork.current.rotation.y =
        variant === "homeBackground"
          ? Math.sin(time * 0.12) * 0.035
          : variant === "servicesBackground"
            ? Math.sin(time * 0.08) * 0.025
            : 0;
      artwork.current.position.x = THREE.MathUtils.damp(
        artwork.current.position.x,
        0,
        1.8,
        delta
      );
      artwork.current.position.y =
        (variant === "about" && aspect < 0.85 ? -1.5 : 0) +
        Math.sin(time * 0.32) * 0.045;
    }
    const cursorZoom = pointerActive.current ? pointerY * 0.2 : 0;
    const cameraStart =
      variant === "about"
        ? 15.4
        : variant === "homeBackground"
          ? 18
          : variant === "servicesBackground"
            ? 17
            : variant === "careers" || variant === "contact"
              ? 14.5
              : 5.3;
    camera.current.position.z = THREE.MathUtils.damp(
      camera.current.position.z,
      cameraStart - targets.current.zoom - cursorZoom,
      1.35,
      delta
    );
  });

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[
          0,
          0,
          variant === "about"
            ? 15.4
            : variant === "homeBackground"
              ? 18
              : variant === "servicesBackground"
                ? 17
                : variant === "careers" || variant === "contact"
                  ? 14.5
                : 5.3,
        ]}
        fov={
          variant === "homeBackground" || variant === "servicesBackground"
            ? 52
            : variant === "careers" || variant === "contact"
              ? 45
              : 37
        }
      />
      <ambientLight intensity={0.72} />
      <directionalLight position={[2, 3, 4]} color="#d7edff" intensity={2.1} />
      <pointLight position={[0.2, 0.4, 2.8]} color="#1689ff" intensity={3.2} distance={6} />
      <pointLight position={[-1.1, -0.5, 0.3]} color="#ff28b9" intensity={1.1} distance={4} />
      {variant === "about" && (
        <>
          <points geometry={starfieldGeometry}>
            <shaderMaterial
              uniforms={{ pointSize: { value: 0.42 } }}
              vertexShader={starVertexShader}
              fragmentShader={starFragmentShader}
              transparent
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </points>
          <group ref={artwork} position={[0, 0, -7]}>
            <mesh position={[0, 0, -0.22]}>
              <planeGeometry args={[36, 24]} />
              <shaderMaterial
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                uniforms={{
                  innerColor: { value: new THREE.Color("#cf65ff") },
                  outerColor: { value: new THREE.Color("#286bff") },
                }}
                vertexShader="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }"
                fragmentShader="uniform vec3 innerColor; uniform vec3 outerColor; varying vec2 vUv; void main() { vec2 p = (vUv - 0.5) * vec2(1.0, 1.45); float r = length(p); float core = exp(-r * 11.0); float haze = exp(-r * 3.2); vec3 color = mix(innerColor, outerColor, smoothstep(0.08, 0.72, r)); float alpha = core * 0.82 + haze * 0.32; gl_FragColor = vec4(color, alpha); }"
              />
            </mesh>
            <points geometry={galaxyGeometry}>
              <shaderMaterial
                uniforms={{ pointSize: { value: 1.1 } }}
                vertexShader={starVertexShader}
                fragmentShader={starFragmentShader}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
              />
            </points>
            <mesh>
              <sphereGeometry args={[0.055, 20, 20]} />
              <meshBasicMaterial
                color="#e4bdff"
                transparent
                opacity={0.96}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
            <pointLight color="#9b75ff" intensity={2.8} distance={20} />
            <pointLight color="#53d7ff" intensity={1.4} distance={16} position={[-2, 0.8, 0.2]} />
          </group>
        </>
      )}
      {variant === "homeBackground" && (
        <group ref={artwork} position={[0, 0, -8]}>
          <lineSegments geometry={homeFlowGeometry.lines}>
            <lineBasicMaterial
              vertexColors
              transparent
              opacity={0.28}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </lineSegments>
          <points geometry={homeFlowGeometry.particles}>
            <shaderMaterial
              uniforms={{ pointSize: { value: 1.15 } }}
              vertexShader={starVertexShader}
              fragmentShader={starFragmentShader}
              transparent
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </points>
          <pointLight color="#328dff" intensity={2.2} distance={28} position={[-8, 2, 1]} />
          <pointLight color="#e685ff" intensity={1.8} distance={26} position={[9, -2, 1]} />
        </group>
      )}
      {variant === "servicesBackground" && (
        <group ref={artwork} position={[0, 0, -8]}>
          <lineSegments geometry={serviceNetworkGeometry.lines}>
            <lineBasicMaterial
              vertexColors
              transparent
              opacity={0.28}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </lineSegments>
          <points geometry={serviceNetworkGeometry.points}>
            <shaderMaterial
              uniforms={{ pointSize: { value: 1.8 } }}
              vertexShader={starVertexShader}
              fragmentShader={starFragmentShader}
              transparent
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </points>
          <pointLight color="#328dff" intensity={2.2} distance={30} position={[-12, 4, 1]} />
          <pointLight color="#ed76e8" intensity={1.8} distance={28} position={[12, -3, 1]} />
        </group>
      )}
      <group ref={group} scale={orbitScale}>
        {variant === "homeBackground" || variant === "servicesBackground" ? null : variant === "home" ? (
          <>
            <mesh rotation={[1.08, 0.13, -0.12]}>
              <torusGeometry args={[1.42, 0.005, 6, 128]} />
              <meshBasicMaterial color="#53d7ff" transparent opacity={0.36} />
            </mesh>
            <mesh rotation={[1.27, -0.24, 0.18]} position={[0, 0, -0.22]}>
              <torusGeometry args={[1.68, 0.004, 6, 128]} />
              <meshBasicMaterial color="#8b2eff" transparent opacity={0.23} />
            </mesh>
            <mesh rotation={[0.18, 0.62, 1.12]} position={[0, 0, -0.12]}>
              <torusGeometry args={[1.22, 0.003, 6, 128]} />
              <meshBasicMaterial color="#ff28b9" transparent opacity={0.2} />
            </mesh>
            {nodes.map((node, index) => (
              <mesh key={`node-${index}`} position={node} scale={index % 3 === 0 ? 0.025 : 0.016}>
                <sphereGeometry args={[1, 8, 8]} />
                <meshBasicMaterial
                  color={index % 3 === 0 ? "#ff28b9" : "#53d7ff"}
                  transparent
                  opacity={0.76}
                />
              </mesh>
            ))}
            {[0, 2, 5, 7].map((index) => (
              <mesh
                key={`fragment-${index}`}
                position={[
                  nodes[index].x * 1.06,
                  nodes[index].y * 1.06,
                  nodes[index].z + 0.08,
                ]}
                scale={0.035}
                rotation={[0.25 * index, 0.18 * index, 0]}
              >
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                  color={index === 5 ? "#ff28b9" : "#53d7ff"}
                  emissive={index === 5 ? "#ff28b9" : "#087fff"}
                  emissiveIntensity={0.35}
                  metalness={0.35}
                  roughness={0.35}
                  flatShading
                />
              </mesh>
            ))}
          </>
        ) : (
          <group ref={variant === "about" ? undefined : artwork}>
            {variant === "services" && (
              <>
                <mesh position={[0, 0, 0]} rotation={[0.18, 0.35, 0.1]}>
                  <boxGeometry args={[0.82, 0.82, 0.82]} />
                  <meshPhysicalMaterial color="#087fff" metalness={0.42} roughness={0.25} clearcoat={0.8} />
                </mesh>
                {[
                  [-1.12, 0.72, -0.24],
                  [1.1, 0.65, 0.2],
                  [-1.12, -0.8, 0.1],
                  [1.16, -0.74, -0.25],
                ].map(([x, y, z], index) => (
                  <mesh key={`service-node-${index}`} position={[x, y, z]} rotation={[0.3, index * 0.45, 0]}>
                    <boxGeometry args={[0.38, 0.38, 0.38]} />
                    <meshStandardMaterial
                      color={index % 2 === 0 ? "#53d7ff" : "#ff28b9"}
                      emissive={index % 2 === 0 ? "#087fff" : "#7f1263"}
                      emissiveIntensity={0.2}
                      metalness={0.35}
                      roughness={0.3}
                    />
                  </mesh>
                ))}
                <mesh rotation={[0.9, 0.2, 0]}>
                  <torusGeometry args={[1.55, 0.009, 6, 96]} />
                  <meshBasicMaterial color="#53d7ff" transparent opacity={0.55} />
                </mesh>
              </>
            )}
            {variant === "careers" && (
              <>
                {Array.from({ length: 5 }, (_, index) => (
                  <mesh
                    key={`career-step-${index}`}
                    position={[-0.92 + index * 0.46, -0.86 + index * 0.37, 0]}
                    rotation={[0, 0, -0.08]}
                  >
                    <boxGeometry args={[0.53, 0.22, 0.62]} />
                    <meshStandardMaterial
                      color={index === 4 ? "#ff28b9" : "#087fff"}
                      emissive={index === 4 ? "#7f1263" : "#063a8a"}
                      emissiveIntensity={0.22}
                      metalness={0.4}
                      roughness={0.3}
                    />
                  </mesh>
                ))}
                <mesh position={[0.98, 1.02, 0]} rotation={[0.35, 0.45, 0.25]}>
                  <octahedronGeometry args={[0.24, 0]} />
                  <meshStandardMaterial color="#d9efff" emissive="#53d7ff" emissiveIntensity={0.65} />
                </mesh>
                <mesh rotation={[0.2, 0, 0.55]} position={[0.28, 0.1, -0.24]}>
                  <torusGeometry args={[1.5, 0.008, 6, 96, Math.PI * 1.1]} />
                  <meshBasicMaterial color="#53d7ff" transparent opacity={0.48} />
                </mesh>
              </>
            )}
            {variant === "contact" && (
              <>
                <mesh>
                  <dodecahedronGeometry args={[0.62, 0]} />
                  <meshPhysicalMaterial
                    color="#087fff"
                    metalness={0.35}
                    roughness={0.22}
                    clearcoat={0.8}
                    emissive="#063a8a"
                    emissiveIntensity={0.25}
                  />
                </mesh>
                <mesh rotation={[1.05, 0.2, -0.15]}>
                  <torusGeometry args={[1.08, 0.018, 8, 96]} />
                  <meshBasicMaterial color="#53d7ff" transparent opacity={0.68} />
                </mesh>
                <mesh rotation={[0.2, -0.35, 1.15]}>
                  <torusGeometry args={[1.42, 0.012, 8, 96]} />
                  <meshBasicMaterial color="#ff28b9" transparent opacity={0.48} />
                </mesh>
                {[[-1.18, 0.42, 0], [1.08, -0.7, 0.1], [0.12, 1.22, -0.1]].map(
                  ([x, y, z], index) => (
                    <mesh key={`contact-orbit-${index}`} position={[x, y, z]} scale={0.07}>
                      <sphereGeometry args={[1, 12, 12]} />
                      <meshBasicMaterial color={index === 1 ? "#ff28b9" : "#53d7ff"} />
                    </mesh>
                  )
                )}
              </>
            )}
          </group>
        )}
      </group>
      <group ref={crystalSpin} visible={variant === "home"}>
        <group ref={crystal} rotation={[0.025, -0.08, -0.015]} scale={crystalScale}>
          <mesh geometry={geometry}>
            <meshPhysicalMaterial
              vertexColors
              flatShading
              metalness={0.22}
              roughness={0.27}
              clearcoat={0.82}
              clearcoatRoughness={0.19}
              emissive="#180550"
              emissiveIntensity={0.18}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </group>
    </>
  );
}

export default function HeroScene({
  crystalScale = 1.14,
  fullPage = false,
  orbitScale = 1,
  variant = "home",
}: {
  crystalScale?: number;
  fullPage?: boolean;
  orbitScale?: number;
  variant?: SceneVariant;
}) {
  const [isMobile, setIsMobile] = useState(true);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const pointer = useRef(new THREE.Vector2());
  const pointerActive = useRef(false);
  const targets = useRef<SceneTargets>({ zoom: 0, tilt: 0 });

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

  useEffect(() => {
    if (!motionEnabled || !container.current) return;

    const scene = container.current;
    const scrollRegion = fullPage
      ? document.documentElement
      : scene.closest("header");
    if (!scrollRegion) return;

    const updatePointer = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = scene.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      if (x < 0 || x > 1 || y < 0 || y > 1) {
        pointerActive.current = false;
        pointer.current.set(0, 0);
        return;
      }
      pointerActive.current = true;
      pointer.current.set(x * 2 - 1, 1 - y * 2);
    };
    const resetPointer = () => {
      pointerActive.current = false;
      pointer.current.set(0, 0);
    };
    const handlePointerOut = (event: PointerEvent) => {
      if (!(event.relatedTarget instanceof Node) || !scene.contains(event.relatedTarget)) {
        resetPointer();
      }
    };

    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: scrollRegion,
          start: fullPage ? 0 : "top top",
          end: fullPage ? () => ScrollTrigger.maxScroll(window) : "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
        .to(
          targets.current,
          {
            zoom:
              variant === "about"
                ? 11.5
                : variant === "homeBackground"
                  ? 9.5
                  : variant === "servicesBackground"
                    ? 9
                    : variant === "careers"
                      ? 8.5
                      : variant === "contact"
                        ? 7.5
                  : 1.55,
            tilt: 0.2,
            ease: "none",
          },
          0
        );
    }, scrollRegion);

    window.addEventListener("pointermove", updatePointer);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", resetPointer);
    ScrollTrigger.refresh();

    return () => {
      context.revert();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", resetPointer);
    };
  }, [fullPage, motionEnabled, variant]);

  return (
    <div
      ref={container}
      className={`pointer-events-none ${
        fullPage ? "fixed inset-0 z-0" : "absolute inset-0 z-0"
      }`}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5.3], fov: 37 }}
        dpr={isMobile ? 0.75 : [1, 1.2]}
        frameloop={motionEnabled ? "always" : "demand"}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        fallback={null}
      >
        <OrbitalScene
          crystalScale={crystalScale}
          motionEnabled={motionEnabled}
          orbitScale={orbitScale}
          pointer={pointer}
          pointerActive={pointerActive}
          targets={targets}
          variant={variant}
        />
      </Canvas>
    </div>
  );
}
