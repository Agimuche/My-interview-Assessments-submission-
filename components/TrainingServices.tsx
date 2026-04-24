import Image from "next/image";

const LightningBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#300a24] flex-shrink-0 mt-0.5">
    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
  </svg>
);

export default function TrainingServices() {
  const headerStyles = "text-[#151515] text-[24px] sm:text-[32px] lg:text-[40px] font-semibold leading-[150%] tracking-[0.03em] font-nunito";
  const descStyles = "text-[#696969] text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans";

  return (
    <section className="flex justify-center w-full bg-white opacity-100 rotate-0" aria-label="Training Services">
      <div className="w-full lg:max-w-[1440px] lg:h-[1497px] px-5 lg:px-[64px] py-12 lg:py-[64px] flex flex-col justify-center mx-auto">
        
        {/* Main Content Wrapper */}
        <div className="flex flex-col gap-16 lg:gap-[120px] rounded-[16px]">

          {/* Section 1: Corporate Trainings — text LEFT, image RIGHT */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-start lg:items-center gap-6 lg:gap-[80px]">
            {/* Mobile-only Header */}
            <h2 className={`lg:hidden order-1 text-left w-full mb-4 ${headerStyles}`}>
              Corporate Trainings
            </h2>
            {/* IMAGE — order 2 on mobile, order 2 on desktop (right) */}
            <div className="relative w-full h-[220px] sm:h-[260px] lg:w-[602px] lg:h-[346px] rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px] overflow-hidden order-2 lg:order-2">
              <Image src="/images/corporate.jpg" alt="Corporate Trainings" fill className="object-cover" unoptimized />
            </div>
            {/* TEXT — order 3 on mobile, order 1 on desktop (left) */}
            <div className="flex flex-col justify-center order-3 lg:order-1">
              <h2 className={`hidden lg:block mb-4 lg:w-[646px] lg:h-[38px] ${headerStyles}`}>
                Corporate Trainings
              </h2>
              <p className={`mb-5 lg:mb-6 ${descStyles}`}>
                Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
              </p>
              <ul className="flex flex-col gap-3 pl-4 lg:pl-6">
                {["Leadership Training", "Strategic Planning and Implementation", "Project Management", "Sustainability Training", "Customised Training"].map((item) => (
                  <li key={item} className={`flex items-start gap-2.5 ${descStyles}`}>
                    <LightningBolt /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 2: Personalised Individual Training — image LEFT, text RIGHT */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-start lg:items-center gap-6 lg:gap-[80px]">
            {/* Mobile-only Header */}
            <h2 className={`lg:hidden order-1 text-left w-full mb-4 ${headerStyles}`}>
              Personalised Individual Training
            </h2>
            {/* IMAGE — order 2 on mobile, order 1 on desktop (left) */}
            <div className="relative w-full h-[220px] sm:h-[260px] lg:w-[599px] lg:h-[378px] rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden order-2 lg:order-1">
              <Image src="/images/individual.jpg" alt="Personalised Individual Training" fill className="object-cover" unoptimized />
            </div>
            {/* TEXT — order 3 on mobile, order 2 on desktop (right) */}
            <div className="flex flex-col justify-center order-3 lg:order-2">
              <h2 className={`hidden lg:block mb-4 lg:w-[629px] lg:h-[38px] ${headerStyles}`}>
                Personalised Individual Training
              </h2>
              <p className={`mb-5 lg:mb-6 ${descStyles}`}>
                Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today&apos;s professionals.
              </p>
              <ul className="flex flex-col gap-3 pl-4 lg:pl-6">
                {["Leadership Development", "Soft Skills Development", "Industry Specific Knowledge", "Technical Skills Enhancement", "Time Management and Productivity", "Career Development"].map((item) => (
                  <li key={item} className={`flex items-start gap-2.5 ${descStyles}`}>
                    <LightningBolt /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Capacity Development — text LEFT, image RIGHT */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-start lg:items-center gap-6 lg:gap-[80px]">
            {/* Mobile-only Header */}
            <h2 className={`lg:hidden order-1 text-left w-full mb-4 ${headerStyles}`}>
              Capacity Development
            </h2>
            {/* IMAGE — order 2 on mobile, order 2 on desktop (right) */}
            <div className="relative w-full h-[220px] sm:h-[260px] lg:w-[601px] lg:h-[405px] rounded-tl-[40px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden order-2 lg:order-2">
              <Image src="/images/capacity.jpg" alt="Capacity Development" fill className="object-cover" unoptimized />
            </div>
            {/* TEXT — order 3 on mobile, order 1 on desktop (left) */}
            <div className="flex flex-col justify-center order-3 lg:order-1">
              <h2 className={`hidden lg:block mb-4 lg:w-[644px] lg:h-[38px] ${headerStyles}`}>
                Capacity Development
              </h2>
              <p className={`mb-5 lg:mb-6 ${descStyles}`}>
                At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
              </p>
              <ul className="flex flex-col gap-3 pl-4 lg:pl-6">
                {["Tailored Training Programs", "Expert-Led Workshops", "Personalized Mentorship", "Technical Skills Enhancement", "Collaborative Learning Environment", "Ongoing Support and Resources"].map((item) => (
                  <li key={item} className={`flex items-start gap-2.5 ${descStyles}`}>
                    <LightningBolt /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
