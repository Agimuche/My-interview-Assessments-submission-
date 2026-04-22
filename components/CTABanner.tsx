import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="bg-[#1a0a2e] py-14 md:py-16"
      aria-label="Call to action — Book a consultation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white text-[20px] sm:text-[22px] font-bold leading-snug text-center md:text-left max-w-xl">
          Want to accelerate professional growth and development at your organization?
        </p>
        <Link
          href="#"
          className="flex-shrink-0 bg-[#c8102e] text-white text-sm font-semibold px-7 py-3 rounded hover:bg-[#a00d24] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a0a2e]"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
