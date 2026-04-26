"use client";

import { useRef, useEffect, useState } from "react";
import StellarPlanet from "./StellarPlanet";

export default function StellarSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progress calculation (0 → 1)
      const p = 1 - rect.bottom / (windowHeight + rect.height);

      setProgress(Math.max(0, Math.min(1, p)));
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-black">
      {/* sticky viewport */}
      <div className="sticky top-0 h-screen w-full">
        <StellarPlanet progress={progress} />
      </div>
    </section>
  );
}