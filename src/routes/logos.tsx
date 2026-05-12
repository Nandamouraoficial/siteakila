import { createFileRoute } from "@tanstack/react-router";
import logo1 from "@/assets/logo-akila-option-1.png";
import logo1GreenGold from "@/assets/logo-akila-option-1-green-gold.png";
import logo2 from "@/assets/logo-akila-option-2.png";
import logo3 from "@/assets/logo-akila-option-3.png";
import logo4 from "@/assets/logo-akila-option-4.png";
import logo5 from "@/assets/logo-akila-option-5.png";
import logo6 from "@/assets/logo-akila-option-6.png";
import logo7 from "@/assets/logo-akila-option-7.png";
import logo8 from "@/assets/logo-akila-option-8.png";
import logo9 from "@/assets/logo-akila-option-9.png";
import logo10 from "@/assets/logo-akila-option-10.png";
import logo11 from "@/assets/logo-akila-option-11.png";
import logo12 from "@/assets/logo-akila-option-12.png";
import logo13 from "@/assets/logo-akila-option-13.png";
import logo14 from "@/assets/logo-akila-option-14.png";
import logo15 from "@/assets/logo-akila-option-15.png";

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
  {
    src: logo4,
    name: "Opção 4 — Águia silhueta moderna",
    desc: "Silhueta geométrica reduzida ao essencial — asas em V angulares, presença imponente com radical simplicidade.",
  },
  {
    src: logo5,
    name: "Opção 5 — Águia hairline acima",
    desc: "Wordmark dominante em serifa esmeralda. Pequena águia em traço fino dourado paira acima como assinatura discreta.",
  },
  {
    src: logo6,
    name: "Opção 6 — Pena lateral",
    desc: "Composição horizontal: pena dourada à esquerda, wordmark esmeralda. Referência sutil à águia através da pena.",
  },
  {
    src: logo7,
    name: "Opção 7 — Águia oculta no A",
    desc: "Pequena águia dourada nichada no espaço negativo da letra A. Detalhe descoberto no segundo olhar.",
  },
  {
    src: logo8,
    name: "Opção 8 — Selo monograma",
    desc: "Cabeça de águia em perfil sobre filete dourado, wordmark emoldurado por hairlines. Sensação de selo/carimbo editorial.",
  },
  {
    src: logo9,
    name: "Opção 9 — Águia caligráfica",
    desc: "Traço fluido dourado atravessa o wordmark sugerindo a silhueta da águia em voo. Tipografia e símbolo integrados como um.",
  },
  {
    src: logo10,
    name: "Opção 10 — Águia caligráfica abaixo",
    desc: "Refinamento da #9: traço dourado fluido com águia em voo posicionado entre o wordmark e o subtítulo, sem cortar as letras.",
  },
  {
    src: logo11,
    name: "Opção 11 — Águia acima (selo)",
    desc: "Águia geométrica dourada centralizada no topo, separada do wordmark esmeralda por um filete dourado fino. Composição vertical em três blocos.",
  },
  {
    src: logo12,
    name: "Opção 12 — Lockup horizontal",
    desc: "Águia compacta dourada à esquerda, filete vertical separador, wordmark esmeralda à direita com subtítulo. Sensação de cabeçalho de papelaria premium.",
  },
  {
    src: logo13,
    name: "Opção 13 — Águia abaixo (assinatura)",
    desc: "Wordmark dominante no topo, filete dourado, pequena águia em mostarda como selo no rodapé. Inversão da #11.",
  },
  {
    src: logo14,
    name: "Opção 14 — Asas envolvendo",
    desc: "Duas asas finas em traço dourado abrem-se simetricamente ladeando o wordmark esmeralda — a tipografia é o corpo da águia.",
  },
  {
    src: logo15,
    name: "Opção 15 — Águia como inicial A",
    desc: "A primeira letra A é substituída por uma águia geométrica dourada que mantém a forma triangular do A. Integração tipográfica radical.",
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
                {opt.name.startsWith("Opção 1") && (
                  <div className="md:col-span-2">
                    <LogoCard
                      src={logo1GreenGold}
                      bg={DARK}
                      label="Variante — águia mostarda sobre verde"
                      textColor={LIGHT}
                    />
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
