export interface LabFacility {
  id: string;
  name: string;
  department: string;
  location: string;
  areaSqFt?: string;
  description: string;
  keyEquipment: string[];
  focusResearch: string[];
}

export const CENTRAL_RD_FACILITY = {
  name: 'M-MARTIC — MVSR Multidisciplinary Advanced Research & Technology Innovation Centre',
  institutionalCellName: 'Research & Development and Consultancy Cell',
  area: '4,000+ sq. ft. Dedicated Research Hub',
  buildingName: 'R&D Block (Brick Architectural Pavilion)',
  features: [
    'Dedicated 4,000+ sq. ft. open-plan collaborative research and prototyping space',
    'Specialized incubation and intellectual property advisory bays',
    'High-speed enterprise research compute backbone and LAN connection',
    'Cross-disciplinary design workstations connecting hardware, embedded and software domains',
    'Conference and thesis presentation hall with multimedia recording capabilities',
  ],
  institutionalNote:
    'Institutional Terminology Context: The foundational official R&D charter specifies the "Research & Development and Consultancy Cell" managing the 4,000+ sq. ft. dedicated research hub. The upgraded modern portal operates this facility under the "M-MARTIC" (MVSR Multidisciplinary Advanced Research & Technology Innovation Centre) framework.',
};

export const SPECIALIZED_LABORATORIES: LabFacility[] = [
  {
    id: 'ece-rf-anechoic',
    name: 'RF & Microwave Research Lab and Anechoic Chamber',
    department: 'Electronics & Communication Engineering',
    location: 'R&D Block & ECED Research Wing',
    areaSqFt: '1,200 sq. ft.',
    description:
      'Purpose-built electromagnetic measurement facility featuring an RF-shielded anechoic chamber, multi-GHz vector network analyzers, horn antennas, and automated positioning turntables for antenna characterization.',
    keyEquipment: [
      'RF-Shielded Anechoic Chamber with Microwave Absorbers',
      'Vector Network Analyzer (VNA up to 20 GHz)',
      'Digital Storage Oscilloscopes (DSO 1 GHz+)',
      'Precision Automated Rotary Antenna Turntable',
      'HFSS & CST Microwave Studio Simulation Suites',
    ],
    focusResearch: ['5G/6G Microstrip Antennas', 'SAR Radar Sensors', 'Metamaterials', 'Electromagnetic Interference (EMI) Mitigation'],
  },
  {
    id: 'ece-embedded-fpga',
    name: 'Embedded Systems & FPGA Hardware Prototyping Laboratory',
    department: 'Electronics & Communication Engineering',
    location: 'ECED Research Facility',
    areaSqFt: '950 sq. ft.',
    description:
      'Dedicated laboratory supporting rapid hardware synthesis, FPGA logic compilation, PCB milling, surface-mount soldering, and microcontroller firmware validation for sponsored defense and industrial applications.',
    keyEquipment: [
      'Xilinx / AMD Zynq & Artix-7 FPGA Development Boards',
      'High-Precision Dual-Sided PCB Milling & Prototyping Machine',
      'Mixed-Signal Logic Analyzers & Spectrum Analyzers',
      'SMD Hot Air Rework Stations and Inspection Microscopes',
      'ARM Cortex-M4/M7 Development Toolchains',
    ],
    focusResearch: ['Edge AI Acceleration', 'Defense Cryptographic Cores', 'Industrial Sensor Gateways', 'Low-Power IoT'],
  },
  {
    id: 'ced-testing-qc',
    name: 'Civil Engineering Material Testing & GHMC Third-Party QC Centre',
    department: 'Civil Engineering Department',
    location: 'CED Heavy Structures & Materials Wing',
    areaSqFt: '2,400 sq. ft.',
    description:
      'Accredited testing infrastructure utilized for municipal and state quality control, structural audits, foundation soil mechanics, and high-capacity destructive and non-destructive material evaluation.',
    keyEquipment: [
      '200-Tonne Universal Testing Machine (UTM)',
      'Compression Testing Machine (CTM - 2000 kN)',
      'Triaxial Soil Shear Apparatus & Consolidation Benches',
      'Ultrasonic Pulse Velocity (UPV) Non-Destructive Tester',
      'Diamond Core Drilling Rig & Concrete Rebound Hammers',
    ],
    focusResearch: ['Geopolymer Concrete', 'Fly-Ash Sustainable Blends', 'Soil Stabilization', 'Municipal Infrastructure Third-Party Audits'],
  },
  {
    id: 'cse-hpc-ai',
    name: 'High-Performance Computing & Deep Learning Laboratory',
    department: 'Computer Science & Engineering',
    location: 'R&D Block & CSED Computing Centre',
    areaSqFt: '1,100 sq. ft.',
    description:
      'Centrally managed high-throughput computing environment equipped with GPU-accelerated servers, enterprise virtualization, and multi-terabyte dataset storage arrays for doctoral and faculty machine learning investigations.',
    keyEquipment: [
      'Enterprise NVIDIA GPU Accelerated Tensor Compute Nodes',
      'High-Throughput SAN Storage Array (100+ TB)',
      'Gigabit Managed Backbone Switches & Fiber Interconnects',
      'Virtual Machine Clusters running Linux OpenStack & Docker/K8s',
      'Licensed AI/ML toolkits & drillbit similarity checker server nodes',
    ],
    focusResearch: ['Deep Neural Architectures', 'Computer Vision in Aerial Imagery', 'Cybersecurity Forensics', 'Bioinformatics Analytics'],
  },
  {
    id: 'med-composite-dynamics',
    name: 'Composite Structures & Mechanics Characterization Lab',
    department: 'Mechanical Engineering Department',
    location: 'MED Advanced Fabrication Wing',
    areaSqFt: '1,500 sq. ft.',
    description:
      'Facility supporting structural testing for sponsored aerospace applications, pyrotechnic separation mechanisms, polymer composite vacuum bagging, and modal frequency vibration analysis.',
    keyEquipment: [
      'Composite Specimen Fabrication & Vacuum Bagging Setup',
      'Drop-Weight Impact Tester',
      'Digital Strain Indicator Benches & Load Cells',
      'Dynamic Vibration Exciter and Modal Accelerometer Array',
      'ANSYS Mechanical & FEA Modeling Workstations',
    ],
    focusResearch: ['Fiber-Reinforced Composites', 'Pyro-Bolt Separation Dynamics', 'Finite Element Structural Modeling'],
  },
];
