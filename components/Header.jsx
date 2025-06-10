import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-900">
          MyHQ
        </Link>
        <nav className="space-x-4">
          <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</Link>
          <Link to="/spaces" className="text-gray-700 hover:text-blue-600">Spaces</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
