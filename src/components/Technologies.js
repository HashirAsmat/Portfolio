"use client";

import { useState, useEffect } from "react";
import { technologiesData } from "@/app/data/technologiesData";

export default function Technologies() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => setIsDarkMode(document.documentElement.classList.contains("dark"));
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  const [showAll, setShowAll] = useState(false);

  const initialItems = 8;

  const displayedTechnologies = showAll
    ? technologiesData
    : technologiesData.slice(0, initialItems);

  return (
    <section className="bg-[rgb(var(--background))] py-40 px-8 text-[rgb(var(--color-h1-theme))]">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-12">
          {/* Empty left side */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Right side content */}
          <div className="col-span-12 lg:col-span-6">
            {/* Paragraph */}
            <div className="max-w-[820px]">
              <p className="text-[22px] leading-[1.45] font-normal text-[rgb(var(--color-h1-theme))]">
                Technology should serve business goals, not the other way
                around. Every project comes with unique requirements,
                constraints, and growth objectives.
              </p>

              <p className="mt-10 text-[22px] leading-[1.45] font-normal text-[rgb(var(--color-h1-theme))]">
                The diversity of technologies we work with enables us to solve
                problems more efficiently. Instead of forcing every project into
                the same stack, we carefully evaluate business needs and select
                the tools that best align with the project's goals, budget, and
                long-term vision.
              </p>

              <p className="mt-10 text-[22px] leading-[1.45] font-normal text-[rgb(var(--color-h1-theme))]">
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
              <div
                className={`inline-flex items-center px-3 h-6 rounded-full mb-4 ${
                  isDarkMode ? "bg-[#ECECE9]" : "bg-[rgb(var(--surface-secondary))]"
                }`}
              >
                <span
                  className={`text-[10px] font-medium ${
                    isDarkMode ? "text-[#111827]" : "text-[rgb(var(--color-h1-theme))]"
                  }`}
                >
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
                          bg-[#ECECE9]
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          border border-[rgb(var(--border-color))]
                        "
                      >
                        <Icon
                          className="w-14 h-14"
                          style={{
                            color: isDarkMode ? tech.color || "#fff" : "#000000",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                {technologiesData.length > initialItems && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className={`
                      mt-3
                      w-full
                      h-7
                      rounded-full
                      text-[10px]
                      font-medium
                      transition-all
                      duration-300
                      ${
                        isDarkMode
                          ? "bg-[#ECECE9] text-[#111827] hover:bg-[#F3F3F1]"
                          : "bg-[rgb(var(--surface-secondary))] text-[rgb(var(--color-h1-theme))] hover:bg-[rgb(var(--surface-primary))]"
                      }
                    `}
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