import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Eye } from 'lucide-react';
import { PROMO_PACKAGES, PackageTier } from '../data/evrenData.ts';
import {
  formatKwanza,
  calculatePackageSavings,
  filterPackagesByCategory
} from '../utils/pricing.ts';

interface PackagesSectionProps {
  onSelectPackageForBooking: (packageId: string) => void;
  onOpenLightboxImage: (src: string, title: string, subtitle: string) => void;
}

/**
 * Recreates the exact dark carbon-black (#0B0B0D) section of MODELO.jfif:
 * - 3-panel horizontal carousel (< Left B&W Photo | Center Crisp White Split Card "START PACK / GET STARTED" | Right B&W Photo >)
 * - Pagination dash/dots indicator below carousel
 * - Complete 13-package category comparison grid + 5 official promotional flyers
 * - Giant crimson red (#D91118) marquee banner with 8-point starburst ("SPECIAL OFFERS ✸ GRANDE PROMOÇÃO 30% OFF")
 */
export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackageForBooking,
  onOpenLightboxImage
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PackageTier['categoryId']>('casamento');
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const categoryTabs: Array<{
    id: PackageTier['categoryId'];
    label: string;
    startingPrice: string;
    flyerSrc: string;
  }> = [
    {
      id: 'casamento',
      label: 'Casamento (4 Pacotes)',
      startingPrice: '121.100 Kz a 700.000 Kz',
      flyerSrc: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.54_cc614ad1.jpeg'
    },
    {
      id: 'corporativo',
      label: 'Eventos Corporativos (3 Pacotes)',
      startingPrice: '32.900 Kz a 119.000 Kz',
      flyerSrc: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.56_e8e1f087.jpeg'
    },
    {
      id: 'cha-de-panela',
      label: 'Chá de Panela (3 Pacotes)',
      startingPrice: '32.900 Kz a 113.400 Kz',
      flyerSrc: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.52_490df666.jpeg'
    },
    {
      id: 'aniversario',
      label: 'Aniversário (3 Pacotes)',
      startingPrice: '23.100 Kz a 51.100 Kz',
      flyerSrc: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.55_4b3197fe.jpeg'
    }
  ];

  const activeCarouselPkg = PROMO_PACKAGES[carouselIndex] || PROMO_PACKAGES[0];
  const activeSavings = calculatePackageSavings(activeCarouselPkg);

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + PROMO_PACKAGES.length) % PROMO_PACKAGES.length);
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % PROMO_PACKAGES.length);
  };

  const visiblePackages = filterPackagesByCategory(PROMO_PACKAGES, selectedCategory);
  const currentTabMeta =
    categoryTabs.find((tab) => tab.id === selectedCategory) || categoryTabs[0];

  return (
    <section
      id="pacotes"
      className="relative bg-[#0B0B0D] text-white bg-grid-texture-dark pt-14 pb-8 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 space-y-16">
        {/* PART 1: MODELO.JFIF 3-PANEL CAROUSEL SHOWCASE */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D91118]">
              GRANDE PROMOÇÃO · 30% DE DESCONTO VÁLIDA ATÉ DEZEMBRO
            </div>
            <h2 className="font-display text-3xl sm:text-5xl uppercase text-white tracking-tight">
              PACOTES EM DESTAQUE ({carouselIndex + 1}/{PROMO_PACKAGES.length})
            </h2>
          </div>

          <div className="relative flex items-center justify-center gap-4 lg:gap-8">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={handlePrevCarousel}
              className="p-2.5 rounded-full border border-white/25 hover:border-white hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0 z-20"
              aria-label="Pacote anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 3-Column Stage matching MODELO.jfif bottom section */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Monochrome Image Frame */}
              <div
                onClick={() =>
                  onOpenLightboxImage(
                    activeCarouselPkg.showcaseLeftImage,
                    `${activeCarouselPkg.categoryLabel} — Fotografia Real Evren`,
                    activeCarouselPkg.name
                  )
                }
                className="hidden lg:block lg:col-span-3 h-[340px] overflow-hidden bg-neutral-900 border border-white/15 cursor-pointer group relative"
              >
                <img
                  src={activeCarouselPkg.showcaseLeftImage}
                  alt={activeCarouselPkg.categoryLabel}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="font-display text-xs uppercase tracking-wider text-white/90">
                    EVREN STUDIO · {activeCarouselPkg.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Center Crisp White Split Card (matching MODELO.jfif "START PACK / GET STARTED" white card) */}
              <div className="lg:col-span-6 bg-white text-[#111111] p-5 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.8)] border-2 border-white">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
                  {/* Left half of White Card: Photo + Brand Caption + Huge Pack Name at Bottom */}
                  <div className="sm:col-span-6 flex flex-col justify-between">
                    <div>
                      <div
                        onClick={() =>
                          onOpenLightboxImage(
                            activeCarouselPkg.flyerImage,
                            `Cartaz Oficial — ${activeCarouselPkg.name}`,
                            `Promoção 30% OFF: ${formatKwanza(activeCarouselPkg.promoPriceKz)}`
                          )
                        }
                        className="h-44 w-full overflow-hidden bg-neutral-900 cursor-pointer group relative"
                      >
                        <img
                          src={activeCarouselPkg.showcaseLeftImage}
                          alt={activeCarouselPkg.name}
                          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="absolute top-2 left-2 bg-[#D91118] text-white text-[10px] font-extrabold uppercase px-2 py-0.5">
                          -{activeSavings.discountPercentage}% OFF
                        </span>
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mt-2">
                        EVREN VISUAL STUDIO
                      </div>
                    </div>

                    <div className="pt-6">
                      <div className="font-display text-2xl sm:text-3xl uppercase leading-[0.95] text-[#111111]">
                        {activeCarouselPkg.shortPackName}
                      </div>
                      <div className="mt-1.5 flex items-baseline gap-2">
                        <span className="font-display font-mono-num text-xl font-black text-[#D91118]">
                          {formatKwanza(activeCarouselPkg.promoPriceKz)}
                        </span>
                        <span className="font-mono-num text-xs line-through text-neutral-400">
                          {formatKwanza(activeCarouselPkg.originalPriceKz)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right half of White Card: Top Hook + Middle Note + Deliverables + Red Pill CTA */}
                  <div className="sm:col-span-6 flex flex-col justify-between space-y-4">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#111111] leading-snug">
                        {activeCarouselPkg.categoryLabel.toUpperCase()} —{' '}
                        {activeCarouselPkg.subtitle.toUpperCase()}
                      </p>
                      <p className="text-[11px] text-neutral-400 mt-3 leading-tight">
                        Válido até Dezembro
                        <br />
                        Poupança de {activeSavings.savingsFormatted}
                      </p>
                    </div>

                    <div className="space-y-1">
                      {activeCarouselPkg.features.slice(0, 5).map((feat, i) => (
                        <div
                          key={i}
                          className="text-[11px] font-extrabold uppercase tracking-tight text-neutral-800 leading-tight"
                        >
                          • {feat}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => onSelectPackageForBooking(activeCarouselPkg.id)}
                        className="w-full py-2.5 px-5 rounded-full bg-[#C81018] hover:bg-[#990D12] text-white text-[11px] font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                      >
                        Reservar Pacote
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Monochrome Image Frame */}
              <div
                onClick={() =>
                  onOpenLightboxImage(
                    activeCarouselPkg.showcaseRightImage,
                    `${activeCarouselPkg.categoryLabel} — Portfólio Evren`,
                    activeCarouselPkg.name
                  )
                }
                className="hidden lg:block lg:col-span-3 h-[340px] overflow-hidden bg-neutral-900 border border-white/15 cursor-pointer group relative"
              >
                <img
                  src={activeCarouselPkg.showcaseRightImage}
                  alt={activeCarouselPkg.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="font-display text-xs uppercase tracking-wider text-white/90">
                    VER CARTAZ OFICIAL →
                  </span>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={handleNextCarousel}
              className="p-2.5 rounded-full border border-white/25 hover:border-white hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0 z-20"
              aria-label="Próximo pacote"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots matching MODELO.jfif ("— • • •") */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {PROMO_PACKAGES.map((pkg, idx) => {
              const active = idx === carouselIndex;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setCarouselIndex(idx)}
                  aria-label={`Ver ${pkg.name}`}
                  className={`h-1.5 transition-all cursor-pointer rounded-full ${
                    active ? 'w-7 bg-white' : 'w-1.5 bg-white/35 hover:bg-white/60'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* PART 2: COMPLETE 13-PACKAGE COMPARISON BY CATEGORY + 5 OFFICIAL FLYERS */}
        <div className="pt-12 border-t border-white/15 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D91118]">
                TABELAS COMPLETAS · TODOS OS 13 PACOTES COM 30% OFF
              </div>
              <h3 className="font-display text-2xl sm:text-4xl uppercase text-white mt-1">
                COMPARE POR CATEGORIA DE EVENTO
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onOpenLightboxImage(
                    currentTabMeta.flyerSrc,
                    `Cartaz Oficial — ${currentTabMeta.label}`,
                    'Grande Promoção 30% OFF até Dezembro'
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 hover:border-white text-xs font-bold uppercase tracking-wider text-white cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#D91118]" />
                <span>Ver Cartaz Oficial desta Categoria</span>
              </button>

              {selectedCategory === 'casamento' && (
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightboxImage(
                      '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.35.30_d17ff0d4.jpeg',
                      'Cartaz Oficial — Pacote Premium Casamento Ilimitado (700 Mil Kz)',
                      'De 1.000.000 Kz por 700.000 Kz (30% OFF)'
                    )
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D91118] hover:bg-[#990D12] text-xs font-extrabold uppercase tracking-wider text-white cursor-pointer"
                >
                  <span>Cartaz Premium 700 Mil Kz</span>
                </button>
              )}
            </div>
          </div>

          {/* 4 Category Tabs */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            role="tablist"
            aria-label="Categorias de Pacotes Promocionais"
          >
            {categoryTabs.map((tab) => {
              const active = tab.id === selectedCategory;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`text-left p-4 border transition-all cursor-pointer ${
                    active
                      ? 'bg-[#D91118] border-white text-white shadow-xl'
                      : 'bg-[#141418] border-white/15 text-neutral-300 hover:border-white/40'
                  }`}
                >
                  <div className="font-display text-sm uppercase">{tab.label}</div>
                  <div className="font-mono-num text-xs mt-1 text-white/85">
                    {tab.startingPrice}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Category Cards Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              visiblePackages.length === 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-3'
            } gap-6`}
          >
            {visiblePackages.map((pkg) => {
              const { savingsFormatted, discountPercentage } = calculatePackageSavings(pkg);
              return (
                <div
                  key={pkg.id}
                  className={`p-6 flex flex-col justify-between border-2 transition-all ${
                    pkg.isPremium
                      ? 'bg-white text-[#111111] border-[#D91118] shadow-2xl'
                      : 'bg-[#141418] text-white border-white/15 hover:border-white/40'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono-num font-bold uppercase">
                      <span className="text-[#D91118]">{pkg.photoCountLabel}</span>
                      <span
                        className={
                          pkg.isPremium
                            ? 'bg-[#D91118] text-white px-2 py-0.5'
                            : 'text-emerald-400'
                        }
                      >
                        -{discountPercentage}% OFF
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-xl uppercase leading-tight">{pkg.name}</h4>
                      <p
                        className={`text-xs mt-1 ${
                          pkg.isPremium ? 'text-neutral-600' : 'text-neutral-400'
                        }`}
                      >
                        {pkg.subtitle}
                      </p>
                    </div>

                    <div
                      className={`p-4 border ${
                        pkg.isPremium
                          ? 'bg-neutral-100 border-neutral-300'
                          : 'bg-[#0B0B0D] border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className={pkg.isPremium ? 'text-neutral-500' : 'text-neutral-400'}>
                          Antes:
                        </span>
                        <span className="font-mono-num line-through text-[#D91118]">
                          {formatKwanza(pkg.originalPriceKz)}
                        </span>
                      </div>
                      <div className="font-display font-mono-num text-2xl sm:text-3xl font-black mt-0.5">
                        {formatKwanza(pkg.promoPriceKz)}
                      </div>
                      <div
                        className={`text-[11px] font-mono-num font-bold mt-0.5 ${
                          pkg.isPremium ? 'text-[#D91118]' : 'text-emerald-400'
                        }`}
                      >
                        Poupa {savingsFormatted}
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#D91118] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-current/10 space-y-2">
                    <button
                      type="button"
                      onClick={() => onSelectPackageForBooking(pkg.id)}
                      className="w-full py-3 px-5 rounded-full bg-[#D91118] hover:bg-[#990D12] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Reservar Este Pacote
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightboxImage(
                          pkg.flyerImage,
                          `${pkg.categoryLabel} — ${pkg.name}`,
                          `Preço Promocional: ${formatKwanza(pkg.promoPriceKz)}`
                        )
                      }
                      className={`w-full text-center text-[11px] font-bold uppercase tracking-wider py-1 cursor-pointer ${
                        pkg.isPremium
                          ? 'text-neutral-600 hover:text-[#111111]'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Ver Cartaz Original
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PART 3: GIANT CRIMSON RED MARQUEE BANNER WITH 8-POINT STAR (matching MODELO.jfif bottom banner) */}
      <div className="mt-16 pt-8 border-t border-white/10 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8">
              <span className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-[#D91118] tracking-tight">
                OFERTAS ESPECIAIS 30% OFF
              </span>
              <EightPointStar />
              <span className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-[#D91118] tracking-tight">
                PACOTES ATÉ DEZEMBRO
              </span>
              <EightPointStar />
              <span className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-[#D91118] tracking-tight">
                EVREN VISUAL STUDIO
              </span>
              <EightPointStar />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EightPointStar: React.FC = () => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-14 sm:h-14 text-[#D91118] shrink-0"
    aria-hidden="true"
  >
    <path
      d="M32 0L36.5 23.2L54.6 9.4L40.8 27.5L64 32L40.8 36.5L54.6 54.6L36.5 40.8L32 64L27.5 40.8L9.4 54.6L23.2 36.5L0 32L23.2 27.5L9.4 9.4L27.5 23.2L32 0Z"
      fill="currentColor"
    />
  </svg>
);
