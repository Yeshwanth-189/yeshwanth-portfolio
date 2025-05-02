import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Communications.css";
import workPermitImage from "../assets/work-permit.png";
import contactImage from "../assets/Comms.png";
import musicImage from "../assets/Music.png";
import recommendationsImage from "../assets/Comments.png";

function Communications() {
  const [activeModal, setActiveModal] = useState(null);

  const [cards, setCards] = useState([
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
  ]);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newOrder = [...prevCards];
        const first = newOrder.shift();
        newOrder.push(first);
        return newOrder;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="communications-section">
      <div className="communications-grid">
        <div className="col-1" />

        <motion.div
          layout
          className="col-2to11 communications-cards"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              layout
              className="communication-card"
              onClick={() => openModal(card.id)}
              whileHover={{ scale: 1.05 }}
            >
              <img src={card.image} alt={card.title} className="card-image" />
              <h3>{card.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="col-12" />
      </div>

      {/* Modal */}
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
                <div>
                  <h2>Work Permit Details</h2>
                  <p>Your Work Permit/Visa information here.</p>
                </div>
              )}

              {activeModal === "contact" && (
                <div>
                  <h2>Contact Me</h2>
                  <p>Email: yourname@example.com</p>
                  <p>Phone: +1 234-567-890</p>
                </div>
              )}

              {activeModal === "music" && (
                <div>
                  <h2>Music</h2>
                  <p>
                    Show favorite music tracks, playlists, or a small music
                    player here.
                  </p>
                </div>
              )}

              {activeModal === "recommendations" && (
                <div>
                  <h2>Recommendations</h2>
                  <p>Colleague reviews and recommendations here.</p>
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
