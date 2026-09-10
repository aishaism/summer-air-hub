import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useId } from "react";
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  Send,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/icons";
import { site, waLink } from "@/lib/site";

import svcInstallation from "@/assets/svc-installation.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import svcFcu from "@/assets/svc-fcu.jpg";
import amcCondenser from "@/assets/amc-condenser.jpg";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/ac-sales")({
  head: () => ({
    meta: [
      { title: "New AC Sales in Qatar — Genuine Brands | Summer Tech" },
      {
        name: "description",
        content:
          "Genuine ACs from leading brands at competitive prices in Qatar. Gree, Midea, LG, Samsung, Daikin, Carrier, O General, York & more. Fast delivery & professional installation.",
      },
      { property: "og:title", content: "New AC Sales in Qatar — Summer Tech" },
      {
        property: "og:description",
        content:
          "Genuine ACs from leading brands at competitive prices in Qatar. Split, Window, Cassette, Ducted, Package & VRF systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ACSalesPage,
});

const brands = [
  { name: "Gree", tier: "Top Seller" },
  { name: "Midea", tier: "Popular" },
  { name: "LG", tier: "Smart Inverter" },
  { name: "Samsung", tier: "WindFree™" },
  { name: "Daikin", tier: "Japanese Tech" },
  { name: "Carrier", tier: "Heavy Duty" },
  { name: "O General", tier: "Tropical T3" },
  { name: "York", tier: "Commercial Grade" },
  { name: "Mitsubishi Electric", tier: "Ultra Quiet" },
  { name: "Hisense", tier: "Best Value" },
  { name: "TCL", tier: "Energy Efficient" },
  { name: "Super General", tier: "Reliable Cooling" },
];

const acModels = [
  {
    title: "Split AC",
    desc: "Wall-mounted high efficiency units for bedrooms, living rooms, and private offices. Whisper-quiet and energy-saving.",
    capacities: "1.5 Ton • 2.0 Ton • 2.5 Ton • 3.0 Ton",
    img: svcInstallation,
    features: ["Inverter & Non-Inverter", "Rapid Turbo Cooling", "Multi-stage Air Filters"],
  },
  {
    title: "Window AC",
    desc: "Compact, self-contained cooling units built for apartments, staff accommodations, and immediate plug-and-play installation.",
    capacities: "1.5 Ton • 2.0 Ton",
    img: amcCondenser,
    features: ["Robust Rotary Compressor", "Easy Slide-out Chassis", "High Ambient T3 Rated"],
  },
  {
    title: "Cassette AC",
    desc: "360-degree ceiling recessed units offering even airflow distribution across open offices, restaurants, and retail spaces.",
    capacities: "2.0 Ton • 3.0 Ton • 4.0 Ton • 5.0 Ton",
    img: svcCommercial,
    features: ["Four-way & 360° Air Throw", "Built-in Drain Pump", "Sleek Flush Ceiling Profile"],
  },
  {
    title: "Ducted AC",
    desc: "Concealed ducted split systems providing seamless, hidden cooling for luxury villas, executive suites, and modern residences.",
    capacities: "2.5 Ton to 8.5 Ton",
    img: svcFcu,
    features: ["Architectural Grille Aesthetics", "Zone Control Compatible", "Quiet Air Ducts"],
  },
  {
    title: "Floor Standing AC",
    desc: "High-capacity vertical tower units designed for large open halls, mosques, event venues, and spacious showrooms.",
    capacities: "3.0 Ton • 4.0 Ton • 5.0 Ton",
    img: servicesHero,
    features: ["Long-distance Air Throw", "Digital Touch Display", "Fast Temperature Pull-down"],
  },
  {
    title: "Package AC",
    desc: "All-in-one rooftop units engineered for commercial buildings, supermarkets, warehouses, and industrial premises.",
    capacities: "5.0 Ton to 30.0+ Ton",
    img: amcCondenser,
    features: ["Single Outdoor Enclosure", "Weatherproof Anti-corrosion", "Economizer Option"],
  },
  {
    title: "VRF / VRV Systems",
    desc: "Variable Refrigerant Flow systems for multi-zone luxury villas, commercial towers, and hotels with individual room control.",
    capacities: "Modular scalability up to 64 indoor units",
    img: svcCommercial,
    features: ["Independent Room Control", "Maximum Energy Efficiency", "Centralized BMS Ready"],
  },
];

const reasonsToBuy = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Units",
    desc: "Direct authentic units from authorized Qatar distributors with manufacturer warranty.",
  },
  {
    icon: Zap,
    title: "Competitive Qatar Pricing",
    desc: "Direct-to-client pricing with transparent itemized proposals for supply and installation.",
  },
  {
    icon: Sparkles,
    title: "Certified Installation",
    desc: "Optional turnkey installation by certified Summer Tech HVAC technicians.",
  },
];

