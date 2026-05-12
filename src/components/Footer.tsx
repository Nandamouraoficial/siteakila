import { Link } from "@tanstack/react-router";
import { PRODUCTS, SOCIAL } from "@/lib/site-config";
import logoAkila from "@/assets/logo-akila-v2-on-dark.png";

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[var(--color-surface-dark)] text-[var(--color-on-dark)] border-t border-[var(--color-gold)]"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <img
              src={logoAkila}
              alt="Akila Consultoria Executiva"
              className="h-16 w-auto object-contain mb-4 -ml-2"
            />
            <p className="font-serif text-[18px] text-[var(--color-on-dark)] leading-snug max-w-[220px]">
              Estratégia de carreira para quem já chegou longe.
            </p>
          </div>

          <div>
            <p className="supratitle mb-4 text-[var(--color-gold-on-dark)]">Serviços</p>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-[14px] text-[var(--color-on-dark)]/80 hover:text-[var(--color-gold-on-dark)] transition-colors"
                  >
                    {p.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="supratitle mb-4 text-[var(--color-gold-on-dark)]">Fernanda Moura</p>
            <ul className="space-y-2.5 text-[14px] text-[var(--color-on-dark)]/80">
              <li>26 anos de carreira executiva</li>
              <li>C-Level América Latina</li>
              <li>
                <Link to="/" className="hover:text-[var(--color-gold-on-dark)] transition-colors">
                  Sobre a Fernanda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="supratitle mb-4 text-[var(--color-gold-on-dark)]">Contato</p>
            <ul className="space-y-2.5 text-[14px] text-[var(--color-on-dark)]/80">
              <li>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-gold-on-dark)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-gold-on-dark)] transition-colors"
                >
                  @nandamouraoficial
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIAL.email}`}
                  className="hover:text-[var(--color-gold-on-dark)] transition-colors break-all"
                >
                  {SOCIAL.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-on-dark)]/10 text-[12px] text-[var(--color-on-dark)]/50">
          © 2026 Akila Consultoria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
