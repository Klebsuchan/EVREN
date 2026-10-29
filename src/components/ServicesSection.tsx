import React, { useState, useRef } from 'react';
import { ArrowUpRight, Check, Layers, Maximize2, FileText, Download } from 'lucide-react';
import { motion } from 'motion/react';
import {
  COMPANY_INFO,
  FANNED_CHOOSE_US_CARDS,
  SERVICES_LIST,
  ServiceItem
} from '../data/evrenData.ts';
import { TornPaperEdge } from './TornPaperEdge.tsx';
import { useResponsiveParallax, useCardTilt } from '../hooks/useParallax.ts';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onOpenLightboxImage: (src: string, title: string, subtitle: string) => void;
}

/**
 * Recreates the exact middle light-paper (#EFEFEF) section of MODELO.jfif:
 * - Centered subtle rule + "EVREN VISUAL STUDIO" micro-header
 * - Giant light-gray (#D4D4D4) background watermark typography: "POR QUE ESCOLHEM / A EVREN STUDIO"
 * - Desktop: 5 overlapping tilted fanned cards (alternating photo & deep crimson #980D13 cards)
 * - Mobile: Stacked horizontal accordion strips with active expanded crimson card (matching MODELO.jfif mobile view)
 * - Below: Complete 10-Service Interactive Explorer + Quem Somos Story & Official PDFs
 * - Bottom: TornPaperEdge transitioning into the carbon-black (#0B0B0D) section
 */
