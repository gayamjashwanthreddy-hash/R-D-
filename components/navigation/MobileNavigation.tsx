import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, ChevronDown, Search } from 'lucide-react';
import { INSTITUTIONAL_NAV_ITEMS } from './DesktopNavigation';
import MvsrLogo from './MvsrLogo';

interface MobileNavigationProps {
  onOpenSearch: () => void;
}

/**
 * MobileNavigation Component
 * Responsive touch-friendly mobile drawer for phones and tablets.
 */
export default function MobileNavigation({ onOpenSearch }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSub = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedItem(null);
  };

  return (
    <div className="lg:hidden flex items-center gap-2">
      {/* COMPACT SEARCH ICON */}
      <button
        onClick={onOpenSearch}
        type="button"
        className="p-2 text-gray-600 hover:text-[#002147] hover:bg-gray-100 rounded-md transition-colors"
        aria-label="Search research portal"
      >
        <Search className="w-4 h-4" />
      </button>

      {/* HAMBURGER TOGGLE */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="p-2 text-[#002147] hover:bg-gray-100 rounded-md transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* MOBILE DRAWER OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white h-[calc(100vh-60px)] shadow-2xl border-l border-gray-200 flex flex-col justify-between overflow-y-auto">
            {/* DRAWER HEADER */}
            <div className="p-4 border-b border-gray-100 bg-gray-50/70 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MvsrLogo size={34} />
                <div className="text-left leading-tight">
                  <p className="font-extrabold text-xs text-[#002147]">MVSR ENGINEERING COLLEGE</p>
                  <p className="text-[9px] font-bold text-[#800020] uppercase">R&amp;D CELL &bull; M-MARTIC</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* NAV LINKS LIST */}
            <div className="p-4 space-y-1 divide-y divide-gray-100/60 flex-grow">
              {INSTITUTIONAL_NAV_ITEMS.map((item) => {
                const hasSub = item.subItems && item.subItems.length > 0;
                const isExpanded = expandedItem === item.label;

                return (
                  <div key={item.label} className="pt-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="text-xs font-bold text-[#002147] hover:text-[#800020] py-1.5 block flex-grow"
                      >
                        {item.label}
                      </Link>
                      {hasSub && (
                        <button
                          onClick={() => toggleSub(item.label)}
                          className="p-1 text-gray-400 hover:text-[#002147]"
                          aria-label={`Toggle ${item.label} subpages`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-[#800020]' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* EXPANDABLE ACCORDION */}
                    {hasSub && isExpanded && (
                      <div className="pl-3 mt-1 pb-2 space-y-1 border-l-2 border-[#800020]/30 ml-1">
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={closeMenu}
                            className="block text-[11px] text-gray-600 hover:text-[#002147] hover:font-semibold py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* DRAWER FOOTER ACTION */}
            <div className="p-4 border-t border-gray-200 bg-gray-50/50 space-y-2">
              <button
                onClick={() => {
                  closeMenu();
                  onOpenSearch();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-white border border-gray-300 rounded text-xs font-bold text-[#002147] shadow-xs"
              >
                <Search className="w-3.5 h-3.5 text-gray-400" />
                <span>Search Portal...</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
