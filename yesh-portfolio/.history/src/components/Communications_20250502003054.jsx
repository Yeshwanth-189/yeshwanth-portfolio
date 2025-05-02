import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Communications.css";
import workPermitImage from "../assets/work-permit.png";
import contactImage from "../assets/Comms.png";
import musicImage from "../assets/Music.png";
import recommendationsImage from "../assets/Comments.png";

const cards = [
  {
    id: "workPermit",
    title: "Work Permit",
    image: workPermitImage,
  },
  {
    id: "contact",
    title: "Contact Me",
    image: contactImage,
  },
  {
    id: "music",
    title: "Music",
    image: musicImage,
  },
  {
    id: "recommendations",
    title: "Recommendations",
    image: recommendationsImage,
  },
];

function Communications() {
  return (
    <section className="communications-section">
      <div className="communications-grid">
        <div className="col-1" />

        {/* Smooth infinite motion */}
        <div className="col-2to11 communications-cards-wrapper">
          <motion.div
            className="communications-cards-track"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // how slow/smooth (bigger = slower)
                ease: "linear",
              },
            }}
          >
            {/* Cards duplicated for infinite loop */}
            {[...cards, ...cards].map((card, index) => (
              <div key={index} className="communication-card">
                <img src={card.image} alt={card.title} className="card-image" />
                <h3>{card.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="col-12" />
      </div>
    </section>
  );
}

export default Communications;
