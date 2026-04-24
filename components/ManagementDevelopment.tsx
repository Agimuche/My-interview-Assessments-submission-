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
      className="bg-[#F8F9FA] flex justify-center w-full py-10 lg:py-20"
      aria-labelledby="management-heading"
    >
      <div className="w-full lg:max-w-[1440px] px-[20px] mx-auto flex justify-center">
        <div className="bg-[#2C0922] rounded-[20px] p-6 lg:p-[40px] w-full lg:w-[1312px] lg:h-[719px] border border-white/5 flex flex-col justify-center">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center w-full gap-10 lg:gap-[100px]">

            {/* Mobile-only Header */}
            <h2 className="lg:hidden order-1 text-white text-[15px] min-[380px]:text-[18px] sm:text-[24px] font-bold leading-tight mb-6 font-nunito w-full text-center whitespace-nowrap overflow-hidden text-ellipsis">
              Management Development Program
            </h2>

            {/* Image — Left on Desktop (col 1), order 2 on Mobile */}
            <div className="relative w-full h-[300px] lg:w-[592px] lg:h-[639px] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] border-l-[20px] border-r-[20px] border-white/5 overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/management.jpg"
                alt="Management Development Program — professionals collaborating in a meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>

            {/* Text — Right on Desktop (col 2), order 3 on Mobile */}
            <div className="flex flex-col justify-center order-3 lg:order-2">
              <h2
                id="management-heading"
                className="hidden lg:block text-white text-[40px] font-semibold leading-[150%] tracking-[0.03em] mb-6 font-nunito lg:w-[592px] lg:h-[120px]"
              >
                Management Development Program
              </h2>
              <div className="lg:w-[592px] lg:h-[216px] flex flex-col gap-4 overflow-visible mb-8 lg:mb-10">
                <p className="text-white text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans">
                  Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
                </p>
                <p className="text-white text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans">
                  Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
                </p>
              </div>

              {/* Feature Bars */}
              <div className="flex flex-col gap-4">
                {programFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="bg-[#8F6182] rounded-[8px] px-2 py-1 flex items-center gap-2 transition-transform hover:translate-x-2 lg:w-[560px] lg:h-[40px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[18.67px] h-[24px] text-white flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-[14px] lg:text-[16px] font-semibold font-nunito-sans">
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
