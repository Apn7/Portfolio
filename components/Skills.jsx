"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/data";

function SkillBar({ name, percentage }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills__item" ref={ref}>
      <div className="skills__header">
        <span className="skills__name">{name}</span>
        <span className="skills__percentage">{percentage}%</span>
      </div>
      <div className="skills__bar">
        <div
          className={`skills__fill ${animated ? "skills__fill--animated" : ""}`}
          style={{ width: animated ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section__title">
          Skills
          <span className="section__accent-line" />
        </h2>
        <p className="section__subtitle">
          Technologies and tools I work with
        </p>

        <div className="skills__grid">
          <div className="skills__category">
            <h3 className="skills__category-title">Programming Languages</h3>
            {skills.programming.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>

          <div className="skills__category">
            <h3 className="skills__category-title">Web Development</h3>
            {skills.webDev.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
