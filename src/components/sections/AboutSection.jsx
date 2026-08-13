import React, { useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../layout/SectionWrapper';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const AboutSection = () => {
  const imgRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      className="bg-transparent relative"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-100/30 rounded-full blur-[100px] -z-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left - Profile Image with 3D Tilt */}
        <motion.div 
          className="h-full min-h-[500px] flex justify-center items-center perspective-[1200px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            ref={imgRef}
            className="relative h-[500px] w-full max-w-[420px] rounded-[2rem] border border-white/40 shadow-xl overflow-hidden glass-card group cursor-pointer"
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-100 opacity-0"></div>
            
            <img
              src="/deepak image.jpeg"
              alt={portfolioData.personal.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ transform: "translateZ(30px)" }}
            />

            {/* Bottom overlay */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-6 border-t border-white/50"
              style={{ transform: "translateZ(50px)" }}
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {portfolioData.personal.name}
              </h3>
              <p className="text-primary-600 font-medium mt-1">
                Full Stack Developer
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right - About Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-5 border border-primary-100 shadow-sm">
            Full Stack Developer
          </motion.span>

          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Building scalable solutions for real-world problems.
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-5">
            {portfolioData.personal.summary}
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-8">
            I specialize in{' '}
            <span className="font-semibold text-gray-800">{portfolioData.skills.frontend.slice(0, 3).join(', ')}</span>
            {' '}on the frontend, and{' '}
            <span className="font-semibold text-gray-800">{portfolioData.skills.backend.slice(0, 3).join(', ')}</span>
            {' '}on the backend.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mt-8">
            <div className="glass-card rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
              <h4 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-cyan-500">
                1.5+
              </h4>
              <p className="text-sm font-medium text-gray-500 mt-2">
                Years Exp
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
              <h4 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-cyan-500">
                Full
              </h4>
              <p className="text-sm font-medium text-gray-500 mt-2">
                Stack
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
              <h4 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-cyan-500">
                AWS
              </h4>
              <p className="text-sm font-medium text-gray-500 mt-2">
                Cloud
              </p>
            </div>
          </motion.div>

          {/* Core Technologies */}
          <motion.div variants={itemVariants} className="mt-10">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-5">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                'React.js',
                'Node.js',
                'Express.js',
                'JavaScript',
                'TypeScript',
                'MySQL',
                'MongoDB',
                'AWS'
              ].map((tech) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={tech}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-xl text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors shadow-sm cursor-default interactive"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default AboutSection;