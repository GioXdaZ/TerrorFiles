import { motion } from "framer-motion";
import imgs from "./images";
import "./Carousel.css";
import { useRef, useEffect, useState } from "react";

export const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {imgs.map((img) => {
          return (
            <motion.div className="item" key={img}>
              <img src={img} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
