"use client";

import { motion } from "framer-motion";

export default function ProjectHistory({ role, roleLink, team, duration }) {
  const workItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="work-history flex justify-between flex-row mt-20 items-center w-full mx-auto "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ROLE */}
      <motion.div className="current w-[25%]" variants={workItemVariants}>
        <span className="font-inter text-[20px] font-bold text-color_faint tracking-wide block mb-5">
          ROLE
        </span>
        <span className="font-inter text-[15px] font-bold text-color_logo tracking-wide block">
          {role}
          <a
            href={roleLink}
            className="border-b-2 border-b-[#7E22CE] ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out
          </a>
        </span>
      </motion.div>

      {/* TEAM */}
      <motion.div className="soon w-[25%]" variants={workItemVariants}>
        <span className="font-inter text-[20px] font-bold text-color_faint tracking-wide block mb-5">
          TEAM
        </span>
        <span className="font-inter text-[15px] font-bold text-color_logo tracking-wide block">
          {team}
        </span>
      </motion.div>

      {/* DURATION */}
      <motion.div className="past w-[25%]" variants={workItemVariants}>
        <span className="font-inter text-[20px] font-bold text-color_faint tracking-wide block mb-5">
          DURATION
        </span>
        <span className="font-inter text-[15px] font-bold text-color_logo tracking-wide block">
          {duration}
        </span>
      </motion.div>
    </motion.div>
  );
}