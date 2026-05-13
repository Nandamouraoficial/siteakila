import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";
import { FadeIn } from "@/components/FadeIn";
import { Supratitle } from "@/components/Section";
import { FORM_URLS } from "@/lib/site-config";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico de Presença Executiva — Akila Consultoria" },
      {
        name: "description",
        content:
          "Duas horas de análise honesta do seu LinkedIn + relatório escrito com prioridades. Diagnóstico executivo com Fernanda Moura.",
      },
      {
        property: "og:title",
        content: "Diagnóstico de Presença Executiva — Akila",
      },
      {
        property: "og:description",
        content:
          "Duas horas de análise honesta. Um relatório escrito que você vai usar.",
      },
    ],
  }),
  component: () => (
    <ProductPageShell
      supratitle="Diagnóstico · 2 horas + relatório escrito"
      headline={<>Seu LinkedIn está abrindo portas — ou fechando?</>}
      subheadline="Duas horas de análise honesta. Um relatório que você vai usar."
      heroPrimary="Quero agendar meu diagnóstico"
      heroSupport="Após o preenchimento do formulário, você receberá os links para pagamento e agendamento."
      singleCta
      formUrl={FORM_URLS.diagnostico}
      paraQuem={
        <p>
          Para o executivo que percebe que sua presença digital não reflete quem
          ele realmente é — nem o nível que já alcançou.
        </p>
      }
      problemaTitle="O que está em jogo"
      problema={
        <p>
          Você passou anos construindo uma reputação no trabalho. Mas no
          LinkedIn — onde headhunters, parceiros e clientes vão te procurar
          antes de qualquer conversa — sua imagem pode estar parada no tempo.
          Genérica. Ou invisível. Não porque você não tem o que mostrar. Porque
          ninguém te disse como mostrar direito.
        </p>
      }
      transformacaoTitle="O que você recebe"
      transformacao={
        <p>
          Em 2 horas você recebe uma leitura completa e honesta da sua presença
          executiva. Sem eufemismo. E um relatório escrito com o que mudar — por
          prioridade, não por perfeccionismo.
        </p>
      }
      comoFunciona={
        <>
          <FadeIn>
            <Supratitle>Como funciona</Supratitle>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Sessão online de 2h",
                desc: "Análise completa do perfil ao vivo com Fernanda.",
              },
              {
                step: "2",
                title: "Relatório em 48h",
                desc: "Documento escrito com diagnóstico e recomendações priorizadas.",
              },
              {
                step: "3",
                title: "Caminho claro",
                desc: "O que mudar primeiro, o que pode esperar, o que potencializar.",
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border-t-[3px] border-[var(--color-gold)] pt-6">
                  <p className="font-serif text-[40px] text-[var(--color-gold-soft)] leading-none">
                    {s.step}
                  </p>
                  <h3 className="mt-3 font-serif text-[20px] text-[var(--color-foreground)]">
                    {s.title}
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
              O valor desta sessão é abatido integralmente no{" "}
              <strong className="font-medium">Reposicionamento LinkedIn</strong>{" "}
              — se você decidir seguir em frente.
            </p>
          </div>
        </FadeIn>
      }
      ctaFinalHeadline="Quanto mais cedo você souber, mais cedo muda."
      ctaFinalPrimary="Quero agendar meu diagnóstico"
      ctaFinalSupport="Após o preenchimento do formulário, você receberá os links para pagamento e agendamento."
    />
  ),
});
