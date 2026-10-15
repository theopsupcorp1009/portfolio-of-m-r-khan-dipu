export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export interface PersonalInfo {
  name: string;
  shortName: string;
  monogram: string;
  headlineTitle: string;
  mainHeadline: string;
  supportingText: string;
  location: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  githubPersonalUrl: string;
  githubOrgUrl: string;
  resumePdfPath: string;
  summary: string;
}

export const personalInfo: PersonalInfo = {
  name: "M R KHAN DIPU",
  shortName: "M R Khan Dipu",
  monogram: "MRK DIPU",
  headlineTitle: "FULL-STACK WEB DEVELOPER | SOFTWARE ENGINEERING GRADUATE",
  mainHeadline: "BUILDING DIGITAL EXPERIENCES. ENGINEERING INTELLIGENT SOLUTIONS.",
  supportingText:
    "Software Engineering graduate with a background in web development, data science, and biomedical AI research.",
  location: "Dhaka, Bangladesh",
  email: "mrkhan.ds.swe@gmail.com",
  phone: "+8801540320884",
  linkedInUrl: "https://www.linkedin.com/in/mrkhandipu/",
  githubPersonalUrl: "https://github.com/mrkhan393",
  githubOrgUrl: "https://github.com/theopsupcorp1009?tab=repositories",
  resumePdfPath: "/resume/CV_of_M_R_Khan_Dipu.pdf",
  summary:
    "Software Engineering graduate with completed BSc and MSc degrees in Data Science, with experience across research, administration, and web development. Interested in research opportunities to continue developing expertise in AI and machine learning, administrative and executive roles to strengthen interpersonal and professional skills, and web development to build applications that integrate machine learning models. Open to research, administrative, executive, and developer opportunities.",
};

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "employment" | "research";
  isCurrent: boolean;
  period: string;
  description?: string;
  notes?: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "dr-academy",
    role: "Executive, Academic Management",
    organization: "The DrAcademy",
    type: "employment",
    isCurrent: false,
    period: "08/2025 - 06/2026",
    description: "Medical coaching center for UK Royal College courses, PLAB, and OET.",
    notes: "Role concluded due to company budget cuts.",
    responsibilities: [
      "Focused primarily on digital marketing: wrote SEO-friendly advertising copy for Google and Facebook campaigns, YouTube content, and website blog posts.",
      "Applied basic SEO practices, including meta descriptions, heading structuring, avoiding repeated H1 headings, image alt text, and content ideation.",
      "Managed student relationships and mentor communication.",
      "Oversaw eLearning management, class management, and study materials preparation.",
      "Supported HR and administration functions.",
    ],
  },
  {
    id: "bio-photomatix",
    role: "ML/AI Researcher (Independent, Unpaid, Remote)",
    organization: "Group of Bio-Photomatix",
    type: "research",
    isCurrent: false,
    period: "02/2024 - 07/2026",
    description: "Independent research work conducted remotely alongside professional employment.",
    notes: "Independent, unpaid, remote research experience clearly distinguished from commercial employment.",
    responsibilities: [
      "Performed brain signal processing, image data processing, and feature extraction for biomedical research.",
      "Carried out medical data modeling and parameter tuning for machine learning models.",
      "Contributed to manuscript writing for research publications.",
    ],
  },
  {
    id: "udvash",
    role: "Batch Coordinator, Q&A",
    organization: "Udvash",
    type: "employment",
    isCurrent: false,
    period: "10/2023 - 01/2024",
    responsibilities: [
      "Monitored teacher interaction with students and assured quality of teacher responses.",
      "Administered teachers and prepared payment schemes for teaching staff.",
      "Conducted teacher training and teacher recruitment.",
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  thesisGpa: string;
  thesisTitle: string;
}

export const educationList: EducationItem[] = [
  {
    degree: "MSc in Software Engineering, Major in Data Science",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2023 - 2025",
    cgpa: "3.68 / 4.00",
    thesisGpa: "4.00",
    thesisTitle:
      "Major Depressive Disorder Diagnostics: Early Detection Through Advanced Deep Learning Analysis of Physiological Signal",
  },
  {
    degree: "BSc in Software Engineering, Major in Data Science",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2019 - 2023",
    cgpa: "3.65 / 4.00",
    thesisGpa: "3.75",
    thesisTitle:
      "Research on Psychological Impact for Excessive Using of Smart Device with Respect to Social Media Addiction Using Artificial Neural Network",
  },
];

export interface PublicationItem {
  title: string;
  venue: string;
  dateOrYear: string;
  scope: string;
}

export const publications: PublicationItem[] = [
  {
    title:
      "Lightweight 1D Convolutional Neural Network Architecture for Detecting Epileptic Seizures",
    venue:
      "4th International Conference on Intelligent Cyber Physical Systems and Internet of Things (ICoICI 2026)",
    dateOrYear: "1-3 September 2026",
    scope:
      "1D Convolutional Neural Network design applied to physiological EEG signals for computationally lightweight, high-accuracy epileptic seizure detection.",
  },
  {
    title:
      "Gastrointestinal Health: A Convolutional Neural Network Approach for Gastrointestinal Disorders Prediction for Disease Diagnosis",
    venue:
      "16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT)",
    dateOrYear: "2025",
    scope:
      "Deep convolutional neural network architecture for automated feature extraction and gastrointestinal disorder classification from biomedical endoscopic imaging.",
  },
];

export const researchAreas: string[] = [
  "Biomedical Signal Processing",
  "EEG Signal Processing",
  "Machine Learning",
  "Deep Learning",
  "Medical Data Modeling",
  "Healthcare AI",
];

export interface SkillCategory {
  title: string;
  categoryKey: "web" | "ai" | "tools" | "professional";
  isPrimary?: boolean;
  skills: { name: string; iconKey?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    categoryKey: "web",
    isPrimary: true,
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
    ],
  },
  {
    title: "Data Science & Machine Learning",
    categoryKey: "ai",
    skills: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Natural Language Processing" },
      { name: "EEG Signal Processing" },
    ],
  },
  {
    title: "Tools & Platforms",
    categoryKey: "tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Canva" },
      { name: "Microsoft Office" },
    ],
  },
  {
    title: "Professional & Soft Skills",
    categoryKey: "professional",
    skills: [
      { name: "Leadership" },
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Problem-solving" },
      { name: "Administration & Management" },
    ],
  },
];

