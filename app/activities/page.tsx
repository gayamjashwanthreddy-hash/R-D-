import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Users,
  Zap,
  ExternalLink,
} from 'lucide-react';
import { RESEARCH_EVENTS } from '@/data/events';
import { STUDENT_INNOVATIONS } from '@/data/projects';

export const metadata = {
  title: 'Research Activities & Project EXPO | MVSR Engineering College',
  description:
    'Annual Project EXPO, national defense symposiums with DRDO scientists, faculty development programs, and student innovation awards at MVSR Engineering College.',
};

export default function ActivitiesPage() {
  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Activities & Events' }]} />

      {/* HEADER */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
            RESEARCH SYMPOSIUMS &bull; PROJECT EXPO &bull; WORKSHOPS
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight">
            Research Activities &amp; Project EXPO
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-3 max-w-3xl leading-relaxed">
            Fostering technical exchange through the annual flagship Project EXPO, national defense research symposiums with DRDO experts, and hands-on faculty development workshops.
          </p>
        </div>
      </section>

      {/* ANNUAL PROJECT EXPO FLAGSHIP */}
      <section id="project-expo" className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-institutional-navy text-white rounded-2xl p-8 md:p-12 mb-12 shadow-xl border-4 border-institutional-maroon relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 bg-institutional-gold/20 text-institutional-gold rounded-full text-xs font-bold tracking-wider uppercase inline-block border border-institutional-gold/30">
              Institutional Flagship Event
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Annual Institutional Project EXPO
            </h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              Every year, the Central R&amp;D and Consultancy Cell orchestrates the campus-wide Project EXPO across the Mechanical and EEE foyers and M-MARTIC. The event showcases over 120 final-year working hardware models, Internet of Things prototypes, renewable energy solutions, and patented inventions judged by external delegates from defense laboratories, TCS, and industry consortia.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-white/10 rounded border border-white/10">
                <span className="block text-xl font-extrabold text-institutional-gold">120+</span>
                <span className="text-[11px] text-gray-300">Working Prototypes</span>
              </div>
              <div className="p-3 bg-white/10 rounded border border-white/10">
                <span className="block text-xl font-extrabold text-institutional-gold">8</span>
                <span className="text-[11px] text-gray-300">Engineering Branches</span>
              </div>
              <div className="p-3 bg-white/10 rounded border border-white/10">
                <span className="block text-xl font-extrabold text-institutional-gold">12</span>
                <span className="text-[11px] text-gray-300">Shortlisted for Patents</span>
              </div>
            </div>
          </div>
        </div>

        {/* STUDENT WINNING PROTOTYPES */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-institutional-navy mb-4">
            Highlighted Expo &amp; University Accolades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDENT_INNOVATIONS.map((innov, idx) => (
              <div
                key={idx}
                className="bg-institutional-bg-subtle border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span className="font-semibold text-institutional-navy">{innov.department}</span>
                  <span className="font-mono text-gray-400">{innov.year}</span>
                </div>
                <h4 className="text-base font-bold text-institutional-navy mb-2">{innov.title}</h4>
                <p className="text-xs text-gray-600 mb-3">{innov.description}</p>
                <div className="p-2.5 bg-white rounded border border-gray-200 text-xs">
                  <p className="font-bold text-institutional-maroon">{innov.award}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">{innov.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMPOSIUMS & WORKSHOPS */}
      <section id="symposiums" className="bg-institutional-bg-subtle py-12 md:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-1">
              SCHOLARLY FORUMS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-institutional-navy tracking-tight">
              National Symposiums &amp; Research Workshops
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-2xl">
              Technical symposiums conducted in partnership with DRDO research scientists and industry experts.
            </p>
          </div>

          <div className="space-y-6">
            {RESEARCH_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row justify-between gap-6 hover:shadow-card transition-shadow"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-institutional-navy text-white uppercase">
                      {event.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {event.date}
                    </span>
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {event.venue}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-institutional-navy">{event.title}</h3>
                  <p className="text-xs font-semibold text-institutional-maroon">
                    Organizer: {event.organizer}
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed">{event.description}</p>

                  <div className="p-3 bg-gray-50 rounded border border-gray-200 text-xs">
                    <strong className="text-institutional-navy">Key Outcomes: </strong>
                    <span className="text-gray-700">{event.outcomes}</span>
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
