## Objetivo

Substituir a página `/conceitos` por uma apresentação focada na **versão refinada do logo anexado** (wordmark AKILA + swash dourado em forma de águia estilizada abaixo + tagline) aplicada em **6 variações tipográficas**.

## Estrutura da nova página

Topo:
- Header com supratítulo "Direção de marca" + título "AKILA — Estudo Tipográfico" e linha curta de contexto.

Bloco 1 — **Versão Refinada (Base)**:
- Aperfeiçoamento da imagem anexada — mesmo conceito (swash dourado abaixo do nome) mas com:
  - Linha do swash mais fina e elegante (1.2–1.5px), sem aspecto pesado.
  - Pequeno detalhe central da águia mais legível (mini bico/cabeça discreto, não torcido).
  - Tagline "CONSULTORIA EXECUTIVA" Inter 10px, letter-spacing 5px, #B8860B, sem cortes.
  - Wordmark Cormorant Garamond 400, 56px, letter-spacing 12px, #006039.
- Exibido em fundo creme + fundo verde lado a lado.

Bloco 2 — **6 Variações Tipográficas** (todas usam o mesmo swash dourado refinado abaixo, para comparação justa):

| # | Fonte / peso | Tamanho | Letter-spacing | Caráter |
|---|---|---|---|---|
| 1 | Cormorant Garamond 300 | 58px | 14px | etéreo, delicado |
| 2 | Cormorant Garamond 600 | 58px | 10px | autoridade, presença |
| 3 | Playfair Display 400 | 54px | 12px | editorial Vogue/FT |
| 4 | Playfair Display 700 | 54px | 8px | máximo impacto |
| 5 | Cormorant Garamond 400 | 48px | 22px | espaçamento Hermès/Cartier |
| 6 | Cormorant Garamond 400 italic | 58px | 10px | movimento, complementa águia |

Cada variação é renderizada em **duas colunas lado a lado**: fundo creme (#F2EBD9) à esquerda + fundo verde (#006039) à direita, com cores invertidas no wordmark (#006039 / #F2EBD9). Swash e tagline sempre em #B8860B.

Cada bloco tem cabeçalho com numeração (01–06), nome da variação (ex.: "Cormorant Garamond Light · 300") e moldura fina dourada.

## Detalhe técnico

Arquivo único: `src/routes/conceitos.tsx` (substituição completa).

- Carregar Google Fonts: `Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400` + `Playfair+Display:wght@400;700` + `Inter:wght@400;500`.
- Componente `Wordmark({ font, weight, size, spacing, italic, color })` — renderiza apenas o nome com tipografia parametrizada.
- Componente `EagleSwash({ color })` — SVG do swash refinado: duas curvas finas espelhadas saindo do centro com leve queda nas pontas + pequeno detalhe central (cabeça/bico minimalista). Largura ~340px, altura ~24px, stroke 1.3px.
- Componente `Lockup({ ...typographyProps, wordColor, accentColor })` — wordmark + swash + tagline em coluna, centralizado.
- Componente `Stage({ bg })` reutilizado para fundo creme/verde lado a lado.
- Array `VARIATIONS` com as 6 entradas. Loop renderiza Base + 6.
- Paleta fixa: `GREEN=#006039`, `CREAM=#F2EBD9`, `GOLD=#B8860B`.

Nenhum outro arquivo é modificado. Conceitos 1–8 atuais são descartados (substituídos pelo novo conteúdo de `/conceitos`).