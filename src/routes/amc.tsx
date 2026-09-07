import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Check,
  Home,
  Building2,
  Building,
  Store,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/icons";
import { waLink } from "@/lib/site";

import amcHero from "@/assets/amc-hero.jpg";
import amcCondenser from "@/assets/amc-condenser.jpg";

export const Route = createFileRoute("/amc")({
  head: () => ({
    meta: [
      { title: "Annual Maintenance Contract (AMC) — Summer Tech Qatar" },
      {
        name: "description",
        content:
          "Keep your AC running smoothly year-round with Summer Tech's comprehensive AMC contracts in Qatar for villas, apartments, offices, shops, restaurants and commercial buildings.",
      },
      {
        property: "og:title",
        content: "Annual Maintenance Contract (AMC) — Summer Tech Qatar",
      },
      {
        property: "og:description",
        content:
          "Reliable AC Performance, Year After Year. Preventive maintenance, priority support, and scheduled AC inspections in Qatar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AmcPage,
});

/* Custom high-fidelity inclusion icons matching approved reference */
function MaintenanceCogIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="4" className="fill-primary/10" />
      <path d="M18 4v3M18 29v3M4 18h3M29 18h3M8.1 8.1l2.1 2.1M25.8 25.8l2.1 2.1M8.1 27.9l2.1-2.1M25.8 10.2l2.1-2.1" />
      <circle cx="18" cy="18" r="8" />
    </svg>
  );
}

function InspectionDocIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="5" width="16" height="22" rx="2" className="fill-primary/10" />
      <path d="M11 11h8M11 16h6" />
      <circle cx="23" cy="23" r="6" className="fill-background" strokeWidth="2" />
      <path d="M28 28l4 4" strokeWidth="2.5" />
      <path d="M21 23l1.5 1.5 3-3" strokeWidth="1.8" />
    </svg>
  );
}

function FilterCleaningIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="7" width="24" height="22" rx="2" className="fill-primary/10" />
      <line x1="12" y1="7" x2="12" y2="29" />
      <line x1="18" y1="7" x2="18" y2="29" />
      <line x1="24" y1="7" x2="24" y2="29" />
      <line x1="6" y1="13" x2="30" y2="13" strokeDasharray="1 2" strokeWidth="1.5" />
      <line x1="6" y1="18" x2="30" y2="18" strokeDasharray="1 2" strokeWidth="1.5" />
      <line x1="6" y1="23" x2="30" y2="23" strokeDasharray="1 2" strokeWidth="1.5" />
    </svg>
  );
}

function CoilInspectionIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 7v22c0 1.5 2 2.5 3.5 1.5l.5-.5c1.5-1 1.5-3 1.5-4.5V10c0-1.5 2-2.5 3.5-1.5l.5.5c1.5 1 1.5 3 1.5 4.5v16c0 1.5 2 2.5 3.5 1.5" />
      <line x1="6" y1="7" x2="11" y2="7" />
      <line x1="25" y1="29" x2="30" y2="29" />
    </svg>
  );
}

function DrainageInspectionIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="20" height="24" rx="2" className="fill-primary/10" />
      <path d="M14 6v8h8V6" />
      <path d="M18 18v6" strokeWidth="2" />
      <path d="M18 27c-1.5 0-2.5-1-2.5-2 0-1.2 2.5-4 2.5-4s2.5 2.8 2.5 4c0 1-1 2-2.5 2z" className="fill-primary" />
    </svg>
  );
}

function PressureGaugeIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="15" r="7" className="fill-primary/10" />
      <circle cx="24" cy="15" r="7" className="fill-primary/10" />
      <path d="M12 15l2-3M24 15l-2-3" />
      <path d="M12 22v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7" />
      <line x1="18" y1="22" x2="18" y2="31" />
    </svg>
  );
}

function ElectricalInspectionIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4l10 5v8c0 8-5 13-10 15C13 30 8 25 8 17V9l10-5z" className="fill-primary/10" />
      <path d="M19 11l-4 7h5l-1 7 5-8h-5l1-6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PerformanceTestingIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="6" width="26" height="18" rx="2" className="fill-primary/10" />
      <path d="M18 24v6M12 30h12" />
      <path d="M9 18l5-6 4 4 6-7" strokeWidth="2.2" />
      <circle cx="24" cy="9" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PriorityServiceIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4l11 5v8c0 7.5-5 13-11 15C12 30 7 24.5 7 17V9l11-5z" className="fill-primary/10" />
      <polygon points="18,11 20,15 24.5,15.5 21,18.5 22,23 18,20.5 14,23 15,18.5 11.5,15.5 16,15" fill="currentColor" stroke="none" />
    </svg>
  );
}

