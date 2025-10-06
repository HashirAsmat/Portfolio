

import Image from 'next/image';

export default function CurrentWork() {
  return (
    <div className="w-[95%] mt-10 mb-10 mx-auto">

      {/* Image */}
      <div className="w-[95%] h-[250px]  bg-[#282828] flex flex-col items-center justify-center mx-auto">
        <div className="w-full max-w-[640px] h-[200px] bg-[#282828] rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
          <Image
            src="/logos/salesforce.svg"
            alt="Salesforce Developer at Infinywise"
            width={280}
            height={280}
            className="rounded-md object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[40px] md:text-[50px] font-bold text-color_h1 w-[95%] mx-auto mt-20">
        Salesforce Developer <span className="text-[#f5780f]">at Infinywise</span>
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
                Full Stack Developer (Remote){" "}
                <a
                  href="https://drive.google.com/file/d/1fKywvkKBOAKiwOKfC76ync9OU84uMZLk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5780f] underline ml-2"
                >
                  Check out
                </a>
              </p>
            </div>

            {/* Duration */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">
                Duration
              </h3>
              <p className="text-base md:text-lg font-semibold">July 2024 – Current</p>
            </div>

            {/* Team */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">
                Team
              </h3>
              <p className="text-base md:text-lg font-semibold">
                Salesforce Development Team – Finland University Project
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brief */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8  md:px-0">
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">Brief</h1>
          </div>
          <div className="md:w-3/4 space-y-4">
            <p className="text-lg md:text-xl font-bold leading-snug text-color_h1">
              As a Salesforce Developer at Infinywise, I have been working remotely with a Finnish university client to build and optimize digital solutions on the Salesforce platform.
            </p>
            <p className="text-color_h1 leading-relaxed">
              My role involves identifying and fixing Salesforce issues to improve platform reliability, migrating legacy automations like Workflows and Processes to Salesforce Flows, and building new automations using Flows and Apex Triggers. I also ensure every solution is tested thoroughly in UAT sandboxes before deployment, guaranteeing quality and stability. Additionally, I explore the use of AI tools such as Salesforce Einstein to improve sales predictions and customer behavior models.
            </p>
          </div>
        </div>
      </div>

      {/* Learning and Growth */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">Learning and Growth</h1>
          </div>
          <div className="md:w-3/4 space-y-4">
            <p className="text-color_h1 leading-relaxed">
              This role challenged me to deepen my Salesforce expertise while working in a structured enterprise environment. Migrating legacy automation required adapting best practices, while day-to-day issue resolution demanded quick thinking and collaboration with team members.
            </p>
            <p className="text-color_h1 leading-relaxed">
              Over time, I grew more confident in designing scalable flows, writing optimized Apex triggers, and collaborating with consultants to translate business needs into technical solutions. Exposure to Salesforce Einstein and AI-driven features expanded my view of how predictive tools can shape sales and customer engagement strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Takeaway */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">Takeaway</h1>
          </div>
          <div className="md:w-3/4 space-y-4">
            <p className="text-lg md:text-xl font-bold leading-snug text-color_h1">
              My ongoing work at Infinywise has been a career-defining experience, providing me with both technical mastery and consulting skills.
            </p>
            <p className="text-color_h1 leading-relaxed">
              From resolving critical issues for a live client to deploying automation solutions that streamline operations, this role has significantly strengthened my ability to deliver value as a Salesforce professional. It has also set the foundation for my growth into a Salesforce Consultant, with hands-on knowledge of CRM, AI-driven analytics, and enterprise-level development practices.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
