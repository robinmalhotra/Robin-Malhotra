/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: true, // Change this to true if you want to use the splash screen.
    useCustomCursor: true, // Change this to false if you want the good'ol cursor
    googleTrackingID: "UA-174238252-2",
  };
  
  //Home Page
  const greeting = {
    title: "Hello 👋.",
    title2: "Robin Malhotra",
    logo_name: "robinmalhotra",
    nickname: "robin",
    full_name: "Robin Malhotra",
    subTitle: "Senior Software Engineer, Building large scale solutions (B2C, B2B, SaaS) with domains like E-commerce, Finances, Ride-hailing platforms with high adoption rate that can withstand high volumes of traffic. 🔥",
    resumeLink:
      "https://docs.google.com/document/d/1B4aCenUUtTg0HNbh05C5m20kzwNp47IqfhngQ3FiMSQ/edit?usp=sharing",
    mail: "mailto:68.robinmalhotra@gmail.com",
  };
  
  const socialMediaLinks = {
    /* Your Social Media Link */
    github: "https://github.com/robinmalhotra",
    linkedin: "https://www.linkedin.com/in/robinmalhotra68/",
    gmail: "68.robinmalhotra@gmail.com",
    gitlab: "https://gitlab.com/robinmalhotra",
  };
  
  const skills = {
    data: [
      {
        title: "Senior Software Engineer",
        fileName: "FullStackImg",
        skills: [
          "⚡ Spearheaded the development of microservices for large scale E-commerce, Financial, Security modules in Node.js/TypeScript, GraphQL, Kafka, and REST, handling over 3 million transactions monthly, reducing TAT from 3 days to 1-27 minutes.",
          "⚡ Led the team of 10 for modernization of a monolithic system to microservices architecture, leveraging Node.js, React.js, Vue.js, Kafka, Docker, and Kubernetes, improving responsiveness by 41% and reducing API call latency by 53%.",
          "⚡ Engineered a high-performance customized API Gateway using Apollo, GraphQL, Schema Stitching, incorporating features like Rate Limiting and Circuit Breaker, reducing latency by 67% for over 9 million daily hits.",
          "⚡ Replaced legacy background jobs for a major application by implementing Message Queues (kafka), ironed out several tightly coupled dependencies and reduced the syncing time from 4 hours to 30 minutes.",
          "⚡ Conducted multitude of Code Reviews, participated in design discussions and got selected into Company’s Architecture Council for major tech ecosystem changes.",
          "⚡ Designed and documented a secure single-sign-on (SSO) system using Google Auth and Passkey, which will enhance user authentication security by 40% and reduce login-related helpdesk tickets by 25%. ",
          "⚡ Revamped the Payments infrastructure from legacy RubyOnRails monolith to Node.js and Vue.js based microservices, and incorporated different refund mechanisms, increasing user adoption from 5% to 93%. ",
          "⚡ Integrated refund algorithms across payment modes (e.g., Debit Card, Credit Card, Cash) and Payment Gateways (e.g. PayU, Cashfree, GooglePay), increased the transaction rate from $50K to $300K-$1M monthly refunds.",
          "⚡ Championed robust testing practices using Mocha, Jest, and Chai within the CI/CD pipeline for critical microservices in supply chain and payments, achieving 100% code coverage.",
          "⚡ Introduced Wiki.js for seamless documentation and streamlined the local setup of internal applications, decreasing the setup time from 1 week to 2 days. Eventually put the setup on Docker container reducing the efforts further to 2-3 hours.",
          "⚡ Initiated a culture of giving Tech-talks and delivered the talks on Typescript concepts and Node.js advanced concepts. Collaborated with Program Manager and Leadership to have it as one of our KRA and KPIs.",

        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#FFFFFF",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "simple-icons:node-dot-js",
            style: {
              color: "#339933",
            },
          },
          {
            skillName: "NPM",
            fontAwesomeClassname: "simple-icons:npm",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#439743",
            },
          },
          {
            skillName: "GraphQL",
            fontAwesomeClassname: "simple-icons:graphql",
            style: {
              color: "#DE33A6",
            },
          },
          {
            skillName: "Android",
            fontAwesomeClassname: "simple-icons:android",
            style: {
              color: "#3DDC84",
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "simple-icons:java",
            style: {
              color: "#f89820",
            },
          },
          {
            skillName: "MySQL",
            fontAwesomeClassname: "simple-icons:mysql",
            style: {
              color: "#4479A1",
            },
          },
          {
            skillName: "Apache",
            fontAwesomeClassname: "simple-icons:apache",
            style: {
              color: "#CA1A22",
            },
          },
          {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: {
              color: "#E94E32",
            },
          },
        ],
      },
      {
        title: "Software Engineer",
        fileName: "FrontendDevImg",
        skills: [
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
          "⚡ Building responsive website front end using ReactJS",
          "⚡ Developing mobile applications using Flutter and Android",
          "⚡ Creating application backend in Node, Express & Flask",
          "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#FFFFFF",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "simple-icons:node-dot-js",
            style: {
              color: "#339933",
            },
          },
          {
            skillName: "NPM",
            fontAwesomeClassname: "simple-icons:npm",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#439743",
            },
          },
          {
            skillName: "GraphQL",
            fontAwesomeClassname: "simple-icons:graphql",
            style: {
              color: "#DE33A6",
            },
          },
          {
            skillName: "Android",
            fontAwesomeClassname: "simple-icons:android",
            style: {
              color: "#3DDC84",
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "simple-icons:java",
            style: {
              color: "#f89820",
            },
          },
          {
            skillName: "MySQL",
            fontAwesomeClassname: "simple-icons:mysql",
            style: {
              color: "#4479A1",
            },
          },
          {
            skillName: "Apache",
            fontAwesomeClassname: "simple-icons:apache",
            style: {
              color: "#CA1A22",
            },
          },
          {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: {
              color: "#E94E32",
            },
          },
        ],
      },
      {
        title: "Cloud Architecture",
        fileName: "CloudInfraImg",
        skills: [
          "⚡ Experience working on multiple cloud platforms",
          "⚡ Experience hosting and managing websites",
          "⚡ Experience with Continuous Integration",
        ],
        softwareSkills: [
          {
            skillName: "AWS",
            fontAwesomeClassname: "simple-icons:amazonaws",
            style: {
              color: "#FF9900",
            },
          },
          {
            skillName: "Netlify",
            fontAwesomeClassname: "simple-icons:netlify",
            style: {
              color: "#38AFBB",
            },
          },
          {
            skillName: "Heroku",
            fontAwesomeClassname: "simple-icons:heroku",
            style: {
              color: "#6863A6",
            },
          },
          {
            skillName: "Firebase",
            fontAwesomeClassname: "simple-icons:firebase",
            style: {
              color: "#FFCA28",
            },
          },
          {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "simple-icons:postgresql",
            style: {
              color: "#336791",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#47A248",
            },
          },
          {
            skillName: "Docker",
            fontAwesomeClassname: "simple-icons:docker",
            style: {
              color: "#1488C6",
            },
          },
          {
            skillName: "GitHub Actions",
            fontAwesomeClassname: "simple-icons:githubactions",
            style: {
              color: "#5b77ef",
            },
          },
        ],
      },
    ],
  };

  const work_ex = {
    data: [
      {
        title: "CaraLane, A Ta",
        fileName: "FullStackImg",
        skills: [
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
          "⚡ Building responsive website front end using ReactJS",
          "⚡ Developing mobile applications using Flutter and Android",
          "⚡ Creating application backend in Node, Express & Flask",
          "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#FFFFFF",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "simple-icons:node-dot-js",
            style: {
              color: "#339933",
            },
          },
          {
            skillName: "NPM",
            fontAwesomeClassname: "simple-icons:npm",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#439743",
            },
          },
          {
            skillName: "GraphQL",
            fontAwesomeClassname: "simple-icons:graphql",
            style: {
              color: "#DE33A6",
            },
          },
          {
            skillName: "Android",
            fontAwesomeClassname: "simple-icons:android",
            style: {
              color: "#3DDC84",
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "simple-icons:java",
            style: {
              color: "#f89820",
            },
          },
          {
            skillName: "MySQL",
            fontAwesomeClassname: "simple-icons:mysql",
            style: {
              color: "#4479A1",
            },
          },
          {
            skillName: "Apache",
            fontAwesomeClassname: "simple-icons:apache",
            style: {
              color: "#CA1A22",
            },
          },
          {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: {
              color: "#E94E32",
            },
          },
        ],
      },
      {
        title: "Frontend Development",
        fileName: "FrontendDevImg",
        skills: [
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
          "⚡ Building responsive website front end using ReactJS",
          "⚡ Developing mobile applications using Flutter and Android",
          "⚡ Creating application backend in Node, Express & Flask",
          "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#FFFFFF",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "simple-icons:node-dot-js",
            style: {
              color: "#339933",
            },
          },
          {
            skillName: "NPM",
            fontAwesomeClassname: "simple-icons:npm",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#439743",
            },
          },
          {
            skillName: "GraphQL",
            fontAwesomeClassname: "simple-icons:graphql",
            style: {
              color: "#DE33A6",
            },
          },
          {
            skillName: "Android",
            fontAwesomeClassname: "simple-icons:android",
            style: {
              color: "#3DDC84",
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "simple-icons:java",
            style: {
              color: "#f89820",
            },
          },
          {
            skillName: "MySQL",
            fontAwesomeClassname: "simple-icons:mysql",
            style: {
              color: "#4479A1",
            },
          },
          {
            skillName: "Apache",
            fontAwesomeClassname: "simple-icons:apache",
            style: {
              color: "#CA1A22",
            },
          },
          {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: {
              color: "#E94E32",
            },
          },
        ],
      },
      {
        title: "Cloud Architecture",
        fileName: "CloudInfraImg",
        skills: [
          "⚡ Experience working on multiple cloud platforms",
          "⚡ Experience hosting and managing websites",
          "⚡ Experience with Continuous Integration",
        ],
        softwareSkills: [
          {
            skillName: "AWS",
            fontAwesomeClassname: "simple-icons:amazonaws",
            style: {
              color: "#FF9900",
            },
          },
          {
            skillName: "Netlify",
            fontAwesomeClassname: "simple-icons:netlify",
            style: {
              color: "#38AFBB",
            },
          },
          {
            skillName: "Heroku",
            fontAwesomeClassname: "simple-icons:heroku",
            style: {
              color: "#6863A6",
            },
          },
          {
            skillName: "Firebase",
            fontAwesomeClassname: "simple-icons:firebase",
            style: {
              color: "#FFCA28",
            },
          },
          {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "simple-icons:postgresql",
            style: {
              color: "#336791",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#47A248",
            },
          },
          {
            skillName: "Docker",
            fontAwesomeClassname: "simple-icons:docker",
            style: {
              color: "#1488C6",
            },
          },
          {
            skillName: "GitHub Actions",
            fontAwesomeClassname: "simple-icons:githubactions",
            style: {
              color: "#5b77ef",
            },
          },
        ],
      },
    ],
  };
  
  const degrees = {
    degrees: [
      {
        title: "Punjabi University",
        subtitle: "Master in Technology | Computer Science Engineering",
        logo_path: "punjabiuni.png",
        alt_name: "SSEC",
        duration: "2021 - 2024",
        descriptions: [
          "⚡ Majors in Image Processing: Image denoising, Image enhancement, Object detection, Image compression, Fourier Transformations. ",
          "⚡ Research in Image Enhancement of SAR images using Histogram Equalization with Sigmoid Function and Cosine Transformation. Used the Baysian technique as a pre and post-filtration mechanism to find which gives the best results."
        ],
        website_link: "http://www.punjabiuniversity.ac.in/",
      },
      {
        title: "Punjab Technical University",
        subtitle: "Bachelor in Technology | Computer Science Engineering",
        logo_path: "ptu.png",
        alt_name: "SSGC",
        duration: "2018 - 2021",
        descriptions: [
          "⚡ Studied Computer Networks, Computer Architecture, Operating Systems, Compiler Design, Theory of Computation, Digital Circuits and many more...",
          "⚡ Projects: Student Management System (Android, JAVA)",
        ],
        website_link: "https://ptu.ac.in/",
      },
    ],
  };
  
  const certifications = {
    certifications: [
      {
        title: "M0001: MongoDB Basics",
        subtitle: "MongoDB University",
        logo_path: "mongo.png",
        certificate_link:
          "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
        alt_name: "MongoDB University",
        // color_code: "#2AAFED",
        color_code: "#47A048",
      },
      {
        title: "Hackathon",
        subtitle: "Hack The Mountains",
        logo_path: "hackathon1.svg",
        certificate_link:
          "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
        alt_name: "hackathon",
        color_code: "#E2405F",
      },
      {
        title: "A300: Atlas Security",
        subtitle: "MongoDB University",
        logo_path: "mongo.png",
        certificate_link:
          "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
        alt_name: "MongoDB University",
        // color_code: "#F6B808",
        color_code: "#47A048",
      },
      {
        title: "Cyber Security & Cyber Forensics",
        subtitle: "Workshop at IIT Bombay",
        logo_path: "iit.png",
        certificate_link:
          "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
        alt_name: "Workshop",
        color_code: "#2AAFED",
      },
      {
        title: "MLH Local Hack Day: Build",
        subtitle: "Major League Hacking",
        logo_path: "mlh-logo.svg",
        certificate_link:
          "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
        alt_name: "Google",
        color_code: "#fe0037",
      },
      {
        title: "Hack20",
        subtitle: "Flutter International Hackathon",
        logo_path: "flutter.png",
        certificate_link:
          "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
        alt_name: "Flutter International Hackathon",
        color_code: "#2AAFED",
      },
      {
        title: "Postman Student Expert",
        subtitle: "Postman",
        logo_path: "postman.png",
        certificate_link:
          "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
        alt_name: "Postman",
        // color_code: "#f36c3d",
        color_code: "#fffbf3",
      },
      // color_code: "#8C151599",
      // color_code: "#7A7A7A",
      // color_code: "#0C9D5899",
      // color_code: "#C5E2EE",
      // color_code: "#ffc475",
      // color_code: "#g",
      // color_code: "#ffbfae",
      // color_code: "#fffbf3",
      // color_code: "#b190b0",
    ],
  };
  
  // Experience Page
  const experience = {
    title: "Experience",
    subtitleList: [`I have single-handedly developed and maintained large scale applications (B2C, B2B, SaaS) 
      with domains like E-commerce, Finances, Ride-hailing platforms with high adoption rate that can withstand 
      high volumes of traffic amounting to 3 million transactions monthly`,
      `I happen to be a tech-agnostic person who learnt technologies like Node.js, React.js, Ruby, Rails, Javascript, Typescript, Android, Java in a very short span of time and showed immediate results with the code that adhered to industry standards. And, I keep learning and mastering more.`,
      `I am committed to writing highly optimized code and am dedicated to continuous learning and improvement. My passion lies in developing scalable, efficient products that meet real-world needs and achieve widespread adoption.`,
    ],
    subtitle: ``,
    description:
      "I am a seasoned Software Engineer specializing in developing and modernizing large-scale systems using Node.js, TypeScript, React.js, Vue.js, Kafka, and Kubernetes. I have led teams to transform monolithic architectures into microservices, significantly improving system responsiveness and reducing latency. My expertise includes creating high-performance API Gateways, enhancing payment infrastructures, and implementing secure single-sign-on systems. Passionate about knowledge sharing, I have initiated Tech-talks and contributed to major architectural decisions, ensuring efficient and scalable solutions.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work Experience",
        experiences: [
          {
            title: "Senior Software Engineer",
            company: "CaratLane: A Tanishq Partnership (Titan and TATA subsidiary)",
            company_url: "https://www.caratlane.com/",
            logo_path: "caratlane.png",
            duration: "June 2019 - April 2024",
            location: "New Delhi, India",
            description: `As an SDE intern, my priorities include learning opportunities and professional development. Aiming for Backend Development proficiency.`,
            skillsList: [
              "• Spearheaded the development of microservices for large scale E-commerce, Financial, Security modules in Node.js/TypeScript, GraphQL, Kafka, and REST, handling over 3 million transactions monthly, reducing TAT from 3 days to 1-27 minutes.",
              "• Led the team of 10 for modernization of a monolithic system to microservices architecture, leveraging Node.js, React.js, Vue.js, Kafka, Docker, and Kubernetes, improving responsiveness by 41% and reducing API call latency by 53%.",
              "• Engineered a high-performance customized API Gateway using Apollo, GraphQL, Schema Stitching, incorporating features like Rate Limiting and Circuit Breaker, reducing latency by 67% for over 9 million daily hits.",
              "• Replaced legacy background jobs for a major application by implementing Message Queues (kafka), ironed out several tightly coupled dependencies and reduced the syncing time from 4 hours to 30 minutes.",
              "• Conducted multitude of Code Reviews, participated in design discussions and got selected into Company’s Architecture Council for major tech ecosystem changes.",
              "• Designed and documented a secure single-sign-on (SSO) system using Google Auth and Passkey, which will enhance user authentication security by 40% and reduce login-related helpdesk tickets by 25%. ",
              "• Revamped the Payments infrastructure from legacy RubyOnRails monolith to Node.js and Vue.js based microservices, and incorporated different refund mechanisms, increasing user adoption from 5% to 93%. ",
              "• Integrated refund algorithms across payment modes (e.g., Debit Card, Credit Card, Cash) and Payment Gateways (e.g. PayU, Cashfree, GooglePay), increased the transaction rate from $50K to $300K-$1M monthly refunds.",
              "• Championed robust testing practices using Mocha, Jest, and Chai within the CI/CD pipeline for critical microservices in supply chain and payments, achieving 100% code coverage.",
              "• Introduced Wiki.js for seamless documentation and streamlined the local setup of internal applications, decreasing the setup time from 1 week to 2 days. Eventually put the setup on Docker container reducing the efforts further to 2-3 hours.",
              "• Initiated a culture of giving Tech-talks and delivered the talks on Typescript concepts and Node.js advanced concepts. Collaborated with Program Manager and Leadership to have it as one of our KRA and KPIs.",
            ],
            color: "#0071C5",
          },
          {
            title: "Software Engineer",
            company: "Jugnoo/Jungleworks",
            company_url: "https://www.jugnoo.in/",
            logo_path: "jugnoo.png",
            duration: "August 2019 - June 2021",
            location: "Chandigarh, India",
            description: ``,
            skillsList: [
              "• Single handedly developed SaaS based Bike Rental(Smartbike) platform using Node.js, MySQL, REST APIs which handled route optimisation, fare calculation, heatmaps and got adopted in 13+ countries (25 cities).",
              "• Enabled efficient communication for IOT-based locks through Sockets and REST APIs, boosted adoption from 10K-20K rides to 150k-200k weekly rides.",
              "• Wrote Database migration scripts for forking SaaS white-labeled projects, reducing forking time from 1 week to 7-10 hours.",
              "• Streamlined SMS gateway integration with Twilio by implementing a Plug-and-Play mechanism slashing dev-time (3d to 30 mins).",
              "• Orchestrated the development of an ACL microservice using Node.js, TypeScript, and MySQL. Enabled new admin roles and permissions with minimal code changes, improving maintainability by 77%.",
              "• Collaborated with the Product team to develop client features for a Ride-Hailing platform and managed integrations for 15+ payment gateways, including Stripe, Google Pay, and Apple Pay, ensuring seamless transactions.",
              "• Devised Heat-map algorithms for traffic-based UI on rental bike stations, enhancing ride booking transparency.",
              "• Converted Backend of Delivery based application from Node.js/Javascript to Nest.js/Typescript and introduced a clean coding standard reducing development time by 37%.",
            ],
            color: "#0071C5",
          },
          {
            title: "Software Engineer Intern",
            company: "ClickLabs",
            company_url: "https://clicklabs.co/",
            logo_path: "clicklabs.png",
            duration: "February 2019 - August 2019",
            location: "Chandigarh, India",
            description: ``,
            skillsList: [
              "• Created a seamless white-label mechanism for Android application that reduced the whitelabel efforts from 3 days to 1 day.",
              "• Implemented IOT device bluetooth integration with Android using Bluetooth Low Energy module.",
              "• Integrated GoogleAPIs and Firebase  in Jugnoo Android Applications and optimized the App latency by 50%.",
              "• Fixed legacy issues in Android App and collaborated with Product team to implement client’s features.",
            ],
            color: "#ee3c26",
          },
        ],
      },
    ],
  };
  
  // Projects Page
  const projectsHeader = {
    title: "Projects",
    description:
      "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
    avatar_image_path: "projects_image.svg",
  };
  
  // Contact Page
  const contactPageData = {
    contactSection: {
      title: "Contact Me",
      profile_image_path: "robinmalhotra_profile_contact.png",
      description:
        "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
    },
    blogSection: {
      title: "Blogs",
      subtitle:
        "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
      link: "https://twitter.com/robinmalhotra",
      avatar_image_path: "blogs_image.svg",
    },
  };
  
  const projects = {
    data: [
      {
        id: "0",
        name: "Keep Calm and Carry On",
        url: "https://github.com/robinmalhotra/Keep-Calm-and-Carry-On.github.io",
        description:
          "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Augmented Reality",
            iconifyClass: "bi:badge-ar",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Keep-Calm-and-Carry-On.github.io",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/keep-calm-and-carry-on",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
          {
            name: "Live Demo",
            url:
              "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "1",
        name: "YOG4LIFE SOCIAL APP",
        url: "https://github.com/kevalvavaliya/Yog4Life",
        description:
          "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
        languages: [
          {
            name: "Flutter",
            iconifyClass: "logos-flutter",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/kevalvavaliya/Yog4Life",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devfolio",
            url: "https://devfolio.co/projects/yoglife-b20d",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
        ],
      },
      {
        id: "2",
        name: "Adoptisity",
        url: "https://github.com/kevalvavaliya/Adoptisity",
        description:
          "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "Wix",
            iconifyClass: "bxl:wix",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Adoptisity",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/adoptisity",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
          {
            name: "Live Demo",
            url: "https://rajmahadevwala1.wixsite.com/adoptisity",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "3",
        name: "FinSplit",
        url: "https://github.com/rajmahadev8/Fin-Split",
        description:
          "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
        languages: [
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/rajmahadev8/Fin-Split",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/finsplit",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
        ],
      },
      {
        id: "4",
        name: "Emosic",
        url: "https://github.com/kevalvavaliya/Emosic",
        description:
          "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/kevalvavaliya/Emosic",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/emosic",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
        ],
      },
      {
        id: "5",
        name: "Fileblok",
        url: "https://github.com/robinmalhotra/Fileblok",
        description:
          "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
        languages: [
          {
            name: "Flutter",
            iconifyClass: "logos-flutter",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Storyblok",
            iconifyClass: "logos-storyblok-icon",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Fileblok",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/software/fileblok",
            iconifyClass: "fluent:window-dev-edit-20-filled",
          },
        ],
      },
      {
        id: "6",
        name: "BAUDDIK-GEEKS PORTFOLIO",
        url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
        description:
          "Awesome Community Portfolio website for Bauddhik-Geeks community",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Live Demo",
            url: "https://bauddhikgeeks.co/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "7",
        name: "Votechain",
        url: "https://github.com/abhigoyani/votechain",
        description:
          "Awesome Community Portfolio website for Bauddhik-Geeks community",
        languages: [
          {
            name: "Flask",
            iconifyClass: "logos-flask",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "MongoDB",
            iconifyClass: "logos-mongodb-icon",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/abhigoyani/votechain",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "8",
        name: "Swag Store",
        url: "https://github.com/robinmalhotra/e-commerce-frontend",
        description:
          "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
        languages: [
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "MedusaJS",
            iconifyClass: "logos-medusa-icon",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/e-commerce-frontend",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "9",
        name: "node-blockchain",
        url: "https://github.com/robinmalhotra/node-blockchain",
        description:
          "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
        languages: [
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/node-blockchain",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "10",
        name: "Know Me Well",
        url: "https://github.com/robinmalhotra/personal-portfolio",
        description:
          "A simple command line interface based quiz app to know more about me :).",
        languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Repl.it",
            iconifyClass: "logos-replit-icon",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/personal-portfolio",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "11",
        name: "Bloggify",
        url: "https://github.com/robinmalhotra/Bloggify",
        description: "A Simple REST API for Blog Application.",
        languages: [
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Bloggify",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "12",
        name: "Stargazzers",
        url: "https://github.com/robinmalhotra/stargazers",
        description: "An Unofficial API for GitHub Repo Stars Count",
        languages: [
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/stargazers",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "13",
        name: "GitHub Theme Portfolio",
        url: "https://github.com/robinmalhotra/robinmalhotra.github.io",
        description:
          "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "SCSS",
            iconifyClass: "vscode-icons:file-type-scss2",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/robinmalhotra.github.io",
            iconifyClass: "ri:github-fill",
          },
          {
            name: "Live Demo",
            url: "https://robinmalhotra.github.io/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      // {
      //   id: "6",
      //   name: "Automate Attendace",
      //   url: "https://github.com/robinmalhotra/Node_Python",
      //   description: "Automation of Online Attendance using node js and python",
      //   languages: [
      //     {
      //       name: "JavaScript",
      //       iconifyClass: "logos-javascript",
      //     },
      //     {
      //       name: "Python",
      //       iconifyClass: "logos-python",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      // {
      //   id: "7",
      //   name: "Automate Discord Bot",
      //   url: "https://github.com/robinmalhotra/AutomateDiscordBot",
      //   description:
      //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
      //   languages: [
      //     {
      //       name: "Python",
      //       iconifyClass: "logos-python",
      //     },
      //     {
      //       name: "Python Selenium",
      //       iconifyClass: "logos-selenium",
      //     },
      //     {
      //       name: "Chromium Browser",
      //       iconifyClass: "openmoji-chromium",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      // {
      //   id: "8",
      //   name: "Flask Blog",
      //   url: "https://github.com/robinmalhotra/flask_blog",
      //   description: "A Simple Blog Web Application made using Flask Framework",
      //   languages: [
      //     {
      //       name: "Python",
      //       iconifyClass: "logos-python",
      //     },
      //     {
      //       name: "Flask",
      //       iconifyClass: "cib-flask",
      //     },
      //     {
      //       name: "HTML5",
      //       iconifyClass: "vscode-icons:file-type-html",
      //     },
      //     {
      //       name: "CSS3",
      //       iconifyClass: "vscode-icons:file-type-css",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      // {
      //   id: "9",
      //   name: "Netflix top series",
      //   url: "https://github.com/robinmalhotra/netflix-top-series",
      //   description: "List of Top Netflix Series which is deployed to vercel.",
      //   languages: [
      //     {
      //       name: "JavaScript",
      //       iconifyClass: "logos-javascript",
      //     },
      //     {
      //       name: "ReactJS",
      //       iconifyClass: "logos-react",
      //     },
      //     {
      //       name: "HTML5",
      //       iconifyClass: "logos-html-5",
      //     },
      //     {
      //       name: "CSS3",
      //       iconifyClass: "logos-css-3",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      {
        id: "10",
        name: "COVID-19 Tracker",
        url: "https://github.com/robinmalhotra/Covid19TrackerReact",
        description:
          "Simple Covid-19 Tracker made using React and deployed to Vercel.",
        languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/robinmalhotra/Covid19TrackerReact",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      // {
      //   id: "11",
      //   name: "Food Order Static Website",
      //   url: "https://github.com/robinmalhotra/food-order-website",
      //   description:
      //     "A simple static website related to food restaurants service. this is reasponsive as well.",
      //   languages: [
      //     {
      //       name: "HTML5",
      //       iconifyClass: "logos-html-5",
      //     },
      //     {
      //       name: "CSS3",
      //       iconifyClass: "logos-css-3",
      //     },
      //     {
      //       name: "JavaScript",
      //       iconifyClass: "logos-javascript",
      //     },
      //     {
      //       name: "PHP",
      //       iconifyClass: "logos-php",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //     {
      //       name: "Devfolio",
      //       url: "",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
      // {
      //   id: "12",
      //   name: "NFT Launchpad",
      //   url: "https://deliquescent-cents.000webhostapp.com/",
      //   description: "NFT Launchpad crypto site portfolio",
      //   languages: [
      //     {
      //       name: "HTML5",
      //       iconifyClass: "logos-html-5",
      //     },
      //     {
      //       name: "CSS3",
      //       iconifyClass: "logos-css-3",
      //     },
      //     {
      //       name: "JavaScript",
      //       iconifyClass: "logos-javascript",
      //     },
      //     {
      //       name: "ReactJS",
      //       iconifyClass: "logos-react",
      //     },
      //   ],
      //   links: [
      //     {
      //       name: "Github",
      //       url: "https://github.com/robinmalhotra/nft-launchpad",
      //       iconifyClass: "ri:github-fill",
      //     },
      //   ],
      // },
    ],
  };
  
  export {
    settings,
    greeting,
    socialMediaLinks,
    skills,
    degrees,
    certifications,
    experience,
    projectsHeader,
    contactPageData,
    projects,
  };
  