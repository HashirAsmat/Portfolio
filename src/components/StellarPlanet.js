"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ================= PLANET ================= */

function Planet({ progress }) {
  const ref = useRef();

  const { sphere, cylinder, geometry } = useMemo(() => {
    const geo = new THREE.SphereGeometry(5.5, 80, 80);
    const pos = geo.attributes.position;

    const sphere = new Float32Array(pos.array.length);
    const cylinder = new Float32Array(pos.array.length);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      // store sphere
      sphere[i * 3] = x;
      sphere[i * 3 + 1] = y;
      sphere[i * 3 + 2] = z;

      // convert to cylinder
      const angle = Math.atan2(z, x);
      const radius = 5;

      const cx = Math.cos(angle) * radius;
      const cz = Math.sin(angle) * radius;

      cylinder[i * 3] = cx;
      cylinder[i * 3 + 1] = y * 1.2; // stretch vertically
      cylinder[i * 3 + 2] = cz;
    }

    return { sphere, cylinder, geometry: geo };
  }, []);

  useFrame(() => {
    const pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const sx = sphere[i * 3];
      const sy = sphere[i * 3 + 1];
      const sz = sphere[i * 3 + 2];

      const cx = cylinder[i * 3];
      const cy = cylinder[i * 3 + 1];
      const cz = cylinder[i * 3 + 2];

      // 🔥 smooth interpolation
      const x = THREE.MathUtils.lerp(sx, cx, progress);
      const y = THREE.MathUtils.lerp(sy, cy, progress);
      const z = THREE.MathUtils.lerp(sz, cz, progress);

      pos.setXYZ(i, x, y, z);
    }

    pos.needsUpdate = true;

    // subtle rotation
    ref.current.rotation.y += 0.001;
  });

  return (
    <points ref={ref} geometry={geometry}  scale={[0.6, 0.6, 0.6]}>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ================= MAIN ================= */

export default function StellarPlanet({ progress }) {
  return (
  <Canvas
  camera={{ position: [0, 0, 16], fov: 50 }}
  className="w-full h-full"
  gl={{ alpha: true }}
>
  <color attach="background" args={["transparent"]} />
  <ambientLight intensity={0.5} />
  <Planet progress={progress} />
</Canvas>
  );
}