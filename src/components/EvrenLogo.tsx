import React from 'react';

interface EvrenLogoProps {
  compact?: boolean;
  className?: string;
}

/**
 * Recreates the official Evren Visual Studio emblem and high-contrast wordmark.
 */
export const EvrenLogo: React.FC<EvrenLogoProps> = ({ compact = false, className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={compact ? 34 : 42}
        height={compact ? 34 : 42}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="60" height="60" rx="12" fill="#FFFFFF" />
        <g transform="rotate(-16 32 33)">
          <path
            d="M49 30.5C49 20.2827 41.3888 13 31.8 13C21.638 13 14 20.835 14 31.5C14 42.3696 21.8426 50 32.5 50C39.8 50 45.4 46.6 48.2 41.2L40.4 37.3C38.6 40.3 35.9 41.8 32.3 41.8C26.9 41.8 23.4 38.5 22.9 33.4H48.8C48.95 32.3 49 31.4 49 30.5ZM23.1 27.2C23.8 22.7 27.1 19.9 31.8 19.9C36.5 19.9 39.7 22.7 40.2 27.2H23.1Z"
            fill="#0B0B0D"
          />
        </g>
      </svg>
      {compact ? (
        <span className="font-display text-lg sm:text-xl uppercase tracking-tight text-white whitespace-nowrap">
          evren <span className="font-sans font-bold text-white/85">visual studio</span>
        </span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="font-display text-2xl font-black tracking-tight text-[#D91118] uppercase">
            evren
          </span>
          <span className="font-sans text-[11px] font-bold tracking-[0.26em] text-white uppercase mt-0.5">
            visual studio
          </span>
        </span>
      )}
    </span>
  );
};
