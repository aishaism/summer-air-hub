import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Clock,
  FileText,
  Gauge,
  Home,
  Hotel,
  ShieldCheck,
  Settings,
  Sparkles,
  Store,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/icons";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { waLink } from "@/lib/site";

import heroImg from "@/assets/hero-technician.jpg";
import amcImg from "@/assets/amc-condenser.jpg";
import ctaImg from "@/assets/cta-technician.png";
import svcInstallation from "@/assets/svc-installation.jpg";
import svcRepair from "@/assets/svc-repair.jpg";
import svcCleaning from "@/assets/svc-cleaning.jpg";
import svcMaintenance from "@/assets/svc-maintenance.jpg";
import svcRefrigerant from "@/assets/svc-refrigerant.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summer Tech — AC & HVAC Maintenance Solutions in Qatar" },
      {
        name: "description",
        content:
          "Professional AC & HVAC installation, repair, cleaning and annual maintenance for homes and businesses in Qatar. Request service on WhatsApp.",
      },
      { property: "og:title", content: "Summer Tech — AC & HVAC Maintenance Solutions" },
      {
        property: "og:description",
        content:
          "Reliable AC installation, repair, cleaning and AMC services for residential and commercial properties in Qatar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "AC Installation",
    desc: "Professional installation of all types of AC systems.",
    img: svcInstallation,
  },
  {
    title: "AC Repair",
    desc: "Expert repair for all AC issues and breakdown problems.",
    img: svcRepair,
  },
  {
    title: "AC Cleaning",
    desc: "Deep cleaning for better air quality and performance.",
    img: svcCleaning,
  },
  {
    title: "AC Maintenance",
    desc: "Regular maintenance for long-lasting performance.",
    img: svcMaintenance,
  },
  {
    title: "Refrigerant Services",
    desc: "Gas charging, leak detection and pressure checking.",
    img: svcRefrigerant,
  },
  {
    title: "Commercial HVAC",
    desc: "HVAC solutions for offices, shops and commercial spaces.",
    img: svcCommercial,
  },
];

const steps = [
  { n: "01", title: "Consult", desc: "We understand your space, load and goals." },
  { n: "02", title: "Design", desc: "Engineering calculations and equipment selection." },
  { n: "03", title: "Supply", desc: "Quality equipment sourced to spec." },
  { n: "04", title: "Install", desc: "Skilled, safety-compliant installation." },
  { n: "05", title: "Commission", desc: "Testing, balancing and handover." },
  { n: "06", title: "Maintain", desc: "Ongoing AMC to protect your investment." },
];

const reasons = [
  {
    icon: Users,
    title: "Experienced Engineers & Technicians",
    desc: "Skilled professionals who provide reliable AC & HVAC solutions.",
  },
  {
    icon: Settings,
    title: "Professional AC & HVAC Expertise",
    desc: "Complete technical solutions for residential and commercial requirements.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "Quick assistance when your AC or HVAC system needs attention.",
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    desc: "Clear and straightforward service pricing with no hidden charges.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Service",
    desc: "Dependable workmanship and service you can trust.",
  },
  {
    icon: ShieldCheck,
    title: "Customer Satisfaction",
    desc: "Focused on quality service and complete customer satisfaction.",
  },
  {
    icon: Home,
    title: "Residential & Commercial Support",
    desc: "Solutions for homes, offices, shops and commercial properties.",
  },
  {
    icon: Sparkles,
    title: "Preventive Maintenance",
    desc: "Regular maintenance to help prevent unexpected AC problems.",
  },
];

const serve = [
  { icon: Home, label: "Villas" },
  { icon: Building2, label: "Apartments" },
  { icon: Hotel, label: "Offices" },
  { icon: Store, label: "Shops" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Building2, label: "Commercial Buildings" },
];

const amcBenefits = [
  "Reduce Breakdowns",
  "Improve Efficiency",
  "Reduce Repair Costs",
  "Extend AC Lifespan",
  "Maintain Performance",
  "Priority Support",
];

