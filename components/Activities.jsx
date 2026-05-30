import { activities } from "@/lib/data";
import { Trophy, Users, Megaphone, Award, Terminal } from "lucide-react";

const getIcon = (role) => {
  const r = role.toLowerCase();
  if (r.includes("finalist")) return <Trophy size={20} />;
  if (r.includes("executive")) return <Users size={20} />;
  if (r.includes("editor") || r.includes("campaign")) return <Megaphone size={20} />;
  if (r.includes("best team") || r.includes("winner")) return <Award size={20} />;
  return <Terminal size={20} />;
};

export default function Activities() {
  return (
    <section className="section section--dots" id="activities">
      <div className="container">
        <h2 className="section__title">
          Activities & Achievements
          <span className="section__accent-line" />
        </h2>
        <p className="section__subtitle">
          Leadership roles, hackathons, and programming contest achievements
        </p>

        <div className="activities__grid">
          {activities.map((item, i) => (
            <div className="activity-card" key={i}>
              <div className="activity-card__header">
                <div className="activity-card__icon-wrapper">
                  {getIcon(item.role)}
                </div>
                <span className="activity-card__time">{item.time}</span>
              </div>
              <h3 className="activity-card__title">{item.title}</h3>
              <span className="activity-card__role">{item.role}</span>
              <p className="activity-card__desc">{item.details}</p>
              <span className="activity-card__location">{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
