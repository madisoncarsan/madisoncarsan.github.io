/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Madison Heck",
  title: "Hey there, I'm Madison",
  subTitle: emoji(
    "A Product Manager who loves to create amazing things with amazing people."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15rZ3XcyX9yFLDMht1NC3cEFIMpROqgOY/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/madisoncarsan",
  linkedin: "https://www.linkedin.com/in/madisonheck",
  gmail: "madisoncarsan@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PRODUCT MANAGER WHO CAN CREATE VIBRANT CULTURES AND EXTRAORDINARY ORGANIZATIONS",
  skills: [
    emoji(
      "⚡ Build software products 0:1 and disrupt an industry, new or old"
    ),
    emoji("⚡ Coach, mentor, and empower people to help them grow and learn to the best of their ability"),
    emoji(
      "⚡ Manage P&L for any sized product vertical, identifying routes to sustainable user and revenue growth"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/cornell-logo.png"),
      subHeader: "Bachelors of Science in Communication",
      duration: "August 2013 - May 2017",
      desc: "Varsity Men's Soccer Captain"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Product Manager",
      company: "CollegeVine",
      companylogo: require("./assets/images/CV-logo.webp"),
      date: "March 2022 – Present",
      desc: "Manage our College product, where we are reinventing college recruiting",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Sr. Product Manager",
      company: "IBM",
      companylogo: require("./assets/images/IBM-logo.svg"),
      date: "August 2017 – March 2022",
      desc: "Managed product UI and machine learning teams for Watson Assistant"
    },
    {
      role: "Co-Founder and President",
      company: "Heck & Hollis Capital",
      companylogo: require("./assets/images/HH-logo1.png"),
      date: "August 2020 – Present",
      desc: "Own and operate real estate investment firm specializing in rehabbing and renting multi-family property"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects that I have had some fun with",
  projects: [
    {
      image: require("./assets/images/espn.png"),
      projectName: "ESPN Fantasy Football Programs",
      projectDesc: "Develop Python programs for advanced ESPN fantasy football analytics",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/madisoncarsan/fantasy-amateurs-00"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Surprised_Pikachu.png"),
      projectName: "Pokemon Hack",
      projectDesc: "Creating Pokemon Hack of FireRed to relive my childhood",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/madisoncarsan/pokemon_project"
        }
      ]
    },
    {
      image: require("./assets/images/sol.png"),
      projectName: "YoshCoin",
      projectDesc: "Created a token + NFTs on the Solana network for trading amongst friends",
      footerLink: [
        {
          name: "Solscan",
          url: "https://solscan.io/token/7pvmfggcaXWrja1TYWrsanMe2MDJe1MZt45r26vhGbQ3"
        }
        //  you can add extra buttons here.
      ]
    },
    

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: ("Achievements + Certifications"),
  subtitle:
    "Certifications and some other stuff that I am excited about",

  achievementsCards: [
    {
      title: "Cornell Winemaking Certification",
      subtitle:
        "Certified Winemaker after taking course through Cornell University in 2022",
      image: require("./assets/images/Wine.jpg"),
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        {
          name: "Course",
          url: "https://ecornell.cornell.edu/certificates/food-and-plant-science/winemaking/"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "12 IBM Certifications",
      subtitle:
        "IBM Certifications including Product Management, Python, Cloud Computing, and Machine Learning + AI",
      image: require("./assets/images/ibm-cert.png"),
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Google SEO Certification",
      subtitle: "SEO certification on general search algorithms, paid advertisements, and organic search",
      image: require("./assets/images/google-cert.png"),
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Interests",
  subtitle: emoji(
    "Things that I love!"
  ),

  talks: [
    {
      title: "Surfing + Sports",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Meditation + Spirituality",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Learning new things",
      subtitle: "Quantum physics, baking, beer brewing, anything!",
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],

  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📪"),
  subtitle:
    "Have a fun idea or just want to say hello? Reach out!",
  email_address: "madisoncarsan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
