// "use client";

// import { motion } from "framer-motion";

// export default function WorkHistory() {
//   const workItemVariants = {
//     hidden: { opacity: 0, y: 0 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div
//       className="work-history flex flex-col md:flex-row justify-between gap-10 md:gap-6 mt-10 md:mt-40 w-[95%] mx-auto"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       {/* CURRENT */}
//       <motion.div className="current w-full md:w-1/3" variants={workItemVariants}>
//         <span className="font-inter text-lg md:text-xl font-bold text-color_faint tracking-wide block mb-3 md:mb-5">
//           CURRENT
//         </span>
//         <span className="font-inter text-sm md:text-base lg:text-lg font-medium text-color_logo tracking-wide block leading-relaxed">
//           <a href="#current" className="border-b-2 border-b-[#7E22CE]">
//             Salesforce Developer
//           </a>
//           &nbsp; at Infinywise, working on automation flows, Apex triggers, and
//           Lightning Web Components.
//         </span>
//       </motion.div>

//       {/* SOON */}
//       <motion.div className="soon w-full md:w-1/3" variants={workItemVariants}>
//         <span className="font-inter text-lg md:text-xl font-bold text-color_faint tracking-wide block mb-3 md:mb-5">
//           Future Goal
//         </span>
//         <span className="font-inter text-sm md:text-base lg:text-lg font-medium text-color_logo tracking-wide block leading-relaxed">
//           Aiming to become a Digital Transformation Consultant, uniting software development and CRM expertise to drive smart and scalable digital solutions
//         </span>
//       </motion.div>

//       {/* PAST */}
//       <motion.div className="past w-full md:w-1/3" variants={workItemVariants}>
//         <span className="font-inter text-lg md:text-xl font-bold text-color_faint tracking-wide block mb-3 md:mb-5">
//           PAST
//         </span>
//         <span className="font-inter text-sm md:text-base lg:text-lg font-medium text-color_logo tracking-wide block leading-relaxed">
//           Worked on projects including{" "}
//           <a href="#honeyonline" className="border-b-2 border-b-[#7E22CE]">
//             HoneyOnline
//           </a>
//           ,{" "}
//           <a href="#stride" className="border-b-2 border-b-[#7E22CE]">
//             Stride
//           </a>
//           ,{" "}
//           <a href="#coinTracker" className="border-b-2 border-b-[#7E22CE]">
//             CoinTracker
//           </a>
//           ,{" "}
//           <a href="#virtualEventPlanner" className="border-b-2 border-b-[#7E22CE]">
//             Virtual Event Planner
//           </a>
//           , and{" "}
//           <a href="#bloodConnect" className="border-b-2 border-b-[#7E22CE]">
//             Blood Connect
//           </a>{" "}
//           as a Backend Developer Intern.
//         </span>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function WorkHistory() {
  const workItemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="work-history flex flex-col md:flex-row justify-between gap-8 md:gap-15 mt-10 md:mt-40 w-[100%] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* CURRENT */}
      <motion.div className="current w-full md:w-1/3" variants={workItemVariants}>
        <span className="font-inter text-lg md:text-xl font-bold text-color_faint tracking-wide block mb-3 md:mb-5">
          CURRENT
        </span>
        <span className="font-inter text-xs md:text-sm lg:text-base font-medium text-color_logo tracking-wide block leading-relaxed">
          <a href="#current" className="border-b-2 border-b-[#7E22CE]">
            Salesforce Developer
          </a>
          &nbsp; at Infinywise, working on automation flows, Apex triggers, and
          Lightning Web Components.
        </span>
      </motion.div>

      {/* FUTURE GOAL */}
      <motion.div className="soon w-full md:w-1/3" variants={workItemVariants}>
        <span className="font-inter text-lg md:text-xl font-bold text-color_faint tracking-wide block mb-3 md:mb-5">
          Future Goal
        </span>
        <span className="font-inter text-xs md:text-sm lg:text-base font-medium text-color_logo tracking-wide block leading-relaxed">
          Aiming to become a Digital Transformation Consultant, uniting software development and CRM expertise to drive smart and scalable digital solutions.
        </span>
      </motion.div>

      {/* PAST */}
      <motion.div className="past w-full md:w-1/3" variants={workItemVariants}>
        <span className="font-inter text-lg md:text-xl font-bold text-color_faint tracking-wide block mb-3 md:mb-5">
          PAST
        </span>
        <span className="font-inter text-xs md:text-sm lg:text-base font-medium text-color_logo tracking-wide block leading-relaxed">
          Worked on projects including{" "}
          <a href="#honeyonline" className="border-b-2 border-b-[#7E22CE]">
            HoneyOnline
          </a>
          ,{" "}
          <a href="#stride" className="border-b-2 border-b-[#7E22CE]">
            Stride
          </a>
          ,{" "}
          <a href="#coinTracker" className="border-b-2 border-b-[#7E22CE]">
            CoinTracker
          </a>
          ,{" "}
          <a href="#virtualEventPlanner" className="border-b-2 border-b-[#7E22CE]">
            Virtual Event Planner
          </a>
          , and{" "}
          <a href="#bloodConnect" className="border-b-2 border-b-[#7E22CE]">
            Blood Connect
          </a>{" "}
          as a Backend Developer Intern.
        </span>
      </motion.div>
    </motion.div>
  );
}