function ACSalesPage() {
  const quoteFormId = useId();
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [modelType, setModelType] = useState("Split AC");
  const [capacity, setCapacity] = useState("2.0 Ton");
  const [location, setLocation] = useState("Doha");
  const [quantity, setQuantity] = useState("1");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scrollToQuote = () => {
    const el = document.getElementById("quote-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getCustomSalesWaLink = () => {
    const message = `Hello Summer Tech,
I would like to get a quote for New AC Sales:
- Name: ${fullName || "Customer"}
- Mobile: ${mobileNumber || "Not provided"}
- AC Model: ${modelType}
- Required Capacity: ${capacity}
- Location: ${location}
- Quantity: ${quantity}
${notes ? `- Additional Notes: ${notes}` : ""}`;
    return waLink(message);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobileNumber.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-soft border-b border-border/80">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm font-medium">
                  <Link to="/" className="text-primary transition-colors hover:underline">
                    Home
                  </Link>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-primary">AC Sales</span>
                </nav>

                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Authorized AC Supply &amp; Installation in Qatar</span>
                </div>

                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">
                  NEW AC SALES
                </h1>

                <p className="mt-4 max-w-2xl text-lg font-medium text-navy/90 sm:text-xl">
                  Genuine ACs from leading brands at competitive prices in Qatar.
                </p>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Whether you are upgrading your home, fitting out a new villa, or supplying a commercial
                  project, Summer Tech provides complete AC equipment supply, genuine manufacturer warranty,
                  and professional commissioning across Qatar.
                </p>

                {/* Primary Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={scrollToQuote}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href={waLink("Hello Summer Tech, I would like to inquire about purchasing a new AC in Qatar.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition-all hover:bg-muted"
                  >
                    <span>WhatsApp Us</span>
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Consultations</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Official Distributor Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Fast Delivery Across Qatar</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-md">
                  <img
                    src={svcInstallation}
                    alt="New modern Split Air Conditioner unit"
                    className="h-64 w-full rounded-xl object-cover sm:h-80"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-xl bg-navy/90 p-4 text-white backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Summer Tech Sales</p>
                    <p className="text-sm font-bold">Residential &amp; Commercial Air Conditioners</p>
                    <p className="mt-1 text-xs text-white/80">Delivered &amp; Installed by Certified Technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands We Supply & Service */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Brands We Supply &amp; Service
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              We supply, deliver, and commission genuine air conditioners from the world’s top HVAC manufacturers.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group flex flex-col items-center justify-center rounded-xl border border-border/80 bg-card p-4 text-center shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <span className="text-base font-bold text-navy transition-colors group-hover:text-primary">
                  {b.name}
                </span>
                <span className="mt-1 rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {b.tier}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-border/60 bg-brand-soft/60 px-4 py-3 text-center text-xs text-muted-foreground">
            <strong className="text-navy">Brands List:</strong> Gree • Midea • LG • Samsung • Daikin • Carrier • O General • York • Mitsubishi Electric • Hisense • TCL • Super General
          </div>
        </section>

        {/* AC Models Available */}
        <section className="bg-brand-soft/50 py-12 sm:py-16 border-y border-border/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  AC Models Available
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Comprehensive range of cooling systems tailored to residential villas, apartments, commercial towers, and industrial facilities.
                </p>
              </div>
              <button
                type="button"
                onClick={scrollToQuote}
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <span>Request Price For Any Model</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {acModels.map((model) => (
                <div
                  key={model.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-muted">
                    <img
                      src={model.img}
                      alt={model.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                      Genuine Brand
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-navy">{model.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-primary">{model.capacities}</p>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      {model.desc}
                    </p>

                    <div className="mt-4 border-t border-border/70 pt-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Key Features
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {model.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-xs text-navy/90">
                            <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-3">
                      <a
                        href={waLink(`Hello Summer Tech, I would like to get a quote for a new ${model.title}.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-soft py-2.5 text-xs font-semibold text-navy transition-colors hover:bg-primary hover:text-white"
                      >
                        <span>Inquire About {model.title}</span>
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Buy from Summer Tech */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {reasonsToBuy.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-xs"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Need a New AC? Call-To-Action & Quote Section */}
        <section id="quote-section" className="scroll-mt-20 border-t border-border/80 bg-navy py-12 text-navy-foreground sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              {/* Left Column: Copy & Direct Contact */}
              <div className="lg:col-span-5">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-white">
                  Fast Response
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Need a New AC?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-foreground/90">
                  Tell us your required capacity, location and quantity. We’ll recommend the right AC and provide you with the best available price.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-navy-foreground/70">Call Sales Advisors Directly</p>
                      <div className="mt-1 flex flex-wrap gap-x-3 text-sm font-bold text-white">
                        <a href="tel:+97430771718" className="hover:text-primary transition-colors">{site.phone}</a>
                        <span>•</span>
                        <a href="tel:+97470294141" className="hover:text-primary transition-colors">{site.secondaryPhone}</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                      <WhatsAppIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-navy-foreground/70">Instant WhatsApp Chat</p>
                      <a
                        href={waLink("Hello Summer Tech, I would like to get a quote for a new AC.")}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-sm font-bold text-white hover:text-[#25D366] transition-colors"
                      >
                        Chat with Sales on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waLink("Hello Summer Tech, I need a new AC quote with pricing and capacity recommendations.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    <span>WhatsApp Us</span>
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Quote Request Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8 lg:col-span-7">
                <h3 className="text-xl font-bold text-white">Request an AC Price Quote</h3>
                <p className="mt-1 text-xs text-navy-foreground/75">
                  Receive personalized recommendations and best price within hours.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="mt-3 text-base font-bold text-white">Quote Request Prepared!</h4>
                    <p className="mt-2 text-xs text-navy-foreground/80">
                      Thank you, <strong className="text-white">{fullName}</strong>. To send your specifications directly to our sales desk with one click, continue to WhatsApp:
                    </p>
                    <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
                      <a
                        href={getCustomSalesWaLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <span>Send to WhatsApp</span>
                        <WhatsAppIcon className="h-4 w-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFullName("");
                          setMobileNumber("");
                          setNotes("");
                        }}
                        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                      >
                        Reset Form
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor={`${quoteFormId}-name`} className="block text-xs font-medium text-navy-foreground/90">
                          Full Name *
                        </label>
                        <input
                          id={`${quoteFormId}-name`}
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your Name"
                          className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor={`${quoteFormId}-phone`} className="block text-xs font-medium text-navy-foreground/90">
                          Mobile Number (+974...) *
                        </label>
                        <input
                          id={`${quoteFormId}-phone`}
                          type="tel"
                          required
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="+974 30771718"
                          className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <label htmlFor={`${quoteFormId}-model`} className="block text-xs font-medium text-navy-foreground/90">
                          AC Model Required
                        </label>
                        <select
                          id={`${quoteFormId}-model`}
                          value={modelType}
                          onChange={(e) => setModelType(e.target.value)}
                          className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy px-3.5 py-2.5 text-sm text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                        >
                          <option value="Split AC">Split AC</option>
                          <option value="Window AC">Window AC</option>
                          <option value="Cassette AC">Cassette AC</option>
                          <option value="Ducted AC">Ducted AC</option>
                          <option value="Floor Standing AC">Floor Standing AC</option>
                          <option value="Package AC">Package AC</option>
                          <option value="VRF / VRV System">VRF / VRV Systems</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor={`${quoteFormId}-capacity`} className="block text-xs font-medium text-navy-foreground/90">
                          Capacity (Tonnage)
                        </label>
                        <select
                          id={`${quoteFormId}-capacity`}
                          value={capacity}
                          onChange={(e) => setCapacity(e.target.value)}
                          className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy px-3.5 py-2.5 text-sm text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                        >
                          <option value="1.5 Ton">1.5 Ton</option>
                          <option value="2.0 Ton">2.0 Ton</option>
                          <option value="2.5 Ton">2.5 Ton</option>
                          <option value="3.0 Ton">3.0 Ton</option>
                          <option value="4.0 Ton">4.0 Ton</option>
                          <option value="5.0+ Ton">5.0+ Ton</option>
                          <option value="Need Site Assessment">Need Site Assessment</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor={`${quoteFormId}-qty`} className="block text-xs font-medium text-navy-foreground/90">
                          Quantity
                        </label>
                        <select
                          id={`${quoteFormId}-qty`}
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy px-3.5 py-2.5 text-sm text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                        >
                          <option value="1 Unit">1 Unit</option>
                          <option value="2-3 Units">2 – 3 Units</option>
                          <option value="4-7 Units">4 – 7 Units</option>
                          <option value="8+ Units (Bulk/Project)">8+ Units (Bulk/Project)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor={`${quoteFormId}-location`} className="block text-xs font-medium text-navy-foreground/90">
                        Delivery / Installation Location in Qatar
                      </label>
                      <input
                        id={`${quoteFormId}-location`}
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Doha, Lusail, Al Wakrah, The Pearl"
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor={`${quoteFormId}-notes`} className="block text-xs font-medium text-navy-foreground/90">
                        Additional Requirements (Brand preference, installation required, etc.)
                      </label>
                      <textarea
                        id={`${quoteFormId}-notes`}
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Gree or Midea inverter preferred, with installation"
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                      >
                        <span>Get a Quote</span>
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
