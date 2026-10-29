# Guia de Publicação & Deploy — Evren Visual Studio 🚀

Este guia detalha como compilar e publicar a landing page em provedores modernos de hospedagem na nuvem.

---

## 📦 1. Compilação Local de Produção

Antes de publicar em qualquer provedor, teste a build estática localmente:

```bash
# Instalar dependências
npm install

# Compilar para produção
npm run build
```

Os arquivos estáticos finais serão gerados na pasta **`dist/`**, incluindo o `index.html`, os pacotes JS/CSS minificados e a pasta `assets/`.

---

## ⚡ 2. Deploy na Vercel (Recomendado para SPAs)

1. Acesse [vercel.com](https://vercel.com/) e conecte com sua conta do GitHub.
2. Selecione o repositório `Klebsuchan/EVREN`.
3. A Vercel detectará automaticamente as configurações do **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Clique em **Deploy**. A landing page estará disponível em poucos segundos com SSL automático e CDN global.

---

## 🌐 3. Deploy no Netlify

1. Acesse [netlify.com](https://www.netlify.com/) e escolha **Add new site > Import an existing project**.
2. Conecte com o GitHub e selecione `Klebsuchan/EVREN`.
3. Defina as seguintes configurações:
   - **Base directory**: `.`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Clique em **Deploy site**.

Para garantir o roteamento correto da SPA, um arquivo `_redirects` pode ser adicionado à pasta `public/` com o conteúdo:
```text
/*    /index.html   200
```

---

## ☁️ 4. Deploy no Google Cloud Run / Docker

Caso deseje empacotar a aplicação em um container Docker:

### Exemplo de `Dockerfile`:
```dockerfile
# Estágio de compilação
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio de execução com Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Compile e execute:
```bash
docker build -t evren-landing-page .
docker run -p 8080:80 evren-landing-page
```

---

## 📱 5. Verificação Pós-Deploy

Após a publicação, certifique-se de testar:
- ✅ Reprodução dos 7 vídeos em navegadores mobile (Safari iOS e Chrome Android).
- ✅ Abertura e download dos PDFs (`PORTFÓLIO EVREN.pdf` e `CARTÃO DE VISITA EVREN.pdf`).
- ✅ Clique nos botões de reserva com abertura correta do WhatsApp no smartphone ou WhatsApp Web no desktop.
