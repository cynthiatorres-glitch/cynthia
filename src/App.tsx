import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Trajectory from "./components/Trajectory";
import Diagnostic from "./components/Diagnostic";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-brand-surface text-brand-dark selection:bg-brand-vibrant/40 selection:text-brand-primary overflow-x-hidden">
      {/* Sticky Top Navigation Bar */}
      <Header onDownloadCV={() => setShowResume(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section ("Mi Vocación") */}
        <About />

        {/* Expertise Grid ("Áreas de Especialización") */}
        <Expertise />

        {/* Featured Projects Portfolio */}
        <Portfolio />

        {/* Trajectory Timeline ("Stepper") */}
        <Trajectory />

        {/* Interactive Pedagogical Diagnostic Tool */}
        <Diagnostic />

        {/* Direct Contact Form & Local Storage Sent Messages Tracker */}
        <Contact />
      </main>

      {/* Footer block */}
      <Footer />

      {/* Interactive Curriculum Vitae Viewer / Printer overlay */}
      <AnimatePresence>
        {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
      </AnimatePresence>
    </div>
  );
}

