export const profile = {
  name: "Ekramul Alam",
  title: "CSE Undergraduate & Full-Stack Developer",
  email: "ekramul.alam21@gmail.com",
  phone: "+8801752729605",
  address: "Khulna, Bangladesh",
  imgUrl: "/assets/img/DP.webp",
  resumeUrl: "/assets/img/My Resume.pdf",
  hello: "Hello! I'm Ekramul.",
  about:
    "CSE undergraduate with competitive programming experience (Max Codeforces Rating: 1257) and strong foundations in Data Structures & Algorithms, Computer Networks, and Operating Systems. Proficient in C++, Python, JavaScript, and PHP, with hands-on full-stack development across MERN and Laravel ecosystems. Skilled in RESTful API design, MongoDB, MySQL, and React/TailwindCSS frontends. Familiar with AI-integrated development using LangChain and FastAPI. Known for clean coding practices, quick adaptability, and strong problem-solving ability.",
  socials: {
    github: "https://github.com/Apn7",
    linkedin: "https://www.linkedin.com/in/ekramul-alam-525659255/",
    facebook: "https://www.facebook.com/ekram.apan.7/",
    codeforces: "https://codeforces.com/profile/Apn7",
  },
};

export const education = [
  {
    time: "Mar 2022 - Present",
    title: "B.Sc. in Computer Science and Engineering",
    details:
      "Khulna University of Engineering & Technology (KUET). CGPA: 3.36 / 4.00 (up to 7th Semester). Specialization in Data Structures, Algorithms, Operating Systems, Computer Networks, and DBMS.",
  },
];

export const experience = [
  {
    time: "Aug 2025 - Present",
    title: "Full-Stack Web Developer (Part-time)",
    details:
      "TechnoPLUS IT - Remote (Aus). Built and maintained a Laravel 9 + Vue.js LMS using Porto/Apiato modular architecture, applying OOP and design patterns (Repository, Service, Observer) across 15+ domain containers. Independently researched and implemented custom H5P interactive content integration from scratch, and designed RESTful APIs with role-based access control. Implemented relational database tables with ordered pivot tables, SoftDeletes, and JSON metadata columns to support a flexible multi-content-type lesson structure.",
  },
];

export const skills = {
  languages: {
    title: "Languages",
    icon: "Code",
    color: "var(--primary-light)",
    core: ["C", "C++", "Python", "JavaScript"],
    familiar: ["PHP", "Java"]
  },
  webDev: {
    title: "Web & Frameworks",
    icon: "Globe",
    color: "var(--primary-light)",
    core: ["React.js", "Next.js", "Node.js", "Express.js"],
    familiar: ["Laravel 10", "FastAPI"]
  },
  databases: {
    title: "Databases",
    icon: "Database",
    color: "var(--accent-light)",
    core: ["MySQL", "MongoDB", "PostgreSQL (Supabase)"],
    familiar: ["Eloquent ORM", "Mongoose"]
  },
  aiMl: {
    title: "AI / ML",
    icon: "Brain",
    color: "var(--accent-light)",
    core: ["LangChain", "Prompt Engineering"],
    familiar: ["Vector Embeddings"]
  },
  toolsDevOps: {
    title: "Tools & DevOps",
    icon: "Wrench",
    color: "#fada1b",
    core: ["Git", "Linux / Bash", "REST APIs"],
    familiar: ["CI/CD Pipelines", "Cloudinary", "JWT"]
  },
  coreCs: {
    title: "Core CS",
    icon: "Cpu",
    color: "#fada1b",
    core: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "OOP", "DBMS"],
    familiar: []
  },
  communication: {
    title: "Communication",
    icon: "MessageSquare",
    color: "var(--primary-light)",
    core: ["English (Full Professional)", "Bengali (Native)"],
    familiar: []
  }
};

export const projects = [
  {
    name: "Automated Healthcare System (MERN)",
    details:
      "Built a full-stack healthcare platform with React.js, Node.js, Express, and MongoDB featuring doctor appointment booking, pharmacy cart, blood donor search, and emergency ambulance services. Implemented JWT-based authentication with bcrypt password hashing and role-based access control with protected route middleware. Integrated Cloudinary for image storage and Nodemailer for transactional emails.",
    link: "https://github.com/Apn7",
    image: "/assets/img/healthcare_project.png",
    tech: "React.js, Node.js, Express, MongoDB, JWT, Cloudinary, Nodemailer",
  },
  {
    name: "AI-Powered Learning Platform",
    details:
      "Developed a university course assistant with AI-powered tutoring and intelligent content search using LangChain and vector embeddings. Engineered a FastAPI backend with Supabase (PostgreSQL) and row-level security, supporting real-time updates and separate portals for students and instructors.",
    link: "https://github.com/Apn7",
    image: "/assets/img/learning_platform_project.png",
    tech: "Next.js, FastAPI, LangChain, Supabase, PostgreSQL, Vector Embeddings",
  },
  {
    name: "MemeGrove - Social Media Platform",
    details:
      "Designed and built a full-featured social platform from scratch with user authentication, image upload pipeline using Intervention Image, likes, comments, following system, and real-time event-driven notifications. Implemented a custom trending algorithm combining engagement metrics with time decay, tag analytics, and infinite scroll.",
    link: "https://github.com/Apn7",
    image: "/assets/img/memegrove_project.png",
    tech: "Laravel 10, MySQL, Eloquent ORM, Intervention Image",
  },
  {
    name: "HTTP Request Prediction for Caching",
    details:
      "Simulated a multi-client HTTP caching system with a first-order Markov-based prediction engine that learns page transition probabilities and pre-caches high-confidence next pages. Built cache lifecycle management with TTL-based expiry, LRU eviction, and periodic cleanup; validated performance using OMNeT++ simulator.",
    link: "https://github.com/Apn7",
    image: "/assets/img/http_prediction_project.png",
    tech: "C++, OMNeT++, Markov Engine, Network Simulation",
  },
];

export const activities = [
  {
    title: "BUET CSE Fest 2026 Hackathon",
    role: "Finalist",
    location: "Dhaka, Bangladesh",
    time: "Jan 2026",
    details: "Competed as a finalist in one of the premier national hackathons.",
  },
  {
    title: "BITFEST 2025",
    role: "Executive Member",
    location: "Khulna, Bangladesh",
    time: "Dec 2024 - Jan 2025",
    details: "Organized and managed technical activities for KUET's national tech fest.",
  },
  {
    title: "SGIPC (Special Group of Interest in Programming Contest)",
    role: "Campaign Editor",
    location: "Khulna, Bangladesh",
    time: "Aug 2023 - Present",
    details: "Coordinated campaigns and editorial work to foster the competitive programming ecosystem at KUET.",
  },
  {
    title: "Intra KUET Programming Contest 2023",
    role: "Best Team 2k20 Award Winner",
    location: "Khulna, Bangladesh",
    time: "2024",
    details: "Awarded as the top team representing the 2020 batch at the university contest.",
  },
  {
    title: "Inter-University Programming Contests (IUPC)",
    role: "Participant",
    location: "KUET",
    time: "2025",
    details: "Represented KUET in several national inter-university programming contests.",
  },
];

// Formspree endpoint — replace with your own after signing up at https://formspree.io
export const formspreeEndpoint = "https://formspree.io/f/xeeddbrv";

