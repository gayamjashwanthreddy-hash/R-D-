import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-2.5 px-4 md:px-8 text-xs text-gray-600" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-institutional-navy font-medium transition-colors"
        >
          <Home className="w-3.5 h-3.5 text-gray-400" />
          <span>R&amp;D Home</span>
        </Link>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={item.label}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-institutional-navy font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-institutional-navy">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
