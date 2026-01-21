import React from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const springConfig = { stiffness: 50, damping: 20, mass: 1 };
  const scrollYSpring = useSpring(scrollY, springConfig);

  // Parallax transforms
  // y1: Large orb moving down
  const y1 = useTransform(scrollYSpring, [0, 2000], [0, 400]);
  // y2: Secondary orb moving up/counter
  const y2 = useTransform(scrollYSpring, [0, 2000], [0, -300]);
  
  if (prefersReducedMotion) {
      return (
          <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.02),transparent_70%)]" />
          </div>
      );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505] overflow-hidden">
      {/* Primary Glow - Top Left */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-neon-500/[0.04] blur-[120px]" 
      />
      
      {/* Secondary Glow - Bottom Right */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/[0.04] blur-[120px]" 
      />
      
      {/* Center Void Accent */}
      <motion.div 
        style={{ y: useTransform(scrollYSpring, [0, 2000], [0, 100]) }}
        className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-white/[0.01] blur-[80px]" 
      />
    </div>
  );
};

export default ParallaxBackground;