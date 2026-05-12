import { createFileRoute } from "@tanstack/react-router";
import logo1 from "@/assets/logo-akila-option-1.png";
import logo1GreenGold from "@/assets/logo-akila-option-1-green-gold.png";
import logo2 from "@/assets/logo-akila-option-2.png";
import logo3 from "@/assets/logo-akila-option-3.png";

export const Route = createFileRoute("/logos")({
  head: () => ({
    meta: [{ title: "Escolha do Logo — Akila" }],
  }),
  component: LogosPage,
});

const LIGHT = "#F2EBD9";
const DARK = "#006039";

const OPTIONS = [
  {
    src: logo1,
    name: "Opção 1 — Águia heráldica",
    desc: "Águia de asas abertas, simétrica, com traços finos em latão. Sensação editorial premium.",
  },
  {
    src: logo2,
    name: "Opção 2 — Monograma alado",
    desc: "Letra A formada por asas finas em latão. Minimalista, estilo maison de moda (Hermès, Chanel).",
  },
  {
    src: logo3,
    name: "Opção 3 — Emblema circular",
    desc: "Medalhão com águia centralizada e texto circular. Heráldico, tradicional, estilo Rolex.",
  },
];

function LogoCard({
  src,
  bg,
  label,
  textColor,
}: {
  src: string;
  bg: string;
  label: string;
  textColor: string;
}) {
  return (
    <div className="flex flex-col border border-black/10">
      <div
        className="flex items-center justify-center py-12 px-6"
        style={{ backgroundColor: bg, minHeight: 260 }}
      >
        <img src={src} alt="Logo Akila" style={{ height: 180, width: "auto" }} />
      </div>
      <div
        className="flex items-center justify-between px-5 py-3 border-t border-black/10"
        style={{ backgroundColor: bg }}
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: textColor, opacity: 0.7 }}
        >
          {label}
        </span>
        <img src={src} alt="" style={{ height: 32, width: "auto" }} />
      </div>
    </div>
  );
}

function LogosPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-10 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-500">
            Direção de marca
          </p>
          <h1
            className="font-serif text-[40px] mt-2"
            style={{ color: "#1A1A1A", fontWeight: 500 }}
          >
            Escolha do logo — Akila
          </h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            Três direções para o logo da Akila (águia), cada uma exibida em
            fundo claro creme e fundo escuro esmeralda. À direita de cada card,
            uma versão pequena simulando o uso no menu (~32px de altura).
          </p>
        </header>

        <div className="space-y-16">
          {OPTIONS.map((opt) => (
            <section key={opt.name}>
              <div className="mb-5">
                <h2
                  className="font-serif text-[24px]"
                  style={{ color: "#1A1A1A", fontWeight: 500 }}
                >
                  {opt.name}
                </h2>
                <p className="mt-1 text-[14px] text-neutral-600 max-w-2xl">
                  {opt.desc}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LogoCard
                  src={opt.src}
                  bg={LIGHT}
                  label="Fundo claro"
                  textColor="#1A1A1A"
                />
                <LogoCard
                  src={opt.src}
                  bg={DARK}
                  label="Fundo escuro"
                  textColor={LIGHT}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
