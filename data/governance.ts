export interface LeaderProfile {
  name: string;
  designation: string;
  department: string;
  role: string;
  qualifications?: string;
}

export interface DepartmentCoordinator {
  department: string;
  code: string;
  coordinator: string;
  coCoordinator?: string;
}

export const RD_VISION =
  'To establish MVSR Engineering College as a recognized center of excellence in research, innovation, and technology development, contributing to sustainable growth, industry advancement, and societal well-being.';

export const RD_MISSION = [
  'To promote a research-oriented academic environment among faculty and students.',
  'To encourage high-quality publications, patents, and funded research projects.',
  'To strengthen industry-institute interaction and consultancy activities.',
  'To support interdisciplinary and collaborative research across engineering verticals.',
  'To nurture innovation, entrepreneurship, and technology transfer for societal and industrial needs.',
];

export const RD_LEADERSHIP: LeaderProfile[] = [
  {
    name: 'Dr. B. Sandhya',
    designation: 'Professor, Department of Computer Science & Engineering',
    department: 'Computer Science & Engineering',
    role: 'Dean, Research & Development (R&D)',
    qualifications: 'Ph.D., M.Tech, B.Tech',
  },
  {
    name: 'Dr. C. P. Vardhani',
    designation: 'Senior Professor & Administrator',
    department: 'Directorate of Examinations & Research',
    role: 'Director (Examinations & Research)',
    qualifications: 'Ph.D., M.Sc.',
  },
  {
    name: 'Dr. R. Sandhya Rani',
    designation: 'Associate Professor, Department of Civil Engineering',
    department: 'Civil Engineering',
    role: 'RDC Coordinator (Research & Development Cell)',
    qualifications: 'Ph.D., M.Tech',
  },
];

export const CENTRAL_COMMITTEE_COMPOSITION = [
  'Principal — Chairman (Ex-officio)',
  'Dean, Research & Development — Member Secretary & Executive Head',
  'Director (Examinations & Research) — Institutional Advisor',
  'Heads of all Engineering & Applied Science Departments (Civil, CSE, ECE, EEE, IT, Mechanical, MBA, Sciences & Humanities) — Members',
  'Central RDC Coordinator — Convener',
  'Departmental RDC Coordinators & Co-coordinators — Executive Working Group',
];

export const DEPARTMENT_COORDINATORS: DepartmentCoordinator[] = [
  {
    department: 'Civil Engineering Department (CED)',
    code: 'CED',
    coordinator: 'Dr. V. Shiva Chandra',
  },
  {
    department: 'Computer Science & Engineering (CSED)',
    code: 'CSED',
    coordinator: 'Dr. Namita Parati',
    coCoordinator: 'Mr. T. Srikanth',
  },
  {
    department: 'Electronics & Communication Engineering (ECED)',
    code: 'ECED',
    coordinator: 'Dr. S. V. R. Manimala',
    coCoordinator: 'Dr. S. Swapnarani',
  },
  {
    department: 'Electrical & Electronics Engineering (EEED)',
    code: 'EEED',
    coordinator: 'Dr. T. Chandrasekhar',
  },
  {
    department: 'Information Technology (ITD)',
    code: 'ITD',
    coordinator: 'Dr. B. Vasavi',
  },
  {
    department: 'Mechanical Engineering (MED)',
    code: 'MED',
    coordinator: 'Dr. J. Kandasamy',
    coCoordinator: 'Mr. Kameswar Reddy',
  },
  {
    department: 'Department of Business Management (DBM)',
    code: 'DBM',
    coordinator: 'Ms. Meena Yadav',
  },
  {
    department: 'Automobile / Applied Engineering Department (AED)',
    code: 'AED',
    coordinator: 'Dr. Pandarinath',
  },
];
