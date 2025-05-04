import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ProfessionalMemories.css";

// Dummy image imports (replace with your actual images)
import memory1 from "../assets/memory1.jpeg";
import memory2 from "../assets/memory2.jpeg";
import memory3 from "../assets/memory3.jpeg";
import memory4 from "../assets/memory4.jpeg";
import memory5 from "../assets/memory5.png";
import memory6 from "../assets/memory6.jpeg";

const memories = [memory1, memory2, memory3, memory4, memory5, memory6];

function ProfessionalMemories() {
  const [showMemories, setShowMemories] = useState(false);

  const handleLoadMemories = () => {
    setShowMemories(true);
  };

  return (
    <section className="professional-memories-section">
      <div className="professional-grid">
        <div className="col-1"></div>

        <div className="col-2to6 memories-left">
          <button className="load-memories-button" onClick={handleLoadMemories}>
            Load Memories
          </button>

          <div className="memories-gallery">
            <AnimatePresence>
              {showMemories &&
                memories.slice(0, 2).map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Memory ${index + 1}`}
                    className="memory-image"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.5,
                    }}
                  />
                ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="col-7to11 memories-right">
          <div className="memories-gallery">
            <AnimatePresence>
              {showMemories &&
                memories.slice(2, 4).map((img, index) => (
                  <motion.img
                    key={index + 2}
                    src={img}
                    alt={`Memory ${index + 3}`}
                    className="memory-image"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.5,
                    }}
                  />
                ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="col-12"></div>
      </div>
    </section>
  );
}

export default ProfessionalMemories;
