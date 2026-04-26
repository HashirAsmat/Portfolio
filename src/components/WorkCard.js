"use client";

import { useEffect, useRef, useState } from "react";

export default function WorkCard() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      const distance = Math.abs(viewportCenter - elementCenter);
      const maxDistance = windowHeight * 0.8;

      let p = 1 - distance / maxDistance;
      p = Math.max(0, Math.min(1, p));

      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center bg-black py-2 md:py-12 px-4">

      {/* 🔥 SCALE WRAPPER */}
      <div
        ref={ref}
        style={{
          transform: `
            scale(${0.65 + progress * 0.35})
            translateY(${100 - progress * 100}px)
          `,
          opacity: 0.2 + progress * 0.8,
        }}
        className="will-change-transform w-full max-w-[1100px]"
      >

        {/* CARD */}
        <div
          className="
          relative w-full
          h-auto md:h-[420px]
          rounded-2xl overflow-hidden
          border border-white/10
          bg-[#0b0b0b]
          "
        >

          {/* BACKGROUND */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(0,0,0,1) 0%,
                  rgba(0,0,0,0.95) 25%,
                  rgba(30,30,30,0.8) 55%,
                  rgba(255,255,255,0.08) 100%
                )
              `,
            }}
          />

          {/* LABEL */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 text-gray-400 text-xs md:text-sm tracking-widest z-10">
            01 | SALESFORCE ENGINEER
          </div>

          {/* LOGO */}
          <div className="absolute top-4 right-4 md:top-5 md:right-5 z-10">
            <img
              src="/logos/salesforce.svg"
              alt="salesforce"
              className="w-10 h-10 md:w-16 md:h-16 object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col md:flex-row h-full">

            {/* IMAGE */}
            <div className="w-full md:w-[45%] h-[200px] md:h-full relative overflow-hidden">
              <img
                src="/salesforce_workplace.png"
                alt="salesforce"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 flex items-center px-5 py-6 md:pl-10 md:pr-16">
              <div>
                <h2 className="text-white text-2xl md:text-4xl font-semibold mb-3 md:mb-4">
                  Salesforce Platform
                </h2>

                <p className="text-gray-400 text-sm md:text-lg">
                  Custom solutions. Smarter automation. Better CRM.
                </p>
              </div>
            </div>

          </div>

          {/* BORDER */}
          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}