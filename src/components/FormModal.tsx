import { useEffect } from "react";
import { X } from "lucide-react";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  formUrl: string;
  title?: string;
  subtitle?: string;
}

export function FormModal({
  open,
  onClose,
  formUrl,
  title = "Vamos conversar.",
  subtitle = "Preencha abaixo e a Fernanda entra em contato em até 24h.",
}: FormModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const isPlaceholder = formUrl.startsWith("[");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-background p-8 md:p-10 shadow-xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors"
        >
          <X size={22} />
        </button>
        <h2 className="font-serif text-[28px] text-[var(--color-foreground)] mb-2">
          {title}
        </h2>
        <p className="text-[15px] text-[var(--color-muted-foreground)] mb-6">{subtitle}</p>

        {isPlaceholder ? (
          <div className="border border-[var(--color-gold)] bg-[var(--color-gold-soft)]/40 p-6 text-sm text-[var(--color-foreground)]">
            Formulário em configuração. Por favor, entre em contato pelo email{" "}
            <a className="underline text-[var(--color-gold)]" href="mailto:femoura007@gmail.com">
              femoura007@gmail.com
            </a>{" "}
            ou agende uma conversa direta.
            <div className="mt-2 text-xs opacity-60">URL pendente: {formUrl}</div>
          </div>
        ) : (
          <iframe
            src={formUrl}
            className="w-full min-h-[520px] border-0"
            title="Formulário de contato"
          >
            Carregando…
          </iframe>
        )}
      </div>
    </div>
  );
}
