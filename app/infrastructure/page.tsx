import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  Building2,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Wrench,
  Microscope,
} from 'lucide-react';
import { CENTRAL_RD_FACILITY, SPECIALIZED_LABORATORIES } from '@/data/infrastructure';

export const metadata = {
  title: 'Research Infrastructure & Laboratories | MVSR Engineering College',
  description:
    'Dedicated 4,000+ sq. ft. central research hub, M-MARTIC facility, ECE RF Anechoic Chamber, Civil 200-Tonne UTM, and advanced prototyping laboratories at MVSR Engineering College.',
};

export default function InfrastructurePage() {
  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Infrastructure' }]} />

      {/* HEADER */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
            ADVANCED FACILITIES &bull; 4,000+ SQ. FT. HUB
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight">
            Research Infrastructure &amp; Laboratories
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-3 max-w-3xl leading-relaxed">
            State-of-the-art research environment housing the multidisciplinary M-MARTIC centre, electromagnetic anechoic chamber, 200-tonne material testing frames, and high-performance GPU compute clusters.
          </p>
        </div>
      </section>

      {/* CENTRAL R&D BLOCK & M-MARTIC PAVILION */}
      <section id="hub" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT 6 COLS: TEXT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-institutional-maroon text-white text-xs font-bold uppercase tracking-wider rounded">
                Flagship Research Hub
              </span>
              <span className="text-xs font-bold text-institutional-navy">
                4,000+ Sq. Ft. Dedicated Building
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-institutional-navy tracking-tight">
              {CENTRAL_RD_FACILITY.name}
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              Operating out of the prominent brick architectural pavilion, this central research hub coordinates extramural grant activities, faculty doctoral supervision, and rapid prototyping. It provides an inspiring collaborative commons for interdisciplinary researchers across all engineering disciplines.
            </p>

            <div className="space-y-2.5">
              {CENTRAL_RD_FACILITY.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-institutional-gold flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* ARCHIVAL NOTE */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600">
              <p className="font-bold text-institutional-navy mb-1">Institutional Terminology Mapping:</p>
              <p>{CENTRAL_RD_FACILITY.institutionalNote}</p>
            </div>
          </div>

          {/* RIGHT 5 COLS: ACTUAL PHOTOGRAPH */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-gray-200 shadow-xl">
              <Image
                src="/images/rd-block.jpg"
                alt="MVSR Institutional R&D Block Main Entrance and Landscaping"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white text-xs">
                <span className="font-bold">Actual MVSR R&amp;D Block Entrance</span>
                <p className="text-[10px] text-gray-300">Central Lawn, Checkered Walkway &amp; Architectural Portal</p>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 text-center italic">
              Actual building photograph supplied for the institutional web portal redesign.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALIZED DEPARTMENTAL LABORATORIES */}
      <section className="bg-institutional-bg-subtle py-12 md:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-1">
              DEPARTMENTAL EXCELLENCE
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
              Specialized Research &amp; Testing Laboratories
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
              Equipped with high-precision instrumentation supporting defense consultancy, doctoral dissertations, and municipal certifications.
            </p>
          </div>

          <div className="space-y-8">
            {SPECIALIZED_LABORATORIES.map((lab) => (
              <div
                key={lab.id}
                id={lab.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:border-institutional-navy/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-3">
                  <div>
                    <span className="text-xs font-semibold text-institutional-maroon uppercase tracking-wider">
                      {lab.department}
                    </span>
                    <h3 className="text-xl font-bold text-institutional-navy mt-0.5">{lab.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-mono font-bold rounded">
                      {lab.location}
                    </span>
                    <span className="px-2.5 py-1 bg-institutional-navy text-white text-xs font-mono font-bold rounded">
                      {lab.areaSqFt}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                  {/* LEFT: DESCRIPTION & FOCUS */}
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{lab.description}</p>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-institutional-navy mb-2">
                        Primary Research Thrusts:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {lab.focusResearch.map((fr, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-institutional-bg-subtle text-gray-800 text-xs font-medium rounded border border-gray-200"
                          >
                            {fr}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: KEY EQUIPMENT */}
                  <div className="lg:col-span-5 bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-institutional-navy mb-3 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-institutional-maroon" />
                      <span>Key Instrumentation &amp; Equipment:</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {lab.keyEquipment.map((eq, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-institutional-gold mt-1.5 flex-shrink-0" />
                          <span className="font-medium">{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
