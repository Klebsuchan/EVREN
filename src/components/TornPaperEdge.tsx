import React from 'react';

interface TornPaperEdgeProps {
  fillColor: string;
  flipVertical?: boolean;
  className?: string;
}

/**
 * Renders the jagged, organic torn-paper SVG edge divider from MODELO.jfif.
 */
export const TornPaperEdge: React.FC<TornPaperEdgeProps> = ({
  fillColor,
  flipVertical = false,
  className = ''
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-8 sm:h-12 md:h-16 block ${flipVertical ? 'rotate-180' : ''}`}
      >
        <path
          d="M0 32L32 45L64 26L98 38L134 18L172 34L215 12L252 31L294 19L338 44L380 28L422 49L468 21L512 37L558 14L604 39L648 22L696 47L742 15L788 36L834 19L882 48L928 24L974 42L1022 11L1068 38L1116 20L1164 46L1210 27L1258 49L1304 16L1352 37L1398 21L1440 39V74H0V32Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
