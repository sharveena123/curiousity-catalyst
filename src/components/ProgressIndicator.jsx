
import React from 'react';
import { motion } from 'framer-motion';

const ProgressIndicator = ({ currentLevel, maxLevel = 5 }) => {
  return (
    <div className="w-full flex flex-col items-center space-y-2">
      <div className="flex items-center justify-between w-full max-w-md">
        <p className="text-sm text-white/60">Current Level</p>
        <p className="text-sm font-medium text-white">{currentLevel} / {maxLevel}</p>
      </div>
      
      <div className="w-full h-3 bg-gray-700/50 rounded-full max-w-md overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-ai-purple to-ai-blue rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(currentLevel / maxLevel) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      <div className="w-full max-w-md flex justify-between mt-1 px-1">
        {[...Array(maxLevel)].map((_, i) => (
          <motion.div 
            key={i}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
              ${i < currentLevel ? 'bg-ai-purple text-white' : 'bg-gray-700/50 text-white/60'}`}
            animate={i < currentLevel ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            {i + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
