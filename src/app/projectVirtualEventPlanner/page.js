import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectVirtualEventPlanner() {
  return (
    <div className="w-[95%] mt-20 mb-20 mx-auto">

      {/* Image Section */}
      <div className="w-[95%] h-[250px] bg-[#282828] flex flex-col items-center justify-center mx-auto">
        <div className="w-full max-w-[640px] h-[200px] bg-gray-100 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <Image
            src="/eventplanner2.png"
            alt="Virtual Event Planner Project"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[40px] md:text-[50px] font-bold text-color_h1 w-[95%] mx-auto mt-20">
        Virtual Event Planner <span className="text-[#f5780f]">Web Application</span>
      </h2>

      {/* Project Info Section */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          {/* Left Column Label */}
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">
              Project Info
            </h1>
          </div>

          {/* Right Column Content */}
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Role */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">
                Role
              </h3>
              <p className="text-base md:text-lg font-semibold">
                Full Stack Developer{" "}
                <a
                  href="https://docs.google.com/document/d/1VXl2NUbZwiJ632beBsTlzkcbKIj3Gj85/edit?usp=sharing&ouid=101122169516554251159&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5780f] underline ml-2"
                >
                  Check Doc
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
              <p className="text-base md:text-lg font-semibold">2023 – Ongoing</p>
            </div>

            {/* GitHub Repository */}
            <div className="md:col-span-3 flex items-center space-x-3 mt-4">
              <FaGithub className="text-2xl text-purple-500" />
              <a
                href="https://github.com/HashirAsmat/virtual-event-planner"
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
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">
              Brief
            </h1>
          </div>
          <div className="md:w-3/4 space-y-4">
            <p className="text-lg md:text-xl font-bold leading-snug text-color_h1">
              The Virtual Event Planner is a full-stack web application designed to simplify the organization of online events, integrating user authentication, authorization, and real-time collaboration.
            </p>
            <p className="text-color_h1 leading-relaxed">
              It provides <span className="font-semibold">secure user authentication</span> with OTP-based email verification and role-based access. The app ensures smooth event creation and management with real-time updates, reliable backend logic, and a responsive UI. 
              Strong emphasis was placed on <span className="font-semibold">data protection</span>, password resets, and efficient backend design for scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Learning and Growth */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">
              Learning and Growth
            </h1>
          </div>
          <div className="md:w-3/4 space-y-4">
            <p className="text-color_h1 leading-relaxed">
              This project strengthened my understanding of secure authentication systems and API design. Implementing <span className="font-semibold">OTP-based email verification</span> taught me about token expiration, caching, and session validation.
            </p>
            <p className="text-color_h1 leading-relaxed">
              On the frontend, I worked with reusable React components and managed state efficiently for event creation workflows. On the backend, I implemented role-based access control, password recovery, and form validation, improving my skills in security and scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Takeaway */}
      <div className="my-20 text-color_h1 flex items-center justify-center w-[95%] mx-auto">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:px-0">
          <div className="md:w-1/4">
            <h1 className="text-3xl md:text-4xl text-color_h1 font-normal">
              Takeaway
            </h1>
          </div>
          <div className="md:w-3/4 space-y-4">
            <p className="text-lg md:text-xl font-bold leading-snug text-color_h1">
              Building the Virtual Event Planner enhanced my expertise in creating secure and user-centric full-stack applications.
            </p>
            <p className="text-color_h1 leading-relaxed">
              The project solidified my knowledge of role-based systems, OTP verification, and database-driven workflows — all while maintaining a seamless UI/UX. It reflects my ability to deliver technically sound, production-ready applications from backend logic to frontend design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
