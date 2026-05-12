import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/conceitos")({
  head: () => ({
    meta: [{ title: "8 Conceitos de Logo — Akila" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: ConceitosPage,
});

const GREEN = "#006039";
const CREAM = "#F2EBD9";
const GOLD = "#B8860B";

const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;
const sans = { fontFamily: "'Inter', sans-serif" } as const;

/* ============ CONCEPT 1 — A as abstract eagle ============ */
function Concept1({ wordColor, taglineColor }: { wordColor: string; taglineColor: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-baseline" style={{ ...serif, color: wordColor, fontSize: 56, fontWeight: 500, letterSpacing: 6 }}>
        {/* Custom A with wing */}
        <svg width="48" height="56" viewBox="0 0 48 56" style={{ marginRight: 2 }}>
          <path
            d="M4 52 L22 6 L40 52"
            fill="none"
            stroke={wordColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="12" y1="36" x2="32" y2="36" stroke={wordColor} strokeWidth="2" />
          {/* wing curve from right leg */}
          <path
            d="M40 52 Q46 30 36 14"
            fill="none"
            stroke={wordColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>KILA</span>
      </div>
      <p style={{ ...sans, color: taglineColor, fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginTop: 14 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEPT 2 — Monogram + Wordmark ============ */
function Concept2({ wordColor, taglineColor }: { wordColor: string; taglineColor: string }) {
  return (
    <div className="flex items-center gap-5">
      <div
        style={{
          width: 64,
          height: 64,
          border: `2px solid ${GOLD}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ ...serif, color: wordColor, fontSize: 38, lineHeight: 1, fontWeight: 500 }}>A</span>
      </div>
      <div className="flex flex-col">
        <span style={{ ...serif, color: wordColor, fontSize: 36, fontWeight: 500, letterSpacing: 4, lineHeight: 1 }}>AKILA</span>
        <div style={{ height: 1, background: GOLD, margin: "8px 0", width: "100%" }} />
        <span style={{ ...sans, color: taglineColor, fontSize: 9, letterSpacing: 4, textTransform: "uppercase" }}>
          Consultoria Executiva
        </span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 3 — Circular Seal ============ */
function Concept3({ wordColor, taglineColor }: { wordColor: string; taglineColor: string }) {
  const size = 220;
  const r = 100;
  const cx = size / 2;
  const cy = size / 2;
  // Curved text path (top arc)
  const topPathId = "c3-top";
  const text = "· CONSULTORIA EXECUTIVA · DESDE 2019 ·";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={GOLD} strokeWidth="1.5" />
      <defs>
        <path
          id={topPathId}
          d={`M ${cx - r + 8},${cy} A ${r - 8},${r - 8} 0 1,1 ${cx + r - 8},${cy}`}
          fill="none"
        />
      </defs>
      <text style={{ ...sans, fontSize: 8, letterSpacing: 3 }} fill={taglineColor}>
        <textPath href={`#${topPathId}`} startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        style={{ ...serif, fontSize: 28, fontWeight: 500, letterSpacing: 3 }}
        fill={wordColor}
      >
        AKILA
      </text>
      {/* ornamental line */}
      <line x1={cx - 30} y1={cy + 18} x2={cx + 30} y2={cy + 18} stroke={GOLD} strokeWidth="0.8" />
      <circle cx={cx} cy={cy + 18} r="1.5" fill={GOLD} />
    </svg>
  );
}

/* ============ CONCEPT 4 — Geometric Eagle ============ */
function Concept4({ wordColor, taglineColor }: { wordColor: string; taglineColor: string }) {
  return (
    <div className="flex flex-col items-center">
      <svg width="60" height="36" viewBox="0 0 60 36">
        {/* wings */}
        <line x1="30" y1="18" x2="6" y2="6" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="30" y1="18" x2="54" y2="6" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />
        {/* body */}
        <line x1="30" y1="14" x2="30" y2="28" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />
        {/* head */}
        <polygon points="30,8 27,14 33,14" fill={GOLD} />
        {/* tail */}
        <line x1="30" y1="28" x2="36" y2="34" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span style={{ ...serif, color: wordColor, fontSize: 36, fontWeight: 500, letterSpacing: 8, marginTop: 14 }}>AKILA</span>
      <p style={{ ...sans, color: taglineColor, fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginTop: 8 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEPT 5 — Heraldic Shield ============ */
function Concept5({ wordColor, taglineColor }: { wordColor: string; taglineColor: string }) {
  return (
    <div className="flex flex-col items-center">
      <svg width="64" height="76" viewBox="0 0 64 76">
        <path
          d="M4 4 L60 4 L60 38 Q60 64 32 72 Q4 64 4 38 Z"
          fill="none"
          stroke={GOLD}
          strokeWidth="2"
        />
        {/* simplified eagle inside */}
        <g transform="translate(32 36)">
          <line x1="0" y1="0" x2="-14" y2="-8" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="0" y1="0" x2="14" y2="-8" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="0" y1="-4" x2="0" y2="10" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="0,-8 -3,-3 3,-3" fill={GOLD} />
        </g>
      </svg>
      <div style={{ width: 64, height: 1, background: GOLD, marginTop: 12 }} />
      <span style={{ ...serif, color: wordColor, fontSize: 36, fontWeight: 500, letterSpacing: 5, marginTop: 10 }}>AKILA</span>
      <p style={{ ...sans, color: taglineColor, fontSize: 9, letterSpacing: 4, textTransform: "uppercase", marginTop: 6 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEPT 6 — Pure Wordmark ============ */
function Concept6({ wordColor, taglineColor }: { wordColor: string; taglineColor: string }) {
  const width = 320;
  return (
    <div className="flex flex-col items-center">
      <div style={{ width }}>
        <div style={{ height: 1, background: GOLD }} />
        <div style={{ height: 3 }} />
        <div style={{ height: 1, background: GOLD }} />
      </div>
      <h2
        style={{
          ...serif,
          color: wordColor,
          fontSize: 48,
          fontWeight: 500,
          letterSpacing: 12,
          margin: "18px 0",
          textAlign: "center",
          paddingLeft: 12,
        }}
      >
        AKILA
      </h2>
      <div style={{ width }}>
        <div style={{ height: 1, background: GOLD }} />
        <div style={{ height: 3 }} />
        <div style={{ height: 1, background: GOLD }} />
      </div>
      <p style={{ ...sans, color: taglineColor, fontSize: 9, letterSpacing: 6, textTransform: "uppercase", marginTop: 14 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEPT 7 — Single Wing from K ============ */
function Concept7({ wordColor, taglineColor }: { wordColor: string; taglineColor: string }) {
  return (
    <div className="flex flex-col items-center">
      <div style={{ position: "relative" }}>
        <span style={{ ...serif, color: wordColor, fontSize: 56, fontWeight: 500, letterSpacing: 4 }}>AKILA</span>
        {/* wing emerging from K top */}
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          style={{ position: "absolute", top: -52, left: 52, pointerEvents: "none" }}
        >
          <path
            d="M10 70 Q40 10 110 8"
            fill="none"
            stroke={GOLD}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* feather tips */}
          <line x1="100" y1="10" x2="108" y2="2" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="88" y1="14" x2="94" y2="4" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="76" y1="20" x2="80" y2="8" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
      <p style={{ ...sans, color: taglineColor, fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginTop: 14 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEPT 8 — Initial A with Crown ============ */
function Concept8({ wordColor, taglineColor }: { wordColor: string; taglineColor: string }) {
  return (
    <div className="flex flex-col items-center">
      <svg width="80" height="22" viewBox="0 0 80 22">
        {/* 5 vertical points, center tallest */}
        <line x1="10" y1="20" x2="10" y2="12" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="20" x2="25" y2="8" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="20" x2="40" y2="2" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="55" y1="20" x2="55" y2="8" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="70" y1="20" x2="70" y2="12" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="20" x2="74" y2="20" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span style={{ ...serif, color: wordColor, fontSize: 42, fontWeight: 500, letterSpacing: 8, marginTop: 10 }}>AKILA</span>
      <p style={{ ...sans, color: taglineColor, fontSize: 9, letterSpacing: 4, textTransform: "uppercase", marginTop: 8 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

const CONCEPTS = [
  { n: 1, name: "O \"A\" como Águia Abstrata", Comp: Concept1 },
  { n: 2, name: "Monograma + Wordmark", Comp: Concept2 },
  { n: 3, name: "Selo Circular", Comp: Concept3 },
  { n: 4, name: "Águia Minimalista Geométrica", Comp: Concept4 },
  { n: 5, name: "Brasão Escudo", Comp: Concept5 },
  { n: 6, name: "Wordmark Puro Premium", Comp: Concept6 },
  { n: 7, name: "Asa Única Integrada", Comp: Concept7 },
  { n: 8, name: "Inicial A com Coroa", Comp: Concept8 },
];

function Stage({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ background: bg, minHeight: 280, padding: "48px 24px" }}
    >
      {children}
    </div>
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
            8 Conceitos de Logo — Akila Consultoria Executiva
          </h1>
          <p style={{ ...sans, color: "#444", marginTop: 12, maxWidth: 640, fontSize: 14, lineHeight: 1.6 }}>
            Cada conceito apresentado em fundo creme (#F2EBD9) e fundo verde (#006039),
            usando exclusivamente a paleta verde, creme e latão.
          </p>
        </header>

        <div className="space-y-0">
          {CONCEPTS.map(({ n, name, Comp }, idx) => (
            <section
              key={n}
              style={{
                borderTop: idx === 0 ? `1px solid ${GOLD}` : undefined,
                borderBottom: `1px solid ${GOLD}`,
                padding: "40px 0",
              }}
            >
              <div className="mb-6 flex items-baseline gap-4">
                <span style={{ ...serif, color: GOLD, fontSize: 32, fontWeight: 500, lineHeight: 1 }}>
                  {String(n).padStart(2, "0")}
                </span>
                <h2 style={{ ...serif, color: GREEN, fontSize: 24, fontWeight: 500, lineHeight: 1 }}>
                  {name}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: `1px solid ${GOLD}` }}>
                <Stage bg={CREAM}>
                  <Comp wordColor={GREEN} taglineColor={GOLD} />
                </Stage>
                <Stage bg={GREEN}>
                  <Comp wordColor={CREAM} taglineColor={GOLD} />
                </Stage>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
