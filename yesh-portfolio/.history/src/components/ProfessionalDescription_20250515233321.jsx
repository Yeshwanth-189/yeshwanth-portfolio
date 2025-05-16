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
      "Worked with both REST and SOAP APIs to integrate various backend services into front-end applications. Utilized Axios to build secure, robust, and scalable API communication layers.Developed third-party verification APIs, including user identity verification and background verification systems, ensuring reliability and security in critical workflows. Implemented best practices for error handling, retries, and token-based authentication. Worked with Postman, Swagger, and API documentation tools for effective testing and collaboration.",
  },
];

const skillsRight = [
  {
    id: 5,
    title: "Agile Methodologies",
    description:
      "Utilized JIRA for project management, sprint planning, and issue tracking. Actively participated in Agile ceremonies including daily stand-ups, sprint planning, sprint reviews, and retrospectives. Owned and delivered user stories end-to-end within sprint cycles, ensuring timely feature development and deployment.Diagnosed and resolved bugs reported during testing and production, contributing to continuous product improvement. Collaborated with cross-functional teams, maintaining clear communication and alignment with sprint goals and priorities.",
  },
  {
    id: 6,
    title: "CI/CD & Cloud",
    description:
      "Built artifacts and maintained CI/CD pipelines for production and staging environments, improving deployment consistency and speed. Worked on AWS migration , moving applications and services from a legacy on-premise system to the AWS Cloud, resulting in improved scalability, reliability, and performance. Monitored and maintained CI/CD pipelines, ensuring successful code integration, testing, and deployment.  Collaborated closely with solution architects to align infrastructure, build processes, and deployment strategies with application requirements. Worked with AWS services like EC2, S3, API Gateway and Lambda.",
  },
  {
    id: 7,
    title: "Version Control",
    description:
      "Managed source control using TFS and Git to organize commits across multiple applications and environments. Participated actively in code reviews with team members and senior architects, ensuring adherence to coding standards and improving code quality. Collaborated with DevOps teams to create and maintain build artifacts for legacy application pipelines. Contributed to a code migration project, successfully transitioning source control from TFS to Git, improving scalability, productivity, and alignment with DevOps practices.",
  },
  {
    id: 8,
    title: "Proof of Concepts",
    description:
      "Developed and implemented multiple Proof of Concepts (POCs) to validate new technologies and optimize system architecture. Built a serverless Tax Identification Number (TIN) validation system using AWS Lambda and Node.js, reducing infrastructure costs by 80% through elimination of dedicated servers. Designed and developed a dynamic web application that adapted UI configurations based on user geolocation, and implemented localization using i18next to serve region-specific content seamlessly across different countries.",
  },
];

function ProfessionalDescription() {
  return (
    <section className="professional-description-section">
      <div className="professional-grid">
        <div className="col-1"></div>

        {/* Left Column */}
        <h1 className="professional-header">Expertise</h1>
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
      </div>
      <div className="col-12"></div>
    </section>
  );
}

export default ProfessionalDescription;
