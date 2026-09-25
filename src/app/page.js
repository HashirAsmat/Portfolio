import WorkHistory from "@/components/WorkHistory";
import TechnologyStack from "@/components/TechnologyStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import ScrollEffects from "@/components/ScrollEffects";
import ScrollDepthSection from "@/components/ScrollDepthSection";
import WorkCard from "@/components/WorkCard";
import SectionHeading from "@/components/SectionHeading";
import OurGrowth from "@/components/OurGrowth";
import CaseStudies from "@/components/CaseStudies";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>  
    <ScrollEffects />
     <Hero />
    {/* <ScrollDepthSection /> */}

    <SectionHeading title={'selected work'}/>
    <WorkCard/>
    <OurGrowth />
    <CaseStudies />
    <Technologies />
    <div className="parent-container px-6 sm:px-10 md:px-20 pt-10 relative max-w-[1300px] mx-auto">


      {/* Other Components */}
      <div>
    
      </div>
      {/* <div>
        <WorkHistory />
      </div> */}
      
      {/* <div className="mt-10">
        <TechnologyStack />
      </div> */}
      <div className="mt-10">
        <FeaturedProjects />
      </div>
    </div>
    </>
  );
}