export interface CertificationItem {
  title: string;
  issuer: string;
  skillsCovered: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Analytics Decision Making",
    issuer: "HRDI, DIU",
    skillsCovered: "Data Analysis, Visualization, Modeling",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    skillsCovered: "HTML, JavaScript, Bootstrap",
  },
  {
    title: "Office Application Course",
    issuer: "IT Solution",
    skillsCovered: "Microsoft Word, Excel, PowerPoint, Outlook, Access",
  },
];

export const relevantCoursework: string[] = [
  "Machine Learning Driven Data Analysis",
  "Statistical Data Analysis",
  "Data Science Major Capstone Project",
  "Applied Machine Learning",
  "Research Design and Applications for Data and Analysis",
  "Data Visualization and Communication",
  "Artificial Intelligence",
  "Object Oriented Design and Concepts",
  "Software Project Management",
];

export const extracurricularActivities: { text: string; year?: string }[] = [
  {
    text: "Participated in the 3MT Thesis Competition at the National Data Science & AI Startup Bootcamp 2024, DIU",
    year: "2024",
  },
  {
    text: "Attended the Workshop on Data Science and Applied Machine Learning at DIU",
    year: "2024",
  },
  {
    text: "Member of the Data Science Club, Daffodil International University",
  },
  {
    text: "Represented DIU at Teknofest-2022 Online through International Affairs",
    year: "2022",
  },
  {
    text: "Worked with Daffodil Prothom Alo Bondhushova and performed as a 'Nut Seller' in Choruivati",
    year: "2021",
  },
  {
    text: "Volunteered with the DIU Voluntary Service Club, including admission-test support",
    year: "2021",
  },
  {
    text: "Assisted in decorating and performing at the Freshers Reception Program",
    year: "2019",
  },
  {
    text: "Worked with the Daffodil Photography Club, exploring creative photography projects.",
  },
];

export const awards: { title: string; detail: string; year: string }[] = [
  {
    title: "Merit Award (2013)",
    detail: "For meritorious result in the Junior School Certificate Examination 2013",
    year: "2013",
  },
];

export interface ReferenceItem {
  name: string;
  role: string;
  institution: string;
  email: string;
  phone: string;
}

export const academicReferences: ReferenceItem[] = [
  {
    name: "Imran Mahmud",
    role: "Associate Professor and Head, Department of Software Engineering",
    institution: "Daffodil International University, Birulia, Savar, Dhaka, Bangladesh",
    email: "imranmahmud@daffodilvarsity.edu.bd",
    phone: "+8801711370502",
  },
  {
    name: "Afsana Begum",
    role: "Assistant Professor, Department of Software Engineering",
    institution: "Daffodil International University, Birulia, Savar, Dhaka, Bangladesh",
    email: "afsana.swe@diu.edu.bd",
    phone: "+8801717545414",
  },
];
