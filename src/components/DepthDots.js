// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useMemo } from "react";
// import * as THREE from "three";

// /* ================= PARTICLES ================= */

// function Particles({ progress }) {
//   const ref = useRef();

//   const { geometry, originalPositions } = useMemo(() => {
//     const count = 6000;
//     const positions = new Float32Array(count * 3);

//     for (let i = 0; i < count; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 20; // X spread
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Y spread
//       positions[i * 3 + 2] = Math.random() * -50; // Z depth
//     }

//     const geo = new THREE.BufferGeometry();
//     geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//     return {
//       geometry: geo,
//       originalPositions: positions.slice(), // IMPORTANT: store base positions
//     };
//   }, []);

//   useFrame(() => {
//     const pos = geometry.attributes.position;

//     for (let i = 0; i < pos.count; i++) {
//       const baseZ = originalPositions[i * 3 + 2];

//       // 🔥 depth movement (scroll-controlled, no drift)
//       const z = baseZ + progress * progress * 40;

//       pos.setZ(i, z);
//     }

//     pos.needsUpdate = true;
//   });

//   return (
//     <points ref={ref} geometry={geometry}>
//       <pointsMaterial
//         size={0.05}
//         color="#ffffff"
//         transparent
//         opacity={0.7}
//         blending={THREE.AdditiveBlending}
//         depthWrite={false}
//       />
//     </points>
//   );
// }

// /* ================= MAIN ================= */

// export default function DepthDots({ progress }) {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 10], fov: 60 }}
//       className="w-full h-full"
//     >
//       <color attach="background" args={["#000000"]} />
//       <Particles progress={progress} />
//     </Canvas>
//   );
// }


///////////////// 2nd VERSION AFTER FIX //////////////////

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ================= PARTICLES ================= */

function Particles({ progress }) {
  const ref = useRef();

  const { geometry, originalPositions } = useMemo(() => {
    const count = 6000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = Math.random() * -50;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return {
      geometry: geo,
      originalPositions: positions.slice(),
    };
  }, []);

  useFrame(() => {
    const pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const baseZ = originalPositions[i * 3 + 2];

      // smooth depth movement
      const z = baseZ + progress * progress * 40;

      pos.setZ(i, z);
    }

    pos.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ================= MAIN ================= */

export default function DepthDots({ progress }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      className="w-full h-full"
    >
      <color attach="background" args={["#000000"]} />
      <Particles progress={progress} />
    </Canvas>
  );
}

