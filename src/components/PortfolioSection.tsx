import React, { useState } from 'react';
import { Maximize2, Play, Search, Film, Grid } from 'lucide-react';
import {
  PORTFOLIO_ITEMS,
  PortfolioItem,
  VIDEO_REELS,
  COMPLETE_ARCHIVE_PHOTOS
} from '../data/evrenData.ts';
import { filterPortfolioItems } from '../utils/pricing.ts';

interface PortfolioSectionProps {
  onOpenLightbox: (item: PortfolioItem) => void;
  onOpenLightboxImage: (src: string, title: string, subtitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenLightbox,
  onOpenLightboxImage
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioItem['category'] | 'todos'>(
    'todos'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideoId, setActiveVideoId] = useState<string>(VIDEO_REELS[0].id);
  const [showFullZipArchive, setShowFullZipArchive] = useState<boolean>(false);

  const activeVideo = VIDEO_REELS.find((v) => v.id === activeVideoId) || VIDEO_REELS[0];

  const categories: Array<{
    id: PortfolioItem['category'] | 'todos';
    label: string;
    count: number;
  }> = [
    { id: 'todos', label: 'Todos os Trabalhos', count: PORTFOLIO_ITEMS.length },
    {
      id: 'design-campanhas',
      label: 'Design & Campanhas',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'design-campanhas').length
    },
    {
      id: 'identidade-branding',
      label: 'Identidade & Outdoors',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'identidade-branding').length
    },
    {
      id: 'casamentos-noivados',
      label: 'Casamentos & Noivados',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'casamentos-noivados').length
    },
    {
      id: 'fotografia-eventos',
      label: 'Eventos & Festivais',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'fotografia-eventos').length
    },
    {
      id: 'retratos-estudio',
      label: 'Retratos & Estúdio',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'retratos-estudio').length
    },
    {
      id: 'slides-oficiais',
      label: 'Apresentação (Págs. 01–13)',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'slides-oficiais').length
    },
    {
      id: 'flyers-promocionais',
      label: 'Tabelas 30% OFF',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'flyers-promocionais').length
    }
  ];

  const filteredItems = filterPortfolioItems(PORTFOLIO_ITEMS, selectedCategory, searchQuery);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-[#0B0B0D] text-white border-t border-white/10 bg-grid-texture-dark"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 space-y-20">
        {/* PART 1: 7-VIDEO CINEMA & SHOWREEL GALLERY */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D91118]">
                PRODUÇÃO AUDIOVISUAL · {VIDEO_REELS.length} VÍDEOS OFICIAIS
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase text-white tracking-tight mt-1">
                CINEMA, CASAMENTOS, EVENTOS & BASTIDORES
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Assista aos vídeos reais da Evren Visual Studio: Spot Oficial de Casamentos, Direção
              Diante das Câmaras, Conferência Magna de Gestão 2026, Vinheta 3D e Bastidores.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Main Video Player */}
            <div className="lg:col-span-7 bg-[#141418] border-2 border-white/20 overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black">
                <video
                  key={activeVideo.src}
                  src={activeVideo.src}
                  poster={activeVideo.poster}
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 bg-white text-[#111111]">
                <div className="text-[11px] font-mono-num font-extrabold uppercase tracking-wider text-[#D91118]">
                  {activeVideo.category} · DURAÇÃO {activeVideo.duration}
                </div>
                <h3 className="font-display text-lg sm:text-xl uppercase mt-0.5">
                  {activeVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 mt-1">{activeVideo.description}</p>
              </div>
            </div>

            {/* 7-Video Playlist */}
            <div className="lg:col-span-5 space-y-2">
              {VIDEO_REELS.map((vid, idx) => {
                const active = vid.id === activeVideo.id;
                return (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => setActiveVideoId(vid.id)}
                    className={`w-full text-left p-3 border transition-all flex items-center gap-3.5 cursor-pointer ${
                      active
                        ? 'bg-[#D91118] border-white text-white shadow-lg'
                        : 'bg-[#141418] border-white/15 text-neutral-300 hover:border-white/40'
                    }`}
                  >
                    <div className="relative w-20 h-14 bg-black shrink-0 overflow-hidden border border-white/20">
                      <img
                        src={vid.poster}
                        alt={vid.title}
                        className="w-full h-full object-cover opacity-85"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                        <Play className="w-4 h-4 fill-white text-white" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono-num uppercase tracking-wider opacity-85">
                        VÍDEO 0{idx + 1} · {vid.category} · {vid.duration}
                      </div>
                      <div className="font-display text-xs sm:text-sm uppercase truncate mt-0.5">
                        {vid.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* PART 2: COMPLETE FILTERABLE PORTFOLIO GALLERY */}
        <div className="pt-12 border-t border-white/15 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D91118]">
                ACERVO COMPLETO DE TRABALHOS REAIS
              </div>
              <h3 className="font-display text-3xl sm:text-5xl uppercase text-white tracking-tight mt-1">
                PORTFÓLIO & GALERIA DE PROJETOS
              </h3>
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-80">
              <label htmlFor="portfolio-search" className="sr-only">
                Pesquisar no portfólio
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="portfolio-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar cliente (ex: LTC, Tuca Mama, NaVia)..."
                  className="w-full bg-[#141418] border border-white/25 rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#D91118]"
                />
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-2 border-b border-white/15 pb-4"
            role="tablist"
            aria-label="Categorias do Portfólio"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'bg-[#D91118] text-white shadow-lg'
                      : 'bg-[#141418] text-neutral-300 hover:text-white border border-white/15'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1.5 font-mono-num opacity-80">({cat.count})</span>
                </button>
              );
            })}
          </div>

          {/* Portfolio Cards Grid */}
          {filteredItems.length === 0 ? (
            <div className="p-12 text-center bg-[#141418] border border-white/15 space-y-3">
              <p className="font-display text-lg uppercase text-white">
                Nenhum projeto encontrado para "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('todos');
                  setSearchQuery('');
                }}
                className="text-xs font-extrabold uppercase tracking-wider text-[#D91118] hover:underline cursor-pointer"
              >
                Limpar filtros e mostrar todos os {PORTFOLIO_ITEMS.length} itens
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  onClick={() => onOpenLightbox(item)}
                  className="group cursor-pointer bg-[#141418] border border-white/15 hover:border-[#D91118] transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative aspect-[4/3] bg-black overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end justify-between p-4">
                      <span className="text-[11px] font-mono-num uppercase tracking-wider text-white/90">
                        {item.deliverables}
                      </span>
                      <span className="w-8 h-8 bg-[#D91118] text-white flex items-center justify-center">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-1 bg-white text-[#111111]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 truncate">
                      <span className="text-[#D91118]">{item.client}</span> · {item.location} ·{' '}
                      {item.year}
                    </div>
                    <h4 className="font-display text-base uppercase text-[#111111] group-hover:text-[#D91118] transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* PART 3: COMPLETE 49-PHOTO ZIP ARCHIVE VIEWER */}
          <div className="pt-8 border-t border-white/15 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141418] p-6 border border-white/20">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D91118]">
                  ARQUIVO COMPLETO DE FOTOGRAFIAS & LOGOTIPOS ({COMPLETE_ARCHIVE_PHOTOS.length}{' '}
                  FICHEIROS)
                </div>
                <h4 className="font-display text-xl sm:text-2xl uppercase text-white mt-1">
                  TODAS AS IMAGENS DO PACOTE DE FICHEIROS EVREN
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowFullZipArchive((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-[#111111] text-xs font-extrabold uppercase tracking-wider cursor-pointer shrink-0"
              >
                <Grid className="w-4 h-4 text-[#D91118]" />
                <span>
                  {showFullZipArchive
                    ? 'Ocultar Mosaico Completo'
                    : `Ver Todas as ${COMPLETE_ARCHIVE_PHOTOS.length} Fotos do Arquivo`}
                </span>
              </button>
            </div>

            {showFullZipArchive && (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
                {COMPLETE_ARCHIVE_PHOTOS.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() =>
                      onOpenLightboxImage(photo.src, photo.title, `${photo.group} · Evren Studio`)
                    }
                    className="group cursor-pointer bg-[#141418] border border-white/15 hover:border-[#D91118] overflow-hidden"
                  >
                    <div className="aspect-square bg-black overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 text-[10px] font-bold uppercase truncate text-neutral-300">
                      {photo.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
