import React from "react";
import "../styles/AwardSection.css";

export default function AwardSection() {
  // Placeholder array of 8 awards (use actual images later)
  const awards = new Array(8).fill(0);

  return (
    <div className="award-section">
      <div className="award-grid">
        <div className="col-1" />
        <div className="col-2to11">
          <div className="award-box-container">
            {awards.map((_, i) => (
              <div className="award-box" key={i}>
                <p>Award {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
  );
}
