import React from "react";
import "../styles/SkillSection.css";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaDatabase,
  FaAndroid,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiDotnet,
  SiDjango,
  SiFastapi,
  SiMysql,
  SiPostman,
  SiKubernetes,
  SiJirasoftware,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const iconMap = {
  C: <SiC />,
  "C++": <SiCplusplus />,
  "C#": <TbBrandCSharp />,
  Java: <FaJava />,
  JavaScript: <FaJs />,
  Python: <FaPython />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  ReactJS: <FaReact />,
  ReduxSaga: <SiRedux />,
  Bootstrap: <SiBootstrap />,
  TailwindCSS: <SiTailwindcss />,
  NodeJS: <FaNodeJs />,
  ExpressJS: <FaNodeJs />,
  ".NET": <SiDotnet />,
  Django: <SiDjango />,
  FastAPI: <SiFastapi />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  Git: <FaGitAlt />,
  TFS: <SiJirasoftware />,
  "Android Studio": <FaAndroid />,
  AWS: <FaAws />,
  Docker: <FaDocker />,
  Kubernetes: <SiKubernetes />,
  Postman: <SiPostman />,
  "Microsoft Office": <FaMicrosoft />,
};

const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "C#", "Java", "JavaScript", "Python"],
  },
  {
    title: "Front End",
    items: [
      "HTML5",
      "CSS3",
      "ReactJS",
      "ReduxSaga",
      "Bootstrap",
      "TailwindCSS",
      "Material UI",
      "AntDesign",
    ],
  },
  {
    title: "Back End",
    items: ["NodeJS", "ExpressJS", ".NET", "Django", "FastAPI"],
  },
  { title: "Databases", items: ["MySQL", "Firebase", "MongoDB"] },
  {
    title: "Cloud & DevOps",
    items: ["CI/CD", "Kubernetes", "Docker", "AWS", "CloudLab"],
  },
  {
    title: "Other Tools & Practices",
    items: [
      "Git",
      "TFS",
      "Android Studio",
      "Agile Methodologies",
      "Postman",
      "Microsoft Office",
    ],
  },
];

export default function SkillSection() {
  return (
    <div className="skill-section">
      <div className="skill-grid">
        <div className="col-1" />
        <div className="col-2to11-skill">
          {skills.map((section, index) => (
            <div key={index} className="skill-group">
              <h2 className="skill-heading">{section.title}</h2>
              <div className="skill-list">
                {section.items.map((skill, i) => (
                  <div className="skill-card" key={i}>
                    <div className="icon">{iconMap[skill] || "🛠️"}</div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-12" />
      </div>
    </div>
  );
}
