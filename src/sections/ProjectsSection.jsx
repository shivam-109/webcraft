import { useState } from "react";

export default function ProjectsSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container reveal" id="projects">
      <h2 className="section-title">Selected Work</h2>

      <div className="bento-grid">
        <div
          className="bento-item bento-large"
          onClick={() => setOpen(true)}
        >
          <h3>ScaleLab</h3>
          <p>Interactive probability engine with cinematic UI.</p>
        </div>

        <div className="bento-item">
          <h3>Medico Graph</h3>
          <p>Healthcare data visualization platform.</p>
        </div>

        <div className="bento-item">
          <h3>Eventify</h3>
          <p>Event management system with real-time updates.</p>
        </div>

        <div className="bento-item">
          <h3>Creative Dashboard</h3>
          <p>Analytics dashboard with custom UI components.</p>
        </div>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>ScaleLab</h3>
            <p>
              A high-fidelity interactive simulation platform exploring
              probability, scale, and human decision systems.
            </p>
            <button className="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}