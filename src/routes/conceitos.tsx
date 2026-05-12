import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/conceitos")({
  head: () => ({
    meta: [{ title: "AKILA — Estudo Tipográfico" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Playfair+Display:wght@400;700&family=Inter:wght@400;500&display=swap",
      },
    ],
  }),
  component: ConceitosPage,
});

const GREEN = "#006039";
const CREAM = "#F2EBD9";
const GOLD = "#B8860B";
const GREEN_DEEP = "#00301C";
const CREAM_BRIGHT = "#FBF6E8";

type ShadowVariant = "onLight" | "onDark";
const SHADOWS: Record<ShadowVariant, string> = {
  onLight:
    "0 0 1px rgba(184,134,11,0.35), 0 1px 0 rgba(0,48,28,0.25)",
  onDark: "0 0 1px rgba(251,246,232,0.45)",
};

type TypographyProps = {
  font: string;
  weight: number;
  size: number;
  spacing: number;
  italic?: boolean;
};

function Wordmark({
  font,
  weight,
  size,
  spacing,
  italic,
  color,
  shadow,
}: TypographyProps & { color: string; shadow?: ShadowVariant }) {
  const responsiveSize = `clamp(${Math.round(size * 0.62)}px, ${(size / 10).toFixed(2)}vw + ${Math.round(size * 0.45)}px, ${size}px)`;
  const spacingEm = `${(spacing / size).toFixed(3)}em`;
  return (
    <span
      style={{
        fontFamily: font,
        fontWeight: weight,
        fontSize: responsiveSize,
        letterSpacing: spacingEm,
        fontStyle: italic ? "italic" : "normal",
        color,
        lineHeight: 1,
        fontKerning: "normal",
        fontFeatureSettings: '"kern" 1, "liga" 0, "clig" 0',
        paddingLeft: spacingEm,
        whiteSpace: "nowrap",
        textShadow: shadow ? SHADOWS[shadow] : undefined,
      }}
    >
      AKILA
    </span>
  );
}

/**
 * Swash dourado refinado — duas curvas finas e espelhadas saindo do centro,
 * com leve queda nas pontas (lembra asas abertas / águia em voo estilizada).
 * Pequeno detalhe central com a cabeça/bico discreto.
 */
function EagleSwash({ color, width = 340 }: { color: string; width?: number }) {
  const H = 28;
  const W = width;
  const cx = W / 2;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden>
      {/* Asa esquerda — curva entra pela borda, sobe ao centro */}
      <path
        d={`M 6 18
            C ${W * 0.18} 10, ${W * 0.32} 8, ${cx - 14} 14`}
        fill="none"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Asa direita — espelhada */}
      <path
        d={`M ${W - 6} 18
            C ${W * 0.82} 10, ${W * 0.68} 8, ${cx + 14} 14`}
        fill="none"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Detalhe central — cabeça e bico minimalistas */}
      <circle cx={cx} cy={13} r="1.6" fill={color} />
      <path
        d={`M ${cx + 1.5} 13 L ${cx + 7} 12`}
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Cauda discreta abaixo do centro */}
      <line
        x1={cx}
        y1="14"
        x2={cx}
        y2="22"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Lockup({
  typography,
  wordColor,
  accentColor,
  shadow,
}: {
  typography: TypographyProps;
  wordColor: string;
  accentColor: string;
  shadow?: ShadowVariant;
}) {
  return (
    <div className="flex flex-col items-center">
      <Wordmark {...typography} color={wordColor} shadow={shadow} />
      <div style={{ marginTop: 14 }}>
        <EagleSwash color={accentColor} width={360} />
      </div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          color: accentColor,
          fontSize: 10,
          letterSpacing: 5,
          textTransform: "uppercase",
          marginTop: 14,
        }}
      >
        Consultoria Executiva
      </p>
    </div>
  );
}

function Stage({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ background: bg, minHeight: 280, padding: "56px 24px" }}
    >
      {children}
    </div>
  );
}

const BASE: TypographyProps = {
  font: "'Cormorant Garamond', serif",
  weight: 700,
  size: 56,
  spacing: 16,
};

