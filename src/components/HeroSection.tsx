'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToChapter1 = () => {
    const chapter1 = document.getElementById('chapter-1');
    if (chapter1) {
      chapter1.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 film-grain overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Background image placeholder - blurred black and white */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400 opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Der Rechtsruck in Zahlen
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 font-light leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          From Weimar to the present – a data journey through 100 years of politics and society.
        </motion.p>
        
        <motion.button
          onClick={scrollToChapter1}
          className="bg-white text-gray-900 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start
        </motion.button>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
