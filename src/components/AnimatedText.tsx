import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
  };

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '0.25em', display: 'inline-block' }}
          key={index}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface KineticTextProps extends TextRevealProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export function KineticText({ text, className, delay = 0, tag = 'h1' }: KineticTextProps) {
  const characters = text.split('');
  const Tag = motion[tag] as any;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.03, 
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateX: 90,
      scale: 0.8,
      filter: 'blur(12px)',
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 150,
        mass: 1
      }
    },
  };

  return (
    <Tag
      className={`${className} perspective-1000`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          style={{ 
            display: 'inline-block', 
            whiteSpace: 'pre',
            transformOrigin: 'bottom'
          }}
          aria-hidden="true"
          whileHover={{ 
            y: -20, 
            scale: 1.1, 
            transition: { duration: 0.2 } 
          }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
}
