import React from "react";
import Layout from "./components/layout";
import HeroSection from "./sections/HeroSection/HeroSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import EducationSection from "./sections/EducationSection/EducationSection";
import CertificationsSection from "./sections/CertificationsSection/CertificationsSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import StackSection from "./sections/StackSection";
import "./styles/global.css";

function App() {
  return (
    <Layout>
      <HeroSection />
      <StackSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ProjectsSection />
    </Layout>
  );
}

export default App;
