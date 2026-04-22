import Link from "next/link";

export default function WorkTogether() {
  return (
    <section
      className="bg-[#f9f5ff] py-12 md:py-14"
      aria-label="Work together section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#c8102e] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Ready to be part of something extraordinary?
          </p>
          <h2 className="text-[#1a0a2e] text-[22px] sm:text-[26px] font-bold">
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <Link
          href="#"
          className="flex-shrink-0 bg-[#c8102e] text-white text-sm font-semibold px-7 py-3 rounded hover:bg-[#a00d24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
