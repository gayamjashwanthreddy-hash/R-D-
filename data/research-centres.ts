export interface ResearchCenter {
  department: string;
  code: string;
  affiliatingBody: string;
  establishmentYear: string;
  description: string;
  recognizedSupervisors: string[];
  keyThrustAreas: string[];
}

export interface ResearchDomain {
  id: string;
  title: string;
  category: string;
  description: string;
  department: string;
  facilities: string[];
}

export const RECOGNIZED_RESEARCH_CENTRES: ResearchCenter[] = [
  {
    department: 'Computer Science & Engineering',
    code: 'CSE',
    affiliatingBody: 'Osmania University (Recognized Research Centre for Ph.D.)',
    establishmentYear: 'Affiliated OU Center',
    description:
      'Recognized center for doctoral scholars pursuing advanced research in Artificial Intelligence, Deep Learning, Cloud Computing, Big Data Analytics, Information Security, and Cryptography.',
    recognizedSupervisors: [
      'Dr. Akhil Khare (Professor)',
      'Dr. B. Sandhya (Professor & Dean R&D)',
      'Dr. H. Jayasree (Professor)',
      'Dr. M. Hanmandlu (Distinguished Visiting/Research Professor)',
      'Dr. A. V. Krishna Prasad (Professor)',
      'Dr. Sesham Anand (Professor)',
    ],
    keyThrustAreas: [
      'Artificial Intelligence & Deep Neural Networks',
      'Cybersecurity, Malware Analysis & Network Forensics',
      'Cloud Resource Optimization & Multimedia Sharing',
      'Natural Language Processing & Speech Technologies',
      'Computer Vision, Medical Imaging & Biometrics',
    ],
  },
  {
    department: 'Electronics & Communication Engineering',
    code: 'ECE',
    affiliatingBody: 'Osmania University (Recognized Research Centre for Ph.D.)',
    establishmentYear: 'Affiliated OU Center',
    description:
      'State-of-the-art center equipped with dedicated RF & Microwave Laboratory, Antenna Measurement Chamber, FPGA prototyping systems, and high-frequency instrumentation.',
    recognizedSupervisors: [
      'Dr. G. Kanaka Durga (Professor & Principal)',
      'Dr. V. Chandra Sekhar (Professor)',
      'Dr. S. P. Venu Madhava Rao (Professor)',
      'Dr. T. Kavitha (Associate Professor)',
    ],
    keyThrustAreas: [
      'Antenna Design, Microwave Circuits & Metamaterials',
      'Synthetic Aperture Radar (SAR) Image Processing & Registration',
      'VLSI Architecture, Low-Power Embedded Systems & FPGA Prototyping',
      'Optical & Infrared Sensor Signal Processing',
      'IoT Systems & Wireless Sensor Networks',
    ],
  },
  {
    department: 'Mechanical Engineering',
    code: 'MED',
    affiliatingBody: 'Osmania University (Recognized Research Centre for Ph.D.)',
    establishmentYear: 'Affiliated OU Center',
    description:
      'Dedicated facility conducting research into composite materials, thermal analysis, finite element modelling, manufacturing automation, and defence-oriented sensing mechanisms.',
    recognizedSupervisors: [
      'Dr. M. Madhavi (Professor)',
      'Dr. S. Gajanana (Professor)',
      'Dr. J. Kandasamy (Professor)',
      'Dr. G. Venkata Subbaiah (Professor, Automobile/Mechanical)',
      'Dr. P. A. Sastry (Professor, Advisory)',
    ],
    keyThrustAreas: [
      'Investigation and Testing of Composite Structures',
      'Pyro-bolt Mechanisms & Sensing Instrumentation (Defense ASL)',
      'Computational Fluid Dynamics (CFD) & Thermal Engineering',
      'Advanced Manufacturing, Additive Fabrication & CAD/CAM',
      'Alternative Fuels, Hybrid Vehicle Dynamics & Emission Controls',
    ],
  },
];

export const RESEARCH_DOMAINS: ResearchDomain[] = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence, Machine Learning & Data Science',
    category: 'Emerging Technologies',
    description:
      'Focusing on deep neural architectures, explainable AI, intelligent object detection, medical image segmentation, and big data pipeline optimization.',
    department: 'Computer Science & Engineering / Information Technology',
    facilities: ['High-Performance Computing Cluster', 'Deep Learning Workstations', 'NVIDIA GPU Accelerated Systems'],
  },
  {
    id: 'defense-aerospace',
    title: 'Defense Electronics, SAR Imaging & Sensor Fusion',
    category: 'Sponsored Research',
    description:
      'Long-standing technical collaboration with DRDO laboratories (DRDL, RCI, ASL) executing projects on multi-modal image registration, synthetic aperture radar (SAR), and pyrotechnic sensing.',
    department: 'Electronics & Communication / Mechanical Engineering',
    facilities: ['RF & Microwave Lab', 'Anechoic Chamber', 'Sensor Signal Characterization Bench'],
  },
  {
    id: 'civil-testing',
    title: 'Sustainable Infrastructure & Quality Control Engineering',
    category: 'Institutional Consultancy',
    description:
      'Official GHMC-authorized Third-Party Quality Control Agency providing non-destructive testing, structural design approvals, triaxial soil mechanics, and highway pavement evaluations.',
    department: 'Civil Engineering',
    facilities: ['Universal Testing Machine (200T UTM)', 'Compression Testing Machine (CTM)', 'Geotechnical Triaxial Test Rig', 'Rebound Hammer & NDT Unit'],
  },
  {
    id: 'energy-mobility',
    title: 'Power Systems, Renewable Energy & Clean Mobility',
    category: 'Applied Engineering',
    description:
      'Pioneering smart grid controllers, solar photovoltaic integration, power electronic drive topologies, battery management systems, and electric vehicle powertrain analysis.',
    department: 'Electrical & Electronics Engineering / Automobile',
    facilities: ['Power Systems Simulation Lab', 'Renewable Energy Test Bench', 'Automotive Dynamics Rig'],
  },
];
