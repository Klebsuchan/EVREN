# Guia de Contribuição — Evren Visual Studio 🤝

Agradecemos o seu interesse em contribuir para a landing page da **Evren Visual Studio**! Este documento orienta o processo de colaboração, convenções de código e fluxo de envio de alterações.

---

## 🧭 Código de Conduta

Esperamos que todos os colaboradores mantenham um ambiente profissional, colaborativo e respeitoso em todas as discussões, revisões de código e interações no repositório.

---

## 🛠️ Fluxo de Trabalho (Git Workflow)

1. **Faça um Fork do repositório** para a sua conta GitHub.
2. **Crie uma branch descritiva** para a sua funcionalidade ou correção:
   ```bash
   git checkout -b feature/novo-filtro-galeria
   # ou
   git checkout -b fix/responsividade-mobile-hero
   ```
3. **Execute o projeto localmente** e teste suas alterações:
   ```bash
   npm install
   npm run dev
   ```
4. **Valide os testes automatizados e o build:**
   ```bash
   npx tsx --test src/utils/pricing.test.ts
   npm run build
   ```
5. **Faça commit das suas mudanças** seguindo as convenções de commits semânticos.
6. **Envie a sua branch** para o seu fork:
   ```bash
   git push origin feature/novo-filtro-galeria
   ```
7. **Abra um Pull Request (PR)** para a branch `main` do repositório original.

---

## 📝 Convenção de Mensagens de Commit

Utilizamos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade (ex: `feat: adicionar filtro de vídeos corporativos`)
- `fix:` Correção de bug (ex: `fix: ajustar espaçamento do carrossel mobile`)
- `docs:` Atualizações na documentação (ex: `docs: atualizar parâmetros do WhatsApp no README`)
- `style:` Formatação de código sem alteração lógica
- `refactor:` Refatoração interna de código
- `test:` Adição ou modificação de testes unitários
- `chore:` Manutenção de dependências e configurações

---

## 🎨 Diretrizes de Design & Estilo de Código

- **Componentes**: Mantenha os componentes em `src/components/`, funcionais, tipados e com foco em acessibilidade e responsividade.
- **Identidade Visual**: Respeite a paleta oficial:
  - Vermelho Crimson: `#C9151B`
  - Bordô Profundo: `#990D12` / `#5E060A`
  - Papel Jornal: `#EFEFEF`
  - Preto Carbono: `#0B0B0D`
- **Tailwind CSS**: Utilize classes utilitárias do Tailwind CSS. Evite CSS inline ou ficheiros `.css` avulsos.
- **Mídias**: Todas as imagens e vídeos locais devem ser referenciados a partir do diretório `/public/assets/aistudio/`.

---

## ❓ Dúvidas ou Sugestões

Para dúvidas técnicas ou alinhamento de requisitos, abra uma [Issue no GitHub](https://github.com/Klebsuchan/EVREN/issues) ou contacte a equipa da Evren pelo e-mail `evrenvisualestudio@gmail.com`.
