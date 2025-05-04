import React from "react";
import "../styles/ProfessionalDescription.css";
import { Element } from "react-scroll";

const skillsLeft = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "Built highly responsive user interfaces using React.js, Next.js and TailwindCSS, focusing on performance and accessibility.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designed intuitive and user-centric interfaces, improving product usability and driving higher engagement.",
  },
  {
    id: 5,
    title: "Back-End Development",
    description:
      "Engineered scalable backends using Node.js, Express, and integrated microservices architecture for robust APIs.",
  },
  {
    id: 7,
    title: "API Integration",
    description:
      "Developed and consumed RESTful APIs and GraphQL endpoints, ensuring seamless communication between frontend and backend.",
  },
];

const skillsRight = [
  {
    id: 2,
    title: "Agile Methodologies",
    description:
      "Worked in Scrum teams, participating in sprints, daily stand-ups, sprint planning, and retrospectives to deliver iterative improvements.",
  },
  {
    id: 4,
    title: "CI/CD & Cloud",
    description:
      "Automated deployments using GitHub Actions, Jenkins, and deployed services on AWS cloud infrastructure (EC2, Lambda, S3).",
  },
  {
    id: 6,
    title: "Version Control",
    description:
      "Managed codebases effectively using Git, GitHub, GitLab, promoting collaborative development practices with feature branching.",
  },
  {
    id: 8,
    title: "Proof of Concepts",
    description:
      "Spearheaded rapid PoC developments showcasing new features, reducing innovation time-to-market by 40%.",
  },
];

function ProfessionalDescription() {
  return (
    <section className="professional-description-section">
      <h1 className="professional-header">Expertise</h1>
      <div className="professional-grid">
        <div className="col-1"></div>

        {/* Left Column */}
        <div className="col-2to6">
          {skillsLeft.map((skill, index) => (
            <Element key={index} id={skill.id} className="skill-block">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </Element>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-7to11">
          {skillsRight.map((skill, index) => (
            <Element key={index} id={skill.id} className="skill-block">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </Element>
          ))}
        </div>

        <div className="col-12"></div>
      </div>
    </section>
  );
}

export default ProfessionalDescription;
