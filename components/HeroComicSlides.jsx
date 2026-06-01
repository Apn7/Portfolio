"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slideImages = [
  {
    src: "/assets/img/comic_page_coding.png",
    alt: "Ekramul solving coding puzzles comic panel",
  },
  {
    src: "/assets/img/comic_page_dev.png",
    alt: "Ekramul building full-stack apps remote setup comic panel",
  },
  {
    src: "/assets/img/comic_page_hobbies.png",
    alt: "Ekramul's hobbies: gym, gaming, reading, shows comic panel",
  },
  {
    src: "/assets/img/comic_page_cr7.png",
    alt: "Cristiano Ronaldo SIUUU celebration and football passion comic panel",
  },
  {
    src: "/assets/img/comic_page_university.png",
    alt: "Boring lectures vs exciting coding at KUET comic panel",
  },
];

export default function HeroComicSlides() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideImages.length);
    }, 4500); // Swap pages every 4.5 seconds (faster transition)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="comic-slides-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="comic-slide-wrapper"
          initial={{ rotateY: 90, scale: 0.95, x: 80, opacity: 0 }}
          animate={{ rotateY: 0, scale: 1, x: 0, opacity: 0.15 }} // More visible opacity (0.12)
          exit={{ rotateY: -90, scale: 0.95, x: -80, opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }} // Snappy custom cubic-bezier page-turn
          style={{ transformOrigin: "left center" }}
        >
          <div className="comic-page-img-wrapper">
            <Image
              src={slideImages[index].src}
              alt={slideImages[index].alt}
              fill
              className="comic-page-img"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
