"use client";

import { useState } from "react";
import { profile, formspreeEndpoint } from "@/lib/data";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="section section--dots" id="contact">
      <div className="container">
        <h2 className="section__title">
          Contact Me
          <span className="section__accent-line" />
        </h2>
        <p className="section__subtitle">
          Have a project in mind or want to say hi? Let&apos;s connect!
        </p>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            <div className="contact__info-card">
              <span className="contact__info-icon">
                <Phone size={20} />
              </span>
              <div>
                <p className="contact__info-label">Phone</p>
                <p className="contact__info-value">{profile.phone}</p>
              </div>
            </div>

            <div className="contact__info-card">
              <span className="contact__info-icon">
                <Mail size={20} />
              </span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">{profile.email}</p>
              </div>
            </div>

            <div className="contact__info-card">
              <span className="contact__info-icon">
                <MapPin size={20} />
              </span>
              <div>
                <p className="contact__info-label">Address</p>
                <p className="contact__info-value">{profile.address}</p>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href={profile.socials.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
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
                className="contact__social-link"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form">
            <h3 className="contact__form-title">Write me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="contact__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="contact-name"
                />
              </div>
              <div className="contact__form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                  className="contact__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="contact-email"
                />
              </div>
              <div className="contact__form-group">
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  className="contact__input"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  id="contact-message"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="btn btn--primary contact__form-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="spinning" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="contact__form-status contact__form-status--success">
                  <CheckCircle2 size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="contact__form-status contact__form-status--error">
                  <XCircle size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />
                  Failed to send. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
