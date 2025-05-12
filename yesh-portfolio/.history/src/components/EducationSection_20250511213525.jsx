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

import { RiGraduationCapFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";

export default function EducationSection() {
  const rocketRef = useRef(null);
  const lineRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const inView1 = useInView(ref1, { threshold: 0.5 });
  const inView2 = useInView(ref2, { threshold: 0.5 });
  const inView3 = useInView(ref3, { threshold: 0.5 });
  const inView4 = useInView(ref4, { threshold: 0.5 });
  const inView5 = useInView(ref5, { threshold: 0.5 });
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
              ref={ref1}
              initial={{ opacity: 0, x: 60 }}
              animate={
                inView1 && scrollingUp
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 60 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="education-popup">
                <h3>
                  Master&apos;s Degree <RiGraduationCapFill />
                </h3>
                <p className="highlight">
                  <strong>University of California, Riverside</strong>
                </p>
                <p className="highlight">
                  <strong>CGPA:</strong> 3.9 / 4
                </p>
                <p className="highlight">Sept 2024 - Dec 2025</p>
                <div>
                  <strong>Relevant Coursework:</strong>
                  <ul>
                    <li>Design & Analysis of Algorithms</li>
                    <li>Machine Learning</li>
                    <li>Cloud Computing & Networking</li>
                    <li>Advanced DBMS</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="planet-with-popup">
            <img src={stoppurple} alt="Planet 2" className="marker planet" />
            <motion.div
              className="planet-popup left"
              ref={ref2}
              initial={{ opacity: 0, x: -120 }}
              animate={
                inView2 && scrollingUp
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -120 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="education-popup">
                <h3>
                  Software Engineer <MdWork />
                </h3>
                <p className="highlight">
                  <strong>BETSOL, Bengaluru, India</strong>
                </p>
                <p className="highlight">Jul 2023 - Sept 2024</p>
                <div>
                  <strong>Projects:</strong>
                  <ul>
                    <li>Global Scalability of CSP</li>
                    <li>AWS Migration</li>
                    <li>Git Migration</li>
                    <li>Business Impactful POCs</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="planet-with-popup">
            <img src={stopyellow} alt="Planet 3" className="marker planet" />
            <motion.div
              className="planet-popup right"
              ref={ref3}
              initial={{ opacity: 0, x: 60 }}
              animate={
                inView3 && scrollingUp
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 60 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="education-popup">
                <h3>
                  Internship <MdWork />
                </h3>
                <p className="highlight">
                  <strong>Techie Aid, Bengaluru, India</strong>
                </p>
                <p className="highlight">Jun 2022 - Dec 2022</p>
                <div>
                  <strong>Work:</strong>
                  <ul>
                    <li>Designed UI/UX</li>
                    <li>Front End Development</li>
                    <li>.NET MVC and Web Forms</li>
                    <li>Database Design</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="planet-with-popup">
            <img src={stopblue} alt="Planet 4" className="marker planet" />
            <motion.div
              className="planet-popup left"
              ref={ref4}
              initial={{ opacity: 0, x: -120 }}
              animate={
                inView4 && scrollingUp
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -120 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="education-popup">
                <h3>
                  Bachelor&apos;s Degree <RiGraduationCapFill />
                </h3>
                <p className="highlight">
                  <strong>RNSIT, Bengaluru, India</strong>
                </p>
                <p className="highlight">
                  <strong>CGPA:</strong> 9.1 / 10
                </p>
                <p className="highlight">Aug 2019 - Jun 2023</p>
                <div>
                  <strong>Relevant Coursework:</strong>
                  <ul>
                    <li>Advanced Mathematics</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Object Oriented Programming</li>
                    <li>Software Engineering</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="planet-with-popup">
            <img src={stopgreen} alt="Planet 5" className="marker planet" />
            <motion.div
              className="planet-popup right"
              ref={ref5}
              initial={{ opacity: 0, x: 60 }}
              animate={
                inView5 && scrollingUp
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 60 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="education-popup">
                <h3>
                  Pre-University College <RiGraduationCapFill />
                </h3>
                <p className="highlight">
                  <strong>VVS Sardar Patel, Bengaluru, India</strong>
                </p>
                <p className="highlight">
                  <strong>Percentage:</strong> 92.3%
                </p>
                <p className="highlight">Aug 2019 - Jun 2023</p>
                <div>
                  <strong>Relevant Coursework:</strong>
                  <ul>
                    <li>Advanced Mathematics</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Object Oriented Programming</li>
                    <li>Software Engineering</li>
                  </ul>
                </div>
              </div>
            </motion.div>
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
