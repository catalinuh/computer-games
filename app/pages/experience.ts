export type experienceType = {
  company: string
  role: string
  duration: string
  description?: string[]
}

// TODO: Create this list of experience objects without duplicating the experience objects for each year. Maybe create a list of experience objects and then create the experienceMap by mapping over the list and grouping by year or something??
export const experienceMap: { [key: number]: experienceType[] } = {
  2020: [
    {
      company: 'Avant Gardner',
      role: 'Full Stack Software Engineer',
      duration: 'November 2020 - June 2021',
      description: [
        ' Worked on the front-end of an internal Event Management Software to assist those in charge of organizing and planning events at the venue, Avant Gardner',
        'Created an accessibility-friendly user interface using practices like semantic HTML and Aria labeling in accordance with ADA compliance',
        'Used Node.js and Express for making calls (GET, POST, PUT, DELETE) to trigger or fetch data from Restful APIs provided by the other team',
        'Used Postman to test API and used Git as a version control tool',
        'Worked with other engineers to architect flexible reusable UI components',
        'Extensively used Git for version control and collaboration with colleague developers in project development',
      ],
    },
    {
      company: 'The Grace Hopper Program at Fullstack Academy',
      role: 'Full Stack Software Engineer',
      duration: 'December 2020',
    },
    {
      company: 'LaGuardia Community College',
      role: 'Associate in Computer Science',
      duration: 'June 2020',
    },
  ],
  2021: [
    {
      company: 'Audubon National Society',
      role: 'React Developer',
      duration: 'June 2021 - April 2022',
      description: [
        'Migrated their website that used previous libraries, Backbone.js and jQuery, to use newer and more versatile technologies such as React and Redux',
        'Converted ESRI’s ArcGIS API, which was responsible for the rendering of a map, to use Google’s Map API for more support and better documentation',
        'Used SCSS rules like @mixin and @include to make effective and cross-browser compatible front-end pages with easy-to-use functionalities',
        'Built responsive UI pages using CSS modules like flexbox, grid and the CSS @media rule',
        'Constructed and built RESTful API endpoints using Node.js with Express for front end to back-end communication',
        'Actively involved in Agile software development methodologies by participating in daily stand-ups and seasonal sprints',
      ],
    },
    {
      company: 'Avant Gardner',
      role: 'Full Stack Software Engineer',
      duration: 'November 2020 - June 2021',
      description: [
        ' Worked on the front-end of an internal Event Management Software to assist those in charge of organizing and planning events at the venue, Avant Gardner',
        'Created an accessibility-friendly user interface using practices like semantic HTML and Aria labeling in accordance with ADA compliance',
        'Used Node.js and Express for making calls (GET, POST, PUT, DELETE) to trigger or fetch data from Restful APIs provided by the other team',
        'Used Postman to test API and used Git as a version control tool',
        'Worked with other engineers to architect flexible reusable UI components',
        'Extensively used Git for version control and collaboration with colleague developers in project development',
      ],
    },
  ],
  2022: [
    {
      company: 'Charter Communications',
      role: 'Software Engineer III',
      duration: 'April 2022 - December 2025',
      description: [
        'Worked on an experimentation platform that Charter used to drive changes and decisions to their many applications',
        'Did spike/investigation work to determine features that stakeholders wanted',
        'Performed project planning through bi-weekly refinement processes which included pointing tickets',
        'Used Prisma, NestJS, and Liquibase on the back end for our MySQL database',
        'Used React, GQL, Day.js, lodash, and an in-house component library, similar to MUI, called Kite on the front end',
      ],
    },
    {
      company: 'Audubon National Society',
      role: 'React Developer',
      duration: 'June 2021 - April 2022',
      description: [
        'Migrated their website that used previous libraries, Backbone.js and jQuery, to use newer and more versatile technologies such as React and Redux',
        'Converted ESRI’s ArcGIS API, which was responsible for the rendering of a map, to use Google’s Map API for more support and better documentation',
        'Used SCSS rules like @mixin and @include to make effective and cross-browser compatible front-end pages with easy-to-use functionalities',
        'Built responsive UI pages using CSS modules like flexbox, grid and the CSS @media rule',
        'Constructed and built RESTful API endpoints using Node.js with Express for front end to back-end communication',
        'Actively involved in Agile software development methodologies by participating in daily stand-ups and seasonal sprints',
      ],
    },
  ],
  2023: [
    {
      company: 'Charter Communications',
      role: 'Software Engineer III',
      duration: 'April 2022 - December 2025',
      description: [
        'Worked on an experimentation platform that Charter used to drive changes and decisions to their many applications',
        'Did spike/investigation work to determine features that stakeholders wanted',
        'Performed project planning through bi-weekly refinement processes which included pointing tickets',
        'Used Prisma, NestJS, and Liquibase on the back end for our MySQL database',
        'Used React, GQL, Day.js, lodash, and an in-house component library, similar to MUI, called Kite on the front end',
      ],
    },
  ],
  2024: [
    {
      company: 'Charter Communications',
      role: 'Software Engineer III',
      duration: 'April 2022 - December 2025',
      description: [
        'Worked on an experimentation platform that Charter used to drive changes and decisions to their many applications',
        'Did spike/investigation work to determine features that stakeholders wanted',
        'Performed project planning through bi-weekly refinement processes which included pointing tickets',
        'Used Prisma, NestJS, and Liquibase on the back end for our MySQL database',
        'Used React, GQL, Day.js, lodash, and an in-house component library, similar to MUI, called Kite on the front end',
      ],
    },
  ],
  2025: [
    {
      company: 'Charter Communications',
      role: 'Software Engineer III',
      duration: 'April 2022 - December 2025',
      description: [
        'Worked on an experimentation platform that Charter used to drive changes and decisions to their many applications',
        'Did spike/investigation work to determine features that stakeholders wanted',
        'Performed project planning through bi-weekly refinement processes which included pointing tickets',
        'Used Prisma, NestJS, and Liquibase on the back end for our MySQL database',
        'Used React, GQL, Day.js, lodash, and an in-house component library, similar to MUI, called Kite on the front end',
      ],
    },
  ],
  2026: [
    {
      company: 'IBM Online Course',
      role: 'Course in generative AI for Software Developers Specialization',
      duration: 'March 2026 - Present',
    },
    {
      company: 'AWS Online Course',
      role: 'Course for AWS Certified Cloud Practitioner Certification',
      duration: 'May 2026 - Present',
    },
  ],
}
