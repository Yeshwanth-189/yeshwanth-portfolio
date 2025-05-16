import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Communications.css";
// import workPermitImage from "../assets/work-permit.png";
// import contactImage from "../assets/Comms.png";
// import musicImage from "../assets/Music.png";
// import recommendationsImage from "../assets/Comments.png";
import workPermitImage from "../assets/Id.png";
import contactImage from "../assets/Coms.png";
import recommendationsImage from "../assets/Teamwork.png";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import Vibe from "../assets/Vibes.mp4";
import TillICollapseImage from "../assets/till-i-collapse.jpg";
import SunFlowerImage from "../assets/sunflower.png";
import Hymn from "../assets/Hymn.jpg";
import OneD from "../assets/OneD.jpg";
import Stars from "../assets/all-the-stars.jpg";

const cards = [
  { id: "workPermit", title: "Work Permit", image: workPermitImage },
  { id: "contact", title: "Contact Me", image: contactImage },
  { id: "music", title: "Music", video: Vibe },
  {
    id: "recommendations",
    title: "Recommendations",
    image: recommendationsImage,
  },
];

const testimonials = [
  {
    text: `"Yeshwanth quickly became a key member of the team. His ability to understand complex legacy code in a short time made him my go-to person for technical challenges. His expertise in React development, along with his ability to gain the trust of architects through his teamwork and insights, had a positive impact on our projects.
    Yeshwanth worked on many important tasks, including AWS migrations and developing a web scraper using Node.js in AWS Lambda. His problem-solving skills, technical knowledge, and leadership in driving projects were consistently impressive."`,
    author: "Yatheesha M J, Project Manager",
  },
  {
    text: `"Yeshwanth, you are a great React developer who handles end-to-end UI. You have excellent product knowledge, making you an invaluable asset to the team. You consistently deliver high-quality work and are always willing to go the extra mile to ensure our products meet the highest standards. Your innovative approach and problem-solving skills have significantly improved our user interface and application."`,
    author: "Reshma P Sadayoga, Backend Engineer",
  },
  {
    text: `"Yeshwanth, our code setup guy, an all-rounder. Thank you bro for helping me all the time. You are a great UI Developer, who also resolved backend bugs."`,
    author: "Kshitij Abhay, Senior Backend Developer",
  },
  {
    text: `"Incredibly talented individual. I admire the passion and dedication you bring to your work."`,
    author: "Pallavi S Somanahally, Full Stack Engineer",
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
    <>
      <section className="communications-section">
        <h1 className="communications-header">Voyage</h1>
        <div className="communications-grid">
          <div className="col-1" />
          <div className="col-2to11">
            <div className="communications-cards-grid">
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
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="card-image"
                    />
                  ) : (
                    <video
                      src={Vibe}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="card-image"
                    />
                  )}
                  <h3>{card.title}</h3>
                </motion.div>
              ))}
            </div>
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
                      <li>
                        ✔ Authorized to work in the U.S. until January 2027
                      </li>
                      <li>✔ No sponsorship required during OPT period</li>
                      <li>
                        ✔ Open to H-1B sponsorship for long-term employment
                      </li>
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
                    <h2>My Vibe</h2>
                    {/* GIF Animation */}
                    <div className="music-video-container"></div>

                    {/* Songs List */}
                    <div className="album-carousel">
                      <div className="album-track">
                        <img
                          src={TillICollapseImage}
                          alt="Album 1"
                          className="album-cover"
                        />
                        <img
                          src={SunFlowerImage}
                          alt="Album 2"
                          className="album-cover"
                        />
                        <img src={Hymn} alt="Album 3" className="album-cover" />
                        <img src={OneD} alt="Album 4" className="album-cover" />
                        <img
                          src={Stars}
                          alt="Album 5"
                          className="album-cover"
                        />
                        <img
                          src={TillICollapseImage}
                          alt="Album 1"
                          className="album-cover"
                        />
                        <img
                          src={SunFlowerImage}
                          alt="Album 2"
                          className="album-cover"
                        />
                        <img src={Hymn} alt="Album 3" className="album-cover" />
                        <img src={OneD} alt="Album 4" className="album-cover" />
                        <img
                          src={Stars}
                          alt="Album 5"
                          className="album-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeModal === "recommendations" && (
                  <div className="recommendations-modal">
                    <h2 className="recommendations-title">
                      What my past teammates say about me
                    </h2>
                    <div className="testimonials-list">
                      {testimonials.map((testimonial, idx) => (
                        <motion.blockquote
                          key={idx}
                          className="testimonial"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.2 }}
                        >
                          <p>{testimonial.text}</p>
                          <footer>— {testimonial.author}</footer>
                        </motion.blockquote>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

export default Communications;
