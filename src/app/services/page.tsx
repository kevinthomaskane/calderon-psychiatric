import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Calderon Psychiatric Services",
  description:
    "Comprehensive psychiatric services including medication management, individual therapy, family therapy, couples therapy, and telehealth. Serving all ages in Orange County, CA.",
};

const coreServices = [
  {
    title: "Medication Management",
    description:
      "Expert psychiatric medication evaluation, prescribing, and ongoing monitoring. Nicholas works with you to find the right medication regimen — adjusting dosages, managing side effects, and optimizing your treatment plan for the best outcomes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Individual Therapy",
    description:
      "One-on-one psychotherapy sessions using evidence-based approaches including Cognitive Behavioral Therapy (CBT), EMDR, Acceptance and Commitment Therapy (ACT), Motivational Interviewing, and more — tailored to your specific needs and goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Family Therapy",
    description:
      "Structured therapeutic sessions that address family dynamics, improve communication, and heal relational wounds. Using approaches like Bowen Family Systems and Structural Family Therapy to strengthen family bonds.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Couples Therapy",
    description:
      "Guided sessions for couples navigating conflict, communication breakdowns, infidelity recovery, and life transitions. Build stronger, healthier relationships through structured therapeutic intervention.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const conditions = [
  "Anxiety Disorders",
  "Depression",
  "ADHD / ADD",
  "Bipolar Disorder",
  "PTSD",
  "OCD",
  "Substance Use & Addiction",
  "Schizophrenia",
  "Schizoaffective Disorder",
  "Eating Disorders",
  "Personality Disorders",
  "Insomnia & Sleep Disorders",
  "Panic Disorder",
  "Social Anxiety",
  "Anger Management",
  "Grief & Bereavement",
  "Trauma & Abuse",
  "Relationship Issues",
  "Stress Management",
  "Geriatric Psychiatry",
  "Adolescent Psychiatry",
  "Postpartum Depression",
];

const therapyMethods = [
  "Cognitive Behavioral Therapy (CBT)",
  "EMDR",
  "Acceptance & Commitment Therapy (ACT)",
  "Motivational Interviewing",
  "Trauma-Focused CBT",
  "Prolonged Exposure Therapy",
  "Biofeedback",
  "Problem-Solving Therapy",
  "Dialectical Behavior Therapy (DBT)",
  "Psychoanalytic Therapy",
  "Behavioral Therapy",
  "Humanistic Therapy",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-6">
            Comprehensive Psychiatric Care
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
            From initial evaluation to ongoing treatment, we provide a full
            spectrum of psychiatric services for patients of all ages —
            children, adolescents, adults, and seniors.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-4">
            Core Services
          </h2>
          <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-16">
            Four pillars of care designed to meet you where you are
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-slate hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy mb-4">
                Conditions We Treat
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Our practice addresses a wide range of psychiatric and
                behavioral health conditions. If you don&apos;t see your
                specific concern listed, please reach out — we likely can help
                or provide an appropriate referral.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {conditions.map((condition) => (
                  <div key={condition} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gold shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-charcoal/80 text-sm">
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Therapy Methods */}
            <div className="bg-navy rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-cream mb-6">
                Therapy Methods
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                Evidence-based therapeutic approaches selected and combined based
                on your unique needs:
              </p>
              <div className="space-y-3">
                {therapyMethods.map((method) => (
                  <div
                    key={method}
                    className="flex items-center gap-3 bg-cream/5 rounded-lg px-4 py-3"
                  >
                    <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    <span className="text-cream/90 text-sm">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ages Served */}
      <section className="py-20 bg-slate/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-12">
            Serving Patients of All Ages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Children", age: "Ages 5–12", icon: "🧒" },
              { label: "Adolescents", age: "Ages 13–17", icon: "🧑" },
              { label: "Adults", age: "Ages 18–64", icon: "👤" },
              { label: "Seniors", age: "Ages 65+", icon: "👴" },
            ].map((group) => (
              <div
                key={group.label}
                className="bg-white rounded-2xl p-6 text-center border border-slate"
              >
                <span className="text-4xl mb-3 block">{group.icon}</span>
                <p className="font-serif font-bold text-navy text-lg">
                  {group.label}
                </p>
                <p className="text-warm-gray text-sm">{group.age}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
                <svg
                  className="w-4 h-4 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gold text-sm font-medium">
                  Telehealth Available
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-4">
                Care From Anywhere in California
              </h3>
              <p className="text-cream/80 leading-relaxed mb-6">
                Access the same quality psychiatric care from the comfort of your
                home. Our secure video platform makes it easy to connect for
                therapy sessions, medication check-ins, and consultations —
                wherever you are in California.
              </p>
              <ul className="space-y-2 text-cream/70 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Secure, HIPAA-compliant video platform
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Available throughout California
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Book via Zocdoc or Headway
                </li>
              </ul>
            </div>
            <div className="w-full md:w-80 h-48 bg-cream/5 rounded-xl border border-cream/10 flex items-center justify-center">
              <svg className="w-16 h-16 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-charcoal/70 text-lg mb-10">
            Schedule your initial consultation today and take the first step
            toward better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-navy text-cream px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a
              href="https://www.zocdoc.com/doctor/nicholas-calderon-aprn-697009"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navy text-navy px-8 py-4 rounded-lg font-medium hover:bg-navy/5 transition-colors"
            >
              Book on Zocdoc
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
