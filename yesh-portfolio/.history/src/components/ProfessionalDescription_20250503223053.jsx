import React from "react";
import "../styles/ProfessionalDescription.css";
import { Element } from "react-scroll";

const skillsLeft = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "Built front-end interfaces for customer service platform serving over 100,000+ users globally. Spearheaded front-end development and drove UI architecture in the US, UK, Canada, and India by implementing configuration file-based adaptations, enabling zero code changes, significantly improving code reusability, and enhancing performance. Experienced in working with legacy React codebases utilizing both class-based and functional components, Redux store management, Saga middleware, and libraries such as Material-UI and Ant Design.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designed user interfaces and screen layouts using Figma, collaborating closely with UI/UX teams to refine and iterate designs based on feedback. Created interactive prototypes in Figma to simulate user flows and gather feedback, improving usability and user experience. Participated in design reviews, providing constructive input and responding to UI/UX queries to ensure seamless alignment between design and development. Translated high-fidelity Figma designs into responsive, production-ready front-end code, ensuring pixel-perfect implementation.",
  },
  {
    id: 3,
    title: "Back-End Development",
    description:
      "Regularly collaborated with backend developers to ensure seamless integration between front-end and back-end systems.Developed APIs using the .NET MVC Framework and C#, supporting various platform features and functionalities.Authored comprehensive backend setup documentation to streamline onboarding and assist teammates in faster environment setup and understanding of codebases.Diagnosed and resolved multiple dependency and configuration issues, improving system stability and developer productivity.",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Worked with both REST and SOAP APIs to integrate various backend services into front-end applications. Utilized Axios to build secure, robust, and scalable API communication layers.Developed third-party verification APIs, including user identity verification and background verification systems, ensuring reliability and security in critical workflows. Implemented best practices for error handling, retries, and token-based authentication (OAuth, JWT).Worked with Postman, Swagger, and API documentation tools for effective testing and collaboration.",
  },
];

const skillsRight = [
  {
    id: 5,
    title: "Agile Methodologies",
    description:
      "Worked in Scrum teams, participating in sprints, daily stand-ups, sprint planning, and retrospectives to deliver iterative improvements.",
  },
  {
    id: 6,
    title: "CI/CD & Cloud",
    description:
      "Automated deployments using GitHub Actions, Jenkins, and deployed services on AWS cloud infrastructure (EC2, Lambda, S3).",
  },
  {
    id: 7,
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
