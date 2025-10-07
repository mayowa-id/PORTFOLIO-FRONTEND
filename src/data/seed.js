// src/data/seed.js
export const SEED = {
  profile: {
    name: 'IDOWU MAYOWA JOSHUA',
    roles: ['SOFTWARE ENGINEER', 'BACKEND DEVELOPER', 'FRONTEND DEVELOPER'],
    // avatar: '/avatar.png' // place avatar in public/avatar.png
  },

  experience: [
    {
      role: 'Backend Developer Intern',
      company: 'Consulting Firm',
      period: '2024',
      description: `Worked on transaction monitoring system, CRUD services, and REST API development. Learned about business strategy and project management.`
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
      title: 'Reactive E-commerce Backend',
      description: 'A reactive event-driven e-commerce backend with product catalog, orders, and payments. Built with Java + Vert.x.',
      image: '/ecommerce-diagram.png',   // put ecommerce-diagram.png in public/
      github: 'https://github.com/yourusername/reactive-ecommerce'
    },
    {
      title: 'Auth Service',
      description: 'Authentication & Authorization service with JWT, OAuth2 logins, and MongoDB integration.',
      image: '/auth-service.png',
      github: 'https://github.com/yourusername/auth-service'
    },
    {
      title: 'CAPTCHA Research',
      description: 'Experiments with FunCaptcha and automated solvers in Python.',
      image: '/captcha-research.png',
      github: 'https://github.com/yourusername/captcha-research'
    },
    {
      title: 'Chat App',
      description: 'Scalable chat application with WebSocket, Redis Pub/Sub, and React frontend.',
      image: '/chat-app.png',
      github: 'https://github.com/yourusername/vertx-chat-app'
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
      image: '/skills.png'   // your diagram image, ensure it exists with exact filename in public/
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
