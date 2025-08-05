// Portfolio Configuration
// Modify these values to easily customize your portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Safvan",
    title: "Web Developer",
    email: "khalifasafvan@yahoo.com",
    location: "Your Location",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },

  // Hero Section
  hero: {
    greeting: "Hi, I am",
    name: "Safvan",
    title: "Web Developer",
    description: `a Web Developer with 3+ years of experience helping businesses build
    fast, modern, and user-focused digital solutions. I combine intuitive
    design, efficient code, and strategic thinking to turn ideas into
    powerful web experiences.`,
    ctaText: "Hire Me",
    ctaLink: "#contact", // or mailto:email@example.com
    image: "/dev8bitArt.png", // Path to your hero image
  },

  // About Section
  about: {
    title: "About Me",
    description: `I'm a passionate web developer with expertise in modern web technologies.
    I love creating beautiful, functional, and user-friendly websites that
    help businesses grow and succeed online.`,
    skills: [
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Git",
    ],
  },

  // Experience Section - 2 Company Work Experiences
  experience: {
    title: "Work Experience",
    items: [
      {
        company: "TechCorp Solutions",
        position: "Senior Web Developer",
        duration: "2022 - Present",
        description:
          "Led development of multiple web applications using React and Node.js. Managed a team of 5 developers and delivered 10+ client projects on time. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "AWS",
          "Docker",
          "Jenkins",
        ],
        achievements: [
          "Reduced application load time by 60%",
          "Mentored 3 junior developers",
          "Implemented microservices architecture",
        ],
      },
      {
        company: "Digital Innovations Inc",
        position: "Full Stack Developer",
        duration: "2020 - 2022",
        description:
          "Developed and maintained client websites and web applications. Collaborated with design team to implement pixel-perfect UI/UX designs. Integrated third-party APIs and payment gateways.",
        technologies: [
          "JavaScript",
          "React",
          "Express.js",
          "MySQL",
          "Stripe API",
        ],
        achievements: [
          "Built 15+ client websites",
          "Improved user engagement by 35%",
          "Reduced bug reports by 50%",
        ],
      },
    ],
  },

  // Education Section
  education: {
    title: "Education",
    items: [
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "University of Technology",
        duration: "2016 - 2020",
        description:
          "Graduated with First Class Honours. Specialized in Software Engineering and Web Technologies.",
        gpa: "8.5/10",
        relevantCourses: [
          "Data Structures & Algorithms",
          "Database Management Systems",
          "Web Development",
          "Software Engineering",
          "Computer Networks",
        ],
        achievements: [
          "Dean's List for 3 consecutive years",
          "Best Final Year Project Award",
          "Technical Lead of Coding Club",
        ],
      },
    ],
  },

  // Certifications Section - 4 Udemy Certifications
  certifications: {
    title: "Certifications",
    items: [
      {
        title: "Complete React Developer 2024",
        platform: "Udemy",
        instructor: "Andrei Neagoie",
        duration: "40 hours",
        date: "2024",
        description:
          "Mastered React 18, Hooks, Context API, and modern React patterns",
        skills: ["React 18", "Hooks", "Context API", "Redux Toolkit"],
        certificateUrl: "https://udemy.com/certificate/example1",
      },
      {
        title: "Node.js: The Complete Guide",
        platform: "Udemy",
        instructor: "Maximilian Schwarzmüller",
        duration: "35 hours",
        date: "2023",
        description:
          "Built RESTful APIs, authentication, and database integration",
        skills: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"],
        certificateUrl: "https://udemy.com/certificate/example2",
      },
      {
        title: "Advanced CSS and Sass",
        platform: "Udemy",
        instructor: "Jonas Schmedtmann",
        duration: "28 hours",
        date: "2023",
        description: "Learned advanced CSS techniques, Flexbox, Grid, and Sass",
        skills: ["CSS3", "Sass", "Flexbox", "CSS Grid", "Animations"],
        certificateUrl: "https://udemy.com/certificate/example3",
      },
      {
        title: "JavaScript: The Complete Guide",
        platform: "Udemy",
        instructor: "Academind",
        duration: "45 hours",
        date: "2022",
        description:
          "Mastered modern JavaScript ES6+, async programming, and DOM manipulation",
        skills: ["ES6+", "Async/Await", "Promises", "DOM Manipulation"],
        certificateUrl: "https://udemy.com/certificate/example4",
      },
    ],
  },

  // Projects Section - 4 Projects
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "E-commerce Platform",
        description:
          "A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard. Features include product management, order tracking, and real-time inventory updates.",
        image: "/project1.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
        liveUrl: "https://ecommerce-project.com",
        githubUrl: "https://github.com/username/ecommerce-project",
        features: [
          "User authentication & authorization",
          "Payment processing with Stripe",
          "Real-time inventory management",
          "Admin dashboard",
          "Order tracking system",
        ],
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, team collaboration, and project tracking. Includes drag-and-drop functionality and progress analytics.",
        image: "/project2.jpg",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL", "D3.js"],
        liveUrl: "https://task-app.com",
        githubUrl: "https://github.com/username/task-app",
        features: [
          "Real-time collaboration",
          "Drag-and-drop interface",
          "Progress analytics",
          "Team management",
          "File attachments",
        ],
      },
      {
        title: "Weather Dashboard",
        description:
          "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Includes 7-day forecasts and weather alerts.",
        image: "/project3.jpg",
        technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
        liveUrl: "https://weather-dashboard.com",
        githubUrl: "https://github.com/username/weather-app",
        features: [
          "Location-based forecasts",
          "Interactive weather maps",
          "7-day weather predictions",
          "Weather alerts",
          "Historical data charts",
        ],
      },
      {
        title: "Portfolio Website",
        description:
          "A modern, responsive portfolio website with smooth animations, GSAP integration, and horizontal scrolling. Features include dark mode and interactive elements.",
        image: "/project4.jpg",
        technologies: ["React", "GSAP", "CSS3", "JavaScript"],
        liveUrl: "https://portfolio-website.com",
        githubUrl: "https://github.com/username/portfolio",
        features: [
          "GSAP animations",
          "Horizontal scrolling",
          "Responsive design",
          "Interactive elements",
          "Performance optimized",
        ],
      },
    ],
  },

  // Skills Section
  skills: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Frontend",
        skills: [
          "React",
          "Vue.js",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Sass",
        ],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
      },
      {
        name: "Database",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
      },
      {
        name: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "Heroku", "Figma", "Adobe XD"],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description:
      "I'm always interested in hearing about new opportunities and exciting projects.",
    email: "khalifasafvan@yahoo.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      instagram: "https://instagram.com/yourusername",
    },
  },

  // Footer
  footer: {
    copyright: "© 2024 Safvan. All rights reserved.",
    madeWith: "Made with ❤️ using React",
  },

  // Goals Ticker (the scrolling text at the bottom)
  goalsTicker: {
    items: [
      "Build amazing websites",
      "Create user-friendly experiences",
      "Write clean, maintainable code",
      "Learn new technologies",
      "Contribute to open source",
      "Help businesses grow online",
      "Stay up-to-date with trends",
      "Mentor junior developers",
    ],
  },
};
