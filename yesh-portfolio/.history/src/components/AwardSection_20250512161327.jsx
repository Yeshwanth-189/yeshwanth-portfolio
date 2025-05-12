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
  { img: award1, title: "Spot Award – Q1 Excellence" },
  { img: award2, title: "Team Excellence – Backend Delivery" },
  { img: award3, title: "Employee of the Month – March" },
  { img: award4, title: "Innovation in Automation – Hackathon Winner" },
  { img: award5, title: "Best Code Quality – Internal Review" },
  { img: award6, title: "Cloud Deployment Champion – AWS Lab" },
  { img: award7, title: "Mentorship Appreciation – Dev Intern Program" },
  { img: award8, title: "Leadership Impact Award – 2024" },
];

export default function AwardSection() {
  return (
    <div className="award-section">
      <div className="award-grid">
        <div className="col-1" />
        <div className="col-2to11">
          <div className="award-box-container">
            {awards.map((img, i) => (
              <div className="award-box" key={i}>
                <img src={img} alt={`Award ${i + 1}`} />
                <p className="award-label">Award {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
  );
}
