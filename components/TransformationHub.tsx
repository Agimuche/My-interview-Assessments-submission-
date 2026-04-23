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
      className="bg-white flex justify-center w-full py-10 lg:py-20"
      aria-labelledby="transformation-hub-heading"
    >
      <div className="w-full lg:max-w-[1440px] px-5 lg:px-[64px] mx-auto">
        <div className="bg-[#fdf2f3] rounded-[24px] p-8 lg:p-[80px] w-full flex flex-col gap-10">

          {/* Header Text */}
          <div className="flex flex-col gap-4 max-w-4xl">
            <p className="text-[#0070c0] text-[16px] lg:text-[20px] italic font-semibold">
              Learning With Our CEO:
            </p>
            <h2
              id="transformation-hub-heading"
              className="text-[#571244] text-[28px] lg:text-[44px] italic font-bold leading-tight"
            >
              Transformation Hub With Jite Newton
            </h2>
            <p className="text-gray-700 text-[15px] lg:text-[17px] leading-relaxed">
              Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth.
            </p>
          </div>

          {/* Grid Layout for Image and Features */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
            {/* Image Column */}
            <div className="relative w-full h-[300px] lg:h-[450px] rounded-[16px] overflow-hidden shadow-xl">
              <Image
                src="/images/transformation.jpg"
                alt="Transformation Hub — CEO Jite Newton"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Features Grid Column */}
            <div className="flex flex-col gap-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Transformation Hub features">
                {hubFeatures.map((feature) => (
                  <li key={feature} className="bg-white rounded-[12px] p-5 flex items-center gap-4 shadow-sm border border-[#fce7e9]">
                    <div className="w-5 h-5 flex-shrink-0 text-[#571244]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800 text-[15px] font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="#" 
                className="inline-flex items-center justify-center bg-[#571244] text-white text-[15px] font-bold rounded-[4px] px-8 py-4 w-fit hover:bg-[#430e34] transition-colors gap-2"
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
