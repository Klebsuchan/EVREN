import { PackageTier, PortfolioItem } from '../data/evrenData.ts';

export interface QuoteFormInput {
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  serviceOrPackageId: string;
  eventDate?: string;
  notes?: string;
}

export interface QuoteValidationResult {
  valid: boolean;
  errors: {
    clientName?: string;
    clientPhone?: string;
    clientEmail?: string;
    serviceOrPackageId?: string;
  };
}

/**
 * Formats an integer amount in Angolan Kwanza (e.g., 121100 -> "121.100 Kz")
 */
export function formatKwanza(amount: number): string {
  if (!Number.isFinite(amount) || amount < 0) {
    return '0 Kz';
  }
  const rounded = Math.round(amount);
  const formattedNumber = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${formattedNumber} Kz`;
}

/**
 * Calculates exact savings in Kz and verifies the promotional discount percentage.
 */
export function calculatePackageSavings(pkg: Pick<PackageTier, 'originalPriceKz' | 'promoPriceKz'>): {
  savingsKz: number;
  savingsFormatted: string;
  discountPercentage: number;
} {
  const savingsKz = Math.max(0, pkg.originalPriceKz - pkg.promoPriceKz);
  const discountPercentage =
    pkg.originalPriceKz > 0 ? Math.round((savingsKz / pkg.originalPriceKz) * 100) : 0;

  return {
    savingsKz,
    savingsFormatted: formatKwanza(savingsKz),
    discountPercentage
  };
}

/**
 * Filters promotional packages by category ID.
 */
export function filterPackagesByCategory(
  packages: PackageTier[],
  categoryId: PackageTier['categoryId'] | 'todos'
): PackageTier[] {
  if (categoryId === 'todos') {
    return packages;
  }
  return packages.filter((pkg) => pkg.categoryId === categoryId);
}

/**
 * Filters portfolio items by category and optional search query.
 */
export function filterPortfolioItems(
  items: PortfolioItem[],
  category: PortfolioItem['category'] | 'todos',
  searchQuery = ''
): PortfolioItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'todos' || item.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.client.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.deliverables.toLowerCase().includes(normalizedQuery)
    );
  });
}

/**
 * Validates the booking / quote request form input in Portuguese.
 */
export function validateQuoteForm(input: QuoteFormInput): QuoteValidationResult {
  const errors: QuoteValidationResult['errors'] = {};

  const trimmedName = (input.clientName ?? '').trim();
  if (!trimmedName || trimmedName.length < 2) {
    errors.clientName = 'Por favor, indique o seu nome ou nome da empresa.';
  }

  const digitsOnly = (input.clientPhone ?? '').replace(/\D/g, '');
  if (!digitsOnly || digitsOnly.length < 9) {
    errors.clientPhone = 'Indique um número de telefone ou WhatsApp válido (mínimo 9 dígitos).';
  }

  const trimmedEmail = (input.clientEmail ?? '').trim();
  if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.clientEmail = 'Indique um endereço de e-mail válido.';
  }

  if (!(input.serviceOrPackageId ?? '').trim()) {
    errors.serviceOrPackageId = 'Seleccione um serviço ou pacote promocional.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Builds a pre-filled WhatsApp message in Portuguese for direct booking with Evren Visual Studio.
 */
export function buildWhatsAppBookingUrl(
  phoneClean: string,
  input: QuoteFormInput,
  resolvedSelectionLabel: string
): string {
  const lines = [
    'Olá *Evren Visual Studio*! Gostaria de solicitar uma marcação / orçamento:',
    '',
    `• *Cliente:* ${input.clientName.trim()}`,
    `• *Contacto:* ${input.clientPhone.trim()}`,
    input.clientEmail?.trim() ? `• *E-mail:* ${input.clientEmail.trim()}` : null,
    `• *Serviço / Pacote:* ${resolvedSelectionLabel}`,
    input.eventDate?.trim() ? `• *Data prevista:* ${input.eventDate.trim()}` : null,
    input.notes?.trim() ? `• *Detalhes adicionais:* ${input.notes.trim()}` : null
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${phoneClean}?text=${text}`;
}
