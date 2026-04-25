import WorkHistory from "@/components/WorkHistory";
import TechnologyStack from "@/components/TechnologyStack";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="parent-container px-6 sm:px-10 md:px-20 pt-10 relative max-w-[1300px] mx-auto">
         {/* <div
        className="absolute z-0 top-0 right-4 sm:right-10 md:right-[100px] w-[40%] sm:w-[30%] aspect-square bg-cover bg-center opacity-80"
        style={{
          backgroundImage: 'url("/codescroll.webm")', // Replace with the correct path to your GIF
        }}
      ></div> */}
      {/* Hero Text */}
      
      <div className="hero-text relative z-10 text-center md:text-left">
        <span
          className="
            font-inter 
            block 
            font-extrabold 
            tracking-wide 
            text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
            leading-tight sm:leading-[70px] md:leading-[90px] lg:leading-[107px] 
            text-color_faint
          "
        >
          Hashir.
        </span>
        <span
          className="
            font-inter 
            font-extrabold 
            tracking-wide 
            text-3xl sm:text-5xl md:text-6xl lg:text-8xl 
            leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[107px] 
            text-color_h1
          "
        >
          Full Stack Engineer
        </span>
      </div>

      {/* Other Components */}
      <div>
        <WorkHistory />
      </div>
      <div className="mt-10">
        <TechnologyStack />
      </div>
      <div className="mt-10">
        <FeaturedProjects />
      </div>
    </div>
  );
}
