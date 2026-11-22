export interface PatentRecord {
  applicationNo: string;
  title: string;
  inventors: string[];
  department: string;
  status: 'PUBLISHED' | 'GRANTED' | 'UNDER_EXAMINATION';
  publicationDate: string;
  patentOffice: string;
  abstract: string;
  cbrNumber?: string;
}

export interface PatentCommitteeMember {
  name: string;
  department: string;
  role: 'ADVISORY' | 'DEPARTMENT_REPRESENTATIVE' | 'CHIEF_COORDINATOR';
}

export const PATENT_SEARCH_GROUP: PatentCommitteeMember[] = [
  {
    name: 'Dr. P. A. Sastry',
    department: 'Department of Mechanical Engineering',
    role: 'ADVISORY',
  },
  {
    name: 'Mr. K. S. R. Murthy',
    department: 'Department of Electronics & Communication Engineering',
    role: 'ADVISORY',
  },
  {
    name: 'Mr. V. Ashwini Kumar',
    department: 'Department of Information Technology (Chief-Coordinator EDC & IIC)',
    role: 'CHIEF_COORDINATOR',
  },
  {
    name: 'Dr. Akhil Khare',
    department: 'Department of Computer Science & Engineering',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Dr. B. Sandhya',
    department: 'Department of Computer Science & Engineering (Dean R&D)',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Mr. Raghavendhar',
    department: 'Department of Civil Engineering',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Mr. C. V. Gopala Krishna',
    department: 'Department of Electrical & Electronics Engineering',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Mr. D. V. S. R. Sesidhar',
    department: 'Department of Electronics & Communication Engineering',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Ms. Ch. Srujana',
    department: 'Department of Information Technology',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Mr. T. Murali Mohan Raju',
    department: 'Department of Automobile Engineering',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Mr. V. Nikhil Murthy',
    department: 'Department of Mechanical Engineering',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Mr. B. Anjan Kumar',
    department: 'Department of Business Management (MBA)',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
  {
    name: 'Dr. D. Rekha',
    department: 'Department of Sciences & Humanities',
    role: 'DEPARTMENT_REPRESENTATIVE',
  },
];

export const OFFICIAL_PATENTS: PatentRecord[] = [
  {
    applicationNo: '202041047669',
    title: 'ICDN- Object Detection System: Intelligent Object Detection System with Image Classification and Deep Neural Networks',
    inventors: ['Dr. A. V. Krishna Prasad', 'Faculty Research Group'],
    department: 'Computer Science & Engineering',
    status: 'PUBLISHED',
    publicationDate: 'Official Patent Journal Publication',
    patentOffice: 'Indian Patent Office (IPO), Government of India',
    abstract:
      'An intelligent embedded edge object detection system utilizing cascaded convolutional and deep neural network layers optimized for low-latency image classification in real-time surveillance and automated vehicular navigation systems.',
  },
  {
    applicationNo: '202141031402',
    title: 'A System for Sharing Images and Multimedia Messages in a Cloud Network',
    inventors: ['Dr. D. Shanthi', 'Research Team'],
    department: 'Computer Science & Engineering',
    status: 'PUBLISHED',
    publicationDate: 'Official Patent Journal Publication',
    patentOffice: 'Indian Patent Office (IPO), Government of India',
    abstract:
      'A secure, distributed cryptographic architecture for high-throughput image and multimedia transmission across multi-tenant cloud ecosystems, ensuring end-to-end provenance integrity and zero-knowledge data access authentication.',
  },
  {
    applicationNo: '202241019842',
    title: 'Smart Anechoic Measurement and Calibrated Antenna Characterization System',
    inventors: ['Dr. G. Kanaka Durga', 'Dr. V. Chandra Sekhar', 'ECE Research Faculty'],
    department: 'Electronics & Communication Engineering',
    status: 'UNDER_EXAMINATION',
    publicationDate: 'Official Gazette Filed',
    patentOffice: 'Indian Patent Office (IPO), Government of India',
    abstract:
      'A method and apparatus for real-time robotic 3D radiation pattern measurement inside a microwave anechoic chamber, featuring automated turntable angle interpolation and multi-polarization planar near-field to far-field transform calibration.',
  },
  {
    applicationNo: '202141054210',
    title: 'Non-Destructive Concrete Quality and Micro-Crack Inspection Apparatus',
    inventors: ['Dr. V. Shiva Chandra', 'Dr. R. Sandhya Rani', 'Civil Engineering Research Group'],
    department: 'Civil Engineering',
    status: 'PUBLISHED',
    publicationDate: 'Official Patent Journal Publication',
    patentOffice: 'Indian Patent Office (IPO), Government of India',
    abstract:
      'A field-portable non-destructive structural diagnostic apparatus coupling ultrasonic pulse velocity with surface rebound metrics, delivering instantaneous compressive strength estimations for municipal civil infrastructure audits.',
  },
];
