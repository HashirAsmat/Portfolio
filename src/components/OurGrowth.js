import { ourGrowthData } from "@/app/data/ourGrowthData";

export default function OurGrowth() {
  return (
    <section className="bg-[rgb(var(--background))] py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-center uppercase tracking-[0.35em] text-[16px] md:text-[18px] font-light text-[rgb(var(--color-h1-theme))] mb-20">
          Our Growth
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[rgb(var(--border-color))]">
          {ourGrowthData.map((item, index) => (
            <div
              key={item.id}
              className={`
                group
                p-12 lg:p-14
                min-h-[420px]
                border-[rgb(var(--border-color))]
                transition-colors duration-300 ease-out
                hover:bg-[rgb(var(--inverse-bg))]
                hover:text-[rgb(var(--inverse-text))]

                ${
                  index !== ourGrowthData.length - 1
                    ? " border-b lg:border-r"
                    : ""
                }

                ${
                  index < ourGrowthData.length - 3
                    ? " lg:border-b-2"
                    : ""
                }
              `}
            >
              <span className="text-[18px] font-light text-[rgb(var(--color-faint))] transition-colors duration-300 group-hover:text-[rgb(var(--inverse-text))]">
                {item.id}
              </span>

              <div className="mt-10 max-w-[340px]">
                <p className="text-[12px] uppercase tracking-[0.35em] text-[rgb(var(--color-faint))] mb-8 transition-colors duration-300 group-hover:text-[rgb(var(--inverse-text))]">
                  {item.category}
                </p>

                <h3 className="text-[15px] md:text-[18px] leading-[1.35] font-medium text-[rgb(var(--color-h1-theme))] transition-colors duration-300 group-hover:text-[rgb(var(--inverse-text))]">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-6 text-[13px] leading-[1.8] text-[rgb(var(--color-faint))] transition-colors duration-300 group-hover:text-[rgb(var(--inverse-text))]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}