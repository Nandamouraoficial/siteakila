import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";
import { FORM_URLS } from "@/lib/site-config";

export const Route = createFileRoute("/comunicador")({
  head: () => ({
    meta: [
      { title: "Comunicador Magnético — Akila Consultoria" },
      {
        name: "description",
        content:
          "Comunicação executiva com naturalidade, presença e autoridade. Acompanhamento individual com Fernanda Moura.",
      },
      { property: "og:title", content: "Comunicador Magnético — Akila" },
      {
        property: "og:description",
        content:
          "Câmera, redes, reuniões que importam. Comunicação magnética como habilidade.",
      },
    ],
  }),
  component: () => (
    <ProductPageShell
      supratitle="Comunicação executiva · Acompanhamento individual"
      headline={
        <>Você tem muito a dizer. O que falta é parar de travar na hora de dizer.</>
      }
      subheadline="Comunicação magnética não é dom. É habilidade. E habilidade se aprende."
      heroPrimary="Quero tirar dúvidas"
      singleCta
      formUrl={FORM_URLS.comunicador}
      paraQuem={
        <p>
          Para o executivo que evita câmera, trava ao gravar, se sente
          artificial em vídeo — mas sabe que precisa ou quer usar comunicação
          como ferramenta de posicionamento real.
        </p>
      }
      problemaTitle="O que está acontecendo de verdade"
      problema={
        <p>
          Você abre a câmera e trava. Grava cinco vezes e apaga todas. Soa
          diferente do que é. Ou simplesmente adia — e o resultado é
          invisibilidade no momento em que mais precisaria estar presente. Não é
          falta de conteúdo. É um bloqueio que nenhum curso de oratória resolve,
          porque não é técnico. É interno.
        </p>
      }
      transformacaoTitle="Depois do processo"
      transformacao={
        <p>
          Você passa a se comunicar com naturalidade, presença e autoridade —
          câmera, redes, reuniões de alta stake, conversas que importam. Seu
          conteúdo começa a representar quem você de fato é. Não quem você
          finge ser quando a câmera liga.
        </p>
      }
      extraBlock={
        <div className="max-w-3xl">
          <h3 className="font-serif text-[24px] text-[var(--color-foreground)]">
            Como funciona
          </h3>
          <p className="mt-4 text-[17px] leading-[1.8] text-[var(--color-muted-foreground)]">
            O acompanhamento é individual. O escopo é definido na primeira
            conversa, de acordo com onde você está e onde quer chegar. Não
            existe fórmula única — existe o que funciona para você.
          </p>
        </div>
      }
      ctaFinalHeadline="A câmera não é o problema. Vamos descobrir o que é."
      ctaFinalPrimary="Quero tirar dúvidas"
    />
  ),
});
