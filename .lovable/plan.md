## Objetivo

Padronizar o sistema de halo/sombra criado para a tagline e estendê-lo aos demais elementos de destaque da página `/conceitos`, mantendo a mesma linguagem visual (halo da própria cor + micro-sombra de assentamento) em todos os pontos focais.

## Sistema unificado de sombras

Hoje existem três conjuntos paralelos:
- `SHADOWS` (wordmark) — halo sutil de 1px.
- `TAGLINE_SHADOWS` (tagline) — halo refinado de 0.5px + assentamento/glow.

Substituir por um único registro tipado por **cor do elemento**, em vez de por elemento, para que qualquer texto novo herde a mesma física:

```ts
type ShadowVariant = "onLight" | "onDark";

// Halo para texto VERDE/CREME (wordmark) — letras grandes, halo levemente mais largo
const WORD_SHADOWS: Record<ShadowVariant, string> = {
  onLight: "0 0 0.6px rgba(0,48,28,0.55), 0 1px 0 rgba(0,48,28,0.22)",
  onDark:  "0 0 0.6px rgba(251,246,232,0.85), 0 0 8px rgba(251,246,232,0.18)",
};

// Halo para texto DOURADO (tagline + swash + número 00 + título de bloco quando aplicável)
const GOLD_SHADOWS: Record<ShadowVariant, string> = {
  onLight: "0 0 0.5px rgba(139,99,8,0.9), 0 1px 0 rgba(0,48,28,0.18)",
  onDark:  "0 0 0.5px rgba(184,134,11,0.95), 0 0 6px rgba(184,134,11,0.25)",
};
```

`SHADOWS` e `TAGLINE_SHADOWS` antigos são removidos.

## Aplicação por elemento

### 1. Wordmark "AKILA"
- Substituir o `SHADOWS[shadow]` atual por `WORD_SHADOWS[shadow]`.
- No fundo creme: halo verde-profundo (define os contornos do K e A com a própria cor da letra, sem borrar).
- No fundo verde: halo creme + glow muito sutil (separa do verde sem aspecto neon).

### 2. Tagline "CONSULTORIA EXECUTIVA"
- Já usa `TAGLINE_SHADOWS` → renomear para `GOLD_SHADOWS`. Sem mudança visual.

### 3. Swash dourado (`EagleSwash`)
- Adicionar `filter: drop-shadow(0 0 0.6px rgba(184,134,11,0.55)) drop-shadow(0 1px 0 rgba(0,48,28,0.15))` quando `shadow === "onLight"`.
- Quando `shadow === "onDark"`: `filter: drop-shadow(0 0 0.6px rgba(184,134,11,0.9)) drop-shadow(0 0 4px rgba(184,134,11,0.3))`.
- Aceita nova prop `shadow?: ShadowVariant` no SVG (aplicada como `style.filter` no `<svg>`).

### 4. Número de bloco "00", "01"… (header de cada Block)
- Texto dourado grande (32px serif). Aplicar `textShadow: GOLD_SHADOWS.onLight` (sempre sobre o fundo creme da página).

### 5. Título do bloco "Versão Refinada (Base)" etc.
- Texto verde (#006039). Manter sem halo — já tem contraste suficiente sobre o creme e o halo competiria com o número dourado ao lado. **Fora de escopo.**

### 6. H1 "AKILA — Estudo Tipográfico" (header da página)
- Mesmo tratamento do wordmark sobre fundo claro: `textShadow: WORD_SHADOWS.onLight`. Reforça hierarquia da página.

### 7. Supratítulo "Direção de marca"
- Pequeno, dourado. Aplicar `GOLD_SHADOWS.onLight` para coerência com a tagline.

## Estrutura técnica

Em `src/routes/conceitos.tsx` (único arquivo):

1. Trocar `SHADOWS` por `WORD_SHADOWS` e renomear `TAGLINE_SHADOWS` para `GOLD_SHADOWS`.
2. Atualizar `Wordmark` para ler `WORD_SHADOWS`.
3. Adicionar prop `shadow?: ShadowVariant` em `EagleSwash`; aplicar via `filter` no `<svg>`.
4. Encadear `shadow` no `Lockup` para `EagleSwash` (mesmo valor já passado ao Wordmark/tagline).
5. Aplicar `textShadow` inline nos elementos do header da página (H1 + supratítulo) e no número de cada `Block`.

## Fora de escopo
- Cores, tipografia, tamanhos, layout, paleta de fundos.
- Título h2 do bloco e subtítulo lateral.
- Demais rotas/componentes.

## Resultado esperado

Todos os elementos de destaque (wordmark, swash, tagline, número de bloco, H1, supratítulo) compartilham a mesma "física" de halo: fina aura da própria cor + micro-assentamento esverdeado no fundo creme; halo + glow suave no fundo verde. A página inteira passa a ter um nível de contraste e brilho coerente, sem sombras pesadas.
