import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
          "Professional AC & HVAC services in Qatar: installation, maintenance, cleaning, repair, compressor services, and commercial HVAC, plus commercial kitchen refrigeration services.",
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

const servicesList = [
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
  {
    title: "Kitchen Equipment & Refrigeration",
    img: commercialRefrigerationImg,
    link: "/kitchen-equipment-services",
    items: [
      "Commercial Refrigerator & Chiller Repair",
      "Walk-In Freezers & Cold Storage Rooms",
      "Display Chillers & Merchandisers",
      "Compressor, Thermostat & Gas Issues",
      "Commercial Ovens, Ranges & Fryers",
      "Preventive Maintenance & Safety Audits",
    ],
  },
];

function ServicesPage() {
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
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-background px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-brand-soft"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
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
            {servicesList.map((s, i) => (
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
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <WhatsAppButton
                      href={waLink(`Hello Summer Tech, I would like to request ${s.title}.`)}
                      size="sm"
                      className="w-fit"
                    >
                      Request Service
                    </WhatsAppButton>
                    {"link" in s && s.link && (
                      <Link
                        to={s.link}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-background px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-brand-soft"
                      >
                        Dedicated Page
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
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
