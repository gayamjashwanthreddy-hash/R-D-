'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { RD_LEADERSHIP } from '@/data/governance';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    enquiryType: 'SPONSORED_RESEARCH',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Contact R&D' }]} />

      {/* HEADER */}
      <section className="bg-institutional-bg-subtle py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-institutional-maroon block mb-2">
            COLLABORATION &bull; SPONSORED PROPOSALS &bull; TESTING
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-institutional-navy tracking-tight">
            Contact Research &amp; Development
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-3 max-w-3xl leading-relaxed">
            Reach out to the Dean R&amp;D or Central RDC Coordinator for research project submissions, consultancy testing services, or industry-academia partnerships.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS & SUBMISSION FORM */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT 5 COLS: OFFICIAL DIRECTORY */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl font-bold text-institutional-navy tracking-tight">
              Administrative R&amp;D Directory
            </h2>

            {/* DEAN OFFICE */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-5 shadow-sm space-y-3">
              <span className="px-2 py-0.5 bg-institutional-navy text-white text-[10px] font-bold uppercase rounded">
                Dean R&amp;D Office
              </span>
              <h3 className="text-base font-bold text-institutional-navy">Dr. B. Sandhya</h3>
              <p className="text-xs text-institutional-maroon font-semibold">
                Dean, Research &amp; Development &bull; Professor, Dept. of CSE
              </p>
              <div className="text-xs text-gray-600 space-y-1.5 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-institutional-gold flex-shrink-0" />
                  <span>dean_rd@mvsrec.edu.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-institutional-gold flex-shrink-0" />
                  <span>+91-40-24530361 / Ext: Dean R&amp;D</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-institutional-gold flex-shrink-0 mt-0.5" />
                  <span>R&amp;D Block Pavilion, Ground Floor, M-MARTIC Wing</span>
                </div>
              </div>
            </div>

            {/* RDC COORDINATOR */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-5 shadow-sm space-y-3">
              <span className="px-2 py-0.5 bg-institutional-maroon text-white text-[10px] font-bold uppercase rounded">
                Central RDC Coordinator Office
              </span>
              <h3 className="text-base font-bold text-institutional-navy">Dr. R. Sandhya Rani</h3>
              <p className="text-xs text-institutional-navy font-semibold">
                Central RDC Coordinator &bull; Associate Professor, Dept. of Civil Engineering
              </p>
              <div className="text-xs text-gray-600 space-y-1.5 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-institutional-gold flex-shrink-0" />
                  <span>rdc_coordinator@mvsrec.edu.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-institutional-gold flex-shrink-0" />
                  <span>+91-40-24530361 / Ext: RDC Cell</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-institutional-gold flex-shrink-0 mt-0.5" />
                  <span>Research &amp; Development and Consultancy Cell</span>
                </div>
              </div>
            </div>

            {/* CAMPUS LOCATION */}
            <div className="p-4 bg-institutional-bg-subtle rounded-lg border border-gray-200 text-xs text-gray-700 space-y-2">
              <p className="font-bold text-institutional-navy flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-institutional-maroon" />
                <span>Campus Postal Address:</span>
              </p>
              <p className="leading-relaxed pl-5">
                MVSR Engineering College<br />
                Nadergul, Saroornagar Mandal,<br />
                Hyderabad, Telangana 501510, India
              </p>
              <p className="text-[11px] text-gray-500 pl-5">
                Working Hours: Monday – Saturday (9:30 AM – 4:30 PM)
              </p>
            </div>
          </div>

          {/* RIGHT 7 COLS: FUNCTIONAL ENQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-institutional-navy mb-2">
                Submit Research Proposal or Consultancy Requisition
              </h2>
              <p className="text-xs text-gray-600 mb-6">
                Fill in the details below to initiate communication with the Central R&amp;D Cell regarding funded projects, GHMC third-party testing, or academic collaborations.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-green-50 border border-green-200 rounded-lg space-y-3">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-green-900">
                    Requisition Transmitted Successfully
                  </h3>
                  <p className="text-xs text-green-800 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to the MVSR Research &amp; Development Cell. Your inquiry has been logged, and the office of the Dean R&amp;D or respective departmental coordinator will follow up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        enquiryType: 'SPONSORED_RESEARCH',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 bg-institutional-navy text-white text-xs font-bold rounded uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-institutional-navy mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Prof. / Mr. / Ms."
                        className="w-full px-3 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-institutional-navy mb-1">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.org"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-institutional-navy mb-1">
                        Contact Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91-XXXXXXXXXX"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-institutional-navy mb-1">
                        Affiliation / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="University, DRDO, Industry, GHMC, etc."
                        className="w-full px-3 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-institutional-navy mb-1">
                      Enquiry Category *
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-xs bg-white text-gray-700 font-medium outline-none focus:border-institutional-navy"
                    >
                      <option value="SPONSORED_RESEARCH">Sponsored Defense / Extramural Research Project</option>
                      <option value="CONSULTANCY_TESTING">Civil / Structural Material Testing &amp; Third-Party QC</option>
                      <option value="PHD_GUIDANCE">Osmania University Ph.D. Research Admissions &amp; Guidance</option>
                      <option value="PATENT_IPR">Patent Filing / Prior-Art Search Consultation</option>
                      <option value="PLAGIARISM_DRILLBIT">DrillBit Anti-Plagiarism Verification Clearance</option>
                      <option value="GENERAL">General R&amp;D Cell Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-institutional-navy mb-1">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief subject of the proposal or testing requisition"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-institutional-navy mb-1">
                      Message / Technical Specifications *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please elaborate on the project scope, testing equipment required, specimen dimensions, or collaboration details..."
                      className="w-full px-3 py-2 border border-gray-300 rounded text-xs outline-none focus:border-institutional-navy font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-institutional-navy hover:bg-institutional-navy-light text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-institutional-gold" />
                    <span>Transmit Requisition to R&amp;D Cell</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
