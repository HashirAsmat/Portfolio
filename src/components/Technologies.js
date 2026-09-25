"use client";

import { useState } from "react";
import { technologiesData } from "@/app/data/technologiesData";

export default function Technologies() {
  const [showAll, setShowAll] = useState(false);

  const initialItems = 8;

  const displayedTechnologies = showAll
    ? technologiesData
    : technologiesData.slice(0, initialItems);

  return (
    <section className="bg-[#0f0f0f] py-40 px-8 text-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-12">
          {/* Empty left side */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Right side content */}
          <div className="col-span-12 lg:col-span-6">
            {/* Paragraph */}
            <div className="max-w-[820px]">
              <p className="text-[22px] leading-[1.45] font-normal text-white">
                Technology should serve business goals, not the other way
                around. Every project comes with unique requirements,
                constraints, and growth objectives.
              </p>

              <p className="mt-10 text-[22px] leading-[1.45] font-normal text-white">
                The diversity of technologies we work with enables us to solve
                problems more efficiently. Instead of forcing every project into
                the same stack, we carefully evaluate business needs and select
                the tools that best align with the project's goals, budget, and
                long-term vision.
              </p>

              <p className="mt-10 text-[22px] leading-[1.45] font-normal text-white">
                We specialize in multiple technologies because no single tool is
                the right solution for every problem. Our expertise across
                Salesforce, Shopify, React, Next.js, Node.js, databases, and
                cloud technologies allows us to choose the right technology for
                the right challenge.
              </p>
            </div>

            {/* Large spacing like Catalyst */}
            <div className="mt-28">
              {/* Small label */}
              <div className="inline-flex items-center px-3 h-6 rounded-full bg-[#ecececd7] mb-4">
                <span className="text-[10px] font-medium text-black">
                  Technologies
                </span>
              </div>

              {/* Technology Area */}
              <div className="max-w-[860px]">
                <div className="grid grid-cols-4 gap-3">
                  {displayedTechnologies.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="
                          h-[118px]
                          rounded-[18px]
                          bg-[#ecececd7]
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-300
                          hover:-translate-y-1
                        "
                      >
                        <Icon
                          className="w-14 h-14"
                          style={{
                            color: tech.color || "#fff",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                {technologiesData.length > initialItems && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="
                      mt-3
                      w-full
                      h-7
                      rounded-full
                      bg-[#ecececd7]
                      text-[10px]
                      font-medium
                      text-[#111111]
                      transition-all
                      duration-300
                      hover:bg-[#f3f3f3]
                    "
                  >
                    {showAll
                      ? "Show less technologies"
                      : "Load more technologies"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}