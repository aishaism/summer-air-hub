import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/icons";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { PageHero } from "@/components/site/PageHero";
import { site, waLink } from "@/lib/site";
import ctaTechnician from "@/assets/cta-technician.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Summer Tech — AC & HVAC Service Doha, Qatar" },
      {
        name: "description",
        content:
          "Get in touch with Summer Tech Maintenance Solutions in Doha, Qatar. Fast AC repair, installation, cleaning, and AMC contracts. Call or WhatsApp +974 30771718 / +974 70294141.",
      },
      {
        property: "og:title",
        content: "Contact Summer Tech — AC & HVAC Service Qatar",
      },
      {
        property: "og:description",
        content:
          "Let's Get Your AC Working Right. Rapid AC service, emergency breakdown response and AMC quotations across Qatar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "AC Repair & Troubleshooting",
  "AC Preventive Maintenance",
  "Annual Maintenance Contract (AMC)",
  "AC Deep Cleaning & Chemical Wash",
  "AC Installation / Relocation",
  "New AC Sales & Supply",
  "Kitchen Equipment & Refrigeration",
  "Refrigerant Gas Charging & Leak Detection",
  "Electrical & PCB Control Repair",
  "FCU & Duct Maintenance",
  "Commercial HVAC Solutions",
  "Other AC Inquiry",
];

