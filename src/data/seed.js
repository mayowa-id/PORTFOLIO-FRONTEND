export const SEED = {
  profile: {
    name: 'IDOWU MAYOWA JOSHUA',
    roles: ['SOFTWARE ENGINEER', 'BACKEND DEVELOPER', 'FRONTEND DEVELOPER'],
    avatar: '/profile.jpg'
  },

  experience: [
    {
      role: 'FULL STACK DEVELOPER INTERN',
      company: 'TIPSONA, LAGOS',
      period: '2024',
      description: `Worked as a full-stack development intern at a tech startup, building and integrating RESTful APIs,
      implementing authentication and database operations, and developing responsive frontends with React.`
    },
    {
      role: 'Personal Projects',
      company: 'Self-Driven',
      period: 'Ongoing',
      description: `Building full-stack systems including authentication services, chat applications, and automation tools.`
    }
  ],

  about: `Hi — I'm IDOWU MAYOWA JOSHUA. I design and build backend systems using Java, Node.js, and Go...`,

  certifications: `- AWS Certified Solutions Architect (2024)\n- Oracle Certified Professional, Java SE 11 Developer`,

  projects: [
{
  title: 'Inventory Management System',
  description: `A full-stack inventory management system that automates product restocking and warehouse capacity management for businesses. The application monitors stock levels across multiple warehouses and automatically generates purchase orders when inventory falls below defined thresholds, while respecting warehouse capacity constraints.`,
  images: [
    { src: '/projects/inv1.jpg', alt: 'Overview', caption: 'Dashboard' },
     { src: '/projects/inv2.jpg', alt: 'Overview', caption: 'Dashboard' },
     { src: '/projects/inv3.jpg', alt: 'Overview', caption: 'Dashboard' },
    { src: '/projects/inv4.jpg', alt: 'Diagram', caption: 'Dashboard' },
   { src: '/projects/inv5.png', alt: 'Overview', caption: 'Dashboard' }
  ],
  github: 'https://github.com/yourusername/new-project-repo'
}

    ,
    {
      title: 'Auth Service',
      description: 'Authentication & Authorization service with JWT, OAuth2 logins, and MongoDB integration.',
      image: '/auth.png',
      github: 'https://github.com/yourusername/auth-service'
    },
    {
      title: 'Health Reminder',
      description: 'Smart Daily Task Reminder built with Spring Boot, featuring email and Telegram reminders.',
      image: '/smart-reminder.png',
      github: 'https://github.com/mayowa-id/smart-daily-task-reminder'
    }
  ],

  skills: [
    {
      title: 'Core Skills',
      body: '',
      image: '/skill.png'
    }
  ],

  contacts: {
    email: "yourmail@example.com",
    phone: "+234-XXX-XXXXXXX",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
}



//for situations where i have multiple images and i want to show them as a slideshow 
// const imgs = [
//   { src: '/proj1-1.png', alt: 'proj1-1', caption: 'Diagram overview' },
//   { src: '/proj1-2.png', alt: 'proj1-2', caption: 'Sequence diagram' },
// ]

// <GalleryImageGroup images={imgs} thumbClassName="frame-image" />





