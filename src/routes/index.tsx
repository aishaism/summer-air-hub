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
      { title: "Summer Tech — AC & HVAC Maintenance Solutions in Bahrain" },
      {
        name: "description",
        content:
          "Professional AC & HVAC installation, repair, cleaning and annual maintenance for homes and businesses in Bahrain. Request service on WhatsApp.",
      },
      { property: "og:title", content: "Summer Tech — AC & HVAC Maintenance Solutions" },
      {
        property: "og:description",
        content:
          "Reliable AC installation, repair, cleaning and AMC services for residential and commercial properties in Bahrain.",
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
  { icon: Users, label: "Experienced Engineers & Technicians" },
  { icon: Settings, label: "Professional AC & HVAC Expertise" },
  { icon: Clock, label: "Fast Response" },
  { icon: FileText, label: "Transparent Pricing" },
  { icon: BadgeCheck, label: "Reliable Service" },
  { icon: ShieldCheck, label: "Customer Satisfaction" },
  { icon: Home, label: "Residential & Commercial Support" },
  { icon: Sparkles, label: "Preventive Maintenance" },
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
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-r from-brand-soft to-background">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:py-0">
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
                <a
                  href={requestLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Request Service
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
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

        {/* OUR MAIN SERVICES */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              Our Main Services
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Complete AC &amp; HVAC solutions under one roof.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
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
                      <WhatsAppIcon className="h-4 w-4" />
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

        {/* HOW WE WORK */}
        <section className="bg-brand-soft py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">How We Work</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              From First Calculation to Final Commissioning
            </p>
            <div className="relative mt-12">
              <div className="absolute left-0 right-0 top-6 hidden border-t border-dashed border-primary/40 lg:block" />
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {steps.map((s) => (
                  <div key={s.n} className="relative flex flex-col items-center text-center">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/50 bg-background text-sm font-bold text-primary">
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

        {/* WHY CHOOSE */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              Why Choose Summer Tech?
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
              {reasons.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex flex-col items-center px-3 text-center ${
                    i === 0 ? "" : "lg:border-l lg:border-border"
                  }`}
                >
                  <r.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <p className="mt-3 text-xs font-semibold leading-snug text-navy">{r.label}</p>
                </div>
              ))}
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
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="max-w-xl text-navy-foreground">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                Keep Your AC Running
                <br />
                All Year
              </h2>
              <p className="mt-4 text-sm text-navy-foreground/75">
                Annual Maintenance Contract (AMC) helps keep your AC systems reliable, efficient and
                ready throughout the year.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {amcBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-navy-foreground/90">
                    <Check className="h-4 w-4 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={waLink("Hello Summer Tech, I would like an AMC quote.")}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-brand-soft"
              >
                Get an AMC Quote
                <WhatsAppIcon className="h-4 w-4" />
              </a>
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
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Need AC or HVAC Service?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Our experienced technicians are ready to help you with installation, maintenance,
                repair and emergency breakdowns.
              </p>
              <a
                href={requestLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Service on WhatsApp
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
