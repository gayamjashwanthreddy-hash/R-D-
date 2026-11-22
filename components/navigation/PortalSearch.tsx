import React from 'react';
import { Search } from 'lucide-react';

interface PortalSearchProps {
  onClick: () => void;
  className?: string;
}

/**
 * PortalSearch Component
 * Matches the search pill button from the official header reference screenshot:
 * - Rounded container with light gray background
 * - Search icon
 * - "Search Portal..." text
 */
export default function PortalSearch({ onClick, className = '' }: PortalSearchProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200/80 text-gray-600 hover:text-[#002147] rounded-md border border-gray-200/90 transition-all duration-150 text-xs font-medium shadow-2xs select-none ${className}`}
      aria-label="Open portal search"
    >
      <Search className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
      <span className="hidden xl:inline text-gray-500 font-normal">Search Portal...</span>
      <span className="xl:hidden inline text-gray-500 font-normal">Search...</span>
    </button>
  );
}
