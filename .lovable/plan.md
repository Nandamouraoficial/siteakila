## Objetivo

Criar uma página `/logos` (similar a `/paletas`) onde você pode visualizar e comparar as 3 opções de logo da AKILA, cada uma exibida em **fundo claro (creme)** e **fundo escuro (verde esmeralda)**, lado a lado.

Assim você decide qual opção desenvolver em variantes finais (PNG + SVG) antes de aplicá-la no Navbar e Footer.

## Alterações

**1. Novo arquivo: `src/routes/logos.tsx`**

Página com:
- Cabeçalho explicativo ("Escolha do logo — Akila")
- Para cada uma das 3 opções (importadas de `src/assets/logo-akila-option-{1,2,3}.png`):
  - Nome e descrição curta da direção
  - Card com **fundo claro** (`#F2EBD9`) mostrando o logo
  - Card com **fundo escuro** (`#006039`) mostrando o logo
  - Variação em tamanho pequeno (altura ~40px, simulando uso no Navbar) e tamanho grande (~160px, uso em hero/footer)

**2. Sem outras mudanças**

Não vou tocar em Navbar, Footer, styles.css nem nas outras páginas. A página `/logos` é apenas para visualização/decisão.

## Como acessar

Após implementar, acesse `https://...lovable.app/logos` no preview.

## Próximo passo (depois de você escolher)

Quando me disser "quero a opção X", eu gero as variantes finais (logo claro, logo escuro, versão horizontal e versão ícone) e aplico no Navbar e Footer.
