
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BentoGrid from '../components/BentoGrid';
import BentoCard from '../components/BentoCard';
import SplineModel from '../components/SplineModel';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col">
        <motion.div
          className="text-center mb-4 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 glow-text bg-clip-text text-transparent bg-gradient-to-r from-ai-purple to-ai-blue">
            Smart<span className="text-white">Learn</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Your AI-powered personalized learning companion
          </p>
        </motion.div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Main content with 3D model */}
          <div className="md:col-span-3 flex flex-col items-center justify-center pt-4 pb-8 relative">
            <div className="w-full max-w-md h-80 md:h-96">
              <SplineModel className="animate-float" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <Button 
                size="lg" 
                onClick={() => navigate('/subject-selection')}
                className="animate-pulse-glow"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
          
          {/* Bento Grid */}
          <BentoGrid className="md:col-span-3">
            {/* Features */}
            <BentoCard span={false} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-ai-purple/20 flex items-center justify-center mb-4">
                <span className="text-ai-purple text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Personalized Learning</h3>
              <p className="text-gray-400">AI adapts to your skill level and learning style</p>
            </BentoCard>
            
            <BentoCard span={false} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-ai-blue/20 flex items-center justify-center mb-4">
                <span className="text-ai-blue text-xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Learn Through Discovery</h3>
              <p className="text-gray-400">Find errors, understand concepts deeply</p>
            </BentoCard>
            
            <BentoCard span={false} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-ai-pink/20 flex items-center justify-center mb-4">
                <span className="text-ai-pink text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Track Progress</h3>
              <p className="text-gray-400">Advance through levels as you improve</p>
            </BentoCard>
            
            <BentoCard span={true} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-ai-orange/20 flex items-center justify-center mb-4">
                <span className="text-ai-orange text-xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Multiple Subjects</h3>
              <p className="text-gray-400">From English and Math to Science and History</p>
            </BentoCard>
            
            <BentoCard span={false} className="flex items-center justify-center bg-ai-purple/20">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">12K+</div>
                <p className="text-sm text-gray-400">Active Learners</p>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </div>
    </div>
  );
};

export default Landing;
