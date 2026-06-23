import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const bgColors = ["#dcf4ff", "#fffcc2", "#f0e6ff", "#e8ffdb"];

export default function Projects() {
  return (
    <section className="section section--dots" id="projects" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="container">
        <h2 className="section__title">
          My Projects
          <span className="section__accent-line" />
        </h2>
        <p className="section__subtitle">
          Things I&apos;ve built and contributed to
        </p>

        <div className="projects__list">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{
                "--index": i,
                "--card-bg": bgColors[i % bgColors.length],
              }}
            >
              {/* Watermark Background Image */}
              <div className="project-card__bg-image-wrapper" style={{ position: 'absolute' }}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="project-card__bg-image"
                />
              </div>

              <div className="project-card__body">
                <span className="project-card__segment-label">
                  SEGMENT 0{i + 1}
                </span>
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.details}</p>
                <div className="project-card__tech">
                  {project.tech.split(",").map((t) => (
                    <span key={t.trim()} className="project-card__tag">
                      {t.trim()}
                    </span>
                  ))}
                </div>
                <div className="project-card__cta-wrapper">
                  <span className="project-card__cta">
                    View Project <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
