"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-6">
            Contact Us
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
            Ready to start your journey toward better mental health? Reach out
            to schedule an appointment or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-slate">
                <h2 className="font-serif text-2xl font-bold text-navy mb-2">
                  Send a Message
                </h2>
                <p className="text-charcoal/60 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal/60">
                      Thank you for reaching out. We&apos;ll respond within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate bg-cream/50 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate bg-cream/50 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate bg-cream/50 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-slate bg-cream/50 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Type of Inquiry
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-slate bg-cream/50 text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors">
                        <option>New Patient Appointment</option>
                        <option>Existing Patient Follow-up</option>
                        <option>Insurance Question</option>
                        <option>Telehealth Information</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate bg-cream/50 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <p className="text-warm-gray text-xs">
                      Please do not include sensitive medical information in this
                      form. For urgent matters, please call 911 or go to your
                      nearest emergency room.
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-navy text-cream py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 space-y-6">
              {/* Location Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate">
                <h3 className="font-serif text-lg font-bold text-navy mb-4">
                  Location
                </h3>
                <div className="flex items-start gap-3 mb-4">
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
                  <div>
                    <p className="text-charcoal font-medium">Orange County, California</p>
                    <p className="text-warm-gray text-sm mt-1">
                      Serving inpatient facilities, nursing homes, and private
                      practice across Orange County
                    </p>
                  </div>
                </div>
                {/* Map placeholder */}
                <div className="bg-slate/50 rounded-xl h-40 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 text-navy/30 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <p className="text-navy/40 text-xs">Orange County, CA</p>
                  </div>
                </div>
              </div>

              {/* Online Booking */}
              <div className="bg-white rounded-2xl p-6 border border-slate">
                <h3 className="font-serif text-lg font-bold text-navy mb-4">
                  Book Online
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://www.zocdoc.com/doctor/nicholas-calderon-aprn-697009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate hover:border-navy/30 hover:bg-navy/5 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                      <span className="text-navy font-bold text-sm">Z</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Zocdoc</p>
                      <p className="text-warm-gray text-xs">
                        Video visits available
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-warm-gray ml-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://care.headway.co/providers/nicholas-calderon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate hover:border-navy/30 hover:bg-navy/5 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                      <span className="text-navy font-bold text-sm">H</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Headway</p>
                      <p className="text-warm-gray text-xs">
                        Insurance-friendly booking
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-warm-gray ml-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Fees */}
              <div className="bg-white rounded-2xl p-6 border border-slate">
                <h3 className="font-serif text-lg font-bold text-navy mb-4">
                  Self-Pay Rates
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate">
                    <span className="text-charcoal/80 text-sm">
                      Initial Consultation
                    </span>
                    <span className="font-semibold text-navy">
                      $150 / 30 min
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-charcoal/80 text-sm">
                      Follow-up Visit
                    </span>
                    <span className="font-semibold text-navy">
                      $100 / 15 min
                    </span>
                  </div>
                </div>
                <p className="text-warm-gray text-xs mt-4">
                  We accept 150+ insurance plans. Contact us to verify your
                  coverage.
                </p>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <h3 className="font-serif text-lg font-bold text-red-900 mb-2">
                  Crisis Resources
                </h3>
                <p className="text-red-800/80 text-sm leading-relaxed">
                  If you are experiencing a mental health emergency, please call{" "}
                  <strong>911</strong> or the Suicide & Crisis Lifeline at{" "}
                  <strong>988</strong>. You can also text HOME to{" "}
                  <strong>741741</strong> for the Crisis Text Line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
