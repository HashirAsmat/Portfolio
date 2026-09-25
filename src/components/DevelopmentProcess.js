import { Fragment } from "react";
import { developmentProcessData } from "@/app/data/developmentProcessData";

export default function DevelopmentProcess() {
  return (
    <section className="bg-[rgb(var(--background))] py-32 px-6 text-[rgb(var(--color-h1-theme))]">
      <div className="max-w-[1700px] w-full mx-auto">
        {/* Heading */}
        <div className="w-full">
          {/* Centered Heading */}
          <div className="flex justify-center">
            <h2
              className="
                text-center
                uppercase
                tracking-[0.20em]
                text-[16px]
                md:text-[18px]
                font-normal
                text-[rgb(var(--color-h1-theme))]
                max-w-[900px]
              "
            >
              Our Development Process
            </h2>
          </div>

          {/* Left Aligned Summary */}
          <div className="mt-12 max-w-[820px] ml-0">
            <p
              className="
                text-left
                text-[14px]
                sm:text-[15px]
                md:text-[17px]
                leading-[1.7]
                text-[rgb(var(--color-faint))]
                break-words
              "
            >
              We turn ideas into clear, measurable delivery stages that keep
              product, design, and engineering aligned from kickoff to launch.
              Each phase is structured to reduce uncertainty, improve momentum,
              and create a shared understanding of scope, priorities, and
              outcomes. From discovery to execution, we focus on building
              momentum with thoughtful decisions, transparent collaboration,
              and a roadmap that supports long-term growth.
            </p>
          </div>
        </div>

        {/* Process Cards */}
        <div className="mt-12 flex flex-col gap-3 w-full xl:flex-row xl:items-center xl:justify-center xl:gap-0">
          {developmentProcessData.map((step, index) => (
            <Fragment key={step.number}>
              <div
                className="
                  bg-[#ECECE9]
                  dark:bg-[rgb(var(--surface-primary))]
                  border border-[rgb(var(--border-color))]
                  rounded-[12px]
                  px-4
                  py-3
                  min-h-[60px]
                  flex
                  items-center
                  gap-2
                  w-full
                  max-w-[320px]
                  mx-auto
                  xl:max-w-[240px]
                "
              >
                <span className="text-[#9333EA] text-[12px] font-medium whitespace-nowrap">
                  {step.number}
                </span>

                <h3
                  className="
                    text-[12px]
                    sm:text-[13px]
                    md:text-[14px]
                    leading-[1.2]
                    font-light
                    text-[rgb(var(--color-h1-theme))]
                  "
                >
                  {step.title}
                </h3>
              </div>

              {index < developmentProcessData.length - 1 && (
                <div className="hidden xl:flex items-center justify-center px-4 text-[28px] text-black dark:text-white">
                  →
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}