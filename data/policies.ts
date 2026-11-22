export interface InstitutionalPolicy {
  id: string;
  title: string;
  category: 'ETHICS' | 'INCENTIVES' | 'CONSULTANCY' | 'PLAGIARISM' | 'PATENT_IPR';
  summary: string;
  keyClauses: string[];
  applicableTo: string;
  enforcingAuthority: string;
}

export interface OfficialDocument {
  id: string;
  documentTitle: string;
  category: string;
  fileFormat: string;
  sourceUrl: string;
  description: string;
}

export const INSTITUTIONAL_POLICIES: InstitutionalPolicy[] = [
  {
    id: 'POL-ETHICS-01',
    title: 'Code of Ethics in Academic Research & Publishing',
    category: 'ETHICS',
    summary:
      'Mandatory ethical framework governing all research undertakings, dissertation submissions, experimental trials, and publications across MVSR Engineering College.',
    keyClauses: [
      'Zero tolerance for data fabrication, data falsification, selective reporting, or uncredited intellectual property appropriation.',
      'Mandatory authorship attribution ensuring all listed contributors meaningfully participated in conceptualization, execution, or manuscript drafting.',
      'Conflict of interest disclosure required on all externally sponsored research agreements and commercial consultancy engagements.',
      'Strict adherence to institutional safety protocols when handling high-voltage machinery, pyrotechnic testing, or toxic chemical samples.',
    ],
    applicableTo: 'All Faculty Members, Doctoral Scholars, Research Fellows, and Student Project Teams',
    enforcingAuthority: 'Central R&D and Consultancy Committee & Ethics Review Board',
  },
  {
    id: 'POL-PLAG-01',
    title: 'Anti-Plagiarism Verification & Originality Guidelines',
    category: 'PLAGIARISM',
    summary:
      'Institutional mechanism mandating rigorous textual and code similarity screening for all scholarly articles, book chapters, conference proceedings, M.Tech dissertations, and Ph.D. theses prior to external submission.',
    keyClauses: [
      'The Central Library maintains official deployment and administration of DrillBit Anti-Plagiarism Software for similarity verification.',
      'Overall similarity index must not exceed the prescribed threshold (typically <= 10% excluding standard bibliography, quotes, and mathematical formulas).',
      'Plagiarism clearance certificate from the Central Library / RDC Coordinator is mandatory for Ph.D. synopsis submission to Osmania University.',
      'Disciplinary consequences including retraction, loss of incentives, and departmental inquiry for repeated similarity violations.',
    ],
    applicableTo: 'All academic research outputs, student dissertations, and faculty manuscripts',
    enforcingAuthority: 'Central Library Head & Dean, Research & Development',
  },
  {
    id: 'POL-INC-01',
    title: 'Faculty Research Promotion, Incentives & On-Duty (OD) Leave Policy',
    category: 'INCENTIVES',
    summary:
      'Financial and operational support provisions designed to encourage active pursuit of doctoral degrees, SCI/Scopus journal publications, and competitive external grant acquisition.',
    keyClauses: [
      'Provision of weekly On-Duty (OD) leaves for faculty members actively pursuing Ph.D. programs at Osmania University, JNTU, and other recognized universities.',
      'Financial incentives and reimbursement of registration fees for high-impact publications indexed in SCI, SCIE, Web of Science, and Scopus.',
      'Matching seed grants and administrative allowances for investigators who secure sponsored research funding from DRDO, DST, AICTE, or ISRO.',
      'Annual institutional recognition certificates during the Engineers Day / Annual College Day ceremonies.',
    ],
    applicableTo: 'Full-time faculty members and registered doctoral candidates of MVSREC',
    enforcingAuthority: 'Principal & Dean, Research & Development',
  },
  {
    id: 'POL-CONS-01',
    title: 'Consultancy Procedures & Testing Revenue Distribution Norms',
    category: 'CONSULTANCY',
    summary:
      'Structured operational protocol governing institutional consultancy, third-party quality control (GHMC), material testing, and industry problem-solving.',
    keyClauses: [
      'Formal memorandum or work order processed through the R&D and Consultancy Cell with institutional overhead accounting.',
      'Transparent revenue sharing formula between the institutional development fund, departmental equipment maintenance fund, and the principal investigator/technical team.',
      'Liability insurance, testing certificates, and calibrated equipment verification backed by institutional quality seals.',
    ],
    applicableTo: 'Consultancy teams in Civil, ECE, Mechanical, CSE, EEE, and MBA departments',
    enforcingAuthority: 'Dean R&D, Finance Committee & Head of Civil Engineering',
  },
];

export const OFFICIAL_DOWNLOADABLE_DOCUMENTS: OfficialDocument[] = [
  {
    id: 'DOC-01',
    documentTitle: 'MVSR R&D and Consultancy Policy Framework',
    category: 'Institutional Policies',
    fileFormat: 'PDF',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=rd-policies',
    description: 'Comprehensive guidelines on sponsored projects, publication incentives, patent filing assistance, and research leave rules.',
  },
  {
    id: 'DOC-02',
    documentTitle: 'Institutional Code of Ethics in Research',
    category: 'Ethics & Compliance',
    fileFormat: 'PDF',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=rd-policies',
    description: 'Ethical canons, authorship declarations, plagiarism thresholds, and disciplinary protocols.',
  },
  {
    id: 'DOC-03',
    documentTitle: 'Central R&D & Consultancy Committee Governance Charter',
    category: 'Governance',
    fileFormat: 'PDF',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=rd-governance',
    description: 'Roles, responsibilities, committee tenure, and departmental coordination matrices.',
  },
  {
    id: 'DOC-04',
    documentTitle: 'Sponsored Research & Consultancy Operational Procedures',
    category: 'Procedures',
    fileFormat: 'PDF',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=projects',
    description: 'Standard operating procedures (SOP) for proposal submission to DRDO, DST, AICTE, and private industry clients.',
  },
  {
    id: 'DOC-05',
    documentTitle: 'DrillBit Anti-Plagiarism Software Verification Requisition Form',
    category: 'Resources',
    fileFormat: 'PDF',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=research-resources',
    description: 'Central library submission form for document similarity checking and clearance certification.',
  },
];
