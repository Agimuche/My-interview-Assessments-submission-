import Image from "next/image";

const programFeatures = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Sustainable Growth",
];

export default function ManagementDevelopment() {
  return (
    <section
      className="bg-[#1a0a2e] py-16 md:py-20"
      aria-labelledby="management-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/management.jpg"
                alt="Management Development Program — professionals collaborating in a meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2
              id="management-heading"
              className="text-white text-[26px] sm:text-[30px] lg:text-[32px] font-bold leading-tight mb-4"
            >
              Management Development Program
            </h2>
            <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed mb-8">
              Tobams Group offers comprehensive Management Development Programs designed to equip corporate leaders with the skills, courses, and experiences opportunities deployed to improve leadership, strategic thinking, communication, and other essential management competencies for corporate organizations.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-3">
              {programFeatures.map((feature) => (
                <div
                  key={feature}
                  className="bg-[#2d1654] border border-[#3d2070] rounded-lg px-5 py-4 flex items-center gap-3"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-[#c8102e] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white text-[14px] font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
