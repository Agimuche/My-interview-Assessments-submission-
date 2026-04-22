"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#" },
  { label: "What We Do", href: "#" },
  { label: "Acts", href: "#" },
  { label: "Projects", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#c8102e] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">TG</span>
            </div>
            <span className="font-bold text-[#1a0a2e] text-sm leading-tight">
              TOBAMS
              <br />
              <span className="font-normal text-xs tracking-widest">GROUP</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#1a1a2e] text-[13px] font-medium hover:text-[#c8102e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-1 rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#"
              className="border border-[#1a0a2e] text-[#1a0a2e] text-[13px] font-medium px-4 py-[6px] rounded hover:bg-[#1a0a2e] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a0a2e] focus:ring-offset-1"
            >
              Account
            </Link>
            <Link
              href="#"
              className="bg-[#c8102e] text-white text-[13px] font-medium px-4 py-[6px] rounded hover:bg-[#a00d24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-1"
            >
              Take Assessment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#c8102e]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="w-5 h-0.5 bg-[#1a0a2e] mb-1" />
            <div className="w-5 h-0.5 bg-[#1a0a2e] mb-1" />
            <div className="w-5 h-0.5 bg-[#1a0a2e]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#1a1a2e] text-sm font-medium hover:text-[#c8102e] transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-[#c8102e] rounded"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <Link
                href="#"
                className="border border-[#1a0a2e] text-[#1a0a2e] text-sm font-medium px-4 py-2 rounded text-center hover:bg-[#1a0a2e] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a0a2e]"
              >
                Account
              </Link>
              <Link
                href="#"
                className="bg-[#c8102e] text-white text-sm font-medium px-4 py-2 rounded text-center hover:bg-[#a00d24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8102e]"
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
