import { Link } from "@tanstack/react-router";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { site, waLink } from "@/lib/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "AC Sales", to: "/ac-sales" },
  { label: "AMC", to: "/amc" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;

const serviceLinks = [
  { label: "AC Installation", to: "/services" },
  { label: "AC Repair", to: "/services" },
  { label: "AC Cleaning", to: "/services" },
  { label: "AC Maintenance", to: "/services" },
  { label: "Commercial HVAC", to: "/services" },
  { label: "Kitchen Equipment & Refrigeration", to: "/kitchen-equipment-services" },
] as const;

const socialLinks = [
  {
    name: "Instagram",
    href: site.social.instagram,
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: site.social.facebook,
    icon: Facebook,
  },
  {
    name: "WhatsApp",
    href: waLink("Hello Summer Tech, I would like to inquire about your AC services."),
    icon: WhatsAppIcon,
  },
];

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-navy text-navy-foreground">
      {/* Compact Main Directory (~200px desktop height) */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/images/summer-tech-logo-white.png"
                alt="Summer Tech Maintenance Solutions W.L.L"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="mt-3 max-w-xs text-xs leading-relaxed text-navy-foreground/75">
              Certified residential and commercial AC &amp; HVAC maintenance solutions across Qatar.
            </p>

            <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-navy-foreground/60">
              <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>Licensed Contractor • Qatar</span>
            </div>
          </div>

          {/* Columns 2 & 3: Quick Links & Services in a clean 2-column grid on mobile (lg:col-span-5) */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-5">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="mt-3 space-y-2 text-xs">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-navy-foreground/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Our Services
              </h4>
              <ul className="mt-3 space-y-2 text-xs">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.to}
                      className="text-navy-foreground/75 transition-colors hover:text-white"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Contact</h4>
            <div className="mt-3 grid grid-cols-1 gap-2.5 text-xs sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-start gap-2 text-navy-foreground/80">
                <Phone className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`tel:${site.phone.replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={`tel:${site.secondaryPhone.replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.secondaryPhone}
                  </a>
                </div>
              </div>

              <a
                href={waLink("Hello Summer Tech, I would like to inquire about your AC services.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-navy-foreground/80 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-navy-foreground/80 transition-colors hover:text-white break-all"
              >
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{site.email}</span>
              </a>

              <div className="inline-flex items-center gap-2 text-navy-foreground/70">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{site.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Thin Divider, Small Social Icons, Copyright in one compact row */}
      <div className="border-t border-white/10 bg-black/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3.5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-xs text-navy-foreground/60 sm:text-left">
            © 2025 Summer Tech Maintenance Solutions W.L.L. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Small Social Media Icons */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit Summer Tech on ${item.name}`}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-navy-foreground/75 transition-all duration-150 hover:border-primary/40 hover:bg-primary/20 hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>

            <span className="hidden text-white/20 sm:inline">•</span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="inline-flex items-center gap-1 text-[11px] text-navy-foreground/60 transition-colors hover:text-white"
            >
              <span>Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
