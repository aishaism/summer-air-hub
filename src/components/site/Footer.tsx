import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { LogoMark, Wordmark, WhatsAppIcon } from "./icons";
import { site } from "@/lib/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "AMC", to: "/amc" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;

const services = [
  "AC Installation",
  "AC Repair",
  "AC Cleaning",
  "AC Maintenance",
  "Commercial HVAC",
  "AMC",
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <LogoMark className="h-10 w-10 shrink-0" />
            <Wordmark light />
          </div>
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            Reliable AC &amp; HVAC maintenance solutions for residential and commercial properties.
          </p>
          <div className="mt-5 flex items-center gap-4 text-navy-foreground/80">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Linkedin className="h-5 w-5" />
            <MapPin className="h-5 w-5" />
            <Phone className="h-5 w-5" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-navy-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" />
              {site.phone}
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              {site.whatsapp}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" />
              {site.email}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/60">
        © 2026 Summer Tech Maintenance Solutions W.L.L. All Rights Reserved.
      </div>
    </footer>
  );
}
