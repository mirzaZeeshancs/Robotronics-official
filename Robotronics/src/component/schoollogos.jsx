import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import s1 from "../assets/logo/Sabis.svg";
import s2 from "../assets/logo/lgs.svg";
import s3 from "../assets/logo/LACAS.svg";
import s4 from "../assets/logo/BHS.svg";
import s5 from "../assets/logo/BHS (1).svg";
import Aos from "aos";

const items = [s1, s2, s3, s4, s5, s1, s2, s3, s4, s5]; // Array of logos

const SchoolLogos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 2000; // Speed for the interval in ms

  useEffect(() => {
    // Initialize AOS if available
    if (Aos?.init) Aos.init();

    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setScrollPosition((prev) => (prev + 14.28) % 100); // Wrap around at 100%
      }, scrollSpeed);
    }

    return () => clearInterval(interval); // Cleanup interval on unmount or pause
  }, [isPaused]); // Re-run effect when isPaused changes

  return (
    <div className="bg-lightgray p-5 z-10 overflow-hidden">
      <div
        className="flex items-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)} // Pause on hover
        onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
      >
        <div className="flex items-center overflow-hidden">
          <motion.div
            className="flex gap-4 justify-center" // Center logos horizontally
            style={{ transform: `translateX(-${scrollPosition}%)` }}
            animate={{ x: `-${scrollPosition}%` }}
            transition={{ duration: 2, loop: Infinity, ease: "linear" }}
          >
            {items.map((item, index) => (
              <motion.img
                key={index}
                className="max-w-xs md:max-w-sm lg:max-w-md" // Limit logo width for responsiveness
                src={item}
                alt={`img${index}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLogos;
