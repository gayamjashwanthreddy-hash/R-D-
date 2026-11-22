import React from 'react';
import { usePathname } from 'next/navigation';
import NavigationDropdown, { NavItem } from './NavigationDropdown';

export const INSTITUTIONAL_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About R&D',
    href: '/about',
    subItems: [
      { label: 'About R&D Centre', href: '/about#about-centre' },
      { label: 'Vision & Mission', href: '/about#vision-mission' },
      { label: 'Central Committee & Governance', href: '/about#governance' },
      { label: 'Department Coordinators', href: '/about#coordinators' },
      { label: 'Content Extraction Inventory', href: '/about#inventory' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    subItems: [
      { label: 'OU Recognized Research Centres', href: '/research#ou-centres' },
      { label: 'Ph.D. Supervisors & Guidance', href: '/research#supervisors' },
      { label: 'Research Domains & Thrust Areas', href: '/research#domains' },
      { label: 'Faculty Researchers Directory', href: '/research#faculty' },
    ],
  },
  {
    label: 'Projects & Consultancy',
    href: '/projects',
    subItems: [
      { label: 'Sponsored Defense Projects (DRDO)', href: '/projects#sponsored' },
      { label: 'AICTE Modernization (MODROBS)', href: '/projects#sponsored' },
      { label: 'GHMC Third-Party Quality Control', href: '/projects#consultancy' },
      { label: 'Student Innovations & Accolades', href: '/projects#student-innovations' },
    ],
  },
  {
    label: 'Publications & IP',
    href: '/publications-ip',
    subItems: [
      { label: 'Patents & IPR Gazette Filings', href: '/publications-ip#patents' },
      { label: 'Patent Search Group & Advisory', href: '/publications-ip#patent-group' },
      { label: 'Scopus & SCI Indexed Publications', href: '/publications-ip#publications' },
    ],
  },
  {
    label: 'Infrastructure',
    href: '/infrastructure',
    subItems: [
      { label: '4,000+ sq. ft. M-MARTIC Facility', href: '/infrastructure#hub' },
      { label: 'ECE RF & Anechoic Chamber', href: '/infrastructure#ece-rf-anechoic' },
      { label: 'Embedded & FPGA Prototyping', href: '/infrastructure#ece-embedded-fpga' },
      { label: 'Civil 200T UTM & Heavy Testing', href: '/infrastructure#ced-testing-qc' },
      { label: 'CSE GPU High-Performance Cluster', href: '/infrastructure#cse-hpc-ai' },
    ],
  },
  {
    label: 'Policies',
    href: '/policies',
    subItems: [
      { label: 'Code of Ethics in Research', href: '/policies#ethics' },
      { label: 'DrillBit Anti-Plagiarism Verification', href: '/policies#plagiarism' },
      { label: 'Faculty Publication Incentives', href: '/policies#incentives' },
      { label: 'Ph.D. Weekly On-Duty (OD) Leaves', href: '/policies#incentives' },
      { label: 'Official Downloadable Circulars', href: '/policies#downloads' },
    ],
  },
  {
    label: 'Activities',
    href: '/activities',
    subItems: [
      { label: 'Annual Institutional Project EXPO', href: '/activities#project-expo' },
      { label: 'National Defense Symposiums', href: '/activities#symposiums' },
      { label: 'Faculty Development Programs', href: '/activities#fdp' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

interface DesktopNavigationProps {
  className?: string;
}

/**
 * DesktopNavigation Component
 * Renders the horizontal institutional navigation matching the official header screenshot.
 */
export default function DesktopNavigation({ className = '' }: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex items-center gap-0.5 lg:gap-1 xl:gap-2 ${className}`} aria-label="Main Navigation">
      {INSTITUTIONAL_NAV_ITEMS.map((item) => {
        const isActive =
          item.href === '/'
            ? pathname === '/'
            : pathname.startsWith(item.href);

        return (
          <NavigationDropdown
            key={item.label}
            item={item}
            isActive={isActive}
          />
        );
      })}
    </nav>
  );
}
