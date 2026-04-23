import Image from "next/image";

const LightningBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#300a24] flex-shrink-0 mt-0.5">
    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
  </svg>
);

export default function TrainingServices() {
  return (
    <section className="flex justify-center w-full bg-[#f9fafb]" aria-label="Training Services">
      <div className="flex flex-col w-full lg:max-w-[1440px] mx-auto gap-10 lg:gap-0 px-5 lg:px-[64px] py-12 lg:py-[0px]">

        {/* White card wrapper — desktop only */}
        <div className="bg-white lg:rounded-[16px] lg:p-[64px] flex flex-col gap-10 lg:gap-[80px]">

          {/* Section 1: Corporate Trainings — text LEFT, image RIGHT */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-6 lg:gap-[80px]">
            {/* TEXT — order 2 on mobile (below image), order 1 on desktop (left) */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-[#111] text-[22px] lg:text-[36px] font-medium leading-tight mb-3 lg:mb-4">
                Corporate Trainings
              </h2>
              <p className="text-gray-500 text-[13px] lg:text-[15px] leading-relaxed mb-5 lg:mb-6">
                Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
              </p>
              <ul className="flex flex-col gap-3">
                {["Leadership Training", "Strategic Planning and Implementation", "Project Management", "Sustainability Training", "Customised Training"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-500 text-[13px] lg:text-[15px]">
                    <LightningBolt /> {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* IMAGE — order 1 on mobile (top), order 2 on desktop (right) */}
            <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[360px] rounded-[24px] overflow-hidden order-1 lg:order-2">
              <Image src="/images/corporate.jpg" alt="Corporate Trainings" fill className="object-cover" unoptimized />
            </div>
          </div>

          {/* Section 2: Personalised Individual Training — image LEFT, text RIGHT */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-6 lg:gap-[80px]">
            {/* IMAGE — order 1 on mobile (top), order 1 on desktop (left) */}
            <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[360px] rounded-[24px] overflow-hidden order-1 lg:order-1">
              <Image src="/images/individual.jpg" alt="Personalised Individual Training" fill className="object-cover" unoptimized />
            </div>
            {/* TEXT — order 2 on mobile (below image), order 2 on desktop (right) */}
            <div className="flex flex-col justify-center order-2 lg:order-2">
              <h2 className="text-[#111] text-[22px] lg:text-[36px] font-medium leading-tight mb-3 lg:mb-4">
                Personalised Individual Training
              </h2>
              <p className="text-gray-500 text-[13px] lg:text-[15px] leading-relaxed mb-5 lg:mb-6">
                Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today&apos;s professionals.
              </p>
              <ul className="flex flex-col gap-3">
                {["Leadership Development", "Soft Skills Development", "Industry Specific Knowledge", "Technical Skills Enhancement", "Time Management and Productivity", "Career Development"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-500 text-[13px] lg:text-[15px]">
                    <LightningBolt /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Capacity Development — text LEFT, image RIGHT */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-6 lg:gap-[80px]">
            {/* TEXT — order 2 on mobile (below image), order 1 on desktop (left) */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-[#111] text-[22px] lg:text-[36px] font-medium leading-tight mb-3 lg:mb-4">
                Capacity Development
              </h2>
              <p className="text-gray-500 text-[13px] lg:text-[15px] leading-relaxed mb-5 lg:mb-6">
                At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
              </p>
              <ul className="flex flex-col gap-3">
                {["Tailored Training Programs", "Expert-Led Workshops", "Personalized Mentorship", "Technical Skills Enhancement", "Collaborative Learning Environment", "Ongoing Support and Resources"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-500 text-[13px] lg:text-[15px]">
                    <LightningBolt /> {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* IMAGE — order 1 on mobile (top), order 2 on desktop (right) */}
            <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[360px] rounded-[24px] overflow-hidden order-1 lg:order-2">
              <Image src="/images/capacity.jpg" alt="Capacity Development" fill className="object-cover" unoptimized />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
