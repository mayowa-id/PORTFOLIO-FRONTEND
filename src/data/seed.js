// src/data/seed.js
export const SEED = {
  profile: {
    name: 'IDOWU MAYOWA JOSHUA',
    roles: ['SOFTWARE ENGINEER', 'BACKEND DEVELOPER', 'FRONTEND DEVELOPER'],
    // avatar: '/avatar.png' // place avatar in public/avatar.png
  },

  experience: [
    {
      role: 'FULL STACK DEVELOPER INTERN',
      company: 'TIPSONA, LAGOS',
      period: '2024',
      description: ` Worked as a full-stack development intern at a tech startup, building and integrating RESTful APIs, 
      mplementing authentication and database operations, and developing responsive frontends with React. 
      Collaborated in an agile team, contributing to the full development cycle from requirements gathering to
      deployment while maintaining code quality through testing and reviews.`
    },
    {
      role: 'Personal Projects',
      company: 'Self-Driven',
      period: 'Ongoing',
      description: `Building full-stack systems including authentication services, chat applications, and automation tools.`
    }
  ],

  about: `Hi — I'm IDOWU MAYOWA JOSHUA. I design and build backend systems using Java, Node.js, and Go. I love clean architecture, high test coverage, and pragmatic observability.`,

  certifications: `- AWS Certified Solutions Architect (2024)\n- Oracle Certified Professional, Java SE 11 Developer\n- Kubernetes Administrator (CKA)`,

  help: `Available commands:\n- show about\n- show projects\n- show experience\n- show skills\n- show certifications\n- show contacts\n- help`,

  projects: [
    {
      title: 'Auth Service',
      description: 'Authentication & Authorization service with JWT, OAuth2 logins, and MongoDB integration.',
      image: './auth.png',
      github: 'https://github.com/yourusername/auth-service'
    },
    {
      title: 'Health Reminder',
      description: 'Smart Daily Task Reminder is a Java Spring Boot application that helps users schedule and receive automated reminders for essential daily activities like drinking water and stretching. Users can configure reminders based on their preferences and receive notifications via Email, Telegram, and WhatsApp (Twilio).',
      image: './smart-reminder.png',
      github: 'https://github.com/mayowa-id/smart-daily-task-reminder'
    }
  ],

  skills: [
    {
      title: 'Programming languages',
      body: 'Java\nJavaScript\nPython'
    },
    {
      title: 'Backend',
      body: 'Spring Boot\nNode.js\nExpress.js\nVert.x'
    },
    {
      title: 'Frontend',
      body: 'HTML\nCSS\nReact.js'
    },
    {
      title: 'Databases',
      body: 'MySQL\nPostgreSQL\nMongoDB\nRedis'
    },
    {
      title: 'Cloud & DevOps',
      body: 'AWS\nDocker\nGitHub Actions'
    },
    {
      title: 'Messaging & Security',
      body: 'Redis Pub/Sub\nRabbitMQ\nKafka\n\nSecurity: OAuth2, JWT, Spring Security'
    },
    {
      title: 'Skills Diagram',
      body: '',
      image: './skills.png'   // your diagram image, ensure it exists with exact filename in public/
    }
  ],

  contacts: {
    email: "yourmail@example.com",
    phone: "+234-XXX-XXXXXXX",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  },

  // optional: fallback articles if you used them before
  articles: [
    { title: 'Optimizing Microservices Architecture', date: '24th June 2024', category: 'System Architecture', excerpt: 'Best practices and pitfalls...' },
    { title: 'Understanding Containerization', date: '24th June 2024', category: 'Containers', excerpt: 'Docker and Kubernetes explained' }
  ]
}



