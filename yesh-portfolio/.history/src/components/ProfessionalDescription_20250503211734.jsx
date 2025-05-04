import React from "react";
import "../styles/ProfessionalDescription.css";
import { Element } from "react-scroll";

const skillsLeft = [
  {
    title: "Front-End Development",
    description:
      "Built highly responsive user interfaces using React.js, Next.js and TailwindCSS, focusing on performance and accessibility.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designed intuitive and user-centric interfaces, improving product usability and driving higher engagement.",
  },
  {
    title: "Back-End Development",
    description:
      "Engineered scalable backends using Node.js, Express, and integrated microservices architecture for robust APIs.",
  },
  {
    title: "API Integration",
    description:
      "Developed and consumed RESTful APIs and GraphQL endpoints, ensuring seamless communication between frontend and backend.",
  },
];

const skillsRight = [
  {
    title: "Agile Methodologies",
    description:
      "Worked in Scrum teams, participating in sprints, daily stand-ups, sprint planning, and retrospectives to deliver iterative improvements.",
  },
  {
    title: "CI/CD & Cloud",
    description:
      "Automated deployments using GitHub Actions, Jenkins, and deployed services on AWS cloud infrastructure (EC2, Lambda, S3).",
  },
  {
    title: "Version Control",
    description:
      "Managed codebases effectively using Git, GitHub, GitLab, promoting collaborative development practices with feature branching.",
  },
  {
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
            <div key={index} className="skill-block">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-7to11">
          {skillsRight.map((skill, index) => (
            <div key={index} className="skill-block">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="col-12"></div>
      </div>
    </section>
  );
}

export default ProfessionalDescription;
