import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../layout/SectionWrapper';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  return (
    <SectionWrapper id="education" title="Education" className="bg-transparent relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-[80px] -z-10 -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {portfolioData.education.map((edu, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index} 
            className="glass-card rounded-[2rem] p-8 border border-white/60 hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] hover:border-primary-200 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full -mr-12 -mt-12 opacity-50 group-hover:scale-[1.5] transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-6 shadow-sm border border-gray-100 group-hover:-translate-y-1 transition-transform">
                <GraduationCap size={28} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary-600 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-lg font-medium text-gray-700 mb-5">
                {edu.institution}
              </p>
              
              <div className="flex flex-col space-y-3 text-sm text-gray-600">
                <div className="flex items-center bg-white/50 w-max px-3 py-1.5 rounded-full border border-gray-100">
                  <Calendar size={16} className="mr-2 text-primary-400" />
                  {edu.duration}
                </div>
                <div className="flex items-center px-1">
                  <MapPin size={16} className="mr-2 text-cyan-500" />
                  {edu.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
