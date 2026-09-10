import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { waLink } from "@/lib/site";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "AC Sales", to: "/ac-sales" },
  { label: "AMC", to: "/amc" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src="/images/summer-tech-logo.png"
            alt="Summer Tech Maintenance Solutions W.L.L"
            className="h-10 w-auto object-contain sm:h-11"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative py-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:after:absolute data-[status=active]:after:inset-x-0 data-[status=active]:after:-bottom-1 data-[status=active]:after:h-0.5 data-[status=active]:after:rounded-full data-[status=active]:after:bg-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <WhatsAppButton
            href={waLink("Hello Summer Tech, I would like to request a service.")}
            size="sm"
            className="hidden sm:inline-flex rounded-full"
          >
            Request Service
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80 last:border-0 data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton
              href={waLink("Hello Summer Tech, I would like to request a service.")}
              size="sm"
              className="my-3 w-full sm:hidden rounded-full"
            >
              Request Service
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}
