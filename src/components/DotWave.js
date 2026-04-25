"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

const noise3D = createNoise3D();

function Wave({ isLight }) {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(28, 14, 200, 100);
  }, []);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(isLight ? "#000000" : "#ffffff");
    }
  }, [isLight]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      const z = noise3D(x * 0.1, y * 0.1, time * 0.2) * 2.0;
      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
  });

  return (
    <points
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.5, 0, 0]}
    >
      <pointsMaterial
        ref={materialRef}
        color={isLight ? "#000000" : "#ffffff"}

        // 🔥 BIGGER GRAIN HERE
        size={0.055}

        sizeAttenuation
        transparent
        opacity={isLight ? 1 : 0.9}
        blending={
          isLight
            ? THREE.NormalBlending
            : THREE.AdditiveBlending
        }
      />
    </points>
  );
}

export default function DotWave() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full h-screen ${isLight ? "bg-white" : "bg-black"}`}>
      <Canvas camera={{ position: [0, 8, 20], fov: 50 }}>
        <color attach="background" args={[isLight ? "#ffffff" : "#000000"]} />

        {!isLight && (
          <fog attach="fog" args={["#000000", 10, 40]} />
        )}

        <ambientLight intensity={0.6} />

        <Wave isLight={isLight} />
      </Canvas>
    </div>
  );
}