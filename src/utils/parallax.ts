/**
 * Pure helper utilities for responsive, accessible parallax effects
 * across desktop and mobile devices.
 */

export interface ParallaxScaleOptions {
  isMobile: boolean;
  prefersReducedMotion: boolean;
}

/**
 * Returns a motion factor scale to avoid excessive scroll offsets on small screens
 * or disable motion completely when prefers-reduced-motion is active.
 * - Desktop: 1.0 (full rich depth)
 * - Mobile: 0.45 (subtle, non-disorienting depth that prevents layout clipping)
 * - Reduced motion: 0.0 (strictly disabled for accessibility)
 */
export function getDeviceParallaxScale({
  isMobile,
  prefersReducedMotion
}: ParallaxScaleOptions): number {
  if (prefersReducedMotion) return 0;
  return isMobile ? 0.45 : 1.0;
}

/**
 * Calculates a bounded displacement distance given base travel and device multiplier.
 */
export function calculateParallaxDisplacement(
  baseDisplacement: number,
  scale: number
): number {
  return Math.round(baseDisplacement * scale);
}

export interface BoundingBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * Computes 3D tilt angles (rotateX, rotateY) based on pointer position relative to element center.
 * Bounded by maxDeg to keep animations elegant and grounded.
 */
export function calculateCardTilt(
  clientX: number,
  clientY: number,
  rect: BoundingBox,
  maxDeg: number = 6
): { rotateX: number; rotateY: number } {
  if (rect.width <= 0 || rect.height <= 0) {
    return { rotateX: 0, rotateY: 0 };
  }

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const normalX = (clientX - centerX) / (rect.width / 2);
  const normalY = (clientY - centerY) / (rect.height / 2);

  // Clamp normalized offsets to [-1, 1]
  const clampedX = Math.max(-1, Math.min(1, normalX));
  const clampedY = Math.max(-1, Math.min(1, normalY));

  // Invert rotateX so hovering near top tilts the top inward (natural physical response)
  const rawX = Math.round(-clampedY * maxDeg * 10) / 10;
  const rawY = Math.round(clampedX * maxDeg * 10) / 10;
  const rotateX = Object.is(rawX, -0) ? 0 : rawX;
  const rotateY = Object.is(rawY, -0) ? 0 : rawY;

  return { rotateX, rotateY };
}
