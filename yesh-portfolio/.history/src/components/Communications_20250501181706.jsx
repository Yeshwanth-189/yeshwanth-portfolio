import React, { useState } from "react";
import "../styles/Communications.css";

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

        <div className="col-2to11 communications-cards">
          {/* Work Permit */}
          <div
            className="communication-card"
            onClick={() => openModal("workPermit")}
          >
            <h3>Work Permit</h3>
          </div>

          {/* Contact Me */}
          <div
            className="communication-card"
            onClick={() => openModal("contact")}
          >
            <h3>Contact Me</h3>
          </div>

          {/* Music */}
          <div
            className="communication-card"
            onClick={() => openModal("music")}
          >
            <h3>Music</h3>
          </div>

          {/* Recommendations */}
          <div
            className="communication-card"
            onClick={() => openModal("recommendations")}
          >
            <h3>Recommendations</h3>
          </div>
        </div>

        <div className="col-12" />
      </div>

      {/* Modals */}
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
