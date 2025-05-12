import React from "react";
import "../styles/SkillSection.css";

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
        <div className="col-2to11">
          <div className="skill-card-container">
            {skills.map((section, index) => (
              <div className="skill-card" key={index}>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
  );
}
