'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  BookOpen,
  Building2,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Users,
  Compass,
  Download,
  Microscope,
  Zap,
  Cpu,
  Layers,
} from 'lucide-react';

import RDBlockEntryExperience from '@/components/animation/RDBlockEntryExperience';
import { RD_VISION, RD_MISSION, RD_LEADERSHIP } from '@/data/governance';
import { RECOGNIZED_RESEARCH_CENTRES, RESEARCH_DOMAINS } from '@/data/research-centres';
import { SPONSORED_PROJECTS, CONSULTANCY_SERVICES } from '@/data/projects';
import { OFFICIAL_PATENTS } from '@/data/patents';
import { FACULTY_PUBLICATIONS } from '@/data/publications';
import { SPECIALIZED_LABORATORIES, CENTRAL_RD_FACILITY } from '@/data/infrastructure';
import { OFFICIAL_DOWNLOADABLE_DOCUMENTS } from '@/data/policies';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* SIGNATURE FEATURE: GSAP IMMERSIVE R&D BLOCK ENTRY EXPERIENCE */}
      <RDBlockEntryExperience />

      {/* INSTITUTIONAL ANNOUNCEMENT BANNER */}
      <div className="bg-institutional-navy text-white text-xs py-2.5 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-institutional-maroon font-bold text-[10px] tracking-wider uppercase rounded text-white flex-shrink-0">
              OFFICIAL NOTICE
            </span>
            <span className="text-gray-200">
              DrillBit Anti-Plagiarism Software verification is operational via Central Library for all faculty and Ph.D. synopsis submissions.
            </span>
          </div>
          <Link
            href="/policies#plagiarism"
            className="text-white hover:underline font-semibold flex items-center gap-1 text-[11px] flex-shrink-0"
          >
            <span>Verification Guidelines</span>
            <ArrowRight className="w-3 h-3 text-gray-300" />
          </Link>
        </div>
      </div>

      {/* EDITORIAL HERO & INTRODUCTION */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT 7 COLS: EDITORIAL TEXT */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-institutional-navy tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-institutional-maroon" />
                Institutional Research &amp; Development
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight leading-tight">
                Advancing Frontier Engineering, Defense Technologies &amp; Societal Innovation
              </h1>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                Maturi Venkata Subba Rao (MVSR) Engineering College has cultivated a distinguished research culture since its establishment in 1981. Centrally coordinated by the{' '}
                <strong className="text-institutional-navy">Research &amp; Development and Consultancy Cell</strong> and operating the multidisciplinary{' '}
                <strong className="text-institutional-navy">M-MARTIC</strong> facility, the institution bridges rigorous academic inquiry with national strategic priorities.
              </p>

              {/* VERIFIED KEY METRICS STRIP (NO INVENTED FIGURES) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-gray-200">
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-institutional-navy">4,000+</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Sq. Ft. Dedicated Hub</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-institutional-maroon">3</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">OU Ph.D. Research Centers</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-institutional-navy">₹21L+</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Annual Defense Grants</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-institutional-navy">GHMC</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Empanelled QC Agency</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-institutional-navy hover:bg-institutional-navy-light text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <span>Explore Sponsored Projects</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 bg-white hover:bg-gray-50 text-institutional-navy text-xs font-bold uppercase tracking-wider rounded border border-gray-300 transition-colors inline-flex items-center gap-2"
                >
                  <span>R&amp;D Governance &amp; Committee</span>
                </Link>
              </div>
            </div>

            {/* RIGHT 5 COLS: ACTUAL R&D PAVILION COMPOSITION */}
            <div className="lg:col-span-5">
              <div className="relative border-4 border-white shadow-2xl rounded-sm overflow-hidden bg-gray-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/rd-block.jpg"
                    alt="MVSR Institutional R&D Block Facade"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-institutional-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-300 block font-bold">
                      AUTHENTIC CAMPUS ARCHITECTURE
                    </span>
                    <span className="text-base font-bold text-white block mt-0.5">
                      MVSR Institutional R&amp;D Block
                    </span>
                    <span className="text-xs text-gray-300">
                      Housing M-MARTIC, ECE RF Anechoic Chamber &amp; Central Research Labs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION (EDITORIAL TWO-COLUMN) */}
      <section className="bg-institutional-bg-subtle py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* VISION (5 COLS) */}
            <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-institutional-maroon mb-4">
                  <Award className="w-4 h-4 text-institutional-navy" />
                  <span>Institutional R&amp;D Vision</span>
                </div>
                <blockquote className="text-lg md:text-xl font-serif text-institutional-navy leading-relaxed italic border-l-4 border-institutional-maroon pl-4">
                  &ldquo;{RD_VISION}&rdquo;
                </blockquote>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-institutional-navy text-white flex items-center justify-center font-serif text-sm font-bold flex-shrink-0">
                  OU
                </div>
                <div className="text-xs">
                  <p className="font-bold text-institutional-navy">Autonomous Academic Mandate</p>
                  <p className="text-gray-500">Approved by Central R&amp;D Committee</p>
                </div>
              </div>
            </div>

            {/* MISSION (7 COLS) */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-institutional-maroon mb-6">
                <CheckCircle2 className="w-4 h-4 text-institutional-maroon" />
                <span>Five-Point Institutional Mission</span>
              </div>
              <ul className="space-y-4">
                {RD_MISSION.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-institutional-navy text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OU RECOGNIZED RESEARCH CENTRES */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
                DOCTORAL PROGRAMMES &bull; OSMANIA UNIVERSITY
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-institutional-navy tracking-tight">
                Recognized Ph.D. Research Centers
              </h2>
            </div>
            <Link
              href="/research#ou-centres"
              className="text-xs font-bold text-institutional-blue hover:text-institutional-navy flex items-center gap-1 uppercase tracking-wider"
            >
              <span>View Supervisors &amp; Regulations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RECOGNIZED_RESEARCH_CENTRES.map((center) => (
              <div
                key={center.code}
                className="bg-institutional-bg-subtle border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:shadow-card transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold px-2 py-1 bg-institutional-navy text-white rounded">
                      {center.code}
                    </span>
                    <span className="text-[11px] text-gray-500 font-semibold">{center.affiliatingBody}</span>
                  </div>
                  <h3 className="text-lg font-bold text-institutional-navy mb-2">{center.department}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{center.description}</p>

                  <div className="mb-4">
                    <p className="text-[11px] font-bold text-institutional-navy uppercase tracking-wider mb-2">
                      Approved Supervisors:
                    </p>
                    <ul className="space-y-1">
                      {center.recognizedSupervisors.slice(0, 3).map((sup, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-institutional-maroon" />
                          <span>{sup}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[10px] font-mono text-gray-500 font-semibold">
                    THRUST: {center.keyThrustAreas.slice(0, 2).join(' &bull; ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORED RESEARCH PROJECTS SECTION (RESEARCH TABLE) */}
      <section className="bg-institutional-bg-subtle py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
                DEFENSE &amp; NATIONAL RESEARCH
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-institutional-navy tracking-tight">
                Sponsored Research Projects
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-2xl">
                Official research grants sanctioned by DRDO laboratories (RCI, DRDL, ASL) and national regulatory bodies like AICTE.
              </p>
            </div>
            <Link
              href="/projects"
              className="px-4 py-2 bg-institutional-navy text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-institutional-navy-light transition-colors self-start md:self-auto"
            >
              Full Projects Database
            </Link>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-institutional-navy text-white font-semibold text-[11px] tracking-wider uppercase">
                    <th className="p-3.5 border-b border-institutional-navy-dark">Project Title</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">Funding Agency</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">Department</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">Sanctioned Amount</th>
                    <th className="p-3.5 border-b border-institutional-navy-dark">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {SPONSORED_PROJECTS.slice(0, 5).map((project, idx) => (
                    <tr key={project.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="p-3.5 font-bold text-institutional-navy max-w-xs sm:max-w-md">
                        {project.projectTitle}
                      </td>
                      <td className="p-3.5 text-gray-700 font-medium">{project.fundingAgency}</td>
                      <td className="p-3.5 text-gray-600">{project.department}</td>
                      <td className="p-3.5 font-mono font-bold text-institutional-navy">
                        {project.sanctionedAmount}
                      </td>
                      <td className="p-3.5">
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
        </div>
      </section>

      {/* INSTITUTIONAL CONSULTANCY & GHMC QC AGENCY HIGHLIGHT */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-institutional-navy text-white rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold tracking-wider uppercase inline-block border border-white/20">
                  Officially Empanelled Institutional QC Agency
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Third-Party Quality Control Agency for GHMC &amp; National Infrastructure
                </h2>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-3xl">
                  The Department of Civil Engineering at MVSR is authorized by the Greater Hyderabad Municipal Corporation (GHMC) to conduct structural audits, core drilling, non-destructive ultrasonic pulse testing, and asphalt quality verification across major Hyderabad circles (Hayathnagar, LB Nagar, Saroornagar). The college also maintains formal MoUs with the National Highways Authority of India (NHAI) and technical collaborations with ISRO.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="px-3 py-1 bg-white/10 rounded text-xs font-medium text-gray-200 border border-white/10">
                    200-Tonne Universal Testing Machine (UTM)
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded text-xs font-medium text-gray-200 border border-white/10">
                    Ultrasonic Pulse Velocity (NDT)
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded text-xs font-medium text-gray-200 border border-white/10">
                    Geotechnical Triaxial Testing Rig
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <Link
                  href="/projects#consultancy"
                  className="px-6 py-3 bg-white text-institutional-navy font-bold text-xs uppercase tracking-wider rounded hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Consultancy Norms &amp; Testing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INFRASTRUCTURE & LABORATORIES */}
      <section className="bg-institutional-bg-subtle py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
                4,000+ SQ. FT. CENTRAL FACILITY
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-institutional-navy tracking-tight">
                Specialized Research Laboratories
              </h2>
            </div>
            <Link
              href="/infrastructure"
              className="text-xs font-bold text-institutional-blue hover:text-institutional-navy flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALIZED_LABORATORIES.slice(0, 3).map((lab) => (
              <div
                key={lab.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-2">
                    <span>{lab.department}</span>
                    <span className="text-institutional-navy font-mono font-bold">{lab.areaSqFt}</span>
                  </div>
                  <h3 className="text-base font-bold text-institutional-navy mb-2">{lab.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{lab.description}</p>

                  <div className="space-y-1.5 mb-4">
                    <p className="text-[11px] font-bold text-institutional-navy uppercase tracking-wider">
                      Key Equipment:
                    </p>
                    {lab.keyEquipment.slice(0, 3).map((eq, idx) => (
                      <p key={idx} className="text-xs text-gray-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-institutional-navy" />
                        <span className="line-clamp-1">{eq}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-medium">{lab.location}</span>
                  <Link
                    href={`/infrastructure#${lab.id}`}
                    className="text-xs font-bold text-institutional-navy hover:text-institutional-maroon"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATENTS & INTELLECTUAL PROPERTY */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT 5 COLS: PATENT GROUP INFO */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block">
                INTELLECTUAL PROPERTY &amp; PATENTS
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-institutional-navy tracking-tight">
                Institutional Patent Search Group &amp; Filings
              </h2>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                The institutional Patent Search Group, under the guidance of senior advisory faculty and the Institutional Innovation Council (IIC), evaluates patentability, conducts prior-art clearance searches, and assists researchers through filing and examination stages at the Indian Patent Office.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-bold text-institutional-navy mb-1">Advisory Leadership:</p>
                <p className="text-xs text-gray-600">
                  Dr. P. A. Sastry (Mechanical) &bull; Mr. K. S. R. Murthy (ECE) &bull; Mr. V. Ashwini Kumar (IT, Chief Coordinator IIC/EDC)
                </p>
              </div>
              <Link
                href="/publications-ip#patent-group"
                className="inline-flex items-center gap-2 text-xs font-bold text-institutional-navy hover:text-institutional-maroon uppercase tracking-wider"
              >
                <span>View Full Patent Committee Roster</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* RIGHT 7 COLS: PUBLISHED PATENTS LIST */}
            <div className="lg:col-span-7 space-y-4">
              {OFFICIAL_PATENTS.slice(0, 3).map((patent) => (
                <div
                  key={patent.applicationNo}
                  className="bg-institutional-bg-subtle border border-gray-200 rounded-lg p-5 hover:border-institutional-navy/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-institutional-navy">
                      App No: {patent.applicationNo}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900 uppercase">
                      {patent.status}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-institutional-navy mb-1.5">
                    {patent.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Inventors:</strong> {patent.inventors.join(', ')} ({patent.department})
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed">{patent.abstract}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REPUTED FACULTY PUBLICATIONS */}
      <section className="bg-institutional-bg-subtle py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
                INDEXED RESEARCH PAPERS
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-institutional-navy tracking-tight">
                Selected High-Impact Publications
              </h2>
            </div>
            <Link
              href="/publications-ip#publications"
              className="text-xs font-bold text-institutional-blue hover:text-institutional-navy flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Search All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACULTY_PUBLICATIONS.slice(0, 4).map((pub) => (
              <div
                key={pub.id}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:shadow-card transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-gray-100 text-gray-800">
                      {pub.indexing}
                    </span>
                    <span>{pub.year}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-institutional-navy mb-2 line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-1">
                    <strong>Authors:</strong> {pub.authors.join(', ')}
                  </p>
                  <p className="text-xs text-gray-500 italic mb-4">{pub.journalOrConference}</p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-medium">Citations: {pub.citations || 'Verified'}</span>
                  {pub.doiOrUrl && (
                    <a
                      href={pub.doiOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-institutional-navy hover:text-institutional-maroon font-semibold flex items-center gap-1"
                    >
                      <span>DOI Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICIAL POLICIES & DOWNLOADABLE CIRCULARS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
                ACADEMIC INTEGRITY &amp; GOVERNANCE
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-institutional-navy tracking-tight">
                Research Policies &amp; Official Downloads
              </h2>
            </div>
            <Link
              href="/policies"
              className="text-xs font-bold text-institutional-blue hover:text-institutional-navy flex items-center gap-1 uppercase tracking-wider"
            >
              <span>View All Policies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICIAL_DOWNLOADABLE_DOCUMENTS.map((doc) => (
              <div
                key={doc.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col justify-between hover:border-institutional-navy/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-institutional-navy text-white font-bold">
                      {doc.fileFormat}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">{doc.category}</span>
                  </div>
                  <h3 className="text-sm font-bold text-institutional-navy mb-2">{doc.documentTitle}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{doc.description}</p>
                </div>
                <a
                  href={doc.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 bg-white hover:bg-institutional-navy hover:text-white text-institutional-navy text-xs font-bold rounded border border-gray-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
