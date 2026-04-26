// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function SectionHeading() {
//   const ref = useRef(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const elementCenter = rect.top + rect.height / 2;
//       const viewportCenter = windowHeight / 2;

//       const distance = Math.abs(viewportCenter - elementCenter);

//       const maxDistance = windowHeight * 0.9;

//       let p = 1 - distance / maxDistance;
//       p = Math.max(0, Math.min(1, p));

//       // smooth easing
//       const eased = 1 - Math.pow(1 - p, 3);

//       setProgress(eased);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full flex justify-center bg-black pt-32 pb-10">

//       <div
//         ref={ref}
//         style={{
//           transform: `
//             translateY(${60 - progress * 60}px)
//             scale(${0.95 + progress * 0.05})
//           `,
//           opacity: 0.2 + progress * 0.8,
//         }}
//         className="will-change-transform"
//       >
//         <h2 className="text-gray-500 text-lg tracking-[0.4em] uppercase">
//           Selected Work
//         </h2>
//       </div>

//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionHeading({
  title = title ? title : "Selected Work",
  className = "",
  distance = 60,
  scaleRange = [0.95, 1],
}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
      const maxDistance = windowHeight * 0.9;

      let p = 1 - distanceFromCenter / maxDistance;
      p = Math.max(0, Math.min(1, p));

      // smooth easing
      const eased = 1 - Math.pow(1 - p, 3);

      setProgress(eased);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [minScale, maxScale] = scaleRange;

  return (
    <div className="w-full flex justify-center bg-black pt-10 pb-2">
      
      {/* STATIC WRAPPER (no transform here) */}
      <div ref={ref} className="relative">

        {/* 🔥 ONLY TEXT ANIMATES */}
        <div
          style={{
            transform: `
              translateY(${distance - progress * distance}px)
              scale(${minScale + progress * (maxScale - minScale)})
            `,
            opacity: 0.2 + progress * 0.8,
          }}
          className={`will-change-transform transition-transform duration-200 ${className}`}
        >
          <h2 className="text-gray-500 text-lg tracking-[0.4em] uppercase">
            {title}
          </h2>
        </div>

      </div>
    </div>
  );
}