/* ============================================================
   data.js — Shared project & skill data
   Update this file to add/edit projects and skills.
   The backend can replace this with a real API fetch.
   ============================================================ */

const PROJECTS = [
  {
    id: 1,
    name: 'Clothing E-Commerce Web App',
    desc: 'A full-stack e-commerce platform for clothing retail with product catalog, shopping cart, and secure checkout. Built with Django backend and Bootstrap frontend.',
    tags: ['Django', 'Python', 'Bootstrap', 'HTML/CSS', 'PostgreSQL'],
    github: 'https://github.com/DheerajDev-leper/Clothing',
    live: null,
    featured: true,
    category: 'web',
    year: 2026,
  },
  {
    id: 2,
    name: 'Face Recognition Attendance System',
    desc: 'An intelligent attendance system using face recognition technology with LBPH algorithm for real-time student identification, automated attendance logging, and report generation.',
    tags: ['Python','Tkinter', 'LBPH algorithm' ,'MYSQL'],
    github: 'https://github.com/DheerajDev-leper/Face-attendance-system',
    live: null,
    featured: true,
    category: 'web',
    year: 2025,
  },
  {
    id: 3,
    name: 'College Library Management System',
    desc: 'Web-based library management system with book search, borrowing, and return functionality. Admin dashboard for inventory management, overdue tracking, and user analytics.',
    tags: ['Python', 'Tkinter', 'MySQL', 'CSV'],
    github: 'https://github.com/DheerajDev-leper/Library_Management_System',
    live: null,
    featured: true,
    category: 'web',
    year: 2024,
  },
  {
    id: 4,
    name: 'Movie Recommendation System',
    desc: 'An intelligent recommendation engine that suggests movies based on user preferences using NLP and machine learning algorithms for personalized movie discovery.',
    tags: ['Python', 'Streamlit', 'NLTK', 'Sklearn'],
    github: 'https://github.com/DheerajDev-leper/Movie-recommendation-system',
    live: null,
    featured: false,
    category: 'cli',
    year: 2024,
  },
  {
    id: 5,
    name: 'Expense Tracker CLI',
    desc: 'Command-line tool for managing personal expenses with features for adding, categorizing, and tracking spending. Includes CSV export and summary statistics generation.',
    tags: ['JavaScript', 'HTML/CSS', 'Responsive Design'],
    github: 'https://github.com/DheerajDev-leper/Expense-Tracker',
    live: null,
    featured: false,
    category: 'web',
    year: 2023,
  },
];

const SKILLS_DATA = {
  languages: [
    { name: 'Python',      level: 90 },
    { name: 'SQL',         level: 78 },
    { name: 'HTML/CSS',    level: 88 },
  ],
  frameworks: [
    { name: 'Django',       level: 88 },
    { name: 'React.js',     level: 30 },
    { name: 'Bootstrap',    level: 85 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'Django REST',  level: 50 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'PostgreSQL',   level: 78 },
    { name: 'MySQL',        level: 75 },
    { name: 'VS Code',      level: 95 },
    { name: 'Linux',        level: 50 },
  ],
};

const EXPERIENCE = [
  {
    role: 'B.Tech — Computer Science & Engineering',
    org: 'Ajeenkya D Y Patil University',   /* replace with actual university */
    period: '2022 – 2026',
    type: 'education',
    desc: '4th year student with focus on Software Engineering, Web Development, DBMS, OS, and Computer Networks. CGPA: 7.49/10.',
  },
  {
    role: '12th — PCM with Computer Science',
    org: 'Sant Dyaneshwar English School',
    period: '2021 – 2022',
    type: 'education',
    desc: 'First programming experience with HTML and SQL.',
  },
  {
    role: '10th Grade',
    org: 'Eon Gyanankur English School',
    period: '2019 – 2020',
    type: 'education',
    desc: 'Completed secondary education with a focus on science subjects.',
  }
];