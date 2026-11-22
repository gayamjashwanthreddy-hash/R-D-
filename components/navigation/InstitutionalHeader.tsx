'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import InstitutionalBranding from './InstitutionalBranding';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import PortalSearch from './PortalSearch';
import GlobalSearchModal from '../ui/GlobalSearchModal';

/**
 * InstitutionalHeader Component
 *
 * Implements the official MVSR Engineering College R&D header according to the supplied reference screenshot:
 * - Top thin dark navy accent line
 * - Official circular MVSR emblem with exact aspect ratio
 * - Bold stacked "MVSR ENGINEERING COLLEGE" branding
 * - "RESEARCH & DEVELOPMENT CELL" in deep maroon with "M-MARTIC" badge
 * - Complete 9-item navigation with accessible dropdowns
 * - Portal Search pill button
 *
 * ANIMATION INTEGRATION (PHASE 3 / TASK REQ 4 & 6):
 * - On the homepage ('/'), the header uses 'fixed' positioning and is completely off-screen (-translate-y-full).
 *   This ensures 0px unwanted white space above the 100vh building experience.
 * - State 3 (entering R&D block): GSAP ScrollTrigger smoothly brings it down into view.
 * - On inner pages (pathname !== '/'), it uses sticky positioning to flow naturally above page content.
 */
export default function InstitutionalHeader() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const isHomePage = pathname === '/';

  return (
    <>
      <header
        id="institutional-header"
        className={`w-full select-none z-50 transition-all duration-300 ${
          isHomePage
            ? 'fixed top-0 left-0 right-0 -translate-y-full opacity-0 pointer-events-none'
            : 'sticky top-0 translate-y-0 opacity-100 pointer-events-auto bg-white shadow-xs border-b border-gray-200/90'
        }`}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* TOP INSTITUTIONAL NAVY ACCENT STRIP */}
        <div className="w-full h-[3.5px] bg-[#002147]" />

        {/* MAIN NAVIGATION BAR */}
        <div className="w-full bg-white border-b border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8 py-2 md:py-2.5 flex items-center justify-between gap-4">
            {/* LEFT: INSTITUTIONAL BRANDING WITH OFFICIAL EMBLEM */}
            <InstitutionalBranding />

            {/* CENTER / RIGHT: DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <DesktopNavigation />
              <PortalSearch onClick={() => setSearchOpen(true)} className="ml-1 xl:ml-3" />
            </div>

            {/* MOBILE NAVIGATION DRAWER TOGGLE */}
            <MobileNavigation onOpenSearch={() => setSearchOpen(true)} />
          </div>
        </div>
      </header>

      {/* GLOBAL SEARCH MODAL */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
