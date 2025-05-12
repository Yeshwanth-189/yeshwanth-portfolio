import React from "react";
import "./Awards.css";
import awardSpot from "../assets/awardSpot.png";
import awardTeam from "../assets/awardTeam.png";
import awardBest from "../assets/awardBest.png";
import awardNEO from "../assets/awardNEO.png";
import certificateMLS from "../assets/certificateMLS.png";
import certificateMeta from "../assets/certificateMeta.png";
import certificateQC from "../assets/certificateQC.png";

const awards = [
  { id: 1, src: awardSpot, alt: "Award 1" },
  { id: 2, src: awardTeam, alt: "Award 2" },
  { id: 3, src: awardBest, alt: "Award 3" },
  { id: 4, src: awardNEO, alt: "Award 4" },
  { id: 5, src: CertificateMLS, alt: "Award 5" },
  { id: 6, src: certificateMeta, alt: "Award 6" },
  { id: 7, src: certificateQC, alt: "Award 7" },
];

export default function Awards() {
  return (
    <section className="awards-container">
      <div className="grid-wrapper">
        {awards.map((award, index) => (
          <div
            key={award.id}
            className={`award-card ${index === 0 ? "first-award" : ""}`}
          >
            <img src={award.src} alt={award.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
