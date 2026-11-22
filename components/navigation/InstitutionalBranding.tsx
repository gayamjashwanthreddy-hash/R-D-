import React from 'react';
import Link from 'next/link';
import MvsrLogo from './MvsrLogo';

interface InstitutionalBrandingProps {
  className?: string;
}

/**
 * InstitutionalBranding Component
 * Replicates the exact visual structure from the official institutional header screenshot:
 * - Official MVSR College circular emblem
 * - Bold stacked typography: "MVSR / ENGINEERING / COLLEGE"
 * - Sub-title: "RESEARCH & DEVELOPMENT CELL" in deep maroon
 * - "M-MARTIC" badge alongside
 */
export default function InstitutionalBranding({ className = '' }: InstitutionalBrandingProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 select-none flex-shrink-0 transition-opacity hover:opacity-95 ${className}`}
      aria-label="MVSR Engineering College Research & Development Home"
    >
      {/* OFFICIAL EMBLEM */}
      <div className="p-0.5 rounded-full border border-gray-200/80 bg-white shadow-sm flex items-center justify-center">
        <MvsrLogo size={46} className="transition-transform duration-200 group-hover:scale-[1.02]" />
      </div>

      {/* TYPOGRAPHY BLOCK */}
      <div className="flex flex-col justify-center">
        {/* COLLEGE NAME */}
        <div className="flex flex-col text-[#002147] font-extrabold text-[13px] sm:text-[14px] leading-[1.08] tracking-tight">
          <span>MVSR</span>
          <span>ENGINEERING</span>
          <span>COLLEGE</span>
        </div>

        {/* R&D CELL & M-MARTIC BADGE */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[9px] sm:text-[9.5px] font-extrabold text-[#800020] tracking-wider uppercase leading-none">
            RESEARCH &amp; DEVELOPMENT CELL
          </span>
          <span className="inline-flex flex-col items-center justify-center px-1.5 py-0.5 rounded bg-gray-100/90 border border-gray-200/80 text-[8px] font-mono font-bold text-gray-700 leading-[1.1] shadow-xs">
            <span>M-</span>
            <span>MARTIC</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
