import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";
import { FORM_URLS } from "@/lib/site-config";

export const Route = createFileRoute("/palestrante")({
  head: () => ({
    meta: [
      { title: "Palestrante Magnético — Akila Consultoria" },
      {
        name: "description",
        content:
          "Presença de palco real. Magnetismo genuíno que prende, conecta e fica. Acompanhamento individual com Fernanda Moura.",
      },
      { property: "og:title", content: "Palestrante Magnético — Akila" },
      {
        property: "og:description",
        content:
          "Presença de palco autêntica. Não técnica de slides — magnetismo real.",
      },,
      { property: "og:url", content: "https://akilaexecutive.com/palestrante" }
    ],
    links: [{ rel: "canonical", href: "https://akilaexecutive.com/palestrante" }],
  }),
  component: () => (
    <ProductPageShell
      supratitle="Presença de palco · Acompanhamento individual"
      headline={
        <>Você entra numa sala e as pessoas sentem. Isso não é sorte — é presença.</>
      }
      subheadline="A diferença entre quem apresenta e quem conecta não é o conteúdo. É o que acontece antes, durante e depois das palavras."
      heroPrimary="Quero tirar dúvidas"
      singleCta
      formUrl={FORM_URLS.palestrante}
      paraQuem={
        <p>
          Para executivos e especialistas que já falam em público — ou querem
          começar — e querem desenvolver presença real: não técnica de slides,
          mas magnetismo genuíno que prende, conecta e fica.
        </p>
      }
      problemaTitle="O que você sente no palco"
      problema={
        <p>
          Bom conteúdo. Apresentação que não prende. Nervosismo que aparece
          quando você menos quer. Energia que cai depois de 10 minutos. Plateia
          que distrai. Você sente que entrega menos do que tem. E o pior: sabe
          que é verdade.
        </p>
      }
      transformacaoTitle="O que você desenvolve"
      transformacao={
        <p>
          Presença de palco autêntica. Que prende atenção desde a primeira
          frase. Que gera conexão emocional sem forçar. Que deixa memória — não
          apenas informação. O palestrante que as pessoas querem ouvir de novo.
        </p>
      }
      extraBlock={
        <div className="bg-[var(--color-surface-dark)] border border-[var(--color-gold)] p-10 max-w-3xl mx-auto">
          <p className="text-[17px] leading-[1.8] text-[var(--color-on-dark)]">
            Fernanda liderou salas, negociações de board e crises institucionais
            ao longo de 26 anos em multinacionais. Sabe o que faz uma plateia
            parar — e o que faz ela dispersar.
          </p>
        </div>
      }
      ctaFinalHeadline="Presença de palco não se improvisa. Se constrói."
      ctaFinalPrimary="Quero tirar dúvidas"
    />
  ),
});
