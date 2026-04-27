import React from 'react';
import { motion } from 'motion/react';

export default function ThreeSkeleton() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[40vw] h-[40vw] bg-brand-accent/5 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-brand-accent/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
