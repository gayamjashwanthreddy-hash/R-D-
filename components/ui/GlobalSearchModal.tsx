'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, FileText, Award, Building2, User, BookOpen } from 'lucide-react';
import { SPONSORED_PROJECTS, CONSULTANCY_SERVICES } from '@/data/projects';
import { OFFICIAL_PATENTS } from '@/data/patents';
import { FACULTY_RESEARCHERS } from '@/data/faculty';
import { SPECIALIZED_LABORATORIES } from '@/data/infrastructure';
import { INSTITUTIONAL_POLICIES } from '@/data/policies';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedProjects = q
    ? SPONSORED_PROJECTS.filter(
        (p) =>
          p.projectTitle.toLowerCase().includes(q) ||
          p.fundingAgency.toLowerCase().includes(q) ||
          p.department.toLowerCase().includes(q)
      )
    : [];

  const matchedPatents = q
    ? OFFICIAL_PATENTS.filter(
        (pt) =>
          pt.title.toLowerCase().includes(q) ||
          pt.applicationNo.includes(q) ||
          pt.inventors.some((inv) => inv.toLowerCase().includes(q))
      )
    : [];

  const matchedFaculty = q
    ? FACULTY_RESEARCHERS.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.department.toLowerCase().includes(q) ||
          f.specialization.toLowerCase().includes(q)
      )
    : [];

  const matchedLabs = q
    ? SPECIALIZED_LABORATORIES.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.department.toLowerCase().includes(q) ||
          l.keyEquipment.some((eq) => eq.toLowerCase().includes(q))
      )
    : [];

  const matchedPolicies = q
    ? INSTITUTIONAL_POLICIES.filter(
        (pol) =>
          pol.title.toLowerCase().includes(q) ||
          pol.summary.toLowerCase().includes(q) ||
          pol.category.toLowerCase().includes(q)
      )
    : [];

  const hasResults =
    matchedProjects.length > 0 ||
    matchedPatents.length > 0 ||
    matchedFaculty.length > 0 ||
    matchedLabs.length > 0 ||
    matchedPolicies.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* INPUT HEADER */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-200 bg-gray-50/50">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects (DRDO, SAR), patents, faculty, labs, policies..."
            className="w-full bg-transparent text-sm md:text-base outline-none text-institutional-charcoal placeholder-gray-400 font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-gray-600 px-1.5 py-0.5 rounded bg-gray-200"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* RESULTS SCROLL AREA */}
        <div className="overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="py-8 text-center text-gray-500">
              <p className="text-sm font-medium">Quick searches:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['DRDO', 'Anechoic Chamber', 'Patents', 'DrillBit Plagiarism', 'GHMC QC', 'Ph.D. Supervisors'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 text-xs bg-gray-100 hover:bg-institutional-navy hover:text-white rounded-full transition-colors text-gray-700 font-medium border border-gray-200"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="py-12 text-center text-gray-500">
              <p className="text-sm">No official records found matching &ldquo;{query}&rdquo;.</p>
              <p className="text-xs text-gray-400 mt-1">
                Try searching for specific agencies (RCI, DRDL, AICTE), faculty names, or laboratory equipment.
              </p>
            </div>
          )}

          {/* SPONSORED PROJECTS */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-institutional-navy uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-institutional-maroon" />
                <span>Sponsored Research Projects ({matchedProjects.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects#${p.id}`}
                    onClick={onClose}
                    className="block p-2.5 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors"
                  >
                    <p className="text-xs font-bold text-institutional-navy">{p.projectTitle}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      {p.fundingAgency} &bull; <span className="font-semibold">{p.sanctionedAmount}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* PATENTS */}
          {matchedPatents.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-institutional-navy uppercase tracking-wider mb-2">
                <FileText className="w-3.5 h-3.5 text-institutional-maroon" />
                <span>Patents &amp; Intellectual Property ({matchedPatents.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedPatents.map((pt) => (
                  <Link
                    key={pt.applicationNo}
                    href="/publications-ip#patents"
                    onClick={onClose}
                    className="block p-2.5 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors"
                  >
                    <p className="text-xs font-bold text-institutional-navy">{pt.title}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      App No: <span className="font-mono font-semibold">{pt.applicationNo}</span> &bull; {pt.inventors.join(', ')}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FACULTY */}
          {matchedFaculty.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-institutional-navy uppercase tracking-wider mb-2">
                <User className="w-3.5 h-3.5 text-institutional-maroon" />
                <span>Faculty Researchers ({matchedFaculty.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedFaculty.map((f) => (
                  <Link
                    key={f.name}
                    href="/research#faculty"
                    onClick={onClose}
                    className="block p-2 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors"
                  >
                    <p className="text-xs font-bold text-institutional-navy">{f.name}</p>
                    <p className="text-[10px] text-gray-500">{f.department}</p>
                    <p className="text-[10px] text-gray-600 truncate mt-0.5">{f.specialization}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* LABS */}
          {matchedLabs.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-institutional-navy uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5 text-institutional-maroon" />
                <span>Laboratories &amp; Facilities ({matchedLabs.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedLabs.map((l) => (
                  <Link
                    key={l.id}
                    href={`/infrastructure#${l.id}`}
                    onClick={onClose}
                    className="block p-2.5 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors"
                  >
                    <p className="text-xs font-bold text-institutional-navy">{l.name}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">{l.department} &bull; {l.location}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* POLICIES */}
          {matchedPolicies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-institutional-navy uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 text-institutional-maroon" />
                <span>Policies &amp; Guidelines ({matchedPolicies.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedPolicies.map((pol) => (
                  <Link
                    key={pol.id}
                    href={`/policies#${pol.id}`}
                    onClick={onClose}
                    className="block p-2.5 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors"
                  >
                    <p className="text-xs font-bold text-institutional-navy">{pol.title}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">{pol.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="px-4 py-2 bg-gray-100 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500">
          <span>Official MVSR R&amp;D Records</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
