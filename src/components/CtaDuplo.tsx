import { useState } from "react";
import { CALENDLY_URL } from "@/lib/site-config";
import { FormModal } from "./FormModal";

interface CtaDuploProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  formUrl: string;
  modalTitle?: string;
  modalSubtitle?: string;
  align?: "left" | "center";
  variant?: "onLight" | "onDark";
  singleMode?: boolean; // só mostra primário (ex: lista de espera)
}

export function CtaDuplo({
  primaryLabel = "Quero conversar",
  secondaryLabel = "Agendar 30 minutos",
  formUrl,
  modalTitle,
  modalSubtitle,
  align = "left",
  variant = "onLight",
  singleMode = false,
}: CtaDuploProps) {
  const [open, setOpen] = useState(false);

  const wrapper =
    align === "center"
      ? "flex flex-col sm:flex-row gap-4 justify-center items-center"
      : "flex flex-col sm:flex-row gap-4";

  const secondaryClasses =
    variant === "onDark"
      ? "border border-[var(--color-on-dark)] text-[var(--color-on-dark)] hover:bg-[var(--color-on-dark)] hover:text-[var(--color-surface-dark)]"
      : "border border-[var(--color-surface-dark)] text-[var(--color-surface-dark)] bg-transparent hover:bg-[var(--color-surface-dark)] hover:text-[var(--color-on-dark)]";

  return (
    <>
      <div className={wrapper}>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center bg-[var(--color-gold)] text-white px-7 py-3.5 text-[15px] font-semibold tracking-wide transition-colors hover:bg-[var(--color-foreground)]"
        >
          {primaryLabel}
        </button>
        {!singleMode && (
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-medium tracking-wide transition-colors ${secondaryClasses}`}
          >
            {secondaryLabel}
          </a>
        )}
      </div>
      <FormModal
        open={open}
        onClose={() => setOpen(false)}
        formUrl={formUrl}
        title={modalTitle}
        subtitle={modalSubtitle}
      />
    </>
  );
}
