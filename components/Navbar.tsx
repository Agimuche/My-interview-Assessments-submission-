"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#", hasDropdown: true, active: true },
  { label: "What We Do", href: "#", hasDropdown: true },
  { label: "Jobs", href: "#", hasDropdown: true },
  { label: "Projects", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
];

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white z-50 border-b border-[#DDD0DA] relative">
      {/* Top Section: Logo & Buttons */}
      <div className="w-full bg-white">
        <div className="w-full lg:max-w-[1440px] flex items-center justify-between h-[72px] lg:h-[104px] mx-auto px-4 lg:px-[64px]">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Tobams Group Logo"
              width={166}
              height={64}
              style={{ opacity: 1 }}
              className="w-[130px] lg:w-[166px] h-auto object-contain object-left"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center h-[48px] bg-[#571244] text-white px-5 rounded-[4px] hover:bg-[#430e34] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4353] focus-visible:ring-offset-2 font-nunito-sans font-semibold text-[18px] leading-[150%] text-center gap-[2.67px]"
            >
              <div className="w-[32px] h-[32px] rounded-[16px] bg-[#DDD0DA] text-[#571244] flex items-center justify-center opacity-100 rotate-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              Account
              <div className="flex items-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center min-w-[200px] h-[48px] bg-[#EF4353] text-white px-6 rounded-[4px] hover:bg-[#d43b49] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#571244] focus-visible:ring-offset-2 font-nunito-sans font-semibold text-[18px] leading-[150%] text-center"
            >
              Take Assessment
            </Link>
          </div>
          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4353] rounded-sm transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-[#1a0a2e] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#1a0a2e] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#1a0a2e] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider: End-to-End */}
      <div className="hidden lg:block w-full h-[1px] bg-[#DDD0DA]" />

      {/* Bottom Section: Nav Links */}
      <div className="hidden lg:block w-full bg-white">
        <div 
          className="w-full lg:max-w-[1440px] flex items-center justify-between mx-auto px-[64px] h-[69px] py-[20px]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative flex items-center transition-colors group font-nunito-sans font-normal text-[18px] leading-[150%] text-center hover:text-[#571244] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4353] ${link.active ? "text-[#571244]" : "text-[#151515]"}`}
            >
              <span className="flex items-center">
                {link.label}
                {link.hasDropdown && <ChevronDown />}
              </span>
              {link.active && (
                <span className="absolute -bottom-[21px] left-0 w-full h-[2.5px] bg-[#571244]" />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50 max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`py-3 px-2 flex items-center justify-between border-b border-gray-50 transition-colors font-nunito-sans font-normal text-[18px] leading-[150%] text-center hover:text-[#571244] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4353] ${link.active ? "text-[#571244]" : "text-[#151515]"}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown />}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-5">
              <Link
                href="#"
                className="bg-[#571244] text-white py-4 rounded-[4px] flex items-center justify-center font-nunito-sans font-semibold text-[18px] leading-[150%]"
                onClick={() => setMenuOpen(false)}
              >
                Account
              </Link>
              <Link
                href="#"
                className="bg-[#EF4353] text-white py-4 rounded-[4px] text-center font-nunito-sans font-semibold text-[18px] leading-[150%]"
                onClick={() => setMenuOpen(false)}
              >
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
