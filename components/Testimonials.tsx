import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    initials: "AY",
    bgColor: "#CA8A04",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    initials: "JD",
    bgColor: "#9CA3AF",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    initials: "CN",
    bgColor: "#FBBF24",
  },
];

export default function Testimonials() {
  return (
    <section
      className="flex justify-center w-full bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="w-full lg:max-w-[1440px] px-5 lg:px-[64px] py-12 lg:py-[64px] flex flex-col mx-auto border-b border-[#C4C4C44D] gap-8">
        <h2
          id="testimonials-heading"
          className="text-[#111827] text-[24px] lg:text-[36px] font-bold text-center"
        >
          Testimonials
        </h2>

        {/* Testimonial Cards — 1 col on mobile, 3 col on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative pl-5 py-3 flex flex-col gap-3"
            >
              {/* Left bracket border */}
              <div
                className="absolute left-0 top-0 bottom-0 w-3 border-l border-t border-b border-[#ef4444] rounded-l-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[13px] font-bold"
                  style={{ backgroundColor: t.bgColor }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#111827] text-[14px] font-bold">{t.name}</p>
                  <p className="text-gray-500 text-[12px]">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#374151] text-[13px] leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end gap-3">
          <button
            className="w-8 h-8 rounded bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center hover:bg-[#fecdd3] transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="w-8 h-8 rounded bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center hover:bg-[#fecdd3] transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
