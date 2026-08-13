import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
            {portfolioData.personal.name.split(' ')[0]}<span className="text-primary-600">.dev</span>
          </h3>
          <p className="text-gray-500 text-sm">
            Building scalable, high-performance web applications.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href={`https://${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub size={20} />
          </a>
          <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center md:text-left">
        <p className="text-xs text-gray-400">
          &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
