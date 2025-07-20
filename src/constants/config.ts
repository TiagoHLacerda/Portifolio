// type TEducationContent = {
//   degree: string;
//   institution: string;
//   details: string;
// };

// type TExperienceContent = {
//   company: string;
//   role: string;
//   details: string;
// };

// type TSection = {
//   p: string;
//   h2: string;
//   content?: string | TEducationContent[] | TExperienceContent[]; 
// };


// type TConfig = {
//   html: {
//     title: string;
//     fullName: string;
//     email: string;
//   };
//   hero: {
//     name: string;
//     p: string[];
//   };
//   contact: {
//     form: {
//       name: {
//         span: string;
//         placeholder: string;
//       };
//       email: {
//         span: string;
//         placeholder: string;
//       };
//       message: {
//         span: string;
//         placeholder: string;
//       };
//     };
//   } & TSection;
//   sections: {
//     about: Required<TSection>;
//     experience: TSection;
//     feedbacks: TSection;
//     works: Required<TSection>;
//   };
// };

// // export const config: TConfig = {
// //   html: {
// //     title: "Tiago Henrique Lacerda - Portfolio",
// //     fullName: "Tiago Lacerda",
// //     email: "tiagolacerda14287@gmail.com",
// //   },
// //   hero: {
// //     name: "Tiago Lacerda",
// //     p: [", user", "interfaces and web applications"],
// //   },
// //   contact: {
// //     p: "Get in touch",
// //     h2: "Contact.",
// //     form: {
// //       name: {
// //         span: "Your Name",
// //         placeholder: "What's your name?",
// //       },
// //       email: { span: "Your Email", placeholder: "What's your email?" },
// //       message: {
// //         span: "Your Message",
// //         placeholder: "What do you want to say?",
// //       },
// //     },
// //   },
// //   sections: {
// //     about: {
// //       p: "Introduction",
// //       h2: "Overview.",
// //       content: `I'm a skilled software developer with experience in TypeScript and
// //       JavaScript, and expertise in frameworks like React, Node.js, and
// //       Three.js. I'm a quick learner and collaborate closely with clients to
// //       create efficient, scalable, and user-friendly solutions that solve
// //       real-world problems. Let's work together to bring your ideas to life!`,
// //     },
// //     experience: {
// //       p: "What I have done so far",
// //       h2: "Work Experience.",
// //     },
// //     feedbacks: {
// //       p: "What others say",
// //       h2: "Testimonials.",
// //     },
// //     works: {
// //       p: "My work",
// //       h2: "Projects.",
// //       content: `Following projects showcases my skills and experience through
// //     real-world examples of my work. Each project is briefly described with
// //     links to code repositories and live demos in it. It reflects my
// //     ability to solve complex problems, work with different technologies,
// //     and manage projects effectively.`,
// //     },
// //   },
// // };
// // //

