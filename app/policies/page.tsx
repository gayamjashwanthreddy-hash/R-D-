import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { INSTITUTIONAL_POLICIES, OFFICIAL_DOWNLOADABLE_DOCUMENTS } from '@/data/policies';

export const metadata = {
  title: 'Research Policies & Governance | MVSR Engineering College',
  description:
    'Institutional Code of Ethics, DrillBit Anti-Plagiarism software protocols, Ph.D. On-Duty (OD) leaves, faculty publication incentives, and downloadable circulars.',
};

export default function PoliciesPage() {
  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Policies & Governance' }]} />

      {/* HEADER */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
            INTEGRITY &bull; COMPLIANCE &bull; QUALITY STANDARDS
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight">
            Research Policies &amp; Governance
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-3 max-w-3xl leading-relaxed">
            Statutory frameworks upholding academic honesty, anti-plagiarism verification via DrillBit software, faculty research promotion incentives, and consultancy guidelines.
          </p>
        </div>
      </section>

      {/* DRILLBIT ANTI-PLAGIARISM PROTOCOL CALLOUT */}
      <section id="plagiarism" className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <div className="bg-amber-50/70 border-2 border-amber-300 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-institutional-maroon text-white text-[10px] font-bold uppercase rounded tracking-wider">
                MANDATORY CLEARANCE PROTOCOL
              </span>
              <span className="text-xs font-bold text-institutional-navy">
                DrillBit Anti-Plagiarism Software &bull; Central Library
              </span>
            </div>
            <h2 className="text-xl font-bold text-institutional-navy">
              Similarity Screening for Theses, Dissertations &amp; Research Manuscripts
            </h2>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              In accordance with Osmania University doctoral regulations, all Ph.D. synopses, M.Tech dissertations, and faculty manuscripts intended for Scopus/SCI journals must undergo mandatory similarity screening using <strong>DrillBit Anti-Plagiarism Software</strong> administered by the Central Library. A clearance certificate issued by the Central Library is required prior to external submission.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://www.mvsrec.in/research.php?s=research-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-institutional-navy hover:bg-institutional-navy-light text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-1.5 shadow"
            >
              <span>Library Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* DETAILED INSTITUTIONAL POLICIES */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-1">
            STATUTORY GUIDELINES
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
            Institutional Policy Enactments
          </h2>
        </div>

        <div className="space-y-8">
          {INSTITUTIONAL_POLICIES.map((policy) => (
            <div
              key={policy.id}
              id={policy.id.toLowerCase().replace('pol-', '')}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:border-institutional-navy/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-2">
                <div>
                  <span className="text-xs font-mono font-bold text-institutional-maroon">
                    POLICY REF: {policy.id}
                  </span>
                  <h3 className="text-xl font-bold text-institutional-navy mt-1">{policy.title}</h3>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-institutional-navy text-xs font-bold uppercase tracking-wider rounded self-start sm:self-auto">
                  {policy.category}
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium">
                  {policy.summary}
                </p>

                <div className="bg-institutional-bg-subtle p-5 rounded-lg border border-gray-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-institutional-navy mb-3">
                    Key Enforceable Clauses:
                  </h4>
                  <ul className="space-y-2">
                    {policy.keyClauses.map((clause, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-institutional-gold flex-shrink-0 mt-0.5" />
                        <span>{clause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-gray-600">
                  <div>
                    <span className="font-bold text-institutional-navy">Applicable To: </span>
                    {policy.applicableTo}
                  </div>
                  <div>
                    <span className="font-bold text-institutional-navy">Enforcing Body: </span>
                    {policy.enforcingAuthority}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICIAL DOWNLOADABLE DOCUMENTS & RESOURCES */}
      <section id="downloads" className="bg-institutional-bg-subtle py-12 md:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-institutional-maroon mb-1">
              <Download className="w-4 h-4 text-institutional-gold" />
              <span>OFFICIAL REPOSITORY</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
              Official Documents &amp; Downloadable Circulars
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
              Download authenticated copies of institutional R&amp;D policy frameworks, committee charters, and submission forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICIAL_DOWNLOADABLE_DOCUMENTS.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between hover:shadow-card transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-institutional-navy text-white font-bold">
                      {doc.fileFormat}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{doc.category}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-institutional-navy mb-2">
                    {doc.documentTitle}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{doc.description}</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <a
                    href={doc.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 bg-gray-50 hover:bg-institutional-navy hover:text-white text-institutional-navy text-xs font-bold rounded border border-gray-200 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official Document</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
