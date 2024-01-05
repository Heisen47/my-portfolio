import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    aws,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    informatica,
    sql,
    capgemini,
    GEAerospace,
    carrent,
    jobit,
    tripguide,
    IFS,
    portfolio,
    newsApp,
    chatapp,
    weather,
    memoryCard,
    video
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "SQL developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "IFS",
      icon: IFS,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "informatica",
      icon: informatica,
    },
    {
      name: "Oracle sql",
      icon: sql,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Capgemini Internal",
      icon: capgemini,
      iconBg: "#383E56",
      date: "August 2021 - November 2021",
      points: [
        "Developing and maintaining web applications using HTML , CSS ,js , php , apache tomcat and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "A functional prototype was built with deployment yet to be done , The project was stalled due to unforeseen circumstances",
        "This is where my love and passion for web development began, this also sparked my curiosity"
        ,
      ],
    },
    {
      title: "Technical Consultant",
      company_name: "GE Aerospace",
      icon: GEAerospace,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Ongoing",
      points: [
        "Contracted from Capgemini to GE , to handle, maintain and enhance their military applications",
        "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
        "Working with technologies including Oracle SQL , ETL (informatica) , IFS App 8 , Unix , Service Now , github , git , SOAP API  ",
        "Maintaining and Enhancing the technologies used in the web App",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I wanted to send a note of appreciation for all your extra efforts the pat few weeks. I know the team has encountered serveral roadblocks, I appreciate your determination and collaboration in resolving the issues. Thank you for also working during holiday to ensure the process is complete",
      name: "Kieu Nguyen",
      designation: "Senior Director",
      company: "GE Aerospace",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I'm writing to recognize the good work Saptarshi(Rishi) is doing for the team. I just need to you know we appreciate his efforts in helping other team members. He brings great technical skills and understanding of the GE environment. In addition , always meets or exceeds expectations. I'm glad to have Saptarshi working with us . I wanted to let everyone know his work is greatly appreciated",
      name: "Neha Suman",
      designation: "Staff Technical product manager",
      company: "GE Aerospace",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    
  ];
  
  const BeginnerProjects = [
    {
      name: "A Portfolio website",
      description:
        "Using React , Three.js ,Email.js  made a complete single page application for being my portfolio and repository of all my works till date",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Heisen47/3d_portfolio",
    },
    {
      name: "News App",
      description:
        "Web application that enables users to fetch the latest news, view the articles, and categorically do a infinite scroll with the smooth react experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: newsApp,
      source_code_link: "https://github.com/Heisen47/NewsApp",
    },
    {
      name: "Realtime Chat App",
      description:
        "A realtime chat app built with react , firebase authentication and firestore a NO-SQL db which can give realtime result.",
      tags: [
        {
          name: "FIrebase",
          color: "blue-text-gradient",
        },
        {
          name: "React JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Heisen47/ChatApp-React",
    },
  ];
  const WorkingOnProjects = [
    {
      name: "React Video Chat App",
      description:
        "A interactive and functional video chat app which will use the DOM camera API to open camera and have an end to end communication with user",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "WebRTC",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: video,
      source_code_link: "https://github.com/Heisen47/react-weather-app",
    },
    // {
    //   name: "React Memory Card Game",
    //   description:
    //     "This will be a fun memory card game based on react components which will have a scorecard ,count the score until game ends",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //   ],
    //   image: memoryCard,
    //   source_code_link: "https://github.com/",
    // },
  ];
  const PlanToWorkOnProjects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, BeginnerProjects , WorkingOnProjects , PlanToWorkOnProjects };