export default function MedicoGraph() {
  return (
    <section className="project-page">

      {/* ================= HEADER ================= */}
      <h2>Medico Graph</h2>

      <p className="project-intro">
        Medico Graph is a scalable, cloud-deployed medical record management
        system designed to securely manage patient data, medical histories,
        and healthcare workflows using a microservices-based architecture.
      </p>

      {/* ================= OVERVIEW ================= */}
      <div className="project-section">
        <h3>Project Overview</h3>
        <p>
          This project was built to simulate real-world healthcare infrastructure
          where performance, data integrity, security, and scalability are
          mission-critical. The system follows clean architecture principles
          and cloud-native deployment standards to achieve modularity,
          fault tolerance, and high availability.
        </p>
      </div>

      {/* ================= PROBLEM ================= */}
      <div className="project-section">
        <h3>Problem Statement</h3>
        <p>Traditional monolithic healthcare systems often suffer from:</p>
        <ul>
          <li>Tight coupling between services</li>
          <li>Scalability limitations</li>
          <li>High risk of downtime</li>
          <li>Difficult maintenance and feature expansion</li>
          <li>Performance bottlenecks with large datasets</li>
        </ul>
        <p>
          The goal of Medico Graph was to design a distributed system capable
          of handling growing patient data while maintaining low latency and
          secure access.
        </p>
      </div>

      {/* ================= ARCHITECTURE ================= */}
      <div className="project-section">
        <h3>System Architecture</h3>

        <div className="project-tech">
          <div>
            <h4>Frontend</h4>
            <p>
              React.js with component-based architecture, REST API integration,
              controlled forms, validation, and responsive design.
            </p>
          </div>

          <div>
            <h4>Backend</h4>
            <p>
              Node.js + Express.js microservices with RESTful APIs,
              middleware-based request handling, and JWT authentication.
            </p>
          </div>

          <div>
            <h4>Database</h4>
            <p>
              MongoDB with indexed collections, optimized queries,
              aggregation pipelines, and schema validation.
            </p>
          </div>

          <div>
            <h4>Cloud & DevOps</h4>
            <p>
              AWS EC2 for hosting, IAM-based access control,
              environment-based configuration, logging, and monitoring.
            </p>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="project-section">
        <h3>Core Features</h3>
        <ul>
          <li>Patient record creation and management</li>
          <li>Medical history tracking</li>
          <li>Secure service-to-service API communication</li>
          <li>Role-based data access control</li>
          <li>Centralized error handling and structured logging</li>
        </ul>
      </div>

      {/* ================= PERFORMANCE ================= */}
      <div className="project-section">
        <h3>Performance Optimization</h3>
        <ul>
          <li>Indexed frequently queried database fields</li>
          <li>Reduced redundant database calls</li>
          <li>Optimized REST endpoint design</li>
          <li>Efficient aggregation query structuring</li>
        </ul>

        <div className="project-metric">
          Reduced data retrieval time by <strong>15%</strong>
        </div>
      </div>

      {/* ================= ENGINEERING ================= */}
      <div className="project-section">
        <h3>Engineering Principles Applied</h3>
        <ul>
          <li>Object-Oriented Programming (OOP)</li>
          <li>MVC Architecture</li>
          <li>SOLID design principles</li>
          <li>Separation of Concerns</li>
          <li>Middleware-based request lifecycle</li>
        </ul>
      </div>

      {/* ================= SECURITY ================= */}
      <div className="project-section">
        <h3>Security Implementation</h3>
        <ul>
          <li>JWT-based authentication</li>
          <li>Input validation and sanitization middleware</li>
          <li>Secure environment variable management</li>
          <li>IAM-based AWS access control</li>
        </ul>
      </div>

      {/* ================= LEARNINGS ================= */}
      <div className="project-section">
        <h3>Key Learnings</h3>
        <ul>
          <li>Designing distributed microservices systems</li>
          <li>Managing service-to-service communication</li>
          <li>Handling production-grade error scenarios</li>
          <li>Cloud deployment and infrastructure strategy</li>
          <li>Writing clean, extensible backend code</li>
        </ul>
      </div>

      {/* ================= IMPACT ================= */}
      <div className="project-section">
        <h3>Impact</h3>
        <p>
          Medico Graph demonstrates the ability to design and build
          enterprise-level backend systems with scalable microservices,
          secure APIs, and cloud-native deployment — reflecting real-world
          healthcare and SaaS engineering standards.
        </p>
      </div>

      {/* ================= BACK ================= */}
      <div className="project-back">
        <a href="/" className="button">← Back to Home</a>
      </div>

    </section>
  );
}