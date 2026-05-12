export type skillsType = {
  [key: string]:
    | string[]
    | {
        [key: string]: string[]
      }
}

export const skills: skillsType[] = [
  {
    JavaScript: {
      Frontend: [
        'React',
        'React Native',
        'Next.js',
        'TypeScript',
        'Day.js',
        'Storybook',
        'Redux',
        'Recoil',
      ],
      Backend: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'GQL',
        'Prisma',
        'NestJS',
        'Liquibase',
        'PostgreSQL',
        'SQL',
        'Webpack',
        'Babel.js',
      ],
      Testing: [
        'React Testing Library',
        'Jest',
        'Cypress',
        'Jasmine',
        'Mocha',
        'Chai',
      ],
      'Misc.': ['Socket.io', 'Phaser 4', 'Lodash'],
    },
  },
  {
    Other: [
      'HTML/HTML5',
      'CSS/SCSS',
      'Python',
      'Java',
      'C#',
      'C++',
      'Canva',
      'Figma',
      'Git',
      'GitHub',
      'GitLab',
      'VS Code',
      'NetBeans',
      'Adobe Photoshop',
      'Adobe Illustrator',
    ],
  },
]
