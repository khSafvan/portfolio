// Portfolio Configuration
// Modify these values to easily customize your portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Safvan",
    title: "Web Developer",
    email: "khalifasafvan@yahoo.com",
    location: "Your Location",
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
    image: "/dev8bitArt.png", // Path to your hero image
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

  // Services
  services: {
    title: "What I Do",
    description:
      "I help businesses design, build, and launch fast, accessible, and delightful web experiences.",
    items: [
      { icon: "⚡", title: "Frontend Engineering", subtitle: "React, animations, performance" },
      { icon: "🧭", title: "UI/UX Implementation", subtitle: "Design systems, responsive layouts" },
      { icon: "🚀", title: "Site Optimization", subtitle: "Core Web Vitals, SEO, Lighthouse" },
    ],
    stats: [
      { value: "3+ yrs", label: "Experience" },
      { value: "25+", label: "Projects" },
      { value: "100%", label: "Client Focused" },
    ],
  },

  // Experience
  experience: {
    title: "Experience",
    items: [
      {
        company: "Acme Co.",
        role: "Frontend Developer",
        period: "2023 — Present",
        summary:
          "Building high-performance React apps with modern tooling, accessibility, and animations.",
      },
      {
        company: "Freelance",
        role: "Web Developer",
        period: "2021 — 2023",
        summary:
          "Delivered responsive websites and landing pages for startups and small businesses.",
      },
    ],
  },

  // Projects
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Marketing Landing",
        description: "High-converting landing page with GSAP micro-interactions.",
        image: "/logo.png",
      },
      {
        title: "Portfolio v2",
        description: "Modern personal portfolio with smooth scrolling and sticky sections.",
        image: "/wolfLogo.png",
      },
      {
        title: "Dashboard UI",
        description: "Data-rich dashboard with charts and responsive layouts.",
        image: "/logo.png",
      },
    ],
  },

  // Testimonials
  testimonials: {
    title: "What Clients Say",
    items: [
      {
        quote:
          "Safvan was fantastic to work with—fast, communicative, and delivered pixel-perfect results.",
        author: "Jane Doe",
        role: "Product Manager, Startup",
      },
      {
        quote:
          "He improved our site performance dramatically and the UX feels delightful now.",
        author: "John Smith",
        role: "Founder, SaaS Co.",
      },
      {
        quote:
          "Professional, detail-oriented, and great with animations and interactions.",
        author: "Alex Lee",
        role: "Design Lead",
      },
    ],
  },

  // Contact CTA
  contactCta: {
    title: "Let's work together",
    subtitle: "Have a project in mind or need help shipping faster? I'm available for new work.",
    email: "khalifasafvan@yahoo.com",
  },
};
