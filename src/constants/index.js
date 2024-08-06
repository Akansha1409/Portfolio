 import project1 from "../assets/projects/project1.png";
 import project2 from "../assets/projects/project2.png";
 import project3 from "../assets/projects/project3.png";
 import project4 from "../assets/projects/project4.png";
 import project5 from "../assets/projects/project5.png";
 import project6 from "../assets/projects/project6.png";
 import frontendImg from "../components/frontendImg.png"
 import mernImg from "../components/mernImg.png"
 import programmerImg from "../components/programmerImg.png"


export const HERO_CONTENT = `I am a skilled MERN Stack Developer and Java Developer with a strong passion for programming. With extensive experience in building dynamic and responsive web applications, I am always eager to learn new technologies and improve my skill set. My enthusiasm for coding drives me to explore innovative solutions and stay updated with the latest industry trends. I thrive in collaborative environments and enjoy tackling challenging projects that push the boundaries of my knowledge.`;

export const ABOUT_TEXT = [
  {
    title:"Frontend Developer",
    image:frontendImg,
    description:'I am a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React.js, specializing in creating responsive, user-friendly interfaces. I have a strong background in utilizing Tailwind CSS for efficient UI development. My experience includes developing single-page applications, implementing interactive features,optimizing performance and I am proficient in version control with Git and GitHub'
  },
  {
    title:"MERN Stack Developer",
    image:mernImg,
    description:'I am a dedicated MERN stack developer with expertise in building and maintaining web applications using MongoDB, Express.js, React.js, and Node.js. I design scalable database schemas, create efficient backend services, and develop dynamic user interfaces. My experience includes building e-commerce platforms, and interactive single-page applications and I am proficient in version control with Git.'
  },
  {
    title:"Programmer",
    image:programmerImg,
    description:'I am a skilled programmer with a strong focus on Java, where I build reliable and efficient software. I also know C, which helps me write fast, low-level code. Additionally, I have basic knowledge of C++ and Python, allowing me to work with different programming styles and tools. My varied skills help me solve many types of technical problems effectively.'
  }
]


export const PROJECTS = [
  {
    title: "Real-time Tracker",
    image: project1,
    description:
      "This project is a real-time geolocation tracker allowing multiple users to share their locations in real-time on an interactive map.",
    technologies: ["React", "Node.js","Express","Socket.io","Leaflet"],
       SourceCode: "https://github.com/Akansha1409/tracker",
    liveProject: "https://tracker-tzl5.onrender.com/"
  },
  {
    title: "Password Manager",
    image: project2,
    description:
      "A web application that allows users to securely store and manage their passwords with the features such as adding, viewing, editing, and deleting passwords.",
    technologies: ["React", "Tailwind CSS","Node.js", "Express","MongoDB","UUID", "React-Toastify"],
       SourceCode: "https://github.com/Akansha1409/passop",
    liveProject: "https://passop-git-main-akanshas-projects-76a6fd7b.vercel.app/"
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "A Weather app providing real-time weather forecasts and current conditions for any city using weather APIs." ,
    technologies: ["ReactJS", "Tailwind CSS", "APIs"],
       SourceCode: "https://github.com/Akansha1409/WeatherApp",
    liveProject: "https://weather-app-p4vz-git-main-akanshas-projects-76a6fd7b.vercel.app/"
  },
  {
    title: "SnakeMania",
    image: project4,
    description:
      "A classic game built with HTML, CSS, and JavaScript. Experience the nostalgia of the timeless Snake Game with a modern touch." ,
    technologies: ["HTML", "CSS", "Javascript"],
       SourceCode: "https://github.com/Akansha1409/game",
    liveProject: "https://game-snake-git-main-akanshas-projects-76a6fd7b.vercel.app/"
  },
  
  {
    title: "Rock Paper Scissors",
    image: project5,
    description:
      "A classic game built with HTML, CSS, and JavaScript. Players choose rock, paper, or scissors to compete against the computer." ,
    technologies: ["HTML", "CSS", "Javascript"],
       SourceCode: "https://github.com/Akansha1409/Rock-Paper-Scissor-",
    liveProject: "https://game-4vru-git-main-akanshas-projects-76a6fd7b.vercel.app/"
  },
  {
    title: "Tune Stream",
    image: project6,
    description:
      "A music streaming web application that allows users to listen to their favorite songs.",
    technologies: ["HTML", "CSS", "Javascript"],
     SourceCode: "https://github.com/Akansha1409/music",
    liveProject: "https://music-git-main-akanshas-projects-76a6fd7b.vercel.app/"
  },
 
  
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};