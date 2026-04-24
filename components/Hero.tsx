import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex justify-center w-full bg-[#111] opacity-100 rotate-0 lg:h-[511px] overflow-hidden"
      aria-label="Training and Development hero section"
    >
      {/* Background Image & Overlay — Now spanning full width */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-[#000000B2]" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center w-full lg:max-w-[1440px] min-h-[500px] h-full px-5 lg:px-[64px] py-20 lg:py-[112px] text-center mx-auto"
      >
        {/* Content */}
        <div className="flex flex-col items-center gap-8 lg:gap-[24px] w-full max-w-4xl">
          {/* Top Text Group */}
          <div className="flex flex-col items-center gap-6">
            <div 
              className="backdrop-blur-sm border border-white/20 flex items-center justify-center w-[193px] h-[45px] gap-[10px] p-[12px_48px] rounded-[100px] bg-[#FFFFFF1A] opacity-100"
            >
              <p 
                className="text-white uppercase tracking-wider whitespace-nowrap font-nunito-sans font-semibold text-[14px] leading-[150%] text-center"
              >
                WHAT WE DO
              </p>
            </div>
            <h1 
              className="text-white text-[36px] lg:text-[56px] font-bold leading-[130%] tracking-tight mx-auto font-nunito max-w-[1205px] lg:w-[1205px] lg:h-[73px] opacity-100 rotate-0 text-center"
            >
              Training and Development
            </h1>
          </div>

          {/* Bottom Text & Button Group */}
          <div className="flex flex-col items-center gap-8 lg:gap-[40px] w-full max-w-4xl">
            <p 
              className="text-white text-[16px] lg:text-[18px] leading-[150%] lg:w-[1077px] lg:h-[54px] font-semibold font-nunito-sans text-center opacity-100 rotate-0"
            >
              Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center w-[214px] h-[48px] bg-[#571244] text-white px-[24px] py-[12px] rounded-[4px] hover:bg-[#430e34] transition-all transform hover:scale-105 gap-[10px] opacity-100 rotate-0 font-nunito-sans font-semibold text-[18px] leading-[150%]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
