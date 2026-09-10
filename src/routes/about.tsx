import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  BadgeCheck,
  Clock,
  Gauge,
  ShieldCheck,
  Settings,
  FileText,
  Home,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/icons";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { waLink } from "@/lib/site";

import heroTechnician from "@/assets/hero-technician.jpg";
import ctaTechnician from "@/assets/cta-technician.png";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — Summer Tech Maintenance Solutions W.L.L. Qatar",
      },
      {
        name: "description",
        content:
          "Learn more about Summer Tech Maintenance Solutions W.L.L. — Qatar's trusted AC & HVAC maintenance company in Doha, delivering dependable residential and commercial cooling solutions.",
      },
      {
        property: "og:title",
        content: "About Summer Tech Maintenance Solutions W.L.L.",
      },
      {
        property: "og:description",
        content:
          "Professional AC & HVAC maintenance, repair, installation and AMC services across the State of Qatar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const keyStrengths = [
  {
    icon: BadgeCheck,
    title: "Certified HVAC Specialists",
    desc: "Our team comprises trained HVAC technicians with extensive field experience across major air conditioning brands.",
  },
  {
    icon: Clock,
    title: "Fast Response Dispatch",
    desc: "Prompt on-site arrival across Qatar to resolve AC breakdowns before heat impacts your space.",
  },
  {
    icon: FileText,
    title: "Transparent, Upfront Pricing",
    desc: "Clear itemized quotations with zero hidden surprises. You know exactly what work is needed and what it costs.",
  },
  {
    icon: Settings,
    title: "Genuine Parts & Quality Gas",
    desc: "We utilize authentic manufacturer-grade replacement parts and premium refrigerants for maximum cooling performance.",
  },
  {
    icon: Gauge,
    title: "Precision Diagnostic Tools",
    desc: "Equipped with digital manifold gauges, leak detectors, and electrical testing equipment for pinpoint problem solving.",
  },
  {
    icon: ShieldCheck,
    title: "Customer Satisfaction Guaranteed",
    desc: "We stand behind our workmanship with dedicated service warranties and attentive post-service follow-up.",
  },
];

const residentialFeatures = [
  "Split & Window AC maintenance and deep cleaning",
  "Rapid breakdown repairs for villas and apartments",
  "Indoor air sanitization & allergen reduction",
  "Thermostat diagnosis & quiet cooling optimization",
  "Residential Annual Maintenance Contracts (AMC)",
];

const commercialFeatures = [
  "Ducted Split, Cassette & Package AC systems",
  "FCU (Fan Coil Unit) preventive servicing",
  "Customized commercial AMCs for minimal downtime",
  "Refrigerant leak management & compliance",
  "Emergency breakdown priority response for businesses",
];

function AboutPage() {
  const requestLink = waLink(
    "Hello Summer Tech, I would like to learn more about your services and request an estimate.",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Title & Breadcrumb Header */}
        <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-4 sm:px-6 sm:pt-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">About Us</h1>
          <nav aria-label="Breadcrumb" className="mt-2 flex items-center gap-2 text-sm font-medium">
            <Link to="/" className="text-primary transition-colors hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span className="text-primary">About Us</span>
          </nav>
        </section>

        {/* Company Introduction Hero */}
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-bold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                AC &amp; HVAC Specialists in Qatar
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                Delivering Reliable Cooling When You Need It Most
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                <strong className="text-navy">Summer Tech Maintenance Solutions W.L.L.</strong> is a
                dedicated air conditioning and HVAC maintenance service company based in Doha, State
                of Qatar. We specialize in keeping residential homes, corporate offices, retail
                shops, and commercial facilities reliably cool, energy-efficient, and comfortable.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                With Qatar's intense summer climate, air conditioning is not a luxury—it is an
                essential lifeline. Our mission is to eliminate unexpected breakdowns through
                rigorous preventive maintenance, swift emergency repairs, and expertly managed
                Annual Maintenance Contracts (AMC).
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Doha Based", sub: "State of Qatar" },
                  { label: "All AC Types", sub: "Split, Cassette & FCU" },
                  { label: "Fast Dispatch", sub: "Emergency Response" },
                  { label: "Preventive AMC", sub: "Year-Round Protection" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-card p-3.5 text-center shadow-xs"
                  >
                    <p className="text-sm font-bold text-navy">{stat.label}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <WhatsAppButton href={requestLink} size="md">
                  Contact Our Team on WhatsApp
                </WhatsAppButton>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-muted"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-border shadow-md">
                <img
                  src={heroTechnician}
                  alt="Summer Tech HVAC technician performing AC maintenance in Qatar"
                  width={900}
                  height={684}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="mt-4 overflow-hidden rounded-xl border border-border shadow-sm">
                <img
                  src={servicesHero}
                  alt="Commercial ceiling cassette AC maintenance"
                  width={900}
                  height={400}
                  className="h-36 w-full object-cover sm:h-44"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Summer Tech Section */}
        <section className="bg-brand-soft py-10 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Why Choose Summer Tech?
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Professionalism, engineering precision, and a customer-first commitment set us
                apart.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-2.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {keyStrengths.map((s) => (
                <div
                  key={s.title}
                  className="flex flex-col rounded-xl sm:rounded-2xl border border-border/80 bg-card p-3.5 sm:p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-brand-soft text-primary">
                    <s.icon className="h-4 w-4 sm:h-6 sm:w-6 stroke-[1.75]" />
                  </div>
                  <h3 className="mt-2.5 sm:mt-4 text-xs sm:text-base font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential & Commercial Service Coverage */}
        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Comprehensive Service Coverage
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Tailored cooling and ventilation services engineered for both residential comfort and
              commercial performance.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Residential Coverage */}
            <div className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Residential AC Services</h3>
                  <p className="text-xs text-muted-foreground">
                    Villas, Apartments &amp; Compounds
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We ensure your family enjoys clean, ice-cold air with whisper-quiet operation and
                minimal electrical energy consumption throughout the summer months.
              </p>

              <ul className="mt-6 space-y-3">
                {residentialFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-navy">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <a
                  href={waLink("Hello Summer Tech, I would like to book a residential AC service.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Book Residential Service
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Commercial Coverage */}
            <div className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Commercial HVAC Solutions</h3>
                  <p className="text-xs text-muted-foreground">
                    Offices, Retail, Cafes &amp; Buildings
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Commercial environments require continuous uptime. Our scheduled preventive
                maintenance programs protect your business operations, inventory, and staff comfort.
              </p>

              <ul className="mt-6 space-y-3">
                {commercialFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-navy">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <a
                  href={waLink(
                    "Hello Summer Tech, I would like to inquire about commercial HVAC services.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Request Commercial AMC
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA Section */}
        <section className="bg-brand-soft">
          <div className="mx-auto grid max-w-7xl items-end gap-8 px-4 pt-10 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-14">
            <img
              src={ctaTechnician}
              alt="Summer Tech professional technician ready to help in Qatar"
              loading="lazy"
              width={912}
              height={1008}
              className="mx-auto h-56 w-auto object-contain lg:h-72"
            />
            <div className="pb-12 lg:pb-16">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Ready to Experience Reliable Cooling?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Contact Summer Tech Maintenance Solutions today. Whether you need immediate
                breakdown troubleshooting or a comprehensive Annual Maintenance Contract, our
                technicians are standing by.
              </p>
              <WhatsAppButton href={requestLink} size="md" className="mt-6">
                Request Service on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
