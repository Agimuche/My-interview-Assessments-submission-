import Image from "next/image";

const programFeatures = [
  "Corporate Leadership",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopment() {
  return (
    <section
      className="bg-white flex justify-center w-full py-10 lg:py-20"
      aria-labelledby="management-heading"
    >
      <div className="w-full lg:max-w-[1440px] px-5 lg:px-[64px] mx-auto">
        <div className="bg-[#1a0514] rounded-[24px] p-6 lg:p-[80px] w-full border border-white/5 shadow-2xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center w-full gap-10 lg:gap-[100px]">

            {/* Image — Left on Desktop */}
            <div className="relative w-full h-[300px] lg:h-[500px] rounded-[16px] overflow-hidden shadow-2xl order-1">
              <Image
                src="/images/management.jpg"
                alt="Management Development Program — professionals collaborating in a meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>

            {/* Text — Right on Desktop */}
            <div className="flex flex-col justify-center order-2">
              <h2
                id="management-heading"
                className="text-white text-[28px] lg:text-[48px] font-bold leading-tight mb-6"
              >
                Management Development Program
              </h2>
              <p className="text-gray-300 text-[15px] lg:text-[16px] leading-relaxed mb-4">
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
              </p>
              <p className="text-gray-300 text-[15px] lg:text-[16px] leading-relaxed mb-10">
                Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies.
              </p>

              {/* Feature Bars */}
              <div className="flex flex-col gap-4">
                {programFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="bg-[#2d0a22] border border-[#3d142d] rounded-[8px] px-6 py-4 flex items-center gap-4 transition-transform hover:translate-x-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#EF4353] flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-white"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white text-[16px] font-semibold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
