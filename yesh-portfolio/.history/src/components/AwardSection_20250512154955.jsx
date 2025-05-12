import React from "react";
import "../styles/AwardSection.css";
import award1 from "../assets/awardSpot.png";
import award2 from "../assets/awardTeam.png";
import award3 from "../assets/awardBest.png";
import award4 from "../assets/awardNEO.png";
import award5 from "../assets/certificateMLS.png";
import award6 from "../assets/certificateMeta.png";
import award7 from "../assets/certificateQC.png";

const awards = [award1, award2, award3, award4, award5, award6, award7];

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
              </div>
            ))}
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
  );
}