function Index() {
  const requestLink = waLink("Hello Summer Tech, I would like to request a service.");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-r from-brand-soft to-background">
          {/* Mobile Hero View (< lg) */}
          <div className="flex flex-col px-4 py-8 sm:px-6 sm:py-10 lg:hidden">
            {/* 1. Heading & 2. Description */}
            <div>
              <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-navy sm:text-4xl">
                Professional
                <br />
                <span className="text-primary">AC &amp; HVAC</span>
                <br />
                Solutions You
                <br />
                Can Rely On
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Reliable installation, maintenance, repair and HVAC services for residential and
                commercial properties.
              </p>
            </div>

            {/* 3. Existing hero image */}
            <div className="mt-5">
              <img
                src={heroImg}
                alt="Summer Tech technician servicing a wall-mounted air conditioner"
                width={1200}
                height={912}
                className="h-52 w-full rounded-xl object-cover sm:h-72"
              />
            </div>

            {/* 4. Request Service + Explore Services buttons (single row, side by side) */}
            <div className="mt-5 flex w-full flex-row items-center gap-2.5 sm:gap-3">
              <WhatsAppButton href={requestLink} size="sm" className="flex-1 whitespace-nowrap">
                Request Service
              </WhatsAppButton>
              <Link
                to="/services"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-primary bg-background px-3 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-brand-soft text-center whitespace-nowrap"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* 5. Experienced Technicians + Fast Response + Quality Workmanship (single horizontal row) */}
            <div className="mt-5 grid w-full grid-cols-3 gap-2 border-t border-border/60 pt-4">
              {[
                { icon: BadgeCheck, a: "Experienced", b: "Technicians" },
                { icon: Clock, a: "Fast", b: "Response" },
                { icon: Gauge, a: "Quality", b: "Workmanship" },
              ].map((t) => (
                <div
                  key={t.b}
                  className="flex min-w-0 items-center justify-center gap-1.5 text-center"
                >
                  <t.icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                  <p className="text-[11px] font-semibold leading-[1.15] text-navy">
                    {t.a}
                    <br />
                    {t.b}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Hero View (lg+) - 100% untouched layout */}
          <div className="mx-auto hidden max-w-7xl items-center gap-6 px-6 lg:grid lg:grid-cols-2 lg:py-0">
            <div className="lg:py-16">
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
                Professional
                <br />
                <span className="text-primary">AC &amp; HVAC</span>
                <br />
                Solutions You
                <br />
                Can Rely On
              </h1>
              <p className="mt-5 max-w-md text-base text-muted-foreground">
                Reliable installation, maintenance, repair and HVAC services for residential and
                commercial properties.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton href={requestLink} size="md">
                  Request Service
                </WhatsAppButton>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-brand-soft"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {[
                  { icon: BadgeCheck, a: "Experienced", b: "Technicians" },
                  { icon: Clock, a: "Fast", b: "Response" },
                  { icon: Gauge, a: "Quality", b: "Workmanship" },
                ].map((t) => (
                  <div key={t.b} className="flex min-w-0 items-center gap-3">
                    <t.icon className="h-7 w-7 shrink-0 text-primary" strokeWidth={1.5} />
                    <p className="text-sm font-medium leading-tight text-navy">
                      {t.a}
                      <br />
                      {t.b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:mr-[calc((100%-100vw)/2)]">
              <img
                src={heroImg}
                alt="Summer Tech technician servicing a wall-mounted air conditioner"
                width={1200}
                height={912}
                className="h-64 w-full rounded-xl object-cover sm:h-80 lg:h-[540px] lg:rounded-none"
              />
            </div>
          </div>
        </section>

        {/* 2. WHY CHOOSE SUMMER TECH? */}
        <section className="bg-background py-10 sm:py-20 border-b border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-brand-soft px-3.5 py-1 text-xs font-semibold text-primary">
                Trusted AC &amp; HVAC Specialists in Qatar
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Why Choose Summer Tech?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We deliver certified HVAC technical solutions, transparent pricing, and rapid
                on-site response for homes and businesses across Qatar.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="group flex flex-col rounded-xl border border-border/80 bg-card p-3.5 sm:p-5 shadow-xs transition-all duration-200 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <r.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-2.5 sm:mt-4 text-xs sm:text-sm font-bold leading-snug text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. OUR MAIN SERVICES */}
        <section className="bg-brand-soft py-14 sm:py-20 border-b border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Our Main Services
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Complete AC &amp; HVAC solutions under one roof.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/40"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={600}
                    height={512}
                    className="h-32 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-4 text-center">
                    <h3 className="text-sm font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <a
                      href={waLink(`Hello Summer Tech, I need ${s.title}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 text-xs font-semibold text-primary hover:underline"
                    >
                      Request Service
                      <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. HOW WE WORK */}
        <section className="bg-background py-14 sm:py-20 border-b border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                How We Work
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                From First Calculation to Final Commissioning
              </p>
            </div>

            <div className="relative mt-12">
              <div className="absolute left-0 right-0 top-6 hidden border-t border-dashed border-primary/40 lg:block" />
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {steps.map((s) => (
                  <div key={s.n} className="relative flex flex-col items-center text-center">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/50 bg-background text-sm font-bold text-primary shadow-xs">
                      {s.n}
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 max-w-[11rem] text-xs leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AMC BANNER */}
        <section className="relative overflow-hidden bg-navy">
          <img
            src={amcImg}
            alt="Outdoor AC condenser unit"
            loading="lazy"
            width={1200}
            height={800}
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover lg:block"
          />
          <div className="absolute inset-y-0 left-1/2 hidden w-40 bg-gradient-to-r from-navy to-transparent lg:block" />
          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14">
            <div className="max-w-xl text-navy-foreground">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                Keep Your AC Running <br className="hidden sm:inline" />
                All Year
              </h2>
              <p className="mt-2.5 text-xs text-navy-foreground/75 sm:mt-4 sm:text-sm sm:leading-relaxed">
                Annual Maintenance Contract (AMC) helps keep your AC systems reliable, efficient and
                ready throughout the year.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 sm:mt-6 sm:grid-cols-3 sm:gap-3">
                {amcBenefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-1.5 text-[11px] text-navy-foreground/90 sm:gap-2 sm:text-xs"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex justify-center sm:mt-7 sm:justify-start">
                <WhatsAppButton
                  href={waLink("Hello Summer Tech, I would like an AMC quote.")}
                  size="md"
                >
                  Get an AMC Quote
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* WE SERVE */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">We Serve</h2>
            <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {serve.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col items-center px-3 text-center ${
                    i === 0 ? "" : "lg:border-l lg:border-border"
                  }`}
                >
                  <s.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <p className="mt-3 text-xs font-semibold text-navy">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-brand-soft">
          <div className="mx-auto grid max-w-7xl items-end gap-8 px-4 pt-10 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-14">
            <img
              src={ctaImg}
              alt="Summer Tech technician ready to help"
              loading="lazy"
              width={912}
              height={1008}
              className="mx-auto h-56 w-auto object-contain lg:h-72"
            />
            <div className="pb-12 lg:pb-16">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Need AC or HVAC Service?</h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Our experienced technicians are ready to help you with installation, maintenance,
                repair and emergency breakdowns.
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
