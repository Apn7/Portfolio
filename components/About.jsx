import { profile } from "@/lib/data";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="about section section--dots" id="about">
      <div className="container">
        <h2 className="section__title">
          {profile.hello}
          <span className="section__accent-line" />
        </h2>
        <p className="section__subtitle">Get to know me</p>

        <div className="about__content">
          <p className="about__text">{profile.about}</p>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
