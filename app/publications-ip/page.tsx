'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  FileText,
  Search,
  Award,
  Users,
  ExternalLink,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { OFFICIAL_PATENTS, PATENT_SEARCH_GROUP } from '@/data/patents';
import { FACULTY_PUBLICATIONS } from '@/data/publications';

export default function PublicationsIPPage() {
  const [patentSearch, setPatentSearch] = useState('');
  const [pubSearch, setPubSearch] = useState('');
  const [indexFilter, setIndexFilter] = useState('ALL');

  const filteredPatents = OFFICIAL_PATENTS.filter(
    (p) =>
      p.title.toLowerCase().includes(patentSearch.toLowerCase()) ||
      p.applicationNo.includes(patentSearch) ||
      p.inventors.some((inv) => inv.toLowerCase().includes(patentSearch.toLowerCase())) ||
      p.abstract.toLowerCase().includes(patentSearch.toLowerCase())
  );

  const filteredPublications = FACULTY_PUBLICATIONS.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(pubSearch.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(pubSearch.toLowerCase())) ||
      pub.journalOrConference.toLowerCase().includes(pubSearch.toLowerCase()) ||
      pub.department.toLowerCase().includes(pubSearch.toLowerCase());

    const matchesIndex = indexFilter === 'ALL' || pub.indexing === indexFilter;

    return matchesSearch && matchesIndex;
  });

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Publications & IP' }]} />

      {/* HEADER */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
            INTELLECTUAL PROPERTY &bull; SCHOLARLY RESEARCH
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight">
            Publications, Patents &amp; Intellectual Property
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-3 max-w-3xl leading-relaxed">
            Fostering inventive engineering through the institutional Patent Search Group and celebrating peer-reviewed publications indexed in Scopus, Web of Science, and IEEE Xplore.
          </p>
        </div>
      </section>

      {/* PATENTS SECTION */}
      <section id="patents" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-institutional-maroon mb-1">
            <Award className="w-4 h-4 text-institutional-gold" />
            <span>INDIAN PATENT OFFICE (IPO) DISCLOSURES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
            Official Patents &amp; IPR Filings
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
            Patent applications published in the official Patent Office Gazette across artificial intelligence, cloud multimedia architectures, and structural diagnostics.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-6 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            value={patentSearch}
            onChange={(e) => setPatentSearch(e.target.value)}
            placeholder="Search by patent title, application number or inventor..."
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
          />
        </div>

        {/* PATENTS LIST */}
        <div className="space-y-6">
          {filteredPatents.map((patent) => (
            <div
              key={patent.applicationNo}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:border-institutional-navy/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-3">
                <div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-institutional-navy text-white rounded">
                    APPLICATION NO: {patent.applicationNo}
                  </span>
                  <span className="text-xs text-gray-500 font-medium ml-3">
                    {patent.patentOffice}
                  </span>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
                  {patent.status}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <h3 className="text-base md:text-lg font-bold text-institutional-navy leading-snug">
                  {patent.title}
                </h3>
                <p className="text-xs text-gray-600">
                  <strong>Inventors:</strong> {patent.inventors.join(', ')} &bull;{' '}
                  <span className="text-institutional-maroon font-semibold">{patent.department}</span>
                </p>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed bg-institutional-bg-subtle p-4 rounded border border-gray-100">
                  {patent.abstract}
                </p>
              </div>
            </div>
          ))}

          {filteredPatents.length === 0 && (
            <div className="py-12 text-center text-gray-500 text-xs">
              No patents found matching &ldquo;{patentSearch}&rdquo;.
            </div>
          )}
        </div>
      </section>

      {/* PATENT SEARCH GROUP & ADVISORY COMMITTEE */}
      <section id="patent-group" className="bg-institutional-bg-subtle py-12 md:py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-institutional-maroon mb-1">
              <ShieldCheck className="w-4 h-4 text-institutional-gold" />
              <span>IPR PROMOTION &bull; IIC &amp; EDC</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
              Institutional Patent Search Group
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
              Official faculty committee responsible for evaluating novelty, prior-art clearance searching, and coordinating with registered patent attorneys.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-institutional-navy text-white font-semibold text-[11px] tracking-wider uppercase">
                    <th className="p-3.5 border-b border-institutional-navy-dark">Faculty Member</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">Department</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">Committee Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {PATENT_SEARCH_GROUP.map((member, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="p-3.5 font-bold text-institutional-navy">{member.name}</td>
                      <td className="p-3.5 text-gray-700">{member.department}</td>
                      <td className="p-3.5 font-mono text-[11px]">
                        <span
                          className={`px-2 py-0.5 rounded font-bold ${
                            member.role === 'ADVISORY'
                              ? 'bg-amber-100 text-amber-900'
                              : member.role === 'CHIEF_COORDINATOR'
                              ? 'bg-blue-100 text-blue-900'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {member.role.replace('_', ' ')}
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

      {/* FACULTY RESEARCH PUBLICATIONS */}
      <section id="publications" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-institutional-maroon mb-1">
            <BookOpen className="w-4 h-4 text-institutional-gold" />
            <span>PEER-REVIEWED SCHOLARSHIP</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
            Faculty Research Publications
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
            Selected indexed contributions in IEEE Transactions, Elsevier, Springer, and Wiley journals backed by institutional publication incentives.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-grow">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              value={pubSearch}
              onChange={(e) => setPubSearch(e.target.value)}
              placeholder="Search by publication title, author, journal or branch..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
            />
          </div>
          <select
            value={indexFilter}
            onChange={(e) => setIndexFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded text-xs bg-white text-gray-700 font-medium outline-none focus:border-institutional-navy"
          >
            <option value="ALL">All Indexing Databases</option>
            <option value="SCI">Science Citation Index (SCI / SCIE)</option>
            <option value="SCOPUS">Scopus Indexed</option>
            <option value="IEEE_XPLORE">IEEE Xplore</option>
          </select>
        </div>

        {/* PUBLICATIONS LIST */}
        <div className="space-y-4">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:border-institutional-navy/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-institutional-navy text-white">
                    {pub.indexing}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{pub.year}</span>
                  <span className="text-xs text-institutional-maroon font-semibold">&bull; {pub.department}</span>
                </div>
                <h3 className="text-sm md:text-base font-bold text-institutional-navy">{pub.title}</h3>
                <p className="text-xs text-gray-600">
                  <strong>Authors:</strong> {pub.authors.join(', ')}
                </p>
                <p className="text-xs text-gray-500 italic">{pub.journalOrConference}</p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                <span className="text-xs font-semibold text-gray-600">
                  Citations: {pub.citations || 'Verified'}
                </span>
                {pub.doiOrUrl && (
                  <a
                    href={pub.doiOrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-institutional-navy hover:text-white rounded text-xs font-bold text-institutional-navy transition-colors"
                  >
                    <span>View Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
