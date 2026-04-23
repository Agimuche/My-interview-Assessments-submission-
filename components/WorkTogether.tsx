import Link from "next/link";

export default function WorkTogether() {
  return (
    <section
      className="flex justify-center w-full bg-[#1D0617]"
      aria-label="Work together section"
    >
      <div className="w-full lg:max-w-[1440px] px-5 lg:px-[64px] py-10 lg:py-[40px] flex flex-col lg:flex-row items-center lg:justify-between mx-auto gap-6 lg:gap-0 border-b-2 border-[#C4C4C4]">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <p className="text-[#d1d5db] text-[13px] font-normal">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-white text-[20px] sm:text-[24px] lg:text-[32px] font-semibold leading-tight">
            Let&apos;s work together to create a difference
          </h2>
        </div>

        <Link
          href="#"
          className="flex-shrink-0 bg-[#571244] text-white text-[14px] font-medium px-8 py-3 rounded hover:bg-[#3d0d30] transition-colors focus:outline-none w-full lg:w-auto text-center"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
