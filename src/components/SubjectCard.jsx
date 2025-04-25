
import React from 'react';
import { motion } from 'framer-motion';

const SubjectCard = ({ title, icon, isSelected, onClick }) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden
        rounded-xl p-6
        flex flex-col items-center justify-center
        cursor-pointer
        border-2
        ${isSelected 
          ? 'border-ai-purple bg-secondary/80 glow-effect' 
          : 'border-white/10 bg-secondary/30 hover:bg-secondary/50'}
        transition-all duration-300
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-center">{title}</h3>
      
      {isSelected && (
        <motion.div 
          className="absolute bottom-2 right-2 w-6 h-6 bg-ai-purple rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SubjectCard;
