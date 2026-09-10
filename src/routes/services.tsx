import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/icons";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { waLink } from "@/lib/site";

import servicesHero from "@/assets/services-hero.jpg";
import svcInstallation from "@/assets/svc-installation.jpg";
import svcMaintenance from "@/assets/svc-maintenance.jpg";
import svcCleaning from "@/assets/svc-cleaning.jpg";
import svcRepair from "@/assets/svc-repair.jpg";
import svcRefrigerant from "@/assets/svc-refrigerant.jpg";
import svcElectrical from "@/assets/svc-electrical.jpg";
import svcCompressor from "@/assets/svc-compressor.jpg";
import svcFcu from "@/assets/svc-fcu.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import svcKitchen from "@/assets/svc-kitchen.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Summer Tech AC & HVAC, Qatar" },
      {
        name: "description",
        content:
          "Complete AC, HVAC and commercial refrigeration services in Qatar: installation, maintenance, cleaning, repair, refrigerant, commercial HVAC, and kitchen equipment servicing.",
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

const services = [
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
    title: "Refrigerant Services",
    img: svcRefrigerant,
    items: [
      "Gas Charging",
      "Gas Leak Detection",
      "Leak Repair",
      "Refrigerant Pressure Checking",
      "Vacuuming & Recharging",
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
    img: svcKitchen,
    items: [
      "Commercial kitchen equipment & cooking ranges",
      "Walk-in chillers, freezers & cold storage rooms",
      "Under-counter refrigerators & display chillers",
      "Preventive maintenance & safety inspections",
      "Thermostat calibration & temperature optimization",
      "Emergency breakdown troubleshooting & repair",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="overflow-hidden bg-brand-soft">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:py-0">
            <div className="lg:py-14">
              <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                Our Services
              </h1>
              <nav
                aria-label="Breadcrumb"
                className="mt-4 flex items-center gap-2 text-sm font-medium"
              >
                <Link to="/" className="text-primary hover:underline">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-primary">Services</span>
              </nav>
              <p className="mt-5 max-w-md text-base text-muted-foreground">
                Complete AC &amp; HVAC services to keep your systems running efficiently all year
                round.
              </p>
            </div>

            <div className="relative lg:mr-[calc((100%-100vw)/2)]">
              <img
                src={servicesHero}
                alt="Technician servicing a ceiling cassette air conditioner"
                width={1000}
                height={760}
                className="h-56 w-full rounded-xl object-cover sm:h-72 lg:h-[340px] lg:rounded-none"
              />
            </div>
          </div>
        </section>

        {/* Service cards */}
        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-6"
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
