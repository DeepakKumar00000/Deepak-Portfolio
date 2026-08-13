import React, { useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const FloatingBadge = ({ title, className, delay, yOffset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute glass-card px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap shadow-lg flex items-center gap-2 z-20 ${className}`}
    style={{
      transform: 'translateZ(30px)',
    }}
  >
    <motion.div 
      className="w-2 h-2 rounded-full bg-current"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {title}
    <motion.div
      className="absolute inset-0 rounded-full"
      animate={{
        y: yOffset,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }}
    />
  </motion.div>
);

const HeroSection = () => {
  const { name, role, summary, github, linkedin } = portfolioData.personal;
  const containerRef = useRef(null);

  // Parallax on scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  
  // 3D Mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[95vh] flex items-center relative overflow-visible pt-10 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col-reverse md:flex-row items-center justify-between z-10 gap-12 md:gap-0">
        
        {/* Left Side */}
        <motion.div 
          className="md:w-[55%] space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.p variants={itemVariants} className="text-primary-600 font-bold tracking-wider uppercase mb-3 text-sm flex items-center gap-3">
              <span className="w-10 h-[2px] bg-primary-600 inline-block rounded-full"></span>
              Hello, I am
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-4 relative inline-block">
              {name}
              <motion.div 
                className="absolute -right-8 -top-4 w-6 h-6 rounded-full bg-cyan-400 blur-md"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 mb-6">
              {role}
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-xl leading-relaxed">
              {summary.split('.')[0]}. {summary.split('.')[1]}.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="interactive group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all duration-300 bg-primary-600 border border-transparent rounded-xl hover:bg-primary-700 hover:shadow-[0_8px_25px_rgb(37,99,235,0.3)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full -ml-20 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </span>
            </a>
            
            <a
              href="#contact"
              className="interactive inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Contact Me
            </a>
            
            <a
              href="/resume.pdf"
              download="Deepak-Kumar-Resume.pdf"
              className="interactive group inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Download className="mr-2 transition-transform group-hover:-translate-y-1" size={20} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-8 border-t border-gray-200/60">
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-3 group"
            >
              <div className="p-2.5 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <FaGithub size={22} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-medium text-sm">GitHub</span>
            </a>
            <a
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-3 group"
            >
              <div className="p-2.5 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <FaLinkedin size={22} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Visual */}
        <motion.div 
          className="md:w-[45%] flex justify-center items-center relative perspective-[1200px]"
          style={{ y: y1 }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            className="relative w-full max-w-[480px] aspect-square"
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
          >
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/20 to-cyan-300/20 blur-[80px] rounded-full scale-90 -z-10"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="w-full h-full"
              style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
            >
              <img
                src="/full stack1.jpg"
                alt="Full Stack Developer"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div style={{ transform: "translateZ(80px)" }} className="absolute inset-0 pointer-events-none">
              <FloatingBadge title="React.js" className="-top-4 -left-4 text-blue-500" delay={0.8} yOffset={[-10, 10, -10]} />
              <FloatingBadge title="Node.js" className="top-32 -right-8 text-green-600" delay={1.2} yOffset={[10, -10, 10]} />
              <FloatingBadge title="MySQL" className="bottom-24 -left-6 text-orange-500" delay={1.6} yOffset={[-8, 8, -8]} />
              <FloatingBadge title="AWS" className="-bottom-4 right-12 text-yellow-600" delay={2} yOffset={[8, -8, 8]} />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>

      {/* Adding custom keyframes to index.css will handle the shimmer animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default HeroSection;