import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactSection from './components/sections/ContactSection';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import BackgroundEffects from './components/ui/BackgroundEffects';

function App() {
  return (
    <div className="min-h-screen relative flex flex-col font-sans overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <BackgroundEffects />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
