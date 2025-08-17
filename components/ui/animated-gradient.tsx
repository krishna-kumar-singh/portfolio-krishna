'use client';

import { motion } from 'framer-motion';

export function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)",
            "linear-gradient(45deg, rgba(236, 72, 153, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(147, 51, 234, 0.2) 100%)",
            "linear-gradient(45deg, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tl from-green-500/10 via-cyan-500/10 to-blue-500/10"
        animate={{
          background: [
            "linear-gradient(225deg, rgba(34, 197, 94, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)",
            "linear-gradient(225deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(34, 197, 94, 0.1) 100%)",
            "linear-gradient(225deg, rgba(34, 197, 94, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
} 