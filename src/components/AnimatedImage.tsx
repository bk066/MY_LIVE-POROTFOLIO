import React from 'react';
import { motion } from 'motion/react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function AnimatedImage({ src, alt, className, delay = 0 }: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden group ${className}`}
    >
      <motion.div
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
