"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-slate">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center group-hover:bg-navy-light transition-colors">
              <span className="text-gold font-serif font-bold text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-navy text-lg font-semibold leading-tight">
                Calderon
              </p>
              <p className="text-warm-gray text-xs tracking-wider uppercase">
                Psychiatric Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  pathname === link.href
                    ? "text-navy"
                    : "text-warm-gray hover:text-navy"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-navy text-cream px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-slate mt-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-navy bg-slate/50"
                    : "text-warm-gray hover:text-navy hover:bg-slate/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-navy text-cream px-5 py-3 rounded-lg text-center font-medium hover:bg-navy-light transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
