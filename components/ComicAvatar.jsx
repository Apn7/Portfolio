"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const sectionData = {
  home: {
    image: "/assets/img/avatar_greet.png",
    message: "Hey! I'm Ekramul. Welcome to my digital workspace! 👋",
  },
  about: {
    image: "/assets/img/avatar_curious.png",
    message: "I study CSE at KUET and solve programming puzzles for fun. My Codeforces max rating is 1257! 🧩",
  },
  resume: {
    image: "/assets/img/avatar_thinking.png",
    message: "Here is my timeline. I worked as a part-time dev for TechnoPLUS IT building modular Laravel/Vue website! 💼",
  },
  activities: {
    image: "/assets/img/avatar_excited.png",
    message: "From hackathons to organising events, I love team collaborations. Best Team Winner batch 2k20! 🏆",
  },
  skills: {
    image: "/assets/img/avatar_geeky.png",
    message: "I specialize in React/Next.js, Laravel, C++, and API designs. Hover over the stickers to see what I copy-paste daily! 💻",
  },
  projects: {
    image: "/assets/img/avatar_proud.png",
    message: "Check out what I've built! The AI-powered course assistant is my favorite. Which one do you like? 🚀",
  },
  contact: {
    image: "/assets/img/avatar_greet.png",
    message: "Drop me a line below! I'll reply faster than my OMNeT++ cache-prediction algorithms. ✉️",
  },
};

const wittyMessages = [
  "Hey! Why are you clicking me? Go inspect my projects! 😠",
  "Did you just click me? That is a +15ms click latency right there! ⏱️",
  "Looking for bugs? Try checking the browser console, I'm perfectly compiled! 🐛",
  "Stop clicking! I'm running on Vercel free tier, let's save some bandwidth! 💸",
  "Are you trying to inspect element? Please be gentle! 🔍",
];

export default function ComicAvatar() {
  const [visible, setVisible] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSuspicious, setIsSuspicious] = useState(false);
  const [wittyIndex, setWittyIndex] = useState(0);
  const timeoutRef = useRef(null);
  const autoCloseTimeoutRef = useRef(null);
  const lastSectionRef = useRef("home");

  const triggerAutoClose = () => {
    if (autoCloseTimeoutRef.current) clearTimeout(autoCloseTimeoutRef.current);
    autoCloseTimeoutRef.current = setTimeout(() => {
      setBubbleOpen(false);
    }, 5000);
  };

  useEffect(() => {
    // Entrance delay for the avatar
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    // Auto open speech bubble after a short delay
    const bubbleTimer = setTimeout(() => {
      setBubbleOpen(true);
      if (window.innerWidth < 768) {
        triggerAutoClose();
      }
    }, 3000);

    // Scroll listener for section detection
    const handleScroll = () => {
      const sections = ["home", "about", "resume", "activities", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 200; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(bubbleTimer);
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (autoCloseTimeoutRef.current) clearTimeout(autoCloseTimeoutRef.current);
    };
  }, []);

  // When active section changes, reset suspicious state and display new section's text
  useEffect(() => {
    if (visible) {
      const handle = requestAnimationFrame(() => {
        setIsSuspicious(false);

        const prevSection = lastSectionRef.current;
        lastSectionRef.current = activeSection;

        // Only update overlay states if the active section actually changed
        if (prevSection !== activeSection) {
          const mobile = window.innerWidth < 768;
          if (mobile) {
            // On mobile, only auto-show the bubble when returning to the Hero section
            if (activeSection === "home") {
              setBubbleOpen(true);
              triggerAutoClose();
            } else {
              setBubbleOpen(false);
            }
          } else {
            // Desktop behavior: always open when scrolling to a new section
            setBubbleOpen(true);
          }
        }
      });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return () => cancelAnimationFrame(handle);
    }
  }, [activeSection, visible]);

  const handleAvatarClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (autoCloseTimeoutRef.current) clearTimeout(autoCloseTimeoutRef.current);

    if (!bubbleOpen) {
      setIsSuspicious(false);
      setBubbleOpen(true);
    } else {
      setIsSuspicious(true);
      setWittyIndex(Math.floor(Math.random() * wittyMessages.length));

      timeoutRef.current = setTimeout(() => {
        setIsSuspicious(false);
      }, 4500);
    }

    if (window.innerWidth < 768) {
      triggerAutoClose();
    }
  };

  const closeBubble = (e) => {
    e.stopPropagation();
    if (autoCloseTimeoutRef.current) clearTimeout(autoCloseTimeoutRef.current);
    setBubbleOpen(false);
  };

  const currentData = sectionData[activeSection] || sectionData.home;
  const currentImg = isSuspicious ? "/assets/img/avatar_suspicious.png" : currentData.image;
  const currentMsg = isSuspicious ? wittyMessages[wittyIndex] : currentData.message;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="comic-avatar-container"
          initial={{ x: -120 }}
          animate={{ x: -20 }}
          exit={{ x: -120 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          whileHover={{ x: 0 }}
        >
          <div className="comic-avatar-wrapper" onClick={handleAvatarClick}>
            {/* Wrap the image in a motion container with a key to animate on change */}
            <motion.div
              key={currentImg}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 15 }}
            >
              <Image
                src={currentImg}
                alt="Ekramul Alam Comic Avatar"
                width={90}
                height={90}
                className="comic-avatar-img"
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {bubbleOpen && (
                <motion.div
                  key={currentMsg}
                  className="comic-bubble"
                  initial={{ scale: 0, opacity: 0, originX: 0, originY: 1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  onClick={(e) => e.stopPropagation()} // Prevent bubble click from triggering avatar click
                >
                  <button
                    className="comic-bubble__close"
                    onClick={closeBubble}
                    aria-label="Close message"
                  >
                    <X size={10} strokeWidth={3} />
                  </button>
                  <p>{currentMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
