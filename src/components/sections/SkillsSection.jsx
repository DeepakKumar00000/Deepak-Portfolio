import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const categories = [
    { title: 'Languages', items: portfolioData.skills.languages },
    { title: 'Frontend', items: portfolioData.skills.frontend },
    { title: 'Backend', items: portfolioData.skills.backend },
    { title: 'Database', items: portfolioData.skills.database },
    { title: 'Cloud & AI', items: portfolioData.skills.cloudAndAI },
    { title: 'Tools & Platforms', items: portfolioData.skills.toolsAndPlatforms },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }
  };

  return (
    <SectionWrapper id="skills" title="Technical Skills" className="bg-transparent relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-[100px] -z-10 translate-x-1/3"></div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {categories.map((category, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            className="group glass-card p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(37,99,235,0.1)] hover:-translate-y-2 border border-white/50 relative overflow-hidden"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 relative">
              {category.title}
              <motion.div className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-gradient-to-r from-primary-500 to-cyan-400 group-hover:w-full transition-all duration-500"></motion.div>
            </h3>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.items.map((item, idx) => (
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={idx} 
                  className="interactive px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-xl border border-gray-200 shadow-sm hover:border-primary-300 hover:text-primary-600 hover:shadow-md transition-all duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillsSection;
