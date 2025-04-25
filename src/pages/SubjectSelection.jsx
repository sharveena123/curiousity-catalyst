
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SplineModel from '../components/SplineModel';
import SubjectCard from '../components/SubjectCard';
import Button from '../components/Button';

const subjects = [
  { id: 'english', title: 'English', icon: '📝' },
  { id: 'math', title: 'Math', icon: '🔢' },
  { id: 'science', title: 'Science', icon: '🔬' },
  { id: 'history', title: 'History', icon: '📚' },
  { id: 'programming', title: 'Programming', icon: '💻' },
  { id: 'art', title: 'Art', icon: '🎨' },
];

const SubjectSelection = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modelAnimated, setModelAnimated] = useState(false);
  const navigate = useNavigate();

  // Animate the model sliding in when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setModelAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };
  
  const handleGetPrompt = () => {
    if (selectedSubject) {
      navigate('/learning-experience', { state: { subject: selectedSubject } });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Choose Your Subject</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Select the subject you want to learn and our AI will personalize the experience for you
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1-2: Subject selection */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  title={subject.title}
                  icon={subject.icon}
                  isSelected={selectedSubject?.id === subject.id}
                  onClick={() => handleSubjectSelect(subject)}
                />
              ))}
            </div>
            
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSubject ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                onClick={handleGetPrompt} 
                disabled={!selectedSubject}
                size="lg"
                className={!selectedSubject ? 'opacity-50 cursor-not-allowed' : 'animate-pulse-glow'}
              >
                Get Started with {selectedSubject?.title || 'Subject'}
              </Button>
            </motion.div>
          </div>
          
          {/* Column 3: 3D model */}
          <motion.div
            className="hidden md:block relative"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: modelAnimated ? 0 : 200, opacity: modelAnimated ? 1 : 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="h-96">
              <SplineModel className="animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
