import Image from "next/image";
import Link from "next/link";

const hubFeatures = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section
      className="bg-white flex justify-center w-full py-10 lg:py-[64px] lg:h-[780px]"
      aria-labelledby="transformation-hub-heading"
    >
      <div className="w-full lg:max-w-[1440px] px-[20px] mx-auto flex flex-col gap-[40px]">
        <div className="bg-[#EF435333] rounded-[16px] p-8 lg:p-[40px] w-full lg:w-[1312px] lg:h-[652px] flex flex-col gap-[64px] mx-auto justify-center">

          {/* Header Text */}
          <div className="flex flex-col gap-4 max-w-4xl">
            <p className="text-[#1671D9] text-[20px] italic font-semibold leading-[130%] font-nunito lg:w-[1232px] lg:h-[26px]">
              Learning With Our CEO:
            </p>
            <h2
              id="transformation-hub-heading"
              className="text-[#571244] text-[28px] lg:text-[32px] italic font-semibold leading-[130%] font-nunito lg:w-[1232px] lg:h-[42px]"
            >
              Transformation Hub With Jite Newton
            </h2>
            <p className="text-[#151515] text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans lg:w-[1232px] lg:h-[108px]">
              Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
            </p>
          </div>

          {/* Flex Layout for Image and Features — adjusted to fit precisely */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[32px] items-center justify-start w-full">
            {/* Image Column */}
            <div className="relative w-full h-[300px] lg:w-[560px] lg:h-[340px] rounded-[8px] overflow-hidden shadow-xl flex-shrink-0">
              <Image
                src="/images/transformation.jpg"
                alt="Transformation Hub — CEO Jite Newton"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Features & Button Wrapper Card */}
            <div className="bg-[#FFFFFF4D] rounded-[8px] p-6 lg:px-[20px] lg:py-[32px] lg:w-[640px] lg:h-[340px] flex flex-col gap-[24px] shadow-sm justify-center backdrop-blur-sm flex-shrink-0">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3" aria-label="Transformation Hub features">
                {hubFeatures.map((feature) => (
                  <li key={feature} className="bg-white rounded-[12px] p-2.5 flex items-center gap-[10px] shadow-sm border border-[#fce7e9] lg:w-[288px] lg:h-[60px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-[16.33px] h-[21px] flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path 
                        fill="#DDD0DA"
                        stroke="#571244"
                        strokeWidth="2"
                        fillRule="evenodd" 
                        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-[#151515] text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="#" 
                className="inline-flex items-center justify-center bg-[#571244] text-white text-[16px] lg:text-[18px] font-semibold leading-[150%] rounded-[4px] px-[24px] py-[10.5px] lg:w-[173px] lg:h-[48px] hover:bg-[#430e34] transition-colors gap-[8px] font-nunito-sans shadow-md"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
