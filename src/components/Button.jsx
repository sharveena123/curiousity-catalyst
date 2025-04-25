
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md",
  className = "", 
  ...props 
}) => {
  const baseStyles = "rounded-full font-medium transition-all flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-ai-purple hover:bg-ai-purple/90 text-white",
    secondary: "bg-secondary hover:bg-secondary/90 text-white",
    outline: "bg-transparent border border-ai-purple text-ai-purple hover:bg-ai-purple/10",
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-1.5",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3",
  };
  
  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
