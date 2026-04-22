import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-[#1a0a2e] overflow-hidden"
      aria-label="Training and Development hero section"
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #c8102e, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #6b21a8, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          {/* Section label */}
          <p className="text-[#c8102e] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>

          {/* Heading */}
          <h1 className="text-white text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-tight mb-6">
            Training and Development
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mb-8 max-w-xl">
            Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="inline-block bg-[#c8102e] text-white text-sm font-semibold px-7 py-3 rounded hover:bg-[#a00d24] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a0a2e]"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
