import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Communications.css";
import workPermitImage from "../assets/work-permit.png";
import contactImage from "../assets/Comms.png";
import musicImage from "../assets/Music.png";
import recommendationsImage from "../assets/Comments.png";

const cards = [
  { id: "workPermit", title: "Work Permit", image: workPermitImage },
  { id: "contact", title: "Contact Me", image: contactImage },
  { id: "music", title: "Music", image: musicImage },
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
        <h1 className="communications-header">Contact</h1>
        <div className="col-2to11 communications-cards-grid">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="communication-card"
              layout
              animate={{
                y: [0, -10, 0], // float up and down
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3, // stagger float
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={card.image} alt={card.title} className="card-image" />
              <h3>{card.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="col-12" />
      </div>
    </section>
  );
}

export default Communications;
