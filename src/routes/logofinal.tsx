import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/logofinal")({
  head: () => ({
    meta: [{ title: "Logo Final — AKILA" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: LogoFinalPage,
});

type Palette = {
  name: string;
  bg: string;
  word: string;
  accent: string;
  shadow: "onLight" | "onDark";
  source: "Atual" | "Brand book";
  note?: string;
};

const WORD_SHADOWS: Record<"onLight" | "onDark", string> = {
  onLight: "0 0 0.6px rgba(0,0,0,0.55), 0 1px 0 rgba(0,0,0,0.18)",
  onDark: "0 0 0.6px rgba(255,255,255,0.85), 0 0 8px rgba(255,255,255,0.18)",
};
const GOLD_SHADOWS: Record<"onLight" | "onDark", string> = {
  onLight: "0 0 0.5px rgba(0,0,0,0.45), 0 1px 0 rgba(0,0,0,0.18)",
  onDark: "0 0 0.5px rgba(255,255,255,0.45), 0 0 6px rgba(184,134,11,0.25)",
};
const SWASH_FILTERS: Record<"onLight" | "onDark", string> = {
  onLight:
    "drop-shadow(0 0 0.6px rgba(0,0,0,0.4)) drop-shadow(0 1px 0 rgba(0,0,0,0.15))",
  onDark:
    "drop-shadow(0 0 0.6px rgba(255,255,255,0.5)) drop-shadow(0 0 4px rgba(184,134,11,0.3))",
};

const PALETTES: Palette[] = [
  // ---- ATUAL (Palette H — site/conceitos) ----
  {
    name: "Atual · Creme Harrods",
    bg: "#F2EBD9",
    word: "#00301C",
    accent: "#B8860B",
    shadow: "onLight",
    source: "Atual",
    note: "Como aparece em /conceitos hoje",
  },
  {
    name: "Atual · Esmeralda Rolex",
    bg: "#006039",
    word: "#FBF6E8",
    accent: "#B8860B",
    shadow: "onDark",
    source: "Atual",
    note: "Como aparece em /conceitos hoje",
  },

  // ---- VARIAÇÕES TIPO BRAND BOOK ----
  {
    name: "Preto absoluto + Ouro",
    bg: "#0A0A0A",
    word: "#F5EFE0",
    accent: "#C9A14A",
    shadow: "onDark",
    source: "Brand book",
    note: "Luxury clássico (Cartier / Rolls-Royce)",
  },
  {
    name: "Marfim + Esmeralda",
    bg: "#FBF6E8",
    word: "#0F4D33",
    accent: "#B8860B",
    shadow: "onLight",
    source: "Brand book",
    note: "Editorial / papelaria fina",
  },
  {
    name: "Off-white + Esmeralda",
    bg: "#FFFFFF",
    word: "#006039",
    accent: "#B8860B",
    shadow: "onLight",
    source: "Brand book",
    note: "Aplicação digital / favicon",
  },
  {
    name: "Verde profundo + Champagne",
    bg: "#003724",
    word: "#EADBB7",
    accent: "#D4B872",
    shadow: "onDark",
    source: "Brand book",
    note: "Tom mais formal e calmo",
  },
  {
    name: "Bege papel + Carvão",
    bg: "#E8DFC8",
    word: "#1A1A1A",
    accent: "#9B7A2E",
    shadow: "onLight",
    source: "Brand book",
    note: "Print / cartão de visita",
  },
  {
    name: "Esmeralda + Ouro pleno",
    bg: "#006039",
    word: "#E8C870",
    accent: "#E8C870",
    shadow: "onDark",
    source: "Brand book",
    note: "Monocromático dourado",
  },
];

function Wordmark({ color, shadow }: { color: string; shadow: "onLight" | "onDark" }) {
  const size = 56;
  const spacing = 16;
  const responsiveSize = `clamp(${Math.round(size * 0.62)}px, ${(size / 10).toFixed(2)}vw + ${Math.round(size * 0.45)}px, ${size}px)`;
  const spacingEm = `${(spacing / size).toFixed(3)}em`;
  return (
    <span
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 700,
        fontSize: responsiveSize,
        letterSpacing: spacingEm,
        color,
        lineHeight: 1,
        fontKerning: "normal",
        fontFeatureSettings: '"kern" 1, "liga" 0, "clig" 0',
        paddingLeft: spacingEm,
        whiteSpace: "nowrap",
        textShadow: WORD_SHADOWS[shadow],
      }}
    >
      AKILA
    </span>
  );
}

function EagleSwash({ color, shadow }: { color: string; shadow: "onLight" | "onDark" }) {
  const W = 360;
  const H = 28;
  const cx = W / 2;
  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden
      style={{ filter: SWASH_FILTERS[shadow] }}
    >
      <path d={`M 6 18 C ${W * 0.18} 10, ${W * 0.32} 8, ${cx - 14} 14`} fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d={`M ${W - 6} 18 C ${W * 0.82} 10, ${W * 0.68} 8, ${cx + 14} 14`} fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx={cx} cy={13} r="1.6" fill={color} />
      <path d={`M ${cx + 1.5} 13 L ${cx + 7} 12`} stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <line x1={cx} y1="14" x2={cx} y2="22" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function Lockup({ p }: { p: Palette }) {
  return (
    <div className="flex flex-col items-center">
      <Wordmark color={p.word} shadow={p.shadow} />
      <div style={{ marginTop: 14 }}>
        <EagleSwash color={p.accent} shadow={p.shadow} />
      </div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          color: p.accent,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 5,
          textTransform: "uppercase",
          marginTop: 14,
          textShadow: GOLD_SHADOWS[p.shadow],
        }}
      >
        Consultoria Executiva
      </p>
    </div>
  );
}

function Card({ p }: { p: Palette }) {
  return (
    <div className="flex flex-col border border-black/10 overflow-hidden">
      <div
        className="flex items-center justify-center"
        style={{ background: p.bg, minHeight: 320, padding: "60px 24px" }}
      >
        <Lockup p={p} />
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
            className="text-[9px] tracking-[0.25em] uppercase px-2 py-1 border"
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
          {[p.bg, p.word, p.accent].map((c, i) => (
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
            Wordmark Cormorant Garamond 700 · 56px · tracking 16 com swash dourado e tagline.
            Apresentado nas cores atuais do site (Esmeralda + Creme + Latão) e em variações
            tipo brand book. Anexe seu brand book aqui no chat para eu substituir as variações
            pelas cores certas.
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
