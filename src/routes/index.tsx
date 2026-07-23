import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/udaan/Navbar";
import { Hero } from "@/components/udaan/Hero";
import { About } from "@/components/udaan/About";
import { Themes } from "@/components/udaan/Themes";
import { Details } from "@/components/udaan/Details";
import { Awards } from "@/components/udaan/Awards";
import { ImportantDates } from "@/components/udaan/ImportantDates";
import { RegistrationGuidelines } from "@/components/udaan/RegistrationGuidelines";
import { Rules, FAQ } from "@/components/udaan/Rules";
import { Contact } from "@/components/udaan/Contact";
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
          "From Grounded Ideas to Sky-High Impact. Join 30 finalist teams competing across 7 SDG-mapped themes at HITK Kolkata.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Themes />
        <Details />
        <ImportantDates />
        <RegistrationGuidelines />
        <Awards />
        <Rules />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
