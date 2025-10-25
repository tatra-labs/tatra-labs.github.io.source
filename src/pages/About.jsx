import { profile } from "../data/profile";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="about-title-wrapper">
          <h1 className="about-title">About Me</h1>
        </div>
        <p className="about-subtitle">
          Research Engineer • Machine Learning Systems • Open Science Advocate
        </p>
      </div>

      <div className="about-content">
        {/* Bio Section */}
        <section className="bio-section">
          <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
        </section>

        {/* Current Focus */}
        <section className="focus-section">
          <h2 className="section-title">Current Research Focus</h2>
          <div className="focus-grid">
            {profile.currentFocus.map((item, index) => (
              <div key={index} className="focus-item">
                <h3 className="focus-area">{item.area}</h3>
                <p className="focus-description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="philosophy-section">
          <h2 className="section-title">Research Philosophy</h2>
          <div className="philosophy-content">
            <p>{profile.researchPhilosophy}</p>
          </div>
        </section>

        {/* Research Interests */}
        <section className="interests-section">
          <h2 className="section-title">Research Interests</h2>
          <div className="interests-container">
            {profile.researchInterests.map((interest, index) => (
              <div key={index} className="interest-card">
                {interest}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="tech-section">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <div className="tech-category-header">
                <svg
                  className="tech-category-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
                <h3 className="tech-category-title">Frameworks & Libraries</h3>
              </div>
              <div className="tech-badges">
                {profile.technicalSkills.frameworks.map((skill, index) => (
                  <span key={index} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <div className="tech-category-header">
                <svg
                  className="tech-category-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h3 className="tech-category-title">Programming Languages</h3>
              </div>
              <div className="tech-badges">
                {profile.technicalSkills.languages.map((skill, index) => (
                  <span key={index} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <div className="tech-category-header">
                <svg
                  className="tech-category-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <h3 className="tech-category-title">Domain Expertise</h3>
              </div>
              <div className="tech-badges">
                {profile.technicalSkills.domains.map((skill, index) => (
                  <span key={index} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <div className="tech-category-header">
                <svg
                  className="tech-category-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                <h3 className="tech-category-title">Infrastructure & MLOps</h3>
              </div>
              <div className="tech-badges">
                {profile.technicalSkills.infrastructure.map((skill, index) => (
                  <span key={index} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Speaking & Community */}
        <section className="speaking-section">
          <h2 className="section-title">Speaking & Community</h2>
          <div className="speaking-list">
            {profile.speaking.map((item, index) => (
              <div key={index} className="speaking-item">
                <span className="speaking-bullet">→</span>
                <span className="speaking-text">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="certifications-section">
          <h2 className="section-title">Professional Certifications</h2>
          <div className="certifications-grid">
            {profile.certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                <svg
                  className="cert-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="cert-name">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-wrapper">
            <div className="contact-header">
              <h2 className="contact-title">Let's Connect</h2>
              <p className="contact-subtitle">
                Open to collaborations, discussions, and new opportunities
              </p>
            </div>
            <div className="contact-grid">
              <a
                href={`mailto:${profile.contact.email}`}
                className="contact-card"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="contact-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{profile.contact.email}</span>
                </div>
              </a>

              <a
                href={profile.contact.github}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="contact-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">View Profile</span>
                </div>
              </a>

              <a
                href={profile.contact.linkedin}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="contact-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Connect</span>
                </div>
              </a>

              <a
                href={profile.contact.twitter}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="contact-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Twitter</span>
                  <span className="contact-value">Follow</span>
                </div>
              </a>

              <a
                href={profile.contact.facebook}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="contact-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Facebook</span>
                  <span className="contact-value">Connect</span>
                </div>
              </a>

              <a
                href={profile.contact.medium}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="contact-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Medium</span>
                  <span className="contact-value">Read Articles</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
