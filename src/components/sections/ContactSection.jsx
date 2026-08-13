import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../layout/SectionWrapper';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const { email, phone, location, linkedin, github } = portfolioData.personal;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Currently open for new opportunities. Feel free to reach out!" className="bg-transparent relative overflow-visible">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-100/20 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto relative z-10"
      >
        {/* Contact Info Cards */}
        <div className="md:col-span-5 space-y-6">
          <motion.a 
            variants={itemVariants}
            href={`mailto:${email}`}
            className="interactive glass-card rounded-[2rem] p-6 md:p-8 flex items-center group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] transition-all duration-300 border border-white/60 hover:border-primary-200"
          >
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mr-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email</p>
              <p className="text-gray-900 font-semibold group-hover:text-primary-600 transition-colors truncate max-w-[200px] sm:max-w-none">
                {email}
              </p>
            </div>
          </motion.a>
          
          <motion.a 
            variants={itemVariants}
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            className="interactive glass-card rounded-[2rem] p-6 md:p-8 flex items-center group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] transition-all duration-300 border border-white/60 hover:border-primary-200"
          >
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mr-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Phone</p>
              <p className="text-gray-900 font-semibold group-hover:text-primary-600 transition-colors">
                {phone}
              </p>
            </div>
          </motion.a>
          
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-[2rem] p-6 md:p-8 flex items-center group border border-white/60"
          >
            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mr-6 shadow-sm">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Location</p>
              <p className="text-gray-900 font-semibold">
                {location}
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Call to Action Box */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-7 glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/60 hover:border-primary-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 flex flex-col justify-center items-center text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="relative z-10 w-full">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-tr from-primary-500 to-cyan-400 rounded-[2rem] rotate-12 flex items-center justify-center text-white mx-auto mb-8 shadow-[0_10px_30px_rgba(37,99,235,0.3)] group-hover:rotate-0 transition-transform duration-500"
            >
              <Send size={32} />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-10 max-w-sm mx-auto text-lg leading-relaxed">
              I'm always interested in hearing about new projects, opportunities, or just to chat about technology.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4">
              <a 
                href={`https://${linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="interactive flex-1 py-4 bg-[#0A66C2] text-white rounded-2xl font-semibold flex items-center justify-center hover:bg-[#004182] hover:shadow-[0_8px_20px_rgba(10,102,194,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedin size={22} className="mr-2.5" />
                LinkedIn
              </a>
              <a 
                href={`https://${github}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="interactive flex-1 py-4 bg-[#24292e] text-white rounded-2xl font-semibold flex items-center justify-center hover:bg-black hover:shadow-[0_8px_20px_rgba(36,41,46,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub size={22} className="mr-2.5" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </SectionWrapper>
  );
};

export default ContactSection;
