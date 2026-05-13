## Objetivo

Hoje a página /mentoria-executiva mostra apenas 3 cartões genéricos no bloco "Como funciona", mas o produto vendido são 12 sessões de 2h em 90 dias. A proposta é estruturar essas 12 sessões com base em práticas de boutiques de carreira executiva (Heidrick Navigator, Egon Zehnder Leadership Advisory, BetterUp Executive, Korn Ferry Advance), entregando uma jornada clara: diagnóstico profundo → estratégia → execução com mercado → consolidação e plano de continuidade.

## Estrutura proposta — 12 sessões em 4 fases

### Fase 1 · Diagnóstico (Sessões 1–3)
Mapear o ponto de partida real antes de mover qualquer peça.

1. **Linha de base executiva** — Histórico de carreira, padrões de decisão, momentos de inflexão. O que te trouxe até aqui e o que já não serve.
2. **Ativos e lacunas de liderança** — Forças, pontos cegos, percepção do entorno (pares, liderança, time). Leitura honesta da marca executiva atual.
3. **Visão de destino** — O que você quer de verdade nos próximos 18–36 meses: cargo, contexto, escopo, vida. Não o que deveria querer.

### Fase 2 · Estratégia (Sessões 4–6)
Transformar diagnóstico em movimento.

4. **Tese de carreira** — A narrativa central que conecta trajetória, competência distintiva e próximo capítulo. O fio condutor que orienta toda decisão.
5. **Mapa de oportunidades** — Setores, empresas, cargos, formatos (CLT, conselho, sócio, internacional). Critérios de sim e de não.
6. **Plano de 90 dias** — Marcos, entregáveis, indicadores. O que precisa estar pronto até o fim do ciclo.

### Fase 3 · Execução com mercado (Sessões 7–10)
Onde a maioria dos programas para. Aqui o trabalho fica concreto.

7. **Marca executiva e presença digital** — LinkedIn, bio, narrativa pública. Como você aparece quando pesquisam seu nome.
8. **Rede estratégica** — Mapeamento de quem precisa te conhecer, abordagem, reativação inteligente. Networking executivo, não café aleatório.
9. **Conversas decisivas** — Headhunters, board members, recrutadores internos, sponsors. Como conduzir entrevistas e negociações nesse nível.
10. **Negociação e proposta** — Pacote, contraoferta, equity, governança. Treinamento de cenários reais que vão aparecer.

### Fase 4 · Consolidação (Sessões 11–12)
Garantir que o movimento se sustenta depois da mentoria.

11. **Primeiros 90 dias no novo movimento** — Plano de entrada (mesmo que ainda esteja em transição). Onboarding, leitura de cultura, stakeholders críticos.
12. **Plano de continuidade** — O que segue além da mentoria: rituais de revisão, aliados estratégicos, próximos pontos de inflexão. Você sai com método, não com dependência.

## Onde vai na página

Substituir o bloco atual "Como funciona — 3 sessões" (linhas 175–197 de `src/routes/mentoria-executiva.tsx`) por uma versão expandida:

- Atualizar `SESSOES` para incluir as 12 sessões com `fase`, `n`, `title`, `desc`.
- Atualizar o título do bloco para **"Como funciona — 12 sessões em 4 fases"**.
- Renderizar agrupado por fase: cada fase como subtítulo + grid de 3 cartões abaixo (3 colunas no desktop, 1 no mobile).
- Manter a estética atual (borda dourada superior, numeração serifada, tipografia existente).
- Adicionar uma linha de rodapé: *"Sessões quinzenais de 2h · Online · Material e tarefas entre encontros"*.

## Detalhes técnicos

- Único arquivo afetado: `src/routes/mentoria-executiva.tsx`.
- Estrutura de dados:
  ```ts
  const FASES = [
    { fase: "Fase 1 · Diagnóstico", sessoes: [{n:"01", title:"...", desc:"..."}, ...] },
    ...
  ]
  ```
- Sem novas dependências, sem mudanças de tokens de design.
- Nenhum impacto em outras rotas ou no toggle Gerentes/Diretores (que segue acima).

Confirma que posso seguir com esse conteúdo e estrutura?
