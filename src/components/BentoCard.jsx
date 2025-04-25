
import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ 
  children, 
  className = "", 
  span = false, 
  spanRow = false,
  glowEffect = false 
}) => {
  return (
    <motion.div 
      className={`
        relative 
        rounded-2xl 
        p-6 
        bg-secondary/80 
        backdrop-blur-sm
        border border-white/10
        ${span ? 'md:col-span-2' : ''} 
        ${spanRow ? 'md:row-span-2' : ''}
        ${glowEffect ? 'glow-effect' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;
