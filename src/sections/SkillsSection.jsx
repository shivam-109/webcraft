export default function SkillsSection() {
  return (
    <section className="section skills-advanced reveal" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-intro">
        Over the years, I’ve worked across the full stack — designing interfaces,
        building scalable backend systems, and deploying applications with
        production-grade infrastructure.
      </div>

      <div className="skills-grid-advanced">
        <div className="skills-block">
          <h3>Frontend Engineering</h3>
          <p className="skills-desc">
            Building fast, accessible, and scalable user interfaces with clean
            component architecture.
          </p>
          <ul>
            <li>React (Hooks, component-driven UI)</li>
            <li>TypeScript & modern JavaScript</li>
            <li>Responsive layouts & animations</li>
          </ul>
        </div>

        <div className="skills-block">
          <h3>Backend Development</h3>
          <p className="skills-desc">
            Designing modular and maintainable backend systems following best
            practices.
          </p>
          <ul>
            <li>Node.js & Express REST APIs</li>
            <li>Authentication (JWT, OAuth)</li>
            <li>MongoDB schema & data modeling</li>
          </ul>
        </div>

        <div className="skills-block">
          <h3>Cloud & DevOps</h3>
          <p className="skills-desc">
            Ensuring applications are production-ready, reliable, and automated.
          </p>
          <ul>
            <li>AWS (EC2, S3, deployments)</li>
            <li>CI/CD pipelines</li>
            <li>Docker & containerization</li>
          </ul>
        </div>

        <div className="skills-block">
          <h3>Engineering Practices</h3>
          <p className="skills-desc">
            Writing code that is easy to understand, test, and scale over time.
          </p>
          <ul>
            <li>Clean code & SOLID principles</li>
            <li>Unit testing (Jest, Jasmine)</li>
            <li>Agile & Git workflows</li>
          </ul>
        </div>
      </div>
    </section>
  );
}