// // "use client";

// // import { useRef, useEffect, useState } from "react";
// // import DepthDots from "./DepthDots";

// // export default function ScrollDepthSection() {
// //   const sectionRef = useRef(null);
// //   const [progress, setProgress] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!sectionRef.current) return;

// //       const rect = sectionRef.current.getBoundingClientRect();
// //       const windowHeight = window.innerHeight;

// //       const p = 1 - rect.bottom / (windowHeight + rect.height);
// //       setProgress(Math.max(0, Math.min(1, p)));
// //     };

// //     handleScroll();
// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   /* ================= TEXT STATES ================= */

// //   let title = "IDEAS EMERGE FROM DEPTH";
// //   let description =
// //     "As you move forward, concepts take form. What starts as noise becomes clarity.";

// //   if (progress > 0.33 && progress <= 0.66) {
// //     title = "STRUCTURE TAKES SHAPE";
// //     description =
// //       "Patterns begin to organize. Chaos slowly transforms into meaning.";
// //   }

// //   if (progress > 0.66) {
// //     title = "CLARITY IS FORMED";
// //     description =
// //       "What was once abstract becomes tangible. Ideas are now reality.";
// //   }

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative h-[300vh] bg-black"
// //     >
// //       {/* 🔥 STICKY VIEWPORT */}
// //       <div className="sticky top-0 h-screen flex items-center justify-center">

// //         {/* CONTAINER */}
// //         <div className="relative w-full max-w-7xl h-full">

// //           {/* DOTS BACKGROUND */}
// //           <div className="absolute inset-0 z-0 flex items-center justify-center">
// //             <DepthDots progress={progress} />
// //           </div>

// //           {/* TEXT */}
// //           <div className="absolute inset-0 z-10 flex items-center justify-center">
// //             <div
// //               style={{
// //                 opacity: 1 - Math.abs(progress - 0.5) * 2, // smooth fade between sections
// //               }}
// //               className="text-center px-6 max-w-2xl transition-all duration-300"
// //             >
// //               <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
// //                 {title}
// //               </h1>

// //               <p className="text-gray-400">
// //                 {description}
// //               </p>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useRef, useEffect, useState } from "react";
// import DepthDots from "./DepthDots";

// export default function ScrollDepthSection() {
//   const sectionRef = useRef(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const p = 1 - rect.bottom / (windowHeight + rect.height);
//       setProgress(Math.max(0, Math.min(1, p)));
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ================= TEXT STATES ================= */

//   let title = "WELCOME TO STELLAR";
//   let description =
//     "Where ideas don’t just appear — they emerge. Step into a space where vision takes form.";

//   if (progress > 0.33 && progress <= 0.66) {
//     title = "STRUCTURE TAKES SHAPE";
//     description =
//       "Patterns begin to organize. Chaos slowly transforms into meaning.";
//   }

//   if (progress > 0.66) {
//     title = "CLARITY IS FORMED";
//     description =
//       "What was once abstract becomes tangible. Ideas are now reality.";
//   }

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[300vh] bg-black"
//     >
//       {/* 🔥 STICKY VIEWPORT */}
//       <div className="sticky top-0 h-screen flex items-center justify-center">

//         {/* CONTAINER */}
//         <div className="relative w-full max-w-full h-full">

//           {/* DOTS BACKGROUND */}
//           <div className="absolute inset-0 z-0 flex items-center justify-center">
//             <DepthDots progress={progress} />
//           </div>

//           {/* TEXT */}
//           <div className="absolute inset-0 z-10 flex items-center justify-center">
//             <div
//               style={{
//                 opacity: 1 - Math.abs(progress - 0.5) * 2,
//               }}
//               className="text-center px-6 max-w-2xl transition-all duration-300"
//             >
//               <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
//                 {title}
//               </h1>

//               <p className="text-gray-400">
//                 {description}
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


//////////////////////////// 2nd VERSION (AFTER REFINEMENT) //


"use client";

import { useRef, useEffect, useState } from "react";
import DepthDots from "./DepthDots";

export default function ScrollDepthSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const p = 1 - rect.bottom / (windowHeight + rect.height);
      setProgress(Math.max(0, Math.min(1, p)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= TEXT STATES ================= */

  let title = "WELCOME TO STELLAR";
  let description =
    "Where ideas don’t just appear — they emerge. Step into a space where vision takes form.";

  if (progress > 0.33 && progress <= 0.66) {
    title = "STRUCTURE TAKES SHAPE";
    description =
      "Patterns begin to organize. Chaos slowly transforms into meaning.";
  }

  if (progress > 0.66) {
    title = "CLARITY IS FORMED";
    description =
      "What was once abstract becomes tangible. Ideas are now reality.";
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-black"
    >
      {/* 🔥 STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen flex items-center justify-center">

        {/* CONTAINER */}
        <div className="relative w-full max-w-full h-full">

          {/* DOTS BACKGROUND */}
          <div className="absolute inset-0 z-0">
            <DepthDots progress={progress} />
          </div>

          {/* 🔥 LIGHT GRADIENT OVERLAY (KEY EFFECT) */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(0,0,0,1) 0%,
                  rgba(0,0,0,0.9) 35%,
                  rgba(255,255,255,0.1) 60%,
                  rgba(255,255,255,0.7) 100%
                )
              `,
              mixBlendMode: "screen",
            }}
          />

          {/* TEXT */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div
              style={{
                opacity: 1 - Math.abs(progress - 0.5) * 2,
              }}
              className="text-center px-6 max-w-2xl transition-all duration-300"
            >
              <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
                {title}
              </h1>

              <p className="text-gray-400">
                {description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


