export interface InstitutionalEvent {
  id: string;
  title: string;
  organizer: string;
  date: string;
  venue: string;
  category: 'EXPO' | 'SYMPOSIUM' | 'FDP' | 'CONFERENCE';
  description: string;
  outcomes: string;
}

export const RESEARCH_EVENTS: InstitutionalEvent[] = [
  {
    id: 'EV-01',
    title: 'Annual Institutional Project EXPO',
    organizer: 'Central R&D and Consultancy Cell & All Engineering Departments',
    date: 'Annual Flagship Showcase',
    venue: 'Mechanical & EEE Foyer / M-MARTIC Central Atrium',
    category: 'EXPO',
    description:
      'Premier institutional exhibition bringing together over 120 final-year and pre-final year undergraduate research prototypes, software solutions, and patented inventions judged by external industry delegates from DRDO, TCS, and Hyderabad industrial chapters.',
    outcomes: 'Best projects awarded cash citations; 12 projects shortlisted for provisional patent drafting and seed funding.',
  },
  {
    id: 'EV-02',
    title: 'National Symposium on Advances in Defense Electronics & Signal Processing',
    organizer: 'Department of ECE in collaboration with DRDO RCI/DRDL',
    date: 'Institutional Technical Symposium',
    venue: 'Seminar Hall, Central Academic Block',
    category: 'SYMPOSIUM',
    description:
      'Technical forum addressing modern challenges in radar cross-section analysis, microwave antennas, and high-speed hardware synthesis featuring keynotes by senior DRDO defense scientists.',
    outcomes: 'Compendium of papers published in indexed proceedings; collaborative research task-groups established.',
  },
  {
    id: 'EV-03',
    title: 'Faculty Development Program on High-Performance Deep Learning & Cloud Architectures',
    organizer: 'Department of CSE & Information Technology under M-MARTIC',
    date: 'Advanced Research Training Week',
    venue: 'CSED High-Performance Computing Laboratory',
    category: 'FDP',
    description:
      'Intensive hands-on faculty research enablement covering GPU cluster utilization, PyTorch neural architectures, DrillBit plagiarism auditing, and Scopus publication strategies.',
    outcomes: 'Over 65 faculty participants trained from 8 engineering colleges.',
  },
  {
    id: 'EV-04',
    title: 'Workshop on Quality Control, Concrete Diagnostics & NDT Standards',
    organizer: 'Department of Civil Engineering & GHMC Technical Cell',
    date: 'Municipal Engineering Workshop',
    venue: 'CED Heavy Materials Lab & R&D Block',
    category: 'CONFERENCE',
    description:
      'Practical demonstration of ultrasonic pulse velocity, rebound hammer calibrations, and core extraction testing for municipal engineers and consulting structural engineers.',
    outcomes: 'Standard Operating Procedures manual formulated for third-party municipal quality compliance.',
  },
];
