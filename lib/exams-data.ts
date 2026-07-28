// =============================================================================
// PASKO — Government Exam Finder
// Seed data file
// -----------------------------------------------------------------------------
// IMPORTANT: All dates below are PLACEHOLDER / SAMPLE dates chosen so that each
// exam lands in one of the three notice-board buckets ("Open Now", "Opening in
// 30 Days", "Closed Recently") relative to a reference "today". They are NOT
// live data and must be replaced by a real feed (official notifications / an
// editorial pipeline) before production use. Always verify on the official
// source linked from each card.
// =============================================================================

export type ExamCategory =
  | 'UPSC'
  | 'State PCS'
  | 'SSC'
  | 'Police'
  | 'Teacher'
  | 'Railways'
  | 'Banking'
  | 'Other';

export interface Eligibility {
  education: string;
  age: string;
  domicile?: string;
}

export interface Exam {
  id: string;
  name: string;
  body: string;
  category: ExamCategory;
  description: string;
  /** central = applies to every state; state = only the listed states */
  scope: 'central' | 'state';
  states: string[];
  /** ISO date (YYYY-MM-DD) the application form opens */
  openDate: string;
  /** ISO date (YYYY-MM-DD) the application form closes */
  closeDate: string;
  /** speculative opening date — rendered with "(possible)" */
  possible?: boolean;
  officialUrl: string;
  eligibility: Eligibility;
}

