import { ourGrowthData } from "@/app/data/ourGrowthData";

export default function OurGrowth() {
  return (
    <section className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-center uppercase tracking-[0.35em] text-[16px] md:text-[18px] font-light text-white mb-20">
          Our Growth
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 border border-gray-700">
          {ourGrowthData.map((item, index) => (
            <div
              key={item.id}
              className={`
                group
                p-12 lg:p-14
                min-h-[420px]
                border-gray-700
                transition-colors duration-300 ease-out
                hover:bg-[#ececec]

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
              <span className="text-[18px] font-light text-gray-400 transition-colors duration-300 group-hover:text-black">
                {item.id}
              </span>

              <div className="mt-10 max-w-[340px]">
                <p className="text-[12px] uppercase tracking-[0.35em] text-gray-400 mb-8 transition-colors duration-300 group-hover:text-black">
                  {item.category}
                </p>

                <h3 className="text-[15px] md:text-[18px] leading-[1.35] font-medium text-white transition-colors duration-300 group-hover:text-black">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-6 text-[13px] leading-[1.8] text-gray-400 transition-colors duration-300 group-hover:text-black">
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