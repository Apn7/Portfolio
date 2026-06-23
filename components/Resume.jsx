import { education, experience } from "@/lib/data";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Resume() {
  return (
    <section className="section section--dots" id="resume">
      <div className="container">
        <h2 className="section__title">
          Resume
          <span className="section__accent-line" />
        </h2>
        <p className="section__subtitle">My education and experience</p>

        <div className="resume__grid">
          {/* Education */}
          <div>
            <h3 className="resume__column-title">
              <span className="resume__column-icon">
                <GraduationCap size={18} />
              </span>
              Education
            </h3>
            <div className="timeline">
              {education.map((item, i) => (
                <div className="timeline__item" key={i}>
                  <span className="timeline__dot" />
                  <div className="timeline__card">
                    <span className="timeline__time">{item.time}</span>
                    <h4 className="timeline__title">{item.title}</h4>
                    <p className="timeline__desc">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="resume__column-title">
              <span className="resume__column-icon">
                <Briefcase size={18} />
              </span>
              Experience
            </h3>
            <div className="timeline">
              {experience.map((item, i) => (
                <div className="timeline__item" key={i}>
                  <span className="timeline__dot" />
                  <div className="timeline__card">
                    <span className="timeline__time">{item.time}</span>
                    <h4 className="timeline__title">{item.title}</h4>
                    <p className="timeline__desc">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
