import React from "react";
import "./LandingSequence.css";

const LandingSequence = ({ sections = 3 }) => {
  return (
    <div className="screen-divider">
      {[...Array(sections)].map((_, i) => (
        <div className="section" key={i}>
          Section {i + 1}
        </div>
      ))}
    </div>
  );
};

export default LandingSequence;
