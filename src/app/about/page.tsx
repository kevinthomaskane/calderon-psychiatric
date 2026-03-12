import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nicholas Calderon | Calderon Psychiatric Services",
  description:
    "Learn about Nicholas Calderon, PMHNP-BC — a board-certified psychiatric nurse practitioner with extensive inpatient and outpatient experience serving Orange County, CA.",
};

const timeline = [
  {
    year: "2019–2021",
    title: "BSN, West Coast University",
    description: "Completed Bachelor of Science in Nursing in Irvine, California.",
  },
  {
    year: "2021–2022",
    title: "RN, Newport Bay Hospital",
    description:
      "Relief charge nurse at a 36-bed geropsychiatric facility, gaining foundational experience in psychiatric care.",
  },
  {
    year: "2022–2023",
    title: "RN → House Supervisor, Aliso Ridge Behavioral Health",
    description:
      "Progressed rapidly from bedside RN to House Supervisor at a 119-bed inpatient psychiatric facility.",
  },
  {
    year: "2023–2025",
    title: "Nurse Manager, Aliso Ridge Behavioral Health",
    description:
      "Led nursing staff and patient care across a 119-bed facility with ~200 direct reports. Achieved zero sentinel events and 100% NPSG percentile ranking for TJC survey. Earned Certified LPS Trainer designation.",
  },
  {
    year: "2023–2025",
    title: "MSN, Walden University",
    description:
      "Earned Master of Science in Psychiatric/Mental Health Nursing with a perfect 4.0 GPA while managing full-time clinical responsibilities.",
  },
  {
    year: "2025–Present",
    title: "Founder, Calderon Psychiatric Services Inc.",
    description:
      "Launched independent practice as a board-certified PMHNP serving inpatient psychiatric hospitals, nursing homes, and private practice across Orange County.",
  },
];

const values = [
  {
    title: "Solution-Oriented",
    description:
      "Every patient challenge has a path forward. I focus on finding practical, evidence-based solutions rather than dwelling on limitations.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Partnership-Focused",
    description:
      "I believe the best outcomes come from building a genuine partnership focused on the client's needs, goals, and preferences.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Energetic & Humorous",
    description:
      "Mental health treatment doesn't have to feel heavy. I bring genuine energy and warmth to every interaction, making the therapeutic process feel human.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            About Your Provider
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-6">
            Nicholas Calderon, PMHNP-BC
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
            Board-certified Psychiatric Mental Health Nurse Practitioner with a
            passion for delivering expert, compassionate psychiatric care across
            all age groups.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl aspect-[3/4] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <Image
                  src="/images/nicholas-calderon-headshot.avif"
                  alt="Nicholas Calderon, PMHNP-BC"
                  width={280}
                  height={280}
                  className="rounded-full object-cover border-4 border-gold/30 shadow-xl mb-6"
                />
                <p className="font-serif text-2xl font-bold text-cream text-center">
                  Nicholas Calderon
                </p>
                <p className="text-gold text-sm mt-1">
                  PMHNP-BC &middot; MSN &middot; BSN
                </p>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-3">
              <h2 className="text-3xl font-serif font-bold text-navy mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Hello! I am a board-certified Psychiatric Mental Health Nurse
                  Practitioner currently working in both inpatient and outpatient
                  psychiatry. With over three years of progressive leadership
                  experience as a nurse manager and house supervisor of an acute
                  psychiatric hospital, I bring a comprehensive understanding of
                  mental health care at every level.
                </p>
                <p>
                  My journey in psychiatric nursing began at the bedside, where I
                  developed deep empathy for patients navigating their most
                  challenging moments. Rising through the ranks to manage a
                  119-bed facility with approximately 200 staff members gave me
                  not only clinical expertise but also an appreciation for the
                  systems and teams that support great patient outcomes.
                </p>
                <p>
                  I enjoy problem-solving and finding solutions to complex
                  issues. My approach is built on the belief that every patient
                  deserves a provider who listens, collaborates, and brings
                  genuine energy to the therapeutic relationship. I aim to build
                  a partnership focused entirely on the client&apos;s needs.
                </p>
                <p>
                  Today, through Calderon Psychiatric Services, I serve patients
                  across Orange County — in psychiatric hospitals, nursing homes,
                  and private practice — as well as patients across California
                  via telehealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-4">
            My Approach
          </h2>
          <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-12">
            What you can expect when you work with me
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-cream/50 border border-slate rounded-2xl p-8"
              >
                <div className="text-navy mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-4">
            Career Journey
          </h2>
          <p className="text-charcoal/70 text-center mb-16">
            A progressive path from bedside nursing to independent practice
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-dark md:-translate-x-0.5" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full border-2 border-cream -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-gold font-semibold text-sm">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-navy mt-1">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-cream mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-cream/80 text-lg mb-10">
            Ready to take the first step toward better mental health? I&apos;m
            here to help.
          </p>
          <Link
            href="/contact"
            className="bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold-light transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
