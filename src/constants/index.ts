import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

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
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Data Analyst',
    icon: mobile,
  },
  {
    title: 'Operations Analyst',
    icon: backend,
  },
  {
    title: 'Machine Learning',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Operations Analyst - Coffee',
    companyName: 'COFCO International',
    icon: cofco,
    iconBg: '#E6DEDD',
    date: '2021 - Present',
    points: [
      'Managing coffee operation systems, testing software developments, and analyzing functional and non-functional requirements.',
      'Developed tools for stock control and operational data analysis, generating insights to optimize workflows.',
      'Installed and maintained RFiD systems, reducing service times and increasing stock reliability.',
      'Proposed system improvements to simplify processes and enhance operational efficiency.',
    ],
  },
  {
    title: 'Front-End Developer',
    companyName: 'Open It Group',
    icon: openIt,
    iconBg: '#383E56',
    date: '2021 (Temporary)',
    points: [
      'Developed responsive dashboards using React.js, integrating APIs for real-time data visualization.',
      'Designed user-friendly interfaces with interactive graphs and filtering mechanisms.',
      'Worked with state management solutions to optimize application performance.',
    ],
  },
  {
    title: 'Manager',
    companyName: 'Laercio Maquinas-Sthill',
    icon: lm,
    iconBg: '#383E56',
    date: '2017-2021',
    points: [
      "Strategically contributed to the company's expansion, leading to the opening of two new branches within three years.",
      'Focused on people and process management, overseeing a team of 10 employees.',
      'Led recruitment, training, and professional development initiatives.',
      "Implemented strategies to optimize resources, improve productivity, and enhance the company's competitiveness.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: 'Under Construction',
    name: 'Manager',
    designation: 'Operations',
    company: 'COFCO International',
    image: '',
  },
  {
    testimonial: 'Under Construction',
    name: 'Lead Developer',
    designation: 'Software Development',
    company: 'Open It Group',
    image: '',
  },
];

const projects: TProject[] = [
  {
    name: 'Inventory Control Dashboard',
    description:
      'A web-based dashboard that monitors coffee stock levels, using data visualization to track inventory movements and predict shortages.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent, // Substituir por uma imagem real do projeto
    sourceCodeLink: 'https://github.com/TiagoHLacerda',
  },
  {
    name: 'RFID System Automation',
    description:
      'Developed a tool to manage and automate the RFID-based tracking system, improving operational efficiency and reducing errors.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'aws',
        color: 'green-text-gradient',
      },
      {
        name: 'data-analysis',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit, // Substituir por uma imagem real do projeto
    sourceCodeLink: 'https://github.com/TiagoHLacerda',
  },
  {
    name: 'React.js Dashboard',
    description:
      'A fully responsive web application that integrates APIs and displays operational metrics using dynamic charts and interactive filters.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide, // Substituir por uma imagem real do projeto
    sourceCodeLink: 'https://github.com/TiagoHLacerda',
  },
];

export { services, technologies, experiences, testimonials, projects };
