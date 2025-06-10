import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-center py-16 px-4"
    >
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Your space. Your pace.</h1>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
        Whether you're a freelancer, startup, or business on the move, MyHQ gives you access to fully furnished offices, meeting rooms, and all the support you need — with flexible plans that move at your speed.
      </p>
      <div className="mt-6 space-x-4">
        <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Book a Tour</a>
        <a href="/pricing" className="text-blue-600 border border-blue-600 px-6 py-2 rounded hover:bg-blue-50">See Pricing</a>
      </div>
    </motion.section>
  );
};

export default Home;
