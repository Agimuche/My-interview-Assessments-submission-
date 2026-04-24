import Link from "next/link";
import Image from "next/image";

const whatWeDoLinks = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
  "Social Impact",
  "Talent Recruitment",
];

const companyLinks = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solutionLinks = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="flex justify-center w-full bg-[#11040E] lg:h-[806px]" aria-label="Site footer">
      <div className="w-full lg:max-w-[1440px] px-[20px] py-8 lg:py-[32px] flex flex-col mx-auto gap-[20px] justify-between">

        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Tobams Group Logo"
                width={166}
                height={64}
                className="w-[166px] h-auto opacity-100 object-contain"
                unoptimized
              />
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed max-w-[320px]">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="flex items-center justify-center transition-opacity hover:opacity-80">
                <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} className="w-6 h-6 object-contain" unoptimized />
              </Link>
              <Link href="#" className="flex items-center justify-center transition-opacity hover:opacity-80">
                <Image src="/images/socials.png" alt="LinkedIn" width={24} height={24} className="w-6 h-6 object-contain" unoptimized />
              </Link>
              <Link href="#" className="flex items-center justify-center transition-opacity hover:opacity-80">
                <Image src="/images/Twitter.png" alt="Twitter" width={24} height={24} className="w-6 h-6 object-contain" unoptimized />
              </Link>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-[16px] font-bold uppercase tracking-wider">What We Do</h3>
            <ul className="flex flex-col gap-4">
              {whatWeDoLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 text-[14px] hover:text-[#EF4353] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-[16px] font-bold uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 text-[14px] hover:text-[#EF4353] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Solution */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-[16px] font-bold uppercase tracking-wider">Solution</h3>
            <ul className="flex flex-col gap-4">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 text-[14px] hover:text-[#EF4353] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section Group */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#FFFFFF0F] rounded-[8px] p-[24px] lg:w-[1312px] lg:h-[181px] grid grid-cols-1 lg:grid-cols-3 gap-[24px] border border-white/5 mx-auto items-start">
            {/* Registered Offices */}
            <div className="lg:col-span-2 flex flex-col gap-6 h-full">
              <h3 className="text-white text-[18px] lg:text-[20px] font-bold leading-none h-[20px]">Registered Offices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <div className="flex flex-col gap-2 lg:pr-10">
                  <p className="text-[#EF4353] text-[14px] font-bold uppercase tracking-widest leading-none">United Kingdom</p>
                  <p className="text-gray-300 text-[14px] leading-relaxed">
                    07451196 (Registered by Company House)<br />
                    Vine Cottages, 215 North Street, Romford, Essex, RM1 4QA
                  </p>
                </div>
                <div className="flex flex-col gap-2 lg:border-l lg:border-white/10 lg:pl-10">
                  <p className="text-[#EF4353] text-[14px] font-bold uppercase tracking-widest leading-none">Nigeria</p>
                  <p className="text-gray-300 text-[14px] leading-relaxed">
                    RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-12 h-full">
              <h3 className="text-white text-[18px] lg:text-[20px] font-bold leading-none h-[20px]">Contact Information</h3>
              <div className="flex flex-col gap-4 lg:mt-[22px]">
                <div className="flex items-center gap-4 group h-[21px]">
                  <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#EF4353]">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <a href="mailto:theteam@tobamsgroup.com" className="text-gray-300 text-[14px] hover:text-[#EF4353] transition-colors font-medium">
                    theteam@tobamsgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group h-[21px]">
                  <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#EF4353]">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <a href="tel:+447886600748" className="text-gray-300 text-[14px] hover:text-[#EF4353] transition-colors font-medium">
                    +447886600748
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-8 order-1 sm:order-2">
            {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map((legal) => (
              <Link key={legal} href="#" className="text-gray-500 text-[14px] hover:text-white transition-colors underline decoration-gray-700 underline-offset-8">
                {legal}
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-[14px] font-medium order-2 sm:order-1 text-center sm:text-left">
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
