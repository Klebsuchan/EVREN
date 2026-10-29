import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { EvrenLogo } from './EvrenLogo.tsx';

interface NavbarProps {
  onNavigateQuote: () => void;
}

/**
 * Top Bar following MODELO.jfif:
 * - Compact brand emblem on left
 * - Pill-outlined top-level navigation links
 * - Solid white pill CTA button on right
 */
export const Navbar: React.FC<NavbarProps> = ({ onNavigateQuote }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Locais & Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Pacotes 30%', href: '#pacotes' },
    { label: 'Portfólio', href: '#portfolio' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#B80D14]/90 backdrop-blur-md border-b border-white/15">
      <div className="max-w-[1440px] mx-auto h-16 sm:h-20 px-5 md:px-12 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Identity */}
        <a
          href="#topo"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          aria-label="Evren Visual Studio — Início"
        >
          <EvrenLogo compact />
        </a>

        {/* Zone 2: Pill-framed Navigation Links matching MODELO.jfif top-right nav */}
        <nav className="hidden lg:flex items-center gap-3" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 py-2 rounded-full border border-white/50 hover:border-white hover:bg-white/10 text-xs font-semibold tracking-wider uppercase text-white transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Solid White Pill CTA matching MODELO.jfif "Contacts" pill */}
        <div className="hidden lg:flex items-center">
          <button
            type="button"
            onClick={onNavigateQuote}
            className="px-6 py-2 rounded-full bg-white hover:bg-neutral-100 text-[#111111] text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-lg"
          >
            Contactos
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg border border-white/25"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#8F080D] border-b border-white/20 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-2.5" aria-label="Menu Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-white py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onNavigateQuote();
            }}
            className="w-full py-3 rounded-full bg-white text-[#111111] text-xs font-extrabold uppercase tracking-wider"
          >
            Contactos & Marcação
          </button>
        </div>
      )}
    </header>
  );
};
