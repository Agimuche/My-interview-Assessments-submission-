import Link from "next/link";

export default function WorkTogether() {
  return (
    <section
      className="flex justify-center w-full bg-[#1D0617] lg:h-[159px] border-b-2 border-[#C4C4C4]"
      aria-label="Work together section"
    >
      <div className="w-full lg:max-w-[1440px] px-[20px] py-10 lg:py-[40px] flex flex-col lg:flex-row items-start lg:items-center lg:justify-between mx-auto gap-[10px]">
        <div className="flex flex-col gap-2 text-left">
          <p className="text-white text-[15px] lg:text-[18px] font-normal leading-[150%] font-nunito-sans lg:w-[380px] lg:h-[27px]">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-white text-[24px] lg:text-[32px] font-semibold leading-[130%] font-nunito lg:w-[1114px] lg:h-[42px]">
            Let&apos;s work together to create a difference
          </h2>
        </div>

        <Link
          href="#"
          className="flex-shrink-0 bg-[#571244] text-white text-[14px] font-medium px-6 py-2 rounded hover:bg-[#3d0d30] transition-colors focus:outline-none w-fit lg:w-auto text-center"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
