import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import Footer from "./components/footer";

// Project detail pages
import MedicoGraph from "./pages/MedicoGraph";
import Eventify from "./pages/Eventify";

export default function App() {

  /* =========================
     PARALLAX SCROLL
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      document.querySelectorAll(".parallax").forEach((el) => {
        const speed = Number(el.dataset.speed) || 0;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     SCROLL REVEAL
  ========================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // reveal once
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ExperienceSection />
              <ProjectsSection />
              <Footer />
            </>
          }
        />

        {/* ================= PROJECT PAGES ================= */}
        <Route path="/projects/medico-graph" element={<MedicoGraph />} />
        <Route path="/projects/eventify" element={<Eventify />} />
      </Routes>
    </BrowserRouter>
  );
}