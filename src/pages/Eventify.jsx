export default function Eventify() {
  return (
    <section className="project-page">

      {/* ================= HEADER ================= */}
      <h2>Eventify</h2>

      <p className="project-intro">
        Eventify is a cloud-native, fully serverless event management platform
        built on AWS. It is designed to handle event creation, participant
        registration, and complete event lifecycle management at scale — without
        manual infrastructure management.
      </p>

      {/* ================= OVERVIEW ================= */}
      <div className="project-section">
        <h3>Project Overview</h3>
        <p>
          This project focuses on modern cloud-native architecture using
          serverless technologies to eliminate infrastructure overhead while
          ensuring automatic scalability, high availability, and cost efficiency.
          Eventify was built to support dynamic traffic workloads commonly seen
          in event platforms.
        </p>
      </div>

      {/* ================= PROBLEM ================= */}
      <div className="project-section">
        <h3>Problem Statement</h3>
        <p>Traditional event platforms often struggle with:</p>
        <ul>
          <li>Infrastructure scaling during peak traffic</li>
          <li>High server maintenance costs</li>
          <li>Complex deployment processes</li>
          <li>Slow infrastructure provisioning</li>
        </ul>
        <p>
          Eventify was designed to leverage serverless computing to solve these
          challenges by shifting scalability and availability concerns to the
          cloud provider.
        </p>
      </div>

      {/* ================= ARCHITECTURE ================= */}
      <div className="project-section">
        <h3>System Architecture</h3>

        <div className="project-tech">
          <div>
            <h4>Backend (Serverless)</h4>
            <p>
              AWS Lambda handles business logic execution, API Gateway manages
              RESTful APIs, DynamoDB stores event data, and Amazon S3 is used
              for static assets.
            </p>
          </div>

          <div>
            <h4>Infrastructure as Code</h4>
            <p>
              AWS CloudFormation is used to define infrastructure, enabling
              automated provisioning, repeatable deployments, and
              version-controlled cloud resources.
            </p>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="project-section">
        <h3>Core Features</h3>
        <ul>
          <li>Event creation and editing workflows</li>
          <li>User registration and participant management</li>
          <li>Scalable data handling for high-traffic events</li>
          <li>Serverless REST API endpoints</li>
          <li>High-availability event readiness</li>
        </ul>
      </div>

      {/* ================= WHY SERVERLESS ================= */}
      <div className="project-section">
        <h3>Why Serverless?</h3>
        <p>
          Serverless architecture was selected to remove infrastructure
          management overhead and ensure Eventify can scale automatically
          during unpredictable traffic spikes.
        </p>
        <ul>
          <li>Automatic scaling with no manual intervention</li>
          <li>Pay-per-execution pricing model</li>
          <li>No server provisioning or maintenance</li>
          <li>High availability by default</li>
          <li>Faster time-to-deploy</li>
        </ul>
      </div>

      {/* ================= DATABASE ================= */}
      <div className="project-section">
        <h3>Database Design</h3>
        <ul>
          <li>DynamoDB partition keys optimized for access patterns</li>
          <li>Low-latency reads and writes</li>
          <li>Designed for horizontal scalability</li>
          <li>Efficient query and access pattern structuring</li>
        </ul>
      </div>

      {/* ================= SECURITY ================= */}
      <div className="project-section">
        <h3>Security Implementation</h3>
        <ul>
          <li>IAM roles with least-privilege access</li>
          <li>API Gateway authorization mechanisms</li>
          <li>Secure environment configuration</li>
          <li>Controlled service-to-service access policies</li>
        </ul>
      </div>

      {/* ================= DEPLOYMENT ================= */}
      <div className="project-section">
        <h3>Deployment Strategy</h3>
        <ul>
          <li>Infrastructure defined using AWS CloudFormation</li>
          <li>Automated stack provisioning</li>
          <li>Environment-based deployment configurations</li>
          <li>Consistent and reproducible deployments</li>
        </ul>
      </div>

      {/* ================= ENGINEERING ================= */}
      <div className="project-section">
        <h3>Engineering Principles Applied</h3>
        <ul>
          <li>Stateless service design</li>
          <li>Event-driven architecture</li>
          <li>REST API best practices</li>
          <li>Clean separation of infrastructure and application logic</li>
        </ul>
      </div>

      {/* ================= LEARNINGS ================= */}
      <div className="project-section">
        <h3>Key Learnings</h3>
        <ul>
          <li>Designing cloud-native applications</li>
          <li>Understanding serverless architecture trade-offs</li>
          <li>Managing AWS permissions securely</li>
          <li>Infrastructure automation using IaC</li>
          <li>Scalable NoSQL data modeling</li>
        </ul>
      </div>

      {/* ================= IMPACT ================= */}
      <div className="project-section project-metric">
        🚀 Eventify demonstrates strong expertise in serverless architecture,
        cloud automation, Infrastructure as Code, and production-ready AWS
        deployment strategies.
      </div>

      {/* ================= BACK ================= */}
      <div className="project-back">
  <a href="/" className="button">← Back to Projects</a>
</div>

    </section>
  );
}