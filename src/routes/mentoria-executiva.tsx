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
          "90 dias. 12 sessões. Estratégia real para gerentes, diretores e VPs em movimento decisivo de carreira.",
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

const FASES = [
  {
    fase: "Fase 1 · Diagnóstico",
    intro: "Mapear o ponto de partida real antes de mover qualquer peça.",
    sessoes: [
      {
        n: "01",
        title: "Linha de base executiva",
        desc: "Histórico de carreira, padrões de decisão, momentos de inflexão. O que te trouxe até aqui — e o que já não serve.",
      },
      {
        n: "02",
        title: "Ativos e lacunas de liderança",
        desc: "Forças, pontos cegos, percepção do entorno (pares, liderança, time). Leitura honesta da marca executiva atual.",
      },
      {
        n: "03",
        title: "Visão de destino",
        desc: "O que você quer de verdade nos próximos 18 a 36 meses: cargo, contexto, escopo, vida. Não o que deveria querer.",
      },
    ],
  },
  {
    fase: "Fase 2 · Estratégia",
    intro: "Transformar diagnóstico em movimento.",
    sessoes: [
      {
        n: "04",
        title: "Tese de carreira",
        desc: "A narrativa central que conecta trajetória, competência distintiva e próximo capítulo. O fio condutor que orienta toda decisão.",
      },
      {
        n: "05",
        title: "Mapa de oportunidades",
        desc: "Setores, empresas, cargos, formatos (CLT, conselho, sócio, internacional). Critérios de sim e de não.",
      },
      {
        n: "06",
        title: "Plano de 90 dias",
        desc: "Marcos, entregáveis, indicadores. O que precisa estar pronto até o fim do ciclo.",
      },
    ],
  },
  {
    fase: "Fase 3 · Execução com mercado",
    intro: "Onde a maioria dos programas para. Aqui o trabalho fica concreto.",
    sessoes: [
      {
        n: "07",
        title: "Marca executiva e presença digital",
        desc: "LinkedIn, bio, narrativa pública. Como você aparece quando pesquisam seu nome.",
      },
      {
        n: "08",
        title: "Rede estratégica",
        desc: "Mapeamento de quem precisa te conhecer, abordagem, reativação inteligente. Networking executivo — não café aleatório.",
      },
      {
        n: "09",
        title: "Conversas decisivas",
        desc: "Headhunters, board members, recrutadores internos, sponsors. Como conduzir entrevistas e negociações nesse nível.",
      },
      {
        n: "10",
        title: "Negociação e proposta",
        desc: "Pacote, contraoferta, equity, governança. Treinamento de cenários reais que vão aparecer.",
      },
    ],
  },
  {
    fase: "Fase 4 · Consolidação",
    intro: "Garantir que o movimento se sustenta depois da mentoria.",
    sessoes: [
      {
        n: "11",
        title: "Primeiros 90 dias no novo movimento",
        desc: "Plano de entrada — mesmo que ainda esteja em transição. Onboarding, leitura de cultura, stakeholders críticos.",
      },
      {
        n: "12",
        title: "Plano de continuidade",
        desc: "O que segue além da mentoria: rituais de revisão, aliados estratégicos, próximos pontos de inflexão. Você sai com método, não com dependência.",
      },
    ],
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
              Mentoria Executiva · 90 dias · 12 sessões
            </Supratitle>
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mt-6">
              Nesse nível, não tem manual. Mas tem quem já fez o trajeto.
            </h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="mt-6 text-[19px] text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed">
              90 dias. 12 sessões. O movimento que você precisa
              fazer — com suporte real para executá-lo.
            </p>
          </FadeIn>
          <FadeIn delay={360}>
            <div className="mt-10">
              <CtaDuplo
                primaryLabel="Quero tirar dúvidas"
                secondaryLabel="Agendar diagnóstico gratuito de 30 minutos"
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
            <h2 className="text-[var(--color-gold)]">O problema real</h2>
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
          <Supratitle>Como funciona — 12 sessões em 4 fases</Supratitle>
        </FadeIn>
        <div className="mt-12 space-y-16">
          {FASES.map((f, fi) => (
            <FadeIn key={fi} delay={fi * 80}>
              <div>
                <div className="max-w-3xl">
                  <h3 className="font-serif text-[24px] text-[var(--color-foreground)]">
                    {f.fase}
                  </h3>
                  <p className="mt-2 text-[15px] text-[var(--color-muted-foreground)] italic">
                    {f.intro}
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                  {f.sessoes.map((s) => (
                    <div
                      key={s.n}
                      className="border-t-[3px] border-[var(--color-gold)] pt-6"
                    >
                      <p className="font-serif text-[40px] text-[var(--color-gold-soft)] leading-none">
                        {s.n}
                      </p>
                      <h4 className="mt-3 font-serif text-[20px] text-[var(--color-foreground)]">
                        Sessão {s.n} · {s.title}
                      </h4>
                      <p className="mt-3 text-[15px] text-[var(--color-muted-foreground)] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={400}>
          <p className="mt-12 text-[14px] text-[var(--color-muted-foreground)] tracking-wider">
            Sessões quinzenais de 2h · Online · Material e tarefas entre encontros
          </p>
        </FadeIn>
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
                primaryLabel="Quero tirar dúvidas"
                secondaryLabel="Agendar diagnóstico gratuito de 30 minutos"
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
