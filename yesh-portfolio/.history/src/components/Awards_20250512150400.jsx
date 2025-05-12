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
  { id: 1, src: "image1.jpg", alt: "Award 1" },
  { id: 2, src: "image2.jpg", alt: "Award 2" },
  { id: 3, src: "image3.jpg", alt: "Award 3" },
  { id: 4, src: "image4.jpg", alt: "Award 4" },
  { id: 5, src: "image5.jpg", alt: "Award 5" },
  { id: 6, src: "image6.jpg", alt: "Award 6" },
  { id: 7, src: "image7.jpg", alt: "Award 7" },
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
