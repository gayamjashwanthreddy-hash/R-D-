import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Mail, Phone, MapPin, ShieldCheck, Download, Award } from 'lucide-react';
import { OFFICIAL_DOWNLOADABLE_DOCUMENTS } from '@/data/policies';
import MvsrLogo from './MvsrLogo';

export default function InstitutionalFooter() {
  return (
    <footer className="bg-institutional-navy text-white border-t-4 border-institutional-maroon">
      {/* INSTITUTIONAL TERMINOLOGY ARCHIVAL NOTE */}
      <div className="bg-institutional-navy-dark px-4 py-3 border-b border-white/10 text-xs text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white flex-shrink-0" />
            <span>
              <strong className="text-white">Institutional Documentation Standard:</strong> This portal reflects verified data from both the foundational{' '}
              <span className="text-white font-medium underline">Research &amp; Development and Consultancy Cell</span> (4,000+ sq. ft. hub) and the upgraded{' '}
              <span className="text-white font-medium underline">M-MARTIC</span> portal.
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-gray-400">
            <span>Sources:</span>
            <a
              href="https://www.mvsrec.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline flex items-center gap-0.5"
            >
              mvsrec.edu.in <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <a
              href="https://www.mvsrec.in/research.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline flex items-center gap-0.5"
            >
              mvsrec.in <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER BODY */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* COLUMN 1: COLLEGE & R&D IDENTITY */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full border border-gray-300 bg-white flex items-center justify-center flex-shrink-0">
              <MvsrLogo size={48} />
            </div>
            <div>
              <p className="font-extrabold text-sm tracking-wide text-white">MVSR ENGINEERING COLLEGE</p>
              <p className="text-[11px] text-gray-300 font-medium">Estd. 1981 &bull; Autonomous</p>
              <p className="text-[10px] text-gray-400">Affiliated to Osmania University</p>
            </div>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            The Research &amp; Development and Consultancy Cell (M-MARTIC) drives high-impact scientific inquiry, sponsored defense electronics, intellectual property filings, and industrial quality consultancy.
          </p>
          <div className="pt-2 text-xs text-gray-400 space-y-1">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
              <span>Nadergul, Saroornagar Mandal, Hyderabad, Telangana 501510, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white flex-shrink-0" />
              <span>dean_rd@mvsrec.edu.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white flex-shrink-0" />
              <span>+91-40-24530361 / Ext. R&amp;D Cell</span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: RESEARCH ARCHITECTURE */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 pb-2 border-b border-white/10">
            Research Architecture
          </h3>
          <ul className="space-y-2 text-xs text-gray-300">
            <li>
              <Link href="/about#vision-mission" className="hover:text-white transition-colors">
                Vision &amp; Mission of R&amp;D
              </Link>
            </li>
            <li>
              <Link href="/about#governance" className="hover:text-white transition-colors">
                Central R&amp;D Governance Committee
              </Link>
            </li>
            <li>
              <Link href="/research#ou-centres" className="hover:text-white transition-colors">
                Osmania University Recognized Centers
              </Link>
            </li>
            <li>
              <Link href="/research#supervisors" className="hover:text-white transition-colors">
                Ph.D. Supervisors &amp; Doctoral Guidance
              </Link>
            </li>
            <li>
              <Link href="/infrastructure#hub" className="hover:text-white transition-colors">
                4,000+ sq. ft. M-MARTIC Facility
              </Link>
            </li>
            <li>
              <Link href="/publications-ip#patent-group" className="hover:text-white transition-colors">
                Institutional Patent Search Group
              </Link>
            </li>
            <li>
              <Link href="/activities#project-expo" className="hover:text-white transition-colors">
                Annual Institutional Project EXPO
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: KEY RESEARCH VERTICALS */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 pb-2 border-b border-white/10">
            Domains &amp; Consultancy
          </h3>
          <ul className="space-y-2 text-xs text-gray-300">
            <li>
              <Link href="/projects#sponsored" className="hover:text-white transition-colors">
                DRDO &amp; Defense Sponsored Projects
              </Link>
            </li>
            <li>
              <Link href="/projects#consultancy" className="hover:text-white transition-colors">
                GHMC Third-Party Quality Control
              </Link>
            </li>
            <li>
              <Link href="/infrastructure#ece-rf" className="hover:text-white transition-colors">
                RF &amp; Microwave Anechoic Chamber
              </Link>
            </li>
            <li>
              <Link href="/infrastructure#civil-testing" className="hover:text-white transition-colors">
                200-Tonne Universal Testing Machine (UTM)
              </Link>
            </li>
            <li>
              <Link href="/publications-ip#patents" className="hover:text-white transition-colors">
                Official Published Patents Directory
              </Link>
            </li>
            <li>
              <Link href="/policies#plagiarism" className="hover:text-white transition-colors">
                DrillBit Anti-Plagiarism Verification
              </Link>
            </li>
            <li>
              <Link href="/about#inventory" className="hover:text-white transition-colors">
                Content Extraction Inventory
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: OFFICIAL DOWNLOADS & POLICIES */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 pb-2 border-b border-white/10">
            Official Documents
          </h3>
          <div className="space-y-2.5">
            {OFFICIAL_DOWNLOADABLE_DOCUMENTS.slice(0, 4).map((doc) => (
              <div
                key={doc.id}
                className="p-2.5 rounded bg-white/5 border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-semibold text-white line-clamp-1">{doc.documentTitle}</span>
                  <span className="text-[9px] font-mono px-1 py-0.5 bg-institutional-maroon rounded text-white font-bold">
                    {doc.fileFormat}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">{doc.category}</p>
                <a
                  href={doc.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-gray-300 hover:text-white hover:underline mt-1 font-medium"
                >
                  <Download className="w-2.5 h-2.5" />
                  <span>Download Circular</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT STRIP */}
      <div className="bg-institutional-navy-dark border-t border-white/10 py-4 px-4 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} Maturi Venkata Subba Rao (MVSR) Engineering College. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/policies#ethics" className="hover:text-white transition-colors">
              Research Ethics
            </Link>
            <span>&bull;</span>
            <Link href="/policies#plagiarism" className="hover:text-white transition-colors">
              Anti-Plagiarism
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact R&amp;D
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
