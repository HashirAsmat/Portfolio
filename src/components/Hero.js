// import DotWave from "./DotWave";

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full bg-black overflow-hidden text-white">

//       {/* DOT WAVE BACKGROUND */}
//       <div className="absolute inset-0 z-0">
//         <DotWave />
//       </div>

//       {/* LEFT FADE OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-[1]" />

//       {/* CONTENT */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="max-w-xl px-8 md:px-16">

//           {/* BRAND */}
//           <p className="text-sm tracking-widest text-gray-400 mb-6">
//             STELLAR
//           </p>

//           {/* HEADING */}
//           <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
//             BUILD AT THE EDGE OF DIGITAL TRANSFORMATION
//           </h1>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-700 mb-6"></div>

//           {/* DESCRIPTION */}
//           <p className="text-gray-400 leading-relaxed mb-10">
//             STELLAR delivers modern web solutions, scalable systems, and intelligent automation.
//             We help businesses move faster, build smarter, and lead in a digital-first world.
//           </p>

//           {/* CTA BUTTON */}
//           <button className="px-6 py-3 border border-gray-500 hover:border-white transition">
//             WORK WITH US
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// }

import DotWave from "./DotWave";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* DOT WAVE (RIGHT DOMINANT AREA) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-full md:w-[70%] lg:w-[65%]">
          <DotWave />
        </div>
      </div>

      {/* LEFT FADE OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 sm:px-10 md:px-16">

          {/* TEXT CONTAINER */}
          <div className="max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[520px]">

            {/* BRAND */}
            <p className="text-xs sm:text-sm tracking-[0.25em] text-gray-400 mb-4 sm:mb-6">
              STELLAR
            </p>

            {/* HEADING */}
            <h1 className="
              font-semibold leading-tight mb-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
            ">
              BUILD AT THE EDGE OF DIGITAL TRANSFORMATION
            </h1>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-gray-700 mb-5 sm:mb-6"></div>

            {/* DESCRIPTION */}
            <p className="
              text-gray-400 leading-relaxed mb-8
              text-sm
              sm:text-base
              md:text-lg
            ">
              STELLAR delivers modern web solutions, scalable systems, and intelligent automation.
              We help businesses move faster, build smarter, and lead in a digital-first world.
            </p>

            {/* CTA */}
            <button className="
              px-5 py-2.5
              sm:px-6 sm:py-3
              border border-gray-500
              hover:border-white
              transition
              text-sm sm:text-base
            ">
              WORK WITH US
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}