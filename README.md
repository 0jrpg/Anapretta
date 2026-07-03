# Ana Pretta — Links

Página em Next.js (App Router) para a Loja Ana Pretta: Instagram, WhatsApp, e-mail, equipe de vendas e mapa.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Publicar no Vercel

**Opção A — pelo site (mais fácil):**
1. Suba essa pasta para um repositório no GitHub (crie um repo vazio e faça `git init`, `git add .`, `git commit -m "primeira versão"`, `git push`).
2. Entre em https://vercel.com, clique em "Add New Project" e importe o repositório.
3. O Vercel detecta Next.js automaticamente — não precisa configurar nada. Clique em "Deploy".

**Opção B — pela linha de comando:**
```bash
npm install -g vercel
vercel
```
Siga as perguntas no terminal (login, nome do projeto, etc). Ele te dá um link já publicado.

## ⚠️ Atenção: foto de perfil

A foto está usando o link temporário do CDN do WhatsApp (`media-gru2-1.cdn.whatsapp.net/...`). **Esse link expira** (tem data de validade embutida na URL) e vai parar de funcionar em algum momento.

Recomendo:
1. Baixar a foto atual (ou uma nova) e salvar em `public/foto-ana-pretta.jpg`.
2. Trocar o `src` da imagem em `app/page.tsx` para `/foto-ana-pretta.jpg`.

Isso deixa a foto hospedada no próprio site, sem depender de um link que pode quebrar.

## Onde editar o conteúdo

Tudo fica em `app/page.tsx`:
- Links do Instagram, WhatsApp e e-mail.
- Lista de vendedoras (array `sellers`, com nome e telefone).
- Texto da assinatura ("Peças escolhidas com cuidado...").
- Link do mapa (iframe do Google Maps).

As cores, fontes e animações ficam em `app/globals.css` (tema geral) e `app/page.module.css` (estilo dos elementos da página).
