import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://calderonpsychiatric.com"
  ),
  title: "Calderon Psychiatric Services | Orange County, CA",
  description:
    "Board-certified Psychiatric Mental Health Nurse Practitioner providing compassionate, expert psychiatric care in Orange County, California. Specializing in anxiety, ADHD, depression, and more.",
  keywords: [
    "psychiatrist Orange County",
    "PMHNP",
    "mental health",
    "anxiety treatment",
    "ADHD specialist",
    "psychiatric nurse practitioner",
    "Orange County CA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-cream text-charcoal`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
