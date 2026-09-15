import profileImg from './hardik_img.jpeg'

import {
  FaReact, FaNodeJs, FaDatabase, FaCode, FaMobileAlt,
  FaServer, FaGraduationCap, FaTrophy, FaLaptopCode, FaBriefcase,
  FaRobot, FaChartBar, FaPalette
} from 'react-icons/fa'
import { SiJavascript, SiPython, SiCplusplus, SiTailwindcss } from 'react-icons/si'

// ─── ASSETS ─────────────────────────────────────────────
export const assets = {
  profile: profileImg,
}

// ─── ABOUT INFO CARDS ────────────────────────────────────
export const aboutInfo = [
  {
    icon: FaGraduationCap,
    title: 'Dual Degree Track',
    description: 'B.Tech CSE at WIT Solapur (\'28) & BS Data Science at IIT Madras (\'29)',
  },
  {
    icon: FaBriefcase,
    title: 'Industry Experience',
    description: 'Internship Trainee at YHills working on ML data handling & model training',
  },
  {
    icon: FaPalette,
    title: 'Design & Media',
    description: 'Active lead for Design and Media at Computer Society of India (CSI)',
  },
  {
    icon: FaTrophy,
    title: 'Societies & Leadership',
    description: 'Member at The Sportify (IIT Madras) & SAHITYIKA Literary Society',
  },
]

// ─── SKILLS ──────────────────────────────────────────────
export const skills = [
  {
    icon: FaRobot,
    title: 'Data Science & Machine Learning',
    description: 'Data handling, preprocessing, model training, evaluation and insights.',
    tags: ['Python', 'Machine Learning', 'Model Training', 'Data Handling', 'Pandas', 'NumPy'],
  },
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Building clean, structured, and responsive web pages.',
    tags: ['HTML', 'CSS'],
  },
  {
    icon: SiPython,
    title: 'Programming Languages',
    description: 'Strong foundation in core programming and problem solving.',
    tags: ['Python', 'OOPs', 'Java', 'Basics of C'],
  },
  {
    icon: FaDatabase,
    title: 'Databases',
    description: 'Relational database management, querying and data modeling.',
    tags: ['SQL'],
  },
  {
    icon: FaPalette,
    title: 'Design & Creative Media',
    description: 'Visual communication, creative graphics, and digital media production.',
    tags: ['UI/UX Design', 'Graphic Design', 'Media Management', 'Figma'],
  },
  {
    icon: FaServer,
    title: 'Tools & Version Control',
    description: 'Productivity workflows, collaboration tools, and source control.',
    tags: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Vercel'],
  },
]

// ─── PROJECTS ────────────────────────────────────────────
export const projects = [
  {
    title: 'Fake News Detector',
    description: 'An AI/ML application developed to detect and classify fake news, rumors, and misleading information from articles and headlines.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Scikit-Learn'],
    code: 'https://github.com/465645/Fake-news-detector',
  },
  {
    title: 'INTACH Solapur Heritage',
    description: 'A responsive website developed with my team for an NGO to promote cultural heritage and spread awareness about historical monuments and heritage in Solapur.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    code: 'https://github.com/Amityaduvanshi203/-Intach-Solapur-heritage',
  },
  {
    title: 'Joomla CMS (Open Source Contribution)',
    description: 'Contributed to the open-source Joomla CMS project led by the Joomla community, solving bugs and applying patches to the codebase.',
    tech: ['PHP', 'Open Source', 'Bug Fixing', 'Git', 'CMS'],
    code: 'https://github.com/465645/joomla-cms',
  },
  {
    title: 'Sentiment Analyzer',
    description: 'An NLP-based application used to analyze and determine sentiment from sentences, paragraphs, and various types of text files.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Text Processing'],
    code: 'https://github.com/Justaanand50/sentiment-analyzer',
  },
  {
    title: 'Hardik Portfolio',
    description: 'A responsive personal portfolio website showcasing my technical skills, projects, experience, education, and professional journey.',
    tech: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
    code: 'https://github.com/465645',
  },
]

// ─── WORK EXPERIENCE & SOCIETIES ─────────────────────────
export const workData = [
  {
    role: 'Society Member',
    company: 'The Sportify: IIT Madras BS Degree Sports Society',
    duration: 'November 2025 - Present',
    description: 'Active society member contributing to sports event organization, tournament management, and building vibrant peer engagement within the IIT Madras BS student community.',
  },
  {
    role: 'Society Member',
    company: 'SAHITYIKA - The Literary Society',
    duration: 'November 2025 - Present',
    description: 'Engaged in creative writing, editorial curation, debates, and literary activities celebrating literature, expression, and cultural initiatives.',
  },
  {
    role: 'Design and Media',
    company: 'Computer Society of India (CSI)',
    duration: 'March 2026 - Present',
    description: 'Leading design and media initiatives, creating visual content, event posters, and managing promotional campaigns for technical events and student workshops.',
  },
  {
    role: 'Internship Trainee',
    company: 'YHills',
    duration: 'January 2025 - March 2025',
    description: 'Worked on data handling, preprocessing datasets, and model training. Developed and evaluated machine learning algorithms to solve real-world data challenges.',
  },
]
