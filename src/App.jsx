import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ToolsOverview from './sections/ToolsOverview';
import AppFeatures from './sections/AppFeatures';
import CommunityGrid from './sections/CommunityGrid';
import Metrics from './sections/Metrics';
import Testimonials from './sections/Testimonials';
import FeaturesDetail from './sections/FeaturesDetail';
import CTASection from './sections/CTASection';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] text-[#111827] font-sans antialiased overflow-x-hidden flex flex-col">
      <Navbar />      
      <main className="flex-grow">
        <Hero />
        <ToolsOverview />
        <AppFeatures />
        <CommunityGrid />
        <Metrics />
        <Testimonials />
        <FeaturesDetail />
        <CTASection />
      </main>
      <Footer /> 
    </div>
  );
}