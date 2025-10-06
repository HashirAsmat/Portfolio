import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectCoinTracker() {
  return (
    <div className="w-[95%] mt-20 mb-20 mx-auto">

      {/* Image Section */}
      <div className="w-[95%] h-[250px] bg-[#282828] flex flex-col items-center justify-center mx-auto">
        <div className="w-full max-w-[640px] h-[200px] bg-gray-100 rounded-md overflow-hidden relative mx-auto dark:bg-gray-800 shadow-[0_0_40px_20px_rgba(255,255,255,0.1)]">
          <Image
            src="/CoinBouncer2.png"
            alt="CoinTracker Project"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[40px] md:text-[50px] font-bold text-color_h1 w-[95%] mx-auto mt-20">
        CoinTracker <span className="text-[#f5780f]">Web Application</span>
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
                Project Lead & Full Stack Developer{" "}
                <a
                  href="https://docs.google.com/document/d/1CL7Zv2bgZRsTI2iUccAUegp7iaIxWH61t3re77Kboc0/edit?usp=sharing"
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
              <p className="text-base md:text-lg font-semibold">Full Stack Academic Project</p>
            </div>

            {/* Duration */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-color_faint uppercase tracking-wide mb-2">
                Duration
              </h3>
              <p className="text-base md:text-lg font-semibold">2022 – 2023</p>
            </div>

            {/* GitHub Repository (like other components) */}
            <div className="md:col-span-3 flex items-center space-x-3 mt-4">
              <FaGithub className="text-2xl text-purple-500" />
              <a
                href="https://github.com/HashirAsmat/cointracker"
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
              CoinTracker is a cryptocurrency tracking web app built using the MERN stack, designed to provide users with real-time market insights and a smooth user experience.
            </p>
            <p className="text-color_h1 leading-relaxed">
              The application integrates the <span className="font-semibold">CoinGecko API</span> to fetch up-to-date cryptocurrency data, while React Table is used to display interactive market charts and insights. It also features secure authentication with protected routes, enabling users to sign up, log in, and manage their profiles. Additionally, I implemented a blogging feature with full CRUD operations for posts.
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
              Working on CoinTracker significantly improved my skills in both frontend and backend development. I used <span className="font-semibold">Formik</span> and <span className="font-semibold">Yup</span> to implement form validation across signup, signin, and blog post creation, ensuring secure and user-friendly data entry.
            </p>
            <p className="text-color_h1 leading-relaxed">
              Building authentication and protected routes gave me deeper insight into managing sessions and security in MERN applications. I also gained experience handling third-party APIs efficiently and optimizing rendering for large data sets with React Table.
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
              CoinTracker was one of the most practical MERN projects I built, combining real-world APIs, secure authentication, and interactive data visualization.
            </p>
            <p className="text-color_h1 leading-relaxed">
              It gave me a strong foundation in designing full-stack apps with scalability in mind, managing protected routes, and delivering a polished UI with complex data integrations. The project prepared me to confidently tackle enterprise-level full-stack and fintech applications in my professional career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
