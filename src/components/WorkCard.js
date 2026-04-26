// // "use client";

// // import { useEffect, useRef, useState } from "react";

// // export default function WorkCard({
// //   title = "Salesforce Platform",
// //   description = "Custom solutions. Smarter automation. Better CRM.",
// //   image = "/salesforce_workplace.png",
// //   logo = "/logos/salesforce.svg",
// //   Cardlabel = "01 | SALESFORCE ENGINEER",
// // }) {
// //   const ref = useRef(null);
// //   const [progress, setProgress] = useState(0);
// //   const [isHovered, setIsHovered] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!ref.current) return;

// //       const rect = ref.current.getBoundingClientRect();
// //       const windowHeight = window.innerHeight;

// //       const elementCenter = rect.top + rect.height / 2;
// //       const viewportCenter = windowHeight / 2;

// //       const distance = Math.abs(viewportCenter - elementCenter);
// //       const maxDistance = windowHeight * 0.8;

// //       let p = 1 - distance / maxDistance;
// //       p = Math.max(0, Math.min(1, p));

// //       const eased = 1 - Math.pow(1 - p, 3);
// //       setProgress(eased);
// //     };

// //     handleScroll();
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div className="w-full flex justify-center bg-black py-2 md:py-12 px-4">

// //       {/* SCALE WRAPPER */}
// //       <div
// //         ref={ref}
// //         style={{
// //           transform: `
// //             scale(${0.75 + progress * 0.25})
// //             translateY(${80 - progress * 80}px)
// //           `,
// //         }}
// //         className="will-change-transform w-full max-w-[1100px]"
// //       >

// //         {/* CARD */}
// //         <div
// //           className="relative w-full h-auto md:h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b0b]"
// //           onMouseEnter={() => setIsHovered(true)}
// //           onMouseLeave={() => setIsHovered(false)}
// //         >

// //           {/* BACKGROUND */}
// //           <div
// //             className="absolute inset-0"
// //             style={{
// //               background: `
// //                 linear-gradient(
// //                   to right,
// //                   rgba(0,0,0,1) 0%,
// //                   rgba(0,0,0,0.95) 25%,
// //                   rgba(30,30,30,0.8) 55%,
// //                   rgba(255,255,255,0.08) 100%
// //                 )
// //               `,
// //             }}
// //           />

// //           {/* 🔥 CONDITIONAL RENDERING */}

// //           {!isHovered ? (
// //             // ================= NORMAL VIEW =================
// //             <div className="relative z-10 h-full">

// //               {/* LABEL */}
// //               <div className="absolute top-6 left-6 text-gray-400 text-xs md:text-sm tracking-widest z-20">
// //                 {Cardlabel}
// //               </div>

// //               {/* LOGO */}
// //               <div className="absolute top-5 right-5 z-20">
// //                 <img
// //                   src={logo}
// //                   alt="logo"
// //                   className="w-10 h-10 md:w-16 md:h-16 object-contain"
// //                 />
// //               </div>

// //               {/* CONTENT */}
// //               <div className="relative flex flex-col md:flex-row h-full">

// //                 {/* IMAGE */}
// //                 <div className="w-full md:w-[45%] h-[220px] md:h-full relative overflow-hidden">
// //                   <img
// //                     src={image}
// //                     alt={title}
// //                     className="absolute bottom-0 left-0 w-full h-[75%] md:h-[80%] object-cover"
// //                   />
// //                 </div>

// //                 {/* TEXT */}
// //                 <div className="flex-1 flex items-center px-5 py-6 md:pl-10 md:pr-16">
// //                   <div>
// //                     <h2 className="text-white text-2xl md:text-4xl font-semibold mb-3 md:mb-4">
// //                       {title}
// //                     </h2>

// //                     <p className="text-gray-400 text-sm md:text-lg">
// //                       {description}
// //                     </p>
// //                   </div>
// //                 </div>

// //               </div>
// //             </div>

// //           ) : (
// //             // ================= HOVER VIEW =================
// //             <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-20 transition-all duration-500">

// //               <img
// //                 src={logo}
// //                 alt="logo"
// //                 className="w-24 md:w-32 opacity-90 animate-pulse"
// //               />

// //             </div>
// //           )}

// //           {/* BORDER */}
// //           <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function WorkCard({
//   title = "Salesforce Platform",
//   description = "Custom solutions. Smarter automation. Better CRM.",
//   image = "/salesforce_workplace.png",
//   logo = "/logos/salesforce.svg",
//   Cardlabel = "01 | SALESFORCE ENGINEER",
//   companylogo = {companylogo}
// }) {
//   const ref = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const elementCenter = rect.top + rect.height / 2;
//       const viewportCenter = windowHeight / 2;

//       const distance = Math.abs(viewportCenter - elementCenter);
//       const maxDistance = windowHeight * 0.8;

//       let p = 1 - distance / maxDistance;
//       p = Math.max(0, Math.min(1, p));

//       const eased = 1 - Math.pow(1 - p, 3);
//       setProgress(eased);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full flex justify-center bg-black py-2 md:py-12 px-4">

