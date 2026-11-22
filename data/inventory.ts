export interface ContentInventoryItem {
  category: string;
  sourceUrl: string;
  extractedContentSummary: string;
  destinationPage: string;
  verificationStatus: 'VERIFIED_OFFICIAL' | 'VERIFIED_ARCHIVAL' | 'FLAGGED_TERMINOLOGY';
  terminologyNote?: string;
}

export const CONTENT_INVENTORY: ContentInventoryItem[] = [
  {
    category: 'About R&D & Facility',
    sourceUrl: 'https://www.mvsrec.edu.in/index.php?Itemid=1542&id=1272&option=com_content&view=article',
    extractedContentSummary: 'Official portal establishing the institutional Research & Development and Consultancy Cell, with a dedicated 4,000+ sq. ft. central research facility.',
    destinationPage: '/about and /infrastructure',
    verificationStatus: 'FLAGGED_TERMINOLOGY',
    terminologyNote: 'Legacy official portal describes the institutional "Research & Development and Consultancy Cell" and 4,000+ sq. ft. research facility. Newer portal describes "M-MARTIC" (MVSR Multidisciplinary Advanced Research & Technology Innovation Centre). Both institutional identities are preserved and cross-referenced.',
  },
  {
    category: 'Vision & Mission',
    sourceUrl: 'https://www.mvsrec.in/research.php',
    extractedContentSummary: 'Official R&D Vision: "To establish MVSR Engineering College as a recognized center of excellence in research, innovation, and technology development, contributing to sustainable growth, industry advancement, and societal well-being." Official 5-point Mission statement.',
    destinationPage: '/about',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    category: 'Central R&D Governance & Committee',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=rd-governance',
    extractedContentSummary: 'Dean R&D: Dr. B. Sandhya; Director (Exam & Research): Dr. C. P. Vardhani; RDC Coordinator: Dr. R. Sandhya Rani; full roster of Departmental Coordinators and Co-coordinators across all 8 branches.',
    destinationPage: '/about',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    category: 'Research Policies & Anti-Plagiarism',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=rd-policies',
    extractedContentSummary: 'Institutional R&D guidelines, faculty incentive schemes, On-Duty (OD) leaves for Ph.D. scholars, Code of Ethics, and DrillBit Anti-Plagiarism Software verification through Central Library.',
    destinationPage: '/policies',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    category: 'Recognized Research Centres & Ph.D. Guidance',
    sourceUrl: 'https://www.mvsrec.edu.in/index.php?Itemid=1542&id=1272',
    extractedContentSummary: 'Osmania University officially approved Ph.D. Research Centers in CSE, ECE, and Mechanical Engineering, along with recognized doctoral research supervisors.',
    destinationPage: '/research',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    category: 'Sponsored Research Projects',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=projects',
    extractedContentSummary: 'Itemized projects funded by premier defense and national bodies: DRDO (DRDL, RCI, ASL) image registration, composite structures, sensor mechanisms, and AICTE MODROBS schemes.',
    destinationPage: '/projects',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    category: 'Institutional Consultancy',
    sourceUrl: 'https://www.mvsrec.edu.in',
    extractedContentSummary: 'Civil Engineering recognition by GHMC as Third-Party Quality Control Agency; MoUs with NHAI and ISRO; specialized material testing facilities.',
    destinationPage: '/projects',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    category: 'Patents & Intellectual Property',
    sourceUrl: 'https://www.mvsrec.edu.in',
    extractedContentSummary: 'Patent Search Group advisory roster and published Indian patent filings including Dr. A.V. Krishna Prasad (App. 202041047669) and Dr. D. Shanthi (App. 202141031402).',
    destinationPage: '/publications-ip',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    category: 'Research Infrastructure & Laboratories',
    sourceUrl: 'https://www.mvsrec.in/research.php?s=research-resources',
    extractedContentSummary: '4,000+ sq. ft. central research facility, ECE RF/Microwave Lab, Anechoic Chamber, PCB Prototyping, Concrete & Soil Mechanics labs with 200T UTM.',
    destinationPage: '/infrastructure',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    category: 'Project EXPO & Activities',
    sourceUrl: 'https://www.mvsrec.edu.in',
    extractedContentSummary: 'Annual Project EXPO, IEEE PES student presentations, and university-level awards (Technocity, Techsonance Osmania University).',
    destinationPage: '/activities',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
];
