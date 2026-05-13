import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Supratitle } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { PRODUCTS, WHATSAPP_URL } from "@/lib/site-config";

function WhatsAppCta({ align = "left" as "left" | "center" }) {
  return (
    <div className={align === "center" ? "flex flex-col items-center gap-3" : "flex flex-col items-start gap-3"}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-[var(--color-gold)] text-white px-7 py-3.5 text-[15px] font-semibold tracking-wide transition-colors hover:bg-[var(--color-foreground)]"
      >
        Fale no WhatsApp
      </a>
      <p className="text-[14px]" style={{ color: "#A6A8AB" }}>Respondo pessoalmente.</p>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akila Consultoria — Estratégia de carreira para executivos" },
      {
        name: "description",
        content:
          "Fernanda Moura. 26 anos de carreira executiva em multinacionais. Estratégias de carreira para executivos que jogam no alto nível.",
      },
      {
        property: "og:title",
        content: "Akila Consultoria — Estratégia de carreira para executivos",
      },
      {
        property: "og:description",
        content:
          "Fernanda Moura. 26 anos de carreira executiva. Estratégias de carreira para quem joga no alto nível.",
      },
    ],
  }),
  component: Index,
});

const TESTIMONIALS = [
  {
    quote: "[DEPOIMENTO_1]",
    author: "[Nome]",
    role: "[Cargo]",
    company: "[Empresa]",
  },
  {
    quote: "[DEPOIMENTO_2]",
    author: "[Nome]",
    role: "[Cargo]",
    company: "[Empresa]",
  },
  {
    quote: "[DEPOIMENTO_3]",
    author: "[Nome]",
    role: "[Cargo]",
    company: "[Empresa]",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="bg-background px-6 md:px-10">
        <div className="mx-auto max-w-6xl min-h-[88vh] grid grid-cols-1 md:grid-cols-5 gap-12 items-center py-16 md:py-0">
          <div className="md:col-span-3 order-2 md:order-1">
            <FadeIn>
              <Supratitle>Estrategista de carreira para executivos</Supratitle>
            </FadeIn>
            <FadeIn delay={120}>
              <h1 className="mt-6 font-serif text-[var(--color-foreground)] leading-[1.05]">
                Você chegou longe.
                <br />
                O próximo passo
                <br />
                precisa ser certo.
              </h1>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="mt-8 max-w-[480px] text-[18px] text-[var(--color-muted-foreground)] leading-relaxed">
                Fernanda Moura. 26 anos de carreira executiva em multinacionais.
                Estratégias de carreira para quem joga no alto nível.
              </p>
            </FadeIn>
            <FadeIn delay={360}>
              <div className="mt-10">
                <WhatsAppCta />
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-2 order-1 md:order-2">
            <FadeIn>
              <div className="aspect-[3/4] w-full bg-[var(--color-gold-soft)] flex items-center justify-center text-[var(--color-muted-foreground)] text-sm tracking-wider">
                [FOTO_FERNANDA_HERO]
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <Supratitle>Quem é Fernanda Moura</Supratitle>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.8] text-[var(--color-on-dark)]">
              <p>
                26 anos de carreira em Coca-Cola, Cargill, Kraft Heinz, BRF,
                Kimberly-Clark, Itaú, Unilever, Amil e outras empresas. Liderou
                times de até 800 pessoas e operações em 15 países, onde
                gerenciou também projetos internacionais. Passou por supervisão,
                gerência, diretoria e C-Level internacional para América Latina
                e América Central.
              </p>
              <p>
                Hoje ajuda executivos a decidirem o próximo movimento, executarem
                transições e sustentarem novos níveis de liderança — com
                estratégia, não com motivação.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* PRODUTOS */}
      <Section>
        <FadeIn>
          <h2 className="text-center mb-16">Como posso ajudar</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]">
          {PRODUCTS.map((p, i) => (
            <FadeIn key={p.to} delay={i * 80}>
              <Link
                to={p.to}
                className="group block bg-background p-8 h-full border-t-[3px] border-[var(--color-gold)] hover:bg-[var(--color-gold-soft)]/30 transition-colors"
              >
                <p className="font-serif text-[48px] text-[var(--color-gold-soft)] leading-none">
                  {p.number}
                </p>
                <h3 className="mt-4 font-serif text-[22px] text-[var(--color-foreground)]">
                  {p.name}
                </h3>
                <p className="mt-3 text-[15px] text-[var(--color-muted-foreground)] leading-relaxed">
                  {p.description}
                </p>
                <p className="mt-6 text-[14px] text-[var(--color-gold)] tracking-wider">
                  Saiba mais →
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section variant="dark">
        <FadeIn>
          <h2 className="text-center mb-16 text-[var(--color-gold-on-dark)]">O que dizem</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="border-t border-[var(--color-gold-on-dark)] pt-6">
                <p className="font-serif text-[48px] text-[var(--color-gold-on-dark)] leading-none">
                  &ldquo;
                </p>
                <p className="text-[16px] italic leading-relaxed text-[var(--color-on-dark)]">
                  {t.quote}
                </p>
                <p className="mt-6 text-[14px] text-[var(--color-gold-on-dark)]">
                  {t.author} · {t.role} · {t.company}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[var(--color-foreground)]">
              A conversa mais importante da sua carreira pode ser a próxima.
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-10 flex justify-center">
              <WhatsAppCta align="center" />
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
