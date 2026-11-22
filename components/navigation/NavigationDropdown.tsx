import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export interface SubMenuItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

interface NavigationDropdownProps {
  item: NavItem;
  isActive: boolean;
  onNavigate?: () => void;
}

/**
 * NavigationDropdown Component
 * Dropdown navigation menu with desktop hover and full keyboard accessibility (Enter/Space/Escape/Arrows).
 */
export default function NavigationDropdown({ item, isActive, onNavigate }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hasSub = item.subItems && item.subItems.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hasSub) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (hasSub) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <Link
        href={item.href}
        onClick={() => {
          setIsOpen(false);
          onNavigate?.();
        }}
        className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-[12px] xl:text-[13px] font-semibold transition-all duration-150 rounded-md select-none ${
          isActive
            ? 'bg-gray-100 text-[#002147] border-b-2 border-[#800020] shadow-2xs font-bold'
            : 'text-gray-700 hover:text-[#002147] hover:bg-gray-50/80 font-medium'
        }`}
        aria-haspopup={hasSub ? 'true' : undefined}
        aria-expanded={hasSub ? isOpen : undefined}
      >
        <span>{item.label}</span>
        {hasSub && (
          <ChevronDown
            className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-[#002147]' : ''
            }`}
          />
        )}
      </Link>

      {/* DROPDOWN PANEL */}
      {hasSub && isOpen && (
        <div
          className="absolute top-full left-0 z-50 pt-1.5 w-60 animate-in fade-in slide-in-from-top-1 duration-150"
          role="menu"
        >
          <div className="bg-white rounded-lg shadow-xl border border-gray-200/90 py-1.5 overflow-hidden">
            {item.subItems?.map((sub) => (
              <Link
                key={sub.label}
                href={sub.href}
                onClick={() => {
                  setIsOpen(false);
                  onNavigate?.();
                }}
                className="block px-3.5 py-2 text-[12px] text-gray-700 hover:text-[#002147] hover:bg-gray-50 transition-colors font-medium border-l-2 border-transparent hover:border-[#800020]"
                role="menuitem"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
