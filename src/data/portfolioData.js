

export const portfolioData = {
  personal: {
    name: "Deepak Kumar",
    role: "Full Stack Developer",
    location: "Hoshiarpur, Punjab",
    email: "deepthakur10404@gmail.com",
    phone: "+91-7009657233",
    linkedin: "www.linkedin.com/in/deepak-kumar-0856542b7",
    github: "github.com/DeepakKumar00000",

    summary:
      "Full Stack Developer with 1.5+ years of experience designing and developing scalable web applications using React.js, Node.js, Express.js, TypeScript, and MySQL. Proficient in building RESTful APIs, real-time applications with Socket.io, AI-integrated solutions using Google Gemini and OpenAI, secure authentication (JWT/RBAC), and cloud-deployed applications on AWS. Passionate about building high-performance, user-centric enterprise and SaaS applications.",
  },

  skills: {
    languages: [
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
    ],

    frontend: [
      "React.js",
      "Vite",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Zustand",
      "Redux Persist",
      "Framer Motion",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Socket.io",
      "JWT Authentication",
      "Multer",
      "Bcrypt",
      "Nodemailer",
      "Node-cron",
    ],

    database: [
      "MySQL",
      "MongoDB",
    ],

    cloudAndAI: [
      "Google Gemini API",
      "OpenAI API",
      "Firebase Cloud Messaging (FCM)",
      "AWS EC2",
    ],

    toolsAndPlatforms: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "PM2",
    ],

    concepts: [
      "Authentication",
      "Role-Based Access Control (RBAC)",
      "API Integration",
      "Real-time Applications",
      "WebSockets",
      "Progressive Web Apps (PWA)",
      "Responsive Web Design",
      "MVC Architecture",
    ],
  },

  experience: [
    {
      company: "Visiontrek Communication Pvt. Ltd.",
      role: "Full Stack Developer",
      duration: "Apr 2025 – Present",
      location: "Mohali, Punjab",

      responsibilities: [
        "Developed scalable full-stack web applications using React.js, Node.js, Express.js, TypeScript, and MySQL.",

        "Built enterprise platforms including AI-powered healthcare, HRMS, service marketplace, and VAS subscription systems with REST APIs, JWT authentication, RBAC, and Socket.io.",

        "Integrated Google Gemini, OpenAI, Firebase FCM, Google Play Billing, and third-party APIs while deploying applications on AWS EC2 using PM2.",
      ],
    },

    {
      company: "Solitaire Infosystems Pvt. Ltd.",
      role: "Full Stack Developer Intern",
      duration: "Oct 2024 – Mar 2025",
      location: "Mohali, Punjab",

      responsibilities: [
        "Developed responsive React.js interfaces and collaborated on backend development using Node.js, Express.js, and MySQL.",

        "Integrated REST APIs, implemented authentication workflows, and contributed to debugging, testing, and feature delivery in Agile environments.",
      ],
    },
  ],

  projects: [
    {
      name: "OnYourService — Service Marketplace Platform",

      // Image inside public folder
      image: "/onyourservice.png",
      liveDemo: "https://onyourservice.com/",

      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Socket.io",
        "Firebase FCM",
        "Tailwind CSS",
      ],

      description:
        "A full-stack service marketplace platform with separate dashboards for Buyers, Providers, and Employees.",

      details: [
        "Built secure REST APIs with JWT authentication, RBAC, OTP verification, bcrypt encryption, and MySQL database integration.",

        "Implemented Socket.io for real-time order updates, messaging, and live notifications across connected users.",

        "Integrated Firebase Cloud Messaging, Nodemailer, and SMS APIs for automated push notifications, email alerts, and OTP delivery.",

        "Optimized frontend performance using React lazy loading, Suspense, protected routing, and reusable component architecture.",
      ],
    },

    {
      name: "Healthcare Platform — AI Healthcare & Wellness System",

      // Image inside public folder
      image: "/Healthcare1.png",
      liveDemo: "https://healthcare.visiontrek.io/",

      techStack: [
        "React.js",
        "Vite",
        "Node.js",
        "Express.js",
        "MySQL",
        "Socket.io",
        "Google Gemini",
        "OpenAI",
        "Tailwind CSS",
      ],

      description:
        "A full-stack AI-powered healthcare platform enabling doctor consultations, hospital discovery, and wellness management.",

      details: [
        "Integrated Google Gemini and OpenAI APIs to analyze medical reports (PDF/Image) and provide AI-driven healthcare assistance through an intelligent chatbot.",

        "Built secure REST APIs with JWT authentication, OTP verification, bcrypt encryption, role-based access control, and MySQL database integration.",

        "Implemented real-time doctor-patient communication using Socket.io and engineered a location-based hospital finder using geospatial calculations.",

        "Optimized frontend performance using React, Vite, Tailwind CSS, Redux Persist, Zustand, lazy loading, and reusable component architecture.",
      ],
    },

    {
      name: "Uptask — Enterprise Workforce Management Platform",

      // Image inside public folder
      image: "/uptask.png",
      liveDemo: "https://uptask.visiontrek.io/login",

      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Socket.io",
        "Tailwind CSS",
        "Firebase FCM",
        "Zustand",
      ],

      description:
        "A full-stack enterprise HR platform for employee lifecycle management, attendance, payroll, and tracking.",

      details: [
        "Architected a full-stack enterprise HR platform for employee lifecycle management, attendance, payroll, project tracking, and internal collaboration.",

        "Developed secure REST APIs using Node.js, Express.js, MySQL, JWT authentication, and role-based access control (RBAC) for Admin, HR, and Employee modules.",

        "Implemented real-time chat, notifications, and company feeds using Socket.io and Firebase Cloud Messaging (FCM).",

        "Automated attendance tracking, biometric synchronization, payroll processing, break reminders, and auto punch-out workflows using Node-cron.",

        "Built modular HR modules for leave management, expense tracking, inventory allocation, grievance handling, task boards, and project management.",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Guru Nanak Dev University",
      duration: "Aug 2022 – June 2025",
      location: "Amritsar",
    },

    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Panjab University",
      duration: "Aug 2019 – June 2022",
      location: "Chandigarh",
    },
  ],

  certifications: [
    "CS50’s Introduction to Computer Science",
    "Foundations of Cybersecurity",
    "Web Development",
    "Search Engine Optimization (SEO)",
  ],

  achievements: [
    "Qualified UGC-NET in Computer Science (Eligible for Ph.D. Admission).",
  ],
};