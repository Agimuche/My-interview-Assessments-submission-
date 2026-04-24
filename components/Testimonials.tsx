"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    initials: "AY",
    image: "/images/Aisha Yusuf.png",
    bgClass: "bg-[#CA8A04]",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    initials: "JD",
    image: "/images/John Davies.png",
    bgClass: "bg-[#9CA3AF]",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    initials: "CN",
    image: "/images/Chinonso Nwankwo.png",
    bgClass: "bg-[#FBBF24]",
  },
  {
    name: "Samuel Okafor",
    role: "Project Manager, BuildIt Ltd",
    text: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
    initials: "SO",
    image: "/images/4th testimonial card.jpg",
    bgClass: "bg-[#4B5563]",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const prevTestimonial = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(testimonials.length - 1);
    }
  };

  return (
    <section
      className="flex justify-center w-full bg-white lg:h-[537px] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="w-full lg:max-w-[1440px] px-[20px] py-[64px] flex flex-col mx-auto border-b border-[#C4C4C44D] gap-[10px] justify-center relative">
        <h2
          id="testimonials-heading"
          className="text-[#151515] text-[32px] lg:text-[40px] font-bold text-center font-nunito leading-[130%] lg:w-[235px] lg:h-[52px] mx-auto mb-10"
        >
          Testimonials
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex gap-6 lg:gap-[18px] transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${activeIndex * (422 + 18)}px)` 
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-shrink-0 flex flex-col bg-white border-l-2 border-[#EF4353] rounded-[16px] px-[24px] py-[20px] w-full md:w-[422px] lg:w-[422px] lg:h-[244px] gap-[24px] shadow-sm relative"
              >
                {/* Avatar + Name */}
                <div className="flex items-center gap-3">
                  {t.image ? (
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[13px] font-bold ${t.bgClass}`}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <p className="text-[#111827] text-[14px] font-bold">{t.name}</p>
                    <p className="text-gray-500 text-[12px]">{t.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className={`text-[#151515] text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans lg:w-[374px] ${t.name === 'Samuel Okafor' ? 'lg:h-[108px]' : 'lg:h-[135px]'}`}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination — Always aligned to the right */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center hover:bg-[#fecdd3] transition-all focus:outline-none shadow-sm"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center hover:bg-[#fecdd3] transition-all focus:outline-none shadow-sm"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