//       {/* SCALE WRAPPER */}
//       <div
//         ref={ref}
//         style={{
//           transform: `
//             scale(${0.75 + progress * 0.25})
//             translateY(${80 - progress * 80}px)
//           `,
//         }}
//         className="will-change-transform w-full max-w-[1100px]"
//       >

//         {/* CARD */}
//         <div
//           className="relative w-full h-auto md:h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b0b]"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >

//           {/* BACKGROUND */}
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

//           {/* ================= NORMAL CONTENT ================= */}
//           <div
//             className="absolute inset-0 z-10 transition-all duration-500 ease-out"
//             style={{
//               opacity: isHovered ? 0 : 1,
//               transform: `scale(${isHovered ? 0.96 : 1})`,
//             }}
//           >

//             {/* LABEL */}
//             <div className="absolute top-6 left-6 text-gray-400 text-xs md:text-sm tracking-widest z-20">
//               {Cardlabel}
//             </div>

//             {/* LOGO */}
//             <div className="absolute top-5 right-5 z-20">
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="w-10 h-10 md:w-16 md:h-16 object-contain"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="relative flex flex-col md:flex-row h-full">

//               {/* IMAGE */}
//               <div className="w-full md:w-[45%] h-[220px] md:h-full relative overflow-hidden">
//                 <img
//                   src={image}
//                   alt={title}
//                   className="absolute bottom-0 left-0 w-full h-[75%] md:h-[80%] object-cover"
//                 />
//               </div>

//               {/* TEXT */}
//               <div className="flex-1 flex items-center px-5 py-6 md:pl-10 md:pr-16">
//                 <div>
//                   <h2 className="text-white text-2xl md:text-4xl font-semibold mb-3 md:mb-4">
//                     {title}
//                   </h2>

//                   <p className="text-gray-400 text-sm md:text-lg">
//                     {description}
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* ================= HOVER LAYER ================= */}
//           <div
//             className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 ease-out"
//             style={{
//               opacity: isHovered ? 1 : 0,
//               transform: `scale(${isHovered ? 1 : 0.9})`,
//             }}
//           >
//             <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

//             <img
//               src={companylogo}
//               alt="logo"
//               className="relative z-10 w-32 md:w-34 opacity-90"
//             />
//           </div>

//           {/* BORDER */}
//           <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function WorkCard({
  title = "Salesforce Platform",
  description = "Custom solutions. Smarter automation. Better CRM.",
  image = "/salesforce_workplace.png",
  logo = "/logos/salesforce.svg",
  Cardlabel = "01 | SALESFORCE ENGINEER",
  companylogo = "/logos/infinywise.png",
  gradientColor = "0, 140, 255", // RGB
}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

      {/* SCALE WRAPPER */}
      <div
        ref={ref}
        style={{
          transform: `
            scale(${0.75 + progress * 0.25})
            translateY(${80 - progress * 80}px)
          `,
        }}
        className="will-change-transform w-full max-w-[1100px]"
      >

        {/* CARD */}
        <div
          className="relative w-full h-auto md:h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b0b]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* 🔥 BASE DARK BACKGROUND */}
          <div className="absolute inset-0 bg-[#0b0b0b]" />

          {/* 🔥 DYNAMIC GRADIENT (ONLY WHEN NOT HOVERED) */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isHovered ? 0 : 1,
              background: `
                linear-gradient(
                  to right,
                  rgba(${gradientColor}, 0.35) 0%,
                  rgba(${gradientColor}, 0.15) 25%,
                  rgba(${gradientColor}, 0.05) 50%,
                  rgba(0,0,0,0) 80%
                )
              `,
            }}
          />

          {/* ================= NORMAL CONTENT ================= */}
          <div
            className="absolute inset-0 z-10 transition-all duration-500 ease-out"
            style={{
              opacity: isHovered ? 0 : 1,
              transform: `scale(${isHovered ? 0.96 : 1})`,
            }}
          >

            {/* LABEL */}
            <div className="absolute top-6 left-6 text-gray-400 text-xs md:text-sm tracking-widest z-20">
              {Cardlabel}
            </div>

            {/* LOGO */}
            <div className="absolute top-5 right-5 z-20">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 md:w-16 md:h-16 object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="relative flex flex-col md:flex-row h-full">

              {/* IMAGE */}
              <div className="w-full md:w-[45%] h-[220px] md:h-full relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="absolute bottom-0 left-0 w-full h-[75%] md:h-[80%] object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="flex-1 flex items-center px-5 py-6 md:pl-10 md:pr-16">
                <div>
                  <h2 className="text-white text-2xl md:text-4xl font-semibold mb-3 md:mb-4">
                    {title}
                  </h2>

                  <p className="text-gray-400 text-sm md:text-lg">
                    {description}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= HOVER LAYER ================= */}
          <div
            className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 ease-out"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: `scale(${isHovered ? 1 : 0.9})`,
            }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <img
              src={companylogo}
              alt="company"
              className="relative z-10 w-28 md:w-36 opacity-90"
            />
          </div>

          {/* BORDER */}
          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}