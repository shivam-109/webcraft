
import { useNavigate } from "react-router-dom";

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section className="section projects-section reveal" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="bento-grid">

        {/* ================= MEDICO GRAPH ================= */}
        <div
          className="bento-item "
          onClick={() => navigate("/projects/medico-graph")}
        >
          <h3>Medico Graph</h3>
          <p>
            Microservices-based medical record management system designed
            for scalability, security, and enterprise-grade backend architecture.
          </p>

          <span className="project-link">
            View full case study →
          </span>
        </div>

        {/* ================= EVENTIFY ================= */}
        <div
          className="bento-item"
          onClick={() => navigate("/projects/eventify")}
        >
          <h3>Eventify</h3>
          <p>
            Cloud-native, serverless event management platform built on AWS
            using Lambda, API Gateway, and DynamoDB.
          </p>

          <span className="project-link">
            View full case study →
          </span>
        </div>

      </div>
    </section>
  );
}