## Objetivo
Substituir o texto "AKILA / Consultoria" da Navbar pela imagem `logo-akila-v2.png`, mantendo legibilidade em mobile e desktop.

## Alterações

**Arquivo: `src/components/Navbar.tsx`**

1. Importar o asset:
   ```ts
   import logoAkila from "@/assets/logo-akila-v2.png";
   ```

2. Substituir o bloco do logo desktop (linhas 13–20) por um `<Link to="/">` contendo um `<img>`:
   - `src={logoAkila}`
   - `alt="Akila Consultoria Executiva"`
   - Altura: `h-10` (40px) no mobile, `md:h-12` (48px) no desktop
   - `w-auto`, `object-contain`
   - Manter o `Link` clicável para `/`

3. Substituir o "AKILA" no header do drawer mobile (linha 97) pela mesma `<img>` com `h-9` para caber bem no topo do menu.

4. Manter altura do header (`h-20`) — o logo cabe confortavelmente.

## Notas técnicas
- O logo v2 já tem o tagline "CONSULTORIA EXECUTIVA" embutido, então o `<span>Consultoria</span>` é removido (evita redundância).
- Alt text descritivo para SEO/acessibilidade.
- Sem mudanças em Footer, rotas, ou outros componentes — escopo restrito à Navbar conforme pedido.

## Verificação
- Conferir preview em viewport mobile (375px) e desktop (1280px) para garantir que a tagline no logo permanece legível.