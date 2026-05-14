## Objetivo
Conectar o Google Search Console à propriedade `https://akilaexecutive.com/`, verificar a posse do domínio e submeter o sitemap para indexação.

## Passos

### 1. Conectar o Google Search Console
Abrir o seletor de conexão do connector `google_search_console`. Você faz login com a conta Google que vai gerenciar o Search Console deste site.

### 2. Obter token de verificação (método META)
Chamar o endpoint de verificação do Google para obter uma meta tag única no formato:
```html
<meta name="google-site-verification" content="<token>" />
```

### 3. Adicionar a meta tag em `src/routes/__root.tsx`
Inserir a tag no `head()` da rota raiz, para que apareça em todas as páginas (incluindo `/`).

### 4. Publicar o site
Você precisa publicar a versão atual em `https://akilaexecutive.com` para o Google conseguir buscar a meta tag no HTML servido. Vou pedir para você publicar antes de eu rodar o passo 5.

### 5. Disparar a verificação
Chamar `siteVerification/v1/webResource` com `verificationMethod=META` para o Google buscar a tag e validar.

### 6. Adicionar o site ao Search Console
`PUT /webmasters/v3/sites/https%3A%2F%2Fakilaexecutive.com%2F` para a propriedade aparecer na sua conta.

### 7. Submeter o sitemap
`PUT /webmasters/v3/sites/https%3A%2F%2Fakilaexecutive.com%2F/sitemaps/https%3A%2F%2Fakilaexecutive.com%2Fsitemap.xml`

O sitemap já existe em `src/routes/sitemap[.]xml.ts` apontando para `https://akilaexecutive.com` e lista todas as rotas públicas (Home, Diagnóstico, Reposicionamento, Mentoria Executiva, Mentoria de Negócios, Imersão, Comunicador, Palestrante).

### 8. Confirmar
Listar os sitemaps registrados via `GET .../sitemaps` para confirmar que o Google aceitou.

## Detalhes técnicos
- Todas as chamadas usam o gateway: `https://connector-gateway.lovable.dev/google_search_console/...` com headers `Authorization: Bearer $LOVABLE_API_KEY` e `X-Connection-Api-Key: $GOOGLE_SEARCH_CONSOLE_API_KEY`.
- O identificador da propriedade usa barra final: `https://akilaexecutive.com/`.
- A verificação só funciona depois que a meta tag estiver no HTML servido em produção — por isso é obrigatório publicar entre os passos 3 e 5.
- A indexação real (páginas aparecendo no Google) leva de horas a alguns dias após a submissão, mesmo com sitemap aceito.

## O que você precisa fazer
- Aprovar este plano
- Selecionar/criar a conexão Google quando o seletor abrir
- **Publicar o site** quando eu pedir (após inserir a meta tag)
