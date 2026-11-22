export interface SponsoredProject {
  id: string;
  projectTitle: string;
  fundingAgency: string;
  clientType: 'DEFENSE_DRDO' | 'NATIONAL_COUNCIL' | 'GOVERNMENT_STATE' | 'INDUSTRY';
  sanctionedAmount: string;
  sanctionedAmountNumeric: number;
  principalInvestigators: string;
  department: string;
  status: 'COMPLETED' | 'ONGOING';
  year: string;
  summary: string;
}

export interface ConsultancyService {
  id: string;
  clientOrganization: string;
  domain: string;
  department: string;
  scopeOfWork: string;
  authorizedStatus: string;
  equipmentUtilized: string[];
}

export interface StudentInnovationProject {
  title: string;
  team: string;
  department: string;
  event: string;
  award: string;
  year: string;
  description: string;
}

export const SPONSORED_PROJECTS: SponsoredProject[] = [
  {
    id: 'SP-RCI-01',
    projectTitle: 'Registration of Infrared and Optical Images of the Same Scene',
    fundingAgency: 'Research Centre Imarat (RCI), DRDO, Hyderabad',
    clientType: 'DEFENSE_DRDO',
    sanctionedAmount: '₹6.89 Lakhs',
    sanctionedAmountNumeric: 689000,
    principalInvestigators: 'Department of Electronics & Communication Engineering',
    department: 'Electronics & Communication Engineering',
    status: 'COMPLETED',
    year: '2019-20',
    summary:
      'Algorithm development and implementation for multi-spectral image registration aligning thermal infrared sensor feeds with high-resolution optical imagery for defense surveillance and target acquisition.',
  },
  {
    id: 'SP-DRDL-01',
    projectTitle: 'Study Project on "Optimizing View Synthesis Approach for SAR Image Registration"',
    fundingAgency: 'Defence Research and Development Laboratory (DRDL), Hyderabad',
    clientType: 'DEFENSE_DRDO',
    sanctionedAmount: '₹6.50 Lakhs',
    sanctionedAmountNumeric: 650000,
    principalInvestigators: 'Department of Electronics & Communication Engineering',
    department: 'Electronics & Communication Engineering',
    status: 'COMPLETED',
    year: '2019-20',
    summary:
      'Synthetic Aperture Radar (SAR) geometry compensation and view-synthesis optimization enabling robust automated spatial registration of radar returns with satellite reference maps.',
  },
  {
    id: 'SP-DRDL-02',
    projectTitle: 'Feature based SAR Image Registration',
    fundingAgency: 'Defence Research and Development Laboratory (DRDL), Hyderabad',
    clientType: 'DEFENSE_DRDO',
    sanctionedAmount: '₹5.65 Lakhs',
    sanctionedAmountNumeric: 565000,
    principalInvestigators: 'Department of Electronics & Communication Engineering',
    department: 'Electronics & Communication Engineering',
    status: 'COMPLETED',
    year: '2018-19',
    summary:
      'Design of invariant feature descriptors capable of robust keypoint extraction in high-speckle Synthetic Aperture Radar imagery.',
  },
  {
    id: 'SP-ASL-01',
    projectTitle: 'Design and Testing of Sensing Mechanism for Pyro Bolt Operation',
    fundingAgency: 'Advanced Systems Laboratory (ASL), DRDO, Hyderabad',
    clientType: 'DEFENSE_DRDO',
    sanctionedAmount: '₹5.18 Lakhs',
    sanctionedAmountNumeric: 518000,
    principalInvestigators: 'Department of Mechanical Engineering & ECE',
    department: 'Mechanical Engineering',
    status: 'COMPLETED',
    year: '2018-19',
    summary:
      'Mechanical and sensor instrumentation design for microsecond-scale dynamic response verification of pyrotechnic separation mechanisms in aerospace launch structures.',
  },
  {
    id: 'SP-DRDL-03',
    projectTitle: 'Investigation on Composite Structures and Materials Testing',
    fundingAgency: 'Defence Research and Development Laboratory (DRDL), DRDO',
    clientType: 'DEFENSE_DRDO',
    sanctionedAmount: '₹2.00 Lakhs',
    sanctionedAmountNumeric: 200000,
    principalInvestigators: 'Department of Mechanical Engineering',
    department: 'Mechanical Engineering',
    status: 'COMPLETED',
    year: '2017-18',
    summary:
      'Mechanical characterization, interlaminar shear evaluation, and structural compatibility analysis for specialized aerospace-grade composite assemblies.',
  },
  {
    id: 'SP-ASL-02',
    projectTitle: 'Characterization of Bridge-wire and Pyrotechnic Initiation Circuits',
    fundingAgency: 'Advanced Systems Laboratory (ASL), DRDO, Hyderabad',
    clientType: 'DEFENSE_DRDO',
    sanctionedAmount: '₹2.00 Lakhs',
    sanctionedAmountNumeric: 200000,
    principalInvestigators: 'Department of ECE & Mechanical Engineering',
    department: 'Electronics & Communication Engineering',
    status: 'COMPLETED',
    year: '2017-18',
    summary:
      'Electrical transient characterization and thermal dissipation modeling of bridge-wire initiator circuits under high-reliability triggering constraints.',
  },
  {
    id: 'SP-AICTE-01',
    projectTitle: 'Modernization and Removal of Obsolescence (MODROBS) in Communications & VLSI',
    fundingAgency: 'All India Council for Technical Education (AICTE), New Delhi',
    clientType: 'NATIONAL_COUNCIL',
    sanctionedAmount: 'Institutional Grant Scheme',
    sanctionedAmountNumeric: 1200000,
    principalInvestigators: 'Department of Electronics & Communication Engineering',
    department: 'Electronics & Communication Engineering',
    status: 'COMPLETED',
    year: 'National Grant',
    summary:
      'Modernization of core communications and RF laboratory setups, bringing high-frequency digital storage oscilloscopes, logic analyzers, and advanced RF simulation suites into institutional research workflow.',
  },
];

