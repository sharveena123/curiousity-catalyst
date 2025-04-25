
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.nav 
      className="w-full py-4 px-6 md:px-12 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
        <span className="text-ai-purple">Smart</span>Learn
      </Link>
      
      <div className="hidden md:flex space-x-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      
      <div className="md:hidden">
        {/* Mobile menu button - can be implemented later */}
        <button className="text-white">
          ≡
        </button>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
};

export default NavBar;
