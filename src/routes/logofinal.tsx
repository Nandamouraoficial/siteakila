import { createFileRoute } from "@tanstack/react-router";
import logoLight from "@/assets/logo-akila-v2.png";
import logoDark from "@/assets/logo-akila-v2-on-dark.png";

export const Route = createFileRoute("/logofinal")({
  head: () => ({
    meta: [
      { title: "Logo Final — AKILA" },
      { name: "description", content: "Página interna com a versão final do logotipo da Akila Consultoria em diferentes paletas." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LogoFinalPage,
});

type Palette = {
  name: string;
  bg: string;
  variant: "light" | "dark";
  source: "Atual" | "Brand book";
  swatches: string[];
  note?: string;
};

const PALETTES: Palette[] = [
  // ATUAL (cores do site /conceitos)
  {
    name: "Atual · Cinza com Preto e Dourado",
    bg: "#A6A8AB",
    variant: "dark",
    source: "Atual",
    swatches: ["#A6A8AB", "#000000", "#B8860B"],
    note: "Neutro sofisticado com acento dourado",
  },
  {
    name: "Atual · Esmeralda Rolex",
    bg: "#006039",
    variant: "dark",
    source: "Atual",
    swatches: ["#006039", "#FBF6E8", "#B8860B"],
    note: "Como aparece no site hoje",
  },

  // BRAND BOOK Fernanda Moura — paleta oficial
  {
    name: "Light Blue",
    bg: "#14B9DA",
    variant: "dark",
    source: "Brand book",
    swatches: ["#14B9DA", "#FFFFFF", "#00859E"],
    note: "Brand cor primária 1",
  },
  {
    name: "Sea Blue",
    bg: "#00859E",
    variant: "dark",
    source: "Brand book",
    swatches: ["#00859E", "#FFFFFF", "#14B9DA"],
    note: "Brand cor primária 2",
  },
  {
    name: "Purple Shiny",
    bg: "#593199",
    variant: "dark",
    source: "Brand book",
    swatches: ["#593199", "#FFFFFF", "#864765"],
    note: "Brand cor secundária",
  },
  {
    name: "Grape",
    bg: "#864765",
    variant: "dark",
    source: "Brand book",
    swatches: ["#864765", "#FFFFFF", "#E4817F"],
    note: "Brand cor secundária",
  },
  {
    name: "Salmon",
    bg: "#E4817F",
    variant: "light",
    source: "Brand book",
    swatches: ["#E4817F", "#912626", "#FFFFFF"],
    note: "Brand cor de destaque",
  },
  {
    name: "Wine",
    bg: "#912626",
    variant: "dark",
    source: "Brand book",
    swatches: ["#912626", "#FFFFFF", "#E4817F"],
    note: "Brand cor de destaque",
  },
  {
    name: "White",
    bg: "#FFFFFF",
    variant: "light",
    source: "Brand book",
    swatches: ["#FFFFFF", "#000000", "#A6A8AB"],
    note: "Brand neutra",
  },
  {
    name: "Cool Grey",
    bg: "#E6E7E8",
    variant: "light",
    source: "Brand book",
    swatches: ["#E6E7E8", "#000000", "#A6A8AB"],
    note: "Brand neutra",
  },
  {
    name: "Deep Grey",
    bg: "#A6A8AB",
    variant: "light",
    source: "Brand book",
    swatches: ["#A6A8AB", "#000000", "#FFFFFF"],
    note: "Brand neutra",
  },
  {
    name: "Black",
    bg: "#000000",
    variant: "dark",
    source: "Brand book",
    swatches: ["#000000", "#FFFFFF", "#A6A8AB"],
    note: "Brand neutra",
  },
];

function Card({ p }: { p: Palette }) {
  const src = p.variant === "light" ? logoLight : logoDark;
  return (
    <div className="flex flex-col border border-black/10 overflow-hidden">
      <div
        className="flex items-center justify-center"
        style={{ background: p.bg, minHeight: 320, padding: "60px 24px" }}
      >
        <img src={src} alt="Logo Akila" style={{ height: 150, width: "auto" }} />
      </div>
      <div className="bg-white px-5 py-4 border-t border-black/10">
        <div className="flex items-center justify-between gap-3">
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 18,
              color: "#1A1A1A",
              lineHeight: 1.2,
            }}
          >
            {p.name}
          </h3>
          <span
            className="text-[9px] tracking-[0.25em] uppercase px-2 py-1 border whitespace-nowrap"
            style={{
              color: p.source === "Atual" ? "#006039" : "#8B6308",
              borderColor: p.source === "Atual" ? "#006039" : "#8B6308",
            }}
          >
            {p.source}
          </span>
        </div>
        {p.note ? (
          <p className="mt-1.5 text-[12px] text-neutral-600">{p.note}</p>
        ) : null}
        <div className="mt-3 flex gap-1.5">
          {p.swatches.map((c, i) => (
            <div key={i} className="flex-1">
              <div className="h-6 border border-black/10" style={{ backgroundColor: c }} />
              <p className="text-[9px] mt-1 font-mono text-neutral-500">{c.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoFinalPage() {
  const atual = PALETTES.filter((p) => p.source === "Atual");
  const brand = PALETTES.filter((p) => p.source === "Brand book");
  return (
    <div className="min-h-screen bg-white px-6 md:px-10 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-500" style={{ fontWeight: 600 }}>
            Direção de marca
          </p>
          <h1
            className="font-serif text-[40px] mt-2"
            style={{ color: "#1A1A1A", fontWeight: 600, letterSpacing: 1 }}
          >
            Logo Final — AKILA
          </h1>
          <p className="mt-3 text-neutral-600 max-w-2xl text-[14px] leading-relaxed">
            Logo escolhido apresentado nas <strong>cores atuais do site</strong> (Esmeralda + Creme + Latão)
            e em <strong>todas as cores do brand book Fernanda Moura</strong>. A versão para fundos
            escuros tem o wordmark em creme luminoso com halo, mantendo o swash dourado original.
          </p>
        </header>

        <section className="mb-14">
          <h2
            className="font-serif mb-5"
            style={{ color: "#006039", fontSize: 22, fontWeight: 600 }}
          >
            Cores atuais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {atual.map((p) => (
              <Card key={p.name} p={p} />
            ))}
          </div>
        </section>

        <section>
          <h2
            className="font-serif mb-5"
            style={{ color: "#8B6308", fontSize: 22, fontWeight: 600 }}
          >
            Variações brand book
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {brand.map((p) => (
              <Card key={p.name} p={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
