import React, { useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../layout/SectionWrapper';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SectionWrapper id="experience" title="Professional Experience" className="bg-transparent relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-100/40 rounded-full blur-[100px] -z-10 -translate-x-1/2"></div>
      
      <div className="relative mx-auto max-w-4xl" ref={containerRef}>
        
        {/* Animated Timeline Line */}
        <div className="absolute left-[15px] md:left-[27px] top-4 bottom-0 w-[2px] bg-gray-200 rounded-full">
          <motion.div 
            className="absolute top-0 w-full bg-gradient-to-b from-primary-500 to-cyan-400 origin-top rounded-full"
            style={{ scaleY, height: '100%' }}
          />
        </div>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: (index * 0.2) + 0.3, type: "spring" }}
                className="absolute w-5 h-5 bg-white border-4 border-primary-500 rounded-full left-[6px] md:left-[18px] top-6 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
              />
              
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-white/60 group relative overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4 relative z-10">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-lg font-medium text-gray-700 mt-2">
                      <Briefcase size={18} className="mr-2 text-primary-500" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-sm text-gray-600 space-y-2">
                    <div className="flex items-center bg-white/80 px-4 py-1.5 rounded-full border border-gray-200 shadow-sm font-medium">
                      <Calendar size={14} className="mr-2 text-primary-500" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-gray-500 px-2 font-medium">
                      <MapPin size={14} className="mr-2 text-cyan-500" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 relative z-10 mt-6 pt-6 border-t border-gray-100/50">
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 mr-3 flex-shrink-0"></span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
