export const profile = {
  name: 'Lokeshwari Anamalamudi',
  role: 'AI / Data Engineer & Data Analyst',
  tagline:
    'Clean pipelines. Smart analytics. Intelligent AI. That is my formula for impact.',
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
  'Git',
  'Linux/Unix',
  'Jupyter Notebook',
  'PyTorch',
  'TensorFlow',
  'Scikit-learn',
  'XGBoost',
  'OpenCV',
  'Pandas',
  'NumPy',
  'Large Language Models',
  'Small Language Models',
  'Fine-Tuning',
  'RAG',
  'Prompt Engineering',
  'Agentic Workflows',
  'LangChain',
  'Vector Databases',
  'OpenAI API',
  'Hugging Face',
  'Power BI',
  'Data Cleaning',
  'Feature Engineering',
  'Statistical Analysis',
  'Model Evaluation',
  'Explainable AI',
  'FastAPI',
  'Streamlit',
  'NLP',
  'Deep Learning',
  'Model Optimization',
  'Production ML Systems',
  'Data Pipelines',
  'Business Problem Solving',
]

export const stats = [
  { label: 'Training samples processed', value: '200K+' },
  { label: 'Professional roles', value: '3' },
  { label: 'Research publications', value: '2' },
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
    period: '2024 - 2026',
    detail:
      'GPA 3.74 - Data Science, Big Data, Machine Learning, Visual Perception, Database Theory',
  },
  {
    school: 'SRM University, India',
    degree: 'B.Tech Computer Science & Engineering',
    period: '2020 - 2024',
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
    accent: false,
  },
  {
    title: 'Prism - AI Email Triage Agent',
    time: 'Personal Project',
    summary:
      'AI-powered email intelligence agent that uses LLMs to automatically categorize, prioritize, and draft responses to emails with persistent sender memory.',
    tags: ['Python', 'LangChain', 'Claude API', 'Streamlit', 'SQLite'],
    metrics: [
      { label: 'Emails Processed', value: '77+' },
      { label: 'Accuracy', value: '87%' },
      { label: 'Tech Stack', value: '5 tools' },
    ],
    accent: false,
  },
  {
    title: 'Personal Finance Analyzer',
    time: 'Data Analytics Project',
    summary:
      'Developed a privacy-focused Personal Finance Analyzer supporting 3 bank-statement formats (CSV, Excel, PDF) using Python, Pandas, and PDFPlumber, with automated transaction cleaning and rule-based categorization across 8 spending categories. Built an interactive Tableau financial dashboard to visualize category-wise spending, total transaction amounts, and income-vs-expense breakdowns, enabling users to quickly identify spending patterns while keeping financial data locally processed.',
    tags: ['Python', 'Pandas', 'PDFPlumber', 'Tableau', 'Data Analytics'],
    metrics: [
      { label: 'Statement Formats', value: '3' },
      { label: 'Spending Categories', value: '8' },
      { label: 'Dashboard', value: 'Tableau' },
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
    role: 'Generative AI and Data Engineer',
    company: 'SDSU Research Foundation | San Diego, USA',
    period: '01/2025 - 05/2026',
    description:
      'Engineered data pipelines transforming 50K+ archival documents into training data using semantic chunking and entity linking, generating 200K+ QA pairs and improving model accuracy from 68% to 91%. Implemented an automated quality validation framework across 200K samples, reducing manual review from 40 to 8 hours per week while maintaining zero critical data errors. Structured grounded RAG training data for Llama 2 and GPT models, reducing hallucinated responses from 89% to 11%. Versioned training data with DVC, managed checkpoints through MLflow Model Registry, and built CloudWatch monitoring with automated retraining when validation accuracy dropped below 88%.',
    tags: [
      'Python',
      'Generative AI',
      'LLMs',
      'RAG',
      'Llama 2',
      'GPT',
      'DVC',
      'MLflow',
      'AWS CloudWatch',
      'Data Pipelines',
    ],
  },
  {
    role: 'AI and Data Systems Engineer',
    company: 'Medha Constructions | Bengaluru, India',
    period: '06/2023 - 06/2024',
    description:
      'Developed an AI extraction system processing 1,200+ construction documents through prompt engineering, achieving 91% precision and 94% recall on 200 manually labeled documents compared with a 62% baseline accuracy. Designed a data quality pipeline standardizing 12 key project attributes and reduced errors from 245 to 27 per 100 documents. Integrated AI-extracted features into an ML cost predictor, improving MAPE from 20.2% to 13.4%. Deployed the system to AWS SageMaker with CloudWatch monitoring and automated rollback when MAPE exceeded 15%, reducing quotation time from 6 to 2 hours.',
    tags: [
      'Python',
      'Prompt Engineering',
      'AI Extraction',
      'Data Quality',
      'Machine Learning',
      'AWS SageMaker',
      'AWS CloudWatch',
      'Model Monitoring',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'SRM University | Vijayawada, India',
    period: '05/2022 - 05/2023',
    description:
      'Constructed a video surveillance system using PyTorch and OpenCV to process 500K+ video frames and identify abnormal behavior, achieving 87% detection accuracy and automatically flagging 89% of security incidents. Applied ImageNet transfer learning to maintain less than 5% accuracy variance across 10 CCTV locations with varying camera angles and lighting conditions. Engineered temporal risk forecasting models that improved prediction accuracy from a 62% baseline to 87%, helping identify three high-risk zones for additional camera coverage.',
    tags: [
      'Python',
      'PyTorch',
      'OpenCV',
      'Computer Vision',
      'Transfer Learning',
      'ImageNet',
      'Video Analytics',
      'Temporal Modeling',
    ],
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
    title:
      'Enhancing Agricultural Decision-Making Through ML-Based Crop Yield Predictions',
    venue:
      'Machine learning on multi-variable agricultural datasets - 98% R2',
    year: '2024',
    authors:
      'Feature engineering, statistical analysis & predictive modeling for data-driven planning.',
    link:
      'https://www.researchgate.net/publication/375278720_Enhancing_Agricultural_Decision-Making_Through_Machine_Learning-Based_Crop_Yield_Predictions',
  },
  {
    title: 'Hybrid Deep Learning Approach for Fake News Detection',
    venue: 'NLP-based deep learning pipelines for misinformation detection',
    year: '2024',
    authors:
      'Data preprocessing, feature extraction & classification to improve detection reliability.',
    link: 'https://ieeexplore.ieee.org/document/10402146',
  },
]