export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForQuote,
  onOpenLightboxImage
}) => {
  const [activeFanCardId, setActiveFanCardId] = useState<string>('fan-3');
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_LIST[0]);

  const handleFanCardSelect = (fanId: string, serviceId: string) => {
    setActiveFanCardId(fanId);
    const matched = SERVICES_LIST.find((s) => s.id === serviceId);
    if (matched) {
      setActiveService(matched);
    }
  };

  const sectionRef = useRef<HTMLElement>(null);
  const { y: yWatermark } = useResponsiveParallax([-35, 35], sectionRef);
  const { y: ySlides } = useResponsiveParallax([18, -18], sectionRef);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative bg-[#EFEFEF] text-[#111111] bg-grid-texture-light pt-8 md:pt-14 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-24 space-y-20">
        {/* PART 1: "WHY PEOPLE CHOOSE US" FANNED CARDS STAGE (MODELO.jfif exact match) */}
        <div className="relative">
          {/* Top thin centered line with micro-label */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-24 sm:w-44 h-px bg-neutral-300" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-neutral-400">
              EVREN VISUAL STUDIO
            </span>
            <span className="w-24 sm:w-44 h-px bg-neutral-300" />
          </div>

          {/* Giant Light-Gray Background Watermark Text with Parallax Drift */}
          <motion.div
            style={{ y: yWatermark }}
            className="text-center select-none pointer-events-none will-change-transform"
          >
            <h2 className="font-display uppercase text-[#D5D5D5] text-[38px] sm:text-[68px] md:text-[88px] lg:text-[108px] leading-[0.9] tracking-tight">
              POR QUE ESCOLHEM
              <br />
              A EVREN STUDIO
            </h2>
          </motion.div>

          {/* DESKTOP FANNED / TILTED OVERLAPPING CARDS DECK */}
          <div className="hidden lg:flex items-center justify-center -mt-10 xl:-mt-14 pt-6 pb-14 px-4">
            <div className="relative flex items-center justify-center">
              {FANNED_CHOOSE_US_CARDS.map((card, index) => {
                const isSelected = card.id === activeFanCardId;
                const isCrimson = card.variant === 'crimson' || isSelected;
                return (
                  <div
                    key={card.id}
                    onClick={() => handleFanCardSelect(card.id, card.serviceId)}
                    style={{
                      transform: `rotate(${card.rotationDeg}deg) translateY(${
                        isSelected ? card.translateY - 14 : card.translateY
                      }px)`,
                      zIndex: isSelected ? 30 : 10 + index
                    }}
                    className={`w-[245px] xl:w-[265px] h-[330px] xl:h-[350px] -mx-5 p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.28)] border-2 ${
                      isCrimson
                        ? 'bg-[#990D12] text-white border-white'
                        : 'bg-white text-[#111111] border-white hover:border-[#D91118]'
                    }`}
                  >
                    {/* Background photo for photo-variant cards */}
                    {!isCrimson && (
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={card.imageSrc}
                          alt={card.titleLines.join(' ')}
                          className="w-full h-full object-cover grayscale contrast-125 opacity-35"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/55 to-white/95" />
                      </div>
                    )}

                    {/* Top Bold Uppercase Title */}
                    <div className="relative z-10">
                      <div className="font-display text-base xl:text-lg uppercase leading-[1.05] tracking-tight">
                        {card.titleLines.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>

                    {/* Middle subtle image preview on photo cards */}
                    {!isCrimson && (
                      <div className="relative z-10 my-2 h-28 overflow-hidden border border-neutral-300">
                        <img
                          src={card.imageSrc}
                          alt={card.titleLines.join(' ')}
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                      </div>
                    )}

                    {/* Bottom Right Aligned Copy (matching MODELO.jfif crimson card bottom-right text) */}
                    <div className="relative z-10 text-right space-y-1.5 mt-auto">
                      <p
                        className={`text-[11px] font-medium leading-snug ${
                          isCrimson ? 'text-white/90' : 'text-neutral-800'
                        }`}
                      >
                        {card.subtitle}
                      </p>
                      <div
                        className={`text-[9px] font-extrabold uppercase tracking-wider ${
                          isCrimson ? 'text-white' : 'text-[#990D12]'
                        }`}
                      >
                        {card.statOrDetail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE STACKED ACCORDION STRIPS (matching MODELO.jfif mobile view on right) */}
          <div className="lg:hidden mt-4 space-y-1.5 max-w-md mx-auto">
            {FANNED_CHOOSE_US_CARDS.map((card) => {
              const isExpanded = card.id === activeFanCardId;
              return (
                <div
                  key={card.id}
                  onClick={() => handleFanCardSelect(card.id, card.serviceId)}
                  className="border border-neutral-300 overflow-hidden transition-all cursor-pointer shadow-sm"
                >
                  {isExpanded ? (
                    <div className="bg-[#990D12] text-white p-5 space-y-6">
                      <div className="font-display text-lg uppercase leading-tight">
                        {card.titleLines.join(' ')}
                      </div>
                      <p className="text-xs text-white/90 leading-relaxed">{card.subtitle}</p>
                      <div className="text-right text-[10px] font-extrabold uppercase tracking-wider text-white/95 pt-4 border-t border-white/20">
                        {card.statOrDetail}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#222225] text-white px-4 py-3 flex items-center justify-between">
                      <span className="font-display text-xs uppercase tracking-wider truncate">
                        {card.titleLines.join(' ')}
                      </span>
                      <span className="text-[10px] font-mono-num text-white/70">+</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: QUEM SOMOS STORY + DOCUMENTOS OFICIAIS (PDF) */}
        <div id="sobre" className="pt-8 border-t border-neutral-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D91118]">
              QUEM SOMOS · ZONA COMERCIAL 28, MUNICÍPIO DO LOBITO
            </div>
            <h3 className="font-display text-3xl sm:text-4xl uppercase text-[#111111] leading-[1.05]">
              VISÃO EMPREENDEDORA E VALORIZAÇÃO DA CRIATIVIDADE EM ANGOLA.
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
              {COMPANY_INFO.aboutParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Official PDFs Download Strip */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPANY_INFO.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 bg-white border border-neutral-300 shadow-sm flex flex-col justify-between gap-3"
                >
                  <div className="flex items-start gap-2.5">
                    <FileText className="w-5 h-5 text-[#D91118] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-extrabold uppercase text-[#111111]">
                        {doc.title}
                      </div>
                      <div className="text-[11px] text-neutral-600 mt-0.5">{doc.subtitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-neutral-200">
                    <a
                      href={doc.path}
                      download
                      className="inline-flex items-center gap-1.5 bg-[#D91118] hover:bg-[#990D12] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar PDF</span>
                    </a>
                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 hover:text-[#D91118] px-2 py-1.5"
                    >
                      Abrir →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Slides Preview on the Right with subtle parallax */}
          <motion.div
            style={{ y: ySlides }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 will-change-transform"
          >
            <div
              onClick={() =>
                onOpenLightboxImage(
                  '/assets/aistudio/PORTF_LIO_EVREN2.jpg_a81ce197.jpeg',
                  'Quem Somos? — Portfólio Oficial Evren (Pág. 02)',
                  'Zona Comercial 28, Município do Lobito, Angola'
                )
              }
              className="group cursor-pointer bg-white p-2 border border-neutral-300 shadow-md"
            >
              <img
                src="/assets/aistudio/PORTF_LIO_EVREN2.jpg_a81ce197.jpeg"
                alt="Slide Oficial Quem Somos Evren Visual Studio"
                className="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform"
              />
              <div className="pt-2 px-1 flex items-center justify-between text-xs font-bold uppercase text-[#111111]">
                <span>Pág. 02 · Quem Somos?</span>
                <Maximize2 className="w-3.5 h-3.5 text-[#D91118]" />
              </div>
            </div>

            <div
              onClick={() =>
                onOpenLightboxImage(
                  '/assets/aistudio/PORTF_LIO_EVREN3.jpg_fbf61186.jpeg',
                  'Nossos 10 Serviços — Portfólio Oficial Evren (Pág. 03)',
                  'Apresentação Institucional Completa'
                )
              }
              className="group cursor-pointer bg-white p-2 border border-neutral-300 shadow-md"
            >
              <img
                src="/assets/aistudio/PORTF_LIO_EVREN3.jpg_fbf61186.jpeg"
                alt="Slide Oficial Nossos Serviços Evren Visual Studio"
                className="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform"
              />
              <div className="pt-2 px-1 flex items-center justify-between text-xs font-bold uppercase text-[#111111]">
                <span>Pág. 03 · Nossos 10 Serviços</span>
                <Maximize2 className="w-3.5 h-3.5 text-[#D91118]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* PART 3: INTERACTIVE 10-SERVICE INDEX & DELIVERABLES */}
        <div className="pt-8 border-t border-neutral-300 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D91118]">
                CATÁLOGO COMPLETO · 10 SERVIÇOS OFICIAIS
              </div>
              <h3 className="font-display text-2xl sm:text-4xl uppercase text-[#111111] mt-1">
                EXPLORE AS NOSSAS 10 ÁREAS DE ACTUAÇÃO
              </h3>
            </div>
            <button
              type="button"
              onClick={() =>
                onOpenLightboxImage(
                  '/assets/aistudio/PORTF_LIO_EVREN11.jpg.jpeg',
                  'Cobertura Fotográfica & Equipamento Canon EOS RP (Pág. 11)',
                  'Formaturas · Eventos · Retratos · Produtos'
                )
              }
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#D91118] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-colors cursor-pointer self-start"
            >
              <Layers className="w-4 h-4" />
              <span>Ver Mosaico Fotográfico (Pág. 11)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 01 to 10 Service Selector */}
            <div className="lg:col-span-5 bg-white border border-neutral-300 divide-y divide-neutral-200 shadow-md">
              {SERVICES_LIST.map((service) => {
                const isSelected = service.id === activeService.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveService(service)}
                    className={`w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#D91118] text-white'
                        : 'hover:bg-neutral-100 text-[#111111]'
                    }`}
                  >
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span
                        className={`font-mono-num text-xs font-extrabold ${
                          isSelected ? 'text-white' : 'text-[#D91118]'
                        }`}
                      >
                        {service.number}.
                      </span>
                      <span className="font-display text-xs sm:text-sm uppercase truncate">
                        {service.title}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </button>
                );
              })}
            </div>

            {/* Right: Active Service Detail Card */}
            <div className="lg:col-span-7 bg-white border-2 border-[#111111] p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                <div>
                  <div className="text-xs font-mono-num font-bold uppercase tracking-wider text-[#D91118]">
                    SERVIÇO {activeService.number} / 10 — {activeService.category}
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl uppercase text-[#111111] mt-1">
                    {activeService.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectServiceForQuote(`servico:${activeService.id}`)}
                  className="px-6 py-3 rounded-full bg-[#D91118] hover:bg-[#990D12] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Solicitar Este Serviço
                </button>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 bg-neutral-100 border border-neutral-200 text-xs sm:text-sm font-semibold text-[#111111]"
                  >
                    <Check className="w-4 h-4 text-[#D91118] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {activeService.tools && (
                <div className="text-xs text-neutral-600 pt-1">
                  <strong className="uppercase text-[#111111]">Ferramentas & Software: </strong>
                  {activeService.tools.join(' · ')}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {activeService.slideImage && (
                  <div
                    onClick={() =>
                      onOpenLightboxImage(
                        activeService.slideImage!,
                        activeService.title,
                        'Slide Oficial do Portfólio Evren'
                      )
                    }
                    className="group cursor-pointer border border-neutral-300 overflow-hidden bg-neutral-950"
                  >
                    <img
                      src={activeService.slideImage}
                      alt={activeService.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="px-3 py-2 bg-[#111111] text-white text-xs font-bold uppercase flex items-center justify-between">
                      <span>Slide Oficial</span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#D91118]" />
                    </div>
                  </div>
                )}

                {activeService.showcaseImage && (
                  <div
                    onClick={() =>
                      onOpenLightboxImage(
                        activeService.showcaseImage!,
                        `Projeto Real — ${activeService.shortTitle}`,
                        'Portfólio Evren Visual Studio'
                      )
                    }
                    className="group cursor-pointer border border-neutral-300 overflow-hidden bg-neutral-950"
                  >
                    <img
                      src={activeService.showcaseImage}
                      alt={activeService.shortTitle}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="px-3 py-2 bg-[#111111] text-white text-xs font-bold uppercase flex items-center justify-between">
                      <span>Trabalhos Reais</span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#D91118]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jagged Torn Paper Transition into the Dark Carbon-Black Section (#0B0B0D) */}
      <TornPaperEdge fillColor="#0B0B0D" />
    </section>
  );
};
