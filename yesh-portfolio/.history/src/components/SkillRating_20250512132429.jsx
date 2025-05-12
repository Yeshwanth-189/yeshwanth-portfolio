import React from "react";
import "../styles/SkillRating.css";
import { useInView } from "framer-motion";

const skills = [
  { label: "Communication", value: 8 },
  { label: "Teamwork", value: 10 },
  { label: "Problem-Solving", value: 9 },
  { label: "Adaptability", value: 8 },
  { label: "Time Management", value: 9 },
  { label: "Accountability", value: 10 },
  { label: "Continuous Learning", value: 9 },
  { label: "Emotional Intelligence", value: 8 },
  { label: "Critical Thinking", value: 9 },
  { label: "Leadership", value: 10 },
  { label: "Business Acumen", value: 8 },
  { label: "Negotiation", value: 7 },
];

export default function SkillRating() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.5, // Trigger when 20% of the section is visible
  });
  return (
    <div className="skill-rating-section" ref={ref}>
      <h1 className="stats-header">Stats</h1>
      <div className="rating-grid">
        <div className="col-1" />
        <div className="col-2to11">
          <div className="graph-background">
            <div className="bar-row">
              {skills.map((skill, i) => (
                <div className="bar-item" key={i}>
                  <div className="bar-outer">
                    <div
                      className={`bar-inner ${inView ? "animate" : ""}`}
                      style={{
                        height: inView ? `${(skill.value / 10) * 100}%` : "0%",
                      }}
                    >
                      <span className="bar-value">{skill.value}</span>
                    </div>
                  </div>
                  <div className="bar-label">{skill.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
  );
}
