import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="flex justify-center w-full px-5 py-10 lg:py-16"
      aria-label="Call to action — Book a consultation"
    >
      <div className="w-full lg:w-[1134px] lg:h-[204px] bg-[#571244] rounded-[8px] px-[20px] py-10 lg:py-[32px] flex flex-col items-center justify-center text-center gap-6 lg:gap-[32px]">
        <div className="flex flex-col lg:w-[1006px] lg:h-[60px] justify-center items-center">
          <p className="text-white text-[18px] lg:text-[20px] font-semibold leading-[150%] tracking-[0.03em] font-nunito text-center">
            Want to accelerate professional growth and development at your organisation?<br />
            See how we can help.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center justify-center bg-white text-[#571244] text-[14px] font-semibold rounded-[4px] hover:bg-gray-100 transition-colors focus:outline-none lg:w-[214px] lg:h-[48px]"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
