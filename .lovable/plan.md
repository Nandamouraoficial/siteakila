## Objetivo

No Conceito 7 da página `/conceitos`, trocar o traço dourado fluido por uma **águia estilizada em voo** que atravessa horizontalmente o wordmark AKILA — mantendo elegância premium (fina, monolinha, não decorativa demais).

## Mudanças

Arquivo único: `src/routes/conceitos.tsx` — apenas o componente `Concept7`.

### Nova composição do Conceito 7

- Wordmark "AKILA" — Cormorant Garamond 58px, letter-spacing 10px, #006039 (inalterado).
- Tagline "CONSULTORIA EXECUTIVA" — Inter 10px, letter-spacing 5px, #B8860B (inalterado).
- **Águia em SVG** atravessando o nome no centro vertical, em #B8860B, stroke 1.5px, sem preenchimento (exceto detalhes mínimos):
  - **Corpo + asas abertas**: uma única linha contínua que entra pela esquerda como ponta da asa esquerda, sobe suavemente, forma o topo da asa, desce até o corpo central (entre o "K" e o "I"), e sai pela direita formando a asa direita com leve curvatura ascendente final.
  - **Cabeça**: pequeno triângulo/bico discreto no centro do corpo, voltado para a direita (sutil, ~6px).
  - **Cauda**: traço fino diagonal curto saindo do centro para baixo-esquerda (opcional, contido).
  - Estilo: monolinha geométrica minimalista — referência visual a brasões executivos modernos, não clipart.
- A águia fica em **z-index 0** (atrás das letras), o wordmark em z-index 1 — sensação de que o nome repousa sobre o voo.
- Centro vertical da águia alinhado à linha média das letras (≈ y=45 num container de 90px de altura).
- Envergadura ≈ 100% da largura do wordmark (não ultrapassar muito as bordas das letras).

### Versão fundo verde

- Wordmark em #F2EBD9, águia e tagline em #B8860B (inalterado em relação ao padrão atual).

## Detalhe técnico

Manter a mesma assinatura `Concept7({ wordColor, taglineColor, lineColor })` e o mesmo container `position: relative` com SVG absoluto + h2 absoluto centralizado. Apenas o `<path>` único atual é substituído por um grupo SVG representando a águia (1 path principal para asas+corpo, 1 polígono pequeno para o bico, 1 line curta opcional para a cauda).

Nenhuma outra parte da página, demais conceitos, ou outros arquivos são tocados.