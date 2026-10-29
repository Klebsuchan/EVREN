# Arquitetura Técnica — Evren Visual Studio 🏛️

Este documento descreve as decisões de arquitetura, hierarquia de componentes React, design system e modelagem de dados da landing page.

---

## 🏗️ Visão Geral da Arquitetura

O projeto foi construído como uma aplicação de página única (*Single Page Application* — SPA) com **React 19**, **TypeScript** e **Tailwind CSS v4**, empacotada com o **Vite 8**.

A estrutura prioriza:
1. **Performance**: Zero requisições desnecessárias a servidores externos; todo o acervo de fotos e vídeos é servido localmente e otimizado.
2. **Fidelidade Visual**: Transições ricas em CSS e SVG sem comprometer a fluidez de rolagem.
3. **Conversão de Clientes**: Pontos de contato claros (WhatsApp, E-mail, Formulário e Catálogos PDF) em todas as secções.

---

## 🧩 Hierarquia de Componentes

```text
App (src/App.tsx)
 ├── Navbar (src/components/Navbar.tsx)
 │    └── EvrenLogo (src/components/EvrenLogo.tsx)
 ├── HeroSection (src/components/HeroSection.tsx)
 │    ├── Logo & Vídeo Central em Loop
 │    ├── Seletor Interativo dos 7 Vídeos
 │    ├── Painel de Localização (Lobito)
 │    └── TornPaperEdge (src/components/TornPaperEdge.tsx) [Transição para #EFEFEF]
 ├── ServicesSection (src/components/ServicesSection.tsx)
 │    ├── Marca d'Água Numérica de Fundo (01 a 05)
 │    ├── 5 Cartões Angulados em Leque (Fanned Cards)
 │    ├── Apresentação "Quem Somos" + Downloads de PDF
 │    ├── Explorador das 10 Áreas Criativas
 │    └── TornPaperEdge (src/components/TornPaperEdge.tsx) [Transição para #0B0B0D]
 ├── PackagesSection (src/components/PackagesSection.tsx)
 │    ├── Carrossel Trifásico (3-Panel Package Carousel)
 │    ├── Alternador de Desconto (30% OFF)
 │    ├── Grade Comparativa dos 13 Pacotes
 │    ├── Visualizador Lightbox dos 5 Flyers Originais
 │    └── Faixa Animada Marquee (Vermelho Crimson)
 ├── PortfolioSection (src/components/PortfolioSection.tsx)
 │    ├── Cinema Player para os 7 Vídeos
 │    ├── Galeria Filtrável (Todas as 14 Lâminas Oficiais)
 │    └── Gaveta Expansível do Acervo (49 Fotos do ZIP)
 └── ContactBookingSection (src/components/ContactBookingSection.tsx)
      ├── Formulário Validado com Cálculo Automático
      ├── Gerador Dinâmico de Link para WhatsApp
      └── Rodapé Institucional e Informações de Contacto
```

---

## 🎨 Sistema de Design & Tokens Visuais

### Paleta Primária
- **Crimson Vermelho**: `bg-[#C9151B]` / `text-[#C9151B]` — foco de atenção e autoridade.
- **Bordô Profundo**: `bg-[#5E060A]` e `bg-[#990D12]` — fundos de cartões e gradientes escuros.
- **Off-White Paper**: `bg-[#EFEFEF]` — secção editorial que replica textura de papel de jornal.
- **Carbon Black**: `bg-[#0B0B0D]` — ambiente escuro premium para exibição cinematográfica e tabela de pacotes.

### Componente de Borda de Papel Rasgado (`TornPaperEdge.tsx`)
Utiliza um traçado vetorial SVG com `preserveAspectRatio="none"` e 100% de largura para renderizar dentes e cortes irregulares sem distorção em resoluções ultra-wide ou mobile, conectando suavemente secções de cores contrastantes.

---

## 📊 Estrutura de Dados (`src/data/evrenData.ts`)

Os dados do site são desacoplados e centralizados em `src/data/evrenData.ts`:

- `SERVICES_DATA`: Lista com as 10 áreas criativas, ícones, entregáveis e prazos.
- `PACKAGES_DATA`: Catálogo completo dos 13 pacotes (preço original, preço com 30% OFF, itens inclusos e categoria).
- `FANNED_CHOOSE_US_CARDS`: Dados dos 5 cartões em leque da secção institucional.
- `VIDEO_REELS`: Lista dos 7 vídeos locais com título, duração, descrição e rota do ficheiro `.mp4`.
- `PORTFOLIO_ITEMS`: Campanhas publicitárias, lâminas do portfólio oficial (1 a 14) e fotografias de casamentos.
- `COMPLETE_ARCHIVE_PHOTOS`: Todas as 49 fotografias extraídas do arquivo ZIP.

---

## 🧪 Estratégia de Testes (`src/utils/pricing.test.ts`)

A lógica de cálculo financeiro e descontos é isolada em funções puras:
- `calculateDiscount(originalPrice, percentage)`: Aplica a dedução de 30% sem arredondamentos incorretos.
- `formatKwanza(value)`: Formata valores no padrão monetário angolano (`700.000 Kz`).

Essas funções são validadas através da suíte de testes com cobertura para valores zero, valores padrão e grandes montantes.
