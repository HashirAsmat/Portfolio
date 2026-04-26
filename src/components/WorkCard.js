// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function WorkCard() {
//   const ref = useRef(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//   if (!ref.current) return;

//   const rect = ref.current.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   const elementCenter = rect.top + rect.height / 2;
//   const viewportCenter = windowHeight / 2;

//   // distance from center
//   const distance = Math.abs(viewportCenter - elementCenter);

//   // normalize (0 → 1 where center = 1)
//   const maxDistance = windowHeight / 2;
//   const p = 1 - distance / maxDistance;

//   const clamped = Math.max(0, Math.min(1, p));
//   setProgress(clamped);
// };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full flex justify-center bg-black py-32">

//       {/* 🔥 ANIMATION WRAPPER */}
//       <div
//         ref={ref}
//         style={{
//           transform: `
//             scale(${0.7 + progress * 0.3})
//             translateY(${80 - progress * 80}px)
//           `,
//           opacity: 0.2 + progress * 0.8,
//         }}
//         className="transition-all duration-200 ease-out will-change-transform"
//       >

//         {/* CARD */}
//         <div
//           className="
//           relative w-[1100px] h-[420px]
//           rounded-2xl overflow-hidden
//           border border-white/10
//           bg-[#0b0b0b]
//           "
//         >

//           {/* BACKGROUND GRADIENT */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background: `
//                 linear-gradient(
//                   to right,
//                   rgba(0,0,0,1) 0%,
//                   rgba(0,0,0,0.95) 25%,
//                   rgba(30,30,30,0.8) 55%,
//                   rgba(255,255,255,0.08) 100%
//                 )
//               `,
//             }}
//           />

//           {/* LABEL */}
//           <div
//             className="absolute top-6 left-6 text-gray-400 text-sm tracking-widest z-10"
//             style={{
//               opacity: progress,
//               transform: `translateY(${20 - progress * 20}px)`
//             }}
//           >
//             01 | SALESFORCE ENGINEER
//           </div>

//           {/* LOGO */}
//           <div
//             className="absolute top-5 right-5 z-10"
//             style={{
//               transform: `scale(${0.6 + progress * 0.4})`,
//               opacity: progress
//             }}
//           >
//             <img
//               src="/logos/salesforce.svg"
//               alt="salesforce"
//               className="w-16 h-16 object-contain"
//             />
//           </div>

//           {/* CONTENT */}
//           <div className="relative z-10 h-full flex">

//             {/* IMAGE */}
//             <div className="w-[45%] h-full relative overflow-hidden">
//               <img
//                 src="/salesforce_workplace.png"
//                 alt="salesforce"
//                 className="absolute bottom-0 left-0 w-[110%] h-[85%] object-cover"
//                 style={{
//                   transform: `translateY(${60 - progress * 80}px) scale(${1 + progress * 0.08})`
//                 }}
//               />
//             </div>

//             {/* TEXT */}
//             <div className="flex-1 flex items-center pl-10 pr-16">
//               <div
//                 style={{
//                   opacity: progress,
//                   transform: `translateX(${60 - progress * 60}px)`
//                 }}
//               >
//                 <h2 className="text-white text-4xl font-semibold mb-4">
//                   Salesforce Platform
//                 </h2>

//                 <p className="text-gray-400 text-lg">
//                   Custom solutions. Smarter automation. Better CRM.
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* subtle border */}
//           <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
//         </div>
//       </div>
//     </div>
//   );
// }

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

      // 🔥 softer range → slower animation
      const maxDistance = windowHeight * 0.8;

      let p = 1 - distance / maxDistance;
      p = Math.max(0, Math.min(1, p));

      // 🔥 smooth easing (easeOutCubic)
      const eased = 1 - Math.pow(1 - p, 3);

      setProgress(eased);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center bg-black py-40">

      {/* 🔥 FULL ELEMENT SCALES TOGETHER */}
      <div
        ref={ref}
        style={{
          transform: `
            scale(${0.55 + progress * 0.45})
            translateY(${120 - progress * 120}px)
          `,
          opacity: 0.15 + progress * 0.85,
        }}
        className="will-change-transform"
      >

        {/* CARD */}
        <div
          className="
          relative w-[1100px] h-[420px]
          rounded-2xl overflow-hidden
          border border-white/10
          bg-[#0b0b0b]
          "
        >

          {/* BACKGROUND GRADIENT */}
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
          <div className="absolute top-6 left-6 text-gray-400 text-sm tracking-widest z-10">
            01 | SALESFORCE ENGINEER
          </div>

          {/* LOGO */}
          <div className="absolute top-5 right-5 z-10">
            <img
              src="/logos/salesforce.svg"
              alt="salesforce"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 h-full flex">

            {/* IMAGE */}
            <div className="w-[45%] h-full relative overflow-hidden">
              <img
                src="/salesforce_workplace.png"
                alt="salesforce"
                className="absolute bottom-0 left-0 w-[110%] h-[85%] object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 flex items-center pl-10 pr-16">
              <div>
                <h2 className="text-white text-4xl font-semibold mb-4">
                  Salesforce Platform
                </h2>

                <p className="text-gray-400 text-lg">
                  Custom solutions. Smarter automation. Better CRM.
                </p>
              </div>
            </div>

          </div>

          {/* subtle border */}
          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}