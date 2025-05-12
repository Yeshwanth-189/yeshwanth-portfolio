import React, { useEffect, useRef, useState } from "react";
import "../styles/EducationSection.css";
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
  const popupRefs = Array.from({ length: 5 }, () => useRef(null));
  const [scrollingUp, setScrollingUp] = useState(false);
  const lastScrollTop = useRef(window.scrollY);

  // useInView for each popup
  const inViewStates = popupRefs.map((ref) =>
    useInView(ref, { threshold: 0.5 })
  );

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

      const progress = 1 - Math.min(scrollTop / maxScroll, 1);

      setScrollingUp(scrollTop < lastScrollTop.current);
      lastScrollTop.current = scrollTop;

      if (rocketRef.current) {
        rocketRef.current.style.bottom = `${progress * 100}%`;
      }

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

  const popups = [
    {
      side: "right",
      title: "Master’s",
      desc: "Specialized in cloud and distributed systems.",
      img: stoporange,
    },
    {
      side: "left",
      title: "Software Engineer",
      desc: "Built scalable backend services at Roostify.",
      img: stoppurple,
    },
    {
      side: "right",
      title: "Internship",
      desc: "Worked on full-stack features during internship.",
      img: stopyellow,
    },
    {
      side: "left",
      title: "Bachelor’s",
      desc: "Graduated in CS from VIT University.",
      img: stopblue,
    },
    {
      side: "right",
      title: "Pre-University",
      desc: "Completed high school at XYZ Academy.",
      img: stopgreen,
    },
  ];

  return (
    <div className="edu-section">
      <div className="edu-grid" />
      <div className="col-1" />
      <div className="col-2to11">
        <div className="edu-markers">
          <img src={stopstar} alt="Star" className="marker star" />

          {popups.map((popup, i) => (
            <div className="planet-with-popup" key={i}>
              <img
                src={popup.img}
                alt={`Planet ${i}`}
                className="marker planet"
              />
              <motion.div
                className={`planet-popup ${popup.side}`}
                ref={popupRefs[i]}
                initial={{ opacity: 0, x: popup.side === "left" ? -100 : 100 }}
                animate={
                  inViewStates[i] && scrollingUp
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: popup.side === "left" ? -100 : 100 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3>{popup.title}</h3>
                <p>{popup.desc}</p>
              </motion.div>
            </div>
          ))}

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