export const CONSULTANCY_SERVICES: ConsultancyService[] = [
  {
    id: 'CONS-GHMC-01',
    clientOrganization: 'Greater Hyderabad Municipal Corporation (GHMC)',
    domain: 'Third-Party Quality Control (QC) & Structural Audits',
    department: 'Civil Engineering Department (CED)',
    scopeOfWork:
      'Appointed as an official Third-Party Quality Control Agency inspecting and verifying municipal capital works, road pavements, flyovers, drainage systems, and public construction projects across municipal circles (Hayathnagar, LB Nagar, Saroornagar).',
    authorizedStatus: 'Officially Empanelled Institutional QC Agency',
    equipmentUtilized: ['Rebound Hammer', 'Concrete Core Cutter', 'Ultrasonic Pulse Velocity (UPV)', 'Compression Testing Machine (CTM)'],
  },
  {
    id: 'CONS-NHAI-01',
    clientOrganization: 'National Highways Authority of India (NHAI)',
    domain: 'Highway Pavement Evaluation & Geotechnical Feasibility',
    department: 'Civil Engineering Department (CED)',
    scopeOfWork:
      'Collaborative institutional MoU for monitoring identified national highway corridors, evaluating asphalt-aggregate mix performance, subgrade California Bearing Ratio (CBR), and deflection testing.',
    authorizedStatus: 'Institutional MoU Partnership',
    equipmentUtilized: ['Benkelman Beam Deflectometer', 'CBR Testing Rig', 'Aggregate Impact & Abrasion Testing Bench'],
  },
  {
    id: 'CONS-ISRO-01',
    clientOrganization: 'Indian Space Research Organisation (ISRO / NRSC)',
    domain: 'Geospatial Characterization & Ground Station Civil Verification',
    department: 'Civil Engineering & Electronics Departments',
    scopeOfWork:
      'Collaborative research consultation examining foundation geotechnics, soil stabilization, and antenna support platform structural tolerances.',
    authorizedStatus: 'Technical Collaboration Framework',
    equipmentUtilized: ['Triaxial Shear Apparatus', 'Direct Shear Rig', 'High Precision Total Stations'],
  },
];

export const STUDENT_INNOVATIONS: StudentInnovationProject[] = [
  {
    title: 'Smart Microgrid Power Routing and Monitoring System',
    team: 'MVSR Electrical & Electronics Engineering Student Innovators',
    department: 'Electrical & Electronics Engineering',
    event: 'Annual Project EXPO — EEE Block Foyer',
    award: 'Best Departmental Working Prototype',
    year: '2025',
    description:
      'Autonomous microgrid orchestrator integrating rooftop solar generation, lead-carbon storage, and IoT real-time load shedding nodes.',
  },
  {
    title: 'Autonomous Mobile Robot for Industrial Hazardous Material Transport',
    team: 'Cross-Departmental Innovation Team (Mech + CSE + ECE)',
    department: 'Multidisciplinary (M-MARTIC)',
    event: 'Technocity Project Expo (Techsonance, Osmania University)',
    award: 'First Place Winner (1st Prize Trophy)',
    year: '2024',
    description:
      'SLAM LiDAR-guided automated guided vehicle with multi-sensor payload and failsafe wireless telemetry designed within M-MARTIC prototyping lab.',
  },
];
