# Changelog — Evren Visual Studio 📜

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [2.0.0] - 2026-10-29

### 🚀 Adicionado
- **Reconstrução Visual Baseada no `MODELO.jfif`**:
  - Hero Spotlight em Vermelho Crimson (`#C9151B`) com tipografia monumental escalonada (`IMPACTO COMEÇA AQUI`).
  - Barra de navegação em cápsula flutuante (*pill frame*) com botão branco de conversão rápida.
  - Seletor interativo com **7 vídeos oficiais** incorporados no Hero e no Cinema Player.
  - Divisórias recortadas em SVG simulando papel rasgado (*torn-paper edges*).
  - Secção institucional em papel off-white (`#EFEFEF`) com **5 cartões angulados em leque (*fanned cards*)**.
  - Marca d'água monumental de numerais de fundo (`01` a `05`).
  - Carrossel trifásico (*3-panel carousel*) em preto carbono (`#0B0B0D`) destacando o Pacote Premium de Casamento.
  - Faixa animada de marquee vermelho com chamada promocional de 30% OFF.
- **Acervo Completo Extraído do Arquivo ZIP**:
  - 49 novas fotografias em alta resolução de casamentos reais, noivados tradicionais, eventos ao vivo e ensaios de estúdio.
  - 2 novos vídeos de alta qualidade: Spot Comercial de Casamento e Reel de Apresentadora de TV.
  - Gaveta expansível (*drawer*) para explorar as 49 imagens com visualização em modal full-screen.
- **Página 11 do Portfólio**: Inclusão do arquivo `PORTFÓLIO EVREN11.jpg.jpeg` destacando ensaios fotográficos e câmara profissional Canon EOS RP.
- **Documentos Oficiais para Download**: Botões dedicados para download do `PORTFÓLIO EVREN.pdf` e do `CARTÃO DE VISITA EVREN.pdf`.
- **Motor de Preços e Testes Unitários**:
  - Utilitário `src/utils/pricing.ts` para cálculo de 30% de desconto e formatação oficial em Kwanzas (`Kz`).
  - Bateria de testes automatizados com Node Test Runner (`src/utils/pricing.test.ts`).
- **Integração com WhatsApp**: Formulário com mensagens formatadas dinamicamente para os terminais `+244 927 399 908` e `+244 951 757 665`.

### ⚡ Otimizado
- Redução e compressão do PDF do Portfólio de 107 MB para 20 MB com resolução de 300 DPI, contornando o limite estrito do GitHub e otimizando o carregamento web.
- Carregamento imediato de imagens na galeria para evitar atrasos na decodificação.

---

## [1.0.0] - 2026-10-24

### 🚀 Adicionado
- Estrutura inicial do projeto com Vite, React 19, TypeScript e Tailwind CSS v4.
- Inclusão dos primeiros ativos da marca Evren Visual Studio.
- Metadados do projeto e configurações básicas do servidor.
