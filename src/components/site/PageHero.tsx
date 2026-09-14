import { Link } from "@tanstack/react-router";
import { ChevronRight, LucideIcon } from "lucide-react";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroBadge {
  text: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
}

export interface PageHeroImage {
  src: string;
  alt: string;
  badgeText?: string;
  badgeSubtext?: string;
  width?: number;
  height?: number;
  className?: string;
  bgClassName?: string;
}

export interface PageHeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  breadcrumb?: BreadcrumbItem[];
  badge?: PageHeroBadge;
  actions?: React.ReactNode;
  extra?: React.ReactNode;
  image: PageHeroImage;
}

export function PageHero({
  title,
  description,
  breadcrumb,
  badge,
  actions,
  extra,
  image,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-gradient-to-b from-brand-soft via-brand-soft/70 to-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Title, Description, Breadcrumb, Actions */}
          <div className="lg:col-span-7">
            {badge && (
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                {badge.icon && <badge.icon className="h-3.5 w-3.5 shrink-0" />}
                <span>{badge.text}</span>
              </div>
            )}

            <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              {title}
            </h1>

            <div className="mt-3.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              {description}
            </div>

            {breadcrumb && breadcrumb.length > 0 && (
              <nav
                aria-label="Breadcrumb"
                className="mt-4 flex flex-wrap items-center gap-1.5 text-xs font-medium sm:text-sm text-muted-foreground"
              >
                {breadcrumb.map((item, idx) => {
                  const isLast = idx === breadcrumb.length - 1;
                  return (
                    <React.Fragment key={item.label}>
                      {idx > 0 && (
                        <ChevronRight
                          className="h-3.5 w-3.5 text-muted-foreground/70 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      {isLast || !item.href ? (
                        <span className="font-semibold text-navy">{item.label}</span>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-primary transition-colors hover:text-primary/80 hover:underline"
                        >
                          {item.label}
                        </Link>
                      )}
                    </React.Fragment>
                  );
                })}
              </nav>
            )}

            {actions && (
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                {actions}
              </div>
            )}

            {extra && <div className="mt-6">{extra}</div>}
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5">
            <div
              className={`relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md ${
                image.bgClassName || ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width || 800}
                height={image.height || 600}
                className={
                  image.className ||
                  "h-56 sm:h-72 lg:h-[340px] w-full object-cover object-center"
                }
              />
              {image.badgeText && (
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-navy/90 p-3 backdrop-blur-md text-white shadow-sm">
                  {image.badgeSubtext && (
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {image.badgeSubtext}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {image.badgeText}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
