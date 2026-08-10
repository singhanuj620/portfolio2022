import FreeCodeCamp from "./Images/Projects/freecodecamp.png";
import InstagramBot from "./Images/Projects/instagrambot.png";
import Inventory from "./Images/Projects/inventory.png";
import Typeform from "./Images/Projects/typeform.png";
import JsQuiz from "./Images/Projects/jsquiz.png";
import NseScraper from "./Images/Projects/nse-scraper.png";

export const info = {
  name: "Anuj Singh",
  title: "Senior Frontend Engineer",
  tagline: "React.js • Next.js • TypeScript • GenAI UI",
  profile: {
    name: "Anuj Singh",
    role: "Senior Frontend Engineer",
    headline: "React.js • Next.js • TypeScript • GenAI UI",
    company: "EPAM Systems",
    experience: "Nearly 6 years",
    website: "https://anujsingh.net",
    phone: "+91-8423522211",
    email: "singhanuj620@gmail.com",
    linkedin: "https://linkedin.com/in/anuj-singh-007",
    github: "https://github.com/singhanuj620",
    devto: "https://dev.to/singhanuj620",
    resumeUrl:
      "https://drive.google.com/file/d/1IJs3MkQlTwzyf-EdcytPNLVDSeO91X-o/view?usp=share_link",
    summary:
      "Senior Frontend Engineer with nearly 6 years of experience building scalable, high-performance web applications using React.js, Next.js, and TypeScript. Strong expertise in frontend architecture, headless CMS platforms, performance optimization, and API-driven systems.",
  },
  summary:
    "Senior Frontend Engineer with nearly 6 years of experience building scalable, high-performance web applications using React.js, Next.js, and TypeScript. Strong expertise in frontend architecture, headless CMS platforms, performance optimization, and API-driven systems. Experienced in developing enterprise-grade, SEO-friendly, and content-driven applications. Additionally experienced in integrating GenAI capabilities into frontend applications, including LLM-powered features, conversational UI, and enhanced search experiences via RAG.",
  experience: [
    {
      company: "EPAM Systems",
      role: "Senior Frontend Engineer",
      duration: "April 2026 - Present",
      client: "Philips",
      responsibilities: [
        "Contributed to Philips’ global digital transformation by migrating enterprise platforms from AEM to Contentful, enabling scalable multi-market experiences across 10+ regions.",
        "Built and optimized large-scale Next.js and React.js applications with TypeScript and GraphQL, improving Core Web Vitals by 20%.",
        "Developed reusable component-driven architecture using Design System (DLS), reducing UI duplication by 25%.",
        "Integrated frontend with enterprise systems via GraphQL and AWS AppSync, aggregating data from Contentful, Coveo Search, and taxonomy platforms.",
        "Implemented localization (i18n), content preview workflows, and real-time authoring capabilities for global markets.",
        "Worked on CI/CD (Azure DevOps), code quality (SonarQube), and performance optimization, improving deployment reliability by 15%, while exploring GenAI features.",
      ],
    },
    {
      company: "Infosys Limited",
      role: "Senior Frontend Engineer",
      duration: "Oct 2020 - Mar 2026",
      client: "British Petroleum, Starbucks",
      responsibilities: [
        "Developed scalable frontend applications using React.js, Next.js, and TypeScript.",
        "Built reusable component architecture and optimized state management, reducing UI defects by 18%.",
        "Implemented SSR and ISR using Next.js and real-time updates via SSE and GraphQL APIs.",
        "Improved code quality with unit testing (Jest, React Testing Library) and CI/CD pipelines.",
        "Collaborated with cross-functional teams on API design and end-to-end frontend delivery.",
        "Optimized performance using code splitting, lazy loading, and bundle optimization, reducing load time by 10%.",
      ],
    },
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frontend: ["React.js", "Next.js (App Router)", "Redux Toolkit", "Tailwind CSS"],
    genai: [
      "LLM APIs",
      "Prompt Engineering",
      "Retrieval Augmented Generation (RAG)",
      "Conversational UI",
      "Streaming UI",
      "MCP Client/Server",
    ],
    technologies: [
      "REST APIs",
      "GraphQL",
      "Contentful CMS",
      "Git",
      "CI/CD",
      "Jest",
      "Webpack",
      "Azure DevOps",
      "SonarQube",
    ],
    core_concepts: [
      "Frontend Architecture",
      "Headless CMS",
      "Performance Optimization",
      "System Design",
      "Accessibility",
      "Testing",
      "State Management",
      "SEO",
      "Internationalization (i18n)",
      "React Server Components",
      "Server Actions",
      "Data Flow Optimization",
    ],
  },
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Pranveer Singh Institute of Technology",
    duration: "2016 - 2020",
  },
  projects: [
    {
      title: "NSE Stock Data Scraper & Analytics Platform",
      description:
        "A comprehensive full-stack web application for downloading and analyzing Indian stock market data from NSE (National Stock Exchange). Built with Node.js/Express backend and React frontend, this tool provides lightning-fast data extraction using direct NSE API calls (10x faster than traditional web scraping). Features include real-time progress tracking, configurable stock lists, automated CSV export with historical price, volume, and delivery data. Perfect for financial analysis, algorithmic trading backtesting, and research purposes with comprehensive error handling and retry mechanisms.",
      image: NseScraper,
      github: "https://github.com/singhanuj620/nse_scrap",
      demo: "",
    },
    {
      title: "Javascript Interview Quiz",
      description:
        "This is a dynamic web application designed to sharpen your JavaScript skills and prepare you for your next interview with confidence. Whether you're a seasoned developer looking to brush up on your knowledge or a newcomer eager to delve into the world of JavaScript, this quiz platform offers an engaging and interactive learning experience.",
      image: JsQuiz,
      github: "https://github.com/singhanuj620/JSQuiz",
      demo: "https://jsinterviewquiz.netlify.app/",
    },
    {
      title: "Starbucks Stock Control & Optimization",
      description:
        "Developed using cutting-edge technologies such as ReactJS, Redux, and Jest unit testing, this suite of three powerful front-end applications was meticulously crafted to meet the specific needs of Starbucks, a prominent player in the food and beverage industry. Designed to enable store owners to efficiently manage their inventory levels across multiple geographic locations, these applications leverage the power of modern frontend development to provide a seamless and intuitive user experience and dynamic inventory management based on customer demand and occasion, this suite represents a significant step forward in the field of inventory management. By leveraging the power of ReactJS and other frontend technologies, Starbucks can now provide its store owners with an unprecedented level of control and visibility over their inventory, ensuring that they can always meet the needs of their customers, no matter where they are located.",
      image: Inventory,
      github: "",
      demo: "",
    },
    {
      title: "Typeform Survey Application ReactJS Clone",
      description:
        "This a ReactJS and Redux project that emulates the popular survey platform Typeform. It offers an intuitive and responsive user interface to create and analyze custom surveys, collect data and share results. It can be easily integrated with other technologies to suit a wide range of applications. With its modern frontend technologies, the Typeform Survey Application ReactJS Clone is an indispensable tool for businesses, marketers and researchers seeking valuable insights and data.",
      image: Typeform,
      github: "https://github.com/singhanuj620/typeform_clone",
      demo: "https://master--incomparable-otter-5378ec.netlify.app/",
    },
    // {
    //     title: 'URL Shortner with nodeJs and mongoDb',
    //     description: 'Web Application made with nodejs and mongoDb that shorts the full url and tracks the number of times it is clicked. It was a side project which was made in a hackathon that afterwards was made to use in college fest for more effective management like to track the popularity and engagement of the event hosted by students among the public. This project was suffient enough to make use of CRUD operations in the mongoDb via expressJs.',
    //     image: UrlShortner,
    //     github: 'https://github.com/singhanuj620/urlShortner',
    //     demo: '',
    // },
    {
      title: "Web Scrapping Project",
      description:
        "This project utilizes Cheerio and ExpressJS to scrape the freecodecamp website and present the extracted data in a user-friendly table format. By leveraging the power of web scraping and advanced backend frameworks, users can quickly access and analyze a wide range of data related to user profiles, course descriptions, and project details. With its intuitive design and sorting/filtering features, this project offers valuable insights and information that can be used to make informed decisions and strategies.",
      image: FreeCodeCamp,
      github: "https://github.com/singhanuj620/freecodecamp_scrap",
      demo: "",
    },
    {
      title: "Instagram Bot",
      description:
        "This bot was a fun project when the instagram algorithm was promoting the accounts that were highly engaging with other posts. With the help of this bot you can login into your instagram profile via chromium browser and for a provided hashtag this bot will go and like post on your behalf.",
      image: InstagramBot,
      github: "https://github.com/singhanuj620/Instagram_Bot",
      demo: "",
    },
  ],
  blogs: [
    {
      title: "JWT explained with project",
      url: "https://dev.to/singhanuj620/jwt-explained-with-project-37en",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Bpn-Mt0W--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k7bl3s7umm65659of2iw.jpg",
    },
    {
      title: "React Redux | Learn the redux easily with project",
      url: "https://dev.to/singhanuj620/react-redux-learn-the-redux-easily-with-project-aji",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6o_TkDzJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ndnzyl98cm6oui9vm8jx.png",
    },
    {
      title: "Mongoose Populate() in most simple way",
      url: "https://dev.to/singhanuj620/mongoose-populate-in-most-simple-way-how-to-import-a-collection-into-another-schema-in-mongodb-4nnf",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--shTyd8F7--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dwcj63fdldqgmvtptoga.png",
    },
    {
      title: "useReducer () | React Hook with project",
      url: "https://dev.to/singhanuj620/usereducer-react-hook-with-project-1pg",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--fFxTBYJJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ymvtsr1kbu17lcl61bbm.png",
    },
  ],
  skillsIcon: [
    {
      name: "Javascript",
      url: "https://img.icons8.com/color/240/000000/javascript--v1.png",
    },
    {
      name: "TypeScript",
      url: "https://img.icons8.com/color/144/000000/typescript.png",
    },
    {
      name: "ReactJS",
      url: "https://img.icons8.com/officel/80/000000/react.png",
    },
    {
      name: "Next.js",
      url: "https://img.icons8.com/fluency-systems-filled/144/000000/nextjs.png",
    },
    { name: "Redux", url: "https://img.icons8.com/color/48/null/redux.png" },
    {
      name: "NodeJS",
      url: "https://img.icons8.com/color/144/000000/nodejs.png",
    },
    {
      name: "Python",
      url: "https://img.icons8.com/color/144/000000/python--v1.png",
    },
    {
      name: "GEN AI",
      url: "https://img.icons8.com/color/144/000000/artificial-intelligence.png",
    },
    {
      name: "ChatGPT",
      url: "https://img.icons8.com/color/144/000000/chatgpt.png",
    },
    {
      name: "MongoDB",
      url: "https://img.icons8.com/color/144/000000/mongodb.png",
    },
    { name: "Git", url: "https://img.icons8.com/color/144/000000/git.png" },
  ],
};
