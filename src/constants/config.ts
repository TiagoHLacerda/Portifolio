type TEducationContent = {
  degree: string;
  institution: string;
  details: string;
};

type TExperienceContent = {
  company: string;
  role: string;
  details: string;
};

type TSection<T = string> = {
  p: string;
  h2: string;
  content?: T;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection<string>>;
    experience: TSection<TExperienceContent[]>;
    education: TSection<TEducationContent[]>;
    feedbacks: TSection<string>;
    works: Required<TSection<string>>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Tiago Lacerda - Data Analyst',
    fullName: 'Tiago Henrique Lacerda',
    email: 'TIAGOLACERDA14287@GMAIL.COM',
  },
  hero: {
    name: 'Tiago Lacerda',
    p: [
      'Data Analyst',
      'Seeking opportunities in Data Engineering, Data Science, or Data Analysis.',
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    /* The `about` section in the `config` object is providing an introduction or overview of the
    individual (Tiago Henrique Lacerda in this case) whose portfolio is being described. It
    typically includes information about the person's background, skills, experiences, and
    aspirations. In this specific case, the `about` section is describing Tiago Lacerda's expertise
    in software development, his professional journey, and his passion for building user-friendly
    applications while leveraging analytical skills. */
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `A professional with solid experience in operational data analysis and process optimization, seeking to work in Data Engineering, Data Science, or Data Analysis. I am a recent postgraduate in Data Science and Big Data, with proficiency in Python, SQL, NoSQL, Azure, Machine Learning, and data visualization tools. 
       I have a proven ability to transform data into strategic insights, build robust pipelines, and develop scalable solutions. My background includes managing coffee operating systems at a multinational company and front-end development with React.js.
       Currently, I am deepening my knowledge in Software Project Management in the era of sensor data and AI through a new postgraduate program at UFJF.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
      content: [
        {
          company: 'COFCO International',
          role: 'Operations Analyst (2021 - Present)',
          details: `• Management of coffee operating systems, including support for the development team with systemic tests and analysis of functional and non-functional requirements.
          • Proposed and implemented systemic and operational improvements based on data analysis, aiming to reduce execution time and simplify processes.
          • Developed custom tools for inventory monitoring and control, reducing the audit error rate to less than 1%.
          • Installed, configured, and maintained RFID equipment, resulting in zero external maintenance costs.`,
        },
        {
          company: 'Open It Group',
          role: 'Front-End Developer (2021 - Temporary)',
          details: `• Development of responsive websites and dashboards using React.js, with API integration.
          • Created dynamic dashboards displaying detailed information and graphs for data manipulation and visualization.`,
        },
      ],
    },
    education: {
      p: 'My',
      h2: 'Education.',
      content: [
        {
          degree: 'Postgraduate in Software Project Management and Data in the AI era',
          institution: 'UFJF (2025 - 2026)',
          details: `The course will cover Software Project Management, exploring how new approaches can be used to bring a new vision to managing software projects involving sensor and Artificial Intelligence technologies.`,
        },
        {
          degree: 'Postgraduate in Data Science & Big Data',
          institution: 'Puc Minas (2024 - 2025)',
          details: `Covered key data science techniques, focusing on machine learning, massive and distributed data processing, and computer vision. Topics included: Machine Learning, Deep Learning, NLP, DataOps, MLOps, Data Modeling, ETL/ELT, SQL, and NoSQL.`,
        },
        {
          degree: 'B.Sc. in Software Engineering',
          institution: 'Unicesumar (2019 - 2022)',
          details: `The course covered the principles of software engineering for the development, operation, and maintenance of high-quality systems. The final project was an application in C integrated with a database hosted on AWS.`,
        },
      ],
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
      content: 'Under Construction',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: ` Under Construction`,
    },
  },
};
