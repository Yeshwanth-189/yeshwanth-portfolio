import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Communications.css";
import workPermitImage from "../assets/work-permit.png";
import contactImage from "../assets/Comms.png";
import musicImage from "../assets/Music.png";
import recommendationsImage from "../assets/Comments.png";
import US from "../assets/USA.png";

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
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
              onClick={() => openModal(card.id)}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
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

      {/* Modal Section */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button className="close-button" onClick={closeModal}>
                X
              </button>

              {activeModal === "workPermit" && (
                <div className="work-permit-modal">
                  <h2>Work Authorization</h2>
                  <ul className="work-permit-list">
                    <li>✔ F-1 OPT (Eligible for STEM Extension)</li>
                    <li>✔ Authorized to work in the U.S. until January 2027</li>
                    <li>✔ No sponsorship required during OPT period</li>
                    <li>✔ Open to H-1B sponsorship for long-term employment</li>
                  </ul>
                  <p className="life-changing-line">
                    This is not just a job for me — it's a life-changing
                    opportunity to contribute, grow, and create real impact.
                  </p>
                </div>
              )}
              {activeModal === "contact" && (
                <div>
                  <h2>Contact Me</h2>
                  <p>Email: yeshwanth@example.com</p>
                  <p>Phone: +1 (123) 456-7890</p>
                </div>
              )}

              {activeModal === "music" && (
                <div>
                  <h2>My Vibe 🎵</h2>
                  <ul>
                    <li>Blinding Lights - The Weeknd</li>
                    <li>Sunflower - Post Malone</li>
                    <li>On Top of the World - Imagine Dragons</li>
                    <li>Heat Waves - Glass Animals</li>
                    <li>Viva La Vida - Coldplay</li>
                  </ul>
                </div>
              )}

              {activeModal === "recommendations" && (
                <div>
                  <h2>Recommendations</h2>
                  <ul>
                    <li>
                      “A pleasure to work with — delivers with precision.” -
                      Senior Developer
                    </li>
                    <li>
                      “One of the most dedicated engineers I’ve worked with.” -
                      Project Manager
                    </li>
                    <li>
                      “Always brings creativity and energy to the team.” - Team
                      Lead
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Communications;
