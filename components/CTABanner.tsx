import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="flex justify-center w-full px-5 py-10 lg:py-16"
      aria-label="Call to action — Book a consultation"
    >
      <div className="w-full lg:max-w-[1134px] bg-[#571244] rounded-[8px] px-6 lg:px-[64px] py-10 lg:py-[40px] flex flex-col items-center justify-center text-center gap-6 lg:gap-[32px]">
        <div className="flex flex-col gap-2">
          <p className="text-white text-[15px] lg:text-[20px] font-medium leading-snug">
            Want to accelerate professional growth and development at your organisation?
          </p>
          <p className="text-white text-[15px] lg:text-[20px] font-medium leading-snug">
            See how we can help.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center justify-center bg-white text-[#571244] text-[14px] font-semibold px-8 py-3 rounded-[4px] hover:bg-gray-100 transition-colors focus:outline-none w-full sm:w-auto"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