const inclusionItems = [
  { title: "Scheduled Preventive Maintenance", Icon: MaintenanceCogIcon },
  { title: "AC Inspection", Icon: InspectionDocIcon },
  { title: "Filter Cleaning", Icon: FilterCleaningIcon },
  { title: "Coil Inspection", Icon: CoilInspectionIcon },
  { title: "Drainage Inspection", Icon: DrainageInspectionIcon },
  { title: "Refrigerant Pressure Checking", Icon: PressureGaugeIcon },
  { title: "Electrical Inspection", Icon: ElectricalInspectionIcon },
  { title: "Performance Testing", Icon: PerformanceTestingIcon },
  { title: "Priority Service", Icon: PriorityServiceIcon },
];

const amcBenefits = [
  "Reduce unexpected breakdowns",
  "Maintain cooling performance",
  "Improve efficiency",
  "Extend AC lifespan",
  "Reduce emergency repair costs",
  "Priority support",
];

const amcAvailableFor = [
  { label: "Villas", icon: Home },
  { label: "Apartments", icon: Building2 },
  { label: "Offices", icon: Building },
  { label: "Shops", icon: Store },
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Commercial Buildings", icon: Warehouse },
];

function AmcPage() {
  const amcQuoteLink = waLink(
    "Hello Summer Tech, I would like to get a quote for an Annual Maintenance Contract (AMC)."
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Title & Breadcrumb Header */}
        <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-4 sm:px-6 sm:pt-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Annual Maintenance Contract (AMC)
          </h1>
          <nav aria-label="Breadcrumb" className="mt-2 flex items-center gap-2 text-sm font-medium">
            <Link to="/" className="text-primary transition-colors hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span className="text-primary">AMC</span>
          </nav>
        </section>

        {/* Large Dark Navy AMC Hero */}
        <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl bg-navy text-navy-foreground shadow-lg sm:rounded-3xl">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="z-10 p-6 sm:p-10 lg:py-14 lg:pl-12 lg:pr-6">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  Reliable AC Performance,
                  <br />
                  Year After Year
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
                  Annual Maintenance Contract (AMC) helps keep your AC systems reliable, efficient
                  and ready throughout the year.
                </p>
                <div className="mt-8">
                  <a
                    href={amcQuoteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    Get an AMC Quote
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[380px]">
                <img
                  src={amcHero}
                  alt="Summer Tech technician servicing a wall-mounted AC unit"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </section>

        {/* "What's Included in AMC?" & "Benefits of AMC" */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left: 9 Service Inclusion Cards (3x3 grid) */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                What’s Included in AMC?
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
                {inclusionItems.map(({ title, Icon }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-card p-5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-soft text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-3.5 text-xs font-bold leading-snug text-navy sm:text-sm">
                      {title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Benefits of AMC Checklist */}
            <div className="flex flex-col justify-center rounded-2xl border border-border/70 bg-brand-soft/50 p-6 sm:p-8 lg:col-span-4 lg:bg-transparent lg:border-0 lg:p-0">
              <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                Benefits of AMC
              </h2>
              <ul className="mt-6 space-y-4 sm:space-y-5">
                {amcBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </span>
                    <span className="text-sm font-medium text-navy sm:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4">
                <a
                  href={amcQuoteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Request AMC Proposal
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* "AMC Available For" Section */}
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            AMC Available For
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {amcAvailableFor.map(({ label, icon: PropertyIcon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-card p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <PropertyIcon className="h-7 w-7 stroke-[1.75]" />
                </div>
                <p className="mt-3.5 text-sm font-bold text-navy">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dark Navy "Protect Your AC Investment" CTA Section */}
        <section className="mx-auto w-full max-w-7xl px-4 py-10 pb-16 sm:px-6 sm:py-14 sm:pb-20">
          <div className="relative overflow-hidden rounded-2xl bg-navy text-navy-foreground shadow-lg sm:rounded-3xl">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
              <div className="p-6 sm:p-10 lg:col-span-7 lg:py-12 lg:pl-12">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Protect Your AC Investment
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
                  Get an AMC Quote Today and enjoy worry-free cooling all year long.
                </p>
                <div className="mt-6">
                  <a
                    href={amcQuoteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    Get an AMC Quote
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:col-span-5 lg:h-full">
                <img
                  src={amcCondenser}
                  alt="Outdoor AC condenser compressor units maintained by Summer Tech"
                  width={1000}
                  height={667}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
