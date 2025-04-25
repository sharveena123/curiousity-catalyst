
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const ChatBox = ({ onLevelDetermined, subject }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initial greeting when component mounts
  useEffect(() => {
    if (subject) {
      setTimeout(() => {
        addBotMessage(`Great! You've selected ${subject}. Let me ask you a few questions to determine your current level.`);
        setTimeout(() => {
          askLevelQuestion(1);
        }, 1000);
      }, 500);
    } else {
      addBotMessage("Hello! What subject are you interested in learning today?");
    }
  }, [subject]);

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { sender: 'bot', text }]);
    setIsTyping(false);
  };

  const simulateTyping = (callback, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      callback();
    }, delay);
  };

  const askLevelQuestion = (level) => {
    // Just examples for different subjects and levels
    if (subject === 'English') {
      switch(level) {
        case 1:
          addBotMessage("Let's start with a simple question. What's wrong with this sentence? 'She have a red book.'");
          break;
        case 2:
          addBotMessage("Good job! Here's a slightly harder one. Find the error: 'I went to store yesterday and buy some milk.'");
          break;
        case 3:
          addBotMessage("Let's try something more challenging. What's wrong with this sentence? 'Although it was raining, but she still went for a walk.'");
          break;
        default:
          addBotMessage("Based on your responses, I can help you improve your English skills. Let's start with some exercises.");
          setCurrentLevel(2); // Example level
          onLevelDetermined(2);
      }
    } else if (subject === 'Math') {
      switch(level) {
        case 1:
          addBotMessage("Let's start with a simple math problem. What is 12 + 9?");
          break;
        case 2:
          addBotMessage("Now, can you solve: If x + 5 = 12, what is x?");
          break;
        case 3:
          addBotMessage("Let's try a more difficult problem. Solve for x: 2x + 5 = 3x - 7");
          break;
        default:
          addBotMessage("Great! I've determined your math level. Let's start with some exercises to help you improve.");
          setCurrentLevel(2); // Example level
          onLevelDetermined(2);
      }
    } else {
      addBotMessage(`Let's assess your ${subject} knowledge with a few questions...`);
      // Add generic questions for any subject
    }
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message to chat
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const userInput = input;
    setInput('');
    
    // Simulate AI thinking and responding
    simulateTyping(() => {
      if (currentLevel < 3) {
        // Continue with assessment
        setCurrentLevel(prev => prev + 1);
        askLevelQuestion(currentLevel + 1);
      } else {
        // Assessment complete
        addBotMessage("Thanks for your responses. I've determined your level and can now provide personalized learning content.");
        onLevelDetermined(currentLevel);
      }
    });
  };

  return (
    <div className="flex flex-col h-full bg-secondary/30 rounded-2xl backdrop-blur-md border border-white/10">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === 'user' 
                  ? 'bg-ai-purple text-white' 
                  : 'bg-gray-700/70 text-gray-100'
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700/70 rounded-2xl px-4 py-2 text-gray-100">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-white/10 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your answer..."
            className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 outline-none border border-white/10"
          />
          <Button onClick={handleSend} size="sm">Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
