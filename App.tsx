import React from 'react';
import Hero from './components/Hero';
import InteractionCards from './components/InteractionCards';
import ScrollSection from './components/ScrollSection';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen text-zinc-100 selection:bg-neon-400 selection:text-black relative">
      <ParallaxBackground />
      
      <div className="relative z-10">
        <Hero />
        <InteractionCards />
        <ScrollSection />
        <Footer />
      </div>
      
      {/* Floating Status Indicator */}
      <div className="fixed bottom-6 right-6 z-50 mix-blend-difference pointer-events-none hidden md:block">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-neon-500 tracking-widest opacity-80">LIVE</span>
        </div>
      </div>
    </main>
  );
};

export default App;