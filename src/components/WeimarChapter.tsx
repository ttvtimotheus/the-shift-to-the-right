'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import NSDAPChart from './NSDAPChart';

export default function WeimarChapter() {
  return (
    <section 
      id="chapter-1" 
      className="min-h-screen bg-gradient-to-br from-weimar-100 via-weimar-50 to-amber-50 sepia-tone section-transition"
    >
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
          {/* Left column - Text content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-weimar-900 mb-6 font-serif leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Chapter 1 – Weimar Republic
              </motion.h2>
              
              <motion.p 
                className="text-lg text-weimar-700 mb-4 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                (1919–1933)
              </motion.p>
            </div>
            
            <motion.div 
              className="prose prose-lg prose-weimar max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-weimar-800 leading-relaxed text-lg">
                In the 1920s, Germany's young democracy struggled with hyperinflation, 
                unemployment, and political instability. During this crisis, the NSDAP 
                grew from a fringe movement into the strongest political force.
              </p>
              
              <p className="text-weimar-700 leading-relaxed mt-6">
                The data reveals a dramatic transformation: from receiving just 2.6% of 
                votes in 1928 to becoming the largest party with 37.4% in July 1932. 
                This unprecedented rise fundamentally altered the course of German history.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right column - Data visualization */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-weimar-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-bold text-weimar-900 mb-6 text-center font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              NSDAP Vote Share in Reichstag Elections
            </motion.h3>
            
            <div className="h-80 mb-6">
              <NSDAPChart />
            </div>
            
            <motion.div 
              className="text-sm text-weimar-600 border-t border-weimar-200 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <p className="font-medium">
                Source: Federal Returning Officer (Bundeswahlleiter) – Reichstag election results 1928–1933.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
