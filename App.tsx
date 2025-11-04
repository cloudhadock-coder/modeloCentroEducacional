
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import TeamSection from './components/TeamSection';
import DailySchedule from './components/DailySchedule';
import FacilitiesGallery from './components/FacilitiesGallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string, anchor?: string) => {
    const scrollToAnchor = (anchorId: string) => {
      document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (page === 'home' && anchor) {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Use a timeout to ensure the DOM is updated before scrolling
        setTimeout(() => scrollToAnchor(anchor), 100);
      } else {
        // Already on the home page, just scroll
        scrollToAnchor(anchor);
      }
    } else {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-slate-50 text-brand-dark font-sans">
      <Header onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Philosophy />
            <TeamSection />
            <DailySchedule />
            <FacilitiesGallery />
            <Testimonials />
          </>
        )}
        {currentPage === 'about' && <AboutPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
