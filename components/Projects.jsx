import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ background: "var(--bg-alt)" }}>
      <div className="container">
        <h2 className="section__title">
          My Projects
          <span className="section__accent-line" />
        </h2>
        <p className="section__subtitle">
          Things I&apos;ve built and contributed to
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-card__image-wrapper">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={200}
                  className="project-card__image"
                />
                <div className="project-card__overlay">
                  <span className="project-card__view">
                    <ExternalLink size={16} />
                    View Project
                  </span>
                </div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.details}</p>
                <div className="project-card__tech">
                  {project.tech.split(",").map((t) => (
                    <span key={t.trim()} className="project-card__tag">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
