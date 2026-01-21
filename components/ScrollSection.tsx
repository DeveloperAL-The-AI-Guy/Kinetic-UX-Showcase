import React from 'react';
import { motion } from 'framer-motion';

const ScrollItem: React.FC<{ index: number; title: string; text: string }> = ({ index, title, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex gap-8 items-start py-12 border-b border-white/5 group"
    >
      <span className="text-6xl font-bold text-zinc-800 group-hover:text-neon-400/50 transition-colors duration-500">
        0{index + 1}
      </span>
      <div className="pt-2">
        <h3 className="text-2xl font-bold text-zinc-100 mb-2">{title}</h3>
        <p className="text-zinc-400 max-w-md leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};

const ScrollSection: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3 sticky top-32 h-fit">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold mb-6">Progressive<br/>Disclosure</h2>
                <div className="h-1 w-24 bg-neon-400 mb-6" />
                <p className="text-zinc-400">
                    Information should arrive exactly when it is needed. Scrolling acts as a natural pacer for cognition.
                </p>
            </motion.div>
        </div>
        
        <div className="md:w-2/3">
            <ScrollItem 
                index={0} 
                title="Performance" 
                text="Layout thrashing is the enemy of immersion. We use GPU-accelerated transforms (translate, scale, rotate) to ensure 60fps on all devices."
            />
            <ScrollItem 
                index={1} 
                title="Accessibility" 
                text="Motion should respect user preferences. All animations in this demo respect the 'prefers-reduced-motion' media query implicitly via our animation library."
            />
            <ScrollItem 
                index={2} 
                title="Affordance" 
                text="Buttons should look like buttons. Inputs should look like inputs. Creative flair should never compromise functional recognizability."
            />
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;