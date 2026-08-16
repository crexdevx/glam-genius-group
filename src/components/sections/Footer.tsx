import { ArrowRight, Clock, Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const phoneHref = `tel:+91${siteConfig.phone}`;

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="/" className="inline-block font-display text-2xl font-bold tracking-[0.22em] uppercase text-foreground">
              {siteConfig.shortName}
              <span className="ml-2 text-[0.65rem] tracking-[0.3em] text-muted-foreground">GENTS SALON</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. Premium grooming, sharp cuts and confident style for the modern gentleman in Nalbari, Assam.
            </p>

            <a
              href="#contact"
              className="btn-base btn-primary mt-8"
              aria-label="Book an appointment at A4 Gents Salon"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="mt-8 flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook (coming soon)"
                role="img"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </span>
              <span
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram (coming soon)"
                role="img"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </span>
              <span
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="YouTube (coming soon)"
                role="img"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-foreground">Explore</h3>
            <ul className="mt-6 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-foreground">Contact</h3>
            <address className="mt-6 not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {siteConfig.address.street}, {siteConfig.address.ward}, {siteConfig.address.locality},{" "}
                    {siteConfig.address.region} {siteConfig.address.postalCode}
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={phoneHref}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">{siteConfig.hours}</p>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
          <p>
            Designed with care for the modern gentleman.
          </p>
        </div>
      </div>
    </footer>
  );
}
