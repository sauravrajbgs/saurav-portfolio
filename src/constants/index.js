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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: " Mernstack Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Octanet PVT LTD",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2024 - September 2024",
      points: [
        "Skilled in creating responsive, mobile-first websites using HTML and CSS frameworks like Bootstrap or custom CSS, ensuring that web pages look and function well on all devices.",
        "Proficient in JavaScript and React for building interactive, dynamic user interfaces with smooth transitions, state management, and optimized performance.",
        "Expertise in React’s component-based architecture, allowing for reusable and modular code that simplifies development and enhances maintainability.",
        
      ],
    },
    {
      title: "Mernstack Developer",
      company_name: "Code Vertex",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: " september2024- December 2022",
      points: [
        "Proficient in building complete web applications from scratch, handling both front-end (React) and back-end (Node.js, Express.js) development, ensuring seamless communication between client and server.",
        "Skilled in MongoDB for managing and manipulating large sets of unstructured data, with a strong understanding of, schema design, and aggregation frameworks.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Currently Enrolled ",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - oct2024",
      points: [
        "Proficient in using advanced data structures (e.g., trees, graphs, heaps) and algorithms (e.g., sorting, searching, dynamic programming) to solve complex problems with optimal time and space complexity.",
        "Skilled in C++ for writing high-performance code, utilizing features like memory management (pointers, dynamic allocation), STL (Standard Template Library), and low-level system access to enhance execution speed and resource efficiency.",
        "Experienced in applying DSA and C++ skills in competitive programming environments, capable of quickly devising and implementing solutions under time constraints.",
        
      ],
    },
    {
      title: "Matlab",
      company_name: "Currently Doing",
      icon: meta,
      iconBg: "#E6DEDD",
      date: " Present doing",
      points: [
        "Proficient in MATLAB's core functionality of matrix manipulation and numerical computations, making it ideal for solving complex mathematical problems, simulations, and engineering applications.",

        "Capable of automating repetitive tasks and developing scripts in MATLAB, improving workflow efficiency, and enabling rapid prototyping and testing of various algorithms and models.",
        "Expertise in using MATLAB’s Simulink and other toolboxes for modeling, simulating, and analyzing dynamic systems, applicable in fields like control systems, robotics, and communication systems.",
    
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hospital Management website",
      description:
        "A Hospital Management Website is a comprehensive platform designed to streamline hospital operations and improve patient care",
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
      source_code_link: "https://sauravrajbgs.github.io/onlinehospital-website/",
    },
    {
      name: "Food Delivery Website",
      description:
        "Developed a responsive and intuitive frontend using React, allowing users to easily browse menus, select items, and place orders with a seamless user experience across devices..",
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
      source_code_link: "https://github.com/sauravrajbgs",
    },
    {
      name: "Portfolio",
      description:
        "Highlighted your expertise in web development, including detailed sections for your skills, technologies, and projects, making it easy for potential employers or clients to understand your capabilities.",
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
      source_code_link: "https://github.com/sauravrajbgs",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };