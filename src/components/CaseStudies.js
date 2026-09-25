import { caseStudiesData } from "@/app/data/caseStudiesData";

export default function CaseStudies() {
  return (
    <section className="bg-black py-20 px-5 text-white">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-center text-[18px] tracking-[0.35em] uppercase mb-16 text-white">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card item={caseStudiesData[0]} className="lg:col-start-1 lg:row-start-1" />
          <Card item={caseStudiesData[1]} className="lg:col-start-2 lg:row-start-1" />
          <Card item={caseStudiesData[2]} className="lg:col-start-2 lg:row-start-2" />
          <Card item={caseStudiesData[3]} className="lg:col-start-3 lg:row-start-2" />
        </div>
      </div>
    </section>
  );
}

function Card({ item, className = "" }) {
  return (
    <div
      className={`
        ${className}
        bg-[#111111]
        border border-gray-700
        rounded-[24px]
        p-6 sm:p-7
        min-h-[360px] sm:min-h-[430px]
        flex
        flex-col
      `}
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-[20px] sm:text-[24px] leading-[1.2] font-light max-w-[260px] text-white">
          {item.title}
        </h3>

        <a
          href={item.href || "/currentWork"}
          aria-label={`Open ${item.title} project details`}
          className="
            flex-shrink-0
            w-11
            h-11
            rounded-full
            bg-[#ececec]
            text-black
            flex
            items-center
            justify-center
            text-[18px]
            leading-none
            font-semibold
            transition-all
            duration-300
            hover:bg-[#dcdcdc]
            [&>span]:text-black
          "
        >
          <span>→</span>
        </a>
      </div>

      <div className="mt-auto">
        <p className="text-[15px] leading-[1.7] text-gray-400 mb-6">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="
                px-3
                py-1.5
                rounded-full
                bg-[#ececec]
                text-[11px]
                font-medium
                text-black
                border border-gray-700
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}