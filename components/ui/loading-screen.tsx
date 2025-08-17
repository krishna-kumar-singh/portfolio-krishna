'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 3 seconds for demo
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background dark:bg-gray-900"
    >
      <div className="relative">
        {/* Main text container */}
        <div className="relative text-6xl font-bold tracking-tight">
          {/* Background text (original color) */}
          <div className="text-primary dark:text-primary">
            K <span className="text-muted-foreground dark:text-muted-foreground">&lt;/&gt;</span>
          </div>
          
          {/* Overlay text (fill effect) */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ 
              clipPath: [
                'inset(100% 0 0 0)',
                'inset(90% 0 0 0)',
                'inset(80% 0 0 0)',
                'inset(70% 0 0 0)',
                'inset(60% 0 0 0)',
                'inset(50% 0 0 0)',
                'inset(40% 0 0 0)',
                'inset(30% 0 0 0)',
                'inset(20% 0 0 0)',
                'inset(10% 0 0 0)',
                'inset(0% 0 0 0)',
              ]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          >
            <div className="text-black dark:text-white">
              K <span className="text-black dark:text-white">&lt;/&gt;</span>
            </div>
          </motion.div>
        </div>
        
        {/* Loading dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8 space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-primary dark:bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-4"
        >
          <motion.div
            className="text-sm text-muted-foreground dark:text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading...
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}