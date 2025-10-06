import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function ProjectStride() {
  return (
    <div className="w-[95%] mt-20 mb-20 mx-auto">

      {/* Image Section */}
      <div className="w-[95%] h-[250px] bg-[#282828] flex flex-col items-center justify-center mx-auto">
        <div className="w-full max-w-[640px] h-[200px] bg-gray-100 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <Image
            src="/STRIDE.png"
            alt="Stride Final Year Project"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[40px] md:text-[50px] font-bold text-color_h1 w-[95%] mx-auto mt-20">
        Final Year Project <span className="text-[#f5780f]">(Stride)</span>
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
                Frontend Lead{" "}
                <a
                  href="https://drive.google.com/file/d/1bwSHyKzm6Z-q6djStBMwVXUcyBI6FHkx/view?usp=sharing"
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
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">Team</h3>
              <p className="text-base md:text-lg font-semibold">
                Team of 3 Developers
              </p>
            </div>

            {/* Duration */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">Duration</h3>
              <p className="text-base md:text-lg font-semibold">
                April 2023 – July 2024
              </p>
            </div>

            {/* GitHub Repository */}
            <div className="md:col-span-3 flex items-center space-x-3 mt-4">
              <FaGithub className="text-2xl text-purple-500" />
              <a
                href="https://github.com/HashirAsmat/stride-all-in-one-academic"
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
              As the Frontend Lead for Stride, I spearheaded the development of an advanced educational platform designed to enhance digital learning and collaboration.
            </p>
            <p className="text-color_h1 leading-relaxed">
              Using React.js and Redux, I built core features including a custom calendar with <span className="font-semibold">React Calendar</span>, seamless file upload functionalities, and real-time graph visualizations. 
              The project integrated a PostgreSQL database on the backend, ensuring reliable data management and smooth communication between the frontend and backend layers.
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
              This project provided me with hands-on experience in leading a team of developers and coordinating frontend tasks with backend requirements. 
              Working with Redux strengthened my state management expertise, and integrating PostgreSQL taught me how to design robust data-driven features in collaboration with backend developers.
            </p>
            <p className="text-color_h1 leading-relaxed">
              The experience also sharpened my leadership skills—mentoring teammates, delegating tasks, and ensuring code quality through regular reviews. 
              It helped me appreciate the importance of balancing technical implementation with teamwork and clear communication.
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
              Stride was a milestone in my academic journey, blending technical depth with leadership experience.
            </p>
            <p className="text-color_h1 leading-relaxed">
              By leading the frontend team, I not only enhanced my React and Redux expertise but also grew into a role where collaboration, time management, and innovation were key. 
              The project was a stepping stone toward my professional career, giving me the confidence to take ownership of large-scale, real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
