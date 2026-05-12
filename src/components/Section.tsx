import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
  id?: string;
}

export function Section({ children, variant = "light", className = "", id }: SectionProps) {
  const bg =
    variant === "dark"
      ? "bg-[var(--color-surface-dark)] text-[var(--color-on-dark)]"
      : "bg-background text-[var(--color-muted-foreground)]";
  return (
    <section id={id} className={`${bg} py-20 md:py-24 px-6 md:px-10 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Supratitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`supratitle ${className}`}>{children}</p>;
}
