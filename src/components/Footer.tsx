import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                <span className="text-gold font-serif font-bold text-xl">
                  C
                </span>
              </div>
              <div>
                <p className="font-serif text-cream text-lg font-semibold leading-tight">
                  Calderon
                </p>
                <p className="text-cream/60 text-xs tracking-wider uppercase">
                  Psychiatric Services
                </p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mt-4">
              Expert psychiatric care with compassion. Serving Orange County and
              beyond through in-person and telehealth appointments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Medication Management",
                "Individual Therapy",
                "Family Therapy",
                "Couples Therapy",
                "Telehealth",
              ].map((service) => (
                <li key={service}>
                  <span className="text-cream/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-gold mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Orange County, California</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-gold mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Available on Zocdoc & Headway</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-gold mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Accepting New Patients</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            &copy; {new Date().getFullYear()} Calderon Psychiatric Services Inc.
            All rights reserved.
          </p>
          <p className="text-cream/50 text-sm">NPI: 1952287831</p>
        </div>
      </div>
    </footer>
  );
}
