import React, { useState } from 'react';
import { FileText, Download, Play, CheckCircle2, Building2, Eye } from 'lucide-react';
import { COMPANY_INFO, VIDEO_REELS } from '../data/evrenData.ts';

interface AboutSectionProps {
  onOpenLightboxImage: (src: string, title: string, subtitle: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLightboxImage }) => {
  const [selectedReelId, setSelectedReelId] = useState<string>(VIDEO_REELS[0].id);
  const selectedReel = VIDEO_REELS.find((r) => r.id === selectedReelId) || VIDEO_REELS[0];

  return (
    <section id="sobre" className="py-20 md:py-28 border-b border-white/10 bg-[#070B14]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-20">
        {/* Top Row: Quem Somos Story + Official Quem Somos Slide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E11D2E]">
              01 · Quem Somos & Identidade Institucional
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Jovens Empreendedores Comprometidos com a Criatividade em Angola.
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              {COMPANY_INFO.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0B132B] border border-white/10">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Building2 className="w-4 h-4 text-[#E11D2E]" />
                  <span>Sede & Estúdio Próprio</span>
                </div>
                <p className="text-xs text-slate-300 mt-1.5">
                  {COMPANY_INFO.location.fullAddress}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B132B] border border-white/10">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#E11D2E]" />
                  <span>Parceiro Estratégico 360°</span>
                </div>
                <p className="text-xs text-slate-300 mt-1.5">
                  Da concepção da marca à cobertura audiovisual e impressão física em grande formato.
                </p>
              </div>
            </div>

            {/* Official PDF Documents Download Cards */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Documentação Oficial da Empresa (PDF)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY_INFO.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 rounded-xl bg-[#0B132B]/90 border border-white/15 flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold text-white leading-snug">{doc.title}</h3>
                        <p className="text-xs text-slate-400 mt-1">{doc.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                      <a
                        href={doc.path}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#E11D2E] hover:bg-[#be1221] px-3.5 py-2 rounded-lg transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar PDF</span>
                      </a>
                      <a
                        href={doc.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Abrir Documento</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Official "Quem Somos" Presentation Slide & Bastidores */}
          <div className="lg:col-span-6 space-y-4">
            <div className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#0B132B] shadow-2xl">
              <img
                src="/assets/aistudio/PORTF_LIO_EVREN2.jpg_a81ce197.jpeg"
                alt="Quem Somos — Apresentação Oficial Evren Visual Studio"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-[#0B132B] border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Apresentação Institucional · Página 02
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Quem Somos — Visão Empreendedora no Município do Lobito
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightboxImage(
                      '/assets/aistudio/PORTF_LIO_EVREN2.jpg_a81ce197.jpeg',
                      'Quem Somos — Evren Visual Studio',
                      'Zona Comercial 28, Município do Lobito, Angola'
                    )
                  }
                  className="text-xs font-semibold text-[#E11D2E] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  Ampliar Slide →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() =>
                  onOpenLightboxImage(
                    '/assets/aistudio/PORTF_LIO_EVREN.jpg_56e905d9.jpeg',
                    'Capa Oficial do Portfólio Evren Visual Studio',
                    'Identidade Corporativa Oficial'
                  )
                }
                className="group cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-[#0B132B]"
              >
                <img
                  src="/assets/aistudio/PORTF_LIO_EVREN.jpg_56e905d9.jpeg"
                  alt="Capa Portfólio Evren Visual Studio"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="px-3 py-2 text-xs text-slate-300 truncate">
                  Capa Oficial · Portfólio Evren
                </div>
              </div>

              <div
                onClick={() =>
                  onOpenLightboxImage(
                    '/assets/aistudio/PORTF_LIO_EVREN9.jpg_d5776310.jpeg',
                    'Bastidores & Equipamento Cinematográfico Evren',
                    'Câmaras Sony Alpha · Gimbal DJI RS4 · Estúdio Iluminado'
                  )
                }
                className="group cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-[#0B132B]"
              >
                <img
                  src="/assets/aistudio/PORTF_LIO_EVREN9.jpg_d5776310.jpeg"
                  alt="Equipamento e Bastidores Evren Visual Studio"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="px-3 py-2 text-xs text-slate-300 truncate">
                  Bastidores & Equipamento de Cinema
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Complete 5-Video Studio & Event Gallery */}
        <div className="pt-12 border-t border-white/10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E11D2E]">
                Galeria de Vídeos Reais · Estúdio & Eventos
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                A Nossa Equipa em Acção no Estúdio e no Terreno
              </h3>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Assista aos 5 vídeos oficiais da Evren Visual Studio: desde a vinheta 3D até aos
              bastidores em estúdio e cobertura da Conferência Magna de Gestão 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Video Stage */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#0B132B] border border-white/15">
              <div className="aspect-video bg-black">
                <video
                  key={selectedReel.src}
                  src={selectedReel.src}
                  poster={selectedReel.poster}
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#E11D2E] font-semibold">
                    {selectedReel.category} · Duração {selectedReel.duration}
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mt-0.5">
                    {selectedReel.title}
                  </h4>
                  <p className="text-sm text-slate-300 mt-1">{selectedReel.description}</p>
                </div>
              </div>
            </div>

            {/* 5-Video Playlist Selector */}
            <div className="lg:col-span-5 space-y-3">
              {VIDEO_REELS.map((video, index) => {
                const active = video.id === selectedReel.id;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setSelectedReelId(video.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-4 cursor-pointer ${
                      active
                        ? 'bg-[#E11D2E]/15 border-[#E11D2E] text-white'
                        : 'bg-[#0B132B]/70 border-white/10 text-slate-300 hover:border-white/25 hover:bg-[#0B132B]'
                    }`}
                  >
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-white/10">
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play
                          className={`w-5 h-5 ${
                            active ? 'text-[#E11D2E] fill-[#E11D2E]' : 'text-white'
                          }`}
                        />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-mono-num uppercase tracking-wider text-slate-400">
                        Vídeo 0{index + 1} · {video.category} · {video.duration}
                      </div>
                      <div className="text-sm font-bold text-white truncate mt-0.5">
                        {video.title}
                      </div>
                      <div className="text-xs text-slate-400 truncate mt-0.5">{video.subtitle}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
