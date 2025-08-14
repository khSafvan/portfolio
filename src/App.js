import React from "react";
import HeroSection from "./sections/HeroSection/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactCTA from "./sections/ContactCTA";
import "./styles/global.css";

function App() {
  return (
    <>
      {/* Hero Section - Main landing with sticky scroll */}
      <HeroSection />

      {/* Services Section - What I help with, sticky scroll */}
      <ServicesSection />

      {/* Experience Section - Work history with horizontal scroll */}
      <ExperienceSection />

      {/* Projects Section - Latest works, sticky scroll */}
      <ProjectsSection />

      {/* Testimonials Section - Client feedback, sticky scroll */}
      <TestimonialsSection />

      {/* Contact CTA Section - Call to action, sticky scroll */}
      <ContactCTA />
    </>
  );
}

export default App;
