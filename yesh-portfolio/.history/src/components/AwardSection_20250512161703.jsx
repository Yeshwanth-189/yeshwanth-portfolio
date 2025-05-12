import React from "react";
import "../styles/AwardSection.css";
import award1 from "../assets/awardSpot.png";
import award2 from "../assets/awardTeam.png";
import award3 from "../assets/awardBest.png";
import award4 from "../assets/awardNEO.png";
import award5 from "../assets/certificateMLS.png";
import award6 from "../assets/certificateMeta.png";
import award7 from "../assets/certificateQC.png";
import award8 from "../assets/certificatePy.png";

const awards = [
  { img: award1, title: "Spot Award at BETSOL" },
  { img: award2, title: "Team Excellence at BETSOL" },
  { img: award3, title: "Student of The Year" },
  { img: award4, title: "Top 15% in National Engineering Olympiad" },
  { img: award5, title: "Machine Learning Specialization" },
  { img: award6, title: "" },
  { img: award7, title: "Quantum Computing" },
  { img: award8, title: "Leadership Impact Award – 2024" },
];

export default function AwardSection() {
  return (
    <div className="award-section">
      <div className="award-grid">
        <div className="col-1" />
        <div className="col-2to11">
          <div className="award-box-container">
            {awards.map(({ img, title }, i) => (
              <div className="award-box" key={i}>
                <img src={img} alt={title} />
                <p className="award-label">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
  );
}
