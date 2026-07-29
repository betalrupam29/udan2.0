import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/udaan/Navbar";
import { Particles } from "@/components/udaan/Particles";
import { Hero } from "@/components/udaan/Hero";
import { About } from "@/components/udaan/About";
import { Themes } from "@/components/udaan/Themes";
import { Details } from "@/components/udaan/Details";
import { Awards } from "@/components/udaan/Awards";
import { ImportantDates } from "@/components/udaan/ImportantDates";
import { RegistrationGuidelines } from "@/components/udaan/RegistrationGuidelines";
import { DownloadSection } from "@/components/udaan/DownloadSection";
import { Rules, FAQ } from "@/components/udaan/Rules";
import { Contact } from "@/components/udaan/Contact";
import { Members } from "@/components/udaan/Members";
import Glimpse2026 from "@/components/udaan/Glimpse2026";

import { Footer } from "@/components/udaan/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UDAAN 2.0 — National Prototype & Business Model Competition | IIC, HITK" },
      {
        name: "description",
        content:
          "UDAAN 2.0 is a National Level Reward-Based Competition on Prototype & Business Models by IIC, Heritage Institute of Technology, Kolkata — 26–27 August 2026.",
      },
      { property: "og:title", content: "UDAAN 2.0 — National Prototype & Business Model Competition" },
      {
        property: "og:description",
        content:
          "From Grounded Ideas to Sky-High Impact. Join 50 (max) finalist teams competing across 7 SDG-mapped themes at HITK Kolkata.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden hero-radial text-white">
      {/* Global particles — one layer for the entire page */}
{/* <Particles count={40} /> */}

      {/* Global floating orbs scattered down the page */}
      <div className="pointer-events-none fixed -top-20 -left-20 h-96 w-96 rounded-full bg-gold/15 blur-3xl animate-float-slow" />
      <div className="pointer-events-none fixed top-[30vh] right-0 h-[28rem] w-[28rem] rounded-full bg-skyblue/15 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="pointer-events-none fixed top-[60vh] -left-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl animate-float-slow" style={{ animationDelay: "4s" }} />
      <div className="pointer-events-none fixed bottom-[10vh] right-10 h-96 w-96 rounded-full bg-skyblue/10 blur-3xl animate-float-slow" style={{ animationDelay: "6s" }} />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Themes />
          <Details />
          <ImportantDates />
          <RegistrationGuidelines />
          <DownloadSection />
          <Awards />
          <Members />
          <Rules />
          <FAQ />
          <Contact />
          <Glimpse2026 />

        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </div>
  );
}
