'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  Award,
  Search,
  Filter,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ExternalLink,
  Zap,
} from 'lucide-react';
import {
  SPONSORED_PROJECTS,
  CONSULTANCY_SERVICES,
  STUDENT_INNOVATIONS,
  SponsoredProject,
} from '@/data/projects';

export default function ProjectsPage() {
  const [projectSearch, setProjectSearch] = useState('');
  const [agencyFilter, setAgencyFilter] = useState('ALL');

  const filteredProjects = SPONSORED_PROJECTS.filter((p) => {
    const matchesSearch =
      p.projectTitle.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.fundingAgency.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.department.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.summary.toLowerCase().includes(projectSearch.toLowerCase());

    const matchesAgency =
      agencyFilter === 'ALL' ||
      (agencyFilter === 'DRDO' && p.clientType === 'DEFENSE_DRDO') ||
      (agencyFilter === 'AICTE' && p.clientType === 'NATIONAL_COUNCIL');

    return matchesSearch && matchesAgency;
  });

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Projects & Consultancy' }]} />

      {/* HEADER */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
            EXTRAMURAL GRANTS &bull; DEFENSE &bull; MUNICIPAL QC
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight">
            Sponsored Projects &amp; Consultancy
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-3 max-w-3xl leading-relaxed">
            Executing strategic defense projects for premier DRDO laboratories, national modernization schemes through AICTE, and serving as an official Third-Party Quality Control Agency for the Greater Hyderabad Municipal Corporation (GHMC).
          </p>
        </div>
      </section>

      {/* SPONSORED RESEARCH PROJECTS SECTION */}
      <section id="sponsored" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-institutional-maroon mb-1">
            <Award className="w-4 h-4 text-institutional-gold" />
            <span>EXTRAMURAL FUNDING</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
            Sponsored Research Projects Record
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
            Verified projects funded by national defense establishments (DRDO RCI, DRDL, ASL) and technical regulatory bodies.
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-grow">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
              placeholder="Search by project title, funding agency, or keywords..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
            />
          </div>
          <select
            value={agencyFilter}
            onChange={(e) => setAgencyFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded text-xs bg-white text-gray-700 font-medium outline-none focus:border-institutional-navy"
          >
            <option value="ALL">All Funding Agencies</option>
            <option value="DRDO">Defense Establishments (DRDO / RCI / DRDL / ASL)</option>
            <option value="AICTE">National Councils (AICTE MODROBS)</option>
          </select>
        </div>

        {/* SPONSORED PROJECTS TABLE */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-institutional-navy text-white font-semibold text-[11px] tracking-wider uppercase">
                  <th className="p-3.5 border-b border-institutional-navy-dark">Project Title &amp; Scope</th>
                  <th className="p-3.5 border-b border-institutional-navy-dark">Funding Agency</th>
                  <th className="p-3.5 border-b border-institutional-navy-dark">Investigating Dept</th>
                  <th className="p-3.5 border-b border-institutional-navy-dark">Sanctioned Amount</th>
                  <th className="p-3.5 border-b border-institutional-navy-dark">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProjects.map((project, idx) => (
                  <tr key={project.id} id={project.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="p-3.5 max-w-sm sm:max-w-md">
                      <p className="font-bold text-institutional-navy text-xs sm:text-sm">{project.projectTitle}</p>
                      <p className="text-gray-600 text-xs mt-1 leading-relaxed">{project.summary}</p>
                      <span className="inline-block mt-1 font-mono text-[10px] text-gray-500">
                        Ref: {project.id} &bull; FY: {project.year}
                      </span>
                    </td>
                    <td className="p-3.5 text-gray-800 font-medium">{project.fundingAgency}</td>
                    <td className="p-3.5 text-gray-600">{project.department}</td>
                    <td className="p-3.5 font-mono font-bold text-institutional-navy whitespace-nowrap">
                      {project.sanctionedAmount}
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800">
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL CONSULTANCY SECTION */}
      <section id="consultancy" className="bg-institutional-bg-subtle py-12 md:py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-institutional-maroon mb-1">
              <ShieldCheck className="w-4 h-4 text-institutional-gold" />
              <span>OFFICIAL QUALITY CONTROL &amp; TESTING</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
              Institutional Consultancy &amp; Testing Services
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
              Providing third-party structural verification, non-destructive testing, and geotechnical feasibility for municipal and national organizations.
            </p>
          </div>

          <div className="space-y-6">
            {CONSULTANCY_SERVICES.map((cons) => (
              <div
                key={cons.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-institutional-navy text-white text-[10px] font-bold rounded">
                      {cons.department}
                    </span>
                    <span className="text-xs font-bold text-institutional-maroon uppercase">
                      {cons.authorizedStatus}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-institutional-navy">{cons.clientOrganization}</h3>
                  <p className="text-xs font-semibold text-gray-700">{cons.domain}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{cons.scopeOfWork}</p>

                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-institutional-navy uppercase tracking-wider mb-1">
                      Calibrated Testing Instrumentation:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cons.equipmentUtilized.map((eq, i) => (
                        <span key={i} className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col justify-center items-start md:items-end">
                  <Link
                    href="/policies#consultancy-rules"
                    className="px-4 py-2 bg-institutional-navy hover:bg-institutional-navy-light text-white text-xs font-bold rounded transition-colors uppercase tracking-wider"
                  >
                    Consultancy Norms
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT INNOVATIONS & EXPO SHOWCASE */}
      <section id="student-innovations" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-institutional-maroon mb-1">
            <Zap className="w-4 h-4 text-institutional-gold" />
            <span>PROJECT EXPO &bull; STUDENT RESEARCH</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
            Student Research Innovations &amp; Accolades
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STUDENT_INNOVATIONS.map((innov, idx) => (
            <div
              key={idx}
              className="bg-institutional-bg-subtle border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span className="font-semibold text-institutional-navy">{innov.department}</span>
                  <span className="font-mono text-gray-400">{innov.year}</span>
                </div>
                <h3 className="text-base font-bold text-institutional-navy mb-2">{innov.title}</h3>
                <p className="text-xs text-gray-600 mb-3">{innov.description}</p>
                <div className="p-2.5 bg-white rounded border border-gray-200 text-xs">
                  <p className="font-bold text-institutional-maroon">{innov.award}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">{innov.event}</p>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-gray-200 text-[11px] text-gray-600">
                <strong>Innovators:</strong> {innov.team}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
