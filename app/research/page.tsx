'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  Award,
  BookOpen,
  Search,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Building2,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import { RECOGNIZED_RESEARCH_CENTRES, RESEARCH_DOMAINS } from '@/data/research-centres';
import { FACULTY_RESEARCHERS } from '@/data/faculty';

export default function ResearchPage() {
  const [facultySearch, setFacultySearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');

  const departments = ['ALL', 'Computer Science & Engineering', 'Electronics & Communication Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Information Technology', 'Electrical & Electronics Engineering'];

  const filteredFaculty = FACULTY_RESEARCHERS.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.specialization.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.qualification.toLowerCase().includes(facultySearch.toLowerCase());

    const matchesDept = selectedDept === 'ALL' || f.department.toLowerCase().includes(selectedDept.toLowerCase());

    return matchesSearch && matchesDept;
  });

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Research' }]} />

      {/* HEADER */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
            ACADEMIC RESEARCH &bull; OSMANIA UNIVERSITY
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight">
            Research Centres &amp; Doctoral Guidance
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-3 max-w-3xl leading-relaxed">
            MVSR Engineering College is officially recognized by Osmania University as an approved centre for pursuing research leading to the award of Ph.D. degrees in CSE, ECE, and Mechanical Engineering.
          </p>
        </div>
      </section>

      {/* OU RECOGNIZED RESEARCH CENTRES */}
      <section id="ou-centres" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-institutional-maroon mb-1">
            <GraduationCap className="w-4 h-4 text-institutional-gold" />
            <span>CENTRES OF EXCELLENCE</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
            Osmania University Approved Ph.D. Research Centres
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
            Established under Osmania University statutory regulations with dedicated laboratories, computing clusters, and doctoral workspaces.
          </p>
        </div>

        <div className="space-y-8">
          {RECOGNIZED_RESEARCH_CENTRES.map((center) => (
            <div
              key={center.code}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:border-institutional-navy/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-200 gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-institutional-navy text-white text-xs font-mono font-bold rounded">
                    {center.code}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-institutional-navy">{center.department}</h3>
                    <p className="text-xs text-institutional-maroon font-semibold">{center.affiliatingBody}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full self-start md:self-auto">
                  Statutory University Center
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{center.description}</p>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-institutional-navy mb-2">
                      Key Research Thrust Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {center.keyThrustAreas.map((thrust, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded border border-gray-200"
                        >
                          {thrust}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-institutional-bg-subtle p-5 rounded-lg border border-gray-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-institutional-navy mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-institutional-maroon" />
                    <span>Recognized Ph.D. Supervisors:</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {center.recognizedSupervisors.map((sup, idx) => (
                      <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-institutional-navy mt-1.5 flex-shrink-0" />
                        <span className="font-medium">{sup}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH DOMAINS & VERTICALS */}
      <section id="domains" className="bg-institutional-bg-subtle py-12 md:py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-1">
              CROSS-DISCIPLINARY FOCUS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
              Institutional Research Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-card transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-institutional-navy text-white uppercase">
                      {domain.category}
                    </span>
                    <span className="font-medium text-gray-600">{domain.department}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-institutional-navy mb-2">{domain.title}</h3>
                  <p className="text-xs text-gray-700 leading-relaxed mb-4">{domain.description}</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">
                    Utilized Labs &amp; Infrastructure:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.facilities.map((fac, i) => (
                      <span key={i} className="text-[11px] bg-gray-50 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY RESEARCHERS DIRECTORY */}
      <section id="faculty" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-1">
            FACULTY WITH PH.D.
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
            Faculty Researchers Directory
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
            Official roster of doctorally qualified faculty members, recognized research supervisors, and departmental coordinators.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-grow">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              value={facultySearch}
              onChange={(e) => setFacultySearch(e.target.value)}
              placeholder="Search faculty name, specialization or qualifications..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
            />
          </div>
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded text-xs bg-white text-gray-700 font-medium outline-none focus:border-institutional-navy"
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d === 'ALL' ? 'All Departments' : d}
              </option>
            ))}
          </select>
        </div>

        {/* FACULTY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFaculty.map((f) => (
            <div
              key={f.name}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-institutional-navy/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-bold text-institutional-navy">{f.name}</h3>
                  {f.ouSupervisorStatus && (
                    <span className="px-1.5 py-0.5 bg-institutional-gold/20 text-institutional-navy rounded text-[9px] font-bold border border-institutional-gold/40 flex-shrink-0">
                      OU Supervisor
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-institutional-maroon">{f.designation}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{f.department}</p>
                <p className="text-xs text-gray-700 mt-2 line-clamp-2">{f.specialization}</p>
              </div>
              <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>{f.qualification}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="py-12 text-center text-gray-500 text-xs">
            No faculty profiles found matching your search. Try resetting the department filter.
          </div>
        )}
      </section>
    </div>
  );
}
