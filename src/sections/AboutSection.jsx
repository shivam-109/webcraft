export default function AboutSection() {
  return (
    <section className="section reveal about-animated" id="about">
      <h2 className="section-title">About</h2>

      <div className="about-card">
        <p className="about-paragraph delay-1">
          Hi, I’m <span className="about-highlight">Shivam</span>! I’m a Software
          Developer based in Toronto with a real thing for building apps that
          don’t just work, but scale.
        </p>

        <p className="about-paragraph delay-2">
          My journey started in IT and led me through a Post-Grad in Web
          Development, where I really fell in love with the JavaScript
          ecosystem—specifically React and Node.js.
        </p>

        <p className="about-paragraph delay-3">
          I’m a big believer in the <span className="about-quote">“clean code”</span>{" "}
          philosophy. Whether I’m working with SOLID principles or diving into
          OOP, my goal is always to build things that are as easy to maintain as
          they are to use.
        </p>

        <p className="about-paragraph delay-4">
          During my time at Collabera, I saw firsthand how much of an impact good
          dev work can have, like when a SaaS tool I built boosted tracking
          efficiency by 20%.
        </p>

        <p className="about-paragraph delay-5">
          These days, you’ll usually find me in an Agile flow, playing around
          with AWS services or streamlining CI/CD pipelines to make sure every
          user experience is as seamless as possible.
        </p>
      </div>
    </section>
  );
}