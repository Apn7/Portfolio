"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Activities", href: "#activities" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i].href.slice(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container">
        <a href="#home" className="navbar__logo">
          Ekramul<span>.</span>
        </a>

        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`navbar__link ${
                  activeSection === item.href.slice(1)
                    ? "navbar__link--active"
                    : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <a href="#contact" className="navbar__cta">
            Hire Me
          </a>
          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile overlay */}
        <div
          className={`navbar__overlay ${
            mobileOpen ? "navbar__overlay--visible" : ""
          }`}
          onClick={closeMobile}
        />

        {/* Mobile menu */}
        <div
          className={`navbar__mobile-menu ${
            mobileOpen ? "navbar__mobile-menu--open" : ""
          }`}
        >
          <button
            className="navbar__mobile-close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__mobile-link"
              onClick={closeMobile}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
