export default function ExperienceSection() {
  return (
    <section className="section reveal experience-animated" id="experience">
      <h2 className="section-title">Professional Experience</h2>

      <div className="experience-timeline">
        {/* ===== Collabera ===== */}
        <div className="experience-item delay-1">
          <div className="experience-header">
            <h3>Full-Stack Developer Intern</h3>
            <span>
              Collabera Pvt. Ltd. · Vadodara, India
            </span>
            
          </div>

          <ul className="experience-points">
            <li>
              Developed internal auditing SaaS applications, improving expense
              tracking efficiency by <strong>20%</strong>.
            </li>
            <li>
              Built scalable backend services using <strong>Node.js</strong> and{" "}
              <strong>Express.js</strong>.
            </li>
            <li>
              Designed <strong>React.js</strong> dashboards with Tailwind CSS and{" "}
              <strong>D3.js</strong>, reducing manual analysis time by{" "}
              <strong>40%</strong>.
            </li>
            <li>
              Applied <strong>Jest</strong> and <strong>Jasmine</strong> testing,
              OOP, SOLID principles, CI/CD pipelines, and Git-based workflows.
            </li>
          </ul>
        </div>

        {/* ===== Invints ===== */}
        <div className="experience-item delay-2">
          <div className="experience-header">
            <h3>Web Developer Intern</h3>
            <span>
              Invints InfoTech Pvt. Ltd.
            </span>
          </div>

          <ul className="experience-points">
            <li>
              Built a responsive school website using <strong>React</strong>,{" "}
              <strong>Express.js</strong>, and <strong>Material UI</strong>.
            </li>
            <li>
              Implemented <strong>OAuth 2.0</strong> authentication, reducing
              unauthorized access by <strong>10%</strong>.
            </li>
            <li>
              Managed data with <strong>MongoDB</strong> and optimized deployment
              via <strong>GitLab CI/CD</strong>.
            </li>
            <li>
              Followed Agile practices, testing frameworks, and software design
              principles.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}