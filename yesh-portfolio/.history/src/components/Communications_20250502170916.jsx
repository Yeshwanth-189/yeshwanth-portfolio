import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

// Import images - make sure these paths are correct
import workPermitImage from "../assets/work-permit.png";
import contactImage from "../assets/Comms.png";
import musicImage from "../assets/Music.png";
import recommendationsImage from "../assets/Comments.png";

// Define cards and gradients outside component
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

const gradients = {
  blindingLights: "linear-gradient(270deg, #ff7eb3, #ff758c, #ff7eb3)",
  sunflower: "linear-gradient(270deg, #ffe259, #ffa751, #ffe259)",
  topOfWorld: "linear-gradient(270deg, #43cea2, #185a9d, #43cea2)",
  heatWaves: "linear-gradient(270deg, #ff512f, #dd2476, #ff512f)",
  vivaLaVida: "linear-gradient(270deg, #4facfe, #00f2fe, #4facfe)",
};

// Inline styles for CSS approach #1
const styles = {
  section: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0b0c10",
    position: "relative",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    textAlign: "left",
    fontFamily: "'Orbitron', sans-serif",
    color: "#66fcf1",
    fontSize: "3rem",
    marginLeft: "0%",
    marginBottom: "20%",
  },
  cardsGrid: {
    gridColumn: "2 / 12",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "40px",
  },
  card: {
    backgroundColor: "#1f2833",
    border: "2px solid #66fcf1",
    padding: "30px",
    textAlign: "center",
    borderRadius: "10px",
    fontFamily: "'Orbitron', sans-serif",
    color: "#c5c6c7",
    cursor: "pointer",
    overflow: "hidden",
    boxShadow: "0 0 15px #66fcf1",
    transition: "transform 0.3s, background-color 0.3s",
  },
  cardImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    marginBottom: "15px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(11, 12, 16, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modalContent: {
    backgroundColor: "#1f2833",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "600px",
    width: "90%",
    color: "#c5c6c7",
    fontFamily: "'Exo 2', sans-serif",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "30px",
    right: "30px",
    background: "none",
    border: "none",
    color: "#66fcf1",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  modalTitle: {
    color: "#66fcf1",
    fontFamily: "'Orbitron', sans-serif",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0",
    fontFamily: "'Exo 2', sans-serif",
  },
  listItem: {
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "#c5c6c7",
    padding: "10px 15px",
    background: "rgba(102, 252, 241, 0.1)",
    borderRadius: "8px",
  },
  lifeChangingLine: {
    marginTop: "25px",
    fontStyle: "italic",
    fontSize: "1rem",
    color: "#66fcf1",
    background: "rgba(102, 252, 241, 0.08)",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(102, 252, 241, 0.3)",
  },
  contactItem: {
    marginBottom: "20px",
    fontSize: "1.1rem",
    color: "#c5c6c7",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  contactIcon: {
    color: "#66fcf1",
    fontSize: "1.5rem",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.2rem",
    color: "#66fcf1",
    fontWeight: "bold",
    textDecoration: "none",
  },
  musicWrapper: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
  },
  musicModal: {
    position: "relative",
    backgroundColor: "rgba(11, 12, 16, 0.95)",
    padding: "40px",
    borderRadius: "12px",
    zIndex: 1,
    textAlign: "center",
    fontFamily: "'Orbitron', sans-serif",
  },
  musicTitle: {
    fontSize: "2rem",
    color: "#66fcf1",
    marginBottom: "20px",
  },
  musicList: {
    listStyle: "none",
    padding: 0,
    fontFamily: "'Exo 2', sans-serif",
    fontSize: "1.1rem",
    color: "#c5c6c7",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  auroraBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "200%",
    height: "200%",
    backgroundSize: "400% 400%",
    filter: "blur(80px) brightness(1.2)",
    opacity: 0.7,
    zIndex: 0,
  },
  // Media query styles for mobile need to be handled differently with inline styles
};

