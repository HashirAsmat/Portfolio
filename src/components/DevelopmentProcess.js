import { Fragment } from "react";
import { developmentProcessData } from "@/app/data/developmentProcessData";

export default function DevelopmentProcess() {
  return (
    <section className="bg-[rgb(var(--background))] py-32 px-6 text-[rgb(var(--color-h1-theme))] flex items-center justify-center">
      <div className="max-w-[1700px] w-full mx-auto flex flex-col items-center xl:items-center">
        {/* Heading */}
        <div className="max-w-[950px] w-full flex flex-col items-center xl:items-center">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[16px] font-medium text-[rgb(var(--color-h1-theme))] tracking-tight">
            </span>
          </div>

          <h2
            className="
              text-[20px]
              sm:text-[24px]
              md:text-[34px]
              leading-[0.95]
              tracking-[-0.05em]
              font-light
              text-[rgb(var(--color-h1-theme))]
              max-w-none
              text-center
              break-words
              whitespace-normal
            "
          >
            Our Development Process
          </h2>
        </div>

        {/* Process Cards */}
        <div className="mt-10 flex flex-col gap-3 w-full xl:flex-row xl:items-center xl:justify-center xl:gap-0">
          {developmentProcessData.map((step, index) => (
            <Fragment key={step.number}>
              <div
                className="
                  bg-[#ECECE9]
                  dark:bg-[rgb(var(--surface-primary))]
                  border border-[rgb(var(--border-color))]
                  rounded-[12px]
                  px-1.5
                  py-1
                  min-h-[46px]
                  flex
                  items-center
                  gap-1.5
                  w-full
                  max-w-[320px]
                  mx-auto
                  xl:max-w-[200px]
                "
              >
                <span className="text-[#9333EA] text-[12px] font-medium whitespace-nowrap">
                  {step.number}
                </span>

                <h3
                  className="
                    text-[11px]
                    sm:text-[12px]
                    md:text-[14px]
                    leading-[1.1]
                    font-light
                    text-[rgb(var(--color-h1-theme))]
                    whitespace-normal
                  "
                >
                  {step.title}
                </h3>
              </div>

              {index < developmentProcessData.length - 1 && (
                <div className="hidden xl:flex items-center justify-center px-4 text-[30px] text-black dark:text-white">
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