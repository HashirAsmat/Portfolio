import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function ProjectQuantum() {
  return (
    <div className="w-[95%] mt-20 mb-20 mx-auto">

      {/* Image Section */}
      <div className="w-[95%] h-[250px] bg-[#282828] flex flex-col items-center justify-center mx-auto">
        <div className="w-full max-w-[640px] h-[200px] bg-gray-100 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <Image
            src="/qla_pk_cover.jpeg"
            alt="Quantum Academy Internship"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[40px] md:text-[50px] font-bold text-color_h1 w-[95%] mx-auto mt-20">
        Quantum Academy <span className="text-[#f5780f]">Internship</span>
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
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">Role</h3>
              <p className="text-base md:text-lg font-semibold">
                Node.js Express - Backend Developer{" "}
              </p>
            </div>

            {/* Team */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">Team</h3>
              <p className="text-base md:text-lg font-semibold">
                Blood Connect App - Backend Team
              </p>
            </div>

            {/* Duration */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">Duration</h3>
              <p className="text-base md:text-lg font-semibold">
                September – March 2022 (6 Months)
              </p>
            </div>

            {/* GitHub Repository */}
            <div className="md:col-span-3 flex items-center space-x-3 mt-4">
              <FaGithub className="text-2xl  text-purple-500" />
              <a
                href="https://github.com/HashirAsmat/blood_proj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-semibold text-[#f5780f] hover:underline"
              >
                View GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brief */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">Brief</h1>
          </div>
          <div className="md:w-3/4 space-y-4">
            <p className="text-lg md:text-xl font-bold leading-snug text-color_h1">
              During my internship, I worked as a Backend Node.js Express Developer, contributing to the development and testing of APIs while honing my technical skills.
            </p>
            <p className="text-color_h1 leading-relaxed">
              My role involved creating robust APIs, thoroughly testing them with Postman, and collaborating with a team using GitHub for version control and Jira for task management. 
              I also gained valuable experience working in a professional environment, utilizing tools like Slack for team communication, Google Meet for attending meetings, and Google Calendar for managing schedules efficiently.
              This internship not only exposed me to essential tools and practices but also provided me with a strong foundation for thriving in the IT industry, significantly polishing my skills for a professional career.
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
              I focused on stepping out of my comfort zone and embracing challenges that pushed me to grow both professionally and personally. 
              The initial phase required me to adapt to a new environment, collaborate effectively with team members, and navigate the processes of working in a structured, fast-paced setting. 
              Through consistent communication and participation in team activities, I learned the importance of organization, time management, and building strong working relationships.
            </p>
            <p className="text-color_h1 leading-relaxed">
              As the internship progressed, I took on more responsibilities and grew increasingly confident in my ability to contribute meaningfully. 
              Regular feedback and guidance from my mentors helped me refine my approach to problem-solving and decision-making. 
              By the end of the internship, I had developed a deeper understanding of how to work efficiently within a team, lead discussions when necessary, and manage my tasks independently. 
              This experience significantly enhanced my ability to adapt to new challenges and prepared me for future opportunities in the industry.
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
              The internship was challenging but provided a tremendous opportunity for growth, allowing me to learn far more than I anticipated.
            </p>
            <p className="text-color_h1 leading-relaxed">
              I was tasked with working on a project that required me to explore and understand database structures and design principles, areas I hadn’t deeply worked in before. 
              Creating ERDs and diving into MySQL databases taught me how to approach problems systematically, starting from a broad overview and narrowing down to intricate details. 
              These experiences pushed me beyond my comfort zone, sharpening my analytical skills and enhancing my ability to think critically about system design. 
              Overall, the internship helped me develop a more structured approach to problem-solving and a better understanding of how to work effectively in collaborative environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
