import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { CALENDLY_URL, PRODUCTS } from "@/lib/site-config";
import logoAkila from "@/assets/logo-akila-v2.png";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Akila Consultoria Executiva — Início">
          <img
            src={logoAkila}
            alt="Akila Consultoria Executiva"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-[14px] text-[var(--color-muted-foreground)] hover:text-[var(--color-gold)] transition-colors"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-[var(--color-gold)]" }}
          >
            Sobre
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[14px] text-[var(--color-muted-foreground)] hover:text-[var(--color-gold)] transition-colors"
              aria-expanded={servicesOpen}
            >
              Serviços <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="absolute right-0 top-full pt-3 w-72">
                <div className="bg-background border border-[var(--color-border)] shadow-md py-2">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block px-5 py-2.5 text-[14px] text-[var(--color-muted-foreground)] hover:text-[var(--color-gold)] hover:bg-[var(--color-gold-soft)]/40 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#contato"
            className="text-[14px] text-[var(--color-muted-foreground)] hover:text-[var(--color-gold)] transition-colors"
          >
            Contato
          </a>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] border border-[var(--color-gold)] text-[var(--color-foreground)] px-5 py-2.5 hover:bg-[var(--color-surface-dark)] hover:text-[var(--color-on-dark)] hover:border-[var(--color-surface-dark)] transition-colors"
          >
            Agendar conversa
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--color-foreground)]"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <img src={logoAkila} alt="Akila Consultoria Executiva" className="h-9 w-auto object-contain" />
              <button onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[15px] text-[var(--color-foreground)] border-b border-[var(--color-border)]"
              >
                Sobre
              </Link>
              <div className="py-2 border-b border-[var(--color-border)]">
                <p className="supratitle text-[11px] mb-2 mt-2">Serviços</p>
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[14px] text-[var(--color-muted-foreground)]"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[15px] text-[var(--color-foreground)] border-b border-[var(--color-border)]"
              >
                Contato
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-center border border-[var(--color-gold)] text-[var(--color-foreground)] px-5 py-3 text-[14px] hover:bg-[var(--color-surface-dark)] hover:text-[var(--color-on-dark)] hover:border-[var(--color-surface-dark)] transition-colors"
              >
                Agendar conversa
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
