import Image from "next/image";
import Link from "next/link";

const hubFeatures = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Media",
];

export default function TransformationHub() {
  return (
    <section
      className="bg-[#fce4ec] py-16 md:py-20"
      aria-labelledby="transformation-hub-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-[#c8102e] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
          Learning With Our CEO
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Text Content */}
          <div>
            <h2
              id="transformation-hub-heading"
              className="text-[#1a0a2e] text-[26px] sm:text-[30px] lg:text-[32px] font-bold leading-tight mb-4"
            >
              Transformation Hub With Iite Newton
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed mb-6">
              Transformation Hub is the brainchild of the CEO, Dr. Iite Newton. Designed to elevate career trajectories and leadership capabilities, this includes curated offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re looking to advance your career or enhance your leadership skills, the Transformation Hub provides a comprehensive services package that has full potential and direct benefit to all members.
            </p>

            {/* 2-Column Feature Grid */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8"
              aria-label="Transformation Hub features"
            >
              {hubFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-gray-700 text-[14px]"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-[#c8102e] flex-shrink-0"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="inline-flex items-center gap-1 text-[#c8102e] text-sm font-semibold hover:gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-1 rounded w-fit"
            >
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Image */}
          <div className="flex items-start justify-center md:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/transformation.jpg"
                alt="Transformation Hub — CEO Iite Newton leading a professional development session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
