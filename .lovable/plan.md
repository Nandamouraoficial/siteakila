# Akila Consultoria — Site Institucional

Site institucional premium em TanStack Start (React 19 + TypeScript + Tailwind v4), seguindo a stack do template. Estética minimalista, adulta, com tipografia serif/sans, paleta off-white + carvão + dourado.

> Observação técnica: o template usa **TanStack Router** (file-based routing em `src/routes/`), não React Router DOM. As rotas e navegação serão implementadas com `@tanstack/react-router`, mantendo equivalência funcional 1:1 ao que foi pedido.

---

## 1. Sistema de design (`src/styles.css`)

Substituir tokens atuais por:

- `--background: #FAF8F5` (off-white quente)
- `--surface-dark: #2B2B2B` (carvão — seções alternadas)
- `--foreground: #1C1C1C` (títulos)
- `--muted-foreground: #4A4A4A` (corpo)
- `--accent / gold: #C9A96E` (dourado)
- `--border: #E8E0D5` (bege claro)
- `--on-dark: #FAF8F5`
- `--radius: 2px` (máx 4px em qualquer canto)

Tipografia (Google Fonts via `<link>` no `__root.tsx`):
- Serif: **Cormorant Garamond** (400/500/600) → `font-serif`
- Sans: **Inter** (400/500/600) → `font-sans` (default body)
- Escalas h1/h2/h3 + corpo conforme spec, com variantes mobile via clamp() ou breakpoints.

Sem gradientes, sem sombras pesadas, separadores de 1px dourado/bege.

---

## 2. Rotas (file-based em `src/routes/`)

```
src/routes/
  __root.tsx                  → shell + Navbar + Footer + fontes
  index.tsx                   → Home
  imersao.tsx                 → Imersão O Próximo Passo
  diagnostico.tsx             → Diagnóstico de Presença Executiva
  comunicador.tsx             → Comunicador Magnético
  palestrante.tsx             → Palestrante Magnético
  reposicionamento.tsx        → Reposicionamento LinkedIn
  mentoria-executiva.tsx      → Mentoria Executiva (com toggle)
  mentoria-negocios.tsx       → Mentoria de Negócios
```

Cada rota define `head()` próprio com `title`, `description`, `og:title`, `og:description` específicos.

---

## 3. Componentes globais (`src/components/`)

- **`Navbar.tsx`** — fixo, fundo claro, logo "AKILA" + "Consultoria", links Sobre / Serviços (dropdown com 6 produtos) / Contato, CTA ghost dourado "Agendar conversa" → Calendly em nova aba. Mobile: hamburger + drawer (Sheet do shadcn).
- **`Footer.tsx`** — fundo carvão, logo dourado, tagline, 3 colunas de links, redes sociais, copyright, linha dourada superior.
- **`CtaDuplo.tsx`** — props `primaryLabel`, `secondaryLabel`, `formUrl`, `singleMode?` (para casos como lista de espera). Primário abre `FormModal`, secundário abre Calendly.
- **`FormModal.tsx`** — Dialog do shadcn customizado: overlay escuro, card claro, título serif "Vamos conversar.", subtítulo, iframe Google Forms (URL via prop, placeholder por produto).
- **`SectionDark.tsx` / `SectionLight.tsx`** — wrappers com padding 80px e fundo correto.
- **`Supratitle.tsx`** — Inter 13px, letter-spacing 3px, dourado, uppercase.
- **`FadeIn.tsx`** — wrapper simples com IntersectionObserver + CSS transition (sem framer-motion para manter leve).

Constantes em `src/lib/site-config.ts`:
- `CALENDLY_URL = "https://calendly.com/fernandamoura/30min"`
- `FORM_URLS` com placeholder por produto (`[GOOGLE_FORM_URL_*]`)
- Lista de produtos para nav dropdown e seção home

---

## 4. Páginas — conteúdo

Cada página segue o conteúdo textual completo já fornecido pelo usuário. Estrutura recorrente: Hero → Para quem é → Problema (dark) → Transformação → Como funciona → CTA final (dark).

- **Home** — Hero (60/40 + placeholder foto), Sobre (dark), Produtos (grid 3×2 com 6 cards numerados 01–06), Depoimentos (dark, 3 cards sem foto, placeholders `[DEPOIMENTO_N]`), CTA final.
- **Imersão** — flag `IMERSAO_ATIVA = false` no topo do componente; banner condicional, CTAs alternam entre "Garantir vaga / Agendar" e "Entrar na lista de espera"; badge de vagas; 4 blocos de momentos com linha dourada.
- **Diagnóstico** — 3 steps; box destaque borda esquerda dourada com mensagem de abatimento.
- **Comunicador** e **Palestrante** — estrutura idêntica, com bloco credencial no Palestrante.
- **Reposicionamento** — 3 sessões + box dourado de abatimento do Diagnóstico.
- **Mentoria Executiva** — toggle [Gerentes | Diretores e VPs] com `useState`; textos de "Para quem é" e "Problema" trocam dinamicamente.
- **Mentoria de Negócios** — segue mesma estrutura premium (conteúdo do brief; o usuário cortou no fim — usarei estrutura padrão do produto e tratarei como mentoria empresarial; ver pergunta abaixo).

Placeholders de imagem ficam como `<div>` com label visível (`[FOTO_FERNANDA_HERO]` etc.) para o usuário substituir depois — sem stock photos.

---

## 5. Detalhes técnicos

- `defaultPreload: "intent"` já configurado.
- Sem framer-motion (CSS puro para fade-in).
- Sem dependências novas — tudo em Tailwind + shadcn já presente (Dialog, Sheet, DropdownMenu, Button).
- Acessibilidade: foco visível dourado, modal com `aria-label`, alt texts nos placeholders.
- SEO por rota com `head()`.

---

## 6. Pendências / placeholders explícitos

Deixarei marcados no código (constantes ou comentários) para preenchimento posterior:

- URLs do Google Forms por produto
- Fotos (Fernanda hero, imersão grupo)
- Conteúdo dos 3 depoimentos
- Conteúdo final da página Mentoria de Negócios (a mensagem foi truncada)

---

## Pergunta antes de implementar

A mensagem foi cortada no meio da Mentoria Executiva (Sessão 2) e não chegou o conteúdo da **Mentoria de Negócios** nem o final da Executiva. Para essas duas páginas, posso:

1. Replicar a estrutura padrão (Hero / Para quem / Problema / Transformação / Como funciona / CTA) com **copy provisória marcada como `[REVISAR]`**, mantendo tudo coerente com o tom das outras páginas.
2. Aguardar você colar o restante do brief antes de eu construir essas duas páginas.

Se preferir (1), confirmo e construo tudo de uma vez. Se (2), implemento as 6 páginas restantes agora e essas duas em seguida.