import React, { useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { COMPANY_INFO, VIDEO_REELS } from '../data/evrenData.ts';
import { TornPaperEdge } from './TornPaperEdge.tsx';

interface HeroSectionProps {
  onSelectPromoScroll: () => void;
  onSelectPortfolioScroll: () => void;
}

/**
 * Recreates the exact crimson red spotlight Hero composition of MODELO.jfif:
 * - Top-left staggered blocky uppercase display headline ("CRIATIVIDADE / COMEÇA / AQUI")
 * - Center dynamic visual centerpiece + video switcher
 * - Center-right floating promo callout + white pill CTA button ("RESERVAR PACOTE")
 * - Bottom-left stacked-tab framed card ("ESTÚDIO & EVENTOS" + white footer strip)
 * - Bottom-right giant numeric counter ("EM ______ 10 ÁREAS CRIATIVAS")
 * - Torn paper bottom edge transitioning to #EFEFEF
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectPromoScroll,
  onSelectPortfolioScroll
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const currentVideo = VIDEO_REELS[activeVideoIndex];

  return (
    <section
      id="topo"
      className="relative overflow-hidden text-white select-none"
      style={{
        background:
          'radial-gradient(circle at 58% 42%, #FF2A2A 0%, #D91118 42%, #8A070C 78%, #4A0306 100%)'
      }}
    >
      {/* Subtle studio grid texture overlay */}
      <div className="absolute inset-0 bg-grid-texture-dark pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pt-8 pb-14 md:pt-12 md:pb-20">
        {/* Top Staggered Display Headline + Center Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Top Staggered Headline ("STRENGTH / STARTS / HERE" -> "IMPACTO / COMEÇA / AQUI") */}
          <div className="lg:col-span-7 z-20">
            <h1 className="font-display uppercase text-white leading-[0.92] tracking-tight">
              <span className="block text-[44px] sm:text-[68px] xl:text-[86px]">
                IMPACTO
              </span>
              <span className="block text-[44px] sm:text-[68px] xl:text-[86px] pl-8 sm:pl-20 md:pl-28">
                COMEÇA
              </span>
              <span className="flex flex-wrap items-baseline gap-4 sm:gap-8">
                <span className="text-[44px] sm:text-[68px] xl:text-[86px]">AQUI</span>
                <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-white/85">
                  EVREN VISUAL STUDIO · LOBITO, ANGOLA
                </span>
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-white/90 max-w-xl font-normal leading-relaxed">
              Agência criativa e produtora visual na{' '}
              <strong className="font-bold text-white">Zona Comercial 28, Município do Lobito</strong>
              . Design gráfico, identidade corporativa, produção de vídeo, cobertura fotográfica e
              impressão de grandes formatos.
            </p>
          </div>

          {/* Right-of-Center Floating Promo Callout + White Pill CTA (matching MODELO.jfif) */}
          <div className="lg:col-span-5 lg:pt-12 flex flex-col items-start lg:items-start lg:pl-8 z-20 space-y-4">
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white/95 leading-snug">
                GRANDE PROMOÇÃO <strong className="font-extrabold">30% DE DESCONTO</strong>
                <br />
                EM TODOS OS PACOTES ATÉ DEZEMBRO
              </p>
              <p className="text-[11px] font-mono-num text-white/80">
                Casamento · Corporativo · Chá de Panela · Aniversário
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onSelectPromoScroll}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#111111] text-xs font-extrabold uppercase tracking-wider shadow-2xl transition-transform active:scale-95 cursor-pointer"
              >
                Reservar Pacote
              </button>
              <button
                type="button"
                onClick={onSelectPortfolioScroll}
                className="px-5 py-3.5 rounded-full border border-white/60 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Ver Portfólio ({VIDEO_REELS.length} Vídeos)
              </button>
            </div>
          </div>
        </div>

        {/* Centerpiece Visual Stage + Bottom-Left Framed Box + Bottom-Right Counter */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Bottom-Left Framed Card matching MODELO.jfif "DISCIPLINE / STAY CONSISTENT" box */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="max-w-[310px] mx-auto lg:mx-0">
              {/* Stacked top card tabs effect from MODELO.jfif */}
              <div className="mx-3 h-1.5 bg-white/40 border-t border-x border-white/70" />
              <div className="mx-1.5 h-1.5 bg-white/70 border-t border-x border-white" />

              <div className="border-2 border-white bg-[#B80D14] shadow-2xl overflow-hidden">
                <div className="px-3.5 py-2 border-b border-white/30 flex items-center justify-between">
                  <span className="font-display text-xs uppercase tracking-wider text-white">
                    ESTÚDIO & EVENTOS
                  </span>
                  <span className="font-mono-num text-[10px] text-white/85">
                    {COMPANY_INFO.contacts.primaryPhone}
                  </span>
                </div>

                {/* Real Evren Team Photo / Video Thumbnail */}
                <div
                  onClick={onSelectPortfolioScroll}
                  className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer group"
                >
                  <img
                    src="/assets/aistudio/PORTF_LIO_EVREN9.jpg_d5776310.jpeg"
                    alt="Bastidores e Equipamento Evren Visual Studio"
                    className="w-full h-full object-cover contrast-125 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                      Equipa & Equipamento Cinema 4K →
                    </span>
                  </div>
                </div>

                {/* Crisp White Bottom Caption Bar */}
                <div className="bg-white text-[#111111] px-3 py-2 text-center">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider leading-tight">
                    ZONA COMERCIAL 28 · MUNICÍPIO DO LOBITO
                  </div>
                  <div className="text-[9px] font-semibold uppercase tracking-widest text-neutral-600">
                    PARCEIROS ESTRATÉGICOS DA SUA MARCA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Dynamic Video Showreel Stage (7 Real Videos Switcher) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden border-2 border-white/80 bg-[#0B0B0D] shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
              <div className="px-4 py-2.5 bg-[#111111] border-b border-white/15 flex items-center justify-between gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-white truncate">
                  {currentVideo.category} · {currentVideo.title}
                </span>
                <button
                  type="button"
                  onClick={() => setIsMuted((m) => !m)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white bg-[#D91118] px-2.5 py-1 rounded-full cursor-pointer shrink-0"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Som</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Ativo</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative aspect-video bg-black">
                <video
                  key={currentVideo.src}
                  src={currentVideo.src}
                  poster={currentVideo.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              {/* 7-Video Quick Switcher Pills */}
              <div className="p-3 bg-[#111111] border-t border-white/10 flex items-center gap-1.5 overflow-x-auto">
                {VIDEO_REELS.map((reel, idx) => {
                  const active = idx === activeVideoIndex;
                  return (
                    <button
                      key={reel.id}
                      type="button"
                      onClick={() => setActiveVideoIndex(idx)}
                      className={`px-2.5 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer ${
                        active
                          ? 'bg-[#D91118] text-white'
                          : 'bg-white/10 text-white/75 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>
                        0{idx + 1}. {reel.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom-Right Giant Stat Counter matching MODELO.jfif "AT ______ 12 LOCATIONS" */}
          <div className="lg:col-span-3 order-3 flex flex-col justify-end">
            <div className="flex items-baseline justify-between lg:justify-end gap-3 border-b border-white/40 pb-2">
              <span className="font-display text-sm sm:text-base uppercase tracking-wider text-white">
                EM
              </span>
              <span className="flex-1 border-b border-white/50 mx-2 mb-1" />
              <div className="text-right">
                <div className="font-display text-5xl sm:text-6xl font-black leading-none text-white">
                  10
                </div>
                <div className="font-display text-xs sm:text-sm uppercase tracking-wider text-white mt-1">
                  ÁREAS CRIATIVAS
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono-num text-white/90">
              <span>MARCAÇÃO: {COMPANY_INFO.contacts.primaryPhone}</span>
              <span>{COMPANY_INFO.contacts.secondaryPhone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Jagged Torn Paper Transition into the Light Off-White Section (#EFEFEF) */}
      <TornPaperEdge fillColor="#EFEFEF" />
    </section>
  );
};
