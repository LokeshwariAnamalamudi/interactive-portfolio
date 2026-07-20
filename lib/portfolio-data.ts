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
    period: '2024 – 2026',
    detail: 'GPA 3.74 · Data Science, Big Data, Machine Learning, Visual Perception, Database Theory',
  },
  {
    school: 'SRM University, India',
    degree: 'B.Tech Computer Science & Engineering',
    period: '2020 – 2024',
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
    role: 'Data Research Assistant',
    company: 'SDSU Research Foundation',
    period: '01/2025 – 05/2026',
    description:
      'Built production LLM fine-tuning pipeline ingesting 50K+ archival records with semantic chunking, entity linking, and RAG format; systematically eliminated hallucinations through rigorous data curation achieving 23% quality improvement. Delivered 200K+ production-ready QA pairs for Llama 2/GPT fine-tuning via multi-stage validation pipeline ensuring format consistency, semantic coherence, and factual completeness. Contributing to peer-reviewed GenAI research under PhD advisor mentorship.',
    tags: ['ETL', 'NLP', 'LLMs', 'RAG', 'Data Curation'],
  },
  {
    role: 'ML Engineer / Data Analyst',
    company: 'CVS Pharmacy Healthcare',
    period: '06/2023 – 07/2024',
    description:
      'Supported end-to-end ML infrastructure (AWS Glue, Apache Spark/EMR, SageMaker) processing 500M+ daily pharmacy transactions. Conducted SQL-based exploratory analysis discovering medication complexity increases dropout risk 3.2x. Assisted developing XGBoost classifier (0.87 AUC) via Bayesian-optimized experiments; evaluated using precision 0.76, recall 0.72, F1 0.74. Participated deploying real-time inference system (<200ms latency, 100K predictions/day) with CloudWatch drift monitoring, contributing to 70% cost reduction ($50K → $15K/month). Supported A/B testing (500K patients, 90 days) proving 8% adherence improvement (p<0.001) validated with $194M projected ROI.',
    tags: ['AWS', 'ML Infrastructure', 'XGBoost', 'SQL', 'A/B Testing', 'SageMaker', 'Apache Spark'],
  },
  {
    role: 'Research Intern',
    company: 'SRM University, India',
    period: '05/2022 – 05/2023',
    description:
      'Conducted SQL-based exploratory analysis on 500K+ student records using time-series aggregations, cohort analysis, outlier detection; identified 40% irregular attendance creating retention risk. Implemented PyTorch CNN + OpenCV pipeline with transfer learning and data augmentation classifying 500K+ photos real-time; achieved 95% automation of manual classification. Architected temporal prediction system with rigorous evaluation (cross-validation, confusion matrices, calibration); built validation checkpoints ensuring zero data loss and established data governance framework.',
    tags: ['Python', 'OpenCV', 'PyTorch', 'SQL', 'EDA', 'Data Governance'],
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
    venue: 'Machine learning on multi-variable agricultural datasets · 98% R²',
    year: '2024',
    authors: 'Feature engineering, statistical analysis & predictive modeling for data-driven planning.',
    link: 'https://www.researchgate.net/publication/375278720_Enhancing_Agricultural_Decision-Making_Through_Machine_Learning-Based_Crop_Yield_Predictions'
  },
  {
    title: 'Hybrid Deep Learning Approach for Fake News Detection',
    venue: 'NLP-based deep learning pipelines for misinformation detection',
    year: '2024',
    authors: 'Data preprocessing, feature extraction & classification to improve detection reliability.',
    link: 'https://ieeexplore.ieee.org/document/10402146'
  },
]s