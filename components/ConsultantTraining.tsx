import Link from "next/link";

const consultantFeatures = [
  {
    title: "Expert-Led Learning",
    description: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function ConsultantTraining() {
  return (
    <section
      className="bg-[#f9f3f7] flex justify-center w-full py-16 lg:py-20"
      aria-labelledby="consultant-heading"
    >
      <div className="w-full lg:max-w-[1440px] px-5 lg:px-[64px] flex flex-col mx-auto gap-12 lg:gap-[48px]">

        {/* Header Block */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <h2
            id="consultant-heading"
            className="text-[#571244] text-[32px] lg:text-[48px] font-bold leading-tight font-nunito"
          >
            Training The Consultant
          </h2>
          <p className="text-[#571244] text-[18px] lg:text-[22px] font-semibold italic font-nunito-sans">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-gray-700 text-[15px] lg:text-[17px] leading-relaxed font-nunito-sans">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="bg-[#571244] rounded-[24px] p-8 lg:p-16 w-full shadow-2xl border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-20 lg:gap-y-12">
            {consultantFeatures.map((card) => (
              <div key={card.title} className="flex flex-col gap-4">
                <h3 className="text-white text-[20px] lg:text-[24px] font-bold flex items-center gap-3 font-nunito">
                  <span className="w-2 h-2 rounded-full bg-[#EF4353]" />
                  {card.title}
                </h3>
                <p className="text-gray-300 text-[15px] lg:text-[16px] leading-relaxed font-nunito-sans">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-flex items-center justify-center bg-[#571244] text-white text-[15px] font-bold rounded-[4px] px-10 py-4 w-fit hover:bg-[#430e34] transition-colors gap-2 font-nunito-sans"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </Link>

      </div>
    </section>
  );
}
