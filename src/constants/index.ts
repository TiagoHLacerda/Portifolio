// import type {
//   TNavLink,
//   TService,
//   TTechnology,
//   TExperience,
//   TTestimonial,
//   TProject,
// } from "../types";

// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   meta,
//   starbucks,
//   tesla,
//   shopify,
//   carrent,
//   jobit,
//   tripguide,
//   threejs,
// } from "../assets";

// export const navLinks: TNavLink[] = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];

// const services: TService[] = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

// const technologies: TTechnology[] = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

// const experiences: TExperience[] = [
//   {
//     title: "React.js Developer",
//     companyName: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     companyName: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     companyName: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     companyName: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects: TProject[] = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     sourceCodeLink: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     sourceCodeLink: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     sourceCodeLink: "https://github.com/",
//   },
// ];

// export { services, technologies, experiences, testimonials, projects };
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cofco,

  openIt,
  lm,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Operations Analyst - Coffee",
    companyName: "COFCO International",
    icon: cofco, 
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Managing coffee operation systems, testing software developments, and analyzing functional and non-functional requirements.",
      "Developed tools for stock control and operational data analysis, generating insights to optimize workflows.",
      "Installed and maintained RFiD systems, reducing service times and increasing stock reliability.",
      "Proposed system improvements to simplify processes and enhance operational efficiency.",
    ],
  },
  {
    title: "Front-End Developer",
    companyName: "Open It Group",
    icon: openIt, 
    iconBg: "#383E56",
    date: "2021 (Temporary)",
    points: [
      "Developed responsive dashboards using React.js, integrating APIs for real-time data visualization.",
      "Designed user-friendly interfaces with interactive graphs and filtering mechanisms.",
      "Worked with state management solutions to optimize application performance.",
    ],
  }, 
  {
    "title": "Manager",
    "companyName": "Laercio Maquinas-Sthill",
    "icon": lm, 
    "iconBg": "#383E56",
    "date": "2017-2021",
    "points": [
      "Strategically contributed to the company's expansion, leading to the opening of two new branches within three years.",
      "Focused on people and process management, overseeing a team of 10 employees.",
      "Led recruitment, training, and professional development initiatives.",
      "Implemented strategies to optimize resources, improve productivity, and enhance the company's competitiveness."
    ]
  }
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Tiago is an excellent problem solver and team player. His contributions to system automation improved our workflow efficiency significantly.",
    name: "Manager",
    designation: "Operations",
    company: "COFCO International",
    image: "",
  },
  {
    testimonial:
      "Tiago delivered high-quality front-end solutions, and his expertise in React.js was key to our project's success.",
    name: "Lead Developer",
    designation: "Software Development",
    company: "Open It Group",
    image: "",
  },
];

const projects: TProject[] = [
  {
    name: "Inventory Control Dashboard",
    description:
      "A web-based dashboard that monitors coffee stock levels, using data visualization to track inventory movements and predict shortages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Substituir por uma imagem real do projeto
    sourceCodeLink: "https://github.com/TiagoHLacerda",
  },
  {
    name: "RFID System Automation",
    description:
      "Developed a tool to manage and automate the RFID-based tracking system, improving operational efficiency and reducing errors.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "data-analysis",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Substituir por uma imagem real do projeto
    sourceCodeLink: "https://github.com/TiagoHLacerda",
  },
  {
    name: "React.js Dashboard",
    description:
      "A fully responsive web application that integrates APIs and displays operational metrics using dynamic charts and interactive filters.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Substituir por uma imagem real do projeto
    sourceCodeLink: "https://github.com/TiagoHLacerda",
  },
];

export { services, technologies, experiences, testimonials, projects };
