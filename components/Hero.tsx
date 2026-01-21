import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-[1px] w-8 bg-neon-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">Kinetic UX</span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            INTENTIONAL
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] text-white/40"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            MOTION
          </motion.h1>
        </div>

        <motion.p 
          className="mt-12 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          An exploration of interface fidelity. We believe that motion is not decoration—it is the body language of software.
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="animate-bounce text-zinc-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
