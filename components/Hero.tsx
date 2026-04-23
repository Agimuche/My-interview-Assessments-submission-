import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex justify-center w-full bg-[#111]"
      aria-label="Training and Development hero section"
    >
      <div
        className="relative flex flex-col items-center justify-center w-full lg:max-w-[1440px] min-h-[500px] lg:h-[650px] px-5 lg:px-[64px] py-20 lg:py-[150px] text-center overflow-hidden mx-auto"
      >
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-[56px] w-full max-w-4xl">
          {/* Top Text Group */}
          <div className="flex flex-col items-center gap-6">
            <div 
              className="backdrop-blur-sm border border-white/20 flex items-center justify-center"
              style={{ 
                width: "193px", 
                height: "45px",
                gap: "10px",
                padding: "12px 48px",
                borderRadius: "100px",
                background: "#FFFFFF1A",
                opacity: 1
              }}
            >
              <p 
                className="text-white uppercase tracking-wider whitespace-nowrap"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "150%",
                  textAlign: "center",
                }}
              >
                WHAT WE DO
              </p>
            </div>
            <h1 
              className="text-white text-[36px] lg:text-[56px] font-bold leading-[130%] tracking-tight mx-auto"
              style={{
                fontFamily: "'Nunito', sans-serif",
                maxWidth: "1205px",
                height: "auto", // letting height be auto for responsiveness, but matching the line-height
              }}
            >
              Training and Development
            </h1>
          </div>

          {/* Bottom Text & Button Group */}
          <div className="flex flex-col items-center gap-8 lg:gap-[40px] w-full max-w-4xl">
            <p 
              className="text-gray-200 text-[16px] lg:text-[20px] leading-[150%] max-w-3xl font-medium"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-[#571244] text-white px-10 py-4 rounded-[4px] hover:bg-[#430e34] transition-all transform hover:scale-105 shadow-xl"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "150%",
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
