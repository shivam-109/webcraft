import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import Footer from "./components/footer";

import MedicoGraph from "./pages/MedicoGraph";
import Eventify from "./pages/Eventify";

export default function App() {
  const location = useLocation();

  useEffect(() => {
  // Force scroll to top on initial load
  window.history.replaceState(null, "", window.location.pathname);
  window.scrollTo(0, 0);
}, []);

  /* ================= PARALLAX ================= */
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

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ================= SCROLL CONTROL ================= */
  useEffect(() => {
    // 🔹 Always start at HERO on fresh load or refresh
    if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // 🔹 Scroll to section ONLY when hash exists
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for DOM paint
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />

      <Routes>
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

        <Route path="/projects/medico-graph" element={<MedicoGraph />} />
        <Route path="/projects/eventify" element={<Eventify />} />
      </Routes>
    </>
  );
}