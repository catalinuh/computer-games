export type projectType = {
  name: string
  description: string
  technologies: string[]
  link?: string
  images?: string[]
  icon: string
}

export const projectsList: projectType[] = [
  {
    name: 'Wanderlist',
    description:
      'A virtual journal to record your favorite travel memories and experiences.',
    technologies: [
      'Express',
      'Google Maps API',
      'Helmet',
      'JWT',
      'MongoDB',
      'Mongoose',
      'Node.js',
      'React',
      'Recharts',
      'SCSS',
    ],
    link: 'https://github.com/catalinuh/wanderlist',
    images: [
      '/assets/screenshots/Wanderlist1.png',
      '/assets/screenshots/Wanderlist2.png',
      '/assets/screenshots/Wanderlist3.png',
    ],
    icon: '/assets/icons/wanderlist_icon.png',
  },
  {
    name: 'Regex Spaceship',
    description:
      'Regex Spaceship is a web-based multiplayer game that helps players fine tune their RegEx syntax.',
    technologies: [
      'Axios',
      'Express',
      'Morgan',
      'Node.js',
      'Nodemon',
      'Phaser 3',
      'React',
      'Redux',
      'Socket.IO',
      'TypeScript',
      'Webpack',
    ],
    link: 'https://github.com/awesome-apples/regex-spaceship-3',
    images: [
      '/assets/screenshots/RegexSpaceship1.png',
      '/assets/screenshots/RegexSpaceship2.png',
      '/assets/screenshots/RegexSpaceship3.png',
      '/assets/screenshots/RegexSpaceship4.png',
      '/assets/screenshots/RegexSpaceship5.png',
    ],
    icon: '/assets/icons/regex_spaceship_icon.png',
  },
  {
    name: 'My Blog',
    description: 'A simple blog to share my thoughts and experiences.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'EJS',
    ],
    link: '',
    images: ['/assets/screenshots/blog1.png', '/assets/screenshots/blog2.png'],
    icon: '/assets/icons/blog_icon.png',
  },
  {
    name: 'Forgotten Forest',
    description:
      'A 2D adventure game where players explore a mysterious forest filled with hidden secrets and challenges.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'EJS',
    ],
    link: '',
    images: [
      '/assets/screenshots/Forestland1.png',
      '/assets/screenshots/Forestland2.png',
    ],
    icon: '/assets/icons/forestland_icon.png',
  },
]
