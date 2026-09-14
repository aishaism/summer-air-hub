import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ThermometerSnowflake,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { PageHero } from "@/components/site/PageHero";
import { waLink } from "@/lib/site";

import servicesHero from "@/assets/services-hero.jpg";
import svcInstallation from "@/assets/svc-installation.jpg";
import svcMaintenance from "@/assets/svc-maintenance.jpg";
import svcCleaning from "@/assets/svc-cleaning.jpg";
import svcRepair from "@/assets/svc-repair.jpg";
import svcElectrical from "@/assets/svc-electrical.jpg";
import svcCompressor from "@/assets/svc-compressor.jpg";
import svcFcu from "@/assets/svc-fcu.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import commercialRefrigerationImg from "@/assets/commercial-refrigeration.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Summer Tech AC & HVAC, Qatar" },
      {
        name: "description",
        content:
          "Complete AC, HVAC, and commercial kitchen refrigeration services in Qatar: installation, maintenance, cleaning, repair, commercial HVAC, and dedicated kitchen equipment servicing.",
      },
      { property: "og:title", content: "Our Services — Summer Tech AC & HVAC" },
      {
        property: "og:description",
        content:
          "AC installation, maintenance, cleaning, repair and commercial HVAC services to keep your systems running all year round.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const kitchenFeatures = [
  "Commercial Refrigerator & Chiller Repair",
  "Walk-In Freezers & Cold Storage Rooms",
  "Display Chillers & Merchandisers",
  "Compressor, Thermostat & Gas Issues",
  "Commercial Ovens, Ranges & Fryers",
  "Preventive Maintenance & Safety Audits",
];

const acServices = [
  {
    title: "AC Installation",
    img: svcInstallation,
    items: [
      "Split AC Installation",
      "Window AC Installation",
      "Cassette AC Installation",
      "Package AC Installation",
      "FCU Installation",
      "AC Replacement & Relocation",
    ],
  },
  {
    title: "AC Maintenance",
    img: svcMaintenance,
    items: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Emergency Breakdown Service",
      "AC Inspection",
      "Regular Maintenance",
    ],
  },
  {
    title: "AC Cleaning",
    img: svcCleaning,
    items: [
      "General AC Cleaning",
      "Deep Cleaning",
      "Chemical Cleaning",
      "Indoor Unit Cleaning",
      "Outdoor Unit Cleaning",
      "Filter Cleaning",
    ],
  },
  {
    title: "AC Repair",
    img: svcRepair,
    items: [
      "Cooling Problems",
      "Water Leakage",
      "AC Not Starting",
      "Abnormal Noise",
      "Fan / Motor Problems",
      "Drainage Problems",
      "Thermostat Problems",
    ],
  },
  {
    title: "Electrical & Control Services",
    img: svcElectrical,
    items: [
      "PCB Diagnosis",
      "PCB Replacement",
      "Capacitor Replacement",
      "Sensor Replacement",
      "Thermostat Services",
      "Contactor & Relay Replacement",
      "Electrical Fault Diagnosis",
    ],
  },
  {
    title: "Compressor Services",
    img: svcCompressor,
    items: [
      "Compressor Testing",
      "Compressor Troubleshooting",
      "Compressor Replacement",
      "Compressor Electrical Diagnosis",
    ],
  },
  {
    title: "FCU Maintenance",
    img: svcFcu,
    items: [
      "FCU Cleaning",
      "Coil Cleaning",
      "Drain Tray Cleaning",
      "Drain Line Cleaning",
      "Blower Cleaning",
      "Preventive Maintenance",
    ],
  },
  {
    title: "Commercial HVAC Services",
    img: svcCommercial,
    items: ["Offices", "Villas", "Apartments", "Shops", "Restaurants", "Commercial Buildings"],
  },
];