function Communications() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(
    gradients.blindingLights
  );

  // Explicit functions for opening and closing modals
  const openModal = (modalName) => {
    console.log("Opening modal:", modalName);
    setActiveModal(modalName);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setActiveModal(null);
  };

  // Function to handle music selection
  const handleMusicSelect = (gradient) => {
    console.log("Selecting gradient:", gradient);
    setSelectedBackground(gradient);
  };

  // Media query for mobile
  const isMobile = window.innerWidth <= 768;

  const mobileStyles = {
    cardsGrid: {
      ...styles.cardsGrid,
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gridTemplateRows: isMobile ? "auto" : "repeat(2, 1fr)",
    },
    card: {
      ...styles.card,
      minWidth: isMobile ? "200px" : "auto",
      padding: isMobile ? "20px" : "30px",
    },
    header: {
      ...styles.header,
      marginLeft: isMobile ? "30%" : "0%",
    },
    cardImage: {
      ...styles.cardImage,
      width: isMobile ? "180px" : "100%",
      height: isMobile ? "180px" : "auto",
    },
    musicModal: {
      ...styles.musicModal,
      padding: isMobile ? "20px" : "40px",
    },
    musicTitle: {
      ...styles.musicTitle,
      fontSize: isMobile ? "1.5rem" : "2rem",
    },
    musicList: {
      ...styles.musicList,
      fontSize: isMobile ? "1rem" : "1.1rem",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        <div style={{ gridColumn: "1 / 2" }} />
        <h1 style={mobileStyles.header}>Contact</h1>

        <div style={mobileStyles.cardsGrid}>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              style={mobileStyles.card}
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
              <img
                src={card.image}
                alt={card.title}
                style={mobileStyles.cardImage}
              />
              <h3>{card.title}</h3>
            </motion.div>
          ))}
        </div>

        <div style={{ gridColumn: "12 / 13", display: "none" }} />
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            style={styles.modalOverlay}
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button style={styles.closeButton} onClick={closeModal}>
                X
              </button>

              {activeModal === "workPermit" && (
                <div>
                  <h2 style={styles.modalTitle}>Work Authorization US</h2>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>
                      ✔ F-1 OPT (Eligible for STEM Extension)
                    </li>
                    <li style={styles.listItem}>
                      ✔ Authorized to work in the U.S. until January 2027
                    </li>
                    <li style={styles.listItem}>
                      ✔ No sponsorship required during OPT period
                    </li>
                    <li style={styles.listItem}>
                      ✔ Open to H-1B sponsorship for long-term employment
                    </li>
                  </ul>
                  <p style={styles.lifeChangingLine}>
                    You are not just hiring me — it's a life-changing
                    opportunity for me to contribute, grow, and create real
                    impact.
                  </p>
                </div>
              )}

              {activeModal === "contact" && (
                <div>
                  <h2 style={styles.modalTitle}>
                    I would love to hear from you
                  </h2>
                  <ul style={styles.list}>
                    <li style={styles.contactItem}>
                      <MdEmail style={styles.contactIcon} />
                      <strong>Primary Email:</strong> yeshn0207@gmail.com
                    </li>
                    <li style={styles.contactItem}>
                      <MdEmail style={styles.contactIcon} />
                      <strong>Secondary Email:</strong> ynanj002@ucr.edu
                    </li>
                    <li style={styles.contactItem}>
                      <MdPhone style={styles.contactIcon} />
                      <strong>Phone Number:</strong> +1 951 453 2926
                    </li>
                    <li style={styles.contactItem}>
                      <FaWhatsapp style={styles.contactIcon} />
                      <strong>WhatsApp Number:</strong> +91 9632079432
                    </li>
                    <li style={styles.contactItem}>
                      <a
                        href="https://www.linkedin.com/in/yeshwanth-nanjegowda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.socialLink}
                      >
                        <FaLinkedin
                          style={{ fontSize: "1.8rem", color: "#66fcf1" }}
                        />
                        LinkedIn
                      </a>
                    </li>
                    <li style={styles.contactItem}>
                      <a
                        href="https://github.com/Yeshwanth-189"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.socialLink}
                      >
                        <FaGithub
                          style={{ fontSize: "1.8rem", color: "#66fcf1" }}
                        />
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              {activeModal === "music" && (
                <div style={styles.musicWrapper}>
                  {/* Aurora Background */}
                  <motion.div
                    style={{
                      ...styles.auroraBackground,
                      background: selectedBackground,
                    }}
                    animate={{ background: selectedBackground }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Modal Content */}
                  <div style={mobileStyles.musicModal}>
                    <h2 style={mobileStyles.musicTitle}>My Vibe 🎵</h2>
                    <ul style={mobileStyles.musicList}>
                      <li
                        onClick={() =>
                          handleMusicSelect(gradients.blindingLights)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        🎵 Blinding Lights - The Weeknd
                      </li>
                      <li
                        onClick={() => handleMusicSelect(gradients.sunflower)}
                        style={{ cursor: "pointer" }}
                      >
                        🎵 Sunflower - Post Malone
                      </li>
                      <li
                        onClick={() => handleMusicSelect(gradients.topOfWorld)}
                        style={{ cursor: "pointer" }}
                      >
                        🎵 On Top of the World - Imagine Dragons
                      </li>
                      <li
                        onClick={() => handleMusicSelect(gradients.heatWaves)}
                        style={{ cursor: "pointer" }}
                      >
                        🎵 Heat Waves - Glass Animals
                      </li>
                      <li
                        onClick={() => handleMusicSelect(gradients.vivaLaVida)}
                        style={{ cursor: "pointer" }}
                      >
                        🎵 Viva La Vida - Coldplay
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === "recommendations" && (
                <div>
                  <h2 style={styles.modalTitle}>Recommendations</h2>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>
                      "A pleasure to work with — delivers with precision." -
                      Senior Developer
                    </li>
                    <li style={styles.listItem}>
                      "One of the most dedicated engineers I've worked with." -
                      Project Manager
                    </li>
                    <li style={styles.listItem}>
                      "Always brings creativity and energy to the team." - Team
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
