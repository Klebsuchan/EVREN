import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  Calendar,
  FileDown
} from 'lucide-react';
import { COMPANY_INFO, PROMO_PACKAGES, SERVICES_LIST } from '../data/evrenData.ts';
import {
  formatKwanza,
  validateQuoteForm,
  buildWhatsAppBookingUrl,
  QuoteFormInput
} from '../utils/pricing.ts';
import { TornPaperEdge } from './TornPaperEdge.tsx';

interface SavedBooking {
  id: string;
  createdAt: string;
  clientName: string;
  clientPhone: string;
  selectionLabel: string;
  eventDate?: string;
  whatsappUrl: string;
}

interface ContactBookingSectionProps {
  preselectedOptionId: string;
  onOpenLightboxImage: (src: string, title: string, subtitle: string) => void;
}

const STORAGE_KEY = 'evren_saved_bookings_v1';

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({
  preselectedOptionId,
  onOpenLightboxImage
}) => {
  const [formState, setFormState] = useState<QuoteFormInput>({
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    serviceOrPackageId: preselectedOptionId || 'casamento-pacote-premium',
    eventDate: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [submittedBooking, setSubmittedBooking] = useState<SavedBooking | null>(null);
  const [savedBookings, setSavedBookings] = useState<SavedBooking[]>([]);

  useEffect(() => {
    if (preselectedOptionId) {
      setFormState((prev) => ({
        ...prev,
        serviceOrPackageId: preselectedOptionId
      }));
    }
  }, [preselectedOptionId]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setSavedBookings(JSON.parse(raw));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const resolveSelectionLabel = (id: string): string => {
    const matchedPkg = PROMO_PACKAGES.find((p) => p.id === id);
    if (matchedPkg) {
      return `${matchedPkg.categoryLabel}: ${matchedPkg.name} — ${formatKwanza(
        matchedPkg.promoPriceKz
      )} (30% OFF)`;
    }
    if (id.startsWith('servico:')) {
      const rawServiceId = id.replace('servico:', '');
      const matchedService = SERVICES_LIST.find((s) => s.id === rawServiceId);
      if (matchedService) {
        return `Serviço ${matchedService.number}: ${matchedService.title}`;
      }
    }
    return id;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedBooking(null);
      return;
    }

    setErrors({});
    const selectionLabel = resolveSelectionLabel(formState.serviceOrPackageId);
    const whatsappUrl = buildWhatsAppBookingUrl(
      COMPANY_INFO.contacts.primaryPhoneClean,
      formState,
      selectionLabel
    );

    const newBooking: SavedBooking = {
      id: `EVR-${Date.now().toString().slice(-5)}`,
      createdAt: new Date().toLocaleDateString('pt-AO'),
      clientName: formState.clientName.trim(),
      clientPhone: formState.clientPhone.trim(),
      selectionLabel,
      eventDate: formState.eventDate?.trim() || undefined,
      whatsappUrl
    };

    const updated = [newBooking, ...savedBookings].slice(0, 5);
    setSavedBookings(updated);
    setSubmittedBooking(newBooking);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore storage errors
    }
  };

  return (
    <section
      id="contactos"
      className="relative bg-[#EFEFEF] text-[#111111] bg-grid-texture-light pt-6 pb-20 md:pb-28"
    >
      {/* Top Torn Paper Transition from Dark #0B0B0D into Light #EFEFEF */}
      <div className="-mt-14 mb-10">
        <TornPaperEdge fillColor="#EFEFEF" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contacts, Official Logo Variants & Business Card PDF */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D91118]">
                CONTACTOS OFICIAIS & RESERVA IMEDIATA
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase text-[#111111] tracking-tight leading-[0.98] mt-1">
                FALE COM A EVREN STUDIO
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 mt-3 leading-relaxed">
                Visite-nos na <strong>Zona Comercial 28, Município do Lobito</strong> ou solicite já
                a sua marcação com 30% de desconto.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-5 bg-white border-2 border-[#111111] space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#D91118]">
                  <Phone className="w-4 h-4" />
                  <span>Linhas Directas & WhatsApp</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href={`tel:+${COMPANY_INFO.contacts.primaryPhoneClean}`}
                    className="font-display font-mono-num text-2xl font-black text-[#111111] hover:text-[#D91118]"
                  >
                    {COMPANY_INFO.contacts.primaryPhone}
                  </a>
                  <span className="text-neutral-300">|</span>
                  <a
                    href={`tel:+${COMPANY_INFO.contacts.secondaryPhoneClean}`}
                    className="font-display font-mono-num text-2xl font-black text-[#111111] hover:text-[#D91118]"
                  >
                    {COMPANY_INFO.contacts.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white border border-neutral-300 space-y-1">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#D91118]">
                  <Mail className="w-4 h-4" />
                  <span>E-mail & Redes Sociais</span>
                </div>
                <p className="text-sm font-bold text-[#111111] break-all">
                  <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="hover:underline">
                    {COMPANY_INFO.contacts.email}
                  </a>
                </p>
                <p className="text-xs text-neutral-600">
                  Instagram & Facebook: <strong>{COMPANY_INFO.contacts.instagram}</strong>
                </p>
              </div>

              <div className="p-5 bg-white border border-neutral-300 space-y-1">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#D91118]">
                  <MapPin className="w-4 h-4" />
                  <span>Endereço do Estúdio</span>
                </div>
                <p className="text-sm font-bold text-[#111111]">
                  {COMPANY_INFO.location.fullAddress}
                </p>
              </div>
            </div>

            {/* Official Contact Slide & Business Card PDF */}
            <div className="bg-white border-2 border-[#111111] overflow-hidden shadow-md">
              <div
                onClick={() =>
                  onOpenLightboxImage(
                    '/assets/aistudio/PORTF_LIO_EVREN13.jpg_3b4ac114.jpeg',
                    'Contactos Oficiais & QR Code — Evren Visual Studio',
                    '951 757 665 | 927 399 908 · evrenvisualestudio@gmail.com'
                  )
                }
                className="cursor-pointer group"
              >
                <img
                  src="/assets/aistudio/PORTF_LIO_EVREN13.jpg_3b4ac114.jpeg"
                  alt="Contactos e QR Code Evren Visual Studio"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-[#111111] text-white flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Cartão de Visita Oficial (PDF)
                </span>
                <a
                  href="/assets/aistudio/CART_O_DE_VISITA_EVREN_55b22cda.pdf"
                  download
                  className="inline-flex items-center gap-1.5 bg-[#D91118] hover:bg-[#990D12] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Baixar PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Booking & Quote Form */}
          <div className="lg:col-span-7 bg-white border-2 border-[#111111] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#D91118]">
                FICHA DE MARCAÇÃO & ORÇAMENTO
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#111111] mt-1">
                SOLICITAR MARCAÇÃO OU PROPOSTA
              </h3>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="clientName"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2"
                  >
                    Seu Nome ou Empresa *
                  </label>
                  <input
                    id="clientName"
                    name="clientName"
                    type="text"
                    value={formState.clientName}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, clientName: e.target.value }))
                    }
                    placeholder="Ex: Eng. João Mateus / Empresa"
                    className="w-full bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#D91118]"
                  />
                  {errors.clientName && (
                    <p className="text-xs font-bold text-[#D91118] mt-1.5" role="alert">
                      {errors.clientName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="clientPhone"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2"
                  >
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="clientPhone"
                    name="clientPhone"
                    type="tel"
                    value={formState.clientPhone}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, clientPhone: e.target.value }))
                    }
                    placeholder="Ex: 951 757 665"
                    className="w-full bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#D91118]"
                  />
                  {errors.clientPhone && (
                    <p className="text-xs font-bold text-[#D91118] mt-1.5" role="alert">
                      {errors.clientPhone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="clientEmail"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2"
                  >
                    E-mail (Opcional)
                  </label>
                  <input
                    id="clientEmail"
                    name="clientEmail"
                    type="email"
                    value={formState.clientEmail}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, clientEmail: e.target.value }))
                    }
                    placeholder="cliente@empresa.ao"
                    className="w-full bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#D91118]"
                  />
                  {errors.clientEmail && (
                    <p className="text-xs font-bold text-[#D91118] mt-1.5" role="alert">
                      {errors.clientEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2"
                  >
                    Data Prevista do Evento
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formState.eventDate}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, eventDate: e.target.value }))
                      }
                      className="w-full bg-neutral-100 border border-neutral-300 pl-10 pr-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#D91118]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="serviceOrPackageId"
                  className="block text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2"
                >
                  Pacote Promocional (30% OFF) ou Serviço Pretendido *
                </label>
                <select
                  id="serviceOrPackageId"
                  name="serviceOrPackageId"
                  value={formState.serviceOrPackageId}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, serviceOrPackageId: e.target.value }))
                  }
                  className="w-full bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm font-semibold text-[#111111] focus:outline-none focus:border-[#D91118]"
                >
                  <optgroup label="Pacotes Promocionais (30% de Desconto até Dezembro)">
                    {PROMO_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.categoryLabel} — {pkg.name} ({formatKwanza(pkg.promoPriceKz)})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Serviços Corporativos & Criativos (10 Áreas)">
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={`servico:${srv.id}`}>
                        {srv.number}. {srv.title}
                      </option>
                    ))}
                  </optgroup>
                </select>
                {errors.serviceOrPackageId && (
                  <p className="text-xs font-bold text-[#D91118] mt-1.5" role="alert">
                    {errors.serviceOrPackageId}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2"
                >
                  Detalhes do Projeto / Local no Lobito ou Benguela
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formState.notes}
                  onChange={(e) => setFormState((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="Indique o local do evento, horário ou necessidades específicas..."
                  className="w-full bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#D91118]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D91118] hover:bg-[#990D12] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-4 px-6 rounded-full shadow-xl transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar Pedido de Marcação / Orçamento</span>
              </button>
            </form>

            {submittedBooking && (
              <div
                className="p-5 bg-[#111111] text-white border-2 border-[#D91118] space-y-3"
                role="status"
              >
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Pedido Registado com Sucesso! Referência #{submittedBooking.id}
                  </span>
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  Cliente: <strong>{submittedBooking.clientName}</strong> (
                  {submittedBooking.clientPhone}) —{' '}
                  <span className="text-white font-semibold">
                    {submittedBooking.selectionLabel}
                  </span>
                </p>
                <a
                  href={submittedBooking.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D91118] hover:bg-[#990D12] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Agora via WhatsApp Oficial (951 757 665)</span>
                </a>
              </div>
            )}

            {savedBookings.length > 0 && (
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-500">
                  Marcações Recentes Registadas
                </div>
                {savedBookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-3 bg-neutral-100 border border-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <span className="font-mono-num text-[#D91118] font-bold">{b.id}</span> ·{' '}
                      <strong className="text-[#111111]">{b.clientName}</strong> —{' '}
                      <span className="text-neutral-700">{b.selectionLabel}</span>
                    </div>
                    <a
                      href={b.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D91118] hover:underline font-extrabold uppercase shrink-0"
                    >
                      WhatsApp →
                    </a>
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
