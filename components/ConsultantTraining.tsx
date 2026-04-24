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
      className="bg-[#5712441A] flex justify-center w-full py-[48px] lg:h-[642px]"
      aria-labelledby="consultant-heading"
    >
      <div className="w-full lg:max-w-[1440px] px-[20px] flex flex-col mx-auto gap-[10px] justify-center">

        {/* Header Block */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <h2
            id="consultant-heading"
            className="text-[#571244] text-[32px] lg:text-[40px] font-semibold leading-[130%] font-nunito lg:w-[1312px] lg:h-[52px]"
          >
            Training The Consultant
          </h2>
          <p className="text-[#571244] text-[18px] font-semibold leading-[150%] font-nunito-sans lg:w-[1312px] lg:h-[27px]">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-[#151515] text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans lg:w-[1312px] lg:h-[81px]">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* Feature Cards Grid Container */}
        <div className="bg-[#571244] rounded-[8px] p-6 lg:p-[24px] w-full lg:w-[1312px] lg:h-[254px] border border-white/5 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[12px]">
            {consultantFeatures.map((card) => (
              <div key={card.title} className="flex flex-col gap-[12px] lg:w-[622px] lg:h-[93px]">
                <h3 className="text-white text-[18px] font-bold leading-[150%] font-nunito-sans">
                  {card.title}
                </h3>
                <p className="text-white text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans lg:w-[622px] lg:h-[54px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-flex items-center justify-center bg-[#571244] text-white text-[15px] font-bold rounded-[4px] px-[24px] py-[10.5px] lg:w-[173px] lg:h-[48px] hover:bg-[#430e34] transition-colors gap-[8px] font-nunito-sans"
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
