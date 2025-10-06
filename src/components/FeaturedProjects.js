'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProjects() {
  return (
    <div className="feat-projects w-[100%] mb-20">
      {/* Section Title */}
      <span className="font-inter text-[40px] sm:text-[55px] md:text-[70px] lg:text-[88px] font-extrabold leading-tight text-color_faint tracking-wide block">
        Featured Projects
      </span>
     <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 mt-10">
  <p className="text-color_h1 text-sm md:text-base mb-0 font-bold">
    All the projects are compiled into a single <span className='text-[#f5780f]'>PDF file</span>
    <span className="text-lg mx-2 md:mx-3">→</span>
  </p>
  <button
    className="px-6 py-3 text-sm md:text-md font-semibold text-black bg-gray-200 rounded-md w-full md:w-auto"
  >
     <a
                  href="https://drive.google.com/file/d/1CYM4OO1XEi3Pg95_-S0sNwdCM22FI95a/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ALL PROJECTS
                </a>
    
  </button>
</div>
 <hr className='text-color_h1 mt-10'/>
      {/* Salesforce Developer */}
      <div className="flex flex-col items-start gap-4 mt-16">
        <div className="flex gap-2 mb-4">
          <Link href="/currentWork">
            <button className="px-6 py-3 text-sm md:text-md font-semibold text-black bg-gray-200 rounded-md" id='current'>
              CURRENT
            </button>
          </Link>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold flex items-center text-color_h1">
          Salesforce Developer 
        </h2>
        <p className="text-color_h1 mb-4 text-sm md:text-base">
          FULL STACK DEVELOPER (REMOTE) AT INFINYWISE
        </p>
        <div className="w-full max-w-[640px] h-[220px] sm:h-[280px] md:h-[360px] bg-gray-200 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
          <Image src="/logos/salesforce.svg" alt="Salesforce project" width={220} height={220} className="object-contain" />
        </div>
      </div>

      {/* HoneyOnline */}
      <div className="flex flex-col items-start gap-4 mt-28">
        <div className="flex gap-2 mb-4">
          <Link href="/projectHoneyonline">
            <button className="px-6 py-3 text-sm md:text-md font-semibold text-black bg-gray-200 rounded-md" id='honeyonline'>
              DETAILS
            </button>
          </Link>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-2 text-color_h1">
          HoneyOnline 
        </h2>
        <p className="text-color_h1 mb-4 text-sm md:text-base">
          HoneyOnline (Infinywise) Role: Full Stack Developer
        </p>
        <div className="w-full max-w-[640px] h-[220px] sm:h-[280px] md:h-[360px] bg-gray-200 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <Image src="/honeyonline.png" alt="HoneyOnline project" fill style={{ objectFit: 'cover' }} className="rounded-md" />
        </div>
      </div>

      {/* Stride */}
      <div className="flex flex-col items-start gap-4 mt-28">
        <div className="flex gap-2 mb-4">
          <Link href="/projectStride">
            <button className="px-6 py-3 text-sm md:text-md font-semibold text-black bg-gray-200 rounded-md" id='stride'>
              DETAILS
            </button>
          </Link>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-2 text-color_h1">
          Final Year Project 
        </h2>
        <p className="text-color_h1 mb-4 text-sm md:text-base">
          Final Year Project (FYP) Role: Frontend Lead
        </p>
        <div className="w-full max-w-[640px] h-[220px] sm:h-[280px] md:h-[360px] bg-gray-200 rounded-md overflow-hidden relative mx-auto shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <Image src="/STRIDE.png" alt="Stride project" fill style={{ objectFit: 'cover' }} className="rounded-md" />
        </div>
      </div>

      {/* Internship */}
      <div className="flex flex-col items-start gap-4 mt-28">
        <div className="flex gap-2 mb-4">
          <Link href="/projectQuantum">
            <button className="px-6 py-3 text-sm md:text-md font-semibold text-black bg-gray-200 rounded-md" id='bloodConnect'>
              INTERNSHIP
            </button>
          </Link>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-2 text-color_h1">
          Quantum Academy Internship 
        </h2>
        <p className="text-color_h1 mb-4 text-sm md:text-base">
          A summary of my growth and experiences working at Quantum Academy.
        </p>
        <div className="w-full max-w-[640px] h-[220px] sm:h-[280px] md:h-[360px] bg-gray-100 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <Image src="/qla_pk_cover.jpeg" alt="Quantum Academy Internship" fill style={{ objectFit: 'cover' }} className="rounded-md" />
        </div>
      </div>

      {/* CoinTracker */}
      <div className="flex flex-col items-start gap-4 mt-28">
        <div className="flex gap-2 mb-4">
          <Link href="/projectCoinTracker">
            <button className="px-6 py-3 text-sm md:text-md font-semibold text-black bg-gray-200 rounded-md" id='coinTracker'>
              DETAILS
            </button>
          </Link>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-2 text-color_h1">
          Coin Tracker 
        </h2>
        <p className="text-color_h1 mb-4 text-sm md:text-base">
          Coin Tracker - Role: Project Lead worked as Full Stack Developer
        </p>
        <div className="w-full max-w-[1280px] flex flex-col md:flex-row h-auto md:h-[360px] gap-4 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <div className="relative w-full md:w-1/2 h-[200px] md:h-auto">
            <Image src="/CoinBouncer2.png" alt="Coin Tracker part 1" fill style={{ objectFit: 'cover' }} className="rounded-md" />
          </div>
          <div className="relative w-full md:w-1/2 h-[200px] md:h-auto">
            <Image src="/CoinBouncer3.png" alt="Coin Tracker part 2" fill style={{ objectFit: 'cover' }} className="rounded-md" />
          </div>
        </div>
      </div>

      {/* Virtual Event Planner */}
      <div className="flex flex-col items-start gap-4 mt-28">
        <div className="flex gap-2 mb-4">
          <Link href="/projectVirtualEventPlanner">
            <button className="px-6 py-3 text-sm md:text-md font-semibold text-black bg-gray-200 rounded-md" id='virtualEventPlanner'>
              DETAILS
            </button>
          </Link>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-2 text-color_h1">
          Current Part Time Project - Event Planner 
        </h2>
        <p className="text-color_h1 mb-4 text-sm md:text-base">
          Virtual Event Planner - Role: Working as a Full Stack Developer
        </p>
        <div className="w-full max-w-[1280px] flex flex-col md:flex-row h-auto md:h-[360px] gap-4 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <div className="relative w-full md:w-1/2 h-[200px] md:h-auto">
            <Image src="/eventplanner.png" alt="event planner part 1" fill style={{ objectFit: 'cover' }} className="rounded-md" />
          </div>
          <div className="relative w-full md:w-1/2 h-[200px] md:h-auto">
            <Image src="/eventplanner2.png" alt="event planner part 2" fill style={{ objectFit: 'cover' }} className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
