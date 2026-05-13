## Objetivo

Alinhar o texto da página `/mentoria-executiva` ao copy oficial da Mentoria Executiva — corrigindo os blocos "Para quem é" e "O problema real" (atualmente "O que esse nível exige") nas duas versões do toggle (Gerentes / Diretores e VPs), e renomeando a Sessão 3 de "Sustentação" para "Consolidação".

## Arquivo afetado

`src/routes/mentoria-executiva.tsx`

## Alterações

### 1. Bloco COPY (linhas 30–43) — versões Gerentes e Diretores

Substituir os dois objetos de copy pelos textos oficiais.

**Gerentes — Para quem é:**
> Você entrega. Você lidera. E sente que está pronto para o próximo nível — mas não sabe exatamente o que falta, nem como dar esse salto sem errar a jogada.

**Diretores e VPs — Para quem é:**
> Você já chegou. E agora o jogo mudou — de novo. Transição, expansão, consolidação: o que é certo nesse momento não é óbvio. E não existe alguém na sua estrutura com quem conversar sem filtro político.

**Problema (mesmo texto para as duas personas, conforme spec):**
> Nesse nível, raramente existe alguém com quem falar de verdade. Sem ter que proteger imagem. Sem filtro de hierarquia. Alguém que já esteve onde você quer chegar — e pode dizer o que realmente está em jogo.

Como o problema é idêntico nas duas versões, a estrutura `COPY[persona]` continua válida — apenas com o mesmo valor em ambas as chaves.

### 2. Sessão 3 (linhas 56–60) — renomear

Trocar:
- `title: "Sustentação"` → `title: "Consolidação"`
- `desc: "Consolidação do novo nível. O que você precisa para sustentar o movimento ao longo do tempo. [REVISAR]"` → `desc: "O que ficou. O que muda. O que vem depois."`

### 3. Título do bloco Problema (linha 147)

O spec chama essa seção de "O problema real". O título atual `"O que esse nível exige"` será trocado para algo mais alinhado — proposto: manter como `<h2>O problema real</h2>` para ficar fiel à copy oficial.

## Fora de escopo

Esta tarefa cobre apenas "Para quem", "Problema" e a renomeação da Sessão 3. **Não** mexe em:
- Headline/subheadline do hero (já corretos)
- Bloco de transformação ("O que muda em 90 dias")
- CTA final headline
- Bloco de credenciais da Fernanda (Coca-Cola, Cargill etc.)
- Página 7 (Mentoria de Negócios)

Esses pontos ficam para outra rodada se você quiser fechar 100% com o spec depois.

## Verificação

Após a edição, abrir `/mentoria-executiva`, alternar o toggle Gerentes ↔ Diretores e VPs e conferir que:
- "Para quem é" muda corretamente entre as duas versões
- "O problema real" exibe o texto único do spec
- Sessão 3 aparece como "Consolidação · O que ficou. O que muda. O que vem depois."