const VARIATIONS: { n: number; name: string; subtitle: string; typography: TypographyProps }[] = [
  {
    n: 1,
    name: "Cormorant Garamond Light",
    subtitle: "Weight 300 · 58px · tracking 14",
    typography: { font: "'Cormorant Garamond', serif", weight: 300, size: 58, spacing: 14 },
  },
  {
    n: 2,
    name: "Cormorant Garamond SemiBold",
    subtitle: "Weight 600 · 58px · tracking 10",
    typography: { font: "'Cormorant Garamond', serif", weight: 600, size: 58, spacing: 10 },
  },
  {
    n: 3,
    name: "Playfair Display Regular",
    subtitle: "Weight 400 · 54px · tracking 12",
    typography: { font: "'Playfair Display', serif", weight: 400, size: 54, spacing: 12 },
  },
  {
    n: 4,
    name: "Playfair Display Bold",
    subtitle: "Weight 700 · 54px · tracking 8",
    typography: { font: "'Playfair Display', serif", weight: 700, size: 54, spacing: 8 },
  },
  {
    n: 5,
    name: "Cormorant Espaçamento Extremo",
    subtitle: "Weight 400 · 48px · tracking 22",
    typography: { font: "'Cormorant Garamond', serif", weight: 400, size: 48, spacing: 22 },
  },
  {
    n: 6,
    name: "Cormorant Garamond Italic",
    subtitle: "Weight 400 italic · 58px · tracking 10",
    typography: { font: "'Cormorant Garamond', serif", weight: 400, size: 58, spacing: 10, italic: true },
  },
];

const sans = { fontFamily: "'Inter', sans-serif" } as const;
const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;

function Block({
  number,
  title,
  subtitle,
  typography,
}: {
  number: string;
  title: string;
  subtitle?: string;
  typography: TypographyProps;
}) {
  return (
    <section style={{ borderBottom: `1px solid ${GOLD}`, padding: "40px 0" }}>
      <div className="mb-6 flex items-baseline gap-4 flex-wrap">
        <span style={{ ...serif, color: GOLD, fontSize: 32, fontWeight: 500, lineHeight: 1 }}>
          {number}
        </span>
        <h2 style={{ ...serif, color: GREEN, fontSize: 24, fontWeight: 500, lineHeight: 1 }}>
          {title}
        </h2>
        {subtitle ? (
          <span
            style={{
              ...sans,
              color: GOLD,
              fontSize: 10,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginLeft: "auto",
            }}
          >
            {subtitle}
          </span>
        ) : null}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: `1px solid ${GOLD}` }}>
        <Stage bg={CREAM}>
          <Lockup typography={typography} wordColor={GREEN_DEEP} accentColor={GOLD} shadow="onLight" />
        </Stage>
        <Stage bg={GREEN}>
          <Lockup typography={typography} wordColor={CREAM_BRIGHT} accentColor={GOLD} shadow="onDark" />
        </Stage>
      </div>
    </section>
  );
}

function ConceitosPage() {
  return (
    <div style={{ background: CREAM, minHeight: "100vh" }}>
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <header className="mb-14">
          <p style={{ ...sans, color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
            Direção de marca
          </p>
          <h1 style={{ ...serif, color: GREEN, fontSize: 48, fontWeight: 500, marginTop: 10, letterSpacing: 2 }}>
            AKILA — Estudo Tipográfico
          </h1>
          <p style={{ ...sans, color: "#444", marginTop: 12, maxWidth: 640, fontSize: 14, lineHeight: 1.6 }}>
            Versão refinada do logo apresentada como base, seguida por 6 variações tipográficas
            mantendo o mesmo swash dourado e tagline. Cada peça em fundo creme (#F2EBD9) e fundo
            verde (#006039), usando exclusivamente a paleta verde, creme e latão.
          </p>
        </header>

        <div style={{ borderTop: `1px solid ${GOLD}` }}>
          <Block number="00" title="Versão Refinada (Base)" subtitle="Cormorant Garamond 400 · 56px · tracking 12" typography={BASE} />
          {VARIATIONS.map((v) => (
            <Block
              key={v.n}
              number={String(v.n).padStart(2, "0")}
              title={v.name}
              subtitle={v.subtitle}
              typography={v.typography}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
