import DotWave from "./DotWave";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-white">

      {/* DOT WAVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <DotWave />
      </div>

      {/* LEFT FADE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-xl px-8 md:px-16">

          {/* BRAND */}
          <p className="text-sm tracking-widest text-gray-400 mb-6">
            STELLAR
          </p>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            BUILD AT THE EDGE OF DIGITAL TRANSFORMATION
          </h1>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-gray-700 mb-6"></div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 leading-relaxed mb-10">
            STELLAR delivers modern web solutions, scalable systems, and intelligent automation.
            We help businesses move faster, build smarter, and lead in a digital-first world.
          </p>

          {/* CTA BUTTON */}
          <button className="px-6 py-3 border border-gray-500 hover:border-white transition">
            WORK WITH US
          </button>

        </div>
      </div>
    </section>
  );
}