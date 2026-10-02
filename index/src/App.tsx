/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem, PORTFOLIO_OWNER } from './data/portfolioData';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiredSubject, setInquiredSubject] = useState<string>('');

  const scrollToContact = (subject?: string) => {
    if (subject) {
      setInquiredSubject(subject);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#18181B] selection:bg-[#F4B900] selection:text-black">
      {/* 1. Header / Navbar */}
      <Navbar onContactClick={() => scrollToContact()} />

      <main>
        {/* 1. Hero Section */}
        <Hero 
          onContactClick={() => scrollToContact()} 
          onWorkClick={scrollToWork} 
        />

        {/* 2. About / Introduction */}
        <About />

        {/* 3. Education & Professional Journey */}
        <Journey />

        {/* 4. Skills & Expertise */}
        <Skills />

        {/* 5. Services & Pricing Model (Dark Green Section) */}
        <Pricing 
          onSelectPlan={(planName) => scrollToContact(planName)} 
        />

        {/* 6. Selected Work / Portfolio */}
        <Portfolio 
          onProjectClick={(project) => setSelectedProject(project)} 
        />

        {/* 7. Process (4-Step Workflow) */}
        <Process />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Contact Section */}
        <Contact 
          initialSubject={inquiredSubject} 
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onInquire={(projTitle) => scrollToContact(`Inquiry regarding ${projTitle}`)} 
      />

      {/* Floating Quick Action CTA for mobile/desktop */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3">
        <a
          href={`https://wa.me/${PORTFOLIO_OWNER.whatsapp}?text=Hi%20Amrit,%20I%20am%20viewing%20your%20portfolio%20and%20would%20like%20to%20connect`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-[#174B32] text-white hover:bg-[#0D2D1E] rounded-full shadow-lg border-2 border-[#F4B900] transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
          title="Direct WhatsApp Chat"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5 text-[#F4B900] group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
}
