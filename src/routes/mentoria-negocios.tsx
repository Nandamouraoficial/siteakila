import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";
import { FadeIn } from "@/components/FadeIn";
import { Supratitle } from "@/components/Section";
import { FORM_URLS } from "@/lib/site-config";

export const Route = createFileRoute("/mentoria-negocios")({
  head: () => ({
    meta: [
      { title: "Mentoria de Negócios — Akila Consultoria" },
      {
        name: "description",
        content:
          "Mentoria estratégica para empresários e fundadores que precisam clareza sobre o próximo movimento do negócio.",
      },
      { property: "og:title", content: "Mentoria de Negócios — Akila" },
      {
        property: "og:description",
        content:
          "Estratégia real para o próximo capítulo do seu negócio — com quem já operou em escala internacional.",
      },
      { property: "og:url", content: "https://akilaexecutive.com/mentoria-negocios" }
    ],
    links: [{ rel: "canonical", href: "https://akilaexecutive.com/mentoria-negocios" }],
  }),
  component: () => (
    <ProductPageShell
      supratitle="Mentoria de Negócios · Acompanhamento individual · [REVISAR]"
      headline={
        <>
          Crescer um negócio é fácil. Sustentar o próximo nível é outra
          conversa.
        </>
      }
      subheadline="Mentoria estratégica para empresários e fundadores que precisam de clareza, método e perspectiva externa para o próximo movimento do negócio. [REVISAR]"
      heroPrimary="Quero tirar dúvidas"
      heroSecondary="Agendar diagnóstico gratuito de 30 minutos"
      formUrl={FORM_URLS.mentoriaNegocios}
      paraQuem={
        <p>
          [REVISAR] Para empresários, fundadores e sócios em momento de
          transição, expansão, sucessão ou reestruturação — que precisam de uma
          perspectiva estratégica externa, com vivência real de operação em
          escala.
        </p>
      }
      problemaTitle="O ponto cego de quem está dentro"
      problema={
        <p>
          [REVISAR] Você conhece seu negócio melhor do que qualquer um. Mas
          justamente por estar dentro, alguns movimentos estratégicos ficam
          invisíveis. Não falta capacidade. Falta um interlocutor que jogue no
          mesmo nível — sem agenda, sem dependência da estrutura, sem filtro.
        </p>
      }
      transformacaoTitle="O que muda no processo"
      transformacao={
        <p>
          [REVISAR] Clareza sobre prioridades reais. Decisões estruturadas com
          método. Movimentos executados com confiança — e a tranquilidade de
          ter alguém com quem pensar sem ruído político.
        </p>
      }
      comoFunciona={
        <>
          <FadeIn>
            <Supratitle>Como funciona</Supratitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="mt-6 max-w-3xl text-[17px] leading-[1.8] text-[var(--color-muted-foreground)]">
              [REVISAR] O escopo é definido em conjunto, na primeira conversa.
              Cadência, profundidade e duração se ajustam ao momento do
              negócio. Não existe pacote de prateleira — existe o que faz
              sentido para você agora.
            </p>
          </FadeIn>
        </>
      }
      extraBlock={
        <div className="bg-[var(--color-surface-dark)] border border-[var(--color-gold)] p-10 max-w-3xl mx-auto">
          <p className="text-[17px] leading-[1.8] text-[var(--color-on-dark)]">
            Fernanda passou 26 anos liderando operações multinacionais em 15
            países. Ela conhece o jogo da escala — e o que separa empresas que
            crescem das que sustentam o crescimento.
          </p>
        </div>
      }
      ctaFinalHeadline="O próximo capítulo do seu negócio merece uma conversa estratégica."
      ctaFinalPrimary="Quero tirar dúvidas"
      ctaFinalSecondary="Agendar diagnóstico gratuito de 30 minutos"
    />
  ),
});
