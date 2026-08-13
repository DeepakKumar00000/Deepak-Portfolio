import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../layout/SectionWrapper';
import { Award, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const CertificationsSection = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications & Achievements" className="bg-transparent relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/60 hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] hover:border-primary-200 transition-all duration-300 group"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 mr-5 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">Certifications</h3>
          </div>
          
          <ul className="space-y-5">
            {portfolioData.certifications.map((cert, index) => (
              <li key={index} className="flex items-start group/item">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                <span className="text-gray-700 text-lg group-hover/item:text-gray-900 transition-colors">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/60 hover:shadow-[0_15px_40px_rgba(234,179,8,0.15)] hover:border-yellow-200 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.06] group-hover:rotate-12 transition-all duration-500 pointer-events-none">
            <Trophy size={200} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-yellow-500 mr-5 shadow-sm border border-yellow-100 group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">Achievements</h3>
            </div>
            
            <ul className="space-y-5">
              {portfolioData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                  <span className="text-gray-700 text-lg font-medium group-hover/item:text-gray-900 transition-colors">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
