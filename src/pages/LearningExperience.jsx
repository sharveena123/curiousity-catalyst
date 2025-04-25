
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ChatBox from '../components/ChatBox';
import ProgressIndicator from '../components/ProgressIndicator';
import SplineModel from '../components/SplineModel';

const LearningExperience = () => {
  const location = useLocation();
  const { subject } = location.state || { subject: { id: 'english', title: 'English' } };
  const [level, setLevel] = useState(0);
  const [modelAnimated, setModelAnimated] = useState(false);

  // Animate the model sliding in when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setModelAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLevelDetermined = (determinedLevel) => {
    setLevel(determinedLevel);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Learning {subject.title}
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Let's determine your level and start learning through guided discovery
          </p>
        </motion.div>
        
        {/* Progress bar */}
        <div className="mb-8">
          <ProgressIndicator currentLevel={level} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chat interface */}
          <div className="md:col-span-2 h-[500px]">
            <ChatBox 
              onLevelDetermined={handleLevelDetermined} 
              subject={subject.title} 
            />
          </div>
          
          {/* 3D Model */}
          <motion.div
            className="hidden md:block"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: modelAnimated ? 0 : 200, opacity: modelAnimated ? 1 : 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="h-80">
              <SplineModel className="animate-float" />
            </div>
            
            {/* Hints panel */}
            <div className="mt-6 bg-secondary/30 rounded-xl p-4 border border-white/10">
              <h3 className="text-lg font-medium mb-2">Learning Tips</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-ai-purple mr-2">•</span>
                  <span>Pay attention to verb tense consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-purple mr-2">•</span>
                  <span>Look for article usage (a/an/the)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-purple mr-2">•</span>
                  <span>Check subject-verb agreement</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LearningExperience;
