import { developmentProcessData } from "@/app/data/developmentProcessData";

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#0f0f0f] py-32 px-6 text-white">
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
              text-white
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
              text-[#d1d1d1]
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
                bg-[#1a1a1a]
                border border-[#2a2a2a]
                rounded-[14px]
                p-3
                min-h-[200px]
              "
            >
              <span className="text-blue-500 text-[12px] font-medium">
                {step.number}
              </span>

              <h3
                className="
                  mt-2
                  text-[15px]
                  leading-[1.2]
                  font-light
                  text-white
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
                  text-[#d1d1d1]
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