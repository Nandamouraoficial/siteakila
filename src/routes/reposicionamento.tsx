import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";
import { FadeIn } from "@/components/FadeIn";
import { Supratitle } from "@/components/Section";
import { FORM_URLS } from "@/lib/site-config";

export const Route = createFileRoute("/reposicionamento")({
  head: () => ({
    meta: [
      { title: "Reposicionamento LinkedIn — Akila Consultoria" },
      {
        name: "description",
        content:
          "3 sessões de 2h + reescrita completa do perfil. Transforme seu LinkedIn em ativo de posicionamento executivo.",
      },
      { property: "og:title", content: "Reposicionamento LinkedIn — Akila" },
      {
        property: "og:description",
        content:
          "Perfil reescrito. Estratégia definida. As oportunidades certas chegando.",
      },
    ],
  }),
  component: () => (
    <ProductPageShell
      supratitle="Reposicionamento · 3 sessões de 2h + reescrita completa"
      headline={
        <>Seu LinkedIn precisa trabalhar por você enquanto você não está online.</>
      }
      subheadline="3 sessões. Perfil reescrito. Estratégia definida. As oportunidades certas chegando — sem você precisar ficar postando todo dia."
      heroPrimary="Quero reposicionar meu perfil"
      heroSecondary="Agendar conversa"
      formUrl={FORM_URLS.reposicionamento}
      paraQuem={
        <p>
          Para executivos em transição, buscando visibilidade para oportunidades
          maiores, mudança de setor ou construção de autoridade para novos
          projetos.
        </p>
      }
      problemaTitle="O que está acontecendo com seu perfil"
      problema={
        <p>
          O LinkedIn está lá — mas não está gerando nada. Não aparece para os
          recrutadores do nível que você quer. Não comunica quem você virou.
          Está preso em quem você era — com o formato de currículo que todo
          mundo usa. O problema não é você. É como você está sendo apresentado.
        </p>
      }
      transformacaoTitle="O resultado"
      transformacao={
        <p>
          Seu perfil vira um ativo de posicionamento. Atrai as oportunidades
          certas. Repele as erradas. E você sabe o que publicar — sem virar
          refém do algoritmo nem da ansiedade de ter que postar toda semana.
        </p>
      }
      comoFunciona={
        <>
          <FadeIn>
            <Supratitle>Como funciona — 3 sessões</Supratitle>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Narrativa",
                desc: "Quem você é, onde quer chegar, qual é a história que precisa ser contada.",
              },
              {
                step: "02",
                title: "Construção",
                desc: "Reescrita completa: headline, sobre, experiências — com linguagem de posicionamento, não de currículo.",
              },
              {
                step: "03",
                title: "Ativação",
                desc: "Estratégia de conteúdo para os próximos 90 dias + configurações técnicas para visibilidade.",
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border-t-[3px] border-[var(--color-gold)] pt-6">
                  <p className="font-serif text-[40px] text-[var(--color-gold-soft)] leading-none">
                    {s.step}
                  </p>
                  <h3 className="mt-3 font-serif text-[22px] text-[var(--color-foreground)]">
                    Sessão {s.step.replace("0", "")} · {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-[var(--color-muted-foreground)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </>
      }
      extraBlock={
        <FadeIn>
          <div className="bg-background border-l-[3px] border-[var(--color-gold)] p-6 max-w-3xl">
            <p className="text-[16px] text-[var(--color-foreground)] leading-relaxed">
              Fez o{" "}
              <strong className="font-medium">
                Diagnóstico de Presença Executiva
              </strong>
              ? O valor é abatido aqui integralmente.
            </p>
          </div>
        </FadeIn>
      }
      ctaFinalHeadline="Seu perfil hoje está te ajudando ou te custando oportunidades?"
      ctaFinalPrimary="Quero reposicionar meu perfil"
      ctaFinalSecondary="Agendar conversa com a Fernanda"
    />
  ),
});
