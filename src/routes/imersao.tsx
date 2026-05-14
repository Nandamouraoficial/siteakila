import { createFileRoute } from "@tanstack/react-router";

import { Section, Supratitle } from "@/components/Section";
import { CtaDuplo } from "@/components/CtaDuplo";
import { FadeIn } from "@/components/FadeIn";
import { FORM_URLS } from "@/lib/site-config";

export const Route = createFileRoute("/imersao")({
  head: () => ({
    meta: [
      { title: "Imersão O Próximo Passo — Akila Consultoria" },
      {
        name: "description",
        content:
          "Um dia online. Um grupo de até 15 executivos. Uma decisão. Imersão para clareza sobre seu próximo movimento.",
      },
      { property: "og:title", content: "Imersão O Próximo Passo — Akila" },
      {
        property: "og:description",
        content:
          "Um dia. Um grupo de até 15 executivos. Clareza sobre o próximo passo.",
      },,
      { property: "og:url", content: "https://akilaexecutive.com/imersao" }
    ],
    links: [{ rel: "canonical", href: "https://akilaexecutive.com/imersao" }],
  }),
  component: ImersaoPage,
});

const IMERSAO_ATIVA = true;
const VAGAS = 15;
const DATA_EDICAO = "27 de junho";

const MOMENTOS = [
  {
    label: "Momento 1 · Das 9h às 10h30",
    title: "Onde você está de verdade",
    desc: "Não o currículo. A realidade.",
  },
  {
    label: "Momento 2 · Das 10h45 às 12h15",
    title: "O que você quer",
    desc: "Não o que deveria querer. O que quer.",
  },
  {
    label: "Momento 3 · Das 13h às 14h15",
    title: "O que está travando",
    desc: "O gap entre onde está e onde quer ir.",
  },
  {
    label: "Momento 4 · Das 14h15 às 15h",
    title: "O que fazer agora",
    desc: "Plano dos próximos 90 dias. Concreto.",
  },
];

function ImersaoPage() {
  return (
    <>
      {!IMERSAO_ATIVA && (
        <div className="bg-[var(--color-surface-dark)] text-[var(--color-on-dark)] py-4 px-6 text-center text-[14px]">
          Esta edição está encerrada.{" "}
          <span className="text-[var(--color-gold-on-dark)]">
            Próxima turma em breve — entre na lista de espera.
          </span>
        </div>
      )}

      {/* HERO */}
      <Section>
        <div className="max-w-2xl">
          <FadeIn>
            <Supratitle>Imersão O Próximo Passo · Online · {DATA_EDICAO}</Supratitle>
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mt-6 max-w-none">
              <span className="block sm:whitespace-nowrap">
                Você sabe que tem um próximo passo.
              </span>
              <span className="block sm:whitespace-nowrap">
                Falta clareza para dar.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="mt-6 text-[19px] text-[var(--color-muted-foreground)] leading-relaxed">
              Um dia online. Um grupo de até 15 executivos.
              <br className="sm:hidden" /> Uma decisão.
              <br className="min-[420px]:hidden" /> Um plano para ação imediata.
            </p>
          </FadeIn>
          <FadeIn delay={360}>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              {IMERSAO_ATIVA ? (
                <>
                  <CtaDuplo
                    primaryLabel="Garantir minha vaga"
                    formUrl={FORM_URLS.imersao}
                    singleMode
                  />
                  <span className="text-[13px] text-[var(--color-gold)] tracking-wider border border-[var(--color-gold)] px-3 py-1.5">
                    {VAGAS} VAGAS DISPONÍVEIS
                  </span>
                </>
              ) : (
                <CtaDuplo
                  primaryLabel="Entrar na lista de espera"
                  formUrl={FORM_URLS.imersaoListaEspera}
                  singleMode
                />
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FOTO PLACEHOLDER */}
      <div className="px-6 md:px-10 mb-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="aspect-[16/7] w-full bg-[var(--color-gold-soft)] flex items-center justify-center text-[var(--color-muted-foreground)] text-sm tracking-wider">
              [FOTO_IMERSAO_GRUPO]
            </div>
          </FadeIn>
        </div>
      </div>

      {/* PARA QUEM */}
      <Section className="!py-20">
        <div className="max-w-3xl">
          <FadeIn>
            <Supratitle>Para quem é</Supratitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="mt-6 text-[18px] leading-[1.8] text-[var(--color-foreground)]">
              Para a mulher executiva que construiu uma carreira sólida — e está
              na encruzilhada silenciosa do que vem agora. Você entrega. Você
              lidera. Você chegou longe. E ainda assim há uma pergunta que não
              sai: o que é, de fato, o meu próximo capítulo? Não falta
              competência. Falta clareza — sobre o que você realmente quer, não
              o que deveria querer.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* PROBLEMA */}
      <Section variant="dark">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[var(--color-gold)]">Por que é tão difícil responder?</h2>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="mt-8 text-[17px] leading-[1.8] text-[var(--color-on-dark)]">
              Você já tentou responder essa pergunta sozinha. Às vezes chega
              perto. Outras vezes a rotina engole tudo e você continua no
              automático — competente, ocupada, e levemente inquieta. Ninguém ao
              redor consegue ajudar de verdade. Seus pares estão no mesmo
              dilema. Sua liderança não enxerga o que você sente. E coach
              genérico não conhece o jogo que você joga.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* TRANSFORMAÇÃO */}
      <Section>
        <div className="max-w-3xl">
          <FadeIn>
            <h2>O que muda em um dia</h2>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="mt-8 text-[18px] leading-[1.8] text-[var(--color-muted-foreground)]">
              Em um dia você sai sabendo. Não com um plano de papel — com
              clareza real sobre seu próximo movimento e os primeiros passos
              concretos para executá-lo.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section variant="dark">
        <FadeIn>
          <h2 className="text-[var(--color-gold)]">Como funciona</h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--color-gold)]/30">
          {MOMENTOS.map((m, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="bg-[var(--color-surface-dark)] p-6 h-full">
                <p className="text-[12px] text-[var(--color-gold-on-dark)] tracking-wider uppercase">
                  {m.label}
                </p>
                <h3 className="mt-4 font-serif text-[20px] text-[var(--color-on-dark)]">
                  {m.title}
                </h3>
                <p className="mt-3 text-[14px] text-[var(--color-on-dark)]/70 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={400}>
          <p className="mt-10 text-center text-[14px] text-[var(--color-on-dark)]/70 tracking-wider">
            Online · Ao vivo com Fernanda · Até 15 participantes · Pequeno por
            escolha
          </p>
        </FadeIn>
      </Section>

      {/* CTA FINAL */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto border-t border-[var(--color-gold)]/30 pt-16">
          <FadeIn>
            <h2 className="text-[var(--color-on-dark)]">Pronta para clareza?</h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-10 flex justify-center">
              {IMERSAO_ATIVA ? (
                <CtaDuplo
                  primaryLabel="Garantir minha vaga"
                  formUrl={FORM_URLS.imersao}
                  align="center"
                  variant="onDark"
                  singleMode
                />
              ) : (
                <CtaDuplo
                  primaryLabel="Quero ser avisada quando abrir"
                  formUrl={FORM_URLS.imersaoListaEspera}
                  align="center"
                  variant="onDark"
                  singleMode
                />
              )}
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
