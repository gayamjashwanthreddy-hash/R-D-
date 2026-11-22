export interface FacultyProfile {
  name: string;
  department: string;
  designation: string;
  qualification: string;
  specialization: string;
  ouSupervisorStatus: boolean;
}

export const FACULTY_RESEARCHERS: FacultyProfile[] = [
  // CSE
  {
    name: 'Dr. Akhil Khare',
    department: 'Computer Science & Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech, B.E.',
    specialization: 'Artificial Intelligence, Machine Learning, Data Analytics, Cloud Security',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. B. Sandhya',
    department: 'Computer Science & Engineering',
    designation: 'Professor & Dean R&D',
    qualification: 'Ph.D., M.Tech, B.Tech',
    specialization: 'Information Retrieval, Natural Language Processing, Machine Learning',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. H. Jayasree',
    department: 'Computer Science & Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Data Mining, Image Processing, Intelligent Systems',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. A. V. Krishna Prasad',
    department: 'Computer Science & Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Deep Neural Networks, Object Detection Systems, Pattern Recognition',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. Sesham Anand',
    department: 'Computer Science & Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Software Engineering, Cloud Computing, Distributed Systems',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. D. Sirisha',
    department: 'Computer Science & Engineering',
    designation: 'Associate Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Mobile Computing, Network Security, Wireless Ad-hoc Networks',
    ouSupervisorStatus: false,
  },
  {
    name: 'Dr. Namita Parati',
    department: 'Computer Science & Engineering',
    designation: 'Associate Professor & RDC Coordinator (CSED)',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Data Science, Algorithm Optimization, Web Technologies',
    ouSupervisorStatus: false,
  },

  // ECE
  {
    name: 'Dr. G. Kanaka Durga',
    department: 'Electronics & Communication Engineering',
    designation: 'Professor & Principal',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Antennas & Wave Propagation, Microwave Circuits, Anechoic Characterization',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. V. Chandra Sekhar',
    department: 'Electronics & Communication Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'RF & Microwave Engineering, SAR Radar Signal Processing, Electromagnetics',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. S. P. Venu Madhava Rao',
    department: 'Electronics & Communication Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'VLSI System Design, Embedded Architectures, Signal Processing',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. T. Kavitha',
    department: 'Electronics & Communication Engineering',
    designation: 'Associate Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Wireless Communications, Sensor Networks, Digital Image Processing',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. S. V. R. Manimala',
    department: 'Electronics & Communication Engineering',
    designation: 'Associate Professor & RDC Coordinator (ECED)',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Signal Processing, Biomedical Instrumentation, IoT Hardware',
    ouSupervisorStatus: false,
  },

  // Mechanical
  {
    name: 'Dr. M. Madhavi',
    department: 'Mechanical Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Composite Materials, Machine Design, Finite Element Analysis',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. S. Gajanana',
    department: 'Mechanical Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Thermal Engineering, Computational Fluid Dynamics, Heat Transfer',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. J. Kandasamy',
    department: 'Mechanical Engineering',
    designation: 'Professor & RDC Coordinator (MED)',
    qualification: 'Ph.D., M.E.',
    specialization: 'Manufacturing Technologies, Material Characterization, CAD/CAM',
    ouSupervisorStatus: true,
  },
  {
    name: 'Dr. G. Venkata Subbaiah',
    department: 'Mechanical & Automobile Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Automobile Engineering, Alternate Fuels, Engine Combustion Dynamics',
    ouSupervisorStatus: true,
  },

  // Civil
  {
    name: 'Dr. V. Shiva Chandra',
    department: 'Civil Engineering',
    designation: 'Associate Professor & RDC Coordinator (CED)',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Structural Engineering, Concrete Technology, Non-Destructive Testing',
    ouSupervisorStatus: false,
  },
  {
    name: 'Dr. R. Sandhya Rani',
    department: 'Civil Engineering',
    designation: 'Associate Professor & Central RDC Coordinator',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Geotechnical Engineering, Soil Dynamics, Foundation Engineering',
    ouSupervisorStatus: false,
  },
  {
    name: 'Dr. M. Kameswara Rao',
    department: 'Civil Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Water Resources Engineering, Hydrology, Environmental Engineering',
    ouSupervisorStatus: false,
  },
  {
    name: 'Dr. G. Sreenivasa Rao',
    department: 'Civil Engineering',
    designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Structural Dynamics, Earthquake Engineering, Highway Materials',
    ouSupervisorStatus: false,
  },

  // IT & EEE
  {
    name: 'Dr. B. Vasavi',
    department: 'Information Technology',
    designation: 'Associate Professor & RDC Coordinator (ITD)',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Cloud Security, Data Mining, Web Intelligence',
    ouSupervisorStatus: false,
  },
  {
    name: 'Dr. T. Chandrasekhar',
    department: 'Electrical & Electronics Engineering',
    designation: 'Associate Professor & RDC Coordinator (EEED)',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Power Systems, Renewable Energy Integration, High Voltage Engineering',
    ouSupervisorStatus: false,
  },
];
