import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Communications.css";
import workPermitImage from "../assets/work-permit.png";
import contactImage from "../assets/Comms.png";
import musicImage from "../assets/Music.png";
import recommendationsImage from "../assets/Comments.png";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GiNightSleep, GiSunflower, GiMusicalNotes } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FaRegLaughSquint } from "react-icons/fa";

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

import { motion } from "framer-motion";
import { useState } from "react";

function MusicItem({ song, emojiSet }) {
  const [flyingEmojis, setFlyingEmojis] = useState([]);

  const handleClick = () => {
    const newEmojis = emojiSet.map((emoji, idx) => ({
      id: Date.now() + idx,
      ...emoji,
      yPos: Math.random() * 80, // Random top position (0 to 80%)
    }));

    setFlyingEmojis(newEmojis);

    // Clear emojis after some time
    setTimeout(() => {
      setFlyingEmojis([]);
    }, 10000); // after 10 seconds
  };

  return (
    <li className="music-item" onClick={handleClick}>
      🎵 {song}
      {flyingEmojis.map((emoji) => (
        <motion.div
          key={emoji.id}
          className="flying-emoji"
          initial={{ x: "100vw", opacity: 0, top: `${emoji.yPos}%` }}
          animate={{ x: "-100vw", opacity: 1 }}
          transition={{
            duration: 10,
            ease: "linear",
          }}
          style={{ color: emoji.color }}
        >
          <emoji.icon className="music-emoji" />
        </motion.div>
      ))}
    </li>
  );
}

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
                  <h2>Work Authorization US</h2>
                  <ul className="work-permit-list">
                    <li>✔ F-1 OPT (Eligible for STEM Extension)</li>
                    <li>✔ Authorized to work in the U.S. until January 2027</li>
                    <li>✔ No sponsorship required during OPT period</li>
                    <li>✔ Open to H-1B sponsorship for long-term employment</li>
                  </ul>
                  <p className="life-changing-line">
                    You are not just hiring me — it's a life-changing
                    opportunity for me to contribute, grow, and create real
                    impact.
                  </p>
                </div>
              )}
              {activeModal === "contact" && (
                <div className="contact-modal">
                  <h2>I would love to hear from you</h2>
                  <ul className="contact-list">
                    <li>
                      <MdEmail className="contact-icon" />
                      <strong>Primary Email:</strong> yeshn0207@gmail.com
                    </li>
                    <li>
                      <MdEmail className="contact-icon" />
                      <strong>Secondary Email:</strong> ynanj002@ucr.edu
                    </li>
                    <li>
                      <MdPhone className="contact-icon" />
                      <strong>Phone Number:</strong> +1 951 453 2926
                    </li>
                    <li>
                      <FaWhatsapp className="contact-icon" />
                      <strong>WhatsApp Number:</strong> +91 9632079432
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/yeshwanth-nanjegowda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <FaLinkedin className="social-icon" />
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Yeshwanth-189"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <FaGithub className="social-icon" />
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {activeModal === "music" && (
                <div className="music-modal">
                  <h2>My Vibe 🎵</h2>
                  <ul className="music-list">
                    <MusicItem
                      song="Till I Collapse - Eminem"
                      iconSet={[
                        FaRegLaughSquint,
                        MdOutlineEmojiEmotions,
                        GiMusicalNotes,
                      ]}
                    />
                    <MusicItem
                      song="Night Changes - One Direction"
                      iconSet={[GiNightSleep, BsStars, GiMusicalNotes]}
                    />
                    <MusicItem
                      song="All the Stars - Kendrick Lamar, SZA"
                      iconSet={[BsStars, FaMusic, MdOutlineEmojiEmotions]}
                    />
                    <MusicItem
                      song="Sunflower - Post Malone, Swae Lee"
                      iconSet={[GiSunflower, BsStars, MdOutlineEmojiEmotions]}
                    />
                    <MusicItem
                      song="Hymn for the Weekend - Coldplay"
                      iconSet={[GiMusicalNotes, BsStars, FaMusic]}
                    />
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
