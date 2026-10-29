import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getDeviceParallaxScale,
  calculateParallaxDisplacement,
  calculateCardTilt
} from './parallax.ts';

test('getDeviceParallaxScale handles desktop, mobile and reduced motion', () => {
  assert.equal(getDeviceParallaxScale({ isMobile: false, prefersReducedMotion: false }), 1.0);
  assert.equal(getDeviceParallaxScale({ isMobile: true, prefersReducedMotion: false }), 0.45);
  assert.equal(getDeviceParallaxScale({ isMobile: false, prefersReducedMotion: true }), 0);
  assert.equal(getDeviceParallaxScale({ isMobile: true, prefersReducedMotion: true }), 0);
});

test('calculateParallaxDisplacement scales displacement correctly', () => {
  assert.equal(calculateParallaxDisplacement(60, 1.0), 60);
  assert.equal(calculateParallaxDisplacement(60, 0.45), 27);
  assert.equal(calculateParallaxDisplacement(60, 0), 0);
  assert.equal(calculateParallaxDisplacement(-40, 0.45), -18);
});

test('calculateCardTilt computes correct tilt within bounds', () => {
  const rect = { left: 100, top: 100, width: 200, height: 200 };

  // Pointer directly in the center: tilt must be 0
  const centerTilt = calculateCardTilt(200, 200, rect, 6);
  assert.deepEqual(centerTilt, { rotateX: 0, rotateY: 0 });

  // Pointer at bottom right corner: rotateX negative, rotateY positive
  const cornerTilt = calculateCardTilt(300, 300, rect, 6);
  assert.deepEqual(cornerTilt, { rotateX: -6, rotateY: 6 });

  // Pointer far outside rect: clamped to maxDeg
  const farTilt = calculateCardTilt(1000, -500, rect, 8);
  assert.deepEqual(farTilt, { rotateX: 8, rotateY: 8 });
});
