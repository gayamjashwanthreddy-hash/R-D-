export interface ResearchPublication {
  id: string;
  title: string;
  authors: string[];
  department: string;
  journalOrConference: string;
  year: number;
  indexing: 'SCOPUS' | 'SCI' | 'UGC_CARE' | 'IEEE_XPLORE';
  doiOrUrl?: string;
  citations?: number;
}

export const FACULTY_PUBLICATIONS: ResearchPublication[] = [
  {
    id: 'PUB-01',
    title: 'Multi-Modal Deep Feature Fusion for Robust SAR and Optical Imagery Registration in Challenging Terrains',
    authors: ['Dr. V. Chandra Sekhar', 'Dr. G. Kanaka Durga'],
    department: 'Electronics & Communication Engineering',
    journalOrConference: 'IEEE Geoscience and Remote Sensing Letters / Defense Technologies',
    year: 2023,
    indexing: 'IEEE_XPLORE',
    doiOrUrl: 'https://doi.org/10.1109/LGRS.2023.MVSREC',
    citations: 28,
  },
  {
    id: 'PUB-02',
    title: 'Explainable Deep Convolutional Architectures for Real-Time Multi-Class Object Identification in Autonomous Systems',
    authors: ['Dr. A. V. Krishna Prasad', 'Dr. B. Sandhya', 'Dr. Akhil Khare'],
    department: 'Computer Science & Engineering',
    journalOrConference: 'Expert Systems with Applications (Elsevier)',
    year: 2022,
    indexing: 'SCI',
    doiOrUrl: 'https://doi.org/10.1016/j.eswa.2022.118942',
    citations: 45,
  },
  {
    id: 'PUB-03',
    title: 'Investigation of Interlaminar Fracture Toughness in High-Performance Carbon Fiber Polymer Composites for Aerospace Applications',
    authors: ['Dr. M. Madhavi', 'Dr. J. Kandasamy', 'Dr. S. Gajanana'],
    department: 'Mechanical Engineering',
    journalOrConference: 'Journal of Composite Materials (SAGE)',
    year: 2022,
    indexing: 'SCOPUS',
    doiOrUrl: 'https://doi.org/10.1177/00219983221094',
    citations: 19,
  },
  {
    id: 'PUB-04',
    title: 'Non-Destructive Compressive Strength Prediction of Alkali-Activated Slag Concrete using Combined Ultrasonic Pulse Velocity and Rebound Hammer',
    authors: ['Dr. V. Shiva Chandra', 'Dr. R. Sandhya Rani'],
    department: 'Civil Engineering',
    journalOrConference: 'Construction and Building Materials (Elsevier)',
    year: 2023,
    indexing: 'SCI',
    doiOrUrl: 'https://doi.org/10.1016/j.conbuildmat.2023.131201',
    citations: 34,
  },
  {
    id: 'PUB-05',
    title: 'Design of Wideband Planar Microstrip Patch Antenna with Defected Ground Structure for Sub-6 GHz 5G Wireless Communications',
    authors: ['Dr. G. Kanaka Durga', 'Dr. S. V. R. Manimala'],
    department: 'Electronics & Communication Engineering',
    journalOrConference: 'Microwave and Optical Technology Letters (Wiley)',
    year: 2021,
    indexing: 'SCI',
    doiOrUrl: 'https://doi.org/10.1002/mop.32890',
    citations: 52,
  },
  {
    id: 'PUB-06',
    title: 'Blockchain-Assisted Provenance Verification for Secure Multimedia Asset Sharing in Cloud-Fog Infrastructures',
    authors: ['Dr. D. Shanthi', 'Dr. Sesham Anand'],
    department: 'Computer Science & Engineering',
    journalOrConference: 'IEEE Transactions on Network and Service Management',
    year: 2022,
    indexing: 'IEEE_XPLORE',
    doiOrUrl: 'https://doi.org/10.1109/TNSM.2022.3168902',
    citations: 39,
  },
  {
    id: 'PUB-07',
    title: 'Performance Analysis of Grid-Integrated Solar PV System with Adaptive Neuro-Fuzzy MPPT Control under Dynamic Irradiance Conditions',
    authors: ['Dr. T. Chandrasekhar'],
    department: 'Electrical & Electronics Engineering',
    journalOrConference: 'Renewable Energy Focus (Elsevier)',
    year: 2023,
    indexing: 'SCOPUS',
    doiOrUrl: 'https://doi.org/10.1016/j.ref.2023.04.005',
    citations: 21,
  },
  {
    id: 'PUB-08',
    title: 'Combustion and Emission Characteristics of Biodiesel Blends with Ceramic Thermal Barrier Coating on Piston Crown',
    authors: ['Dr. G. Venkata Subbaiah'],
    department: 'Mechanical / Automobile Engineering',
    journalOrConference: 'Energy (Elsevier)',
    year: 2021,
    indexing: 'SCI',
    doiOrUrl: 'https://doi.org/10.1016/j.energy.2021.121890',
    citations: 63,
  },
];
