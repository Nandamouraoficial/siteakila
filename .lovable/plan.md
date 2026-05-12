## Objetivo

Reforçar o destaque do wordmark "AKILA" sobre o fundo off-white (#F2EBD9) e sobre o fundo verde escuro (#006039) na página `/conceitos`, sem alterar a tipografia escolhida (Cormorant Garamond 700, 56px, tracking 16) nem o swash dourado.

## Mudanças em `src/routes/conceitos.tsx`

### 1. Paleta de contraste reforçada
Adicionar duas variações mais escuras/claras das cores base, usadas exclusivamente no wordmark:

- `GREEN_DEEP = #00301C` — verde quase preto, ~2× mais escuro que `#006039`. Usado para o wordmark sobre fundo creme (eleva contraste de ~7:1 para ~13:1).
- `CREAM_BRIGHT = #FBF6E8` — creme mais luminoso. Usado para o wordmark sobre fundo verde (contraste mais nítido que o creme atual).

Swash e tagline continuam em `#B8860B` (dourado), e os fundos continuam `#F2EBD9` / `#006039` — só a cor do nome muda.

### 2. Sombra/halo sutil no `Wordmark`
Acrescentar `textShadow` parametrizado para dar peso ótico sem aspecto "dropshadow":

- Sobre creme: halo dourado finíssimo `0 0 1px rgba(184,134,11,0.35)` + sombra interna escura `0 1px 0 rgba(0,48,28,0.25)` para fixar a letra no fundo.
- Sobre verde: halo creme finíssimo `0 0 1px rgba(251,246,232,0.45)` para separar a letra do verde profundo (sem brilho exagerado).

A sombra é controlada por uma nova prop opcional `shadow: "onLight" | "onDark"` em `Wordmark` e `Lockup`.

### 3. Aplicação no `Block`
- Stage creme → `wordColor={GREEN_DEEP}` + `shadow="onLight"`.
- Stage verde → `wordColor={CREAM_BRIGHT}` + `shadow="onDark"`.

A versão Base e as 6 variações herdam automaticamente, já que todas passam pelo `Block`.

### 4. Sem mudança em
- Swash dourado (`EagleSwash`) e tagline.
- Tipografia, peso, tamanho, tracking, kerning.
- Layout, header, grid, bordas douradas.
- Demais páginas/rotas.

## Resultado esperado

- Sobre creme: o nome ganha profundidade — verde quase preto com leve halo dourado, parecendo "gravado" no papel.
- Sobre verde escuro: o creme fica mais branco-marfim com micro-halo, destacando os contornos do K e do A sem perder elegância.
- Mantém estética serif refinada, sem stroke/outline pesado nem sombra projetada.
