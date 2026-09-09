import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X, Phone, Mail, Sparkles, Building2 } from "lucide-react";
import logoImg from "@/assets/bits-go-logo.png";
import { Button } from "@/components/ui/button";
import { serviceGroups, services } from "@/lib/site-data";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" aria-label="BITS.go home" className="flex shrink-0 items-center gap-3">
      <img
        src={logoImg}
        alt="BITS.go — Bamietech IT Solutions"
        width={compact ? 120 : 144}
        height={compact ? 44 : 54}
        className={compact ? "h-10 w-auto object-contain" : "h-12 w-auto object-contain"}
      />
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <BrandMark compact />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <Link
            to="/"
            activeProps={{ className: "text-accent" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="text-sm font-semibold transition-colors hover:text-accent"
          >
            Home
          </Link>

          {/* Services with Premium Mega-Menu */}
          <div
            ref={megaMenuRef}
            className="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                to="/services"
                activeProps={{ className: "text-accent" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="text-sm font-semibold transition-colors hover:text-accent"
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setServicesMenuOpen((prev) => !prev)}
                aria-expanded={servicesMenuOpen}
                aria-label="Toggle services menu"
                className="text-muted-foreground hover:text-accent"
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesMenuOpen ? "rotate-180 text-accent" : ""}`}
                />
              </button>
            </div>

            {servicesMenuOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[720px]">
                <div className="rounded-none border border-border bg-card p-6 shadow-2xl backdrop-blur-xl">
                  <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                    <p className="eyebrow text-accent">Official Capabilities</p>
                    <Link
                      to="/services"
                      onClick={() => setServicesMenuOpen(false)}
                      className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1"
                    >
                      View All 13 Services <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {serviceGroups.map((group) => {
                      const groupServices = services.filter((s) => group.serviceSlugs.includes(s.slug));
                      return (
                        <div key={group.label} className="space-y-2">
                          <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
                            {group.label} // {group.title}
                          </p>
                          <ul className="space-y-1 text-xs">
                            {groupServices.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  to="/services/$service"
                                  params={{ service: service.slug }}
                                  onClick={() => setServicesMenuOpen(false)}
                                  className="block py-1 text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all"
                                >
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/solutions"
            activeProps={{ className: "text-accent" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="text-sm font-semibold transition-colors hover:text-accent"
          >
            Solutions
          </Link>
          <Link
            to="/work"
            activeProps={{ className: "text-accent" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="text-sm font-semibold transition-colors hover:text-accent"
          >
            Our Work
          </Link>
          <Link
            to="/industries"
            activeProps={{ className: "text-accent" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="text-sm font-semibold transition-colors hover:text-accent"
          >
            Industries
          </Link>
          <Link
            to="/insights"
            activeProps={{ className: "text-accent" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="text-sm font-semibold transition-colors hover:text-accent"
          >
            Insights
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "text-accent" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="text-sm font-semibold transition-colors hover:text-accent"
          >
            About
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-accent" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="text-sm font-semibold transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/quote" className="hidden sm:inline-flex">
            <Button variant="dark" className="font-semibold">
              Start a Project <ArrowUpRight size={16} />
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-5 py-5 lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            <Link to="/" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Home
            </Link>
            <Link to="/services" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Services (All 13)
            </Link>
            <Link to="/solutions" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Solutions
            </Link>
            <Link to="/work" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Our Work
            </Link>
            <Link to="/industries" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Industries
            </Link>
            <Link to="/insights" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Insights / Blog
            </Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              About BITS.go
            </Link>
            <Link to="/about/founder" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Meet the Founder
            </Link>
            <Link to="/careers" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Careers
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-semibold">
              Contact
            </Link>
            <Link to="/quote" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex w-fit">
              <Button variant="accent">
                Start a Project <ArrowUpRight size={16} />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <BrandMark />
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
            Bamietech IT Solutions. Helping businesses, organizations, and entrepreneurs build, innovate, transform, and scale operations through technology.
          </p>
          <div className="mt-6 space-y-2 text-xs text-muted-foreground font-mono">
            <p className="flex items-center gap-2">
              <Building2 size={13} className="text-accent" /> Ondo Office: Medinah Community Junc., Ilere–Akure Rd
            </p>
            <p className="flex items-center gap-2">
              <Building2 size={13} className="text-accent" /> Jigawa Office: Tsada Primary School, Dutse
            </p>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <h2 className="eyebrow mb-5">Services</h2>
            <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <Link to="/services/$service" params={{ service: "web-development" }} className="hover:text-accent">Web Development</Link>
              <Link to="/services/$service" params={{ service: "software-development" }} className="hover:text-accent">Custom Software</Link>
              <Link to="/services/$service" params={{ service: "mobile-app-development" }} className="hover:text-accent">Mobile Apps</Link>
              <Link to="/services/$service" params={{ service: "ai-solutions" }} className="hover:text-accent">AI Solutions</Link>
              <Link to="/services/$service" params={{ service: "business-automation" }} className="hover:text-accent">Business Automation</Link>
              <Link to="/services/$service" params={{ service: "branding" }} className="hover:text-accent">Branding & Identity</Link>
              <Link to="/services/$service" params={{ service: "seo-online-visibility" }} className="hover:text-accent">SEO & Visibility</Link>
              <Link to="/services" className="font-bold text-accent mt-1">Explore all 13 →</Link>
            </div>
          </div>

          <div>
            <h2 className="eyebrow mb-5">Company</h2>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-accent">About BITS.go</Link>
              <Link to="/about/founder" className="hover:text-accent">Meet the Founder</Link>
              <Link to="/solutions" className="hover:text-accent">Solutions</Link>
              <Link to="/work" className="hover:text-accent">Our Work</Link>
              <Link to="/industries" className="hover:text-accent">Industries</Link>
              <Link to="/insights" className="hover:text-accent">Insights</Link>
              <Link to="/careers" className="hover:text-accent">Careers</Link>
            </div>
          </div>

          <div>
            <h2 className="eyebrow mb-5">Get in Touch</h2>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:09136447931" className="hover:text-accent flex items-center gap-2">
                <Phone size={14} className="text-accent" /> 09136447931
              </a>
              <a href="tel:09129324801" className="hover:text-accent flex items-center gap-2">
                <Phone size={14} className="text-accent" /> 09129324801
              </a>
              <a href="mailto:bits.go@gmail.com" className="break-all hover:text-accent flex items-center gap-2">
                <Mail size={14} className="text-accent" /> bits.go@gmail.com
              </a>
              <Link to="/contact" className="mt-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-accent">
                Office Locations & Maps →
              </Link>
              <Link to="/quote" className="mt-2 inline-flex items-center gap-1.5 font-bold text-accent hover:underline">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-5 border-t border-border px-5 pt-7 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} BITS.go — Bamietech IT Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/2349136447931?text=Hello%20BITS.go%2C%20I%27d%20like%20to%20discuss%20a%20project%20for%20my%20business."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with BITS.go on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 border border-accent bg-foreground px-4 py-3 text-xs font-bold text-background shadow-xl hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-0.5"
    >
      <span className="size-2 rounded-full bg-accent animate-pulse" />
      Chat on WhatsApp
    </a>
  );
}

export { serviceGroups };