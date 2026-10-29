import React, { useState } from 'react';
import { X, Download, Phone, Mail, MapPin } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { PackagesSection } from './components/PackagesSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { ContactBookingSection } from './components/ContactBookingSection.tsx';
import { EvrenLogo } from './components/EvrenLogo.tsx';
import { COMPANY_INFO, PortfolioItem } from './data/evrenData.ts';

interface LightboxState {
  open: boolean;
  mediaType: 'image' | 'video';
  src: string;
  title: string;
  subtitle: string;
}

export default function App() {
  const [preselectedBookingOption, setPreselectedBookingOption] = useState<string>(
    'casamento-pacote-premium'
  );

  const [lightbox, setLightbox] = useState<LightboxState>({
    open: false,
    mediaType: 'image',
    src: '',
    title: '',
    subtitle: ''
  });

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageOrService = (optionId: string) => {
    setPreselectedBookingOption(optionId);
    scrollToSection('contactos');
  };

  const handleOpenLightboxImage = (src: string, title: string, subtitle: string) => {
    setLightbox({
      open: true,
      mediaType: 'image',
      src,
      title,
      subtitle
    });
  };

  const handleOpenPortfolioLightbox = (item: PortfolioItem) => {
    setLightbox({
      open: true,
      mediaType: item.mediaType,
      src: item.src,
      title: item.title,
      subtitle: `${item.client} · ${item.deliverables} · ${item.location}`
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white flex flex-col selection:bg-[#D91118] selection:text-white">
      {/* Top Bar Navigation (Crimson Red matching MODELO.jfif) */}
      <Navbar onNavigateQuote={() => scrollToSection('contactos')} />

      {/* Main Content following MODELO.jfif visual flow */}
      <main className="flex-1">
        {/* Section 1: Crimson Red Spotlight Hero + Torn Paper Edge #1 */}
        <HeroSection
          onSelectPromoScroll={() => scrollToSection('pacotes')}
          onSelectPortfolioScroll={() => scrollToSection('portfolio')}
        />

        {/* Section 2: Light Off-White Paper (#EFEFEF) — "POR QUE ESCOLHEM A EVREN" Fanned Cards + Quem Somos + 10 Services + Torn Paper Edge #2 */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectPackageOrService}
          onOpenLightboxImage={handleOpenLightboxImage}
        />

        {/* Section 3: Deep Carbon-Black (#0B0B0D) — 3-Panel Package Carousel + 13 Packages Grid + Giant Crimson Marquee Banner */}
        <PackagesSection
          onSelectPackageForBooking={handleSelectPackageOrService}
          onOpenLightboxImage={handleOpenLightboxImage}
        />

        {/* Section 4: Complete 7-Video Cinema + Filterable Portfolio + 49-Photo Zip Archive */}
        <PortfolioSection
          onOpenLightbox={handleOpenPortfolioLightbox}
          onOpenLightboxImage={handleOpenLightboxImage}
        />

        {/* Section 5: Light Off-White Paper (#EFEFEF) — Direct Contacts, QR Code & Booking Form */}
        <ContactBookingSection
          preselectedOptionId={preselectedBookingOption}
          onOpenLightboxImage={handleOpenLightboxImage}
        />
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0B0D] border-t border-white/15 py-14 text-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 justify-between">
            <div className="md:col-span-5 space-y-4">
              <EvrenLogo />
              <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
                {COMPANY_INFO.shortBio}
              </p>
              <div className="text-xs text-neutral-300 space-y-1.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D91118]" />
                  <span>{COMPANY_INFO.location.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D91118]" />
                  <span className="font-mono-num">
                    {COMPANY_INFO.contacts.primaryPhone} | {COMPANY_INFO.contacts.secondaryPhone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D91118]" />
                  <span>{COMPANY_INFO.contacts.email}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <div className="font-display text-xs uppercase tracking-wider text-white">
                Navegação Rápida
              </div>
              <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Quem Somos & PDFs
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Por Que Escolhem a Evren (10 Serviços)
                  </a>
                </li>
                <li>
                  <a href="#pacotes" className="hover:text-white transition-colors">
                    Ofertas Especiais 30% OFF
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Portfólio Completo & 7 Vídeos
                  </a>
                </li>
                <li>
                  <a href="#contactos" className="hover:text-white transition-colors">
                    Marcação & Orçamento
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <div className="font-display text-xs uppercase tracking-wider text-white">
                Documentos Oficiais (PDF)
              </div>
              <div className="flex flex-col gap-2.5 pt-1">
                <a
                  href="/assets/aistudio/PORTF_LIO_EVREN_4f53368d.pdf"
                  download
                  className="inline-flex items-center justify-between px-4 py-3 bg-[#141418] hover:bg-[#D91118] border border-white/15 text-xs font-extrabold uppercase tracking-wider text-white transition-colors"
                >
                  <span>Portfólio Oficial Evren (PDF)</span>
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href="/assets/aistudio/CART_O_DE_VISITA_EVREN_55b22cda.pdf"
                  download
                  className="inline-flex items-center justify-between px-4 py-3 bg-[#141418] hover:bg-[#D91118] border border-white/15 text-xs font-extrabold uppercase tracking-wider text-white transition-colors"
                >
                  <span>Cartão de Visita Evren (PDF)</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              © {new Date().getFullYear()} EVREN VISUAL STUDIO · Zona Comercial 28, Município do
              Lobito, Angola.
            </div>
            <div>
              Instagram & Facebook:{' '}
              <span className="text-neutral-300 font-semibold">
                {COMPANY_INFO.contacts.instagram}
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Fullscreen Lightbox Modal */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox((prev) => ({ ...prev, open: false }))}
        >
          <div
            className="relative max-w-5xl w-full bg-[#111111] border-2 border-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 bg-[#0B0B0D] border-b border-white/15 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-display text-sm sm:text-base uppercase text-white truncate">
                  {lightbox.title}
                </h3>
                <p className="text-xs text-neutral-400 truncate">{lightbox.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={lightbox.src}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white bg-white/15 hover:bg-white/25 px-3.5 py-2 rounded-full"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Guardar</span>
                </a>
                <button
                  type="button"
                  onClick={() => setLightbox((prev) => ({ ...prev, open: false }))}
                  className="p-2 rounded-full bg-[#D91118] hover:bg-[#990D12] text-white transition-colors cursor-pointer"
                  aria-label="Fechar visualização"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="max-h-[78vh] bg-black flex items-center justify-center overflow-auto p-2 sm:p-4">
              {lightbox.mediaType === 'video' ? (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[72vh] w-auto max-w-full"
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="max-h-[72vh] w-auto max-w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
