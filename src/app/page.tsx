import Image from "next/image";
import Link from "next/link";

const specialties = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Anxiety & Depression",
    description: "Evidence-based treatment for anxiety disorders, depression, and mood dysregulation using therapy and medication management.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "ADHD",
    description: "Comprehensive ADHD evaluation and management for children, adolescents, and adults. Personalized medication and behavioral strategies.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Bipolar Disorder",
    description: "Stabilization and long-term management of bipolar spectrum disorders with mood stabilizers and psychotherapy.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Addiction & Recovery",
    description: "Medication-assisted treatment and counseling for substance use disorders, including opioid and alcohol dependence.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Family & Couples",
    description: "Relationship-focused therapy for families and couples navigating conflict, communication challenges, and life transitions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Telehealth",
    description: "Convenient virtual appointments from anywhere in California. Same quality care, from the comfort of your home.",
  },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "0", label: "Sentinel Events" },
  { value: "150+", label: "Insurance Plans" },
  { value: "All Ages", label: "Patients Served" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gold blur-3xl" />
        </div>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-gold text-sm font-medium">
                  Now Accepting New Patients
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight mb-6">
                Expert Psychiatric Care,{" "}
                <span className="text-gold">Rooted in Compassion</span>
              </h1>

              <p className="text-lg sm:text-xl text-cream/80 leading-relaxed mb-10 max-w-2xl">
                Nicholas Calderon, PMHNP-BC brings years of inpatient and
                outpatient psychiatric experience to every patient. From medication
                management to psychotherapy, receive the specialized care you
                deserve — in person or via telehealth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold text-center hover:bg-gold-light transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/services"
                  className="border border-cream/30 text-cream px-8 py-4 rounded-lg font-medium text-center hover:bg-cream/10 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-2xl" />
                <Image
                  src="/images/nicholas-calderon-headshot.avif"
                  alt="Nicholas Calderon, PMHNP-BC"
                  width={460}
                  height={460}
                  priority
                  className="relative rounded-2xl object-cover shadow-2xl border-2 border-gold/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-navy">
                  {stat.value}
                </p>
                <p className="text-warm-gray text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Mobile headshot — visible below hero on small screens */}
              <div className="flex justify-center mb-8 lg:hidden">
                <Image
                  src="/images/nicholas-calderon-headshot.avif"
                  alt="Nicholas Calderon, PMHNP-BC"
                  width={240}
                  height={240}
                  className="rounded-full object-cover shadow-lg border-2 border-gold/20"
                />
              </div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                About Your Provider
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-6">
                Meet Nicholas Calderon, PMHNP-BC
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                With over four years of progressive experience in psychiatric
                nursing — from bedside RN to managing a 119-bed inpatient
                facility — Nicholas brings a rare depth of clinical expertise to
                every patient encounter.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                Board-certified and trained at Walden University with a perfect
                4.0 GPA, he combines rigorous clinical knowledge with a
                solution-oriented, energetic approach. His leadership at Aliso
                Ridge Behavioral Health resulted in zero sentinel events and a
                100% NPSG percentile ranking.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group"
              >
                Read Full Bio
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Credential Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">
                Credentials & Education
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">PMHNP-BC</p>
                    <p className="text-sm text-warm-gray">Board-Certified Psychiatric Mental Health Nurse Practitioner</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">MSN — Walden University</p>
                    <p className="text-sm text-warm-gray">Psychiatric/Mental Health Nurse Practitioner (4.0 GPA)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">BSN — West Coast University</p>
                    <p className="text-sm text-warm-gray">Registered Nursing, Irvine, CA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">LPS Trainer</p>
                    <p className="text-sm text-warm-gray">Certified Orange County LPS Trainer (Active)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              What We Treat
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
              Comprehensive Psychiatric Care
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              From anxiety and depression to complex psychiatric conditions,
              we provide personalized treatment plans tailored to your unique needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((spec) => (
              <div
                key={spec.title}
                className="group p-8 rounded-2xl border border-slate bg-cream/50 hover:bg-navy hover:border-navy transition-all duration-300"
              >
                <div className="text-navy group-hover:text-gold transition-colors mb-4">
                  {spec.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy group-hover:text-cream transition-colors mb-3">
                  {spec.title}
                </h3>
                <p className="text-charcoal/70 group-hover:text-cream/80 transition-colors text-sm leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-slate/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy mb-4">
            Insurance & Payment
          </h2>
          <p className="text-charcoal/70 mb-10 max-w-xl mx-auto">
            We accept over 150 insurance plans and offer transparent self-pay
            pricing to ensure accessible care for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["Aetna", "Anthem Blue Cross", "BlueCross BlueShield", "Cigna", "UnitedHealthcare", "Oxford"].map(
              (ins) => (
                <div
                  key={ins}
                  className="bg-white px-6 py-3 rounded-full text-sm font-medium text-navy border border-slate shadow-sm"
                >
                  {ins}
                </div>
              )
            )}
            <div className="bg-navy px-6 py-3 rounded-full text-sm font-medium text-cream">
              + 150 More Plans
            </div>
          </div>
          <p className="text-charcoal/60 text-sm">
            Self-pay: Initial consultation $150 (30 min) &middot; Follow-up
            $100 (15 min)
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed mb-10">
            Whether you&apos;re seeking help for the first time or looking for a
            new provider, Nicholas Calderon is here to partner with you on your
            path to wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold-light transition-colors"
            >
              Book Your Appointment
            </Link>
            <a
              href="https://www.zocdoc.com/doctor/nicholas-calderon-aprn-697009"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/30 text-cream px-8 py-4 rounded-lg font-medium hover:bg-cream/10 transition-colors"
            >
              Book on Zocdoc
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
