export const profile = {
  name: 'Lokeshwari Anamalamudi',
  role: 'AI / Data Engineer & Data Analyst',
  tagline: 'Clean pipelines. Smart analytics. Intelligent AI. That\'s my formula for impact.',
  location: 'San Diego, CA',
  email: 'lokeshwari1100@gmail.com',
  phone: '+1 (657) 966-1350',
  socials: {
    github: 'https://github.com/LokeshwariAnamalamudi',
    linkedin: 'https://linkedin.com/in/lokeshwari-anamalamudi',
    twitter: 'https://x.com',
  },
}

export const skills = [
  'Python',
  'R',
  'SQL',
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'XGBoost',
  'PyTorch',
  'TensorFlow',
  'OpenCV',
  'LangChain',
  'Hugging Face',
  'FastAPI',
  'Streamlit',
  'PostgreSQL',
  'MySQL',
  'Snowflake',
  'SQLite',
  'ETL Pipelines',
  'RAG',
  'LLMs',
  'Git',
  'Linux/Unix',
]

export const stats = [
  { label: 'Dataset quality gain', value: '+23%' },
  { label: 'Crop yield R²', value: '98%' },
  { label: 'Digit model accuracy', value: '98.2%' },
  { label: 'Graduate GPA', value: '3.74' },
]

export type EducationItem = {
  school: string
  degree: string
  period: string
  detail: string
}

export const education: EducationItem[] = [
  {
    school: 'San Diego State University',
    degree: 'M.S. Computer Science',
    period: '2024 — 2026',
    detail: 'GPA 3.74 · Data Science, Big Data, Machine Learning, Visual Perception, Database Theory',
  },
  {
    school: 'SRM University, India',
    degree: 'B.Tech Computer Science & Engineering',
    period: '2020 — 2024',
    detail: 'GPA 9.0 / 10.0',
  },
]

export type Project = {
  title: string
  time: string
  summary: string
  tags: string[]
  metrics: { label: string; value: string }[]
  accent?: boolean
}

export const projects: Project[] = [
  {
    title: 'Handwritten Digit Classification',
    time: 'Research Project',
    summary:
      'Processed and normalized large-scale image datasets in Python, implemented feature extraction, and evaluated multiple machine learning classifiers. An MLP built with Scikit-learn delivered the strongest results.',
    tags: ['Python', 'Scikit-learn', 'MLP', 'Feature Extraction'],
    metrics: [
      { label: 'Accuracy', value: '98.2%' },
      { label: 'Classifiers', value: 'multiple' },
      { label: 'Best model', value: 'MLP' },
    ],
    accent: true,
  },
  {
    title: 'Deepfake Video Detection',
    time: 'Research Project',
    summary:
      'Developed a computer vision pipeline for deepfake detection involving frame extraction, data augmentation, and temporal video processing. Improved detection reliability through false-positive analysis and model optimization.',
    tags: ['Computer Vision', 'Video Processing', 'Data Augmentation'],
    metrics: [
      { label: 'Reliability', value: '+12%' },
      { label: 'Focus', value: 'temporal' },
      { label: 'Tuning', value: 'FP analysis' },
    ],
  },
  {
  title: 'Prism - AI Email Triage Agent',
  time: 'Personal Project',
  summary: 'AI-powered email intelligence agent that uses LLMs to automatically categorize, prioritize, and draft responses to emails with persistent sender memory.',
  tags: ['Python', 'LangChain', 'Claude API', 'Streamlit', 'SQLite'],
  metrics: [
    { label: 'Emails Processed', value: '77+' },
    { label: 'Accuracy', value: '87%' },
    { label: 'Tech Stack', value: '5 tools' },
  ],
  accent: false,
},
{
  title: 'Video Surveillance and Tracking System',
  time: 'Research Project',
  summary: 'Computer vision pipeline for real-time object detection and tracking using deep learning models with frame-by-frame analysis and multi-object tracking.',
  tags: ['Python', 'Computer Vision', 'Deep Learning', 'OpenCV', 'YOLO'],
  metrics: [
    { label: 'Detection Rate', value: '95%' },
    { label: 'FPS', value: '30+' },
    { label: 'Objects Tracked', value: 'Multi' },
  ],
  accent: false,
},
]

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: 'Graduate Teaching Assistant — Java Programming',
    company: 'San Diego State University',
    period: '2025 — 2026',
    description:
      'Analyzed multi-semester performance data across 72+ students with statistical methods to spot learning gaps and at-risk individuals, then ran data-driven peer-support interventions that cut assessment failure rates by ~17%.',
    tags: ['Statistical Analysis', 'Python', 'Teaching'],
  },
  {
    role: 'Data Research Assistant',
    company: 'SDSU Research Foundation',
    period: '2025',
    description:
      'Built automated ETL pipelines for validation, segmentation, and corpus preparation of large archival text datasets — improving dataset quality by ~23% — and applied NLP standardization to support LLM fine-tuning and retrieval.',
    tags: ['ETL', 'NLP', 'Data Wrangling'],
  },
  {
    role: 'Research Intern',
    company: 'SRM University, India',
    period: '2024',
    description:
      'Built an end-to-end Python data pipeline for image preprocessing and feature extraction, applied OpenCV for real-time capture, and designed a SQLite database with an interactive dashboard for live monitoring.',
    tags: ['OpenCV', 'Python', 'EDA'],
  },
]

export type Publication = {
  title: string
  venue: string
  year: string
  authors: string
  link: string
}

export const publications: Publication[] = [
  {
    title: 'Enhancing Agricultural Decision-Making Through ML-Based Crop Yield Predictions',
    venue: 'Machine learning on multi-variable agricultural datasets · 98% R2',
    year: '2024',
    authors: 'Feature engineering, statistical analysis & predictive modeling for data-driven planning.',
    link: 'https://www.researchgate.net/publication/375278720_Enhancing_Agricultural_Decision-Making_Through_Machine_Learning-Based_Crop_Yield_Predictions'
  },
  {
    title: 'Hybrid Deep Learning Approach for Fake News Detection',
    venue: 'NLP-based deep learning pipelines for misinformation detection',
    year: '2024',
    authors: 'Data preprocessing, feature extraction & classification to improve detection reliability.',
    link:  'https://ieeexplore.ieee.org/document/10402146'
  },
]