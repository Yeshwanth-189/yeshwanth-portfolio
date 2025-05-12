import React from "react";
import "../styles/SkillRating.css";

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
  return (
    <div className="skill-rating-section">
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
                      className="bar-inner"
                      style={{ height: `${(skill.value / 10) * 100}%` }}
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
