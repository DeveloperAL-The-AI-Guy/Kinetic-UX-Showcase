import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { MousePointer2, Eye, Zap } from 'lucide-react';
import { FeatureCardProps } from '../types';

const TiltCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // UX Note: 
  // We transform the card subtly based on mouse position to give a physical sense of "presence".
  // This tells the user "this object is active and waiting for you".

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className="relative h-full w-full rounded-xl bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-neon-400/30 transition-colors duration-500 group"
    >
        {/* Hover Highlight Gradient */}
      <motion.div
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(52, 211, 153, 0.10), transparent 80%)`,
        }}
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
      />
      
      <div className="relative h-full p-8 flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center text-neon-400 mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-zinc-100 mb-2">{title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-neon-400 transition-colors">
            <span>INTERACT</span>
            <div className="h-px w-4 bg-current" />
        </div>
      </div>
    </motion.div>
  );
};

const FocusCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
    // UX Note: This card demonstrates keyboard accessibility.
    // The focus ring is exaggerated to show state clearly.
    return (
        <button className="text-left w-full h-full p-8 rounded-xl bg-zinc-900/40 backdrop-blur-md border border-white/5 
            focus:outline-none focus:ring-2 focus:ring-neon-400 focus:ring-offset-2 focus:ring-offset-black
            transition-all duration-300 hover:bg-zinc-800/50 group relative overflow-hidden">
            
            <div className="absolute top-0 right-0 p-4 opacity-0 group-focus:opacity-100 transition-opacity text-neon-400 font-mono text-xs">
                [TAB FOCUS ACTIVE]
            </div>

            <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center text-white mb-6 group-focus:text-neon-400 group-focus:bg-neon-400/10 transition-all">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-2 group-focus:text-neon-400 transition-colors">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </button>
    )
}

const InteractionCards: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Interaction Language</h2>
          <p className="text-zinc-400 max-w-2xl">
            Objects in digital space should follow physical logic while enhancing utility.
            Hover, focus, and active states are the conversation between user and system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Depth & Context */}
            <div className="h-80">
                <TiltCard 
                    title="Depth & Context" 
                    description="Hover states should imply dimensionality. The cursor acts as a light source, revealing boundaries without clutter."
                    icon={<MousePointer2 size={24} />}
                />
            </div>

            {/* 2. Visual Clarity (Focus) */}
            <div className="h-80">
                <FocusCard 
                    title="Clear Focus" 
                    description="Accessibility is a first-class citizen. Tab through to see how focus states guide the power user without mouse input."
                    icon={<Eye size={24} />}
                />
            </div>

            {/* 3. Feedback (Pulse) */}
             <div className="h-80 group cursor-pointer relative rounded-xl bg-zinc-900/40 backdrop-blur-md border border-white/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute w-32 h-32 bg-neon-400/20 blur-[50px] rounded-full animate-pulse-slow pointer-events-none" />
                </div>
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                    <div>
                        <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-100 mb-6 group-hover:text-neon-400 transition-colors">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2">Instant Feedback</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Every action triggers a reaction. Even subtle glows reassure the user that the system is alive and listening.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <span className="inline-block px-3 py-1 text-xs font-mono border border-neon-400/20 text-neon-400 rounded-full bg-neon-400/5">
                            HOVER ME
                        </span>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default InteractionCards;