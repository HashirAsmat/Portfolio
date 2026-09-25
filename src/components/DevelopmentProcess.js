import { developmentProcessData } from "@/app/data/developmentProcessData";

export default function DevelopmentProcess() {
  return (
    <section className="bg-[rgb(var(--background))] py-32 px-6 text-[rgb(var(--color-h1-theme))]">
      <div className="max-w-[1700px] mx-auto">
        {/* Heading */}
        <div className="max-w-[950px]">
          <h2
            className="
              text-[28px]
              md:text-[38px]
              leading-[0.95]
              tracking-[-0.04em]
              font-light
              text-[rgb(var(--color-h1-theme))]
            "
          >
            Our development
            <br />
            process
          </h2>

          <p
            className="
              mt-6
              text-[13px]
              md:text-[14px]
              leading-[1.5]
              text-[rgb(var(--color-faint))]
              max-w-[1200px]
            "
          >
            Every successful digital product begins with understanding the
            business challenge. Our process combines strategy, technology, and
            execution to deliver scalable solutions that solve real problems,
            improve efficiency, and support long-term growth.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2 mt-10">
          {developmentProcessData.map((step) => (
            <div
              key={step.number}
              className="
                bg-[rgb(var(--surface-primary))]
                border border-[rgb(var(--border-color))]
                rounded-[14px]
                p-3
                min-h-[200px]
              "
            >
              <span className="text-[rgb(var(--accent))] text-[12px] font-medium">
                {step.number}
              </span>

              <h3
                className="
                  mt-2
                  text-[15px]
                  leading-[1.2]
                  font-light
                  text-[rgb(var(--color-h1-theme))]
                "
              >
                {step.title.split(" & ").map((part, index, arr) => (
                  <span key={`${step.number}-${part}-${index}`} className="block">
                    {part}
                    {index < arr.length - 1 && " &"}
                  </span>
                ))}
              </h3>

              <p
                className="
                  mt-2
                  text-[11px]
                  leading-[1.45]
                  text-[rgb(var(--color-faint))]
                "
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}