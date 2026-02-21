export default function HeroSection() {
  return (
    <section className="hero">

      <div
        className="floating-shape parallax"
        data-speed="0.05"
        style={{ width: 500, height: 500, top: 100, left: -150 }}
      />

      <div
        className="floating-shape parallax"
        data-speed="0.1"
        style={{ width: 300, height: 300, bottom: 100, right: -100 }}
      />

      <h1 className="parallax" data-speed="0.02">
        Shivam Patel
      </h1>

      <p className="parallax" data-speed="0.03">
       Software Developer with hands-on experience building scalable web applications using JavaScript, TypeScript, React, 
Node.js, and SQL/NoSQL databases. Strong foundation in OOP, SOLID principles, RESTful APIs, and Agile 
development. Experienced in AWS, CI/CD workflows, and test-driven development, with a focus on writing clean, 
maintainable, and performance-optimized code.
      </p>

      <a href="#projects" className="button">View Work</a>
    </section>
  );
}