// export const config: TConfig = {
//   html: {
//     title: "Tiago Henrique Lacerda - Portfolio",
//     fullName: "Tiago Henrique Lacerda",
//     email: "tiagolacerda14287@gmail.com",
//   },
//   hero: {
//     name: "Tiago Lacerda",
//     p: ["Aspiring Data Scientist", "with a background in Web Development and Software Engineering"],
//   },
//   contact: {
//     p: "Get in touch",
//     h2: "Contact.",
//     form: {
//       name: {
//         span: "Your Name",
//         placeholder: "What's your name?",
//       },
//       email: { span: "Your Email", placeholder: "What's your email?" },
//       message: {
//         span: "Your Message",
//         placeholder: "What do you want to say?",
//       },
//     },
//   },
//   sections: {
//     about: {
//       p: "Introduction",
//       h2: "Overview.",
//       content: `I am a software developer with expertise in React.js, TypeScript, and API integration.
//       My background includes experience in web application development, system automation, and data analysis.
//       I have a strong foundation in problem-solving and continuously seek innovative solutions to optimize workflows.
//       My professional journey includes roles as an Operations Analyst at COFCO International and a Front-End Developer at Open It Group.
//       I am passionate about building scalable and user-friendly applications while leveraging my analytical skills to enhance system performance.`,
//     },
//     experience: {
//       p: "What I have done so far",
//       h2: "Work Experience.",
//       content: [
//         {
//           company: "COFCO International",
//           role: "Operations Analyst (2021 - Present)",
//           details: `Managing coffee operations systems, testing new developments, and analyzing requirements. 
//           Implemented RFiD technology, reducing service time and errors while improving stock control.`,
//         },
//         {
//           company: "Open It Group",
//           role: "Front-End Developer (2021 - Temporary)",
//           details: `Developed responsive dashboards using React.js with API integration and interactive visualizations. 
//           Gained deep expertise in modern front-end frameworks and UI/UX best practices.`,
//         },
//       ],
//     },
//     education: {
//       p: "Education",
//       h2: "Academic Background.",
//       content: [
//         {
//           degree: "B.Sc. in Software Engineering",
//           institution: "Unicesumar (2023)",
//           details: `Graduated with a 90% academic performance. 
//           Final project involved developing a C-based application connected to an AWS-hosted database, receiving top evaluation marks.`,
//         },
//         {
//           degree: "Postgraduate in Data Science & Big Data",
//           institution: "Ongoing (2024 - 2025)",
//           details: `Specializing in machine learning, distributed computing, and AI-driven solutions. 
//           Focused on predictive modeling, NLP, and data pipeline automation.`,
//         },
//       ],
//     },
//     works: {
//       p: "My work",
//       h2: "Projects.",
//       content: `My projects showcase my skills in software development and problem-solving.
//       Each project includes a brief description along with links to code repositories and live demos.
//       I have experience building full-stack applications, responsive dashboards, and automated workflows.`,
//     },
//   },
// };


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
    title: "Tiago Henrique Lacerda - Portfolio",
    fullName: "Tiago Henrique Lacerda",
    email: "tiagolacerda14287@gmail.com",
  },
  hero: {
    name: "Tiago Lacerda",
    p: ["Aspiring Data Scientist", "with a background in Web Development and Software Engineering"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
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
      p: "Introduction",
      h2: "Overview.",
      content: `I am a software developer with expertise in React.js, TypeScript, and API integration. My background includes experience in web application development, system automation, and data analysis. I have a strong foundation in problem-solving and continuously seek innovative solutions to optimize workflows.
My professional journey includes roles as an Operations Analyst at COFCO International and a Front-End Developer at Open It Group. I am passionate about building scalable and user-friendly applications while leveraging my analytical skills to enhance system performance.
Currently, I am expanding my knowledge in Data Science and Machine Learning, exploring how AI can drive innovation and transform industries. I strongly believe that artificial intelligence is shaping the future of humanity, and I am committed to understanding and integrating these technologies into my work to create smarter, data-driven solutions.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
      content: [
        {
          company: "COFCO International",
          role: "Operations Analyst (2021 - Present)",
          details: `Managing coffee operations systems, testing new developments, and analyzing requirements. 
          Implemented RFiD technology, reducing service time and errors while improving stock control.`,
        },
        {
          company: "Open It Group",
          role: "Front-End Developer (2021 - Temporary)",
          details: `Developed responsive dashboards using React.js with API integration and interactive visualizations. 
          Gained deep expertise in modern front-end frameworks and UI/UX best practices.`,
        },
      ],
    },
    education: {
      p: "Education",
      h2: "Academic Background.",
      content: [
        {
          degree: "B.Sc. in Software Engineering",
          institution: "Unicesumar (2023)",
          details: `Graduated with a 90% academic performance. 
          Final project involved developing a C-based application connected to an AWS-hosted database, receiving top evaluation marks.`,
        },
        {
          degree: "Postgraduate in Data Science & Big Data",
          institution: "Ongoing (2024 - 2025)",
          details: `Specializing in machine learning, distributed computing, and AI-driven solutions. 
          Focused on predictive modeling, NLP, and data pipeline automation.`,
        },
      ],
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
      content: "Here you can showcase feedbacks from colleagues, clients, or supervisors.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `My projects showcase my skills in software development and problem-solving.
      Each project includes a brief description along with links to code repositories and live demos.
      I have experience building full-stack applications, responsive dashboards, and automated workflows.`,
    },
  },
};


