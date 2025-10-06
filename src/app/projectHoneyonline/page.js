import Image from 'next/image';

export default function ProjectHoneyonline() {
  return (
    <div className="w-[95%] mt-20 mb-20 mx-auto">

      {/* Image Section */}
      <div className="w-[95%] h-[200px] bg-[#282828] flex flex-col items-center justify-center mx-auto">
        <div className="w-full max-w-[640px] h-[250px] bg-gray-100 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <Image
            src="/honeyonline.png"
            alt="HoneyOnline Shopify Project"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[40px] md:text-[50px] font-bold text-color_h1 w-[95%] mx-auto mt-20">
        HoneyOnline.pk <span className="text-[#f5780f]">Shopify Project</span>
      </h2>

      {/* Project Info Section */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          {/* Left Column Label */}
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">Project Info</h1>
          </div>

          {/* Right Column Content */}
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Role */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">
                Role
              </h3>
              <p className="text-base md:text-lg font-semibold">
                Full Stack Shopify Developer{" "}
                <a
                  href="https://honeyonline.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5780f] underline ml-2"
                >
                  Check out
                </a>
              </p>
            </div>

            {/* Team */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">
                Team
              </h3>
              <p className="text-base md:text-lg font-semibold">Independent Project</p>
            </div>

            {/* Duration */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">
                Duration
              </h3>
              <p className="text-base md:text-lg font-semibold">June 2021 – January 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brief */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          {/* Left Section */}
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">Brief</h1>
          </div>
          {/* Right Section */}
          <div className="md:w-3/4 space-y-4">
            <p className="text-lg md:text-xl font-bold leading-snug text-color_h1">
              I worked as a Full Stack Shopify Developer, creating and managing the HoneyOnline.pk store with a fully customized user interface and optimized performance.
            </p>
            <p className="text-color_h1 leading-relaxed">
              My role included leveraging Liquid templating to build tailored UI/UX experiences, implementing SEO strategies with tools like SEMrush, Ahrefs, and Google Search Console, and indexing non-indexed pages to improve search visibility and traffic. This project helped HoneyOnline.pk gain more organic reach and establish a professional online presence.
            </p>
          </div>
        </div>
      </div>

      {/* Learning and Growth */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          {/* Left Section */}
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">Learning and Growth</h1>
          </div>
          {/* Right Section */}
          <div className="md:w-3/4 space-y-4">
            <p className="text-color_h1 leading-relaxed">
              Working on HoneyOnline.pk required me to step into full-stack responsibilities, from Shopify theme development to SEO and analytics. I learned how to structure stores for better performance, optimize Liquid templates for maintainability, and track growth using advanced SEO tools.
            </p>
            <p className="text-color_h1 leading-relaxed">
              I also became more proficient in problem-solving, especially when dealing with indexing issues, performance bottlenecks, and ensuring mobile responsiveness. This role strengthened my foundation in e-commerce development and broadened my digital marketing knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Takeaway */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          {/* Left Section */}
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">Takeaway</h1>
          </div>
          {/* Right Section */}
          <div className="md:w-3/4 space-y-4">
            <p className="text-lg md:text-xl font-bold leading-snug text-color_h1">
              This project was my entry point into e-commerce and SEO-focused web development.
            </p>
            <p className="text-color_h1 leading-relaxed">
              By working on every stage of the Shopify development lifecycle, I built confidence in handling independent projects. The HoneyOnline.pk experience gave me real-world exposure to SEO practices, search engine indexing challenges, and building user-focused online stores, all of which have been valuable in my career growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
