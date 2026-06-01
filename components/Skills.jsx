"use client";

import { skills } from "@/lib/data";
import { Code, Globe, Database, Brain, Wrench, Cpu, MessageSquare } from "lucide-react";

const iconMap = {
  Code,
  Globe,
  Database,
  Brain,
  Wrench,
  Cpu,
  MessageSquare,
};

function SkillTag({ name }) {
  return (
    <span className="skill-tag">
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="section section--dots" id="skills">
      <div className="container">
        <h2 className="section__title">
          Skills
          <span className="section__accent-line" />
        </h2>
        <p className="section__subtitle">
          Technologies and tools I work with
        </p>

        <div className="skills__grid">
          {Object.entries(skills).map(([key, cat]) => {
            const IconComponent = iconMap[cat.icon] || Code;
            const isWebDev = key === "webDev";
            const isCommunication = key === "communication";
            const cardClass = `skills__category ${
              isWebDev ? "skills__category--webdev" : ""
            } ${isCommunication ? "skills__category--communication" : ""}`;

            return (
              <div
                key={key}
                className={cardClass}
                style={{ "--badge-hover-color": cat.color }}
              >
                <div className="skills__category-header">
                  <h3 className="skills__category-title">
                    <IconComponent size={14} className="skills__category-icon-inline" />
                    {cat.title}
                  </h3>
                </div>

                <div className="skills__category-content">
                  {cat.core && cat.core.length > 0 && (
                    <div className="skills__group">
                      <h4 className="skills__group-title">⚡ Core Stack</h4>
                      <div className="skills__tags">
                        {cat.core.map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </div>
                  )}

                  {cat.familiar && cat.familiar.length > 0 && (
                    <div className="skills__group">
                      <h4 className="skills__group-title">🌱 Familiar</h4>
                      <div className="skills__tags">
                        {cat.familiar.map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
