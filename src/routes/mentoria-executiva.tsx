import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Supratitle } from "@/components/Section";
import { CtaDuplo } from "@/components/CtaDuplo";
import { FadeIn } from "@/components/FadeIn";
import { FORM_URLS } from "@/lib/site-config";

export const Route = createFileRoute("/mentoria-executiva")({
  head: () => ({
    meta: [
      { title: "Mentoria Executiva — Akila Consultoria" },
      {
        name: "description",
        content:
          "90 dias. 3 sessões individuais. Estratégia real para gerentes, diretores e VPs em movimento decisivo de carreira.",
      },
      { property: "og:title", content: "Mentoria Executiva — Akila" },
      {
        property: "og:description",
        content:
          "Nesse nível, não tem manual. Mas tem quem já fez o trajeto. 90 dias com Fernanda Moura.",
      },
    ],
  }),
  component: MentoriaExecutiva,
});

type Persona = "gerentes" | "diretores";

const PROBLEMA_COPY =
  "Nesse nível, raramente existe alguém com quem falar de verdade. Sem ter que proteger imagem. Sem filtro de hierarquia. Alguém que já esteve onde você quer chegar — e pode dizer o que realmente está em jogo.";

const COPY: Record<Persona, { paraQuem: string; problema: string }> = {
  gerentes: {
    paraQuem:
      "Você entrega. Você lidera. E sente que está pronto para o próximo nível — mas não sabe exatamente o que falta, nem como dar esse salto sem errar a jogada.",
    problema: PROBLEMA_COPY,
  },
  diretores: {
    paraQuem:
      "Você já chegou. E agora o jogo mudou — de novo. Transição, expansão, consolidação: o que é certo nesse momento não é óbvio. E não existe alguém na sua estrutura com quem conversar sem filtro político.",
    problema: PROBLEMA_COPY,
  },
};

const SESSOES = [
  {
    n: "1",
    title: "Diagnóstico real",
    desc: "Onde você está de fato. Onde quer ir. O que está travando — mesmo que você ainda não saiba nomear.",
  },
  {
    n: "2",
    title: "Estratégia e execução",
    desc: "Plano. Ajustes. Desbloqueios. O movimento certo, executado com método.",
  },
  {
    n: "3",
    title: "Consolidação",
    desc: "O que ficou. O que muda. O que vem depois.",
  },
];

function MentoriaExecutiva() {
  const [persona, setPersona] = useState<Persona>("gerentes");
  const c = COPY[persona];

  return (
    <>
      {/* TOGGLE */}
      <Section className="!pb-0 !pt-12">
        <div className="flex justify-start">
          <div className="inline-flex border border-[var(--color-border)]">
            <button
              onClick={() => setPersona("gerentes")}
              className={`px-6 py-3 text-[14px] tracking-wide transition-colors ${
                persona === "gerentes"
                  ? "bg-[var(--color-foreground)] text-[var(--color-on-dark)]"
                  : "bg-[var(--color-gold-soft)] text-[var(--color-muted-foreground)]"
              }`}
            >
              Para Gerentes
            </button>
            <button
              onClick={() => setPersona("diretores")}
              className={`px-6 py-3 text-[14px] tracking-wide transition-colors ${
                persona === "diretores"
                  ? "bg-[var(--color-foreground)] text-[var(--color-on-dark)]"
                  : "bg-[var(--color-gold-soft)] text-[var(--color-muted-foreground)]"
              }`}
            >
              Para Diretores e VPs
            </button>
          </div>
        </div>
      </Section>

      {/* HERO */}
      <Section className="!pt-12">
        <div className="max-w-4xl">
          <FadeIn>
            <Supratitle>
              Mentoria Executiva · 90 dias · 3 sessões individuais
            </Supratitle>
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mt-6">
              Nesse nível, não tem manual. Mas tem quem já fez o trajeto.
            </h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="mt-6 text-[19px] text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed">
              90 dias. 3 sessões individuais. O movimento que você precisa
              fazer — com suporte real para executá-lo.
            </p>
          </FadeIn>
          <FadeIn delay={360}>
            <div className="mt-10">
              <CtaDuplo
                primaryLabel="Quero conversar"
                secondaryLabel="Agendar 30 minutos"
                formUrl={FORM_URLS.mentoriaExecutiva}
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* PARA QUEM (dinâmico) */}
      <Section className="!py-20">
        <div className="max-w-3xl">
          <FadeIn>
            <Supratitle>Para quem é</Supratitle>
          </FadeIn>
          <p
            key={`pq-${persona}`}
            className="mt-6 text-[18px] leading-[1.8] text-[var(--color-foreground)] fade-in-init fade-in-show"
          >
            {c.paraQuem}
          </p>
        </div>
      </Section>

      {/* PROBLEMA (dark, dinâmico) */}
      <Section variant="dark">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[var(--color-gold)]">O que esse nível exige</h2>
          </FadeIn>
          <p
            key={`pr-${persona}`}
            className="mt-8 text-[17px] leading-[1.8] text-[var(--color-on-dark)] fade-in-init fade-in-show"
          >
            {c.problema}
          </p>
        </div>
      </Section>

      {/* TRANSFORMAÇÃO */}
      <Section>
        <div className="max-w-3xl">
          <FadeIn>
            <h2>O que muda em 90 dias</h2>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="mt-8 text-[18px] leading-[1.8] text-[var(--color-muted-foreground)]">
              Clareza sobre o movimento certo. Suporte para executá-lo. E você
              chega diferente no final do processo — mais sólido, mais
              estratégico, mais você. Não motivado. Movido.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section>
        <FadeIn>
          <Supratitle>Como funciona — 3 sessões</Supratitle>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {SESSOES.map((s, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="border-t-[3px] border-[var(--color-gold)] pt-6">
                <p className="font-serif text-[40px] text-[var(--color-gold-soft)] leading-none">
                  0{s.n}
                </p>
                <h3 className="mt-3 font-serif text-[22px] text-[var(--color-foreground)]">
                  Sessão {s.n} · {s.title}
                </h3>
                <p className="mt-3 text-[15px] text-[var(--color-muted-foreground)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[var(--color-on-dark)]">
              O próximo movimento não precisa ser feito sozinho.
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-10 flex justify-center">
              <CtaDuplo
                primaryLabel="Quero conversar"
                secondaryLabel="Agendar 30 minutos"
                formUrl={FORM_URLS.mentoriaExecutiva}
                align="center"
                variant="onDark"
              />
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
