import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Sparkles,
  UtensilsCrossed,
  Store,
  Building2,
  Hotel,
  ThermometerSnowflake,
  Flame,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/icons";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { waLink } from "@/lib/site";

import commercialRefrigerationImg from "@/assets/commercial-refrigeration.jpg";
import commercialCookingImg from "@/assets/commercial-kitchen-cooking.jpg";

export const Route = createFileRoute("/kitchen-equipment-services")({
  head: () => ({
    meta: [
      {
        title:
          "Kitchen Equipment Services — Commercial Refrigeration & Kitchen Repair in Qatar",
      },
      {
        name: "description",
        content:
          "Professional repair, troubleshooting and preventive maintenance for commercial refrigeration and kitchen equipment in Qatar. Commercial refrigerators, chillers, freezers, cold rooms, ovens & cooking ranges.",
      },
      {
        property: "og:title",
        content:
          "Kitchen Equipment Services | Summer Tech Maintenance Solutions Qatar",
      },
      {
        property: "og:description",
        content:
          "Commercial Kitchen & Refrigeration Equipment Service in Qatar. Expert repair for chillers, freezers, display refrigerators, cold rooms, and commercial cooking equipment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KitchenEquipmentServicesPage,
});

/* Primary Focus: Commercial Refrigeration Services (11 items) */
const refrigerationServices = [
  {
    title: "Commercial Refrigerator Repair",
    desc: "Rapid diagnostics and mechanical repair for upright, under-counter, and pass-through commercial units.",
    tag: "Core Focus",
  },
  {
    title: "Freezer Repair",
    desc: "Deep freezer, chest freezer, and sub-zero blast freezer maintenance and defrost troubleshooting.",
    tag: "Core Focus",
  },
  {
    title: "Chiller Repair",
    desc: "Precision chiller maintenance, sensor recalibration, and water-cooled/air-cooled chiller servicing.",
    tag: "Core Focus",
  },
  {
    title: "Display Refrigerator Repair",
    desc: "Front-of-house open merchandisers, glass-door chillers, deli cases, and beverage coolers.",
    tag: "Core Focus",
  },
  {
    title: "Cold Room / Refrigeration Equipment",
    desc: "Walk-in cold storage rooms, insulated doors, evaporator coils, and condensing unit overhauls.",
    tag: "Heavy-Duty",
  },
  {
    title: "Temperature Problems",
    desc: "Correcting inconsistent temperatures, airflow restrictions, uneven cooling, and food safety compliance.",
    tag: "Diagnostics",
  },
  {
    title: "Compressor Issues",
    desc: "Semi-hermetic and scroll compressor testing, motor burnout resolution, start relay, and replacement.",
    tag: "Critical Care",
  },
  {
    title: "Thermostat / Controller Problems",
    desc: "Digital micro-controller programming (Dixell, Carel, Danfoss), probe replacement, and calibration.",
    tag: "Electronics",
  },
  {
    title: "Refrigerant / Gas Issues",
    desc: "Electronic leak detection, pressure nitrogen testing, system vacuuming, and certified refrigerant charging.",
    tag: "Gas Service",
  },
  {
    title: "Electrical & Control Faults",
    desc: "Troubleshooting control boards, contactors, overload protectors, capacitors, and power anomalies.",
    tag: "Diagnostics",
  },
  {
    title: "Preventive Maintenance",
    desc: "Scheduled condenser coil cleaning, gasket inspection, fan lubrication, and thermodynamic audits.",
    tag: "AMC Program",
  },
];

/* Secondary Category: Other Kitchen Equipment (8 items) */
const otherKitchenEquipment = [
  {
    title: "Commercial Ovens",
    desc: "Convection, combi, deck, and rotary oven heating element, ignition, and fan servicing.",
  },
  {
    title: "Cooking Ranges",
    desc: "Heavy-duty gas and electric hotplates, burners, gas safety valves, and thermocouple replacement.",
  },
  {
    title: "Fryers",
    desc: "Commercial deep fat fryers, high-limit thermostat calibration, drain valve, and pilot assembly repairs.",
  },
  {
    title: "Grills",
    desc: "Flat-top griddles, charbroilers, salamanders, and panini grills temperature regulation.",
  },
  {
    title: "Mixers",
    desc: "Planetary and spiral dough mixers, motor rewiring, gearboxes, safety guards, and drive belts.",
  },
  {
    title: "Food Processors",
    desc: "Commercial vegetable cutters, immersion blenders, and bowl cutters safety switches and motors.",
  },
  {
    title: "Dishwashers",
    desc: "Commercial pass-through and undercounter warewashers, booster heaters, wash pumps, and chemical dosing.",
  },
  {
    title: "Other Commercial Kitchen Equipment",
    desc: "Bain maries, food warmers, exhaust hoods, proofers, slicers, and custom commercial kitchen lines.",
  },
];

const industriesServed = [
  { icon: UtensilsCrossed, name: "Restaurants & Cafeterias" },
  { icon: Hotel, name: "Hotels & Resorts" },
  { icon: Store, name: "Supermarkets & Hypermarkets" },
  { icon: Building2, name: "Catering & Cloud Kitchens" },
];

function KitchenEquipmentServicesPage() {
  const refrigeratorWaLink = waLink(
    "Hello Summer Tech, I would like to request Commercial Refrigerator Service in Qatar."
  );
  const generalKitchenWaLink = waLink(
    "Hello Summer Tech, I would like to inquire about Commercial Kitchen Equipment Service in Qatar."
  );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-brand-soft/60 to-background border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Heading & Content */}
              <div className="lg:col-span-7">
                {/* Breadcrumb */}
                <nav
                  aria-label="Breadcrumb"
                  className="mb-4 flex items-center gap-1.5 text-xs font-medium sm:text-sm"
                >
                  <Link to="/" className="text-primary hover:underline">
                    Home
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  <Link to="/services" className="text-primary hover:underline">
                    Services
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  <span className="text-navy font-semibold">Kitchen Equipment</span>
                </nav>

                {/* Core Operation Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <ThermometerSnowflake className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Core Business Operation • Commercial Refrigeration</span>
                </div>

                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                  Kitchen Equipment Services
                </h1>

                <p className="mt-2 text-base font-semibold text-primary sm:text-lg">
                  Commercial Kitchen &amp; Refrigeration Equipment Service in Qatar
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Professional repair, troubleshooting and preventive maintenance for commercial
                  refrigeration and kitchen equipment.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                  <WhatsAppButton href={refrigeratorWaLink} size="md" className="rounded-xl shadow-sm">
                    Request Refrigerator Service
                  </WhatsAppButton>
                  <a
                    href="#commercial-refrigeration"
                    className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-card px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:bg-brand-soft"
                  >
                    View Refrigeration Services
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </a>
                </div>

                {/* Quick Trust Badges */}
                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border/80 pt-6 sm:grid-cols-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-navy">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Certified Technicians</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-navy">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span>Emergency Response</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs font-medium text-navy">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Genuine Spare Parts</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual */}
              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-lg">
                  <img
                    src={commercialRefrigerationImg}
                    alt="Technician servicing commercial refrigeration unit and walk-in chiller in restaurant kitchen"
                    width={800}
                    height={800}
                    className="h-72 w-full object-cover sm:h-96 lg:h-[420px]"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-navy/90 p-3.5 backdrop-blur-md text-white sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                          Main Business Focus
                        </p>
                        <p className="text-sm font-bold text-white sm:text-base">
                          Commercial Refrigeration &amp; Chillers
                        </p>
                      </div>
                      <span className="shrink-0 rounded-lg bg-primary/20 px-2.5 py-1 text-[11px] font-bold text-primary border border-primary/40">
                        Qatar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: MAIN FOCUS — COMMERCIAL REFRIGERATION (PRIMARY SERVICE CATEGORY) */}
        <section
          id="commercial-refrigeration"
          className="relative scroll-mt-20 py-14 sm:py-20 bg-card border-b border-border/60"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Header with High-Dominance Styling */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Main Focus — Commercial Refrigeration
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Commercial Refrigeration
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Professional repair, troubleshooting and preventive maintenance for commercial refrigeration equipment across Qatar.
              </p>
            </div>

            {/* Visual Highlights & Fast Action Bar */}
            <div className="mt-10 overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-brand-soft via-card to-brand-soft/40 p-6 shadow-sm sm:p-8">
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
                      <ThermometerSnowflake className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Primary Service Category
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-extrabold text-navy sm:text-2xl">
                    Commercial Refrigerator, Chiller &amp; Freezer Breakdown Solutions
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Refrigeration failure in commercial kitchens can cause severe food spoilage and operational delays. Our specialized refrigeration technicians provide responsive repair and maintenance across Doha and all Qatar locations.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                  <WhatsAppButton
                    href={refrigeratorWaLink}
                    size="md"
                    className="w-full sm:w-auto shadow-md rounded-xl"
                  >
                    Request Refrigerator Service
                  </WhatsAppButton>
                </div>
              </div>
            </div>

            {/* 11 Refrigeration Services Compact Responsive Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5">
              {refrigerationServices.map((service, index) => (
                <article
                  key={service.title}
                  className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-background p-5 shadow-xs transition-all duration-200 hover:border-primary hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-soft text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-md border border-primary/20 bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-primary">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-navy group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-border/60 pt-3">
                    <a
                      href={waLink(
                        `Hello Summer Tech, I need service for: ${service.title} (Commercial Refrigeration).`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:underline"
                    >
                      <span>Request Service</span>
                      <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Prominent Section CTA */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-navy p-6 text-white sm:flex-row sm:px-8 sm:py-6">
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold sm:text-xl">
                  Need Fast Commercial Refrigeration Service?
                </h4>
                <p className="mt-1 text-xs text-navy-foreground/80 sm:text-sm">
                  Our certified refrigeration technicians are available for quick dispatch across Qatar.
                </p>
              </div>
              <WhatsAppButton
                href={refrigeratorWaLink}
                size="md"
                className="w-full shrink-0 sm:w-auto rounded-xl"
              >
                Request Refrigerator Service
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* SECTION 2: OTHER KITCHEN EQUIPMENT (SECONDARY CATEGORY) */}
        <section
          id="other-kitchen-equipment"
          className="relative py-14 sm:py-20 bg-brand-soft/50 border-b border-border/60"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Info Column */}
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Flame className="h-3.5 w-3.5 text-orange-500" />
                  Secondary Equipment Support
                </span>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  Other Kitchen Equipment
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  While commercial refrigeration is our core focus, we also provide professional troubleshooting, part replacement, and maintenance for hot-side and food preparation equipment.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-xs">
                  <img
                    src={commercialCookingImg}
                    alt="Commercial kitchen cooking line with ovens, fryers, ranges, and grills"
                    width={700}
                    height={700}
                    loading="lazy"
                    className="h-56 w-full object-cover sm:h-64"
                  />
                  <div className="p-4">
                    <p className="text-xs font-semibold text-navy">
                      Cooking Line &amp; Food Prep Servicing
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Heating element repairs, thermostats, safety valves, and electrical control diagnostics.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <WhatsAppButton
                    href={generalKitchenWaLink}
                    size="sm"
                    className="w-full sm:w-auto rounded-xl"
                  >
                    Inquire for Kitchen Equipment
                  </WhatsAppButton>
                </div>
              </div>

              {/* Right Equipment Cards Column (Compact Multi-Column) */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {otherKitchenEquipment.map((eq) => (
                    <div
                      key={eq.title}
                      className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs transition-colors hover:border-primary/40 hover:bg-card"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="h-2 w-2 rounded-full bg-primary/60" />
                        <h3 className="text-sm font-bold text-navy">{eq.title}</h3>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {eq.desc}
                      </p>
                      <a
                        href={waLink(`Hello Summer Tech, I need service for: ${eq.title}.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:underline"
                      >
                        Request Service
                        <WhatsAppIcon className="h-3 w-3 text-[#25D366]" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMMERCIAL SECTORS WE SUPPORT */}
        <section className="py-12 sm:py-16 bg-card border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                Commercial Facilities We Support In Qatar
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Maintenance and breakdown response for food service, hospitality, and retail businesses.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {industriesServed.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center rounded-xl border border-border/80 bg-brand-soft/40 p-4 text-center transition-colors hover:border-primary/40 hover:bg-brand-soft"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-card text-primary shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-2.5 text-xs font-bold text-navy">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-navy px-6 py-8 text-navy-foreground sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-0.5 text-xs font-semibold text-primary border border-primary/40">
                Commercial Refrigeration &amp; Kitchen Care
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Need Commercial Refrigerator or Kitchen Service?
              </h2>
              <p className="mt-2 text-sm text-navy-foreground/80 max-w-xl">
                Contact our technician team directly on WhatsApp for prompt diagnosis, part replacement, and preventive servicing in Qatar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton href={refrigeratorWaLink} size="md" className="w-fit">
                Request Refrigerator Service
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
