## Objetivo

Gerar **6 novas opções (10–15)** explorando combinações criativas entre o wordmark "AKILA" e a águia, variando a **posição da marca** (acima, atravessando, ao lado, abaixo) e o **tratamento gráfico** — todas elegantes, premium, high-ticket, com a águia integrada à tipografia em vez de competir com ela.

Adicionar tudo na página `/logos` para você comparar.

## As 6 direções

**Opção 10 — Águia integrada (refinamento da #9)**
Traço caligráfico dourado fluido atravessa o wordmark sugerindo asas em voo, mas desta vez **sem cortar o subtítulo** e com o traço posicionado entre o wordmark e o subtítulo (não sobre as letras). Versão limpa, integrada.

**Opção 11 — Águia acima, centralizada (selo)**
Pequena águia geométrica em mostarda centralizada acima do wordmark esmeralda, separada por filete dourado horizontal fino. Composição vertical em três blocos: mark · rule · wordmark.

**Opção 12 — Águia ao lado esquerdo (lockup horizontal)**
Águia compacta em mostarda à esquerda + filete vertical separador dourado + wordmark esmeralda à direita com subtítulo abaixo. Lockup horizontal premium tipo cabeçalho de papelaria.

**Opção 13 — Águia abaixo (assinatura)**
Wordmark esmeralda dominante no topo + filete dourado fino + pequena águia em mostarda centralizada abaixo, como assinatura/selo no rodapé. Inversão da Opção 11.

**Opção 14 — Asas envolvendo o wordmark**
Duas asas finas em traço dourado abrem-se simetricamente ladeando o wordmark esmeralda (uma à esquerda, outra à direita), como se a tipografia fosse o corpo da águia. Composição protegida/heráldica.

**Opção 15 — Águia como inicial "A"**
A primeira letra "A" do wordmark é substituída por uma águia geométrica dourada estilizada que mantém a forma triangular do A. As demais letras "KILA" seguem em serifa esmeralda. Integração tipográfica radical.

## Implementação

1. Gerar as 6 imagens em paralelo via `imagegen--generate_image` (premium, transparente, salvas em `src/assets/logo-akila-option-{10..15}.png`).
2. Atualizar `src/routes/logos.tsx`:
   - Adicionar os 6 novos imports.
   - Adicionar as 6 entradas no array `OPTIONS` com nome e descrição.
   - O layout de cards (fundo claro + fundo escuro) já existente cobre todas automaticamente.

Nenhuma outra página é afetada.

## Próximo passo

Depois que você escolher a vencedora final, entrego variantes finais (PNG fundo claro / PNG fundo escuro / SVG) e aplico no Navbar e Footer.