function ServicesPage() {
  const refrigeratorWa = waLink(
    "Hello Summer Tech, I would like to request Commercial Refrigerator / Kitchen Equipment Service."
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Uniform Hero */}
        <PageHero
          title="Our Services"
          description="Complete AC & HVAC services to keep your systems running efficiently all year round."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
          actions={
            <>
              <WhatsAppButton
                href={waLink("Hello Summer Tech, I would like to request an AC service.")}
                size="md"
              >
                Request Service
              </WhatsAppButton>
              <a
                href="#kitchen-equipment-core"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-background px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-brand-soft"
              >
                Kitchen Equipment Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </>
          }
          image={{
            src: servicesHero,
            alt: "Technician servicing a ceiling cassette air conditioner",
            badgeText: "AC & HVAC Maintenance in Qatar",
            badgeSubtext: "Summer Tech Services",
          }}
        />

        {/* Service cards */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* FEATURED: Kitchen Equipment Services (Core Business Operation) */}
            <article
              id="kitchen-equipment-core"
              className="lg:col-span-2 relative flex flex-col justify-between gap-6 rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-card via-brand-soft/40 to-card p-6 shadow-md transition-all duration-200 hover:border-primary sm:flex-row sm:items-center sm:p-8"
            >
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-xs font-bold text-primary">
                    <ThermometerSnowflake className="h-3.5 w-3.5 text-primary shrink-0" />
                    Core Business Operation
                  </span>
                  <span className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-semibold text-navy">
                    Commercial Refrigeration Focus
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
                  Kitchen Equipment Services
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl">
                  Commercial refrigeration and kitchen equipment is our core business operation. We provide expert repair, troubleshooting,
                  and preventive maintenance for commercial refrigerators, walk-in chillers, cold rooms, and
                  commercial kitchen lines across Qatar.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 text-xs text-navy font-medium max-w-2xl">
                  {kitchenFeatures.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <WhatsAppButton href={refrigeratorWa} size="md" className="rounded-xl shadow-xs">
                    Request Refrigerator Service
                  </WhatsAppButton>
                  <Link
                    to="/kitchen-equipment-services"
                    className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-background px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-brand-soft"
                  >
                    View Dedicated Kitchen Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative shrink-0 sm:w-64 lg:w-80">
                <img
                  src={commercialRefrigerationImg}
                  alt="Technician servicing commercial kitchen refrigeration equipment and digital controller"
                  width={600}
                  height={512}
                  loading="lazy"
                  className="h-52 w-full rounded-xl border border-border/80 object-cover shadow-xs sm:h-56 lg:h-64"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg bg-navy/90 p-2.5 text-center text-white backdrop-blur-sm">
                  <p className="text-[11px] font-semibold">Fast Refrigerator Diagnostics in Qatar</p>
                </div>
              </div>
            </article>

            {/* Standard AC & HVAC Services */}
            {acServices.map((s, i) => (
              <article
                key={s.title}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-lg font-bold text-navy">{s.title}</h2>
                  </div>
                  <ul className="mt-4 space-y-1.5 pl-5 text-sm text-muted-foreground">
                    {s.items.map((item) => (
                      <li key={item} className="list-disc marker:text-primary/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    href={waLink(`Hello Summer Tech, I would like to request ${s.title}.`)}
                    size="sm"
                    className="mt-6 w-fit"
                  >
                    Request Service
                  </WhatsAppButton>
                </div>

                <img
                  src={s.img}
                  alt={s.title}
                  width={600}
                  height={512}
                  loading="lazy"
                  className="h-44 w-full shrink-0 rounded-xl border border-border object-cover sm:h-40 sm:w-48 lg:h-44 lg:w-52"
                />
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-navy px-6 py-8 text-navy-foreground sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Can&rsquo;t Find the Service You Need?
              </h2>
              <p className="mt-2 text-sm text-navy-foreground/80">
                Contact our team and we&rsquo;ll help you with the right AC/HVAC solution.
              </p>
            </div>
            <WhatsAppButton
              href={waLink("Hello Summer Tech, I need help finding the right AC/HVAC service.")}
              size="md"
              className="w-fit"
            >
              Talk to Us on WhatsApp
            </WhatsAppButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
