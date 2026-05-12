## Objetivo

Refinar o `textShadow` da tagline "CONSULTORIA EXECUTIVA" em `src/routes/conceitos.tsx` para que ela ganhe um halo mais consistente nos dois fundos — incluindo o creme (#F2EBD9), onde hoje o dourado tende a se diluir.

## Mudança única — bloco da tagline em `Lockup`

Hoje (linhas ~138–149):
- `fontSize: 11`, `fontWeight: 600`, `color: accentColor` (dourado #B8860B).
- `textShadow` aplicado **só** quando `shadow === "onDark"`, com halo dourado fraco.
- No fundo creme: nenhum halo, contraste tipográfico baixo demais.

Substituir o `textShadow` por uma estratégia de halo simétrico, dependente do fundo, com duas camadas:

### Sobre fundo creme (`shadow === "onLight"`)
- Camada 1 (definição): halo fino do próprio dourado um pouco mais escuro para "engrossar" oticamente as letras Inter — `0 0 0.5px rgba(139,99,8,0.9)`.
- Camada 2 (sombra de assentamento): `0 1px 0 rgba(0,48,28,0.18)` — micro-sombra esverdeada que apoia a tagline no creme sem aspecto de drop shadow.

### Sobre fundo verde (`shadow === "onDark"`)
- Camada 1: halo dourado mais firme — `0 0 0.5px rgba(184,134,11,0.95)`.
- Camada 2: glow dourado muito sutil para destacar do verde profundo — `0 0 6px rgba(184,134,11,0.25)`.

### Implementação
Trocar o `textShadow` inline atual por um lookup paralelo ao já existente para o wordmark:

```ts
const TAGLINE_SHADOWS: Record<ShadowVariant, string> = {
  onLight:
    "0 0 0.5px rgba(139,99,8,0.9), 0 1px 0 rgba(0,48,28,0.18)",
  onDark:
    "0 0 0.5px rgba(184,134,11,0.95), 0 0 6px rgba(184,134,11,0.25)",
};
```

E no `<p>` da tagline:
```ts
textShadow: shadow ? TAGLINE_SHADOWS[shadow] : undefined,
```

Mantém `fontSize: 11`, `fontWeight: 600`, `letterSpacing: 5`, cor dourada e tudo o mais — só o halo muda.

## Fora de escopo
- Tipografia, tamanho, peso, tracking, cor da tagline.
- Wordmark, swash, layout, paleta de fundos.
- Qualquer outra rota ou componente.
