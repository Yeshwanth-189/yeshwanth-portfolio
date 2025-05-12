import React from "react";
import "../styles/SkillRating.css";

const skills = [
  { label: "Communication", value: 8 },
  { label: "Collaboration / Teamwork", value: 10 },
  { label: "Problem-Solving", value: 8 },
  { label: "Adaptability / Flexibility", value: 9 },
  { label: "Time Management", value: 9 },
  { label: "Accountability / Ownership", value: 10 },
  { label: "Continuous Learning", value: 8 },
  { label: "Empathy / Emotional Intelligence", value: 8 },
  { label: "Critical Thinking", value: 9 },
  { label: "Leadership Potential", value: 10 },
  { label: "Business Acumen", value: 8 },
  { label: "Negotiation", value: 7 },
];

export default function SkillRating() {
  return (
    <div className="skill-rating-section">
      <div className="rating-grid">
        <div className="col-1" />
        <div className="col-2to11">
          <div className="graph-background">
            <div className="y-axis">
              <span>Rating</span>
            </div>
            <div className="bar-row">
              {skills.map((skill, i) => (
                <div className="bar-item" key={i}>
                  <div className="bar-outer">
                    <div
                      className="bar-inner"
                      style={{ height: `${(skill.value / 10) * 100}%` }}
                    >
                      <span className="bar-value">{skill.value}/10</span>
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