export const EXAMS: Exam[] = [
  // ---------------------------------------------------------------------------
  // OPEN NOW — forms accepting submissions as of the reference date
  // ---------------------------------------------------------------------------
  {
    id: 'ssc-cgl-2026',
    name: 'SSC CGL 2026 (Combined Graduate Level)',
    body: 'Staff Selection Commission',
    category: 'SSC',
    description:
      'Combined Graduate Level recruitment for Group B and C posts across central government ministries and attached offices.',
    scope: 'central',
    states: [],
    openDate: '2026-07-01',
    closeDate: '2026-07-24',
    officialUrl: 'https://ssc.nic.in',
    eligibility: {
      education: "Bachelor's degree in any discipline from a recognised university.",
      age: '18–32 years (post-specific; relaxation for reserved categories).',
    },
  },
  {
    id: 'rrb-ntpc-2026',
    name: 'RRB NTPC 2026 (Non-Technical Popular Categories)',
    body: 'Railway Recruitment Boards',
    category: 'Railways',
    description:
      'Recruitment for clerks, typists, goods guards, station masters and other non-technical posts across Indian Railways.',
    scope: 'central',
    states: [],
    openDate: '2026-07-05',
    closeDate: '2026-07-30',
    officialUrl: 'https://rrbcdg.gov.in',
    eligibility: {
      education: 'Class 12 for undergraduate posts; Bachelor’s degree for graduate posts.',
      age: '18–36 years (relaxation for OBC/SC/ST/PwBD as per rules).',
    },
  },
  {
    id: 'ibps-po-2026',
    name: 'IBPS PO 2026-27 (CRP PO/MT-XVI)',
    body: 'Institute of Banking Personnel Selection',
    category: 'Banking',
    description:
      'Common Recruitment Process for Probationary Officer / Management Trainee across participating public-sector banks.',
    scope: 'central',
    states: [],
    openDate: '2026-07-10',
    closeDate: '2026-08-05',
    officialUrl: 'https://ibps.in',
    eligibility: {
      education: "Bachelor's degree in any discipline; basic computer literacy.",
      age: '20–30 years (relaxation per norms).',
    },
  },
  {
    id: 'bpsc-70th-2026',
    name: 'BPSC 70th Combined Competitive (Prelims)',
    body: 'Bihar Public Service Commission',
    category: 'State PCS',
    description:
      'Combined competitive examination for administrative posts in the Bihar state government.',
    scope: 'state',
    states: ['BR'],
    openDate: '2026-07-08',
    closeDate: '2026-07-22',
    officialUrl: 'https://bpsc.bihar.gov.in',
    eligibility: {
      education: "Bachelor's degree from a recognised university.",
      age: '20–37 years (relaxation for reserved categories).',
      domicile: 'Bihar domicile preferred for certain district-level posts.',
    },
  },
  {
    id: 'upsc-epfo-2026',
    name: 'UPSC EPFO Enforcement/Account Officer 2026',
    body: 'Union Public Service Commission',
    category: 'UPSC',
    description:
      'Recruitment to the post of Enforcement Officer / Account Officer in the Employees’ Provident Fund Organisation.',
    scope: 'central',
    states: [],
    openDate: '2026-06-25',
    closeDate: '2026-07-19',
    officialUrl: 'https://upsc.gov.in',
    eligibility: {
      education: "Bachelor's degree; diploma in company law / labour law / public administration desirable.",
      age: 'Up to 30 years (relaxation per norms).',
    },
  },
  {
    id: 'sbi-apprentice-2026',
    name: 'SBI Apprentice 2026-27',
    body: 'State Bank of India',
    category: 'Banking',
    description:
      'One-year apprenticeship engagement across SBI circles for graduates seeking banking sector exposure.',
    scope: 'central',
    states: [],
    openDate: '2026-07-01',
    closeDate: '2026-07-21',
    officialUrl: 'https://sbi.co.in/careers',
    eligibility: {
      education: "Bachelor's degree in any discipline.",
      age: '20–28 years (relaxation per norms).',
    },
  },

  // ---------------------------------------------------------------------------
  // OPENING IN 30 DAYS — forms expected in the next 30 days
  // ---------------------------------------------------------------------------
  {
    id: 'uppcs-prelims-2026',
    name: 'UPPSC PCS Prelims 2026',
    body: 'Uttar Pradesh Public Service Commission',
    category: 'State PCS',
    description:
      'Provincial Civil Services preliminary examination for deputy collector, DSP and other gazetted posts in Uttar Pradesh.',
    scope: 'state',
    states: ['UP'],
    openDate: '2026-08-01',
    closeDate: '2026-08-21',
    officialUrl: 'https://uppsc.up.nic.in',
    eligibility: {
      education: "Bachelor's degree from a recognised university.",
      age: '21–40 years (relaxation for reserved categories).',
      domicile: 'UP domicile required for certain posts; others open to all.',
    },
  },
  {
    id: 'ssc-gd-constable-2026',
    name: 'SSC GD Constable 2026',
    body: 'Staff Selection Commission',
    category: 'SSC',
    description:
      'General Duty Constable recruitment for BSF, CISF, CRPF, ITBP, SSB, AR and SSF forces.',
    scope: 'central',
    states: [],
    openDate: '2026-08-05',
    closeDate: '2026-08-30',
    officialUrl: 'https://ssc.nic.in',
    eligibility: {
      education: 'Class 10 (Matric) pass from a recognised board.',
      age: '18–23 years (relaxation for reserved categories).',
    },
  },
  {
    id: 'mppsc-state-service-2026',
    name: 'MPPSC State Service 2026',
    body: 'Madhya Pradesh Public Service Commission',
    category: 'State PCS',
    description:
      'State service examination for deputy collector, DSP and other gazetted posts in Madhya Pradesh.',
    scope: 'state',
    states: ['MP'],
    openDate: '2026-08-12',
    closeDate: '2026-09-01',
    possible: true,
    officialUrl: 'https://mppsc.mp.gov.in',
    eligibility: {
      education: "Bachelor's degree from a recognised university.",
      age: '21–40 years (relaxation for reserved categories).',
      domicile: 'MP domicile preferred for certain posts.',
    },
  },
  {
    id: 'rpsc-ras-2026',
    name: 'RPSC RAS 2026 (Rajasthan Administrative Service)',
    body: 'Rajasthan Public Service Commission',
    category: 'State PCS',
    description:
      'Combined competitive exam for RAS and allied services in the Rajasthan state government.',
    scope: 'state',
    states: ['RJ'],
    openDate: '2026-08-15',
    closeDate: '2026-09-04',
    possible: true,
    officialUrl: 'https://rpsc.rajasthan.gov.in',
    eligibility: {
      education: "Bachelor's degree from a recognised university.",
      age: '21–40 years (relaxation for reserved categories).',
      domicile: 'Rajasthan domicile preferred for certain posts.',
    },
  },
  {
    id: 'ctet-dec-2026',
    name: 'CTET December 2026',
    body: 'Central Board of Secondary Education',
    category: 'Teacher',
    description:
      'Central Teacher Eligibility Test for candidates seeking teaching posts in central government schools (KVS, NVS, etc.).',
    scope: 'central',
    states: [],
    openDate: '2026-08-10',
    closeDate: '2026-08-30',
    possible: true,
    officialUrl: 'https://ctet.nic.in',
    eligibility: {
      education:
        'Senior Secondary (Class 12) with D.El.Ed / B.Ed / equivalent as per RTE norms.',
      age: 'No upper age limit (minimum 18 years).',
    },
  },
  {
    id: 'sbi-clerk-2026',
    name: 'SBI Clerk 2026-27 (Junior Associates)',
    body: 'State Bank of India',
    category: 'Banking',
    description:
      'Recruitment of Junior Associates (Customer Support & Sales) across SBI branches nationwide.',
    scope: 'central',
    states: [],
    openDate: '2026-08-08',
    closeDate: '2026-08-28',
    possible: true,
    officialUrl: 'https://sbi.co.in/careers',
    eligibility: {
      education: "Bachelor's degree in any discipline.",
      age: '20–28 years (relaxation per norms).',
    },
  },

  // ---------------------------------------------------------------------------
  // CLOSED RECENTLY — forms that closed in the last 30 days
  // ---------------------------------------------------------------------------
  {
    id: 'upsc-cse-2026',
    name: 'UPSC Civil Services (Prelims) 2026',
    body: 'Union Public Service Commission',
    category: 'UPSC',
    description:
      'Civil Services Examination for IAS, IPS, IFS and other Group A and B central services.',
    scope: 'central',
    states: [],
    openDate: '2026-05-20',
    closeDate: '2026-06-18',
    officialUrl: 'https://upsc.gov.in',
    eligibility: {
      education: "Bachelor's degree from a recognised university.",
      age: '21–32 years (relaxation for reserved categories).',
    },
  },
  {
    id: 'wbpsc-clerkship-2026',
    name: 'WBPSC Clerkship 2026',
    body: 'West Bengal Public Service Commission',
    category: 'State PCS',
    description:
      'Recruitment for clerical posts in the West Bengal state government secretariat and directorates.',
    scope: 'state',
    states: ['WB'],
    openDate: '2026-06-01',
    closeDate: '2026-06-30',
    officialUrl: 'https://wbpsc.gov.in',
    eligibility: {
      education: "Bachelor's degree; ability to read, write and type in English and Bengali.",
      age: '18–40 years (relaxation for reserved categories).',
      domicile: 'West Bengal domicile preferred.',
    },
  },
  {
    id: 'tnpsc-group2-2026',
    name: 'TNPSC Group II 2026',
    body: 'Tamil Nadu Public Service Commission',
    category: 'State PCS',
    description:
      'Combined civil services examination for junior-scale posts in the Tamil Nadu state administration.',
    scope: 'state',
    states: ['TN'],
    openDate: '2026-06-02',
    closeDate: '2026-07-01',
    officialUrl: 'https://tnpsc.gov.in',
    eligibility: {
      education: "Bachelor's degree from a recognised university.",
      age: '21–36 years (relaxation for reserved categories).',
      domicile: 'Tamil Nadu domicile preferred for certain posts.',
    },
  },
  {
    id: 'uptet-2026',
    name: 'UPTET 2026 (Uttar Pradesh Teacher Eligibility Test)',
    body: 'Uttar Pradesh Basic Education Board',
    category: 'Teacher',
    description:
      'State-level teacher eligibility test for primary and upper-primary teaching posts in Uttar Pradesh.',
    scope: 'state',
    states: ['UP'],
    openDate: '2026-05-26',
    closeDate: '2026-06-25',
    officialUrl: 'https://updeled.gov.in',
    eligibility: {
      education:
        'Senior Secondary (Class 12) with D.El.Ed / B.Ed / equivalent as per RTE norms.',
      age: '18–40 years (relaxation for reserved categories).',
      domicile: 'Open to all; UP domicile needed for state teacher recruitment.',
    },
  },
  {
    id: 'delhi-police-constable-2026',
    name: 'Delhi Police Constable (Executive) 2026',
    body: 'Delhi Police (via SSC)',
    category: 'Police',
    description:
      'Recruitment of male and female constables (executive) for Delhi Police.',
    scope: 'state',
    states: ['DL'],
    openDate: '2026-06-11',
    closeDate: '2026-07-10',
    officialUrl: 'https://delhipolice.gov.in',
    eligibility: {
      education: 'Class 12 (Senior Secondary) pass from a recognised board.',
      age: '18–25 years (relaxation for reserved categories).',
      domicile: 'Open to all Indian citizens.',
    },
  },
  {
    id: 'ssc-chsl-2026',
    name: 'SSC CHSL 2026 (Combined Higher Secondary Level)',
    body: 'Staff Selection Commission',
    category: 'SSC',
    description:
      'Recruitment for Lower Division Clerk, JSA and Postal/Sorting Assistant posts across central government offices.',
    scope: 'central',
    states: [],
    openDate: '2026-06-05',
    closeDate: '2026-07-05',
    officialUrl: 'https://ssc.nic.in',
    eligibility: {
      education: 'Class 12 (Senior Secondary) pass from a recognised board.',
      age: '18–27 years (relaxation for reserved categories).',
    },
  },
  {
    id: 'mpsc-state-service-2026',
    name: 'MPSC State Service 2026',
    body: 'Maharashtra Public Service Commission',
    category: 'State PCS',
    description:
      'State service examination for deputy collector, tahsildar, DSP and other gazetted posts in Maharashtra.',
    scope: 'state',
    states: ['MH'],
    openDate: '2026-05-29',
    closeDate: '2026-06-28',
    officialUrl: 'https://mpsc.gov.in',
    eligibility: {
      education: "Bachelor's degree from a recognised university.",
      age: '19–38 years (relaxation for reserved categories).',
      domicile: 'Maharashtra domicile preferred for certain posts.',
    },
  },
  {
    id: 'maharashtra-police-constable-2026',
    name: 'Maharashtra Police Constable 2026',
    body: 'Maharashtra Police Recruitment Board',
    category: 'Police',
    description:
      'Recruitment of police constables for the Maharashtra state police force.',
    scope: 'state',
    states: ['MH'],
    openDate: '2026-06-03',
    closeDate: '2026-07-02',
    officialUrl: 'https://mahapolice.gov.in',
    eligibility: {
      education: 'Class 12 (HSC) pass.',
      age: '18–28 years (relaxation for reserved categories).',
      domicile: 'Maharashtra domicile required for reservation benefits.',
    },
  },
  {
    id: 'sbi-po-2026',
    name: 'SBI PO 2026-27 (Probationary Officer)',
    body: 'State Bank of India',
    category: 'Banking',
    description:
      'Recruitment of Probationary Officers across SBI branches and offices nationwide.',
    scope: 'central',
    states: [],
    openDate: '2026-05-28',
    closeDate: '2026-06-27',
    officialUrl: 'https://sbi.co.in/careers',
    eligibility: {
      education: "Bachelor's degree in any discipline.",
      age: '21–30 years (relaxation per norms).',
    },
  },
  {
    id: 'rajasthan-police-constable-2026',
    name: 'Rajasthan Police Constable 2026',
    body: 'Rajasthan Police Recruitment Board',
    category: 'Police',
    description:
      'Recruitment of constables (general / driver / mounted) for the Rajasthan state police force.',
    scope: 'state',
    states: ['RJ'],
    openDate: '2026-05-23',
    closeDate: '2026-06-22',
    officialUrl: 'https://police.rajasthan.gov.in',
    eligibility: {
      education: 'Class 10 (Matric) pass; Class 12 for certain posts.',
      age: '18–23 years (relaxation for reserved categories).',
      domicile: 'Rajasthan domicile required for reservation benefits.',
    },
  },
  {
    id: 'kpsc-gazetted-2026',
    name: 'KPSC Gazetted Probationers 2026',
    body: 'Karnataka Public Service Commission',
    category: 'State PCS',
    description:
      'Gazetted probationers recruitment for Group A and B posts in the Karnataka state government.',
    scope: 'state',
    states: ['KA'],
    openDate: '2026-05-19',
    closeDate: '2026-06-18',
    officialUrl: 'https://kpsc.kar.nic.in',
    eligibility: {
      education: "Bachelor's degree from a recognised university.",
      age: '21–35 years (relaxation for reserved categories).',
      domicile: 'Karnataka domicile preferred for certain posts.',
    },
  },
  {
    id: 'ap-police-constable-2026',
    name: 'AP Police Constable 2026',
    body: 'Andhra Pradesh State Police Recruitment Board',
    category: 'Police',
    description:
      'Recruitment of police constables for the Andhra Pradesh state police force.',
    scope: 'state',
    states: ['AP'],
    openDate: '2026-06-09',
    closeDate: '2026-07-08',
    officialUrl: 'https://appolice.gov.in',
    eligibility: {
      education: 'Class 10 (SSC) or equivalent pass.',
      age: '18–22 years (relaxation for reserved categories).',
      domicile: 'Andhra Pradesh domicile required for reservation benefits.',
    },
  },
];

export const CATEGORIES: ExamCategory[] = [
  'UPSC',
  'State PCS',
  'SSC',
  'Police',
  'Teacher',
  'Railways',
  'Banking',
  'Other',
];
