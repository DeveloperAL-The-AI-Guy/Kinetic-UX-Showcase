import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const Footer: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleClick = () => {
        if (status !== 'idle') return;
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 2000);
        }, 1500);
    }

  return (
    <footer className="py-24 px-6 md:px-12 border-t border-white/10 bg-black flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to build?</h2>
        <p className="text-zinc-400 mb-12">
            The difference between good and great software is often measured in milliseconds and pixels.
        </p>

        {/* Micro-interaction Button */}
        <button 
            onClick={handleClick}
            className="group relative h-14 w-48 bg-zinc-100 text-black font-semibold rounded-full overflow-hidden mx-auto isolate"
        >
            <div className="absolute inset-0 bg-neon-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-10" />
            
            <div className="flex items-center justify-center gap-2 h-full w-full">
                <AnimatePresence mode='wait'>
                    {status === 'idle' && (
                        <motion.div 
                            key="idle"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <span>Let's Talk</span>
                            <ArrowRight size={18} />
                        </motion.div>
                    )}
                    {status === 'loading' && (
                        <motion.div 
                            key="loading"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            <span>Sending...</span>
                        </motion.div>
                    )}
                    {status === 'success' && (
                        <motion.div 
                            key="success"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <Check size={18} />
                            <span>Sent!</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </button>

        <div className="mt-16 flex gap-8 justify-center text-sm text-zinc-600 font-mono">
            <a href="#" className="hover:text-neon-400 transition-colors">TWITTER</a>
            <a href="#" className="hover:text-neon-400 transition-colors">GITHUB</a>
            <a href="#" className="hover:text-neon-400 transition-colors">EMAIL</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
