import React from "react";
import "../styles/SkillRating.css";

const skills = [
  "Communication",
  "Collaboration / Teamwork",
  "Problem-Solving",
  "Adaptability / Flexibility",
  "Time Management",
  "Accountability / Ownership",
  "Continuous Learning",
  "Empathy / Emotional Intelligence",
  "Critical Thinking",
  "Leadership Potential",
  "Business Acumen",
  "Negotiation",
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
            <div className="x-axis">
              {skills.map((label, i) => (
                <div key={i} className="x-label">
                  {label}
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
