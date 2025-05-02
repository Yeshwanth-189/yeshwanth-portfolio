import React, { useState, useEffect } from "react";
import "../styles/Communications.css";
import workPermitImage from "../assets/work-permit.png";
import contactImage from "../assets/Comms.png";
import musicImage from "../assets/Music.png";
import recommendationsImage from "../assets/Comments.png";

function Communications() {
  const [activeModal, setActiveModal] = useState(null);

  // Define initial cards
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
        const first = newOrder.shift(); // Remove first item
        newOrder.push(first); // Push it to end
        return newOrder;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="communications-section">
      <div className="communications-grid">
        <div className="col-1" />

        <div className="col-2to11 communications-cards">
          {cards.map((card) => (
            <div
              key={card.id}
              className="communication-card"
              onClick={() => openModal(card.id)}
            >
              <img src={card.image} alt={card.title} className="card-image" />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>

        <div className="col-12" />
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                  Show favorite music tracks, playlists, or a small music player
                  here.
                </p>
              </div>
            )}

            {activeModal === "recommendations" && (
              <div>
                <h2>Recommendations</h2>
                <p>Colleague reviews and recommendations here.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Communications;
