export default function SkillsSection() {
  return (
    <section className="container reveal" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="bento-grid">
        <div className="bento-item">
          <h3>Frontend</h3>
          <p>React, JavaScript, TypeScript, CSS</p>
        </div>

        <div className="bento-item">
          <h3>Backend</h3>
          <p>Node.js, Express, REST APIs, MongoDB</p>
        </div>

        <div className="bento-item">
          <h3>DevOps</h3>
          <p>AWS, CI/CD, Git, Docker</p>
        </div>

        <div className="bento-item">
          <h3>UI / UX</h3>
          <p>Glassmorphism, Motion Design, Accessibility</p>
        </div>
      </div>
    </section>
  );
}