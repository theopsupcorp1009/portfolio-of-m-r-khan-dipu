import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AtmosphericEffects from "@/components/AtmosphericEffects";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "M R Khan Dipu | Full-Stack Web Developer & Software Engineer",
    template: "%s | M R Khan Dipu",
  },
  description:
    "Official portfolio of M R Khan Dipu: Full-Stack Web Developer and Software Engineering Graduate (MSc & BSc, DIU) with supporting expertise in Data Science and Biomedical AI research.",
  keywords: [
    "M R Khan Dipu",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Data Science",
    "Biomedical AI",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: "M R Khan Dipu", url: "https://github.com/mrkhan393" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "M R Khan Dipu | Full-Stack Web Developer & Software Engineer",
    description:
      "Software Engineering graduate with completed BSc and MSc degrees in Data Science. Explore projects, research publications, technical skills, and resume.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070B] text-[#F4F6FA] selection:bg-[#FF2638] selection:text-[#05070B] relative font-sans">
        {/* Cinematic Atmospheric FX */}
        <AtmosphericEffects />

        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
