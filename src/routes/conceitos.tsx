import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/conceitos")({
  head: () => ({
    meta: [{ title: "Conceitos de Logo — Akila" }],
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

type Props = { wordColor: string; taglineColor: string; lineColor: string };

/* ============ CONCEITO 1 — Dupla Linha com Movimento ============ */
function Concept1({ wordColor, taglineColor, lineColor }: Props) {
  const W = 420;
  return (
    <div className="flex flex-col items-center" style={{ width: W }}>
      {/* duas linhas paralelas acima */}
      <div style={{ width: W }}>
        <div style={{ height: 1, background: lineColor }} />
        <div style={{ height: 4 }} />
        <div style={{ height: 1, background: lineColor }} />
      </div>
      <h2 style={{ ...serif, color: wordColor, fontSize: 52, fontWeight: 500, letterSpacing: 10, margin: "16px 0", paddingLeft: 10 }}>
        AKILA
      </h2>
      {/* duas linhas abaixo, a inferior com curvatura ascendente à direita */}
      <svg width={W} height="14" viewBox={`0 0 ${W} 14`}>
        <line x1="0" y1="2" x2={W} y2="2" stroke={lineColor} strokeWidth="1" />
        <path
          d={`M 0 8 L ${W * 0.8} 8 Q ${W * 0.9} 8 ${W} 2`}
          fill="none"
          stroke={lineColor}
          strokeWidth="1"
        />
      </svg>
      <p style={{ ...sans, color: taglineColor, fontSize: 10, letterSpacing: 5, textTransform: "uppercase", marginTop: 14 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEITO 2 — Dupla Linha com Diamante ============ */
function Concept2({ wordColor, taglineColor, lineColor }: Props) {
  const W = 420;
  const half = W / 2;
  const gap = 8; // diamond size
  const segEnd = half - gap; // line end before diamond
  const segStart = half + gap;
  const DoubleWithDiamond = (
    <svg width={W} height="14" viewBox={`0 0 ${W} 14`}>
      {/* top line */}
      <line x1="0" y1="2" x2={segEnd} y2="2" stroke={lineColor} strokeWidth="1" />
      <line x1={segStart} y1="2" x2={W} y2="2" stroke={lineColor} strokeWidth="1" />
      {/* bottom line */}
      <line x1="0" y1="8" x2={segEnd} y2="8" stroke={lineColor} strokeWidth="1" />
      <line x1={segStart} y1="8" x2={W} y2="8" stroke={lineColor} strokeWidth="1" />
      {/* diamond centered between the two lines (at y=5) */}
      <polygon points={`${half},1 ${half + 4},5 ${half},9 ${half - 4},5`} fill={lineColor} />
    </svg>
  );
  return (
    <div className="flex flex-col items-center" style={{ width: W }}>
      {DoubleWithDiamond}
      <h2 style={{ ...serif, color: wordColor, fontSize: 52, fontWeight: 500, letterSpacing: 10, margin: "16px 0", paddingLeft: 10 }}>
        AKILA
      </h2>
      {DoubleWithDiamond}
      <p style={{ ...sans, color: taglineColor, fontSize: 10, letterSpacing: 5, textTransform: "uppercase", marginTop: 14 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEITO 3 — Wordmark com Linha Ascendente Única ============ */
function Concept3({ wordColor, taglineColor, lineColor }: Props) {
  const W = 460;
  return (
    <div className="flex flex-col items-start" style={{ width: W }}>
      <h2 style={{ ...serif, color: wordColor, fontSize: 56, fontWeight: 500, letterSpacing: 12, margin: 0, paddingLeft: 12 }}>
        AKILA
      </h2>
      <svg width={W} height="20" viewBox={`0 0 ${W} 20`} style={{ marginTop: 10 }}>
        <path
          d={`M 0 16 L ${W * 0.7} 16 L ${W} 4`}
          fill="none"
          stroke={lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <p
        style={{
          ...sans,
          color: taglineColor,
          fontSize: 10,
          letterSpacing: 5,
          textTransform: "uppercase",
          marginTop: 10,
          width: W,
          textAlign: "right",
        }}
      >
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEITO 4 — Selo Circular Premium ============ */
function Concept4({ wordColor, taglineColor, lineColor }: Props) {
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const r = (size - 4) / 2;

  // top arc: from 200° to 340°, sweep clockwise
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const pt = (deg: number, rr = r - 10) => ({
    x: cx + rr * Math.cos(toRad(deg)),
    y: cy + rr * Math.sin(toRad(deg)),
  });
  // SVG y axis is inverted; "topo" = negative y. 200°..340° in screen coords = lower arc.
  // We want the words to follow the TOP edge — use 200°..340° but with negative angles (above center).
  // Easier: top arc from 200° to 340° measured from positive x going CCW upward.
  // We'll draw arcs explicitly:
  const topStart = pt(200);
  const topEnd = pt(340);
  const bottomStart = pt(160);
  const bottomEnd = pt(20);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={lineColor} strokeWidth="1.5" />
      <defs>
        {/* top arc path: from (200°) sweeping clockwise (above center) to (340°) -- using large-arc flags */}
        <path
          id="c4-top"
          d={`M ${topStart.x} ${topStart.y} A ${r - 10} ${r - 10} 0 1 1 ${topEnd.x} ${topEnd.y}`}
          fill="none"
        />
        <path
          id="c4-bottom"
          d={`M ${bottomStart.x} ${bottomStart.y} A ${r - 10} ${r - 10} 0 0 0 ${bottomEnd.x} ${bottomEnd.y}`}
          fill="none"
        />
      </defs>
      <text style={{ ...sans, fontSize: 8, letterSpacing: 3 }} fill={taglineColor}>
        <textPath href="#c4-top" startOffset="50%" textAnchor="middle">
          CONSULTORIA EXECUTIVA
        </textPath>
      </text>
      <text style={{ ...sans, fontSize: 7, letterSpacing: 2 }} fill={taglineColor}>
        <textPath href="#c4-bottom" startOffset="50%" textAnchor="middle">
          · BRASIL · DESDE 2019 ·
        </textPath>
      </text>
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        style={{ ...serif, fontSize: 36, fontWeight: 500, letterSpacing: 8 }}
        fill={wordColor}
      >
        AKILA
      </text>
      <line x1={cx - 20} y1={cy + 22} x2={cx - 4} y2={cy + 22} stroke={lineColor} strokeWidth="1" />
      <line x1={cx + 4} y1={cy + 22} x2={cx + 20} y2={cy + 22} stroke={lineColor} strokeWidth="1" />
      <circle cx={cx} cy={cy + 22} r="1.5" fill={lineColor} />
    </svg>
  );
}

/* ============ CONCEITO 5 — Monograma A Aberto + Wordmark ============ */
function Concept5({ wordColor, taglineColor, lineColor }: Props) {
  // Open square: 8 segments, 10px gap at each corner
  const S = 56;
  const g = 10;
  return (
    <div className="flex items-center gap-5">
      <div style={{ width: S, height: S, position: "relative" }}>
        <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`}>
          {/* top: two segments with gaps at corners */}
          <line x1={g} y1="0.75" x2={S / 2 - 4} y2="0.75" stroke={lineColor} strokeWidth="1.5" />
          <line x1={S / 2 + 4} y1="0.75" x2={S - g} y2="0.75" stroke={lineColor} strokeWidth="1.5" />
          {/* bottom */}
          <line x1={g} y1={S - 0.75} x2={S / 2 - 4} y2={S - 0.75} stroke={lineColor} strokeWidth="1.5" />
          <line x1={S / 2 + 4} y1={S - 0.75} x2={S - g} y2={S - 0.75} stroke={lineColor} strokeWidth="1.5" />
          {/* left */}
          <line x1="0.75" y1={g} x2="0.75" y2={S / 2 - 4} stroke={lineColor} strokeWidth="1.5" />
          <line x1="0.75" y1={S / 2 + 4} x2="0.75" y2={S - g} stroke={lineColor} strokeWidth="1.5" />
          {/* right */}
          <line x1={S - 0.75} y1={g} x2={S - 0.75} y2={S / 2 - 4} stroke={lineColor} strokeWidth="1.5" />
          <line x1={S - 0.75} y1={S / 2 + 4} x2={S - 0.75} y2={S - g} stroke={lineColor} strokeWidth="1.5" />
        </svg>
        <span
          style={{
            ...serif,
            color: wordColor,
            fontSize: 32,
            fontWeight: 500,
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          A
        </span>
      </div>
      <div style={{ width: 1, height: 40, background: lineColor }} />
      <div className="flex flex-col">
        <span style={{ ...serif, color: wordColor, fontSize: 38, fontWeight: 500, letterSpacing: 6, lineHeight: 1 }}>
          AKILA
        </span>
        <div style={{ height: 1, background: lineColor, margin: "8px 0", width: "100%" }} />
        <span style={{ ...sans, color: taglineColor, fontSize: 9, letterSpacing: 4, textTransform: "uppercase" }}>
          Consultoria Executiva
        </span>
      </div>
    </div>
  );
}

/* ============ CONCEITO 6 — Dupla Linha Encurtada ============ */
function Concept6({ wordColor, taglineColor, lineColor }: Props) {
  const W = 480;
  const lineW = W * 0.8;
  const Double = (
    <div style={{ width: lineW }}>
      <div style={{ height: 1, background: lineColor }} />
      <div style={{ height: 4 }} />
      <div style={{ height: 1, background: lineColor }} />
    </div>
  );
  return (
    <div className="flex flex-col items-center" style={{ width: W }}>
      {Double}
      <h2 style={{ ...serif, color: wordColor, fontSize: 58, fontWeight: 500, letterSpacing: 14, margin: "18px 0", paddingLeft: 14 }}>
        AKILA
      </h2>
      {Double}
      <p style={{ ...sans, color: taglineColor, fontSize: 10, letterSpacing: 6, textTransform: "uppercase", marginTop: 16 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

/* ============ CONCEITO 7 — Traço Dourado Atravessando o Nome ============ */
function Concept7({ wordColor, taglineColor, lineColor }: Props) {
  const W = 480;
  const H = 90;
  return (
    <div className="flex flex-col items-center" style={{ width: W }}>
      <div style={{ position: "relative", width: W, height: H }}>
        {/* traço (z-index menor) */}
        <svg
          width={W}
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        >
          {/* curva fluida horizontal centro vertical = H/2 = 45 */}
          <path
            d={`M 0 48
                C 60 48, 90 56, 130 54
                C 170 52, 200 38, 240 40
                C 280 42, 310 52, 350 50
                C 390 48, 420 42, 460 34
                C 470 32, 478 30, ${W} 28`}
            fill="none"
            stroke={lineColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {/* nome (z-index maior) */}
        <h2
          style={{
            ...serif,
            color: wordColor,
            fontSize: 58,
            fontWeight: 500,
            letterSpacing: 10,
            margin: 0,
            paddingLeft: 10,
            textAlign: "center",
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          AKILA
        </h2>
      </div>
      <p style={{ ...sans, color: taglineColor, fontSize: 10, letterSpacing: 5, textTransform: "uppercase", marginTop: 8 }}>
        Consultoria Executiva
      </p>
    </div>
  );
}

const CONCEPTS = [
  { n: 1, name: "Dupla Linha com Movimento", Comp: Concept1 },
  { n: 2, name: "Dupla Linha com Diamante", Comp: Concept2 },
  { n: 3, name: "Wordmark com Linha Ascendente Única", Comp: Concept3 },
  { n: 4, name: "Selo Circular Premium", Comp: Concept4 },
  { n: 5, name: "Monograma A Aberto + Wordmark", Comp: Concept5 },
  { n: 6, name: "Dupla Linha Encurtada com Autoridade", Comp: Concept6 },
  { n: 7, name: "Traço Dourado Atravessando o Nome", Comp: Concept7 },
];

function Stage({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ background: bg, minHeight: 320, padding: "56px 24px" }}
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
            Conceitos de Logo — Akila Consultoria Executiva
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
                  <Comp wordColor={GREEN} taglineColor={GOLD} lineColor={GOLD} />
                </Stage>
                <Stage bg={GREEN}>
                  <Comp wordColor={CREAM} taglineColor={GOLD} lineColor={GOLD} />
                </Stage>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
