import Image from "next/image";
import Link from "next/link";

export default function LMSSection() {
  return (
    <section className="flex justify-center w-full bg-[#5712441A] opacity-100 rotate-0" aria-label="Learning Management System">
      <div className="w-full lg:max-w-[1440px] px-[20px] py-12 lg:py-[48px] lg:min-h-[664px] lg:h-[700px] flex items-center mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 w-full items-center gap-12 lg:gap-[80px]">

          {/* Mobile-only Header */}
          <h2 className="lg:hidden order-1 text-[#571244] text-[20px] min-[380px]:text-[24px] sm:text-[32px] font-semibold leading-[150%] font-nunito w-full text-left mb-4 whitespace-nowrap">
            Learning Management System
          </h2>

          {/* Image — Left on Desktop (col 1), order 2 on Mobile */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[557px] lg:h-[568px] rounded-[357.57px] overflow-hidden shadow-lg opacity-100 rotate-0">
              <Image
                src="/images/lms.jpg"
                alt="Professionals engaged in a Learning Management System training session"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Text & Card — Right on Desktop (col 2), order 3 on Mobile */}
          <div className="flex flex-col w-full justify-center gap-8 order-3 lg:order-2">
            <h2 className="hidden lg:block text-[#571244] text-[40px] lg:w-[675.12px] lg:h-[60px] font-semibold leading-[150%] tracking-[0.03em] font-nunito opacity-100 rotate-0">
              Learning Management System
            </h2>

            {/* Inner Card */}
            <div className="bg-[#5712441A] rounded-[8px] p-[24px] lg:w-[675.12px] lg:h-[400px] flex flex-col gap-[20px] shadow-sm opacity-100 rotate-0">
              <p className="text-[#151515] text-[15px] lg:text-[18px] lg:w-[627.12px] lg:h-[189px] leading-[150%] font-nunito-sans opacity-100 rotate-0">
                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
              </p>
              
              <div className="flex flex-col gap-4">
                <p className="text-[#571244] font-bold text-[16px] lg:text-[18px] lg:w-[627.12px] lg:h-[27px] leading-[150%] font-nunito-sans opacity-100 rotate-0">
                  Some of our courses include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-[#151515] text-[16px] font-normal leading-[150%] font-nunito-sans">
                  {["Business Analysis", "Design Thinking", "Effective Communication", "Entrepreneurship", "Career Development", "Business Model"].map((course) => (
                    <li key={course} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#571244] flex-shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center w-[173px] h-[48px] bg-[#571244] text-white rounded-[4px] px-[24px] py-[10.5px] hover:bg-[#430e34] transition-colors gap-[8px] opacity-100 rotate-0"
            >
              <span className="w-[93px] h-[27px] flex items-center justify-center font-nunito-sans font-semibold text-[18px] leading-[150%]">Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