const coverageAreas = [
  "Doha",
  "Lusail",
  "The Pearl-Qatar",
  "West Bay",
  "Al Rayyan",
  "Al Wakrah",
  "Al Sadd",
  "Al Khor",
  "Umm Salal",
  "Al Hilal",
  "Abu Hamour",
  "Madinat Khalifa",
];

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const getWhatsAppMessage = () => {
    const lines = [
      "Hello Summer Tech,",
      "I would like to request a service.",
      "",
      `Name: ${fullName.trim()}`,
      `Mobile: ${mobileNumber.trim()}`,
      `Service Required: ${selectedService.trim()}`,
      `Message: ${message.trim() || "Not provided"}`,
      "",
      "Please contact me regarding this enquiry.",
    ];
    return lines.join("\n");
  };

  const getCustomWaLink = () => {
    return waLink(getWhatsAppMessage());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobileNumber.trim() || !selectedService.trim()) {
      return;
    }
    const targetUrl = getCustomWaLink();
    setSubmitted(true);

    const win = window.open(targetUrl, "_blank", "noopener,noreferrer");
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = targetUrl;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Uniform Hero */}
        <PageHero
          title="Contact Us"
          description="Let's get your AC working right. Our certified technicians provide fast AC repair, installation, maintenance, and AMC support across Doha and all of Qatar."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
          actions={
            <>
              <WhatsAppButton
                href={waLink("Hello Summer Tech, I would like to get in touch regarding your AC & HVAC services.")}
                size="md"
              >
                Chat on WhatsApp
              </WhatsAppButton>
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-brand-soft"
              >
                <Phone className="h-4 w-4" />
                <span>Call {site.phone}</span>
              </a>
            </>
          }
          image={{
            src: ctaTechnician,
            alt: "Summer Tech technician ready to assist across Qatar",
            badgeText: "Fast Emergency Dispatch Across Qatar",
            badgeSubtext: "Customer Support & Dispatch",
            className: "h-56 sm:h-72 lg:h-[340px] w-full object-contain object-bottom pt-4",
            bgClassName: "bg-gradient-to-t from-brand-soft via-muted/30 to-background",
          }}
        />

        {/* Contact Information Quick Cards */}
        <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <div className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Call Us Directly
              </p>
              <div className="mt-2 flex flex-col gap-1">
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="text-base font-bold text-navy hover:text-primary transition-colors"
                >
                  {site.phone}
                </a>
                <a
                  href={`tel:${site.secondaryPhone.replace(/\s+/g, "")}`}
                  className="text-base font-bold text-navy hover:text-primary transition-colors"
                >
                  {site.secondaryPhone}
                </a>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Sat – Thu: 8:00 AM – 7:00 PM</p>
            </div>

            {/* WhatsApp */}
            <a
              href={waLink("Hello Summer Tech, I would like to inquire about AC services.")}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                WhatsApp Chat
              </p>
              <p className="mt-2 text-base font-bold text-navy hover:text-primary transition-colors">
                Chat on WhatsApp
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Fastest response for urgent requests
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${site.email}`}
              className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email Us
              </p>
              <p className="mt-1 text-base font-bold text-navy">{site.email}</p>
              <p className="mt-2 text-xs text-muted-foreground">AMC proposals &amp; inquiries</p>
            </a>

            {/* Location */}
            <div className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Service Hub
              </p>
              <p className="mt-1 text-base font-bold text-navy">{site.location}</p>
              <p className="mt-2 text-xs text-muted-foreground">Serving all areas across Qatar</p>
            </div>
          </div>
        </section>

        {/* Contact Form & WhatsApp CTA Layout */}
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Form Column */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Send Us a Service Request
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details below and our technical service supervisor will get in touch
                promptly.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-primary/20 bg-brand-soft p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">Request Received!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you, <strong className="text-navy">{fullName}</strong>. We have received
                    your request for <strong className="text-navy">{selectedService}</strong>. Our
                    team will contact you on <strong className="text-navy">{mobileNumber}</strong>{" "}
                    shortly.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <WhatsAppButton href={getCustomWaLink()} size="md">
                      Continue on WhatsApp
                    </WhatsAppButton>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName("");
                        setMobileNumber("");
                        setMessage("");
                      }}
                      className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-muted"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-navy">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Mohammed Al-Khalifa"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobileNumber" className="block text-sm font-semibold text-navy">
                      Mobile Number (Qatar / Int'l) <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="mobileNumber"
                      type="tel"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="+974 5XXXXXXX or +974 30771718"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="serviceRequired"
                      className="block text-sm font-semibold text-navy"
                    >
                      Service Required <span className="text-destructive">*</span>
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="serviceRequired"
                        required
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 rotate-90 text-muted-foreground" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy">
                      Message / Issue Description
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about the AC unit type, location, problem symptoms (not cooling, water leaking, unusual noise), etc."
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg sm:w-auto"
                    >
                      Submit Request
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Quick WhatsApp & Support Highlights */}
            <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
              {/* WhatsApp Direct Hero Card */}
              <div className="rounded-2xl bg-navy p-6 text-navy-foreground shadow-md sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-white">
                    <WhatsAppIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Prefer Instant WhatsApp?</h3>
                    <p className="text-xs text-navy-foreground/75">
                      Direct connection to technician
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-navy-foreground/85">
                  Have an urgent breakdown, water leak, or cooling failure? Chat directly with our
                  on-duty service team for immediate advice and dispatch.
                </p>

                <WhatsAppButton
                  href={waLink("Hello Summer Tech, I need immediate AC assistance.")}
                  size="md"
                  className="mt-6 w-full"
                >
                  Chat with Technician Now
                </WhatsAppButton>
              </div>

              {/* Service Commitments */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
                <h3 className="text-base font-bold text-navy">Why Contact Summer Tech?</h3>
                <ul className="mt-4 space-y-3.5">
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      <strong className="text-navy">Rapid On-Site Response:</strong> Same-day
                      dispatch for urgent residential and commercial AC breakdowns.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      <strong className="text-navy">Certified HVAC Specialists:</strong> Trained
                      technicians with precision diagnostic and recovery tools.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      <strong className="text-navy">Transparent Estimates:</strong> Honest pricing
                      with no surprise fees or unnecessary parts replacements.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location / Map & Coverage Section */}
        <section className="mx-auto w-full max-w-7xl px-4 py-8 pb-16 sm:px-6 sm:pb-20">
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm sm:rounded-3xl">
            <div className="p-6 sm:p-10">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                    Service Coverage Across Qatar
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Based in Doha, our mobile service units serve clients across Qatar.
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-primary md:mt-0">
                  <MapPin className="h-4 w-4" />
                  <span>Doha, State of Qatar</span>
                </div>
              </div>

              {/* Coverage Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-lg border border-border bg-brand-soft px-3 py-1.5 text-xs font-medium text-navy"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Responsive Map */}
            <div className="relative h-72 w-full border-t border-border sm:h-96">
              <iframe
                title="Summer Tech Qatar Service Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.40228308477!2d51.4429994!3d25.286106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1709575000000!5m2!1sen!2sqa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[25%] contrast-[105%]"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
