"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import Image from "next/image";

const titles = ["CSE Undergraduate", "Full-Stack Developer", "Competitive Programmer", "Problem Solver"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero__container container">
        <div className="hero__image-wrapper">
          <div className="hero__image-ring">
            <Image
              src={profile.imgUrl}
              alt={profile.name}
              width={300}
              height={300}
              className="hero__image"
              priority
            />
          </div>
        </div>

        <div className="hero__content">
          <span className="hero__greeting">Welcome to my portfolio</span>

          <h1 className="hero__name">
            I&apos;m <span>{profile.name}</span>
          </h1>

          <p className="hero__title">
            {titles[titleIndex].slice(0, charIndex)}
            <span className="hero__title-cursor" />
          </p>

          <div className="hero__info-list">
            <div className="hero__info-item">
              <span className="hero__info-icon">
                <Mail size={16} />
              </span>
              {profile.email}
            </div>
            <div className="hero__info-item">
              <span className="hero__info-icon">
                <Phone size={16} />
              </span>
              {profile.phone}
            </div>
            <div className="hero__info-item">
              <span className="hero__info-icon">
                <MapPin size={16} />
              </span>
              {profile.address}
            </div>
          </div>

          <div className="hero__actions">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn--outline">
              Contact Me
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href={profile.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Codeforces"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="8" width="4" height="14" rx="1" fill="currentColor" stroke="none" />
                <rect x="10" y="3" width="4" height="19" rx="1" fill="currentColor" stroke="none" />
                <rect x="16" y="13" width="4" height="9" rx="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
