import Link from "next/link";

const footerColumns = [
  {
    heading: "What We Do",
    links: [
      "Tech Solutions",
      "Strategy Profiling and Deployment",
      "Marketing",
      "Training and Development",
      "IT Consulting Services",
      "The Team",
      "Talent Recruitment",
    ],
  },
  {
    heading: "Company",
    links: [
      "About Us",
      "Our Founders",
      "Our Team",
      "The Blog",
      "Careers",
      "FAQs",
      "Testimonials",
    ],
  },
  {
    heading: "Solution",
    links: [
      "TG Academy",
      "Tech Talent Solutions",
      "Job Our Platform",
      "Investors",
      "Job Our Platform",
      "Join Our Quick Summaries",
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Twitter / X", href: "#", icon: "𝕏" },
  { label: "Facebook", href: "#", icon: "f" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0a2e]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#c8102e] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">TG</span>
              </div>
              <span className="font-bold text-white text-sm leading-tight">
                TOBAMS
                <br />
                <span className="font-normal text-xs tracking-widest">GROUP</span>
              </span>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6 max-w-xs">
              Tobams Group is to be the catalyst for a transformative shift in organisations and professionals, enabling them to thrive and succeed in the digital age.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 text-xs hover:border-[#c8102e] hover:text-[#c8102e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8102e]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white text-[13px] font-bold mb-4 uppercase tracking-wide">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 text-[13px] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#c8102e] rounded"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info + Registered Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#2d1654] pt-8 mb-8">
          <div>
            <h3 className="text-white text-[13px] font-bold mb-3 uppercase tracking-wide">
              Registered Address
            </h3>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              RC 1677795 (Registered by Company House)<br />
              85 Great Portland Street, First Floor,<br />
              London, W1W 7LT
            </p>
          </div>
          <div>
            <h3 className="text-white text-[13px] font-bold mb-3 uppercase tracking-wide">
              Contact Information
            </h3>
            <div className="flex flex-col gap-1">
              <a
                href="mailto:contact@tobamsgroup.com"
                className="text-gray-400 text-[13px] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#c8102e] rounded"
              >
                contact@tobamsgroup.com
              </a>
              <a
                href="tel:+442012345678"
                className="text-gray-400 text-[13px] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#c8102e] rounded"
              >
                +44 20 1234 5678
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2d1654] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-[12px]">
            © Tobams Group 2024. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-gray-500 text-[12px] hover:text-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-[#c8102e] rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 text-[12px] hover:text-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-[#c8102e] rounded"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
