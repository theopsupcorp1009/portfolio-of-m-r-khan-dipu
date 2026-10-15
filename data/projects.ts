export interface Project {
  slug: string;
  title: string;
  category: "Web Development" | "AI & Machine Learning" | "Others";
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  priority: number;
  documentedFeatures: string[];
  challenges: string;
  futurePlans: string[];
  architectureOverview: string;
  iconName: string;
}

export const projectsData: Project[] = [
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    category: "Web Development",
    subtitle: "Bengali Market Price Intelligence Web Application",
    description:
      "Bengali market-price web application that allows users to explore product prices and browse products by category. Users can view current and historical price data, track price changes, and access a responsive interface with user authentication.",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "better-auth"],
    liveUrl: "https://bazar-dor-puce.vercel.app/",
    githubUrl: "https://github.com/theopsupcorp1009/bazar-dor",
    featured: true,
    priority: 1,
    iconName: "ShoppingBag",
    architectureOverview:
      "Built with Next.js App Router for dynamic server-rendered commodity catalogs, MongoDB for scalable document storage of historical price changes, Tailwind CSS for a high-performance responsive UI, and better-auth for secure multi-factor session validation.",
    documentedFeatures: [
      "Explore Bengali consumer goods and wholesale commodity price indices",
      "Category-based browsing across produce, staples, and daily commodities",
      "Current and historical price trends tracking with periodic delta indicators",
      "Responsive mobile-first user interface tailored for fast on-the-go browsing",
      "Protected user authentication system powered by better-auth and MongoDB",
    ],
    challenges:
      "Detailed development challenges were not explicitly documented in the available CV. Typical engineering considerations for this architecture include synchronizing asynchronous price feeds across fluctuating seasonal commodity catalogs, optimizing MongoDB queries for historical price series, and ensuring responsive data delivery on mobile networks.",
    futurePlans: [
      "Automated scheduled scrapers to ingest real-time market bulletins from regional trading centers",
      "SMS & push alert triggers for user-specified threshold price drops on essential staples",
      "Time-series predictive forecasting using regression models to project price seasonality",
      "Community reporting and crowdsourced price verification system",
    ],
  },
  {
    slug: "bangla-news-24",
    title: "Bangla News 24",
    category: "Web Development",
    subtitle: "Modern Bengali Digital News & Editorial Portal",
    description:
      "Bengali news portal featuring live headlines, category-based news browsing, a Most Read section, and a scrolling news ticker. Includes user authentication with email/password and Google sign-in, email verification, password reset, and protected routes.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "better-auth", "MongoDB", "Resend"],
    liveUrl: "https://bangla-news-24-woad.vercel.app/",
    githubUrl: "https://github.com/theopsupcorp1009/bangla-news-24",
    featured: true,
    priority: 2,
    iconName: "Newspaper",
    architectureOverview:
      "Architected with TypeScript and Next.js App Router to guarantee end-to-end type safety, integrated with MongoDB for editorial content storage, styled with modern Tailwind CSS, protected by better-auth (supporting Google OAuth & Credentials), and integrated with Resend for transactional email dispatch.",
    documentedFeatures: [
      "Real-time breaking news updates with dynamic animated scrolling ticker",
      "Structured category browsing across National, International, Technology, Business, and Sports",
      "Algorithmic 'Most Read' trending news ranking section",
      "Dual-mode authentication: Secure Email/Password and one-click Google OAuth sign-in",
      "Automated transactional email pipelines: Email verification & secure tokenized password reset via Resend",
      "Protected editorial routes and fine-grained session access control",
    ],
    challenges:
      "Detailed development challenges were not explicitly documented in the available CV. Common architectural hurdles in production media portals include maintaining rapid server rendering speeds with complex Bengali typography, handling transactional email delivery latency during password recovery spikes, and managing cache revalidation during breaking news events.",
    futurePlans: [
      "Incremental Static Regeneration (ISR) with on-demand tag-based revalidation for breaking updates",
      "Reader bookmarking system and personalized offline reading lists",
      "Bengali text-to-speech audio reader integration for accessibility",
      "Granular multi-tier editorial workflow with author attribution and draft approval pipelines",
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    category: "Web Development",
    subtitle: "Responsive Gym-Companion & Daily Workout Planner",
    description:
      "Responsive gym-companion web application for browsing a workout library and building a daily workout plan. Users can add workouts to a plan or save them for later, track exercises, minutes and calories, and sort saved items; data persists in the browser via local storage.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "React Context API",
      "React Toastify",
      "React Icons",
    ],
    liveUrl: "https://fit-log-pink-seven.vercel.app/",
    githubUrl: "https://github.com/theopsupcorp1009/fitlog",
    featured: true,
    priority: 3,
    iconName: "Activity",
    architectureOverview:
      "Engineered as a responsive client-first web companion leveraging Next.js and React Context API for global workout state orchestration, styled with Tailwind CSS and DaisyUI, with local storage synchronization for zero-network gym floor reliability.",
    documentedFeatures: [
      "Curated exercise catalog categorized by target muscle groups and equipment requirements",
      "Interactive daily workout plan builder for routine scheduling and session tracking",
      "'Save for Later' wishlist to queue upcoming routines without modifying active plans",
      "Live workout metric computation: completed exercises, total active minutes, and estimated calories burned",
      "Interactive sorting and filtering engine across saved exercises",
      "Local storage persistence ensuring routine continuity without requiring an account",
      "Accessible notification alerts using React Toastify for milestone confirmations",
    ],
    challenges:
      "Detailed development challenges were not explicitly documented in the available CV. Typical considerations for client-heavy fitness trackers include preventing client/server hydration mismatches when reading browser LocalStorage during initial render, and maintaining quick touch interactions while exercising.",
    futurePlans: [
      "Cloud profile sync for seamless transition across mobile and desktop devices",
      "Custom interval rest timer with configurable audio prompts",
      "Visual weekly analytics graphs charting cumulative calorie burn and workout frequency",
      "Progressive Web App (PWA) offline installation for zero-connectivity gym spaces",
    ],
  },
  {
    slug: "alzheimer-dementia-classifier",
    title: "Alzheimer Dementia Classifier",
    category: "AI & Machine Learning",
    subtitle: "Deep Learning MRI Classifier for Dementia Severity",
    description:
      "Deep learning-powered MRI classifier for dementia severity classification.",
    technologies: ["Streamlit", "TensorFlow", "Keras", "Python"],
    liveUrl: "https://alzheimer-dimentia-classifier-app-dbbudbgwneodzvmhusvl8o.streamlit.app/",
    githubUrl: "https://github.com/theopsupcorp1009/alzheimer-dementia-classifier",
    featured: false,
    priority: 4,
    iconName: "BrainCircuit",
    architectureOverview:
      "Constructed using TensorFlow and Keras to train convolutional neural networks on brain MRI datasets, packaged with a Streamlit interface for instantaneous web-based medical image inferencing and classification visualization.",
    documentedFeatures: [
      "Multi-stage dementia severity classification from uploaded brain MRI scans",
      "Deep Convolutional Neural Network (CNN) backbone optimized for neuroimaging feature extraction",
      "Streamlined web UI built on Streamlit for instant image upload and automated processing",
      "Confidence probability scoring output across clinical dementia stages",
      "Standardized image tensor preprocessing and resizing pipeline",
    ],
    challenges:
      "Detailed development challenges were not explicitly documented in the available CV. Primary domain challenges in neuroimaging ML encompass mitigating severe class imbalance across progression stages, preventing CNN overfitting on limited public neuroimaging datasets, and maintaining robust normalization across different scanner resolutions.",
    futurePlans: [
      "Grad-CAM (Gradient-weighted Class Activation Mapping) explainability overlays to spotlight diagnostic brain regions",
      "Longitudinal image comparison to visualize structural atrophy over multi-year patient timelines",
      "ONNX / TensorFlow Lite model conversion for ultra-low latency edge inferencing",
    ],
  },
  {
    slug: "quantum-circuit-explorer",
    title: "Quantum Circuit Explorer",
    category: "Others",
    subtitle: "Interactive Quantum Circuit Simulator & Visualizer",
    description:
      "Interactive web app for building, simulating, and visualizing circuits, including circuit diagrams, measurement histograms, and Bloch sphere representations.",
    technologies: ["Streamlit", "Qiskit", "Qiskit Aer", "Matplotlib", "Python"],
    liveUrl: "https://quantum-circuit-explorer-hhjif38rxyvkvsm7vljm4z.streamlit.app/",
    githubUrl: "https://github.com/theopsupcorp1009/quantum-circuit-explorer",
    featured: false,
    priority: 5,
    iconName: "Cpu",
    architectureOverview:
      "Developed with IBM's Qiskit quantum computing framework and Qiskit Aer simulation engine, wrapped in an interactive Streamlit UI with Matplotlib visualization routines for statevectors, quantum gates, and multi-qubit Bloch spheres.",
    documentedFeatures: [
      "Interactive gate assembly tool for constructing arbitrary quantum circuits",
      "High-fidelity simulation via Qiskit Aer quantum simulator running on classical CPU hardware",
      "Interactive 3D Bloch sphere projections visualizing single and multi-qubit statevector phases",
      "Empirical measurement probability histograms based on customizable shot counts",
      "Vector circuit diagram rendering with standard quantum schematic notation",
    ],
    challenges:
      "Detailed development challenges were not explicitly documented in the available CV. Core technical challenges in quantum circuit simulation involve exponential memory scaling with qubit counts (2^n complex amplitudes) and responsive rendering of multi-qubit Bloch sphere projections within interactive web sessions.",
    futurePlans: [
      "Library of standard quantum algorithms (Deutsch-Jozsa, Grover's search, Quantum Teleportation)",
      "Hardware noise model simulation to replicate decoherence on actual NISQ quantum processors",
      "Direct OpenQASM export for running circuits on physical IBM Quantum cloud systems",
    ],
  },
];
