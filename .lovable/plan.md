## Objetivo
Adicionar uma 4ª variação de paleta na página `/paletas` para comparação lado a lado com as outras três.

## Alteração
Em `src/routes/paletas.tsx`, acrescentar ao array `PALETAS` uma nova entrada:

- **Nome:** D · Esmeralda + Dourado Clássico
- **Dark:** `#1E4D3A`
- **Light:** `#F7F4EF`
- **Gold:** `#C9A96E`
- **Texto sobre dark:** `#F7F4EF`
- **Texto sobre light:** `#1A1A1A`

## Layout
Ajustar o grid de `lg:grid-cols-3` para `lg:grid-cols-2 xl:grid-cols-4`, para acomodar 4 colunas em telas grandes e manter legibilidade em telas médias.

Nenhum outro arquivo é afetado.