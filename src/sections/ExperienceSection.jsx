export default function ExperienceSection() {
  return (
    <section className="container reveal" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="bento-grid">
        <div className="bento-item">
          <h3>Full-Stack Developer Intern</h3>
          <h4 className="text-muted">Collabera · Canada</h4>
          <p>
            Built internal SaaS platforms, React dashboards,
            Node.js APIs, and CI/CD pipelines for enterprise systems.
          </p>
        </div>

        <div className="bento-item">
          <h3>Web Developer</h3>
          <h4 className="text-muted">Invints InfoTech</h4>
          <p>
            Developed production websites, authentication systems,
            and backend integrations.
          </p>
        </div>
      </div>
    </section>
  );
}