import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Users,
  ShieldCheck,
  ExternalLink,
  Building2,
  FileCheck2,
} from 'lucide-react';
import {
  RD_VISION,
  RD_MISSION,
  RD_LEADERSHIP,
  CENTRAL_COMMITTEE_COMPOSITION,
  DEPARTMENT_COORDINATORS,
} from '@/data/governance';
import { CONTENT_INVENTORY } from '@/data/inventory';
import { CENTRAL_RD_FACILITY } from '@/data/infrastructure';

export const metadata = {
  title: 'About Research & Development | MVSR Engineering College',
  description:
    'Institutional overview of the Research & Development and Consultancy Cell and M-MARTIC at MVSR Engineering College. Governance, leadership, committee structure, and content inventory.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'About R&D' }]} />

      {/* PAGE HEADER */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
            INSTITUTIONAL PROFILE &bull; ESTD. 1981
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight">
            About Research &amp; Development
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-3 max-w-3xl leading-relaxed">
            Nurturing academic excellence, sponsored defense investigations, intellectual property generation, and multidisciplinary innovation through the central R&amp;D framework.
          </p>
        </div>
      </section>

      {/* TERMINOLOGY & INSTITUTIONAL CONTEXT CARD */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <div className="bg-blue-50/70 border border-blue-200 rounded-lg p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-institutional-navy flex-shrink-0 mt-0.5" />
          <div className="text-xs text-gray-700 space-y-1">
            <p className="font-bold text-institutional-navy">
              Institutional Terminology Clarity: R&amp;D and Consultancy Cell &amp; M-MARTIC
            </p>
            <p className="leading-relaxed">
              {CENTRAL_RD_FACILITY.institutionalNote}
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT THE CENTRE & VISION/MISSION */}
      <section id="about-centre" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
              Institutional Framework &amp; Mandate
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Maturi Venkata Subba Rao (MVSR) Engineering College was established in 1981 by the Matrusri Education Society and has stood as a pioneer in quality technical education in Telangana. As an autonomous institution permanently affiliated with Osmania University, research and development is foundational to our mission.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The institutional R&amp;D framework is anchored by the central <strong>Research &amp; Development and Consultancy Cell</strong> and housed within the dedicated <strong>4,000+ sq. ft. M-MARTIC facility</strong>. It guides researchers across funding acquisition from national agencies (DRDO, DST, AICTE, ISRO), doctoral supervision under Osmania University, patent preparation, and certified consultancy services.
            </p>

            {/* VISION BOX */}
            <div id="vision-mission" className="bg-institutional-bg-subtle p-6 rounded-lg border-l-4 border-institutional-maroon">
              <span className="text-xs font-bold text-institutional-maroon uppercase tracking-wider block mb-2">
                R&amp;D Vision Statement
              </span>
              <p className="font-serif italic text-base text-institutional-navy leading-relaxed">
                &ldquo;{RD_VISION}&rdquo;
              </p>
            </div>

            {/* MISSION LIST */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-institutional-maroon uppercase tracking-wider block">
                R&amp;D Mission Objectives
              </span>
              <ul className="space-y-2">
                {RD_MISSION.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-institutional-gold flex-shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT 5 COLS: R&D BLOCK IMAGE */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <Image
                src="/images/rd-block.jpg"
                alt="MVSR Institutional R&D Block Exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="text-xs text-gray-500 italic text-center">
              The MVSR Institutional R&amp;D Block Pavilion housing central laboratories, prototyping workspaces, and incubation bays.
            </p>
          </div>
        </div>
      </section>

      {/* R&D LEADERSHIP PROFILES */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-1">
              CENTRAL ADMINISTRATION
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
              R&amp;D Executive Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RD_LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-institutional-navy text-white rounded inline-block mb-3">
                    {leader.role}
                  </span>
                  <h3 className="text-lg font-bold text-institutional-navy">{leader.name}</h3>
                  <p className="text-xs font-medium text-institutional-maroon mt-0.5">{leader.designation}</p>
                  <p className="text-xs text-gray-500 mt-2">{leader.department}</p>
                </div>
                {leader.qualifications && (
                  <div className="pt-4 mt-4 border-t border-gray-100 text-[11px] text-gray-600 font-mono">
                    Qualifications: {leader.qualifications}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CENTRAL R&D AND CONSULTANCY COMMITTEE */}
      <section id="governance" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-1">
            STATUTORY OVERSIGHT
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
            Central R&amp;D and Consultancy Committee
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-2xl">
            The Central Committee governs institutional policy formulations, grant vetting, anti-plagiarism compliance, ethical audits, and consultancy standard operating procedures.
          </p>
        </div>

        <div className="bg-institutional-bg-subtle p-6 rounded-lg border border-gray-200 mb-10">
          <h3 className="text-sm font-bold text-institutional-navy uppercase tracking-wider mb-4">
            Official Committee Composition Hierarchy
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CENTRAL_COMMITTEE_COMPOSITION.map((comp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 bg-white p-3 rounded border border-gray-200">
                <span className="w-5 h-5 rounded-full bg-institutional-navy text-institutional-gold text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="font-medium">{comp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DEPARTMENTAL COORDINATORS TABLE */}
        <div id="coordinators">
          <h3 className="text-lg font-bold text-institutional-navy mb-4">
            Departmental RDC Coordinators &amp; Co-Coordinators
          </h3>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-institutional-navy text-white font-semibold text-[11px] tracking-wider uppercase">
                    <th className="p-3.5 border-b border-institutional-navy-dark">Department</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">Code</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">RDC Coordinator</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">RDC Co-Coordinator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {DEPARTMENT_COORDINATORS.map((dept, idx) => (
                    <tr key={dept.code} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="p-3.5 font-bold text-institutional-navy">{dept.department}</td>
                      <td className="p-3.5 font-mono font-semibold text-gray-600">{dept.code}</td>
                      <td className="p-3.5 font-medium text-gray-800">{dept.coordinator}</td>
                      <td className="p-3.5 text-gray-600">{dept.coCoordinator || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 1: STRUCTURED CONTENT EXTRACTION INVENTORY */}
      <section id="inventory" className="bg-institutional-bg-subtle py-12 md:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-institutional-maroon" />
              <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon">
                PHASE 1 AUDIT TRAIL
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight mt-1">
              Official Content Extraction Inventory
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-3xl">
              In strict accordance with Phase 1 institutional research rules, every piece of information on this portal is verified against official MVSR sources with preserved names, titles, and dates.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-institutional-navy text-white font-semibold text-[11px] tracking-wider uppercase">
                    <th className="p-3 border-b border-institutional-navy-dark">Category</th>
                    <th className="p-3 border-b border-institutional-navy-dark">Official Source URL</th>
                    <th className="p-3 border-b border-institutional-navy-dark">Extracted Information Summary</th>
                    <th className="p-3 border-b border-institutional-navy-dark">Destination</th>
                    <th className="p-3 border-b border-institutional-navy-dark">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {CONTENT_INVENTORY.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="p-3 font-bold text-institutional-navy whitespace-nowrap">{item.category}</td>
                      <td className="p-3 max-w-xs truncate">
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-institutional-blue hover:underline font-mono text-[11px] flex items-center gap-1"
                        >
                          <span className="truncate">{item.sourceUrl.replace('https://www.', '')}</span>
                          <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
                        </a>
                      </td>
                      <td className="p-3 text-gray-700 leading-normal">
                        {item.extractedContentSummary}
                        {item.terminologyNote && (
                          <span className="block text-[11px] text-amber-900 bg-amber-50 p-1.5 rounded mt-1 border border-amber-200">
                            <strong>Note:</strong> {item.terminologyNote}
                          </span>
                        )}
                      </td>
                      <td className="p-3 font-mono text-[11px] text-gray-600 whitespace-nowrap">{item.destinationPage}</td>
                      <td className="p-3 whitespace-nowrap">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.verificationStatus === 'VERIFIED_OFFICIAL'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-900'
                          }`}
                        >
                          {item.verificationStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
