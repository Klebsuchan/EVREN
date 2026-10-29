import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatKwanza,
  calculatePackageSavings,
  filterPackagesByCategory,
  filterPortfolioItems,
  validateQuoteForm,
  buildWhatsAppBookingUrl
} from './pricing.ts';
import { PROMO_PACKAGES, PORTFOLIO_ITEMS } from '../data/evrenData.ts';

test('formatKwanza formats Angolan Kwanza amounts with dot separators', () => {
  assert.equal(formatKwanza(121100), '121.100 Kz');
  assert.equal(formatKwanza(1000000), '1.000.000 Kz');
  assert.equal(formatKwanza(23100), '23.100 Kz');
  assert.equal(formatKwanza(0), '0 Kz');
  assert.equal(formatKwanza(-500), '0 Kz');
});

test('all 13 promotional packages have exact 30% discount math matching official flyers', () => {
  assert.equal(PROMO_PACKAGES.length, 13);

  for (const pkg of PROMO_PACKAGES) {
    const { savingsKz, discountPercentage } = calculatePackageSavings(pkg);
    assert.equal(
      discountPercentage,
      30,
      `Expected ${pkg.id} to have 30% discount, got ${discountPercentage}%`
    );
    assert.equal(pkg.originalPriceKz - pkg.promoPriceKz, savingsKz);
  }
});

test('filterPackagesByCategory returns correct counts per event category', () => {
  assert.equal(filterPackagesByCategory(PROMO_PACKAGES, 'casamento').length, 4);
  assert.equal(filterPackagesByCategory(PROMO_PACKAGES, 'corporativo').length, 3);
  assert.equal(filterPackagesByCategory(PROMO_PACKAGES, 'cha-de-panela').length, 3);
  assert.equal(filterPackagesByCategory(PROMO_PACKAGES, 'aniversario').length, 3);
  assert.equal(filterPackagesByCategory(PROMO_PACKAGES, 'todos').length, 13);
});

test('filterPortfolioItems filters by category and search query', () => {
  const campaigns = filterPortfolioItems(PORTFOLIO_ITEMS, 'design-campanhas');
  assert.equal(campaigns.length, 7);

  const ltcMatches = filterPortfolioItems(PORTFOLIO_ITEMS, 'todos', 'Lobito Training Center');
  assert.equal(ltcMatches.length, 6);

  const tucaMatches = filterPortfolioItems(PORTFOLIO_ITEMS, 'todos', 'Tuca Mama');
  assert.equal(tucaMatches.length, 2);
});

test('validateQuoteForm catches empty fields and accepts valid Angolan contacts', () => {
  const invalidResult = validateQuoteForm({
    clientName: 'A',
    clientPhone: '123',
    clientEmail: 'invalido',
    serviceOrPackageId: ''
  });
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.clientName);
  assert.ok(invalidResult.errors.clientPhone);
  assert.ok(invalidResult.errors.clientEmail);
  assert.ok(invalidResult.errors.serviceOrPackageId);

  const validResult = validateQuoteForm({
    clientName: 'Carlos Mateus',
    clientPhone: '951 757 665',
    clientEmail: 'carlos@empresa.ao',
    serviceOrPackageId: 'casamento-pacote-premium'
  });
  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});
});

test('buildWhatsAppBookingUrl encodes booking parameters cleanly', () => {
  const url = buildWhatsAppBookingUrl(
    '244951757665',
    {
      clientName: 'Maria Silva',
      clientPhone: '927 399 908',
      serviceOrPackageId: 'casamento-pacote-2',
      eventDate: '2026-11-15'
    },
    'Casamento — Pacote 2 (196.000 Kz)'
  );
  assert.ok(url.startsWith('https://wa.me/244951757665?text='));
  assert.ok(decodeURIComponent(url).includes('Maria Silva'));
  assert.ok(decodeURIComponent(url).includes('Casamento — Pacote 2 (196.000 Kz)'));
});
