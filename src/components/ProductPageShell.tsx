import type { ReactNode } from "react";
import { Section, Supratitle } from "@/components/Section";
import { CtaDuplo } from "@/components/CtaDuplo";
import { FadeIn } from "@/components/FadeIn";

interface ProductPageProps {
  supratitle: string;
  headline: ReactNode;
  subheadline: string;
  heroPrimary: string;
  heroSecondary: string;
  formUrl: string;
  paraQuemTitle?: string;
  paraQuem: ReactNode;
  problemaTitle: string;
  problema: ReactNode;
  transformacaoTitle: string;
  transformacao: ReactNode;
  comoFunciona?: ReactNode;
  extraBlock?: ReactNode;
  ctaFinalHeadline: string;
  ctaFinalPrimary: string;
  ctaFinalSecondary: string;
  topBanner?: ReactNode;
}

export function ProductPageShell({
  supratitle,
  headline,
  subheadline,
  heroPrimary,
  heroSecondary,
  formUrl,
  paraQuemTitle = "Para quem é",
  paraQuem,
  problemaTitle,
  problema,
  transformacaoTitle,
  transformacao,
  comoFunciona,
  extraBlock,
  ctaFinalHeadline,
  ctaFinalPrimary,
  ctaFinalSecondary,
  topBanner,
}: ProductPageProps) {
  return (
    <>
      {topBanner}

      {/* HERO */}
      <Section>
        <div className="max-w-4xl">
          <FadeIn>
            <Supratitle>{supratitle}</Supratitle>
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mt-6">{headline}</h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="mt-6 text-[19px] text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed">
              {subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={360}>
            <div className="mt-10">
              <CtaDuplo
                primaryLabel={heroPrimary}
                secondaryLabel={heroSecondary}
                formUrl={formUrl}
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* PARA QUEM */}
      <Section className="!py-20">
        <div className="max-w-3xl">
          <FadeIn>
            <Supratitle>{paraQuemTitle}</Supratitle>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-6 text-[18px] leading-[1.8] text-[var(--color-foreground)]">
              {paraQuem}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* PROBLEMA (dark) */}
      <Section variant="dark">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[var(--color-gold)]">{problemaTitle}</h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-8 text-[17px] leading-[1.8] text-[var(--color-on-dark)] space-y-5">
              {problema}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* TRANSFORMAÇÃO */}
      <Section>
        <div className="max-w-3xl">
          <FadeIn>
            <h2>{transformacaoTitle}</h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-8 text-[18px] leading-[1.8] text-[var(--color-muted-foreground)] space-y-5">
              {transformacao}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      {comoFunciona && <Section variant="light">{comoFunciona}</Section>}

      {/* BLOCO EXTRA (credencial, abatimento, etc) */}
      {extraBlock && <Section>{extraBlock}</Section>}

      {/* CTA FINAL */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[var(--color-on-dark)]">{ctaFinalHeadline}</h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-10 flex justify-center">
              <CtaDuplo
                primaryLabel={ctaFinalPrimary}
                secondaryLabel={ctaFinalSecondary}
                formUrl={formUrl}
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
