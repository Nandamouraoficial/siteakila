import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Supratitle } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { PRODUCTS, WHATSAPP_URL } from "@/lib/site-config";
import fernandaHero from "@/assets/fernanda-hero.png";

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
      { property: "og:url", content: "https://akilaexecutive.com/" },
    ],
    links: [{ rel: "canonical", href: "https://akilaexecutive.com/" }],
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
              <div className="aspect-[3/4] w-full overflow-hidden bg-[var(--color-gold-soft)]">
                <img
                  src={fernandaHero}
                  alt="Fernanda Moura, fundadora da Akila Consultoria"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
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
      <Section id="produtos">
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

      {/* SOBRE A FUNDADORA */}
      <Section className="!bg-[#F2EBD9]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          <div className="md:col-span-2">
            <FadeIn>
              <div className="aspect-[4/5] w-full rounded-2xl bg-[#006039] flex items-center justify-center text-[var(--color-on-dark)] text-sm tracking-wider">
                [FOTO_FERNANDA]
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <p className="mt-6 text-[12px] uppercase tracking-[0.2em] text-[#B8860B] leading-relaxed">
                Unilever · Coca-Cola · Kraft Heinz · BRF · Kimberly-Clark · Cargill · Itaú
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-3">
            <FadeIn>
              <div className="h-[2px] w-10 bg-[#B8860B]" />
              <p className="mt-6 supratitle">Sobre a fundadora</p>
            </FadeIn>
            <FadeIn delay={120}>
              <h2 className="mt-6 font-serif font-bold text-[#1A1A1A]">
                Fui executiva em Coca-Cola, Unilever, Kraft Heinz e BRF por 26 anos.
                Sei exatamente o que separa quem avança de quem fica.
              </h2>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-[#1A1A1A]">
                <p>
                  Liderança de times em 15 países. Diretoria para a América Latina.
                  Mais de 50 plantas industriais sob responsabilidade. Apresentações
                  ao Conselho de Administração. 23 transições ao longo da carreira —
                  não 23 demissões. 23 decisões.
                </p>
                <p>
                  Em determinado momento, percebi o padrão que se repetia em volta:
                  profissionais com histórico sólido, entrega consistente e resultado
                  real — travados não por falta de competência, mas por excesso de inércia.
                </p>
                <p>A gaiola de ouro é real. Eu morei nela.</p>
                <p>
                  E foi exatamente por isso que criei a Akila: para que nenhum executivo
                  competente pague o custo de adiar uma decisão que já deveria ter sido tomada.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={360}>
              <a
                href="#produtos"
                className="mt-10 inline-flex items-center justify-center border border-[#006039] text-[#006039] bg-transparent px-7 py-3.5 text-[15px] font-medium tracking-wide transition-colors hover:bg-[#006039] hover:text-[var(--color-on-dark)]"
              >
                Conheça os programas
              </a>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
