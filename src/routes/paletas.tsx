import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/paletas")({
  head: () => ({
    meta: [
      { title: "Teste de Paletas — Akila" },
      { name: "description", content: "Página interna de exploração de paletas de cor da identidade visual da Akila." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PaletasPage,
});

type Palette = {
  name: string;
  dark: string;
  light: string;
  gold: string;
  textOnDark: string;
  textOnLight: string;
};

const PALETAS: Palette[] = [
  {
    name: "H · Esmeralda Rolex + Creme Harrods + Latão",
    dark: "#006039",
    light: "#F2EBD9",
    gold: "#B8860B",
    textOnDark: "#F2EBD9",
    textOnLight: "#1A1A1A",
  },
];

const HEADLINE = "Você chegou longe. O próximo passo precisa ser certo.";

function PaletteColumn({ p }: { p: Palette }) {
  return (
    <div className="flex flex-col border border-black/10">
      {/* Cabeçalho */}
      <div className="bg-white px-6 py-4 border-b border-black/10">
        <p
          className="text-[11px] tracking-[0.25em] uppercase"
          style={{ color: "#666" }}
        >
          Paleta
        </p>
        <h2
          className="font-serif text-[22px] mt-1"
          style={{ color: "#1A1A1A" }}
        >
          {p.name}
        </h2>
        <div className="mt-3 flex gap-1.5">
          {[p.dark, p.light, p.gold].map((c) => (
            <div key={c} className="flex-1">
              <div
                className="h-8 border border-black/10"
                style={{ backgroundColor: c }}
              />
              <p
                className="text-[10px] mt-1 font-mono"
                style={{ color: "#666" }}
              >
                {c.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero claro */}
      <div className="px-8 py-14" style={{ backgroundColor: p.light }}>
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-5"
          style={{ color: p.gold }}
        >
          Estrategista de carreira
        </p>
        <h3
          className="font-serif text-[28px] leading-[1.15]"
          style={{ color: p.textOnLight, fontWeight: 500 }}
        >
          {HEADLINE}
        </h3>
        <p
          className="mt-5 text-[14px] leading-relaxed"
          style={{ color: p.textOnLight, opacity: 0.7 }}
        >
          Fernanda Moura. 26 anos de carreira executiva em multinacionais.
        </p>
        <button
          className="mt-7 px-6 py-3 text-[14px] font-semibold tracking-wide text-white"
          style={{ backgroundColor: p.gold }}
        >
          Quero conversar
        </button>
      </div>

      {/* Hero escuro invertido */}
      <div className="px-8 py-14" style={{ backgroundColor: p.dark }}>
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-5"
          style={{ color: p.gold }}
        >
          Quem é Fernanda Moura
        </p>
        <h3
          className="font-serif text-[28px] leading-[1.15]"
          style={{ color: p.textOnDark, fontWeight: 500 }}
        >
          {HEADLINE}
        </h3>
        <p
          className="mt-5 text-[14px] leading-relaxed"
          style={{ color: p.textOnDark, opacity: 0.75 }}
        >
          Estratégias de carreira para quem joga no alto nível.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <button
            className="px-6 py-3 text-[14px] font-semibold tracking-wide text-white"
            style={{ backgroundColor: p.gold }}
          >
            Quero conversar
          </button>
          <button
            className="px-6 py-3 text-[14px] font-medium tracking-wide border"
            style={{ borderColor: p.textOnDark, color: p.textOnDark }}
          >
            Agendar 30 min
          </button>
        </div>
      </div>
    </div>
  );
}

function PaletasPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-10 py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-500">
            Teste de direção
          </p>
          <h1
            className="font-serif text-[40px] mt-2"
            style={{ color: "#1A1A1A", fontWeight: 500 }}
          >
            Paletas — Akila Consultoria
          </h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            Três variações de paleta verde + dourado, cada uma mostrada em
            seção clara (CTA dourado) e invertida (fundo verde escuro).
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PALETAS.map((p) => (
            <PaletteColumn key={p.name} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
