import Image from "next/image";
import Link from "next/link";

export default function LMSSection() {
  return (
    <section className="flex justify-center w-full bg-[#f9f3f7]" aria-label="Learning Management System">
      <div className="w-full lg:max-w-[1440px] px-5 lg:px-[64px] py-16 lg:py-[100px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 w-full items-center gap-12 lg:gap-[100px]">

          {/* Image — Left on Desktop */}
          <div className="flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden shadow-lg border-8 border-white">
              <Image
                src="/images/lms.jpg"
                alt="Professionals engaged in a Learning Management System training session"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Text & Card — Right on Desktop */}
          <div className="flex flex-col w-full justify-center gap-8">
            <h2 className="text-[#571244] text-[32px] lg:text-[48px] font-bold leading-tight">
              Learning Management System
            </h2>

            {/* Inner Card */}
            <div className="bg-[#f0e8ed] rounded-[16px] p-6 lg:p-10 flex flex-col gap-6 shadow-sm">
              <p className="text-gray-700 text-[15px] lg:text-[16px] leading-relaxed">
                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs.
              </p>
              
              <div className="flex flex-col gap-4">
                <p className="text-[#571244] font-bold text-[16px]">
                  Some of our courses include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-700 text-[14px]">
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
              className="inline-flex items-center justify-center bg-[#571244] text-white text-[15px] font-bold rounded-[4px] px-10 py-4 w-fit hover:bg-[#430e34] transition-colors gap-2"
            >
              Learn More
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
