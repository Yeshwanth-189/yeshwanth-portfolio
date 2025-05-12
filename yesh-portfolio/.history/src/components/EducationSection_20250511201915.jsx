import React, { useEffect, useRef, useState } from "react";
import "../styles/EducationSection.css";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

import stopstar from "../assets/stopstar.png";
import stoprocket from "../assets/stoprocket.png";
import stopblue from "../assets/stopblue.png";
import stopyellow from "../assets/stopyellow.png";
import stoppurple from "../assets/stoppurple.png";
import stoporange from "../assets/stoporange.png";
import stopgreen from "../assets/stopgreen.png";

export default function EducationSection() {
  const rocketRef = useRef(null);
  const lineRef = useRef(null);
  const popupRef = useRef(null);
  const isInView = useInView(popupRef, { threshold: 0.5 });
  const [scrollingUp, setScrollingUp] = useState(false);
  const lastScrollTop = useRef(window.scrollY);

  useEffect(() => {
    // scroll to bottom on first render
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = 1 - Math.min(scrollTop / maxScroll, 1); // Inverted [1 → 0]

      // Detect scroll direction
      setScrollingUp(scrollTop < lastScrollTop.current);
      lastScrollTop.current = scrollTop;

      // Move rocket based on scroll progress
      if (rocketRef.current) {
        rocketRef.current.style.bottom = `${progress * 100}%`;
      }

      // Grow line based on scroll progress
      if (lineRef.current) {
        lineRef.current.style.setProperty(
          "--line-progress",
          `${progress * 100}%`
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="edu-section">
      <div className="edu-grid" />
      <div className="col-1" />
      <div className="col-2to11">
        <div className="edu-markers">
          <img src={stopstar} alt="Star" className="marker star" />

          <div className="planet-with-popup">
            <img src={stoporange} alt="Planet 1" className="marker planet" />
            <motion.div
              className="planet-popup right"
              ref={popupRef}
              initial={{ opacity: 0, x: 60 }}
              animate={
                isInView && scrollingUp
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 60 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3>Master’s</h3>
              <p>Specialized in cloud and distributed systems.</p>
            </motion.div>
          </div>

          <div className="planet-with-popup">
            <img src={stoppurple} alt="Planet 2" className="marker planet" />
            <motion.div
              className="planet-popup right"
              ref={popupRef}
              initial={{ opacity: 0, x: 60 }}
              animate={
                isInView && scrollingUp
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 60 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3>Software Engineer</h3>
              <p>Built scalable backend services at Roostify.</p>
            </motion.div>
          </div>
          <div className="planet-with-popup">
            <img src={stopyellow} alt="Planet 3" className="marker planet" />
            <motion.div
              className="planet-popup right"
              ref={popupRef}
              initial={{ opacity: 0, x: 60 }}
              animate={
                isInView && scrollingUp
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 60 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3>Internship</h3>
              <p>Worked on full-stack features during internship.</p>
            </motion.div>
          </div>
          <div className="planet-with-popup">
            <img src={stopblue} alt="Planet 4" className="marker planet" />
            <div className="planet-popup left">
              <h3>Bachelor’s</h3>
              <p>Graduated in CS from VIT University.</p>
            </div>
          </div>
          <div className="planet-with-popup">
            <img src={stopgreen} alt="Planet 5" className="marker planet" />
            <div className="planet-popup right">
              <h3>Pre-University</h3>
              <p>Completed high school at XYZ Academy with distinction.</p>
            </div>
          </div>
          <div ref={lineRef} className="edu-line" />
          <img
            src={stoprocket}
            alt="Rocket"
            className="rocket"
            ref={rocketRef}
          />
        </div>
      </div>
      <div className="col-12" />
    </div>
  );
}
